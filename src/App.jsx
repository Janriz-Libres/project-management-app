import { useState } from "react";
import NewProject from "./components/NewProject";
import Sidebar from "./components/Sidebar";
import HomeScreen from "./components/HomeScreen";

function App() {
  const [projects, setProjects] = useState({
    selectedProject: undefined,
    projects: [],
  });

  function handleAddProject() {
    setProjects((prevState) => ({
      selectedProject: null,
      projects: [...prevState.projects],
    }));
  }

  function handleCancel() {
    setProjects((prevState) => ({
      selectedProject: undefined,
      projects: [...prevState.projects],
    }));
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar onAddProject={handleAddProject} />
        {projects.selectedProject === undefined && (
          <HomeScreen onAddProject={handleAddProject} />
        )}
        {projects.selectedProject === null && (
          <NewProject onCancel={handleCancel} />
        )}
      </main>
    </>
  );
}

export default App;
