export const checkFormValidate = (email, password) => {
  const emailvalidator = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(email);
  const passwordvalidator =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  if (!emailvalidator) return "Invalid email address";
  if (!passwordvalidator) return "Invalid password";
  return null;
};
