import { createAsyncThunk } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'

const getHome = createAsyncThunk('home/getHome', async () => {
  try {
    console.log('api')
    return 'Home api'
  } catch (error) {
    console.log('error.......', error)
  }
})

/**
HOOK STATE
 */

export const useGetHome = () => {
  return useSelector((state: any) => state.homeStore.home)
}

export { getHome }
