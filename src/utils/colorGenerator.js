const colorGenerator = () => {
  const colors = [
    'black',
    'brown',
    'grey',
    'olive',
    'orange',
    'pink',
    'purple',
    'teal',
    'violet',
    'yellow',
  ]

  const number = Math.floor(Math.random() * 10)
  return colors[number]
}

export default colorGenerator
