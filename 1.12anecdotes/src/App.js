import { useState } from "react";

const Headline = ({text}) => {
    return(
        <div>
            <h2>
                {text}
            </h2>
        </div>
    )    
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [ selection, setSelection ] = useState(0)
  let arr = Array(8).fill(0)
  const [ score, setScore] = useState(arr)
  const [ mostVote, SetMostVote] = useState([0, 0])


  const handleVote = () => {
    let mx = 0
    let iOfMx = 0
    console.log(selection)
    let cop = {...score}
    cop[selection] += 1
    for(let i = 0; i < 8; i++){
        if(cop[i] > mx){
            mx = cop[i];
            iOfMx = i;
        }
    }
    let x = [ iOfMx, mx]
    SetMostVote(x)
    setScore(cop)
    console.log(score)

  }
 
  const pickRandom = () => {
    let n = Math.floor(Math.random() * 8)
    console.log(n)
    setSelection(n)
  }

  return(
    <div>

        <Headline text = "Anecdote of the day" />

        <p>
            {anecdotes[selection]}
        </p>
        <p>
            has {score[selection]} votes
        </p>
        <button onClick={handleVote}>
            Vote
        </button>
        <button onClick = {pickRandom} >
            next anecdote
        </ button>

        <Headline text="Anecdote with most vote" />

        <div>
            <p>
                {anecdotes[mostVote[0]]}
            </p>
            <p>
                has {mostVote[1]} votes
            </p>
        </div>


    </div>
  )
}

export default App