import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Counter from '../components/Counter';
import ProductSearch from '../components/ProductSearch';
import RepoInfo from '../components/RepoInfo';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>
          Joshua Welcomes you to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <section>
        <h2>Counter App</h2>
        <Counter incrementAmount={1} buttonColor="blue" />
        <Counter incrementAmount={2} buttonColor="red" />
      </section>

      <section>
        <h2>About my Project</h2>
        <RepoInfo />
      </section>
      <section>
        <h2>Search for Products</h2>
        <ProductSearch />
      </section>
      
    </div>
  );
}
