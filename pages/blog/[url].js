import Layout from "../../components/layout";
import Image from "next/image";
import { formatearFecha } from "../../utils/helpers";
import style from '../../styles/blog.module.css'

export async function getServerSideProps({ query: {url} }) {
    const respuesta = await fetch(
        `${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`
      );
      const { data: post } = await respuesta.json();
      console.log(post);
    
      return {
        props: { post },
      };
}

function Post({ post }) {
  const { titulo, imagen, contenido, publishedAt } = post[0].attributes;
  return (
    <Layout>
      <article className={`${style.post} ${style['mt-3']}`}>
        <Image
          src={imagen.data.attributes.url}
          alt={`Imagen Blog${titulo}`}
          width={1000}
          height={600}
        />
        <div className={style.contenido}>
          <h3>{titulo}</h3>
          <p className={style.fecha}>{formatearFecha(publishedAt)}</p>
          <p className={style.texto}>{contenido}</p>
        </div>
      </article>
    </Layout>
  );
}

export default Post;
