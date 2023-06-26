import { useEffect } from 'react'

import Environment from '@/environment'
import { useAppDispatch } from '@/store'
import { getHome } from '@/store/slices/home-slice'
import { HomeComponent } from '@/views/home'

export default function Home() {
  const dispatch = useAppDispatch()
  console.log('Environment.......', Environment)
  const loadData = async () => {
    await dispatch(getHome())
  }

  useEffect(() => {
    loadData()
  }, [])
  return (
    <>
      <HomeComponent />
    </>
  )
}
