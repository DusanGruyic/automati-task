import { expect } from "@playwright/test";
import { METHODS } from "http";

export default class BaseAPI {
  constructor(page) {
    this.page = page;
  }

  async returnResponseJson(responsePromise) {
    const response = await responsePromise;
    const responseJson = await response.json();
    return responseJson;
  }

  async post({ url, payload, authToken = this.authToken }) {
    const apiContext = await request.newContext();
    this.response = await apiContext[METHODS.POST](url, {
      headers: getHeaders(authToken),
      data: payload,
    });

    await this.setResponseJSON(await this.response.json());
    await this.setResponseStatusCode(await this.response.status());

    return this.getResponseJSON();
  }

  async delete({ url, authToken = this.authToken }) {
    const apiContext = await request.newContext();

    this.response = await apiContext[METHODS.DELETE](url, {
      headers: getHeaders(authToken),
    });

    await this.setResponseJSON(await this.response.json());
    await this.setResponseStatusCode(await this.response.status());

    return this.getResponseJSON();
  }

  getResponseStatusCode() {
    return this.statusCode;
  }

  async setResponseStatusCode(value) {
    try {
      this.statusCode = value;
    } catch (err) {
      return console.error(err);
    }
  }

  getResponseJSON() {
    return this.responseJSON;
  }
  async setResponseJSON(value) {
    try {
      this.responseJSON = await value;
    } catch (err) {
      return console.error(err);
    }
  }
}
