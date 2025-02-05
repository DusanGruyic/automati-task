import { BaseApi } from "./baseApi";
import { ENDPOINTS } from "../../../../fixtures/http";

export class RegisterApi extends BaseApi {
  constructor(page) {
    super(page);
    this.endpoint = ENDPOINTS.REGISTER;
  }
  async register(payload) {
    return await this.post(this.endpoint, payload);
  }
}
