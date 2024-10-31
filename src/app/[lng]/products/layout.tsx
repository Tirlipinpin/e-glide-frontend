import { FC, ReactNode } from 'react'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'

import { getDictionary } from '@/app/[lng]/dictionaries/dictionaries'
import { FilterBar } from '@/components/filterBar/filterBar'

import styles from './products.module.scss'

interface IProductLayoutProps {
  children: ReactNode
  params: Params
}

const ProductLayout: FC<IProductLayoutProps> = async ({ children, params: { lng } }) => {
  const dict = await getDictionary(lng)
  return (
    <section className={styles.content}>
      <FilterBar dict={dict} />
      {children}
    </section>
  )
}

export default ProductLayout
