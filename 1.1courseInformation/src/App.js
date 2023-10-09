

const Header = (props) => {
  console.log(props);
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
    
  )
}

let sum = 0;

const Part = ({name, exercises}) => {
  sum += Number(exercises);
  console.log(name, exercises);
  return(
    <div>
      <p>
        {name} {exercises}
      </p>
    </div>
  );
}
const Content = ({parts}) => {
  console.log(parts)

  return(
    <div>
      <Part name = {parts[0].name} exercises={parts[0].exercises} />
      <Part name = {parts[1].name} exercises={parts[1].exercises} />
      <Part name = {parts[2].name} exercises={parts[2].exercises} />
    </div>
  );
}

const Total = () => {
  return(
    <div>
      <p>
        Number of excercises {sum}
      </p>
    </div>
  );
}

const App = () => {


  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  sum = 0;
  return (
    <div>
      <Header course = {course}/>
      <Content parts = {parts} />
      <Total />
    </div>
  )
}
export default App    