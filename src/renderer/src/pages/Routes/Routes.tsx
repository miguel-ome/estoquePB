import { useEffect } from "react";
import { Sidebar } from "../../components/menu/Sidebar";

export function RoutesPage() {
  useEffect(() => {
    async function fetchRoutes() {
      const routes = await window.api.getAllRoutes();
      console.log(routes);
    }

    fetchRoutes();
  });

  return (
    <div className="container">
      <Sidebar />
      <div className="wrapper">
        <div className="table-container">
          <table className="styled-table">
            <thead>
              <tr>
                <th>Nome</th>
                <th style={{ width: "75%" }}>Descrição</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
