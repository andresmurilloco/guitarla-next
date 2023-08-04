import Link from 'next/link'
import Layout from '../components/layout'

function Pagina404() {
  return (
    <Layout
        title='Pagina no encontrada'
    >
        <p className='error'>Pagina no encontrada</p>
        <Link href={'/'} className='error-enlace'>Volver a inicio</Link>
    </Layout>
  )
}

export default Pagina404