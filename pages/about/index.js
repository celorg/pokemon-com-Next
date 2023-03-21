import Image from "next/image";
import styles from './About.module.css';

export default function About(){
    return(
        <div className={styles.about}>
            <h1>Sobre o Projeto</h1>
            <p>App criado em NextJs</p>
            <Image 
                height="300"
                width="300"
                src="/imagens/charizard.png"
                alt="Charizard"
            />
        </div>
    )
}