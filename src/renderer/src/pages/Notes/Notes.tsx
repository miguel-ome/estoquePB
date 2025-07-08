import { Link } from "react-router-dom";
import { Sidebar } from "../../components/menu/Sidebar";
import { IoCreateOutline } from "react-icons/io5";

const data = [
  {
    numberNote: 123,
    client: "Eliseu Miguel",
    emissionDate: "2025-07-04",
    city: "São Paulo",
    route: "Tobias Barreto",
    totValue: 1050.75,
    weight: 87.3,
  },
  {
    numberNote: 456,
    client: "Ana Souza",
    emissionDate: "2025-07-01",
    city: "Rio de Janeiro",
    route: "Barreiras",
    totValue: 890.0,
    weight: 64.5,
  },
];

export function Notes() {
  return (
    <div className="container">
      <Sidebar />

      <div className="wrapper">
        <div className="header">
          <Link
            to="/create-note"
            className="button-primary"
            style={{ display: "flex", alignItems: "center" }}
          >
            <IoCreateOutline size={20} />
            Cadastrar Nota
          </Link>
        </div>

        <div className="table-container">
          <table className="styled-table">
            <thead>
              <tr>
                <th>Nº da Nota</th>
                <th>Cliente</th>
                <th>Data de Emissão</th>
                <th>Cidade</th>
                <th>Rota</th>
                <th>Valor Total</th>
                <th>Peso</th>
              </tr>
            </thead>
            <tbody>
              {data.map((note, idx) => (
                <tr key={idx}>
                  <td>{note.numberNote}</td>
                  <td>{note.client}</td>
                  <td>{new Date(note.emissionDate).toLocaleDateString()}</td>
                  <td>{note.city}</td>
                  <td>{note.route}</td>
                  <td>R$ {note.totValue.toFixed(2)}</td>
                  <td>{note.weight} kg</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
