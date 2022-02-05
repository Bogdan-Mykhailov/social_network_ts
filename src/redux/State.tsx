export type DialogsDataType = {
  id: number,
  name: string
}
export type MessagesDataType = {
  id: number,
  message: string
}
export type PostDataType = {
  id: number,
  message: string,
  count: number
}

export type ProfilePageType = {
  postsData: PostDataType[]
}

export type DialogsPageType = {
  dialogsData: DialogsDataType[]
  messageData: MessagesDataType[]
}

type RootStateType = {
  profilePage: ProfilePageType,
  dialogsPage: DialogsPageType
}


let state: RootStateType = {
  profilePage: {
    postsData: [
      {id: 1, message: 'ABM corporation got a 450 bln dollars from Meta company.', count: 14515},
      {id: 2, message: 'Bogdan, Andrii and Maryna create ABM corporation in 2021', count: 224513445}
    ]
  },
  dialogsPage: {
    dialogsData: [
      {id: 1, name: 'Liam'},
      {id: 2, name: 'Oliver'},
      {id: 3, name: 'Emma'},
      {id: 4, name: 'Benjamin'},
      {id: 5, name: 'Harper'},
    ],
    messageData: [
      {id: 1, message: 'Dinner tonight?'},
      {id: 2, message: 'How\'s the new coffe shop by you guys?'},
      {id: 3, message: 'Call me back! 😘'},
      {id: 4, message: 'Party tonnight??? 🍸'},
      {id: 5, message: 'Thats sounds good. How is your Wednesday?'},
    ]
  }
}

export default state;