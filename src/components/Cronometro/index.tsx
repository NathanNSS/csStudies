import styles from './styles.module.scss'

import Botao from "../Botao";
import Relogio from "./Relogio";

export default function Cronometro(){
    return(
        <div className={styles.cronometro}>
            <p className={styles.titulo}>Escolha um card e inicie um cronômetro</p>
            <div className={styles.relogioWrapper}>
                <Relogio/>
            </div>
            <Botao>
                Começar
            </Botao>
        </div>
    )
}