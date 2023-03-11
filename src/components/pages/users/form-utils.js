export const validateInput = (formData) => {
  let errors = [];
  if (!formData.username.match(/^[a-zA-Z0-9]*$/) || formData.username === "") {
    errors.push("Please enter valid username!");
  }
  if (formData.email !== undefined) {
    if (
      !formData.email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/) ||
      formData.email === ""
    ) {
      errors.push("Please enter valid e-mail address!");
    }
  }
  if (
    !formData.password.match(/^([a-zA-Z0-9@*#]{6,15})$/) ||
    formData.password === ""
  ) {
    errors.push("please enter valid password!!");
  }
  return errors;
};

export const isValid = (users, loginForm) => {
  for (let i = 0; i < users.length; ++i) {
    if (
      users[i].username === loginForm.username &&
      users[i].password === loginForm.password
    ) {
      return true;
    }
  }
  return false;
};

export const signupFormat = {
  username: "",
  email: "",
  password: "",
};

export const loginFormat = {
  username: "",
  password: "",
};

export const usernameRegex = /^[a-zA-Z0-9]*$/;
export const emailRegex = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/;
export const passwordRegex = /^([a-zA-Z0-9@*#]{6,15})$/;

export const handleMouseDownPassword = (event) => {
  event.preventDefault();
};
