import { Tarefas } from '../../../types'
import styles from './styles.module.scss'

interface Props {
    tarefas:  Tarefas;
    selecionaTarefa: (selecionaTarefa:Tarefas) => void
}

//export default function Item({id, tarefa, tempo, selecionado, completado}:Tarefas) {

export default function Item({tarefas, selecionaTarefa}:Props) {
    
    return (
        <li className={`${styles.item} ${tarefas.selecionado === true ? styles.itemSelecionado : ''}`} onClick={()=> selecionaTarefa(tarefas)}>
            <h3>
                {tarefas.tarefa}
            </h3>
            <span>
                {tarefas.tempo}
            </span>
        </li>
    )
}