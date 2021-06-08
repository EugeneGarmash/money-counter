const formatNumberWithComas = (figure: number | string): string => {
  return figure.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default formatNumberWithComas;