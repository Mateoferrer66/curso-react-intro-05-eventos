import './TodoSearch.css';

function TodoSearch() {
  return (
    <input
      placeholder="Tomar Agua"
      className="TodoSearch"
      onChange={(event) => {
        console.log('Escribiste en el Buscador');
        console.log(event);
        console.log(event.target);
        console.log(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
