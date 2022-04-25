import React, { useState } from 'react';
import { Tarefas } from '../../types';
import { randomCod } from '../../utils/utils';
import Botao from '../Botao';
import styles from './styles.module.scss';

interface Props{
    propsTarefas: React.Dispatch<React.SetStateAction<Tarefas[]>>
}

export default function Formulario({propsTarefas}: Props){

    const [tarefa, setTarefa] = useState("");
    const [tempo, setTempo] = useState("00:00");

    function adicionaTarefa(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        propsTarefas(tarefaAntiga => [
                ...tarefaAntiga,
                {
                    id: randomCod(6),
                    tarefa,
                    tempo,
                    selecionado: false,
                    completado: false
                }
            ]
        )
        setTarefa("");
        setTempo("00:00")
    }

    return(
        <form className={styles.novaTarefa} onSubmit={adicionaTarefa}>
                <div className={styles.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        placeholder="O que você quer estudar"
                        value={tarefa}
                        onChange={e => setTarefa(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input
                        type="time"
                        step="1"
                        name="tempo"
                        id="tempo"
                        min="00:00:00"
                        max="01:30:00"
                        value={tempo}
                        onChange={e =>  setTempo(e.target.value)}
                        required
                    />
                </div>

                <Botao type={'submit'}>
                    Adicionar
                </Botao>
            </form>
    )
}