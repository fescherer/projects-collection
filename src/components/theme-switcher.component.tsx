import { cookies } from 'next/headers'
import Tailwind from '@/../tailwind.config'

const themes = [
  {
    id: 'dark',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
        <path d="M14.438 10.148c.19-.425-.321-.787-.748-.601A5.5 5.5 0 0 1 6.453 2.31c.186-.427-.176-.938-.6-.748a6.501 6.501 0 1 0 8.585 8.586Z" />
      </svg>
    )
  },
  {
    id: 'cupcake',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
        <path d="M8 1a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 8 1ZM10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM12.95 4.11a.75.75 0 1 0-1.06-1.06l-1.062 1.06a.75.75 0 0 0 1.061 1.062l1.06-1.061ZM15 8a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 15 8ZM11.89 12.95a.75.75 0 0 0 1.06-1.06l-1.06-1.062a.75.75 0 0 0-1.062 1.061l1.061 1.06ZM8 12a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 8 12ZM5.172 11.89a.75.75 0 0 0-1.061-1.062L3.05 11.89a.75.75 0 1 0 1.06 1.06l1.06-1.06ZM4 8a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 4 8ZM4.11 5.172A.75.75 0 0 0 5.173 4.11L4.11 3.05a.75.75 0 1 0-1.06 1.06l1.06 1.06Z" />
      </svg>
    )
  }
]

export default async function ThemeSwitcher() {
  const theme = Tailwind.daisyui.themes
  const themeCookie = cookies().get('theme')
  const currentTheme = themeCookie ? themeCookie.value : theme[0]
  const currentIcon = themes.find(theme => theme.id === currentTheme.toString())

  // Using server actions to toggle theme
  async function toggleTheme() {
    'use server'

    const theme = Tailwind.daisyui.themes
    const themeCookie = cookies().get('theme')
    const currentTheme = themeCookie ? themeCookie.value : theme[0]

    const currentIndex = theme.indexOf(currentTheme)
    if (currentIndex === theme.length - 1) {
      cookies().set('theme', theme[0], {
        expires: new Date(new Date().getTime() + 400 * 24 * 60 * 60 * 1000),
      })
    } else if (currentIndex >= 0 && currentIndex < theme.length) {
      cookies().set('theme', theme[currentIndex + 1], {
        expires: new Date(new Date().getTime() + 400 * 24 * 60 * 60 * 1000),
      })
    } else {
      cookies().set('theme', theme[0], {
        expires: new Date(new Date().getTime() + 400 * 24 * 60 * 60 * 1000),
      })
    }
  }

  return (
    <form action={toggleTheme} className="block">
      <button type="submit" className="btn btn-circle btn-ghost">
        {currentIcon?.icon || (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
            <path d="M12.613 1.258a1.535 1.535 0 0 1 2.13 2.129l-1.905 2.856a8 8 0 0 1-3.56 2.939 4.011 4.011 0 0 0-2.46-2.46 8 8 0 0 1 2.94-3.56l2.855-1.904ZM5.5 8A2.5 2.5 0 0 0 3 10.5a.5.5 0 0 1-.7.459.75.75 0 0 0-.983 1A3.5 3.5 0 0 0 8 10.5 2.5 2.5 0 0 0 5.5 8Z" />
          </svg>
        )
        }
      </button>
    </form>
  )
}
