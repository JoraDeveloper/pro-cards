import { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import { Divider } from "@mui/material";
import {
  Container,
  EditorContainer,
  EditorTitle,
  EditorHolder,
} from "./StyleEditor";

function QuestionEditor() {
  const holderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (holderRef.current) {
      new EditorJS({ holder: holderRef.current });
    }
  }, []);

  return (
    <Container>
      <EditorContainer>
        <EditorTitle>Создание вопроса</EditorTitle>
        <Divider />
        <EditorHolder ref={holderRef} />
      </EditorContainer>
    </Container>
  );
}

export default QuestionEditor;
