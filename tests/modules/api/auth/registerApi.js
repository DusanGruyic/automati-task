import { expect } from "@playwright/test";
import { ENDPOINTS, REGISTER_PAYLOAD } from "../../../../fixtures/http";

export class RegisterAPI {
  constructor(page) {
    this.page = page;
  }
}
