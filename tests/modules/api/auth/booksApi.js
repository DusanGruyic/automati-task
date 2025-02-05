import { ENDPOINTS } from "../../../../fixtures/http";
import { BaseApi } from "./baseApi";

export class BooksApi extends BaseApi {
  constructor(page, token = "") {
    super(page, token);
    ENDPOINTS.BOOKS;
  }

  async getAllBooks() {
    return await this.get(ENDPOINTS.BOOKS);
  }

  async addBookToProfile(bookPayload) {
    return await this.post(ENDPOINTS.BOOKS, bookPayload);
  }
}
