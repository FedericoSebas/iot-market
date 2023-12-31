import Image from "next/image";
import startCase from "lodash/startCase";
import styles from "./product-item.module.css";
import IconAction from "./icon-action.js";

import Link from "next/link";
import Button from "./button";

export default function ProductItem(props) {
  const { title, image, summary, company, slug } = props.item;


  return (
      <li className={styles.content}>
        
      <div className={styles.item}>
        <IconAction content={{ summary, company }}>
          <Image
            alt={title}
            src={"/" + image.url}
            width={image.width}
            height={image.height}
          />
        </IconAction>
        <Button slug={slug} company={company}>
          Buy
        </Button>
      </div>
        <h2>{startCase(title)}</h2>
    </li>
  );
}
