import styles from './Header.module.scss';

import igniteLogo from '../assets/Logo.svg';

export function Header() {
  return(
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logo Ignite TO-DO" />
    </header>
  )
}