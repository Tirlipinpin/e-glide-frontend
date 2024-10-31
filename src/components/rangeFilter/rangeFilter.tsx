import { FC } from 'react'

interface IRangeFilterProps {
  id: string
}

export const RangeFilter: FC<IRangeFilterProps> = () => {
  return (
    <input type='range' />
  )
}
