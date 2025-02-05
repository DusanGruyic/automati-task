export const REGISTER_PAYLOAD = {
  firstname: "test",
  lastname: "user",
  username: "user1",
  password: "Test123!",
};

export const LOGIN_PAYLOAD = {
  userName: "user1",
  password: "Test123!",
};

export const REGISTRATION_FORM = {
  FIRSTNAME: "user",
  LASTNAME: "test",
  EMAIL: "test@123.com",
  AGE: "2",
  SALARY: "222",
  DEPARTMENT: "learning",
};

export const STUDENT_FORM = {
  FIRSTNAME: "test",
  LASTNAME: "user",
  EMAIL: "user@test.com",
  MOBILE: "1234567890",
  BIRTHDATE: "01 Jan 2000",
  SUBJECT: "Maths",
  HOBBIES: "Sports",
  ADDRESS: "test address",
  STATE: "NCR",
  CITY: "Delhi",
};

export const INVALID_USER = {
  api: {
    login: {
      unregisteredUser: {
        userName: "aaaaaaaa",
        password: "aaaaaaaaa",
      },
    },
  },
};
