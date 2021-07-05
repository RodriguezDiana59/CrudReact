import React from 'react';
import shortid from 'shortid';

function App() {
   
   const [tarea, setTarea] = React.useState('')
   const [tareas, setTareas] = React.useState([])
   const [modoEdicion,setModoEdicion] = React.useState(false)
   const [id,setId] = React.useState(0)
   const [mensageError, setMensageError] =React.useState(false)

   const agregarTarea = e => {
     e.preventDefault()
     if (!tarea.trim()) {
       setMensageError(true)
       return
     }
     setTareas([
       ...tareas,
       { id:shortid.generate(), nombreTarea:tarea }
     ])
     setTarea("")
     setMensageError(false)
 
   }
 
   
   const eliminarTarea = (id) => {
     console.log(id)
     const arrayFiltrado = tareas.filter(item => item.id !== id)
     setTareas(arrayFiltrado)
   }
   const cambiarEstado = (item) => {
     setModoEdicion(true)
     setTarea(item.nombreTarea)
     setId(item.id)

   }

   const editarTarea = (e) => {
     e.preventDefault()
     if (!tarea.trim()) {
       setMensageError(true);
       return
     }
     const arrayEditado = tareas.map(
       item => item.id === id ? {id: id, nombreTarea:tarea} : item
     )
     setTareas(arrayEditado)
     setTarea("")
     setModoEdicion(false)
     setMensageError(false)
   }
  
  return (
    <div className="container mt-5">
      <h1 className="text-center">CRUD</h1>
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Lista de tareas</h4>
          <ul className="list-group">
            {
              tareas.length === 0 ? (
                <li className="list-group-item">
                  <span className="lead">No existen tareas</span>
                </li>
              ) :
              (
                tareas.map(item => (
                  <li className="list-group-item" key={item.id}>
                    <span className="lead">{ item.nombreTarea }</span>
                    <button
                      className="btn btn-danger btn-sm float-end mx-2"
                      onClick={() => eliminarTarea(item.id)}
                    >
                      Eliminar
                    </button>
                    <button
                      className="btn btn-warning btn-sm float-end mx-2"
                      onClick={ () => cambiarEstado(item) }
                    >
                      Editar
                    </button>
                  </li>
                ))
              )
            }
          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center"> { modoEdicion ? 'Editar' : 'Registrar' }</h4>
          {
            mensageError ? (
              <h6 className="text-center text-danger">No se permiten campos vacios</h6>
            ) : ( <h6></h6> )
          }
          <h4 className="text-center">

            <form onSubmit={ modoEdicion ? editarTarea : agregarTarea }>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Ingrese tarea"
                onChange={e => setTarea(e.target.value)}
                value={tarea}
              />
              {
                modoEdicion ? (
                  <button className="btn btn-warning btn-block" type="submit">Editar</button>
                ): (
                  <button className="btn btn-dark btn-block" type="submit">Agregar</button>
                )
              }
            </form>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default App;
