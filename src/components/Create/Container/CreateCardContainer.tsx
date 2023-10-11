import {
  Container,
  Title,
  EditorContainer,
  Footer,
} from "./StyleCreateCardContainer";
import QuestionEditor from "../Editor/QuestionEditor";

function CreateCardContainer() {
  return (
    <Container>
      <Title>Создание карточки</Title>
      <EditorContainer>
        <QuestionEditor />
      </EditorContainer>
      <Footer>&copy; Жорик</Footer>
    </Container>
  );
}

export default CreateCardContainer;
