import React from 'react';
import './messages.module.css'


type messagesPropsType = {
  title: string,
  id: number
}

const Messages = (props: messagesPropsType) => {

  return (
    <div>
      messages
        {/*<Messages title={} id={}/>*/}
    </div>
  );
};

export default Messages;