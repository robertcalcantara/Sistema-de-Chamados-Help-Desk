import { useState } from "react";

function ChamadoForm({ onAdd }) {
  const [titulo, setTitulo] = useState("");
  const [prioridade, setPrioridade] = useState("Média");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titulo) return;
    onAdd({ titulo, prioridade });
    setTitulo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Descreva o problema"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        style={{ padding: 8, width: "60%" }}
      />

      <select
        value={prioridade}
        onChange={(e) => setPrioridade(e.target.value)}
        style={{ padding: 8, marginLeft: 5 }}
      >
        <option>Baixa</option>
        <option>Média</option>
        <option>Alta</option>
      </select>

      <button type="submit" style={{ padding: 8, marginLeft: 5 }}>
        Abrir Chamado
      </button>
    </form>
  );
}

export default ChamadoForm;
