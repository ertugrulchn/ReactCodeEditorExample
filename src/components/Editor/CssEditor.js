import { useContext, EditorContext } from "context";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/snippets/css";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-min-noconflict/ext-language_tools";

function CssEditor() {
  const { css, setCss } = useContext(EditorContext);

  return (
    <AceEditor
      placeholder="CSS kodlarınızı buraya yazın!"
      mode="css"
      theme="monokai"
      name="editor_css"
      fontSize={16}
      value={css}
      height={"100%"}
      width={"100%"}
      onChange={(val) => setCss(val)}
      showPrintMargin={true}
      showGutter={false}
      highlightActiveLine={true}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: false,
        tabSize: 2,
      }}
    />
  );
}

export default CssEditor;
