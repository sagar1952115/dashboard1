export const formatDate = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-GB", options);
};
