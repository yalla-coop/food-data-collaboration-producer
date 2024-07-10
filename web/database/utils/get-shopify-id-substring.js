export const getShopifyIdSubstring = (url) => {
  return url.substring(url.lastIndexOf('/') + 1);
};
