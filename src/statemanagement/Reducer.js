/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
  switch (action.type) {
    case "set__user":
      return {
        ...state,
        user: action.payload,
      };
      
    default:
      return state;
  }
};
