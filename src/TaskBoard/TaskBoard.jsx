import { useState } from "react";
import SearchBox from "./SearchBox";
import TaskActions from "./TaskActions";
import TaskTable from "./TaskTable";
import AddTaskModal from "./AddTaskModal";

const TaskBoard = () => {
  const defaultTask = [
    {
      "id": crypto.randomUUID(), 
      "title": "Learn React",
      "description" : "I want to learn React",
      "tags" : ["web", "react", "js"],
      "priority": "high",
      "isFavorite": true
    }
  ]
  const [tasks, setTasks] = useState(defaultTask);
  const [showModal, setShowModal] = useState(false);
  const handleAddTask = ( newTask ) => {
     setTasks([...tasks,newTask]);
     setShowModal(false);
  }

  return (
    <section className="mb-20" id="tasks">
      {showModal && <AddTaskModal onClickSave={handleAddTask}></AddTaskModal>}
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchBox></SearchBox>
        </div>
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions onClickAddModal = {() => setShowModal(true)}></TaskActions>
          <div className="overflow-auto">
            <TaskTable tasks={tasks}></TaskTable>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
