import brieImg from '../assets/BrieSmall.jpg'
import styles from './Brie.module.css'
export default function Brie(){
    return (
        <>
            <h2>Brie</h2>
            <p>A soft french cheese</p>
            <img className={styles.image} src={brieImg} alt="A wheel of brie" width={300} />

        </>
    )
}