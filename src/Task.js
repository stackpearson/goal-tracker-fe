
const Task = (props) => {

    return(<>

        { props.data ? (
            <div className='task__container'>
            <h2>{props.data.taskName}</h2>
            <h2>Complete: {props.data.taskComplete ? <span>Yes</span> : <span>No</span> }</h2>
        </div>
        ) : (<></>)}
       

    </>)
}

export default Task