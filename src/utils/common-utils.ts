const checkClientSide = () => {
  return typeof window !== 'undefined'
}

export { checkClientSide }
