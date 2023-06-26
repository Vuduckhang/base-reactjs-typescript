import { useTypedSelector } from '@/store'

export const HomeComponent = () => {
  const home = useTypedSelector((state: any) => state.homeStore.home)

  return (
    <>
      <h1>Home Component</h1>
      <span>{home}</span>
    </>
  )
}
