import Head from 'next/head'
import Shuffle from './shuffle.js'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>RidrJ Shuffle</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Würfel dir deine Superhelden-Skill-Combo!
        </h1>

        <Shuffle />
      </main>

      <footer className={styles.footer}>
        Powered by ...
      </footer>
    </div>
  )
}
