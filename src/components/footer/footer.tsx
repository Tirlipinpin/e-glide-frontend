import { FC } from 'react'

import styles from './footer.module.scss'

export const Footer: FC<{}> = () => {
  return (
    <footer className={styles.footer}>
      <small>Copyright © 2023 Henri Gaudeaux. Tous droits réservés.</small>
    </footer>
  )
}
