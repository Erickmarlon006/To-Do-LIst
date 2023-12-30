import PropTypes from "prop-types"
import styles from "./NewTaskField.module.css"

function NewTaskField({handleOnChange, placeholder, value}) {
    return <input onChange={handleOnChange} name="name" className={styles} type="text" placeholder={placeholder} value={value} required></input>
}

NewTaskField.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  }
export default NewTaskField