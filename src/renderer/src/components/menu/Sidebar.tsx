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

        <span style={{ borderBottom: "1px solid gray" }} />
        <NavLink to="/routes/tobias_barreto">Tobias Barreto</NavLink>
        <NavLink to="/routes/barreias">Barreiras</NavLink>
        <NavLink to="/routes/deposito">Depósito</NavLink>
        <NavLink to="/routes/governador_valadares">
          Governador Valadares
        </NavLink>
        <NavLink to="/routes/ilheus">Ilhéus</NavLink>
      </nav>
      <button onClick={() => window.api.appQuit()} className="button-logout">
        Sair
      </button>
    </aside>
  );
}
