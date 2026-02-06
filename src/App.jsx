import { useState, useEffect } from "react";
import ChamadoForm from "./components/ChamadoForm";
import ChamadoList from "./components/ChamadoList";

function App() {
  const [chamados, setChamados] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("chamados")) || [];
    setChamados(data);
  }, []);

  useEffect(() => {
    localStorage.setItem("chamados", JSON.stringify(chamados));
  }, [chamados]);

  const adicionarChamado = (chamado) => {
    setChamados([...chamados, { ...chamado, id: Date.now(), status: "Aberto" }]);
  };

  const atualizarStatus = (id) => {
    setChamados(
      chamados.map((c) =>
        c.id === id
          ? { ...c, status: c.status === "Aberto" ? "Resolvido" : "Aberto" }
          : c
      )
    );
  };

  const deletarChamado = (id) => {
    setChamados(chamados.filter((c) => c.id !== id));
  };

  return (
    <div style={{ maxWidth: 600, margin: "auto", fontFamily: "Arial" }}>
      <h1>Help Desk</h1>
      <ChamadoForm onAdd={adicionarChamado} />
      <ChamadoList
        chamados={chamados}
        onToggle={atualizarStatus}
        onDelete={deletarChamado}
      />
    </div>
  );
}

export default App;
