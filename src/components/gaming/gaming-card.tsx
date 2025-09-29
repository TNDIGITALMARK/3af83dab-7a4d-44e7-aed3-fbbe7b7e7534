'use client'

import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface GamingCardProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'gradient' | 'glow' | 'pulse'
  hoverable?: boolean
}

export function GamingCard({
  children,
  className,
  variant = 'default',
  hoverable = false
}: GamingCardProps) {
  return (
    <div
      className={cn(
        'gaming-card p-6',
        variant === 'gradient' && 'gaming-gradient',
        variant === 'glow' && 'neon-glow',
        variant === 'pulse' && 'pulse-glow',
        hoverable && 'transition-transform hover:scale-105 hover:-translate-y-1 cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  )
}

export function NewsCard({
  title,
  excerpt,
  timestamp,
  category,
  image,
  priority = false
}: {
  title: string
  excerpt: string
  timestamp: string
  category: string
  image?: string
  priority?: boolean
}) {
  return (
    <GamingCard
      className={cn('group', priority && 'neon-glow-orange')}
      hoverable
    >
      {/* Category Badge */}
      <div className="flex items-center justify-between mb-4">
        <span className={cn(
          'gaming-gradient px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide',
          priority ? 'gaming-gradient-accent' : 'gaming-gradient'
        )}>
          {category}
        </span>
        <span className="text-xs text-muted-foreground">{timestamp}</span>
      </div>

      {/* Image Placeholder */}
      {image && (
        <div className="mb-4 rounded-lg overflow-hidden">
          <div className="gaming-gradient-secondary h-48 flex items-center justify-center text-2xl font-bold">
            🎮 {category.toUpperCase()}
          </div>
        </div>
      )}

      {/* Content */}
      <h3 className="gaming-title text-lg mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {excerpt}
      </p>

      {/* Action Footer */}
      <div className="mt-4 pt-4 border-t border-border/50 flex items-center justify-between">
        <button className="text-primary text-sm font-medium uppercase tracking-wide hover:text-accent transition-colors">
          Read More →
        </button>
        <div className="flex space-x-2">
          <button className="text-muted-foreground hover:text-primary transition-colors text-sm">
            ❤️ 42
          </button>
          <button className="text-muted-foreground hover:text-primary transition-colors text-sm">
            💬 8
          </button>
        </div>
      </div>
    </GamingCard>
  )
}

export function GuideCard({
  title,
  description,
  difficulty,
  duration,
  author,
  rating,
  image
}: {
  title: string
  description: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Pro'
  duration: string
  author: string
  rating: number
  image?: string
}) {
  const difficultyColors = {
    'Beginner': 'bg-green-500/20 text-green-400',
    'Intermediate': 'bg-yellow-500/20 text-yellow-400',
    'Advanced': 'bg-orange-500/20 text-orange-400',
    'Pro': 'bg-red-500/20 text-red-400'
  }

  return (
    <GamingCard hoverable className="h-full">
      {/* Image Placeholder */}
      <div className="mb-4 rounded-lg overflow-hidden">
        <div className="gaming-gradient h-40 flex items-center justify-center text-xl font-bold">
          📚 GUIDE
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <span className={cn('px-2 py-1 rounded text-xs font-bold', difficultyColors[difficulty])}>
          {difficulty}
        </span>
        <div className="flex items-center space-x-1 text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={i < rating ? 'text-yellow-400' : 'text-muted-foreground'}>
              ⭐
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <h3 className="gaming-subtitle text-base mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
        {description}
      </p>

      {/* Footer */}
      <div className="mt-auto pt-4 border-t border-border/50">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>By {author}</span>
          <span>{duration}</span>
        </div>
      </div>
    </GamingCard>
  )
}