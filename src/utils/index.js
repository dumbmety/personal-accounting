export function colorGenerator() {
  const colors = [
    'red',
    'orange',
    'yellow',
    'olive',
    'green',
    'teal',
    'blue',
    'violet',
    'purple',
    'pink',
    'brown',
    'grey',
    'black',
  ];

  const number = Math.floor(Math.random() * 13);
  return colors[number];
}
