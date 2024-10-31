import { FC } from 'react'

import { Card } from '@/designSystem/card/card'

import styles from './products.module.scss'

const Loading: FC<{}> = () => {
  return (
    <main className='page'>
      <h1 className={styles.header}>Loading</h1>
      <div className={styles.loading}>
        {Array.from(Array(12).keys()).map((key) => (
          <Card key={key} isLoading />
        ))}
      </div>
    </main>
  )
}

export default Loading
