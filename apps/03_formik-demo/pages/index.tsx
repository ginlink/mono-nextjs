import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SampleForm from './form'
import Overview from './overview'
import SampleTable from './table'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Overview</h1>

        <Overview />
      </main>

      <hr />

      <main className={styles.main}>
        <h1>SampleForm</h1>

        <SampleForm />
      </main>

      <hr />

      <main className={styles.main}>
        <h1>SampleTable</h1>

        <SampleTable
          onSubmit={(values) => {
            console.log('[values]:', values)
          }}
          initialValues={undefined}
        />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
