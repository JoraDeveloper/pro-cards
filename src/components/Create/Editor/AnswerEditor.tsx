import { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import { Divider } from "@mui/material";
// TODO: Настроить импорт из корневого каталога
import { createConfig } from "../../../editor";
import {
  Container,
  EditorContainer,
  EditorTitle,
  EditorHolder,
} from "./StyleEditor";

function AswerEditor() {
  const holderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (holderRef.current) {
      new EditorJS(createConfig(holderRef.current));
    }
  }, []);

  return (
    <Container>
      <EditorContainer>
        <EditorTitle>Создание ответа</EditorTitle>
        <Divider />
        <EditorHolder ref={holderRef} />
      </EditorContainer>
    </Container>
  );
}

export default AswerEditor;
