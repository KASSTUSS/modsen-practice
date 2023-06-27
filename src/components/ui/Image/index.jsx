import defaultImage from "@assets/img/default-image-book.webp";

import styles from "./styles.module.css";

function Image({ src, width, height, alt }) {
  return (
    <div
      className={styles.image__container}
      style={{
        height: height || "",
        width: width || "",
      }}
    >
      <img className={styles.image} src={src || defaultImage} alt={alt || 'image'} />
    </div>
  );
}

export default Image;
