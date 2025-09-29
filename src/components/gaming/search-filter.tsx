'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

interface SearchFilterProps {
  onSearch: (query: string) => void
  onFilterChange: (filters: Record<string, any>) => void
  categories?: string[]
  sortOptions?: { value: string; label: string }[]
  placeholder?: string
}

export function SearchFilter({
  onSearch,
  onFilterChange,
  categories = [],
  sortOptions = [],
  placeholder = 'Search...'
}: SearchFilterProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedSort, setSelectedSort] = useState('')

  const handleSearchChange = (query: string) => {
    setSearchQuery(query)
    onSearch(query)
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    onFilterChange({ category, sort: selectedSort })
  }

  const handleSortChange = (sort: string) => {
    setSelectedSort(sort)
    onFilterChange({ category: selectedCategory, sort })
  }

  return (
    <div className="gaming-card p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Search Input */}
        <div className="md:col-span-6">
          <div className="relative">
            <input
              type="text"
              placeholder={placeholder}
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full bg-input border border-border rounded-lg px-4 py-3 pr-12 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary">
              🔍
            </div>
          </div>
        </div>

        {/* Category Filter */}
        {categories.length > 0 && (
          <div className="md:col-span-3">
            <select
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Sort Options */}
        {sortOptions.length > 0 && (
          <div className="md:col-span-3">
            <select
              value={selectedSort}
              onChange={(e) => handleSortChange(e.target.value)}
              className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            >
              <option value="">Sort By</option>
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Active Filters Display */}
      {(selectedCategory || selectedSort || searchQuery) && (
        <div className="mt-4 flex flex-wrap gap-2">
          {searchQuery && (
            <span className="gaming-gradient px-3 py-1 rounded-full text-sm font-medium">
              Search: "{searchQuery}"
              <button
                onClick={() => handleSearchChange('')}
                className="ml-2 text-primary-foreground hover:text-accent"
              >
                ✕
              </button>
            </span>
          )}
          {selectedCategory && (
            <span className="gaming-gradient-secondary px-3 py-1 rounded-full text-sm font-medium">
              Category: {selectedCategory}
              <button
                onClick={() => handleCategoryChange('')}
                className="ml-2 text-primary-foreground hover:text-accent"
              >
                ✕
              </button>
            </span>
          )}
          {selectedSort && (
            <span className="gaming-gradient-accent px-3 py-1 rounded-full text-sm font-medium">
              Sort: {sortOptions.find(opt => opt.value === selectedSort)?.label}
              <button
                onClick={() => handleSortChange('')}
                className="ml-2 text-primary-foreground hover:text-accent"
              >
                ✕
              </button>
            </span>
          )}
        </div>
      )}
    </div>
  )
}

export function QuickFilters({
  filters,
  activeFilter,
  onFilterChange
}: {
  filters: { label: string; value: string; icon?: string }[]
  activeFilter: string
  onFilterChange: (filter: string) => void
}) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onFilterChange(filter.value)}
          className={cn(
            'flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-sm uppercase tracking-wide transition-all',
            activeFilter === filter.value
              ? 'gaming-gradient text-primary-foreground neon-glow'
              : 'bg-card text-muted-foreground hover:text-foreground hover:bg-muted border border-border'
          )}
        >
          {filter.icon && <span>{filter.icon}</span>}
          <span>{filter.label}</span>
        </button>
      ))}
    </div>
  )
}