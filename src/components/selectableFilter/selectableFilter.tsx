'use client'
import { FC } from 'react'
import styles from './selectableFilter.module.scss'

interface Filter {
  id: string
  label: string
}

interface ISelectableFilterProps {
  filters?: Filter[]
}

export const SelectableFilter: FC<ISelectableFilterProps> = ({ filters }) => {
  const handleFilterSelect = (id: string): void => {
    console.log('filtered on ', id)
  }

  return (
    <ul className={styles.category}>
      {filters?.map((filter) => (
        <li key={filter.id} className={styles.filter}>
          <input
            type='checkbox'
            id={filter.id}
            onChange={() => handleFilterSelect(filter.id)}
            className={styles.checkbox}
          />
          <label htmlFor={filter.id}>{filter.label}</label>
        </li>
      ))}
    </ul>
  )
}
