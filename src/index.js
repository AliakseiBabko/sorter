class Sorter {
  constructor() {
    // your implementation
    this.array = [];
    /*this.age = [];
    this.name = [];
    this.smth = [];
    this.course = [];*/
  }

  add(element) {
    // your implementation
    //return this.array.push({"age"});
    return this.array.push(element);
  }

  at(index) {
    // your implementation
    return this.array[index];
  } 

  get length() {
    // your implementation
    return this.array.length;
  }

  toArray() {
    // your implementation
    return this.array;
  }

  sort(indices) {
    // your implementation
    let i, j;
    if (indices.length > 1) {
      indices.sort();
      for (j=0; j<=(indices.length-1); j++) {
        for (i=0; i<indices.length; i++) {
          if (this.array[indices[i]] > this.array[indices[i+1]]) {
            var a = this.array[indices[i]];
            this.array[indices[i]] = this.array[indices[i+1]];
            this.array[indices[i+1]] = a;
          }
        }
      }
    }
  return this.array;
}

  setComparator(compareFunction) {
    // your implementation
  AGE_COMPARATOR
  }
}

module.exports = Sorter;