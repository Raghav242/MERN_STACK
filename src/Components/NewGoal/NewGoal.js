import React, {useState} from "react";
import './NewGoal.css';

const NewGoal = props => {

    const [enteredText, setenteredText] = useState('')

    const addGoalHandler = event => {
        event.preventDefault();    //prevents the form from being submitted to the server

        const newGoal = {
            id: Math.random().toString(),
            text: enteredText
        };

        setenteredText('')

        props.onAddGoal(newGoal);  
    }
    // from props, we are accessing the onAddGoal that is passed from the parent class
    // here, we are calling the onAddGoal which is in the parent(child to parent communication)
    // there, the addNewGoalHandler function will be called and executed
    // this comment is just to test the pull request on local machine
    
    const textChangeHandler = event => {
        setenteredText(event.target.value);
    }

    //two way binding of data is happening in the below code
    return (
    <form className="new-goal" onSubmit={addGoalHandler}>
        <input type="text" value = {enteredText} onChange={textChangeHandler}/>   
        <button type="submit">Add Goal</button>
    </form>
    );
};

export default NewGoal;
