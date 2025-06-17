import { Suspense } from "react"
import Hero from "@/components/hero"
import LoadingSpinner from "@/components/loading-spinner"

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Animated background particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-red-400 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping delay-2000"></div>
      </div>

      <div className="relative z-10">
        <Suspense fallback={<LoadingSpinner />}>
          <Hero />
        </Suspense>
      </div>
    </div>
  )
}