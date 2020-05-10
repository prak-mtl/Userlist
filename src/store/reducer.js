const intialState = {
  token: "",
  users: [],
  filtered: [],
  isAuthenticated: false,
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case "ADD_TOKEN":
      return {
        ...state,
        token: action.payload.token,
      };

    case "ADD_USERS":
      return {
        ...state,
        users: action.payload.users,
        filtered: action.payload.users,
        isAuthenticated: action.payload.isAuthenticated,
      };

    case "DEFAULT_FILTER":
      let listArr = [];      
      if(state.filtered.length < 7){
        listArr = state.users;
      }
      let filteredList = listArr.filter(
        (item) =>
          item.age >= 20 &&
          item.age < 30 &&
          (item.firstName + " " + item.lastName).length >= 10
      );
      return {
        ...state,
        filtered: filteredList,
      };

    case "CUSTOM_FILTER":
      let listArray = [];
      if(state.filtered.length < 7){
        listArray = state.users;
      }
      let customFilteredList = listArray.filter(
        (item) =>
          item.age >= action.payload.minAge &&
          item.age < action.payload.maxAge &&
          (item.firstName + " " + item.lastName).length >= 10
      );
      return {
        ...state,
        filtered: customFilteredList,
      };

    case "RESET_DATA":
      return {
        ...state,
        filtered: state.users,
      };

    case "LOGOUT":
      return {
        ...state,
        token: "",
        users: [],
        isAuthenticated: false,
      };

    default:
      return state;
  }
};

export default reducer;
