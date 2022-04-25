import { Tarefas } from '../../../types'
import styles from './styles.module.scss'

interface Props {
    tarefas: Tarefas;
    selecionaTarefa: (selecionaTarefa: Tarefas) => void
}

export default function Item({ tarefas, selecionaTarefa }: Props) {

    return (
        <li className={`${styles.item} ${tarefas.selecionado === true ? styles.itemSelecionado : ''} ${tarefas.completado ? styles.itemCompletado : ''}`}
            onClick={() => !tarefas.completado && selecionaTarefa(tarefas)}
        >
            <h3> {tarefas.tarefa} </h3>
            <span> {tarefas.tempo} </span>
            {tarefas.completado && <span className={styles.concluido} aria-label="Tarefa Completada"></span>}
        </li>
    )
}
