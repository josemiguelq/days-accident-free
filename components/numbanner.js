import styles from './Banner.module.css'

export default function Banner({days}) {
    const  each = days.toString().split('')
    return (
        <div>
            <div className={styles.www}>
                {
                    each.map((number, index) => (
                        <div  key={index} className={styles.placa}>
                            {number}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
