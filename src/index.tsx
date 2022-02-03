import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
  {id: 1, name: 'Liam'},
  {id: 2, name: 'Oliver'},
  {id: 3, name: 'Emma'},
  {id: 4, name: 'Benjamin'},
  {id: 5, name: 'Harper'},
]
let messageData = [
  {id: 1, message: 'Dinner tonight?'},
  {id: 2, message: 'How\'s the new coffe shop by you guys?'},
  {id: 3, message: 'Call me back! 😘'},
  {id: 4, message: 'Party tonnight??? 🍸'},
  {id: 5, message: 'Thats sounds good. How is your Wednesday?'},
]
let postsData = [
  {id: 1, message: 'ABM corporation got a 450 bln dollars from Meta company.', count: 14515},
  {id: 2, message: 'Bogdan, Andrii and Maryna create ABM corporation in 2021', count: 224513445}
]


ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogsData} messages={messageData} posts={postsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
