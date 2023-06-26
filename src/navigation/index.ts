import { ReactNode } from 'react'

interface NavType {
  path?: string
  title: string
  icon?: string | string[] | ReactNode
  children?: NavType[]
}

const navigation: NavType[] = [
  {
    title: 'Dashboard',
    icon: 'HomeOutline',
    path: '/',
  },
  {
    title: 'Calender',
    icon: 'HomeOutline',
    path: '/',
  },
  {
    title: 'Mass Email Sending',
    icon: 'HomeOutline',
    path: '/',
  },
  {
    title: 'Status Management',
    icon: 'HomeOutline',
    path: '/',
  },
  {
    title: 'Role Management',
    icon: 'HomeOutline',
    path: '/',
  },
  {
    title: 'Standard Management',
    icon: 'HomeOutline',
    children: [
      {
        title: 'Status Management',
        icon: 'HomeOutline',
        path: '/',
      },
      {
        title: 'Role Management',
        icon: 'HomeOutline',
        path: '/',
      },
    ],
  },
]

export default navigation
