import { useState } from "react";
import { BsPencil, BsFillTrashFill } from "react-icons/bs";
import EditForm from "./EditForm";
import PropTypes from "prop-types"
import styles from "./TaskCard.module.css"
function TaskCard({ task, handleEdit, handleRemove }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newTaskName, setTaskName] = useState(task.name);

    function updateTask() {
        if (newTaskName.length === 0) {
            setIsEditing(false);
            setTaskName(task.name);
            return;
        }
        handleEdit(newTaskName, task);
        setIsEditing(false);
    }

    return (
        <div className={styles.task_card}>
            {isEditing === true ? (
                <EditForm handleSubmit={updateTask} setTaskName={setTaskName} taskName={newTaskName} />
            ) : (
                <>
                    <h4>{task.name}</h4>
                    <div>
                        <button onClick={() => {
                            setIsEditing(!isEditing)
                        }}>
                            <BsPencil />
                        </button>
                        <button onClick={handleRemove}><BsFillTrashFill /></button>
                    </div>
                </>

            )}
        </div>
    )
}

TaskCard.propTypes = {
    task: PropTypes.object.isRequired,
    handleRemove: PropTypes.func.isRequired,
    handleEdit: PropTypes.func.isRequired
}
export default TaskCard