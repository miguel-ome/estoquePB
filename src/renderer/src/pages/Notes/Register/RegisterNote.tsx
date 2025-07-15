import { useNavigate } from "react-router-dom";
import { CreateNoteForm } from "../../../components/forms/CreateNote/CreateNoteForm";
import { Sidebar } from "../../../components/menu/Sidebar";

export function RegisterNote() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <Sidebar />

      <div className="wrapper">
        <div className="header">
          <button className="button-primary" onClick={() => navigate(-1)}>
            Voltar
          </button>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ marginBottom: "30px" }}>"Salvar Nota"</h1>
          <CreateNoteForm />
        </div>
      </div>
    </div>
  );
}
