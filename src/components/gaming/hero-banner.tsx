'use client'

import { cn } from '@/lib/utils'

interface HeroBannerProps {
  title: string
  subtitle: string
  description?: string
  className?: string
}

export function HeroBanner({
  title,
  subtitle,
  description,
  className
}: HeroBannerProps) {
  return (
    <section className={cn('relative overflow-hidden', className)}>
      {/* Animated Background */}
      <div className="absolute inset-0 gaming-bg" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full pulse-glow animation-delay-0" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-secondary rounded-full pulse-glow animation-delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-accent rounded-full pulse-glow animation-delay-2000" />
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-primary rounded-full pulse-glow animation-delay-3000" />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 60 }).map((_, i) => (
              <div key={i} className="border border-primary/20" />
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <h1 className="gaming-title text-6xl md:text-8xl mb-6 leading-tight">
            {title}
          </h1>

          {/* Subtitle */}
          <h2 className="gaming-subtitle text-2xl md:text-3xl mb-8">
            {subtitle}
          </h2>

          {/* Description */}
          {description && (
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              {description}
            </p>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="gaming-button text-lg px-8 py-4">
              🚀 Jump In Now
            </button>
            <button className="gaming-button bg-secondary hover:bg-secondary/80 text-lg px-8 py-4">
              📊 View Stats
            </button>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}

export function SectionBanner({
  title,
  subtitle,
  icon,
  className
}: {
  title: string
  subtitle?: string
  icon?: string
  className?: string
}) {
  return (
    <div className={cn('gaming-bg py-16 border-b border-border/50', className)}>
      <div className="container mx-auto px-4 text-center">
        {icon && <div className="text-6xl mb-4">{icon}</div>}
        <h1 className="gaming-title text-4xl md:text-5xl mb-4">{title}</h1>
        {subtitle && (
          <p className="gaming-subtitle text-lg md:text-xl text-muted-foreground">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}