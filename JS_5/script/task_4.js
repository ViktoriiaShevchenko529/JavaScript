class StringBuilder {
    constructor(value) {
      this.value = value;
    }

    get val() {
      return this.value;
    }

    set val(value) {
      this.value = value;
    }

    append(str) {
      this.value += str;
    }

    prepend(str) {
      this.value = str + this.value;
    }

    pad(str) {
      this.value = str + this.value + str;
    }
  }