import { FC } from 'react'
import cx from 'classnames'

import styles from './skeleton.module.scss'

interface ISkeletonProps {
  className: string
}

export const Skeleton: FC<ISkeletonProps> = ({ className }) => (
  <div className={cx(styles.skeleton, className)} />
)
