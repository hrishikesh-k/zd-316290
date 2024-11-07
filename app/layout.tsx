import { headers } from 'next/headers'
import type { PropsWithChildren } from 'react'

export default async function(props: PropsWithChildren) {
  const reqHeaders = await headers()
  return (
    <html lang={reqHeaders.get('current-locale') ?? 'unknown'}>
      <body>{props.children}</body>
    </html>
  )
}