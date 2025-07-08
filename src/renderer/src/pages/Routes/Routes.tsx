import type { IRoute } from "../../interfaces/IRoute";
import { useEffect, useState } from "react";
import { Sidebar } from "../../components/menu/Sidebar";
import { Link } from "react-router-dom";
import { IoCreateOutline } from "react-icons/io5";

export function RoutesPage() {
  const [routes, setRoutes] = useState<IRoute[]>();

  useEffect(() => {
    async function fetchRoutes() {
      const response = await window.api.getAllRoutes();

      if (response.code < 200 && response.code > 299) alert(response.message);
      if (response.body?.length === 0) alert(response.message);
      setRoutes(response.body);
    }

    fetchRoutes();
  });

  return (
    <div className="container">
      <Sidebar />
      <div className="wrapper">
        <div className="header">
          <Link
            to="/routes/register"
            className="button-primary"
            style={{ display: "flex", alignItems: "center" }}
          >
            <IoCreateOutline size={20} />
            Cadastrar Rota
          </Link>
        </div>
        <div className="table-container">
          <table className="styled-table">
            <thead>
              <tr>
                <th>Nome</th>
                <th style={{ width: "75%" }}>Descrição</th>
              </tr>
            </thead>
            <tbody>
              {routes?.map((route) => (
                <tr key={route.id}>
                  <td>{route.name}</td>
                  <td style={{ width: "75%" }}>{route.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
