import { FC } from 'react'

import { Skeleton } from '@/designSystem/skeleton/skeleton'

import styles from './card.module.scss'

interface ICardProps {
  cover?: string
  description?: string
  isLoading?: boolean
  label?: string
  price?: number
}

export const Card: FC<ICardProps> = ({
  cover,
  description,
  isLoading,
  label,
  price
}) => {
  if (isLoading === true) {
    return (
      <div className={styles.card}>
        <Skeleton className={styles.loadingImage} />
        <span className={styles.title}>
          <Skeleton className={styles.loadingTitle} />
        </span>
        <span className={styles.footer}>
          <Skeleton className={styles.loadingFooter} />
        </span>
      </div>
    )
  }

  return (
    <div className={styles.card}>
      <img src={cover} alt={label} className={styles.cover} />
      <span className={styles.title}>{label}</span>
      <span className={styles.footer}>
        <small>{description}</small>
      </span>
      {price !== undefined && <div className={styles.price}>{Intl.NumberFormat('fr', { style: 'currency', currency: 'EUR' }).format(price)}</div>}
    </div>
  )
}
