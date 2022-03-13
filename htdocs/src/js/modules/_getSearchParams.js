export const getSearchParams = (k) => {
  let p = {};
  location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (s, k, v) {
    p[k] = v;
  });
  return k ? p[k] : p;

  // Usage:
  // let x = getSearchParams('parameter_name') - returns specific param value
  // let x = getSearchParams(); - returns an array
};
