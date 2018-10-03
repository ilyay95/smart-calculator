class SmartCalculator {
  constructor(initialValue) {
    this.array=[];
    this.array.push(initialValue);
    // your implementation
  }

  add(number) {
    this.array.push('+');
    this.array.push(number);
    return this;
    // your implementation
  }
  
  subtract(number) {
    this.array.push('-');
    this.array.push(number);
    return this;
    // your implementation
  }

  multiply(number) {
    this.array.push('*');
    this.array.push(number);
    return this;
    // your implementation
  }

  devide(number) {
    this.array.push('/');
    this.array.push(number);
    return this;
    // your implementation
  }

  pow(number) {
    this.array.push('pow');
    this.array.push(number);
    return this;
    // your implementation
  }
 
    valueOf(array){
     let array1 = [...this.array].reverse();
      for(let a=0; a < array1.length; a++){
        if(array1[a] === 'pow'){
          array1.splice(a-1, 3, Math.pow(array1[a+1],array1[a-1]));
          a--;
        }
      }
    
      this.array=[...array1].reverse();
      for(let a=0;a<this.array.length;a++){
        if(this.array[a]==='*'){
          this.array.splice(a-1,3,(this.array[a-1]*this.array[a+1]));
          a--;
        }
      }

      for(let a=0;a<this.array.length;a++){
        if(this.array[a]==='/'){
          this.array.splice(a-1,3,(this.array[a-1]/this.array[a+1]));
          a--;
        }
      }

    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i] === '-') {
        this.array.splice(i-1, 3, (this.array[i-1]-this.array[i+1]));
        i--;
        
      } 
    }

    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i] === '+') {
        this.array.splice(i-1, 3, (this.array[i-1]+this.array[i+1]));
        i--;
      }
    }

    return this.array.join("");
  }
}

module.exports = SmartCalculator;
