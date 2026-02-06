function ChamadoItem({ chamado, onToggle, onDelete }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: 10,
        marginBottom: 8,
        borderRadius: 6,
      }}
    >
      <strong>{chamado.titulo}</strong>
      <p>Prioridade: {chamado.prioridade}</p>
      <p>Status: {chamado.status}</p>

      <button onClick={() => onToggle(chamado.id)}>Alterar Status</button>
      <button
        onClick={() => onDelete(chamado.id)}
        style={{ marginLeft: 5, background: "red", color: "white" }}
      >
        Excluir
      </button>
    </div>
  );
}

export default ChamadoItem;
