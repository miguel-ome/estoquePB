import { Menu } from "../components/menu/Menu";

export function Home() {
  const handleAction = async () => {
    const response = await window.api.getAllCities();
    console.log(response);
  };

  return (
    <div>
      <Menu />
      <div>
        <h1>Olá mundo</h1>
        <button onClick={handleAction}>Ação</button>
        <button onClick={() => window.api.appQuit()}>Sair</button>
      </div>
    </div>
  );
}
