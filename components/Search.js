import { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import SearchResults from './SearchResults'

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    const getResults = async () => {
      if (searchTerm === '') {
        setSearchResults([])
      } else {
        const res = await fetch(`/api/search?q=${searchTerm}`)
        const { results } = await res.json()
        setSearchResults(results)
      }
    }

    getResults()
  }, [searchTerm])

  return (
    <div className='relative bg-sub2 p-4 '>
      <div className='container mx-auto flex items-center justify-center md:justify-end'>
        <div className='relative text-gray-600'>
          <form>
            <input
              type='search'
              name='search'
              id='search'
              className='bg-white h-10 px-5 pr-10 rounded-full text-sm border border-transparent focus:border-transparent focus:outline-none w-72 focus:outline-none focus:ring-2 focus:ring-sub border-5 '
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder='Search Posts...'
            />

            <FaSearch className='absolute top-0 right-0 text-black mt-3 mr-4 ' />
          </form>
        </div>
      </div>

      <SearchResults results={searchResults} />
    </div>
  )
}