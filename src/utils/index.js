export const colorGenerator = () => {
  const colors = [
    'gray',
    'red',
    'yellow',
    'green',
    'blue',
    'indigo',
    'purple',
    'pink',
  ];

  const number = Math.floor(Math.random() * 8);
  return colors[number];
};
