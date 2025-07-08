import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Notes } from "./pages/Notes/Notes";
import { CreateNote } from "./pages/CreateNote/CreateNote";
import { RoutesPage } from "./pages/Routes/Routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Notes />} />
        <Route path="/create-note" element={<CreateNote />} />
        <Route path="/routes" element={<RoutesPage />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
