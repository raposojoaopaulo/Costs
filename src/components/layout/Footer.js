import { FaStickerMule, FaBiohazard, FaGithub, } from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer() {

  return (<footer className={styles.footer}>
    <ul className={styles.social_list} >
      <li>
        <FaGithub />
      </li>
      <li>
        <FaBiohazard />
      </li>
      <li>
        <FaStickerMule />
      </li>
    </ul>
    <p className={styles.copy_right} >
      <span>Costs</span> &copy; 2021
    </p>
  </footer>  )
}

export default Footer