import styles from './integracao2.module.css'

export default function integracao2(){
    return(
        <div id={styles.integracao2}>
            <div className={styles.vermelha}> texto #01</div>
            <div className={styles.verde}> texto #02</div>
            <div className={styles.branca}> texto #03</div>
        </div>
    )
}