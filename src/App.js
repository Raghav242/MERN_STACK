import logo from './logo.svg';
import './App.css';
import React from 'react';
import GoalList from './Components/GoalList';

const App = () => {
  const courseGoals = [
    {id: 'cg1',text:'Finish the course'},
    {id: 'cg2',text:'Build the project'},
    {id: 'cg3',text:'Push to github'},
  ];

  return (
    <div className='course-goals'>
      <h2>Course goals</h2>
      <GoalList goals = {courseGoals}/>
    </div>
    );
}


export default App;
