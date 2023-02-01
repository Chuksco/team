import React from 'react'
import './App.css'
// import Header from './Header'
// import Content from './Content'
// import Footer from './Footer'
import { useState } from 'react'



function App(props) {
const [name, setName] = useState("");
const [age, setAge] = useState(100);
const [isMale, setIsMale] = useState(true);

  return (
      <div>
        <h1>My name is {name}</h1>
        <h2>I am {age} years old</h2>
        <h2>I am a {isMale ? "Male" : "Female"}</h2>


        <h4>I am feeling {props.emotion}</h4>
        {/* <Header />
        <Content />
        <Footer /> */}
      </div>
  )
}

export default App
