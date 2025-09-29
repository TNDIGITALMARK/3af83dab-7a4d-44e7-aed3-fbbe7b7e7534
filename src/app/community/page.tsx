'use client'

import { useState } from 'react'
import { GamingLayout } from '@/components/gaming/layout'
import { SectionBanner } from '@/components/gaming/hero-banner'
import { GamingCard } from '@/components/gaming/gaming-card'
import { SearchFilter, QuickFilters } from '@/components/gaming/search-filter'
import { PlaceholderImage, GamingIcon } from '@/components/gaming/placeholder-image'

interface ClipData {
  id: number
  title: string
  author: string
  description: string
  views: string
  likes: number
  timestamp: string
  category: string
  featured?: boolean
  difficulty?: 'Beginner' | 'Pro' | 'Insane'
}

const mockClips: ClipData[] = [
  {
    id: 1,
    title: 'INSANE 1v4 Squad Wipe with 200 IQ Play',
    author: 'EpicPlayer_YT',
    description: 'Clutched a 1v4 situation using storm positioning and third-party timing. This play shows perfect game sense and mechanical skill.',
    views: '2.1M',
    likes: 89432,
    timestamp: '3 hours ago',
    category: 'Combat',
    featured: true,
    difficulty: 'Insane'
  },
  {
    id: 2,
    title: 'Creative Building Masterpiece',
    author: 'BuilderKing',
    description: 'Recreated Tilted Towers in Creative mode with full detail and interactive elements. Over 200 hours of work!',
    views: '856K',
    likes: 45231,
    timestamp: '8 hours ago',
    category: 'Creative',
    difficulty: 'Pro'
  },
  {
    id: 3,
    title: 'Zero Build Victory Royale Tutorial',
    author: 'NewbieFriendly',
    description: 'Step-by-step guide to winning in Zero Build mode, perfect for beginners. Covers positioning, rotations, and weapon choices.',
    views: '423K',
    likes: 18654,
    timestamp: '1 day ago',
    category: 'Tutorial',
    difficulty: 'Beginner'
  },
  {
    id: 4,
    title: 'Funniest Fortnite Moments Compilation',
    author: 'LaughTracker',
    description: 'Best funny moments from the community this week. Includes epic fails, lucky shots, and hilarious interactions.',
    views: '1.5M',
    likes: 72341,
    timestamp: '2 days ago',
    category: 'Entertainment',
    featured: true
  },
  {
    id: 5,
    title: 'Advanced Edit Course World Record',
    author: 'EditGod',
    description: 'New world record on the hardest edit course in Creative mode. Frame-perfect execution and incredible speed.',
    views: '678K',
    likes: 34521,
    timestamp: '3 days ago',
    category: 'Training',
    difficulty: 'Insane'
  },
  {
    id: 6,
    title: 'Team Coordination in Ranked',
    author: 'SquadLeader',
    description: 'Perfect team communication and strategy in Champions League. Shows how proper callouts and positioning win games.',
    views: '389K',
    likes: 15632,
    timestamp: '4 days ago',
    category: 'Competitive',
    difficulty: 'Pro'
  }
]

const clipCategories = [
  { label: 'All Clips', value: 'All', icon: '🎬' },
  { label: 'Combat', value: 'Combat', icon: '⚔️' },
  { label: 'Creative', value: 'Creative', icon: '🏗️' },
  { label: 'Tutorial', value: 'Tutorial', icon: '📚' },
  { label: 'Entertainment', value: 'Entertainment', icon: '😄' },
  { label: 'Training', value: 'Training', icon: '🎯' },
  { label: 'Competitive', value: 'Competitive', icon: '🏆' }
]

const communityStats = [
  { label: 'Active Creators', value: '15K+', icon: '🎥', color: 'text-primary' },
  { label: 'Clips Shared', value: '500K+', icon: '🎬', color: 'text-secondary' },
  { label: 'Total Views', value: '2.8B+', icon: '👁️', color: 'text-accent' },
  { label: 'Community Votes', value: '12M+', icon: '❤️', color: 'text-primary' }
]

function ClipCard({ clip }: { clip: ClipData }) {
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(clip.likes)

  const handleLike = () => {
    setLiked(!liked)
    setLikeCount(liked ? likeCount - 1 : likeCount + 1)
  }

  const getDifficultyColor = (difficulty?: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500/20 text-green-400'
      case 'Pro': return 'bg-orange-500/20 text-orange-400'
      case 'Insane': return 'bg-red-500/20 text-red-400'
      default: return ''
    }
  }

  return (
    <GamingCard
      className="group"
      variant={clip.featured ? 'glow' : 'default'}
      hoverable
    >
      {/* Thumbnail */}
      <div className="mb-4 relative">
        <PlaceholderImage type="clip" title={clip.category} className="aspect-video" />

        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="gaming-button p-4 rounded-full">
            ▶️
          </button>
        </div>

        {/* Category Badge */}
        <div className="absolute top-2 left-2">
          <span className="gaming-gradient px-2 py-1 rounded text-xs font-bold uppercase">
            {clip.category}
          </span>
        </div>

        {/* Difficulty Badge */}
        {clip.difficulty && (
          <div className="absolute top-2 right-2">
            <span className={`px-2 py-1 rounded text-xs font-bold ${getDifficultyColor(clip.difficulty)}`}>
              {clip.difficulty}
            </span>
          </div>
        )}

        {/* Duration */}
        <div className="absolute bottom-2 right-2">
          <span className="bg-black/80 px-2 py-1 rounded text-xs text-white">
            2:34
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">
          {clip.title}
        </h3>

        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <span>By {clip.author}</span>
          <span>•</span>
          <span>{clip.timestamp}</span>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed">
          {clip.description}
        </p>

        {/* Stats and Actions */}
        <div className="flex items-center justify-between pt-2 border-t border-border/50">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span className="flex items-center space-x-1">
              <span>👁️</span>
              <span>{clip.views}</span>
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleLike}
              className={`flex items-center space-x-1 px-3 py-1 rounded transition-all ${
                liked
                  ? 'text-red-400 bg-red-500/10'
                  : 'text-muted-foreground hover:text-red-400 hover:bg-red-500/5'
              }`}
            >
              <span>{liked ? '❤️' : '🤍'}</span>
              <span className="text-sm">{likeCount.toLocaleString()}</span>
            </button>

            <button className="text-muted-foreground hover:text-primary transition-colors p-1">
              <span>💬</span>
            </button>

            <button className="text-muted-foreground hover:text-primary transition-colors p-1">
              <span>🔗</span>
            </button>
          </div>
        </div>
      </div>
    </GamingCard>
  )
}

export default function CommunityPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [filteredClips, setFilteredClips] = useState(mockClips)

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    filterClips(query, activeCategory)
  }

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    filterClips(searchQuery, category)
  }

  const filterClips = (query: string, category: string) => {
    let filtered = mockClips

    if (category !== 'All') {
      filtered = filtered.filter(clip => clip.category === category)
    }

    if (query) {
      filtered = filtered.filter(clip =>
        clip.title.toLowerCase().includes(query.toLowerCase()) ||
        clip.description.toLowerCase().includes(query.toLowerCase()) ||
        clip.author.toLowerCase().includes(query.toLowerCase())
      )
    }

    setFilteredClips(filtered)
  }

  const featuredClips = filteredClips.filter(clip => clip.featured)
  const regularClips = filteredClips.filter(clip => !clip.featured)

  return (
    <GamingLayout>
      {/* Page Header */}
      <SectionBanner
        title="Community & Clips Showcase"
        subtitle="Discover amazing content created by the Fortnite community"
        icon="🎬"
      />

      {/* Community Stats */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {communityStats.map((stat, index) => (
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

      {/* Featured Content */}
      {featuredClips.length > 0 && (
        <section className="container mx-auto px-4 mb-12">
          <h2 className="gaming-title text-3xl mb-8 flex items-center">
            <GamingIcon type="clip" size="lg" animated />
            <span className="ml-4">Featured Content</span>
            <span className="ml-4 text-lg neon-glow-orange">🔥</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredClips.map(clip => (
              <ClipCard key={clip.id} clip={clip} />
            ))}
          </div>
        </section>
      )}

      {/* All Content */}
      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="gaming-subtitle text-2xl">Community Showcase</h2>
          <button className="gaming-button">
            📤 Upload Your Clip
          </button>
        </div>

        {/* Search and Filters */}
        <SearchFilter
          onSearch={handleSearch}
          onFilterChange={() => {}}
          sortOptions={[
            { value: 'trending', label: 'Trending' },
            { value: 'newest', label: 'Newest' },
            { value: 'most-liked', label: 'Most Liked' },
            { value: 'most-viewed', label: 'Most Viewed' }
          ]}
          placeholder="Search clips, creators, and content..."
        />

        <QuickFilters
          filters={clipCategories}
          activeFilter={activeCategory}
          onFilterChange={handleCategoryChange}
        />

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {regularClips.map(clip => (
            <ClipCard key={clip.id} clip={clip} />
          ))}
        </div>

        {filteredClips.length === 0 && (
          <div className="text-center py-12">
            <div className="gaming-gradient-secondary p-8 rounded-lg inline-block">
              <div className="text-6xl mb-4">🎬</div>
              <p className="gaming-subtitle text-xl">No content found</p>
              <p className="text-muted-foreground mt-2">
                Try adjusting your search or explore different categories
              </p>
            </div>
          </div>
        )}

        {/* Creator Spotlight */}
        <div className="mt-16">
          <h2 className="gaming-title text-3xl mb-8 text-center">Creator Spotlight</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['BuildMaster_YT', 'EditingPro', 'ComboKing'].map((creator, index) => (
              <GamingCard key={creator} className="text-center" variant={index === 1 ? 'glow' : 'default'}>
                <div className="gaming-gradient-accent w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                  🎮
                </div>
                <h3 className="gaming-subtitle text-xl mb-2">{creator}</h3>
                <p className="text-muted-foreground mb-4">
                  {index === 0 && '🏆 Master Builder • 2.1M subscribers'}
                  {index === 1 && '⚡ Edit God • 1.8M subscribers'}
                  {index === 2 && '🎯 Combo Expert • 950K subscribers'}
                </p>
                <button className="gaming-button w-full">
                  Follow
                </button>
              </GamingCard>
            ))}
          </div>
        </div>
      </section>
    </GamingLayout>
  )
}