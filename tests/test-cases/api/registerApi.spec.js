import { test, expect } from "@playwright/test";
import { REGISTER_PAYLOAD } from "../../../fixtures/payloadData";
import { RegisterAPI } from "../../modules/api/auth/registerApi";

test.describe("Registration API Tests", () => {
  let registerAPI;

  test.beforeEach(async ({ request }) => {
    registerAPI = new RegisterAPI(request, API_BASE_URL);
  });

  test("Successful registration with valid data", async () => {
    const payload = registerAPI.generateUniquePayload();
    const response = await registerAPI.register(payload);
    expect(response.status()).toBe(201);
  });
});
