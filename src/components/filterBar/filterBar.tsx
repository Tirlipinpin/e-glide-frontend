import { FC } from 'react'

import styles from './filterBar.module.scss'

import filterCategories from './filters.json'
import { SelectableFilter } from '../selectableFilter/selectableFilter'
import { RangeFilter } from '../rangeFilter/rangeFilter'

interface IFilterBarProps {
  dict: any
}

export const FilterBar: FC<IFilterBarProps> = ({ dict }) => {
  return (
    <section className={styles.filterBar}>
      <h3>{dict.categories}</h3>
      <div className={styles.categoriesContainer}>
        {filterCategories?.map((category) => (
          <div key={category.id} className={styles.categoryContainer}>
            <h4>{category.label}</h4>
            {category.type === 'selectable' && (
              <>
                <SelectableFilter filters={category.filters} />
                <div className={styles.overflowEffect} />
              </>
            )}
            {category.type === 'range' && (
              <RangeFilter id={category.id} />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
