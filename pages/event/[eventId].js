import Head from "next/head";
import { useRouter } from "next/router";

import styles from "../../styles/Home.module.css";
import Banner from "../../components/numbanner";

import { decode } from "../../utils/base64";

export default function Event({ date, event }) {
  const router = useRouter();

  if (router.isFallback) {
    return null;
  }
  const splited = date.split('-');
  const diffTime = Math.abs(new Date() - new Date(splited[0], splited[1] -1, splited[2].split('T')[0]));
  const diffDays = diffTime / (1000 * 60 * 60 * 24);
  const daysValidated = diffDays < 1 ? 0 : Math.ceil(diffDays);
  const daysString = diffDays === 1 ? "dia" : "dias";

  return (
    <div className={styles.container}>
      <Head>

        <title>
          Estamos a {daysValidated} {daysString}...
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={event+' - Crie sua placa também!'}/>
        <meta name="keywords" content="days, accident, free, online, placa, dias sem incidentes, acidentes, acompanhar online"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>

      <main className={styles.card}>
        <h1 className={styles.title}>Estamos a</h1>
        <Banner days={daysValidated} />
        <p className={styles.title}>{daysString}</p>
        <h2 className={styles.description}>{event}</h2>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  try {
    return {
      props: decode(context.params.eventId),
    };
  } catch {
    return {
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}
