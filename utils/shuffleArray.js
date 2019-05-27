// found at https://stackoverflow.com/a/46545530/6141587
const shuffleArray = array =>
  array
    .map(a => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value)

export default shuffleArray
