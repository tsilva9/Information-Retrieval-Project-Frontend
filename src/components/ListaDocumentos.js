import React from "react";
import descargar from "../services/descargar";

const ListaDocumentos = (props) => {
  const onClickHandler = async (name) => {
    const response = await descargar.get(name);
    const textFile = () => {
      const element = document.createElement("a");
      const file = new Blob([response.data], { type: "text/plain" });
      element.href = URL.createObjectURL(file);
      element.download = name;
      document.body.appendChild(element);
      element.click();
    };
    textFile();
  };

  const docs = props.documentos.map((doc) => {
    return (
      <div className="documento">
        <p className="documento__titulo">{doc.nombre}</p>
        <p className="documento__texto">{doc.texto + "..."}</p>
        <h4 className="documento__ir">{doc.ir.toFixed(2)}</h4>

        <img
          src={require("../resources/download.png")}
          alt="download"
          className="documento__download"
          onClick={() => onClickHandler(doc.nombre)}
          download
        />
      </div>
    );
  });

  if (props.documentos.length === 0) {
    return (
      <div className="listadocumentos">
        {console.log(props.errorF)}
        {!props.errorF ? (
          <div className="listadocumentos__spinner"></div>
        ) : (
          <p className="documento listadocumentos__error">
            No elements found for such query
          </p>
        )}
      </div>
    );
  } else {
    return <div className="listadocumentos">{docs}</div>;
  }
};

export default ListaDocumentos;
