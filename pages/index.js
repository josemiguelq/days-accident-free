import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, {useState} from "react"
import {useRouter} from 'next/router'

export default function Home() {
    const router = useRouter()

    const [event, setEvent] = useState(null);

    const handleClick = (e) => {
        const stringfy = JSON.stringify({date: e.target.date.value, event: e.target.event.value})
        const content = new Buffer(stringfy).toString("base64")
        e.preventDefault()
        router.push('/event/' + content)
    }
    const handleEvent = (newEvent) => {
        setEvent(newEvent);
    };
    return (
        <div className={styles.container}>
            <Head>
                <title>Dias sem acidentes</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <form onSubmit={handleClick}>
                    <div>
                        <label>Data</label>
                        <input id="date"/>
                    </div>
                    <div>
                        <label>Evento</label>
                        <input id="event"/>
                    </div>
                    <button>Compartilhar</button>
                </form>
                <h1 className={styles.title}>
                    Estamos a
                </h1>
                <p className={styles.title}>
                    dias
                </p>
                <h1 className={styles.description}>
                    {event}
                </h1>
            </main>

            <footer className={styles.footer}>
            </footer>
        </div>
    )
}
