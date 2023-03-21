import Link from "next/link";
import Image from "next/image"; 
import styles from "./Navbar.module.css";

export default function Navbar(){
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Image 
                    src="/imagens/pokeball.png"
                    width="30"
                    height="30"
                    alt="PokeNext"
                />
                <h1>PokeNext</h1>
            </div>
            <ul className={styles.listLinks}>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">Sobre</Link>
                </li>
            </ul>
        </nav>
    )
}