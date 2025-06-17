import { Suspense } from "react"
import SpotlightSection from "@/components/spotlight-section"
import ContinueReadingSection from "@/components/continue-reading-section"
import TrendingMangaSection from "@/components/trending-manga-section"
import RecentMangaSection from "@/components/recent-manga-section"
import LoadingSpinner from "@/components/loading-spinner"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Clean animated background without twinkling stars */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 py-8 space-y-20">
          {/* Spotlight loads first with priority */}
          <Suspense fallback={
            <div className="relative h-[80vh] bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-3xl overflow-hidden animate-pulse">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700" />
              <div className="absolute bottom-8 left-8 space-y-4">
                <div className="h-12 bg-gray-700 rounded w-80" />
                <div className="h-6 bg-gray-700 rounded w-96" />
                <div className="h-16 bg-gray-700 rounded w-40" />
              </div>
            </div>
          }>
            <SpotlightSection />
          </Suspense>
          
          {/* Continue Reading loads second */}
          <Suspense fallback={
            <div className="space-y-6">
              <div className="h-8 bg-gray-800 rounded w-64 animate-pulse" />
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-gray-800 rounded-xl p-3 animate-pulse">
                    <div className="aspect-[3/4] bg-gray-700 rounded-lg mb-3" />
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-700 rounded w-full" />
                      <div className="h-2 bg-gray-700 rounded w-2/3" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          }>
            <ContinueReadingSection />
          </Suspense>
          
          {/* Trending loads third */}
          <Suspense fallback={
            <div className="space-y-6">
              <div className="h-8 bg-gray-800 rounded w-64 animate-pulse" />
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="bg-gray-800 rounded-xl p-4 animate-pulse">
                    <div className="aspect-[3/4] bg-gray-700 rounded-lg mb-4" />
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-700 rounded w-3/4" />
                      <div className="h-3 bg-gray-700 rounded w-1/2" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          }>
            <TrendingMangaSection />
          </Suspense>
          
          {/* Recent loads last */}
          <Suspense fallback={
            <div className="space-y-6">
              <div className="h-8 bg-gray-800 rounded w-64 animate-pulse" />
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="bg-gray-800 rounded-xl p-3 animate-pulse">
                    <div className="aspect-[3/4] bg-gray-700 rounded-lg mb-3" />
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-700 rounded w-full" />
                      <div className="h-2 bg-gray-700 rounded w-2/3" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          }>
            <RecentMangaSection />
          </Suspense>
        </div>
      </div>
    </div>
  )
}