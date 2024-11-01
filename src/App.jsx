import { useState } from "react";
import NewProject from "./components/NewProject";
import Sidebar from "./components/Sidebar";
import NoProjectScreen from "./components/NoProjectScreen";

function App() {
  const [addProject, setAddProject] = useState(false);

  function handleAddProject() {
    setAddProject(true);
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar />
        {addProject ? <NewProject /> : <NoProjectScreen />}
      </main>
    </>
  );
}

export default App;
