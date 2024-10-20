import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import TaskBoard from "./TaskBoard/TaskBoard";

function App() {
  return (
    <>
      <Header></Header>
      <div className="flex flex-col justify-center items-center">
        <Hero></Hero>
        <TaskBoard></TaskBoard>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
