import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Banner from "../../components/numbanner";

export default function Event({ eventId }) {
    const decoded = new Buffer(eventId, 'base64')
    const {data, event} = JSON.parse(decoded)
    const date1 = new Date(data);
    const diffTime = Math.abs(new Date() - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Estamos a
                </h1>
                <Banner days={diffDays}/>
                <p className={styles.title}>
                    dias
                </p>
                <h1 className={styles.description}>
                    sem incidentes em prod sem incidentes em prod sem incidentes em prod
                </h1>
            </main>

            <footer className={styles.footer}>
            </footer>
        </div>
    )
}

export async function getStaticProps(context) {
    return {
        props: {
            eventId: context.params.eventId
        },
    }
}

export async function getStaticPaths() {
    return {paths: [], fallback :true}
}
