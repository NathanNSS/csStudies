import React from 'react';
import styles from './styles.module.scss'

export default class Botao extends React.Component{
    render(){
        return(
            <button className={styles.botao}>
                Entrar
            </button>
        )
    }
}
