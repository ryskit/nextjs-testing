import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

type Props = {
  title: string
  children: React.ReactNode
}

const Layout: FC<Props> = (props) => {
  const { title, children } = props
  return (
    <div className="flex justify-center items-center flex-col min-col min-h-screen font-mono">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className="bg-gray-800 w-screen">
          <div className="flex items-center pl-8 h-14">
            <div className="flex space-x-4">
              <Link
                href="/"
                data-testid="home-nav"
                className="text-gray-300 hover:gb-gray-700 px-3 py-2 rounded"
              >
                Home
              </Link>
              <Link
                href="/blog-page"
                data-testid="blog-nav"
                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
              >
                Blog
              </Link>
              <Link
                href="/comment-page"
                data-testid="comment-nav"
                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
              >
                Comment
              </Link>
              <Link
                href="/context-page"
                data-testid="context-nav"
                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
              >
                Context
              </Link>
              <Link
                href="/task-page"
                data-testid="task-nav"
                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
              >
                Todos
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex flex-1 justify-center items-center flex-col w-screen">
        {children}
      </main>
      <footer className="w-full h-12 flex justify-center items-center border-1">
        <a
          className="flex items-center"
          href="http://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          <Image
            src="vercel.svg"
            width="60"
            height="60"
            alt="Vercel Logo"
            className="h-4 ml-2"
          />
        </a>
      </footer>
    </div>
  )
}

export default Layout
