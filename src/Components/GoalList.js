import React from "react";

const GoalList = props => {
    return(
        <ul className="goal-list">
            {
                props.goals.map((goal) => {
                    //every list rendered needs to have a key
                    return <li key={goal.id}>{goal.text}</li>;
                })
            }
      </ul>
    );
};

export default GoalList;