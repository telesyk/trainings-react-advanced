export function snakeCaseToSeparate(string) {
  return string.split('-').join(' ')
}

export function cleanPath(string) {
  return string.slice(1)
}

export function createSet(arr) {
  return new Set(arr)
}
