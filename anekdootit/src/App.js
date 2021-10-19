import { useState } from "react";

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const Header = ({ text }) => <h1>{text}</h1>

const MostVotedAnecdote = ({ anecdote }) => <p>{anecdote}</p>

const App = () => {

  const anecdotes = [
    "Adding manpower to a late software project makes it later!",
    "How does a project get to be a year late?... One day at a time.",
    "Program testing can be used to show the presence of bugs, but never to show their absence!",
    "Programming can be fun, so can cryptography; however they should not be combined.",
    "Good code is its own best documentation. As you’re about to add a comment, ask yourself," +
    "‘How can I improve the code so that this comment isn’t needed?’ Improve the code and then document it to make it even clearer.",
    "You cannot teach beginners top-down programming, because they don't know which end is up.",
  ];
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0));

  const randomNum = () => setSelected(Math.floor(Math.random() * 6));
  const voted = () => {
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
  }

  return (
    <>
      <div>
        <Header text="Anecdote of the day" />
        {anecdotes[selected]}
      </div>
      <div>
        <p>has {points[selected]} votes</p>
      </div>
      <div>
        <Button handleClick={voted} text="vote" />
        <Button handleClick={randomNum} text="next anecdote" />
      </div>
      <div> 
        <Header text="Anecdote with most votes" />
        <MostVotedAnecdote anecdote={anecdotes[points.indexOf(Math.max(...points))]} />
      </div>
    </>
  );
}

export default App;
