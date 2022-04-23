import { useEffect, useState } from 'react';
import styles from './styles.module.scss'

import Botao from "../Botao";
import Relogio from "./Relogio";
import { minutosSegundo, tempoParaSegundo } from '../../utils/tempo';
import { Tarefas } from '../../types';

interface Props{
    selecionado : Tarefas | undefined
}

export default function Cronometro({selecionado} : Props){
   const [tempo, setTempo] = useState<number>(0)
    useEffect(()=>{
        if(selecionado?.tempo){
            setTempo(tempoParaSegundo(selecionado.tempo))
        }
   },[selecionado])

    return(
        <div className={styles.cronometro}>
            <p className={styles.titulo}>Escolha um card e inicie um cronômetro</p>
            <div className={styles.relogioWrapper}>
                <Relogio tempo={tempo}/>
            </div>
            <span>{tempo}</span>
            <span>{tempo/60}</span>
            <span>{minutosSegundo(tempo)}</span>
            <Botao>
                Começar
            </Botao>
        </div>
    )
}