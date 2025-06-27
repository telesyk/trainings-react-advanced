export const getUniqueList = arr => {
  const uniqueNames = new Set()

  arr.forEach(item => {
    uniqueNames.add(item.name.toLowerCase())
  })

  return uniqueNames
}
