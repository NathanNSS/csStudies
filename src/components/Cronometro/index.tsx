import { useEffect, useState } from 'react';
import styles from './styles.module.scss'

import Botao from "../Botao";
import Relogio from "./Relogio";
import { tempoParaSegundo } from '../../utils/tempo';
import { Tarefas } from '../../types';

interface Props {
    selecionado: Tarefas | undefined
    finalizaTarefa: () => void;
}

export default function Cronometro({ selecionado, finalizaTarefa }: Props) {
    const [tempo, setTempo] = useState<number>(0)

    function regressiva(contador: number) {
        setTimeout(() => {
            if (contador > 0) {
                setTempo(contador - 1);
                return regressiva(contador - 1);
            }
            finalizaTarefa();
        }, 1000)
    }

    useEffect(() => {
        if (selecionado?.tempo) {
            setTempo(tempoParaSegundo(selecionado.tempo))
        }
    }, [selecionado])

    return (
        <div className={styles.cronometro}>
            <p className={styles.titulo}>Escolha um card e inicie um cronômetro</p>
            <div className={styles.relogioWrapper}>
                <Relogio tempo={tempo} />
            </div>
            <Botao onClick={() => regressiva(tempo)} >
                Começar
            </Botao>
        </div>
    )
}