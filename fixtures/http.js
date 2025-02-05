export const STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  BAD_ENTITY: 422,
  SERVER_ERROR: 500,
};

export const METHODS = {
  GET: "get",
  POST: "post",
  PUT: "put",
  PATCH: "patch",
  DELETE: "delete",
  HEAD: "head",
};

export const BASE_API_URL = "https://demoqa.com/";

export const ENDPOINTS = {
  BASE_API_URL,
  LOGIN: `${BASE_API_URL}Account/v1/Login`,
  REGISTER: `${BASE_API_URL}Account/v1/User`,
  GEN_TOKEN: `${BASE_API_URL}Account/v1/GenerateToken`,
  BOOKS: `${BASE_API_URL}BookStore/v1/Books`,
};

export const URLS = {
  LOGIN: "demoqa.com/login",
  REGISTER: "demoqa.com/register",
  PROFILE: "demoqa.com/profile",
};

export const ERRORS = {
  INVALID_CREDENTIALS: "Invalid username or password!",
  TAKEN_USERNAME: "User exists!",
  NO_CREDENTIALS: "UserName and Password required.",
  SHORT_PASSWORD:
    "Passwords must have at least one non alphanumeric character, one digit ('0'-'9'), one uppercase ('A'-'Z'), one lowercase ('a'-'z'), one special character and Password must be eight characters or longer.",
};

export default { URLS, ENDPOINTS, METHODS, STATUS, BASE_API_URL, ERRORS };
