const initState = {
  users: [
    { id: 1, name: "John" },
    { id: 2, name: "Amie" },
  ],
  posts: [],
};
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_USER":
      let users = state.users;
      users = users.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        users,
      };
    // case y:
    //   // code block
    //   break;
    case "CREATE_USER":
      let id = Math.floor(Math.random() * 1000);
      let name = action.payload;
      let user = { id: id, name: name };
      return {
        ...state,
        users: [...state.users, user],
      };
    case "EDIT_USER":
      let listUsersCopy = [...state.users];
      console.log("check ...users ", ...state.users);
      let userEdit = action.payload.editUser;
      let lastUser = action.payload.user;
      let objIndex = listUsersCopy.findIndex((item) => item.id === lastUser.id);
      listUsersCopy[objIndex].name = userEdit.name;
      return {
        users: listUsersCopy,
      };

    default:
      return state;
  }
};
export default rootReducer;
