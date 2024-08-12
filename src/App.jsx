import { useState } from "react";

import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import NewProject from "./components/NewProject.jsx";

function App() {
  
  const [projectsState, setProjectsState] = useState({
    selectedProject: undefined,
    projects: []
  });

  function handleStartAddProject() {
    setProjectsState(prevState => {
      return {
        ...personalbar,
        selectedProjectId: null,
      }
    })
  }

  let content;

  if(projectsState.selectedProjectId === null) {
    content = <NewProject />
  } else if(projectsState.selectedProjectId === undefined) {
    content =  <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
