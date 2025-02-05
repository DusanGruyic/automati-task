import { expect, test } from "@playwright/test";
import { LOGIN_PAYLOAD, BOOK_PAYLOAD } from "../../../fixtures/payloadData.js";
import { LoginApi } from "../../../tests/modules/api/auth/loginApi.js";
import { BooksApi } from "../../modules/api/auth/booksApi.js";

test.describe("Books API", () => {
  let booksApi;
  let loginApi;
  let token;
  let userId;

  test.beforeEach(async ({ page }) => {
    loginApi = new LoginApi(page);
    const loginResponse = await loginApi.login(LOGIN_PAYLOAD.login);
    token = loginResponse.token;
    userId = loginResponse.userId;
    booksApi = new BooksApi(page, token);
  });

  test("Should get all books", async () => {
    const responseJson = await booksApi.getAllBooks();
    console.log("Response JSON:", responseJson);

    expect(responseJson).toHaveProperty("books");
    expect(Array.isArray(responseJson.books)).toBe(true);
  });
});
