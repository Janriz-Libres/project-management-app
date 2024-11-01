import { useState } from "react";
import NewProject from "./components/NewProject";
import Sidebar from "./components/Sidebar";
import HomeScreen from "./components/HomeScreen";
import Project from "./components/Project";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleAddProject() {
    setProjectsState((prevState) => ({
      selectedProjectId: null,
      projects: [...prevState.projects],
    }));
  }

  function handleCancel() {
    setProjectsState((prevState) => ({
      selectedProjectId: undefined,
      projects: [...prevState.projects],
    }));
  }

  function handleSaveProject(projectData) {
    projectData.id = Math.random();

    setProjectsState((prevState) => ({
      selectedProjectId: undefined,
      projects: [...prevState.projects, projectData],
    }));
  }

  function handleSelectProject(id) {
    setProjectsState((prevState) => ({
      selectedProjectId: id,
      projects: [...prevState.projects],
    }));
  }

  function handleDeleteProject() {
    setProjectsState((prevState) => ({
      selectedProjectId: undefined,
      projects: prevState.projects.filter(
        (project) => project.id !== prevState.selectedProjectId
      ),
    }));
  }

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar
          projects={projectsState.projects}
          selectedProjectId={projectsState.selectedProjectId}
          onAddProject={handleAddProject}
          onSelectProject={handleSelectProject}
        />
        {projectsState.selectedProjectId === undefined && (
          <HomeScreen onAddProject={handleAddProject} />
        )}
        {projectsState.selectedProjectId === null && (
          <NewProject
            onSaveProject={handleSaveProject}
            onCancel={handleCancel}
          />
        )}
        {selectedProject && (
          <Project project={selectedProject} onDelete={handleDeleteProject} />
        )}
      </main>
    </>
  );
}

export default App;
