import React from "react";

const GoalList = props => {
    return(
        <ul className="goal-list">
            {
                [<li>Hi</li>,<li>This works!</li>]
            }
      </ul>
    );
};

export default GoalList;