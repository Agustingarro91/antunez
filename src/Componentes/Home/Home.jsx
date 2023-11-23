import Card from "../Card/Card.jsx";
import style from './Home.module.css'

const information = [
    {
        img: "https://img.freepik.com/foto-gratis/captura-pantalla-persona-que-escribe-libro-mazo-sobre-mesa_181624-57173.jpg?t=st=1692324436~exp=1692325036~hmac=4a81080f2e7dd80e6578214f4edcaf1b6fcd95e184c3a934aacb28f8aeb2901e",
        title: 'Derecho de familia',
        description: 'divorcios, cuotas alimentarias, regimen de visitas, adopciones'
    },
    {
        img: 'https://img.freepik.com/fotos-premium/abogado-o-notario-trabajando-documentos-e-informe-caso-importante-firma-abogados_122498-41.jpg',
        title: 'Derecho penal',
        description: 'defensas penales y querellas, en justicia provincial y federal'
    },
    {
        img: 'https://img.freepik.com/fotos-premium/abogado-o-notario-trabajando-documentos-e-informe-caso-importante-firma-abogados_122498-41.jpg',
        title: 'Derecho Administrativo',
        description: 'reclamos administrativos y demandas legales al Estado Provincial y Nacional'
    },
    {
        img: 'https://img.freepik.com/fotos-premium/abogado-o-notario-trabajando-documentos-e-informe-caso-importante-firma-abogados_122498-41.jpg',
        title: 'Derecho Laboral',
        description: 'Asesoramiento a empresas y PYMES, despidos, accidentes laborales'
    },
    {
        img: 'https://img.freepik.com/fotos-premium/abogado-o-notario-trabajando-documentos-e-informe-caso-importante-firma-abogados_122498-41.jpg',
        title: 'Derecho Civil',
        description: 'Sucesiones, anticipos de herencias, testamentos,  titulos supletorios, daños y perjuicios, accidentes de transito, asesoramiento y redaccion de todo tipo de contratos, cobro de alquileres y desalojos'
    }
]

const abogados = [
    {
        img: "https://img.freepik.com/foto-gratis/captura-pantalla-persona-que-escribe-libro-mazo-sobre-mesa_181624-57173.jpg?t=st=1692324436~exp=1692325036~hmac=4a81080f2e7dd80e6578214f4edcaf1b6fcd95e184c3a934aacb28f8aeb2901e",
        title: 'Eduardo',
        description: 'Lo hacemos a nuestara manera'
    },
    {
        img: 'https://img.freepik.com/fotos-premium/abogado-o-notario-trabajando-documentos-e-informe-caso-importante-firma-abogados_122498-41.jpg',
        title: 'Juan',
        description: 'Lo hacemos como te gusta '
    },
    {
        img: 'https://img.freepik.com/fotos-premium/abogado-o-notario-trabajando-documentos-e-informe-caso-importante-firma-abogados_122498-41.jpg',
        title: 'Felipe',
        description: 'Lo hacemos completos'
    }
]

const Home = () => {


    return (
        <>
            <section className={style.home} >
                <article className={style.heroImage}>
                    <aside className={style.heroImageOpacity}>
                        <div className={style.title}>
                        <h1 >Estudio Juridico en Mendoza</h1>
                        <h2>Antunez e Hijos & Asociados</h2>
                        </div>
                        <p className={style.heroImageTitle}>Hace más de 40 años, contamos con una alta vocación de servicio que se traduce en una dedicación absolutamente personalizada hacia nuestros clientes, brindándoles la seguridad, contención y la máxima confianza en la resolución de su problemática. Nuestra estructura está diseñada especialmente para responder con agilidad a las necesidades de los clientes con un servicio de excelencia.</p>



                    </aside>
                </article>
            </section>
            <section>

            </section>


            <section  className={style.cardsCont}>
            <h2 className={style.titleh2}>Nuestros servicios</h2>
                <article className={style.cards}>
                    {information?.map(info => { return <Card information={info} /> })}

                </article>
            </section>


            <section  className={style.cardsCont2}>
            <h2 className={style.titleh2}>Nuestro Equipo</h2>
                <article className={style.cards}>
                    {abogados?.map(info => { return <Card information={info} /> })}
                </article>
            </section>
        </>
    )
}

export default Home;