'use client'

import { useState } from 'react'
import { GamingLayout } from '@/components/gaming/layout'
import { SectionBanner } from '@/components/gaming/hero-banner'
import { GuideCard, GamingCard } from '@/components/gaming/gaming-card'
import { SearchFilter, QuickFilters } from '@/components/gaming/search-filter'
import { GamingIcon } from '@/components/gaming/placeholder-image'

const mockGuides = [
  {
    id: 1,
    title: 'Master Building Techniques',
    description: 'Learn advanced building strategies including 90s, tunneling, and high ground retakes that will give you the edge in every fight.',
    difficulty: 'Advanced' as const,
    duration: '45 min',
    author: 'ProBuilder92',
    rating: 5,
    category: 'Building',
    tags: ['Building', 'Combat', 'Advanced']
  },
  {
    id: 2,
    title: 'Landing Spot Tier List',
    description: 'Complete analysis of all landing spots with loot ratings, rotation paths, and strategic advantages for competitive play.',
    difficulty: 'Intermediate' as const,
    duration: '25 min',
    author: 'MapMaster',
    rating: 4,
    category: 'Map Strategy',
    tags: ['Map', 'Loot', 'Rotation']
  },
  {
    id: 3,
    title: 'Zero Build Victory Guide',
    description: 'Dominate Zero Build mode with positioning, cover usage, and weapon selection strategies designed for building-free gameplay.',
    difficulty: 'Beginner' as const,
    duration: '20 min',
    author: 'ZeroBuildKing',
    rating: 5,
    category: 'Zero Build',
    tags: ['Zero Build', 'Positioning', 'Beginner']
  },
  {
    id: 4,
    title: 'Weapon Meta Analysis',
    description: 'In-depth breakdown of current weapon statistics, optimal loadouts, and damage calculations for Season 5.',
    difficulty: 'Intermediate' as const,
    duration: '30 min',
    author: 'WeaponExpert',
    rating: 4,
    category: 'Weapons',
    tags: ['Weapons', 'Meta', 'Statistics']
  },
  {
    id: 5,
    title: 'Solo vs Squad Tactics',
    description: 'Proven strategies for taking on full squads alone, including third-partying, disengagement, and clutch techniques.',
    difficulty: 'Pro' as const,
    duration: '60 min',
    author: 'SoloLegend',
    rating: 5,
    category: 'Advanced Combat',
    tags: ['Solo', 'Squad', 'Combat', 'Pro']
  },
  {
    id: 6,
    title: 'Creative Training Routines',
    description: 'Daily practice routines using Creative mode to improve aim, editing speed, and building muscle memory.',
    difficulty: 'Beginner' as const,
    duration: '15 min',
    author: 'TrainerPro',
    rating: 4,
    category: 'Training',
    tags: ['Training', 'Creative', 'Practice']
  }
]

const difficultyFilters = [
  { label: 'All Levels', value: 'All', icon: '🎮' },
  { label: 'Beginner', value: 'Beginner', icon: '🟢' },
  { label: 'Intermediate', value: 'Intermediate', icon: '🟡' },
  { label: 'Advanced', value: 'Advanced', icon: '🟠' },
  { label: 'Pro', value: 'Pro', icon: '🔴' }
]

const categoryFilters = ['All', 'Building', 'Map Strategy', 'Zero Build', 'Weapons', 'Advanced Combat', 'Training']

const featuredStrategies = [
  {
    title: 'Storm Management',
    description: 'Master storm rotations and positioning',
    icon: '🌀',
    color: 'gaming-gradient'
  },
  {
    title: 'Aim Training',
    description: 'Improve your accuracy and tracking',
    icon: '🎯',
    color: 'gaming-gradient-secondary'
  },
  {
    title: 'Game Sense',
    description: 'Develop strategic thinking and awareness',
    icon: '🧠',
    color: 'gaming-gradient-accent'
  }
]

export default function GuidesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeDifficulty, setActiveDifficulty] = useState('All')
  const [activeCategory, setActiveCategory] = useState('All')
  const [filteredGuides, setFilteredGuides] = useState(mockGuides)

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    filterGuides(query, activeDifficulty, activeCategory)
  }

  const handleFilterChange = (filters: any) => {
    const { difficulty, category } = filters
    if (difficulty !== undefined) setActiveDifficulty(difficulty)
    if (category !== undefined) setActiveCategory(category)
    filterGuides(searchQuery, difficulty || activeDifficulty, category || activeCategory)
  }

  const handleDifficultyChange = (difficulty: string) => {
    setActiveDifficulty(difficulty)
    filterGuides(searchQuery, difficulty, activeCategory)
  }

  const filterGuides = (query: string, difficulty: string, category: string) => {
    let filtered = mockGuides

    if (difficulty !== 'All') {
      filtered = filtered.filter(guide => guide.difficulty === difficulty)
    }

    if (category !== 'All') {
      filtered = filtered.filter(guide => guide.category === category)
    }

    if (query) {
      filtered = filtered.filter(guide =>
        guide.title.toLowerCase().includes(query.toLowerCase()) ||
        guide.description.toLowerCase().includes(query.toLowerCase()) ||
        guide.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
      )
    }

    setFilteredGuides(filtered)
  }

  return (
    <GamingLayout>
      {/* Page Header */}
      <SectionBanner
        title="Strategy & Guides Center"
        subtitle="Level up your game with expert strategies and comprehensive guides"
        icon="📚"
      />

      {/* Featured Strategies */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="gaming-title text-3xl mb-8 flex items-center">
          <GamingIcon type="guide" size="lg" animated />
          <span className="ml-4">Core Strategies</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featuredStrategies.map((strategy, index) => (
            <GamingCard key={index} className="text-center" variant="glow">
              <div className="text-5xl mb-4">{strategy.icon}</div>
              <h3 className="gaming-subtitle text-xl mb-2">{strategy.title}</h3>
              <p className="text-muted-foreground mb-4">{strategy.description}</p>
              <button className="gaming-button w-full">Learn More</button>
            </GamingCard>
          ))}
        </div>
      </section>

      {/* Guides Library */}
      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="gaming-subtitle text-2xl">Complete Guide Library</h2>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <span>📊</span>
            <span>{filteredGuides.length} guides available</span>
          </div>
        </div>

        {/* Search and Filters */}
        <SearchFilter
          onSearch={handleSearch}
          onFilterChange={handleFilterChange}
          categories={categoryFilters}
          sortOptions={[
            { value: 'newest', label: 'Newest First' },
            { value: 'rating', label: 'Highest Rated' },
            { value: 'difficulty', label: 'Difficulty' },
            { value: 'duration', label: 'Duration' }
          ]}
          placeholder="Search guides, strategies, and tutorials..."
        />

        {/* Difficulty Filters */}
        <div className="mb-8">
          <h3 className="gaming-subtitle text-lg mb-4">Filter by Difficulty</h3>
          <QuickFilters
            filters={difficultyFilters}
            activeFilter={activeDifficulty}
            onFilterChange={handleDifficultyChange}
          />
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredGuides.map(guide => (
            <GuideCard key={guide.id} {...guide} />
          ))}
        </div>

        {filteredGuides.length === 0 && (
          <div className="text-center py-12">
            <div className="gaming-gradient-secondary p-8 rounded-lg inline-block">
              <div className="text-6xl mb-4">📚</div>
              <p className="gaming-subtitle text-xl">No guides found</p>
              <p className="text-muted-foreground mt-2">
                Try adjusting your search criteria or difficulty level
              </p>
            </div>
          </div>
        )}

        {/* Quick Tips Section */}
        <div className="mt-16">
          <h2 className="gaming-title text-3xl mb-8 text-center">Daily Pro Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GamingCard variant="gradient">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">💡</div>
                <div>
                  <h4 className="gaming-subtitle text-lg mb-2">Building Tip #1</h4>
                  <p className="text-muted-foreground">
                    Always pre-edit your builds when you have time. Having pre-edited stairs and pyramids ready
                    can save crucial milliseconds in combat situations.
                  </p>
                </div>
              </div>
            </GamingCard>

            <GamingCard variant="glow">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">⚡</div>
                <div>
                  <h4 className="gaming-subtitle text-lg mb-2">Combat Tip #1</h4>
                  <p className="text-muted-foreground">
                    Use sound to your advantage. Listen for enemy footsteps, reloading sounds, and building
                    to anticipate their next move and position yourself accordingly.
                  </p>
                </div>
              </div>
            </GamingCard>
          </div>
        </div>
      </section>
    </GamingLayout>
  )
}