export const selectSingleItem = item => {
  return item;
};

export const sendDefaultItem = () => {
  const defaultItem = {
    id: 0,
    name: 'default',
    imageUrl: 1,
    price: 0
  };
  
  return defaultItem;
};