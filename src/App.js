import { EditorProvider } from "context";
import CodeBar from "../src/components/CodeBar";
import Preview from "../src/components/Preview";
import Header from "../src/components/Header";
import styles from "./App.module.css";

function App() {
  return (
    <EditorProvider>
      <CodeBar />
      <main className={styles.main}>
        <Header />
        <Preview />
      </main>
    </EditorProvider>
  );
}

export default App;
