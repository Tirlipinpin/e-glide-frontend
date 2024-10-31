import { FC } from 'react'
import Link from 'next/link'

import { Card } from '@/designSystem/card/card'

import styles from './itemsGrid.module.scss'

interface Item {
  id: string
  label: string
  description: string
  price: number
  cover: string
}

interface IItemsGridProps {
  items: Item[]
}

export const ItemsGrid: FC<IItemsGridProps> = ({ items }) => {
  return (
    <div className={styles.itemsGrid}>
      {items.map((item) => (
        <Link className={styles.link} href={`/item/${item.id}`} key={item.id}>
          <Card
            description={item.description}
            label={item.label}
            price={item.price}
            cover={item.cover}
          />
        </Link>
      ))}
    </div>
  )
}
