import React from 'react'
import{Link} from "react-router-dom"

function Home() {
  return (
    <div>
        <h3>hi click here to go to page:post.jsx
            <Link to="/post">go</Link>
        </h3>
    </div>
  )
}

export default Home