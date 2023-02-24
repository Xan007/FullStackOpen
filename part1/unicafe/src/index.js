import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({ text }) => (<header><h1>{text}</h1></header>)

const Button = ({ handleClick, text }) => {
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  const positive = good/all || 0
  const average = (good - bad)/all || 0

  return (
    <>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>All {all}</p>
      <p>Average {positive}</p>
      <p>Positive {average}%</p>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

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

  return (
    <>
      <Header text="Give feedback" />

      <Button handleClick={incrementComment("good")} text="good" />
      <Button handleClick={incrementComment("neutral")} text="neutral" />
      <Button handleClick={incrementComment("bad")} text="bad" />

      <Header text="Statistics" />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)