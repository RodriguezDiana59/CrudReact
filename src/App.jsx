function App() {
  return (
    <div className="container mt-5">
    <h1 className="text-center">CRUD</h1>
    <div className="row">
      <div className="col-8">
        <h4 className="text-center">Lista de tareas</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <span className="lead">Nombre de la tarea</span>
            <button className="btn btn-danger btn-sm float-end mx-2">Eliminar</button>
            <button className="btn btn-warning btn-sm float-end mx-2">Editar</button>
          </li>
        </ul>
      </div>
      <div className="col-4">
        <h4 className="text-center">Registrar</h4>
        <h4 className="text-center">
          <form>
            <input type="text" className="form-control mb-2" placeholder="Ingrese tarea" />
            <button className="btn btn-dark btn-block" type="submit">Agregar</button>
          </form>
        </h4>
      </div>
    </div>
  </div>
  );
}

export default App;
