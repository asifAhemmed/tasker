import SearchBox from "./SearchBox";
import TaskActions from "./TaskActions";
import TaskTable from "./TaskTable";

const TaskBoard = () => {
  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchBox></SearchBox>
        </div>
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions></TaskActions>
          <div className="overflow-auto">
            <TaskTable></TaskTable>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
