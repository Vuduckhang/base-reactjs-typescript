import { ReactNode } from 'react'

interface LayoutProps {
  path?: string
  title: string
  icon?: string | string[] | ReactNode
}

const Layout = (props: LayoutProps) => {
  return <>Layout</>
}

export default Layout
