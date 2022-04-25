import styles from './styles.module.scss'

export default function Relogio({ tempo }: { tempo: number }) {

    let minutos = Math.floor(tempo / 60);
    let segundos = tempo % 60;
    const [minutoDezena, minutosUnidade] = String(minutos).padStart(2, '0');
    const [segundoDezena, segundosUnidade] = String(segundos).padStart(2, '0');

    return (
        <>
            <span className={styles.relogioNumero}>{minutoDezena}</span>
            <span className={styles.relogioNumero}>{minutosUnidade}</span>
            <span className={styles.relogioDivisao}>:</span>
            <span className={styles.relogioNumero}>{segundoDezena}</span>
            <span className={styles.relogioNumero}>{segundosUnidade}</span>
        </>
    )
}