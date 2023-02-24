import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({text}) => (<header><h1>{text}</h1></header>)

const Button = ({ handleClick, text }) => {
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementComment = (commentType) => () => {
    switch (commentType) {
      case "good":
        setGood(good + 1)
        break
      case "neutral":
        setNeutral(neutral + 1)
        break
      case "bad":
        setBad(bad + 1)
        break
      default: 
        break
    }
  }

  return (
    <>
      <Header text="Give feedback"/>

      <Button handleClick={incrementComment("good")} text="good"/>
      <Button handleClick={incrementComment("neutral")} text="neutral"/>
      <Button handleClick={incrementComment("bad")} text="bad"/>

      <Header text="Statistics"/>

      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
    </>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)