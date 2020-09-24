import REGEX from "../../constants/regex";
export const FIELDS = {
  NAME: "name",
  EMAIL: "email",
  PHONE_NUMBER: "phoneNumber",
  ADDRESS: "address",
  GENDER: "gender",
  PASSWORD: "password",
  CONFIRM_PASSWORD: "confirmPassword",
  PHOTO: "photo",
};

export const VALIDATION_SCHEMA = {
  [FIELDS.NAME]: {
    isRequired: true,
    regex: REGEX.alphabet,
    message: "Invalid Name",
  },
  [FIELDS.EMAIL]: {
    isRequired: true,
    regex: REGEX.email,
    message: "Invalid Email",
  },
  [FIELDS.PHONE_NUMBER]: {
    isRequired: true,
    regex: REGEX.phoneNumber,
    message: "Invalid Phone number",
  },
  [FIELDS.ADDRESS]: {
    isRequired: true,
  },
  [FIELDS.GENDER]: {
    isRequired: true,
  },
  [FIELDS.PASSWORD]: {
    isRequired: true,
    regex: REGEX.password,
    message:
      "Password must contain at least one numeric digit, one uppercase and one lowercase letter",
  },
  [FIELDS.CONFIRM_PASSWORD]: {
    isRequired: true,
    regex: REGEX.password,
    message:
      "Password must contain at least one numeric digit, one uppercase and one lowercase letter",
  },
  [FIELDS.PHOTO]: {
    isRequired: true,
  },
};
