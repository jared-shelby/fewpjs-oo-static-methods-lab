class Formatter {
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    // g is a modifier that specifies to replace globally (not just the first value)
    return string.replace( /[^A-Za-z0-9 '-]/g, "");
  }

  static titleize(string) {
    let exclusions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    let arr = string.split(" ");
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (i === 0) {
        newArr.push(this.capitalize(arr[i]));
      } else if (exclusions.includes(arr[i])) {
        newArr.push(arr[i]);
      } else {
        newArr.push(this.capitalize(arr[i]));
      }
    }
    return newArr.join(" ");
  }
}