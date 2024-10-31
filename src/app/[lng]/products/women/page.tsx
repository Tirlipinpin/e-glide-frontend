import { FC } from 'react'
import { ItemsGrid } from '@/components/itemsGrid/itemsGrid'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import { getDictionary } from '@/app/[lng]/dictionaries/dictionaries'

import styles from './women.module.scss'

import items from './items.json'

interface IWomenProps {
  params: Params
}

const Women: FC<IWomenProps> = async ({ params: { lng } }) => {
  const dict = await getDictionary(lng)

  return (
    <main className='page'>
      <h1 className={styles.header}>{dict.women}</h1>
      <ItemsGrid items={items} />
    </main>
  )
}

export default Women
