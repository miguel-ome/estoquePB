import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Notes } from "./pages/Notes/Notes";
import { RegisterNote } from "./pages/Notes/Register/RegisterNote";
import { RoutesPage } from "./pages/Routes/Routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Deixe apenas um Notes principal */}
        <Route path="/notes" element={<Notes />} />
        <Route path="/nota/register/:id" element={<RegisterNote />} />

        {/* Outras rotas */}
        <Route path="/routes" element={<RoutesPage />} />

        {/* Redirecionar / para /notes */}
        <Route path="/" element={<Notes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
