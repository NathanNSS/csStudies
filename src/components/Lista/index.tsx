import React, { useState } from 'react';
import { Tarefas } from '../../types';
import Item from './Item';
import styles from './styles.module.scss';

interface Props{
    tarefas: Tarefas[];
    selecionaTarefa: (selecionaTarefa:Tarefas) => void
}

export default function Lista({ tarefas, selecionaTarefa }: Props) {

    return (
        <aside className={styles.listaTarefas}>
            <h2> Estudos do Dia 📚</h2>
            <ul>
                {
                    tarefas.map((item) => (
                        <Item
                            key={item.id}
                            selecionaTarefa={selecionaTarefa}
                            tarefas={item}
                        />
                    ))
                }
            </ul>
        </aside>
    )
}