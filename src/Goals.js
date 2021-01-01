import { connect } from "react-redux"
import Goal from './Goal';

const Goals = (props) => {
    return(
        <div>
            {props.goalsOnProps.goals.map(goal => {
                return (
                    <Goal key={'goalId-' + goal.goalId} data={goal} />
                )
                
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        goalsOnProps: state.goalReducer
    }
}

export default connect(
    mapStateToProps,
    {}
)(Goals)

