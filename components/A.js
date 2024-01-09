import Link from "next/link";
import styles from '../styles/A.module.css'

export default function A({text, href}) {
    return (
        <Link className={styles.link}href={href}>
            <p>{text}</p>
        </Link>
    )
}
