import { Tarefas } from '../../../types'
import styles from '../styles.module.scss'



export default function Item({id, tarefa, tempo, selecionado, completado}:Tarefas) {
    return (
        <li className={styles.item}>
            <h3>
                {tarefa}
            </h3>
            <span>
                {tempo}
            </span>
        </li>
    )
}