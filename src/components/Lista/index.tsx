import React, { useState } from 'react';
import { Tarefas } from '../../types';
import Item from './Item';
import styles from './styles.module.scss';

export default function Lista({ tarefas }: {tarefas: Tarefas[]}) {

    return (
        <aside className={styles.listaTarefas}>
            <h2> Estudos do Dia 📚</h2>
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