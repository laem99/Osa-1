import React from "react";

const Header = (props) => <h1>{props.course}</h1>;

const Part = (props) => <p>{props.part.name} {props.part.exercises}</p>

const Content = (props) => {
  return (
    <>
      {props.parts.map(part => <Part key={part.name} part={part} />)}
    </>
  )
}

const Total = (props) => {

  const exercisesTotal = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises;

  return (
    <p>Numebr of exercises {exercisesTotal}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App;