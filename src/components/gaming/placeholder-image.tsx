'use client'

import { cn } from '@/lib/utils'

interface PlaceholderImageProps {
  type: 'hero' | 'news' | 'guide' | 'clip' | 'thumbnail'
  title?: string
  className?: string
  aspectRatio?: string
}

const placeholderContent = {
  hero: { icon: '🎮', text: 'FORTNITE HUB', gradient: 'gaming-gradient' },
  news: { icon: '📰', text: 'BREAKING NEWS', gradient: 'gaming-gradient-secondary' },
  guide: { icon: '📚', text: 'STRATEGY GUIDE', gradient: 'gaming-gradient' },
  clip: { icon: '🎬', text: 'EPIC CLIP', gradient: 'gaming-gradient-accent' },
  thumbnail: { icon: '🎯', text: 'FORTNITE', gradient: 'gaming-gradient' }
}

export function PlaceholderImage({
  type,
  title,
  className,
  aspectRatio = '16/9'
}: PlaceholderImageProps) {
  const content = placeholderContent[type]

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-lg flex items-center justify-center text-center',
        content.gradient,
        className
      )}
      style={{ aspectRatio }}
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent animate-pulse" />
        <div className="grid grid-cols-8 h-full opacity-20">
          {Array.from({ length: 32 }).map((_, i) => (
            <div key={i} className="border border-white/10" />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-4">
        <div className="text-4xl mb-2 drop-shadow-lg">
          {content.icon}
        </div>
        <div className="font-bold text-lg uppercase tracking-wider drop-shadow-lg text-primary-foreground">
          {title || content.text}
        </div>
        {type === 'hero' && (
          <div className="text-sm mt-2 text-primary-foreground/80">
            Epic Gaming Hub
          </div>
        )}
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-0 h-0 border-l-[40px] border-l-transparent border-t-[40px] border-t-accent opacity-60" />
    </div>
  )
}

export function GamingIcon({
  type,
  size = 'md',
  animated = false
}: {
  type: 'battle-royale' | 'creative' | 'save-world' | 'party' | 'tournament' | 'news' | 'guide' | 'clip'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  animated?: boolean
}) {
  const icons = {
    'battle-royale': '⚡',
    'creative': '🏗️',
    'save-world': '🌍',
    'party': '🎉',
    'tournament': '🏆',
    'news': '📰',
    'guide': '📚',
    'clip': '🎬'
  }

  const sizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl',
    xl: 'text-6xl'
  }

  return (
    <span
      className={cn(
        sizes[size],
        animated && 'hover:scale-110 transition-transform duration-300'
      )}
    >
      {icons[type]}
    </span>
  )
}