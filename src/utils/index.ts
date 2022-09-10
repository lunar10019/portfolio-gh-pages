export const pluralize = (count: number, noun: string, suffix = "s") =>
  `${noun}${count !== 1 ? suffix : ""}`;

export const formatNumber = (number: number) => {
  return new Intl.NumberFormat("ru-RU").format(number);
};
