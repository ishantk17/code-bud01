import React from 'react'
import {FaUserCircle} from 'react-icons/fa';
import "bootstrap/dist/css/bootstrap.css"
import "../App.css"
import Comments from "../comments/Comments";
function About() {
  return (
    <div>
    <h1>Doubt Section</h1>
    <Comments
      commentsUrl="http://localhost:3000/comments"
      currentUserId="1"
     />
     </div>
  )
}

export default About
