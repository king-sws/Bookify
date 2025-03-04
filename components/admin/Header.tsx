'use client'
import { Session } from 'next-auth'
import React, { useState } from 'react'
import { Search } from 'lucide-react'

const Header = ({session}: {session: Session}) => {
  const [searchQuery, setSearchQuery] = useState('')
  
  const handleSearch = (e : React.FormEvent) => {
    e.preventDefault()
    // Implement your search functionality here
    console.log('Searching for:', searchQuery)
    // You could use this to filter data or navigate to search results
  }
  
  return (
    <header className="admin-header flex items-center justify-between p-4">
        <div>
            <h2 className="text-2xl font-semibold text-dark-400">
                {session?.user?.name}
            </h2>
            <p className="text-base text-slate-500"> 
                Monitor all of your users and books here
            </p>
        </div>
        
        <div className="relative hidden md:block">
            <form onSubmit={handleSearch} className="flex items-center">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search users or books..."
                        className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-admin focus:border-transparent w-64"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <Search size={18} />
                    </div>
                </div>
                <button
                    type="submit"
                    className="ml-2 bg-primary-admin text-white hover:text-white/70 px-4 py-2 rounded-lg transition-colors"
                >
                    Search
                </button>
            </form>
        </div>
    </header>
  )
}

export default Header