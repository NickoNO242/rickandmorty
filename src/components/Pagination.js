import React from "react";

const Pagination = ({ prev, next, onAnterior, onSiguiente }) => {
  const paginaAnterior = () => {
    onAnterior();
  };
  const paginaSiguiente = () => {
    onSiguiente();
  };
  return (
    <nav>
      <div className="pt-5">
        <ul className="pagination justify-content-center">
          {prev ? (
            <li className="page-item">
              <button className="page-link" onClick={paginaAnterior}>
                Anterior
              </button>
            </li>
          ) : null}
          {next ? (
            <li className="page-item">
              <button className="page-link" onClick={paginaSiguiente}>
                Siguiente
              </button>
            </li>
          ) : null}
        </ul>
      </div>
    </nav>
  );
};
export default Pagination;
