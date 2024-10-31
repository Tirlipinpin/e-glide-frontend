'use client'

import { FC } from 'react'
import { SearchInput } from '@/designSystem/searchInput/searchInput'
import { useRouter } from 'next/navigation'

export const Searchbar: FC<{}> = () => {
  const router = useRouter()

  const handleSubmit = (search: string): void => {
    void router.push(`/search?query=${search}`)
  }

  return (
    <SearchInput onSubmit={handleSubmit} />
  )
}
