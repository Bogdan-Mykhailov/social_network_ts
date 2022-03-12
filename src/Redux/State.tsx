import {RerenderEntireTree} from "../RerenderEntireTree";

export type DialogsDataType = {
  id: number,
  name: string,
  avatar: string
}
export type MessagesDataType = {
  id: number,
  message: string,
  name: string,
  avatar: string,
  time: string
}
export type PostDataType = {
  id: number,
  message: string,
  count: number
}
export type ProfilePageType = {
  postsData: PostDataType[]
  newPostText: string
}
export type DialogsPageType = {
  dialogsData: DialogsDataType[]
  messageData: MessagesDataType[]
}
export type RootStateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
}

let state: RootStateType = {
  profilePage: {
    postsData: [
      {id: 1, message: 'ABM corporation got a 450 bln dollars from Meta company.', count: 14515},
      {id: 2, message: 'Bogdan, Andrii and Maryna create ABM corporation in 2021', count: 224513445}
    ],
    newPostText: ''
  },
  dialogsPage: {
    dialogsData: [
      {id: 1, name: 'Liam', avatar: 'https://cdn.pixabay.com/photo/2021/10/13/11/29/girl-6706267__340.jpg'},
      {id: 2, name: 'Oliver', avatar: 'https://cdn.pixabay.com/photo/2021/10/13/11/29/girl-6706267__340.jpg'},
      {id: 3, name: 'Emma', avatar: 'https://cdn.pixabay.com/photo/2021/10/13/11/29/girl-6706267__340.jpg'},
      {id: 4, name: 'Benjamin', avatar: 'https://cdn.pixabay.com/photo/2021/10/13/11/29/girl-6706267__340.jpg'},
      {id: 5, name: 'Harper', avatar: 'https://cdn.pixabay.com/photo/2021/10/13/11/29/girl-6706267__340.jpg'},
    ],
    messageData: [
      {
        id: 1,
        name: 'Liam',
        message: 'Dinner tonight?',
        avatar: 'https://cdn.pixabay.com/photo/2021/10/13/11/29/girl-6706267__340.jpg',
        time: '12:17'
      },
      {
        id: 2, name: 'Oliver',
        message: 'How\'s the new coffe shop by you guys dljhfgsdhfs oisdfoshfskdhfr sdfosdfo shfdl sdhflk s sdfl jsldf  he new coffe shop by you guys dljhfgsdhfs oisdfoshfskdhfr sdfosdfo shfdl sdhflk s sdfl jsldfhe new coffe shop by you guys dljhfgsdhfs oisdfoshfskdhfr sdfosdfo shfdl sdhflk s sdfl jsldfhe new coffe shop by you guys dljhfgsdhfs oisdfoshfskdhfr sdfosdfo shfdl sdhflk s sdfl jsldfhe new coffe shop by you guys dljhfgsdhfs oisdfoshfskdhfr sdfosdfo shfdl sdhflk s sdfl jsldfhe new coffe shop by you guys dljhfgsdhfs oisdfoshfskdhfr sdfosdfo shfdl sdhflk s sdfl jsldfsdlf jsldf sdf ',
        avatar: 'https://cdn.pixabay.com/photo/2021/10/13/11/29/girl-6706267__340.jpg',
        time: '23:22'
      },
      {
        id: 3,
        name: 'Emma',
        message: 'Call me back! 😘',
        avatar: 'https://cdn.pixabay.com/photo/2021/10/13/11/29/girl-6706267__340.jpg',
        time: '20:04'
      },
      {
        id: 4,
        name: 'Benjamin',
        message: 'Party tonnight??? 🍸',
        avatar: 'https://cdn.pixabay.com/photo/2021/10/13/11/29/girl-6706267__340.jpg',
        time: '07:23'
      },
      {
        id: 5,
        name: 'Harper',
        message: 'Thats sounds good. How is your Wednesday?',
        avatar: 'https://cdn.pixabay.com/photo/2021/10/13/11/29/girl-6706267__340.jpg',
        time: '14:57'
      },
    ]
  },
  // sideBar{}
}
export const addPost = (postText: string) => {
  const newPost: PostDataType = {
    id: new Date().getTime(),
    message: postText,
    count: 0
  };
  state.profilePage.postsData.push(newPost);
  state.profilePage.newPostText = ''
  RerenderEntireTree(state)
}

export const updateNewPostText = (newText: string) => {
  state.profilePage.newPostText = newText;
  RerenderEntireTree(state)
}

export default state;
