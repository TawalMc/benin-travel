export const updateIndex = (currIndex: number, length: number) => {
  if (currIndex > length - 1) return 0
  else if (currIndex < 0) return length - 1
  return currIndex
}
