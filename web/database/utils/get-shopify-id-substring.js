export const getShopifyIdSubstring = (url) => {
  if (!url) return '';
  return url.substring(url.lastIndexOf('/') + 1);
};
