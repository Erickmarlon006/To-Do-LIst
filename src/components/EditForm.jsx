import PropTypes from "prop-types"
import styles from "./TaskCard.module.css"
function EditForm({ handleSubmit, setTaskName, taskName }) {

    return (
        <>
            <input type="text" onChange={(e) => setTaskName(e.target.value)} value={taskName} autoFocus />
            <button className={styles.update_btn} onClick={handleSubmit}>Update</button>
        </>
    )
}
EditForm.propTypes = {
    //task: PropTypes.string.isRequired,
    setTaskName: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    taskName: PropTypes.string.isRequired

}
export default EditForm