import React, { ReactNode } from 'react';
import styles from './styles.module.scss'

interface Props {
    children?: ReactNode;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void
}

export default function Botao({children, type, onClick}: Props) {
    return (
        <button className={styles.botao} type={type} onClick={onClick}>
            {children}
        </button>
    )
}


