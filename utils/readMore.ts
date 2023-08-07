export const readMore = (text: string, limit: number = 75) => {
  if (text.length <= limit) return text;
  return text.slice(0, limit) + "...";
};
