import {
  Container,
  Title,
  EditorContainer,
  Footer,
} from "./StyleCreateCardContainer";

function CreateCardContainer() {
  return (
    <Container>
      <Title>Создание карточки</Title>
      <EditorContainer />
      <Footer>&copy; Жорик</Footer>
    </Container>
  );
}

export default CreateCardContainer;
