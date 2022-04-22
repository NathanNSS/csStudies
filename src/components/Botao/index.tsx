import React,{ReactNode} from 'react';
import styles from './styles.module.scss'

interface Props {
    children?: ReactNode;
}
export default class Botao extends React.Component<Props>{
    render(){
        return(
            <button className={styles.botao}>
                {this.props.children}
            </button>
        )
    }
}
