import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Banner from "../../components/numbanner";

function decode(eventId) {
    if (eventId) {
        const decoded = new Buffer(eventId, 'base64')
        const {date, event} = JSON.parse(decoded)
        return {date: new Date(date), event};
    }
    return {date : new Date(), event: ''}
}

export default function Event({eventId}) {
    const {date, event} = decode(eventId);
    const diffTime = Math.abs(new Date() - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const daysValidated = diffDays < 0 ? 0 : diffDays
    const daysString = diffDays === 1 ? 'dia' : 'dias'
    return (
        <div className={styles.container}>
            <Head>
                <title>Estamos a {diffDays} dias {event}</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Estamos a
                </h1>
                <Banner days={daysValidated}/>
                    <p className={styles.title}>{daysString}</p>
                <h1 className={styles.description}>
                    {event}
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
    return {paths: [], fallback: true}
}
