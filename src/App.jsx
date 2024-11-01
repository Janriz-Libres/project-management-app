import { useState } from "react";
import NewProject from "./components/NewProject";
import Sidebar from "./components/Sidebar";
import HomeScreen from "./components/HomeScreen";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProject: undefined,
    projects: [],
  });

  function handleAddProject() {
    setProjectState((prevState) => ({
      selectedProject: null,
      projects: [...prevState.projects],
    }));
  }

  function handleCancel() {
    setProjectState((prevState) => ({
      selectedProject: undefined,
      projects: [...prevState.projects],
    }));
  }

  function handleSaveProject(project) {
    setProjectState((prevState) => ({
      ...prevState,
      projects: [...prevState.projects, project],
    }));
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar
          projects={projectState.projects}
          onAddProject={handleAddProject}
        />
        {projectState.selectedProject === undefined && (
          <HomeScreen onAddProject={handleAddProject} />
        )}
        {projectState.selectedProject === null && (
          <NewProject
            onSaveProject={handleSaveProject}
            onCancel={handleCancel}
          />
        )}
      </main>
    </>
  );
}

export default App;
