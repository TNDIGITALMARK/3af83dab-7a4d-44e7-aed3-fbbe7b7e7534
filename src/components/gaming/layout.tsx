'use client'

import { ReactNode } from 'react'
import { GamingNavigation } from './navigation'

interface GamingLayoutProps {
  children: ReactNode
}

export function GamingLayout({ children }: GamingLayoutProps) {
  return (
    <div className="min-h-screen gaming-bg">
      <GamingNavigation />
      <main>{children}</main>
      <footer className="border-t border-border/50 mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo & Description */}
            <div className="md:col-span-2">
              <div className="gaming-title text-2xl font-bold mb-4">
                FORTNITE HUB
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Your ultimate destination for Fortnite news, strategies, guides, and community content.
                Stay ahead of the game with real-time updates and expert insights.
              </p>
              <div className="flex space-x-4">
                <button className="text-primary hover:text-accent transition-colors text-2xl">📘</button>
                <button className="text-primary hover:text-accent transition-colors text-2xl">🐦</button>
                <button className="text-primary hover:text-accent transition-colors text-2xl">📹</button>
                <button className="text-primary hover:text-accent transition-colors text-2xl">💬</button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="gaming-subtitle text-lg mb-4">Quick Links</h3>
              <div className="space-y-2">
                {[
                  'Latest News',
                  'Battle Royale Guides',
                  'Creative Modes',
                  'Tournament Schedule',
                  'Community Clips'
                ].map((link) => (
                  <button
                    key={link}
                    className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            {/* Game Modes */}
            <div>
              <h3 className="gaming-subtitle text-lg mb-4">Game Modes</h3>
              <div className="space-y-2">
                {[
                  { name: 'Battle Royale', icon: '⚡' },
                  { name: 'Zero Build', icon: '🚫' },
                  { name: 'Creative', icon: '🏗️' },
                  { name: 'Save the World', icon: '🌍' },
                  { name: 'Party Royale', icon: '🎉' }
                ].map((mode) => (
                  <button
                    key={mode.name}
                    className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    <span>{mode.icon}</span>
                    <span>{mode.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © 2024 Fortnite Hub. Fortnite is a trademark of Epic Games, Inc.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <button className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}