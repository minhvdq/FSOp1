import { useState } from 'react'

const Headline = ({name}) =>{
  console.log(name)
  return(
    <>
      <h2>
        {name}
      </h2>
    </>
  )
}

const StatisticLine = ({text, value}) => {
  return(
    <tbody>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </tbody>
    
  )
}

const Statistics = ({good, neutral, bad, all, avg, pos}) => {
  if(all === 0){
    return(
      <div>
        <p>
          No feedback given
        </p>
      </div>
    )
  }
  return(
    <table> 
      <StatisticLine text = "good" value={good} />
      <StatisticLine text = "neutral" value={neutral} />
      <StatisticLine text = "bad" value={bad} />
      <StatisticLine text = "all" value={all} />
      <StatisticLine text = "average" value={avg} />
      <StatisticLine text = "positive" value={pos} />
    </table>
  )
}

const Button = ({text, handleclick}) => {
  return(
    <button onClick = {handleclick}>
      {text}
    </button>
  )
}

const App = () => {
  const [ goodCount, goodAdjust ] = useState(0);
  const [ neutralCount, neutralAdjust ] = useState(0);
  const [ badCount, badAdjust ] = useState(0);
  const [avg, setAvg] = useState(0)
  const [pos, setPos ] = useState(0)
  const [all , setAll] = useState(0)

  let g = 0;
  let n = 0; 
  let b = 0;
  let total = 0;
  let totalPoint = 0;

  const hcg = () => {
    g = goodCount + 1;
    goodAdjust(g);
    console.log(goodCount)
    total = g + neutralCount + badCount
    setAll(total)
    let valPos = (g/total)*100
    setPos(valPos)
    totalPoint = g - badCount
    let val = totalPoint/total
    setAvg(val)
    console.log(totalPoint, val, valPos)
  }

  const hcn = () => {
    n = neutralCount + 1;
    neutralAdjust(n);
    console.log(neutralCount)
    total = n + goodCount + badCount
    setAll(total)
    let valPos = (goodCount/total)*100
    setPos(valPos)
    totalPoint = goodCount - badCount
    let val = totalPoint/total
    setAvg(val)
    console.log(totalPoint, val)
  }

  const hcb = () => {
    b = badCount + 1;
    badAdjust(b);
    console.log(badCount)
    total = b + goodCount + neutralCount
    setAll(total)
    let valPos = (goodCount/total)*100
    setPos(valPos)
    totalPoint = goodCount - b
    let val = totalPoint/total
    setAvg(val)
    console.log(totalPoint,val)
  }

  return(
    <div>
      <Headline name = "give feedback"/>
      <Button text = "good" handleclick={hcg} />
      <Button text = "neutral" handleclick={hcn} />
      <Button text = "bad" handleclick={hcb} />
      <Headline name  = "statistics" />
      <Statistics good={goodCount} neutral={neutralCount} bad={badCount} all={all} avg={avg} pos={`${pos}%`} />
    </div>
  )
}

export default App 