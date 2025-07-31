import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// 🚨 Middleware temporarily disabled for debugging
export function middleware(req: NextRequest) {
  return NextResponse.next()
}

// 🚫 No matchers = applies nowhere
export const config = {
  matcher: [],
}