// js code
function math() {
    let totalMethods = 10;
    this.factor = function(n){
      let c = Math.floor(Math.sqrt(n));
      let fac = [];
      for(let i=1;i<=c;i++){
        if(n%i == 0)
          fac.push(i,n/i);
      }
      fac.sort((a,b) => a-b);
      return fac.filter((value,index,array) => array.indexOf(value) === index);
    };
    this.prime = function(n){
      if(n == 1) return "Input must be > 1";
      let c = Math.floor(Math.sqrt(n));
      for(let i=2;i<=c;i++){
        if(n%i == 0) return "Not Prime Number";
      }
      return "Prime Number";
    };
    this.gcd = function(a,b){
      if(a == 0 || b == 0) return 0;
      let all =[...this.factor(a),...this.factor(b)];
      let result = [];
      all.forEach(value => {
        if(this.factor(a).includes(value) && this.factor(b).includes(value))
          result.push(value);
      });
      return result.reduce((a,b) => Math.max(a,b));
    };
    this.lcm = function(a,b){
      let min = a<b ? a : b;
      while(true){
        if(min%a==0 && min%b==0)
          return min;
        min++;
      }
    };
    this.percen = function(n,p){
      return (n*p)/100;
    };
    this.loanPercen = function(amount,interest_rate,month){
      total_amount = amount + amount * interest_rate /100;
      for(let i=1;i<=month;i++){
        total_amount = total_amount + total_amount * interest_rate /100;
      }
      return total_amount;
    };
    this.average = function(array){
      return array.reduce((a,b) => a+b)/array.length;
    };
    this.median = function(array){
      if(array.length%2 != 0)
        return array[Math.floor(array.length/2)];
      return (array[array.length/2] + array[array.length/2 -1]) /2;
    };
    this.mode = function(array){
      array.sort((a,b) => a-b);
      let array2 = [];
      let j = 1;
      for(let i=0;i<array.length;i++){
        if(array[i] == array[i+1]){
         j++;
         continue;
        }
        array2.push(j);
        j=1;
      }
      j = array2.reduce((a,b) => a<b? b:a);
      let index = 0;
      for(let i=0;i<array2.indexOf(j);i++){
        index = index+array2[i];
      }
      return array[index];
    };
    this.probability = function(obj,total_obj){
      return obj/total_obj;
    };
    Object.defineProperty(this,'totalMethods',{      // convert totalMethods read only property
      get: function(){
        return totalMethods;
      }
    });
  }
  const allMath = new math();