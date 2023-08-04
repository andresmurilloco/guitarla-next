import { useState } from "react";
import Image from "next/image";
import style from "../../styles/guitarras.module.css";
import Layout from "../../components/layout";

export async function getStaticPaths() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras`);
  const { data } = await respuesta.json();
  const paths = data.map((guitarra) => ({
    params: {
      url: guitarra.attributes.url,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { url } }) {
  const respuesta = await fetch(
    `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`
  );
  const { data: guitarra } = await respuesta.json();

  return {
    props: { guitarra },
  };
}

function Producto({ guitarra, agregarCarrito }) {
  const [cantidad, setCantidad] = useState(0);
  const { nombre, precio, descripcion, imagen } = guitarra[0].attributes;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cantidad < 1) {
      alert("Seleccione una cantidad");
      return;
    } else {
      const guitarraSeleccionada = {
        id: guitarra[0].id,
        imagen: imagen.data.attributes.url,
        nombre,
        precio,
        cantidad,
      };
      agregarCarrito(guitarraSeleccionada)
    }

  };

  return (
    <Layout title={`Guitarra ${nombre}`}>
      <div className={style.guitarra}>
        <Image
          src={imagen.data.attributes.url}
          alt={`Imagen guitarra ${nombre}`}
          width={600}
          height={400}
        />
        <div className={style.contenido}>
          <h3>{nombre}</h3>
          <p className={style.descripcion}>{descripcion}</p>
          <p className={style.precio}>${precio}</p>

          <form
            className={style.formulario}
            onSubmit={handleSubmit}
            onChange={(e) => setCantidad(+e.target.value)}
          >
            <label htmlFor="cantidad">Cantidad:</label>
            <select id="cantidad">
              <option value="0">--- Seleccione ---</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <input type="submit" value="Agregar al carrito" />
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Producto;
