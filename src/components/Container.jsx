import { useState } from "react"
import styles from "./Container.module.css"
import TaskCard from "./TaskCard"
import Form from "./Form";
function Container() {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("task")) || []);
    localStorage.setItem("task", JSON.stringify(tasks));

    function addTask(task) {
        if (task.name.length === 0) {
            return;
        }
        setTasks([...tasks, task]);

    }
    function editTask(newTask, oldTaskObj) {
        const index = tasks.indexOf(oldTaskObj);
        tasks[index].name = newTask;
        setTasks([...tasks]);

    }

    function removeTask(id) {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
    }

    return (
        <section className={styles.container} >
            <Form todoHandler={addTask} />
            <div>
                {tasks.map((task) => (
                    <TaskCard
                        key={task.id}
                        task={task}
                        handleEdit={editTask}
                        handleRemove={() => removeTask(task.id)}
                    />
                ))}
            </div>
        </section>

    )
}
export default Container