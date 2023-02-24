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

const Statistic = ({ text, value }) => {
  return (
    <>
      <p>{text} {value}</p>
    </>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  const positive = good/all
  const average = (good - bad)/all

  if (all === 0)
    return (<><p>No feedback given</p></>)

  return (
    <div>
      <Statistic text="Good" value={good} />
      <Statistic text="Neutral" value={neutral} />
      <Statistic text="Bad" value={bad} />
      <Statistic text="All" value={all} />
      <Statistic text="Average" value={average} />
      <Statistic text="Positive" value={`${positive * 100}%`} />
    </div>
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