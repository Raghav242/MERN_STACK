import logo from './logo.svg';
import './App.css';
import React from 'react';
import GoalList from './Components/GoalList/GoalList';
import NewGoal from './Components/NewGoal/NewGoal';


const App = () => {
  const courseGoals = [
    {id: 'cg1',text:'Finish the course'},
    {id: 'cg2',text:'Build the project'},
    {id: 'cg3',text:'Push to github'},
  ];

  const addNewGoalHandler = (newGoal) => {
    courseGoals.push(newGoal);  //this function is called from the child class
    console.log(courseGoals);
  }

  return (
    <div className='course-goals'>
      <h2>Course goals</h2>
      <NewGoal onAddGoal = {addNewGoalHandler}/>  //we are passing a prop that is onAddGoal to the child Component
                                                  //here pointer to the addGoalHandler is passed
                                                  //from the child class, we can call this function through props
      <GoalList goals = {courseGoals}/>
    </div>
    );
}


export default App;
