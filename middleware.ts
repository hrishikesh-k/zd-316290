import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {

  const reqHeaders = new Headers(request.headers)
  reqHeaders.set('current-locale', 'custom')
 
  const response = NextResponse.next({
    request: {
      headers: reqHeaders
    }
  })

  return response
}