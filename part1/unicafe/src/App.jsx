import { useState } from 'react'

const Statistics = ({ good, neutral, bad, }) => {

  const allRatings = good + neutral + bad;
  const avgRating = (good + (bad*-1)) / allRatings || 0
  const posRating = ( good / allRatings ) * 100 || 0

  if( allRatings === 0) return <p>No feedback</p>
    return (
      <table>
        <tbody>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="Average" value={avgRating} />
          <StatisticLine text="Positive" value={posRating + '%'} />
        </tbody>
      </table>
    )
}

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td> 
      <td>{value}</td>
    </tr>
  )
}


const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{ text }</button>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood( good + 1)
  const handleNeutral = () => setNeutral( neutral + 1)
  const handleBad = () => setBad( bad + 1)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleGood} text="Good" />
      <Button handleClick={handleBad} text="Neutral" />
      <Button handleClick={handleNeutral} text="Bad" />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App