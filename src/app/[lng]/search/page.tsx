'use client'

import { FC } from 'react'
import { useSearchParams } from 'next/navigation'

const Search: FC<{}> = () => {
  const searchParams = useSearchParams()

  const query = searchParams.get('query')

  console.log('search query', query)

  return (
    <main className='page'>
      Search
    </main>
  )
}

export default Search
