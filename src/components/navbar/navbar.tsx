import { FC } from 'react'
import cx from 'classnames'
import Link from 'next/link'
import { getDictionary } from '@/app/[lng]/dictionaries/dictionaries'
import { Button } from '@/designSystem/button/button'
import { Searchbar } from '../searchbar/searchbar'

import styles from './navbar.module.scss'

const getRouteForIndex = (index: string): string => {
  switch (index) {
    case 'men': {
      return '/products/men'
    }
    case 'women': {
      return '/products/women'
    }
    default:
      return '/about-us'
  }
}

interface INavbarProps {
  lng: string
}

export const Navbar: FC<INavbarProps> = async ({ lng }) => {
  const dict = await getDictionary(lng)

  return (
    <nav className={cx(styles.navbar)}>
      <Link href='/' className={styles.logo}>🏂</Link>
      <div className={styles.modules}>
        {['men', 'women', 'about-us'].map((module) => (
          <Link
            className={styles.module}
            data-name={module}
            key={module}
            href={getRouteForIndex(module)}
          >
            {dict[module]}
          </Link>
        ))}
      </div>
      <Searchbar />
      <div className={styles.queue}>
        <Button className={styles.userButton} shape='round'>
          🥡
        </Button>
        <Button className={styles.userButton} shape='round'>
          🤷‍♂️
        </Button>
      </div>
    </nav>
  )
}
