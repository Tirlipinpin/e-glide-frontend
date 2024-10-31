'use client'

import {
  ChangeEventHandler,
  FC, FormEventHandler,
  useState
} from 'react'

import cx from 'classnames'

import styles from './searchInput.module.scss'

interface ISearchInputProps {
  defaultValue?: string
  onSubmit: (search: string) => void
  size?: 'small' | 'medium' | 'large'
}

export const SearchInput: FC<ISearchInputProps> = ({
  defaultValue = '',
  onSubmit,
  size = 'medium'
}) => {
  const [value, setValue] = useState(defaultValue)

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault()
    onSubmit?.(value)
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={cx(styles.searchInput, {
          [styles.small]: size === 'small',
          [styles.medium]: size === 'medium',
          [styles.large]: size === 'large'
        })}
        type='search'
        value={value}
        onChange={handleChange}
        placeholder='Surf the site...'
      />
    </form>
  )
}
