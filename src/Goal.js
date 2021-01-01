import {useState, useEffect} from 'react'
import Task from './Task'

const Goal = (props) => {

    const [progress, setProgress] = useState(0)

    useEffect(() => {
        let count = 0
        props.data.goalTasks.forEach(task => {
            
            if (task.taskComplete === true) {
                count += 1
            }
            
        })
        setProgress(count)
    }, [props.data])

    return(<>
        <div className='goal__container'>
            <div>
                <h2>{props.data.goalName}</h2>
                <h2>Category: {props.data.goalCategory}</h2>
                <h2>Status: {progress}/{props.data.goalTasks.length}</h2>
            </div>
            
            <div className='tasks__container'>
                {props.data.goalTasks.map(task => {
                    return (
                            <Task key={'taskId-' + task.taskId + '-onGoal'} data={task} />
                    )
                    
                })}
            </div>
        </div>
    </>)
}

export default Goal