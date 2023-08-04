import Link from "next/link";
import Post from "../components/post";
import Layout from "../components/layout";
import Guitarra from "../components/guitarra";
import Curso from "../components/curso";
import styles from '../styles/grid.module.css'

export async function getStaticProps(){
  const urlGuitarras = ('http://127.0.0.1:1337/api/guitarras?populate=imagen');
  const urlPosts = ('http://127.0.0.1:1337/api/posts?populate=imagen');
  const urlCurso = ('http://127.0.0.1:1337/api/curso?populate=imagen');

  const [resGuitarras, resPosts, resCurso] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlPosts),
    fetch(urlCurso)
  ])

  const [{data: guitarras},{data: posts}, {data: curso} ] = await Promise.all([
    resGuitarras.json(),
    resPosts.json(),
    resCurso.json()
  ])
  
  return{
    props: {
      guitarras,
      posts,
      curso
    }
  }
}

export default function Home({guitarras, posts, curso}) {
  return (
    <>
      <Layout
        title={'Home'}
        description={'Blog de música, venta de guitarras y más.'}
      >
        <main className="contenedor">
          <h1 className="heading">Nuestra Colección</h1>
          <div className={styles.grid}>
          {guitarras.map((guitarra) => (
            <Guitarra key={guitarra.id} guitarra={guitarra.attributes} />
          ))}
        </div>
        </main>
        <Curso curso={curso.attributes}/>
        <section>
          <h2 className="heading">Blog</h2>
          <div className={styles.grid}>
          {posts?.map(post=>(
            <Post key={post.id} post={post.attributes}/>
          ))}
        </div>
        </section>
      </Layout>
    </>
  );
}