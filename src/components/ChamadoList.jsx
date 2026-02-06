import ChamadoItem from "./ChamadoItem";

function ChamadoList({ chamados, onToggle, onDelete }) {
  return (
    <div style={{ marginTop: 20 }}>
      {chamados.map((c) => (
        <ChamadoItem
          key={c.id}
          chamado={c}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default ChamadoList;
