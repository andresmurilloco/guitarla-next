import Layout from "../components/layout"
import Post from "../components/post"
import styles from '../styles/grid.module.css'

export async function getStaticProps(){
  const respuesta = await fetch('http://127.0.0.1:1337/api/posts?populate=imagen');
  const {data: posts} = await respuesta.json();

  return {
    props: {posts}
  };
}

function Blog({posts}) {

  return (
    <Layout
        title='Blog Musica'
        description='Blog de música, venta de guitarras, instrumentos, GuitarLA'
    >
      <main className="contenedor">
      <h1 className="heading">Blog de Música</h1>
        <div className={styles.grid}>
          {posts?.map(post=>(
            <Post key={post.id} post={post.attributes}/>
          ))}
        </div>
      </main>
    </Layout>
  )
}

export default Blog