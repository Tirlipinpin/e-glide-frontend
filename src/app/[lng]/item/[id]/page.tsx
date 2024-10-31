import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import { FC } from 'react'
import cx from 'classnames'

import styles from './page.module.scss'

interface IItemProps {
  params: Params
}

const Item: FC<IItemProps> = async ({ params: { id } }) => {
  const data = await fetch(`http://localhost:8080/articles/${id}`)
  const item = await data.json()

  return (
    <main className={cx('page', styles.main)}>
      Item {id}

      <code>
        {JSON.stringify(item)}
      </code>
    </main>
  )
}

export default Item
