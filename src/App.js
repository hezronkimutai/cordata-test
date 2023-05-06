import "./App.css";
import { Route, Routes } from "react-router-dom";
import Hello from "./containers/OpenApiClient";

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Hello />} />
    </Routes>
  </>
);
export default App;
