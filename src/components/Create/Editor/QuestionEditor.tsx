import { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import { Container } from "./StyleEditor";

function QuestionEditor() {
  const holderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (holderRef.current) {
      new EditorJS({ holder: holderRef.current });
    }
  }, []);

  return <Container ref={holderRef} />;
}

export default QuestionEditor;
