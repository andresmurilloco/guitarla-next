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

function Producto({ guitarra }) {
  const { nombre, precio, descripcion, imagen } = guitarra[0].attributes;
  return (
    <Layout
        title={`Guitarra ${nombre}`}
    >
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
        </div>
      </div>
    </Layout>
  );
}

export default Producto;
