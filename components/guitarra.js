import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import style from '../styles/guitarras.module.css'

function Guitarra({guitarra}) {
  const {nombre, imagen, descripcion, precio, url} = guitarra;
  return (
    <div className={style.guitarra}>
      <Image src={imagen.data.attributes.formats.medium.url} alt={`Imagen guitarra ${nombre}`} width={600} height={400}/>
      <div className={style.contenido}>
        <h3>{nombre}</h3>
        <p className={style.descripcion}>{descripcion}</p>
        <p className={style.precio}>${precio}</p>
        <Link href={`guitarras/${url}`} className={style.enlace}>Ver producto</Link>
      </div>
    </div>
  )
}

export default Guitarra