import { useState } from "react";

import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import NewProject from "./components/NewProject.jsx";

function App() {
  
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleStartAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    })
  }

  function handleCancelAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      }
    })
  }

  function handleAddProject(projectData) {
    const projectId = Math.random();

    setProjectsState(prevState => {
      
      const newProject = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  let content;
  
  if(projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject}  onCancel={handleCancelAddProject} />
  } else if(projectsState.selectedProjectId === undefined) {
    content =  <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} projects={projectsState.projects} />
      {content}
    </main>
  );
}

export default App;
