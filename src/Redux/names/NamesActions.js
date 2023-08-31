import { ADD_NAME } from "./NameTypes";

export const addName = (newName) => {
  return {
    type: ADD_NAME,
    payload: newName,
  };
};
