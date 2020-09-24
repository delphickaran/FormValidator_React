import REGEX from "../../constants/regex";
export const FIELDS = {
  EMAIL: "email",
  PASSWORD: "password",
};

export const VALIDATION_SCHEMA = {
  [FIELDS.EMAIL]: {
    isRequired: true,
    regex: REGEX.email,
    message: "Invalid Email",
  },
  [FIELDS.PASSWORD]: {
    isRequired: true,
    regex: REGEX.password,
    message:
      "Password must contain at least one numeric digit, one uppercase and one lowercase letter",
  },
};
