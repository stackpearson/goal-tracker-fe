import {connect} from 'react-redux';
import Task from './Task'

const Tasks = (props) => {
    return(
        <div>
            <h2>Tasks List</h2>
            <div>
                {props.tasksOnProps.tasks.map(task => {
                   return(
                       <Task key={'taskId-' + task.taskId + 'onMain'} data={task} />
                   ) 
                })}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        tasksOnProps: state.taskReducer
    }
}

export default connect(
    mapStateToProps,
    {}
)(Tasks)