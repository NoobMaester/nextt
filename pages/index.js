import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next Ninjas</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <h1 className={styles.title}>Hooray!</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, enim voluptatem? Itaque quaerat dolore minus. Culpa assumenda dignissimos voluptatibus quod recusandae, aliquid saepe nesciunt, sunt laborum voluptatum omnis similique sequi.</p>

      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore exercitationem quasi architecto vero repellat voluptatem iusto dicta sed! Architecto officiis natus perspiciatis, quasi ipsa harum debitis quia nostrum sit adipisci.</p>

      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime assumenda facere corrupti molestias nihil. Eaque inventore labore nobis ullam quas, ratione minus quidem vel maxime, qui quos eveniet, perspiciatis commodi.</p>

      <Link href="/ninjas">
        <a className={styles.btn}>See Dojos</a>
      </Link>

    </div>
  )
}
