import Axios from "axios"
import './App.css';
import { useState } from 'react'
import styled from "styled-components"

function App() {
  const [joke, setjoke] = useState("")
  const [answer, setanswer] = useState("")
  const getJoke = () => {
    Axios.get("https://official-joke-api.appspot.com/random_joke").then((response) => {
      setjoke("Joke: "+response.data.setup +" ");
      setanswer("Punchline: " + response.data.punchline);
    })
  }
  
  return (
    <Container>
      <h1>Jokes</h1>
      <img src="https://i.pinimg.com/originals/4e/a8/2f/4ea82f283540b39e82229317c404b09d.gif" alt="mich"/>
      <br/>
      <button onClick={getJoke}>Jokes</button>
      <h2>{joke}</h2>
      <br/>
      <div className="marquee">
        <h2 id="show">{answer}</h2>
      
</div>
      
      
    </Container>
  );
}

export default App;

const Container = styled.div`
  background-image: url("https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&h=650&w=940");
  justify-content: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  background-size: cover;
  >h1{
    text-transform: uppercase;
    text-align: center;
  }
  >img{
    justify-content: center;
    margin: 20px auto;
    display: flex;
  }
  >button{
    background: rgba(0,0,250,0.9);
    color: #fff;
    height: 40px;
    padding: 10px;
    border-radius: 5px;
    border: none;
    margin: 0 150px 0 150px;
  }
  .marquee {
    color: blue;
    white-space: nowrap;
    overflow: hidden;
    box-sizing: border-box;
}
.marquee h2 {
    display: inline-block;
    padding-left: 100%;
    animation: marquee 12s linear infinite;
}
@keyframes marquee {
    0%   { transform: translate(0, 0); }
    100% { transform: translate(-100%, 0); }
}
>h2{
  text-align: center;
}
`