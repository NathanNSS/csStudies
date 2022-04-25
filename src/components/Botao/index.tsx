import React,{ReactNode} from 'react';
import styles from './styles.module.scss'

interface Props {
    children?: ReactNode;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: ()=> void
}
export default class Botao extends React.Component<Props>{
    render(){
        let {type = "button", onClick} = this.props;
        return(
            <button className={styles.botao} type={type} onClick={onClick}>
                {this.props.children}
            </button>
        )
    }
}
