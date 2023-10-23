
import Image from "next/image";
import styles from "./advertisment.module.css";

export default function Advertisment({items}) {
    return(
        <ul className={styles.container}>
          {items.map((ad,index) => {
            return (
              <li key={ad.name}>
                <Image alt={ad.name} src={ad.path} width={ad.width} height={ad.height} className={index == 0 && styles.perseverance}/>
              </li>
            )
          })}
          <li className={styles.header}>
              <h3 className={styles["header-font"]}>Sooner<br/>&nbsp; &nbsp; &nbsp; &nbsp;New Devices</h3>
          </li>
        </ul>
    )
}