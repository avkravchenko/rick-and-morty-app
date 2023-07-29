import Sidebar from "./components/sidebar/Sidebar";
import "./app.scss";
import Cards from "./components/cards/Cards";
import { Routes, Route } from "react-router-dom";
import CharacterDetailsPage from "./components/cardDetails/CardDetails";

const NotFound = () => {
  return <h2 style={{ margin: "auto" }}>404 Not Found</h2>;
};

const MainContent = () => {
  return (
    <div className="main-content">
      <Sidebar />
      <Cards />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
