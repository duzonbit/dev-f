console.log(new Promise((resolve,reject)=>{
    console.log(1);
    console.log(2);
    resolve(true)
    console.log(4);
    console.log(5);
    
  }).then((i)=>{
      console.log(i? i: i);
      return i
    //   return true;
      
  }));
