import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Banner from "../components/numbanner";
import {useRouter} from 'next/router'

export default function Home() {
    const router = useRouter()
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
                <Banner/>
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
