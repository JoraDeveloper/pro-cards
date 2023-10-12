import {
  Container,
  Title,
  EditorContainer,
  Footer,
} from "./StyleCreateCardContainer";
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
      <Footer>&copy; Жорик</Footer>
    </Container>
  );
}

export default CreateCardContainer;
