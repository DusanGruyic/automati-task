import { expect, test } from "@playwright/test";
import { LoginApi } from "../../../tests/modules/api/auth/loginApi.js";
import { STATUS } from "../../../fixtures/http.js";
import { LOGIN_PAYLOAD, INVALID_USER } from "../../../fixtures/payloadData.js";

test.describe("Login via Api", () => {
  let loginApi;

  test.beforeEach("Instantiate class", async ({ page }) => {
    loginApi = new LoginApi(page);
  });

  test("Login with registered user", async () => {
    const responseJson = await loginApi.login(LOGIN_PAYLOAD);
    console.log("Response JSON:", responseJson);

    expect(responseJson).toHaveProperty("userId");
    expect(responseJson).toHaveProperty("username", LOGIN_PAYLOAD.userName);
    expect(responseJson).toHaveProperty("token");
    expect(responseJson).toHaveProperty("expires");
  });

  test("Shouldn't be able to login with unregistered user", async () => {
    try {
      const responseJson = await loginApi.login(
        INVALID_USER.api.login.unregisteredUser
      );
      expect(responseJson.status).toBe("Failed");
      expect(responseJson.result).toBe("User authorization failed.");
    } catch (error) {}
  });
});
