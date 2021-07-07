import Head from 'next/head'
import Shuffle from './shuffle.js'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>RidrJ Shuffle</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1 className="title">
        🦸‍♀️‍ Deine Superhelden-Skill-Combo 🦸‍♂️
        </h1>

        <Shuffle />
      </main>

      <footer className="footer">
        <a href="https://jannikestoehr.com/rein-in-den-richtigen-job/">
          Rein in den richtigen Job
        </a>
      </footer>
    </div>
  )
}
