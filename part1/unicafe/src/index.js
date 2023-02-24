import React, { useState } from 'react'
//import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';

const Header = ({ text }) => (<><h1>{text}</h1></>)

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
      <tr>
        <th>{text}</th>
        <td>{value}</td>
      </tr>
    </>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad

  if (all === 0)
    return (<><p>No feedback given</p></>)

  const average = ((good - bad)/all).toFixed(1)
  const positive = (good/all).toFixed(3)

  return (
    <table>
      <Statistic text="Good" value={good} />
      <Statistic text="Neutral" value={neutral} />
      <Statistic text="Bad" value={bad} />
      <Statistic text="All" value={all} />
      <Statistic text="Average" value={average} />
      <Statistic text="Positive" value={`${positive * 100}%`} />
    </table>
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

const root = ReactDOMClient.createRoot(document.getElementById('root'))

root.render(<App />)