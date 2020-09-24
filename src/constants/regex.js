const regex = {
  alphabet: /^[a-zA-Z ]*$/,
  number: /^[0-9]+$/,
  alphaNumeric: /^[a-zA-Z0-9 ]+$/,
  phoneNumber: /^[1-9][0-9]{9}$/,
  email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
};

export default regex;
