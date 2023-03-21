import Head from 'next/head';
import Footer from './Footer';
import styles from './Layout.module.css';
import Navbar from './Navbar';


export default function Layout({children}){

    return(
        <>
            <Head>
                <title>PokeNext</title>
                <link rel='shortcut icon' href='/imagens/favicon.ico'/>
            </Head>

            <Navbar />
            <main className={styles.container}>
                {children}
            </main>
            <Footer />
        </>
    )
}