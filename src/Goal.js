import {useState, useEffect} from 'react'

const Goal = (props) => {

    const [progress, setProgress] = useState(0)

    useEffect(() => {
        let count = 0
        props.data.goalTasks.forEach(task => {
            
            if (task.taskComplete === true) {
                count += 1
                console.log(count)
            }
            setProgress(count)
        })
    }, [props.data])

    return(
        <div className='goal__container'>
            <h2>{props.data.goalName}</h2>
            <h2>Category: {props.data.goalCategory}</h2>
            <h2>Status: {progress}/{props.data.goalTasks.length}</h2>
        </div>
    )
}

export default Goal