export const formatDate = (millis) => {
  const date = new Date(millis);
  return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
}