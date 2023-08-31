import { ADD_NAME } from "./NameTypes";

const initialState = [];

const namesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NAME:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default namesReducer;
