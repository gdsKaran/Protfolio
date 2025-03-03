import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import loopHole from '@/images/logos/loophole.svg'
import logoCosmos from '@/images/logos/blog.svg'
import logoHelioStream from '@/images/logos/news.svg'
import MealsLogo from '@/images/logos/meals.svg'
import shopEase from '@/images/logos/shopEaseLogo.svg'

const projects = [
  {
    name: 'ShopEase.co',
    description:
      'Developed a feature-rich e-commerce platform with a seamless shopping experience, including product listings, cart                  management and integrated secure authentication and user accounts for a smooth shopping experience.',
    link: { href: 'https://shopease-theta.vercel.app/', label: 'ShopEase.co' },
    logo: shopEase,
  },
  {
    name: 'LoopHole.com',
    description:
      'Built a feature-rich blogging platform where users can create, edit, and delete their own blogs, nested comments structure with user authentication with Lucia, allowing users to sign up, login and manage profiles securely.',
    link: { href: 'https://github.com/gdsKaran/LoopHole', label: 'github.com' },
    logo: loopHole,
  },
  {
    name: 'NewsApp',
    description:
      'Developed a dynamic news application that displays the latest news sorted by date, ensuring users stay updated.',
    link: { href: 'https://github.com/gdsKaran/NewsApp', label: 'github.com' },
    logo: logoHelioStream,
  },
  {
    name: 'Nested Comments Arena',
    description:
      'Developed a fully interactive nested comment system that supports infinite replies, allowing users to engage in structured  discussions,delete functionality with seamless UI updates and proper state management.',
    link: {
      href: 'https://github.com/gdsKaran/Nested-Comments-Arena',
      label: 'github.com',
    },
    logo: logoCosmos,
  },
  {
    name: 'Meals Recipe',
    description:
      'An Interactive Nextjs webbsite, Where you can explore different kind of food recipes or publish your own homemade or local recipe to other users.',
    link: {
      href: 'https://github.com/gdsKaran/Meals-Recipe.co',
      label: 'github.com',
    },
    logo: MealsLogo,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Projects',
  description: 'Things I have made trying to put my dent in the universe.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Things I've made trying to put my dent in the universe."
      intro="I've worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white ring-1 shadow-md shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
