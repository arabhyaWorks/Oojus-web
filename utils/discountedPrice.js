const discountedPrice = (data) => {
  return data?.price - data?.price * (data?.discount / 100);
};

export default discountedPrice;
