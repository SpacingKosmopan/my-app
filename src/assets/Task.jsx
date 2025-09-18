export const Task = (props) => {
  return (
    <div style={{ backgroundColor: props.completed ? "green" : "white" }}>
      <h1>{props.taskName}</h1>
      <button onClick={() => props.completeTask(props.id)}>
        {props.completed ? "Completed" : "Complete"}
      </button>
      <button onClick={() => props.deleteTask(props.id)}>X</button>
      <button>Create Reminder</button>
    </div>
  );
};
