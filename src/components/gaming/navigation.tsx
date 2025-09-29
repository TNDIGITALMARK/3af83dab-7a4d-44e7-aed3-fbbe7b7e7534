'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navigationItems = [
  { href: '/', label: 'Live Hub', icon: '🎮' },
  { href: '/guides', label: 'Strategy & Guides', icon: '📚' },
  { href: '/community', label: 'Community & Clips', icon: '🎬' },
]

export function GamingNavigation() {
  const pathname = usePathname()

  return (
    <nav className="gaming-bg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="gaming-title text-2xl font-bold">
              FORTNITE HUB
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-300 font-medium uppercase text-sm tracking-wide',
                  pathname === item.href
                    ? 'gaming-gradient text-primary-foreground neon-glow'
                    : 'text-muted-foreground hover:text-foreground hover:bg-card'
                )}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="gaming-button px-3 py-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}