import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import GoalList from './Components/GoalList/GoalList';
import NewGoal from './Components/NewGoal/NewGoal';



const App = () => {
  const [courseGoals, setCourseGoals] = useState(
    [
      {id: 'cg1',text:'Finish the course'},
      {id: 'cg2',text:'Build the project'},
      {id: 'cg3',text:'Push to github'},
    ]
  );


  const addNewGoalHandler = (newGoal) => {
    //setCourseGoals(courseGoals.concat(newGoal))
    setCourseGoals((prevCourseGoals) => {
      return prevCourseGoals.concat(newGoal)   // here prevCourseGoals is an array consisting of the old state
    })                                          // we use this so that the delay in the state refresh won't have any effects in displaying the present state
  }                                             // its better to use this approach if the present state doesnt depend on the previous state

  return (
    <div className='course-goals'>
      <h2>Course goals</h2>
      <NewGoal onAddGoal = {addNewGoalHandler}/> 
      <GoalList goals = {courseGoals}/>
    </div>
    );
    //we are passing a prop that is onAddGoal to the child Component
    //here pointer to the addGoalHandler is passed
    //from the child class, we can call this function through props 
}


export default App;
