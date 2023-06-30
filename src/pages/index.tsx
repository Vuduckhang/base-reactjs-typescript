import CalenderComponent from '@/components/calendar'
import Environment from '@/environment'
import { useAppDispatch } from '@/store'
import { getHome } from '@/store/slices/home-slice'
import { getMonth } from '@/utils/common-utils'
import { HomeComponent } from '@/views/home'
import dayjs from 'dayjs'
import { useEffect, useReducer, useState } from 'react'

export default function Home() {
  // const dispatch = useAppDispatch()
  // const loadData = async () => {
  //   await dispatch(getHome())
  // }
  // useEffect(() => {
  //   loadData()
  // }, [])
  return (
    <>
      <title>CMS</title>
      <HomeComponent />

      <div>
        <CalenderComponent />
      </div>
    </>
  )
}
