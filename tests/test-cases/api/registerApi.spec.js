import { expect, test } from "@playwright/test";
import { RegisterApi } from "../../../tests/modules/api/auth/registerApi.js";
import { REGISTER_PAYLOAD } from "../../../fixtures/payloadData";

test.describe("Register via Api", () => {
  let registerApi;

  test.beforeEach("Instantiate class", async ({ page }) => {
    registerApi = new RegisterApi(page);
  });

  test("Should register a new user", async () => {
    const payload = {
      ...REGISTER_PAYLOAD,
      userName: `user${Date.now()}`,
    };
    const response = await registerApi.register(payload);
    expect(response).toHaveProperty("userID");
    expect(response).toHaveProperty("username", payload.userName);
  });

  test("Register user with existing username", async () => {
    const payload = {
      ...REGISTER_PAYLOAD,
      userName: "user1",
    };
    const response = await registerApi.register(payload);
    expect(response).toHaveProperty("code");
    expect(response).toHaveProperty("message", "User exists!");
  });

  test("Register user with missing required fields", async () => {
    const payload = {
      userName: `user${Date.now()}`,
    };
    const response = await registerApi.register(payload);
    expect(response).toHaveProperty("code");
    expect(response).toHaveProperty(
      "message",
      "UserName and Password required."
    );
  });
});
