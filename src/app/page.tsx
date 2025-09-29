'use client'

import { useState } from 'react'
import { GamingLayout } from '@/components/gaming/layout'
import { HeroBanner } from '@/components/gaming/hero-banner'
import { NewsCard, GamingCard } from '@/components/gaming/gaming-card'
import { SearchFilter, QuickFilters } from '@/components/gaming/search-filter'
import { PlaceholderImage, GamingIcon } from '@/components/gaming/placeholder-image'

export const dynamic = 'force-dynamic'

const mockNews = [
  {
    id: 1,
    title: 'Chapter 5 Season 1 Battle Pass Now Available',
    excerpt: 'Unlock over 100 new rewards including exclusive skins, emotes, and V-Bucks. The new battle pass features underground themes and unique challenges.',
    timestamp: '2 hours ago',
    category: 'Battle Pass',
    priority: true
  },
  {
    id: 2,
    title: 'New Weapon: Explosive Assault Rifle',
    excerpt: 'A powerful new weapon has been added to the loot pool. This explosive variant deals area damage and is perfect for breaking through builds.',
    timestamp: '4 hours ago',
    category: 'Weapons'
  },
  {
    id: 3,
    title: 'Limited Time Mode: Floor is Lava Returns',
    excerpt: 'The popular LTM is back! Stay above the rising lava and be the last player standing in this fast-paced survival mode.',
    timestamp: '6 hours ago',
    category: 'LTM'
  },
  {
    id: 4,
    title: 'Creative Mode: New Building Tools',
    excerpt: 'Enhanced building mechanics and new prefabs are now available in Creative mode. Perfect for map makers and creative builders.',
    timestamp: '8 hours ago',
    category: 'Creative'
  },
  {
    id: 5,
    title: 'Tournament Alert: Solo Cash Cup Tonight',
    excerpt: 'Compete in tonight\'s Solo Cash Cup for your chance to earn V-Bucks and climb the competitive leaderboard.',
    timestamp: '12 hours ago',
    category: 'Tournaments'
  },
  {
    id: 6,
    title: 'Map Update: New POI Underground Facility',
    excerpt: 'Explore the mysterious underground facility with unique loot spawns and interactive elements. Watch out for the security systems!',
    timestamp: '1 day ago',
    category: 'Map Updates'
  }
]

const quickStats = [
  { label: 'Active Players', value: '400M+', icon: '👥', color: 'text-primary' },
  { label: 'Daily Matches', value: '25M+', icon: '⚡', color: 'text-secondary' },
  { label: 'Total Eliminations', value: '1.2B+', icon: '🎯', color: 'text-accent' },
  { label: 'Victory Royales', value: '500M+', icon: '👑', color: 'text-primary' }
]

const categories = ['All', 'Battle Pass', 'Weapons', 'LTM', 'Creative', 'Tournaments', 'Map Updates']

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState('All')
  const [filteredNews, setFilteredNews] = useState(mockNews)

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    filterNews(query, activeFilter)
  }

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter)
    filterNews(searchQuery, filter)
  }

  const filterNews = (query: string, filter: string) => {
    let filtered = mockNews

    if (filter !== 'All') {
      filtered = filtered.filter(news => news.category === filter)
    }

    if (query) {
      filtered = filtered.filter(news =>
        news.title.toLowerCase().includes(query.toLowerCase()) ||
        news.excerpt.toLowerCase().includes(query.toLowerCase())
      )
    }

    setFilteredNews(filtered)
  }

  return (
    <GamingLayout>
      {/* Hero Section */}
      <HeroBanner
        title="FORTNITE HUB"
        subtitle="Your Ultimate Gaming Command Center"
        description="Stay ahead of the storm with real-time updates, expert strategies, and the latest community content"
      />

      {/* Quick Stats */}
      <section className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {quickStats.map((stat, index) => (
            <GamingCard key={index} className="text-center" variant="glow">
              <div className={`text-3xl mb-2 ${stat.color}`}>
                {stat.icon}
              </div>
              <div className="gaming-title text-2xl mb-1">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">
                {stat.label}
              </div>
            </GamingCard>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 relative">
        {/* Background Particles Overlay */}
        <div
          className="absolute inset-0 -inset-x-4 bg-cover bg-center bg-no-repeat opacity-5 pointer-events-none"
          style={{
            backgroundImage: 'url(/generated/particles-overlay.png)'
          }}
        />
        {/* Featured News */}
        <div className="mb-12">
          <h2 className="gaming-title text-3xl mb-8 flex items-center">
            <GamingIcon type="news" size="lg" animated />
            <span className="ml-4">Breaking News</span>
          </h2>

          {/* Priority News */}
          <div className="mb-8">
            {filteredNews
              .filter(news => news.priority)
              .map(news => (
                <NewsCard
                  key={news.id}
                  {...news}
                  image="featured"
                />
              ))}
          </div>
        </div>

        {/* Live Updates Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="gaming-subtitle text-2xl flex items-center">
              <span className="pulse-glow mr-3">🔴</span>
              Live Updates Hub
            </h2>
            <button className="gaming-button">
              View All Updates
            </button>
          </div>

          {/* Search and Filters */}
          <SearchFilter
            onSearch={handleSearch}
            onFilterChange={() => {}}
            placeholder="Search news, updates, and announcements..."
          />

          <QuickFilters
            filters={categories.map(cat => ({
              label: cat,
              value: cat,
              icon: cat === 'All' ? '🎮' : undefined
            }))}
            activeFilter={activeFilter}
            onFilterChange={handleFilterChange}
          />

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews
              .filter(news => !news.priority)
              .map(news => (
                <NewsCard
                  key={news.id}
                  {...news}
                  image="thumbnail"
                />
              ))}
          </div>

          {filteredNews.length === 0 && (
            <div className="text-center py-12">
              <div className="gaming-gradient-secondary p-8 rounded-lg inline-block">
                <div className="text-6xl mb-4">🔍</div>
                <p className="gaming-subtitle text-xl">No results found</p>
                <p className="text-muted-foreground mt-2">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Quick Access Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Game Modes */}
          <GamingCard className="text-center relative overflow-hidden" variant="gradient">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
              style={{
                backgroundImage: 'url(/generated/battle-royale-mode.png)'
              }}
            />
            <div className="relative z-10">
              <GamingIcon type="battle-royale" size="xl" />
              <h3 className="gaming-subtitle text-xl mt-4 mb-2">Battle Royale</h3>
              <p className="text-muted-foreground mb-4">
                Jump into the action with 100 players fighting to be the last one standing
              </p>
              <button className="gaming-button w-full">
                Play Now
              </button>
            </div>
          </GamingCard>

          <GamingCard className="text-center relative overflow-hidden" variant="glow">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
              style={{
                backgroundImage: 'url(/generated/creative-mode.png)'
              }}
            />
            <div className="relative z-10">
              <GamingIcon type="creative" size="xl" />
              <h3 className="gaming-subtitle text-xl mt-4 mb-2">Creative Mode</h3>
              <p className="text-muted-foreground mb-4">
                Build, explore, and play games created by the community
              </p>
              <button className="gaming-button w-full">
                Explore
              </button>
            </div>
          </GamingCard>

          <GamingCard className="text-center relative overflow-hidden" variant="pulse">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
              style={{
                backgroundImage: 'url(/generated/tournament-mode.png)'
              }}
            />
            <div className="relative z-10">
              <GamingIcon type="tournament" size="xl" />
              <h3 className="gaming-subtitle text-xl mt-4 mb-2">Tournaments</h3>
              <p className="text-muted-foreground mb-4">
                Compete in official tournaments and climb the competitive ranks
              </p>
              <button className="gaming-button w-full">
                Compete
              </button>
            </div>
          </GamingCard>
        </div>
      </section>
    </GamingLayout>
  )
}