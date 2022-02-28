const userData = (state = [], action) => {
  switch (action.type) {
    case "REGISTER":
      return { ...state, register: action.payload };
    case "LOGIN":
      return { ...state, login: action.payload, loggedIn: true };
    default:
      return state;
  }
};

export default userData;
