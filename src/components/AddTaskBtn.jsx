import PropTypes from "prop-types"
import styles from "./AddTaskBtn.module.css"

function AddTaskBtn({handleOnSubmit}){
    return <button onClick={handleOnSubmit} className={styles.btn}>+</button>
}

AddTaskBtn.propTypes = {
    handleOnSubmit: PropTypes.func.isRequired
  }

export default AddTaskBtn