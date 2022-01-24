import React from "react";
import './profile.css'

const Profile = () => {
  return (
    <div className='profile'>
      <div>
        <img src="https://cdn.pixabay.com/photo/2022/01/16/10/51/leaves-6941709_1280.jpg" alt=""/>
      </div>
      <div>avatar + description</div>
      <div>My posts
        <div>
          New post
        </div>
        <div>
          <div>
            post1
          </div>
          <div>
            post2
          </div>
        </div>
      </div>
    </div>
  )
}
export default Profile;