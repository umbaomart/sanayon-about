export const polyfill = () => {
  //Reference:
  //reeversedev.com/polyfill-for-foreach-map-filter-reduce

  // Polyfills
  // Foreach function
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
  }

  // Map function
  Array.prototype.map = function (callback) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
      arr.push(callback(this[i], i, this));
    }
    return arr;
  };

  // Filter function
  Array.prototype.filter = function (callback, context) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
      if (callback.call(context, this[i], i, this)) {
        arr.push(this[i]);
      }
    }
    return arr;
  };

  // Reduce function
  Array.prototype.reduce = function (callback, initialValue) {
    let accumulator = initialValue === undefined ? undefined : initialValue;

    for (let i = 0; i < this.length; i++) {
      if (accumulator !== undefined) {
        accumulator = callback.call(undefined, accumulator, this[i], i, this);
      } else {
        accumulator = this[i];
      }
    }
    return accumulator;
  };
};
