import "./App.css";

function App() {
  const handleAction = async () => {
    const response = await window.api.getAllCities();
    console.log(response);
  };

  return (
    <div>
      <h1>Olá mundo</h1>
      <button onClick={handleAction}>Ação</button>
    </div>
  );
}

export default App;
