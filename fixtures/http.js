export const STATUS_CODES = {
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

const apiAuth = "Account/v1";

export const ENDPOINTS = {
  LOGIN: `${apiAuth}/Login`,
  REGISTER: `${apiAuth}/User`,
  GEN_TOKEN: `${apiAuth}/GenerateToken`,
};

export const URLS = {
  LOGIN: "demoqa.com/login",
  REGISTER: "demoqa.com/register",
  PROFILE: "demoqa.com/profile",
};

export default { URLS, ENDPOINTS, METHODS, STATUS_CODES };
