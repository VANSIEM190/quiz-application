const shuffleArray = (array) => {
  return array
    .map((value) => ({ value, num: Math.random() }))
    .sort((a, b) => a.num - b.num)
    .map(({ value }) => value)
}

export default shuffleArray
