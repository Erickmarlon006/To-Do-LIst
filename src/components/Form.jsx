import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import PropTypes from "prop-types"
import AddTaskBtn from "./AddTaskBtn"
import NewTaskField from "./NewTaskField"
import styles from "./Container.module.css"

function Form({ todoHandler }) {
    const [name, setName] = useState("");
    const [id, setId] = useState(uuidv4);

    function createToDo(e) {
        e.preventDefault();
        setId(uuidv4);
        const newTask = { name: name, id: id }
        todoHandler(newTask);
        setName("");

    }
    return (
        <form className={styles.append_tasks_area}>
            <NewTaskField
                handleOnChange={(e) => setName(e.target.value)}
                placeholder="Adicione uma nova tarefa"
                value={name} />
            <AddTaskBtn handleOnSubmit={createToDo} />
        </form>
    )

}
Form.propTypes = {
    todoHandler: PropTypes.func.isRequired,
}
export default Form