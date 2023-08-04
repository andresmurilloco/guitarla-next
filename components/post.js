import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import {formatearFecha} from '../utils/helpers'
import style from '../styles/blog.module.css'

function Post({post}) {
  const {contenido, imagen, titulo, url, publishedAt} = post;
  return (
    <article>
      <Image src={imagen.data.attributes.formats.medium.url} alt={`Imagen Blog${titulo}`} width={600} height={400}/>
      <div className={style.contenido}>
        <h3>{titulo}</h3>
        <p className={style.fecha}>{formatearFecha(publishedAt)}</p>
        <p className={style.resumen}>{contenido}</p>
        <Link href={`blog/${url}`} className={style.enlace}>Leer post</Link>
      </div>
    </article>
  )
}

export default Post