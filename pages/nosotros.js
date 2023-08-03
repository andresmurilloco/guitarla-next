import Image from "next/image";
import Layout from "../components/layout";
import style from "../styles/nosotros.module.css";

function Nosotros() {
  return (
    <Layout title={"Nosotros"}>
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>
        <div className={style.contenido}>
          <Image
            src="/img/nosotros.jpg"
            width={1000}
            height={800}
            alt="Imagen sobre nosotros"
          />
          <div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
              sed, harum eius, odit ullam ut beatae nemo ea provident repellat
              nihil sequi dolore, ipsa eaque libero porro necessitatibus
              suscipit esse?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              quibusdam praesentium. Consequuntur sed, ipsa quidem quae
              expedita, repellat veniam recusandae non cupiditate, nihil impedit
              maxime consequatur explicabo cumque dolorem et. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum neque, eligendi iure labore suscipit amet assumenda iste obcaecati ratione expedita. At voluptatibus architecto quaerat omnis odit nobis eveniet magni suscipit.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Nosotros;
