import styles from '../styles.module.scss'

interface Item {
    nome: string;
    tempo: string;
}

export default function Item({nome, tempo}:Item) {
    return (
        <li className={styles.item}>
            <h3>
                {nome}
            </h3>
            <span>
                {tempo}
            </span>
        </li>
    )
}