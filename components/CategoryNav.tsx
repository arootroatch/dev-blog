import {Posts} from "@/lib/interfaces";
import Link from "next/link";
import styles from "./categoryNav.module.css"

export default function CategoryNav({categorized}: {categorized: Posts[][]}) {
    return <nav className={styles.nav}>
        <ul className={styles.ul}>
            {categorized.map((category) =>
              (<li className={styles.li}
                   key={category[0].data.category}>
                  <Link href={`./#${category[0].data.category}`}>{category[0].data.category}</Link>
              </li>))}
        </ul>
    </nav>;
}