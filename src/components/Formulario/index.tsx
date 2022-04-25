import React from 'react';
import { Tarefas } from '../../types';
import Botao from '../Botao';
import styles from './styles.module.scss';

export default class Formulario extends React.Component<{setTarefas: React.Dispatch<React.SetStateAction<Tarefas[]>>}>{
    state = {
        id:"0",
        tarefa:"",
        tempo:"00:00"
    }

    randomCod(length:Number) {
        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        //let characters       = '0123456789';
        let charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) result += characters.charAt(Math.floor(Math.random() * charactersLength));
        return result;
    }

    adicionaTarefa(event:React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        this.state.id = this.randomCod(6) 
        this.props.setTarefas(olValue => [...olValue, {...this.state, selecionado:false, completado: false}])
        this.setState({tarefa:"", tempo:"00:00"})
    }

    render() {
        return (
            <form className={styles.novaTarefa} onSubmit={this.adicionaTarefa.bind(this)}>
                <div className={styles.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input 
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        placeholder="O que você quer estudar"
                        value={this.state.tarefa}
                        onChange={e => this.setState({...this.state, tarefa: e.target.value})}
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
                        value={this.state.tempo}
                        onChange={e => this.setState({...this.state, tempo: e.target.value})}
                        required
                    />
                </div>
              
                <Botao type={'submit'}>
                    Adicionar
                </Botao>
            </form>
        )
    }
}