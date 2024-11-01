import { useState } from "react";
import NewProject from "./components/NewProject";
import Sidebar from "./components/Sidebar";
import HomeScreen from "./components/HomeScreen";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProject: undefined,
    projects: [],
  });

  function handleAddProject() {
    setProjectsState((prevState) => ({
      selectedProject: null,
      projects: [...prevState.projects],
    }));
  }

  function handleCancel() {
    setProjectsState((prevState) => ({
      selectedProject: undefined,
      projects: [...prevState.projects],
    }));
  }

  function handleSaveProject(projectData) {
    projectData.id = Math.random();

    setProjectsState((prevState) => ({
      selectedProject: undefined,
      projects: [...prevState.projects, projectData],
    }));
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar
          projects={projectsState.projects}
          onAddProject={handleAddProject}
        />
        {projectsState.selectedProject === undefined && (
          <HomeScreen onAddProject={handleAddProject} />
        )}
        {projectsState.selectedProject === null && (
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
