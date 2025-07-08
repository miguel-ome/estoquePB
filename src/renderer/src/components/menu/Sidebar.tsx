// src/components/Sidebar.tsx
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>📦 Estoque</h2>
      <nav style={{ height: "100%" }}>
        <NavLink to="/" end>
          🏠 Home
        </NavLink>
        {/* <NavLink to="/create-note">📝 Cadastrar Nota</NavLink> */}
        <NavLink to="/notes">🧾 Notas</NavLink>
        {/* <NavLink to="/cities">🏙️ Cidades</NavLink> */}
        <NavLink to="/routes">🚚 Rotas</NavLink>
      </nav>
      <button onClick={() => window.api.appQuit()} className="button-logout">
        Sair
      </button>
    </aside>
  );
}
