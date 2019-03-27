import React from 'react';
// import logo from './logo.svg';
import './App.css';
import post from "./post"


const App = () => 

   (
    <div>
    <h1>My react blog</h1>
    
    
    {post.slice(0, 5).map((posts) => (
      <div className="appClass">
      <h3>{posts.title}</h3>
      <p>{posts.body}</p>
      </div>
      
    ))}

    
    </div>

  )
    console.log(App)


export default App;
