import React from "react";
import Layout from "../components/layout";
import Guitarra from "../components/guitarra";
import styles from '../styles/grid.module.css'

export async function getStaticProps(){
  const respuesta = await fetch('http://127.0.0.1:1337/api/guitarras?populate=imagen');
  const {data: guitarras} = await respuesta.json();

  return {
    props: {guitarras}
  };
}

function Tienda({ guitarras }) {
  return (
    <Layout
      title="Tienda virtual"
      description="Tienda virtual, venta de guitarras, instrumentos, GuitarLA"
    >
      <main className="contenedor">
        <h1 className="heading">Nuestra Colección</h1>
        <div className={styles.grid}>
          {guitarras.map((guitarra) => (
            <Guitarra key={guitarra.id} guitarra={guitarra.attributes} />
          ))}
        </div>
      </main>
    </Layout>
  );
}

export default Tienda;
