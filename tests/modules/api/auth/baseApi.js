import { expect } from "@playwright/test";

export class BaseApi {
  constructor(page, token = "") {
    this.page = page;
    this.token = token;
  }

  async post(endpoint, payload, statusCode = 200) {
    console.log(endpoint);
    console.log(payload);
    const response = await this.page.request.post(endpoint, {
      headers: this.getHeaders(),
      data: payload,
    });
    console.log(await response);

    expect(response.status()).toBe(statusCode);
    const responseJson = await response.json();
    return responseJson;
  }

  async get(endpoint, id = "", statusCode = 200) {
    const response = await this.page.request.get(`${endpoint}/${id}`, {
      headers: this.getHeaders(),
    });
    expect(response.status()).toBe(statusCode);
    const responseJson = await response.json();
    return responseJson;
  }

  async put(endpoint, id, payload, statusCode = 200) {
    const response = await this.page.request.put(`${endpoint}/${id}`, {
      headers: this.getHeaders(),
      data: payload,
    });
    expect(response.status()).toBe(statusCode);
    const responseJson = await response.json();
    return responseJson;
  }

  async delete(endpoint, id) {
    const response = await this.page.request.delete(`${endpoint}/${id}`, {
      headers: this.getHeaders(),
    });
    const responseJson = await response.json();
    return responseJson;
  }

  getToken() {
    return this.token;
  }

  getHeaders() {
    return {
      Accept: "application/json",
    };
  }
}
