import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { Analytics } from '@vercel/analytics/next'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Gagandeep Singh',
    default: 'Gagandeep Singh - Web Developer',
  },
  description:
    'I’m Gagandeep, a web developer. I develop technologies that empower regular people to explore space on their own terms.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>
              {children}
              <Analytics />
            </Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
