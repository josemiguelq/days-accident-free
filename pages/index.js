import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Banner from "../components/numbanner";
import {useRouter} from 'next/router'

export default function Home() {
    const router = useRouter()

    const handleClick = (e) => {
        const stringfy = JSON.stringify({date: e.target.date.value, event: e.target.event.value})
        const content = new Buffer(stringfy).toString("base64")
        e.preventDefault()
        router.push('/event/'+content)
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <form onSubmit={handleClick}>
                    <label>Data</label>
                    <input id="date"/>
                    <label>Evento</label>
                    <input id="event"/>
                    <button>Compartilhar</button>
                </form>
                <h1 className={styles.title}>
                    Estamos a
                </h1>
                <p className={styles.title}>
                    dias
                </p>
                    <h1 className={styles.description}>
                        sem incidentes em prod
                    </h1>
            </main>

            <footer className={styles.footer}>
            </footer>
        </div>
    )
}