import { addNewMessageTextAC, updateMessageAC } from "./dialogs-reducer";
import {PostDataType, ProfilePageType} from "./Store";

export type ActionsTypes =
  ReturnType<typeof addPostAC> |
  ReturnType<typeof updatePostAC> |
  ReturnType<typeof addNewMessageTextAC> |
  ReturnType<typeof updateMessageAC>

export const addPostAC = (postText: string) => {
  return {
    type: 'ADD-POST',
    postText: postText
  } as const
}
export const updatePostAC = (newText: string) => {
  return {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: newText
  } as const
}

export let realTime = `${new Date().getHours()} : ${(new Date().getMinutes() < 10 ? '0' : '') + new Date().getMinutes()}`

export const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {

  switch (action.type) {
    case "ADD-POST": {
      const newPost: PostDataType = {
        id: new Date().getTime(),
        message: action.postText,
        count: 0,
        time: realTime
      };
      state.postsData.push(newPost);
      state.newPostText = ''
      return state;
    }
    case "UPDATE-NEW-POST-TEXT": {
      state.newPostText = action.newText;
      return state;
    }

    default:
      return state;
  }
}