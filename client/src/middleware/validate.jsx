const validate = (state) => {
  const error = {};

  // if (!state.name.length || state.name.length > 15) {
  //   error.name = "Name must be between 1 and 15 characters!";
  // }

  // if (!state.image) {
  //   error.image = "Required image!!";
  // }

  // if (state.image && !/^http.+.\.(jpg|jpeg|gif|png|webp)$/.test(state.image)) {
  //   error.image = "Invalid image!";
  // }

  return error;
};

export default validate;
