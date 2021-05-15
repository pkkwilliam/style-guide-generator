import StyleGuide from "./components/styleGuide/styleGuide";
import Bitcode_Phoenix from "./projectStyleGuide/bitcode_phoenix.json";

import "./App.css";

export default function App() {
  return (
    <div style={styles.container}>
      <StyleGuide projectStyleGuide={Bitcode_Phoenix} />
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
  },
};
