import {
  Container,
  Title,
  EditorContainer,
  Actions,
  Footer,
} from "./StyleCreateCardContainer";
import { Button } from "@mui/material";
import QuestionEditor from "../Editor/QuestionEditor";
import AswerEditor from "../Editor/AnswerEditor";

function CreateCardContainer() {
  return (
    <Container>
      <Title>Создание карточки</Title>
      <EditorContainer>
        <QuestionEditor />
        <AswerEditor />
      </EditorContainer>
      <Actions>
        <Button variant="contained" color="error">
          Очистить
        </Button>
        <Button variant="contained" color="success">
          Создать
        </Button>
      </Actions>
      <Footer>&copy; Жорик</Footer>
    </Container>
  );
}

export default CreateCardContainer;
