import { useNavigate } from "react-router-dom";
import { CreateNoteForm } from "../../components/forms/CreateNote/CreateNoteForm";
import { Sidebar } from "../../components/menu/Sidebar";

export function CreateNote() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <Sidebar />

      <div className="wrapper">
        <button onClick={() => navigate(-1)}>Voltar</button>
        <CreateNoteForm />
      </div>
    </div>
  );
}
