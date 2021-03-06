import React, { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import { encode } from "../utils/base64";

import styles from "../styles/Home.module.css";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Home() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const content = encode({
      date: e.target.date.value,
      event: e.target.event.value,
    });
    router.push("/event/" + content);
  };

  return (
    <div className={styles.container}>
      <Head>
        <script data-ad-client="ca-pub-2771774186000948" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <title>🤔 Estamos a quantos dias sem incidentes?</title>
        <meta name="description" content="Placa online para acompanhar dias sem acidentes"/>
        <meta name="keywords" content="days, accident, free, online, placa, dias sem incidentes, acidentes, acompanhar, online"/>
<meta name="robots" content="index, follow" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="language" content="Portuguese" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Estamos a</h1>
        <p className={styles.title}>quantos dias?</p>

        <form style={{ width: "100%" }} onSubmit={handleSubmit}>
          <Input
            type="date"
            id="date"
            label="Data do começo"
            placeholder="Ex.: 04/07/2020"
          />
          <Input
            type="text"
            label="Evento"
            id="event"
            placeholder="Ex.: sem cair em prod"
          />

          <Button type="submit">Compartilhar</Button>
        </form>
      </main>
    </div>
  );
}
