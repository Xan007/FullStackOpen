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

  const all = good + neutral + bad

  const incrementComment = (commentType) => () => {
    if (commentType === "good") {
      setGood(good + 1)
    }
    else if (commentType === "neutral") {
      setNeutral(neutral + 1)
    }
    else if (commentType === "bad") {
      setBad(bad + 1)
    }
  }
  
  const getPositive = () => (good / all)

  const getAverage = () => (good - bad) / all

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
      <p>All {all}</p>
      <p>Average {getAverage() || 0}</p>
      <p>Positive {getPositive() * 100 || 0}%</p>

      <p></p>
    </>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)