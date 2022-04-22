import React from 'react';
import Item from './Item';
import styles from './styles.module.scss';

export default function Lista() {
    let tarefas = [
        {
            id: "1",
            nome: "React",
            tempo: "08:00:00"
        },
        {
            id: "2",
            nome: "React-Native",
            tempo: "10:00:00"
        },
        {
            id: "3",
            nome: "TypeScript",
            tempo: "07:00:00"
        }
    ]
    return (
        <aside className={styles.listaTarefas}>
            <h2>Estudos do Dia 📚</h2>
            <ul>
                {
                    tarefas.map((item) => (
                        <Item 
                            key={item.id}
                            {...item}
                        />
                    ))
                }
            </ul>
        </aside>
    )
}