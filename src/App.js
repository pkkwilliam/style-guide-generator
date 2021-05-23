import StyleGuide from "./components/styleGuide/styleGuide";
import Bitcode_Phoenix from "./projectStyleGuide/bitcode_phoenix.json";

import "./App.css";

export default function App(props) {
  const project = getProjectName();
  const projectStyleGuide = getProjectStyleGuide(project);
  return (
    <div style={styles.container}>
      <StyleGuide projectStyleGuide={projectStyleGuide} />
    </div>
  );
}

function getProjectName() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const project = urlParams.get("project");
  console.log("load proeject " + project);
  return project;
}

function getProjectStyleGuide(project) {
  switch (project) {
    case "phoenix":
      return Bitcode_Phoenix;
    default:
      return Bitcode_Phoenix;
  }
}

const styles = {
  container: {
    height: "100%",
  },
};
