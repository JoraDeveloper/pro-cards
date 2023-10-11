import { Route, Routes } from "react-router-dom";
import { Main, CreateCardContainer } from "./components";
import "./style/style.css";

const mainPath = "/";
const createCardPath = "/create";

const pathes = {
  [mainPath]: <Main />,
  [createCardPath]: <CreateCardContainer />,
};

function App() {
  return (
    <Routes>
      <Route path={mainPath} element={pathes[mainPath]} />
      <Route path={createCardPath} element={pathes[createCardPath]} />
    </Routes>
  );
}

export default App;
