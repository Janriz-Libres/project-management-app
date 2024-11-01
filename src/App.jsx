import { useState } from "react";
import NewProject from "./components/NewProject";
import Sidebar from "./components/Sidebar";
import HomeScreen from "./components/HomeScreen";
import Project from "./components/Project";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(text) {
    setProjectsState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        id: taskId,
        projectId: prevState.selectedProjectId,
        text,
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectsState((prevState) => ({
      ...prevState,
      tasks: prevState.tasks.filter((task) => task.id !== id),
    }));
  }

  function handleAddProject() {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: null,
    }));
  }

  function handleCancel() {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
    }));
  }

  function handleSaveProject(projectData) {
    setProjectsState((prevState) => {
      projectData.id = Math.random();

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, projectData],
      };
    });
  }

  function handleSelectProject(id) {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: id,
    }));
  }

  function handleDeleteProject() {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: prevState.projects.filter(
        (project) => project.id !== prevState.selectedProjectId
      ),
      tasks: prevState.tasks.filter(
        (task) => task.projectId !== prevState.selectedProjectId
      ),
    }));
  }

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  const tasks = projectsState.tasks.filter(
    (task) => task.projectId === projectsState.selectedProjectId
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
          <Project
            project={selectedProject}
            tasks={tasks}
            onDelete={handleDeleteProject}
            onAddTask={handleAddTask}
            onDeleteTask={handleDeleteTask}
          />
        )}
      </main>
    </>
  );
}

export default App;
