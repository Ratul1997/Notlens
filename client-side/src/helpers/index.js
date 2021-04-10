const checkValidPhoneNumber = phoneNumber => {
  if (phoneNumber.length < 11) return false;
  return true;
};

const helpers = [
  checkValidPhoneNumber
];
export default helpers;
