//object literals
let stocks = {
    Fruits: ['strawberry', 'grapes', 'banana', 'apple'], 
    Holder:['cone', 'cup', 'stick'],
    Liquid: ['water', 'ice'],
    Toppings: ['chocolate', 'peanuts']   
  };
  
  
  let is_shop_open = false;
  
  function time(ms){
    return new Promise((resolve, reject)=>{
      if(is_shop_open){
        setTimeout(resolve, ms)
      }else{
        reject(console.log("shope is closed"));
      }
    })
  }
  
  async function kitchen(){
    try{
      await time(2000)
      console.log(`${stocks.Fruits[0]} is picked`)
      console.log("start the production")
      await time(2000)
      console.log("cut the fruit")
      await time(2000)
      console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} are added`)
      await time(1000)
      console.log("start the machine")
      await time(2000)
      console.log(`icecream placed on ${stocks.Holder[0]}`)
      await time(3000)
      console.log(`${stocks.Toppings[0]} was added as topping`)
      await time(2000)
      console.log("serve icecream") 
    }catch(error){
      console.log("customer left")
    }finally{
      console.log("day ended. shop is closed")
    }
  }
  
  kitchen();
  
  
  ///////////////////////////////////////////////////////////////////////
  //using the await
  /*let is_shop_open = true;
  let toppings_choice = ()=>{
    return new Promise((resolve, reject)=>{
      
      setTimeout(()=>{
        resolve(console.log("which topping would you love?"));
      }, 3000); //takes 3 seconds   
    });
  };
  
  async function kitchen(){
    console.log(" A ")
    console.log(" B ")
    console.log(" C ")
    
    await toppings_choice()
    console.log(" D ")
    console.log(" E ")
  }
  
  kitchen()
  
  console.log("cleaning the dishes");
  console.log("cleaning the tables");
  console.log("taking others order");*/
  
  
  ///////////////////////////////////////////////////////////////////////
  //Async/Await vs. promises sintaxis
  /*let order = ()=>{
    return new Promise((resolve, reject)=>{
      if(){
        resolve()
      }else{
        reject()
      }
    })
  }*/
  ///////////////////////////////////////////////////////////////////////
  //Async
  /*async function async_order(){
    try{
      await abc;
    }
    catch(error){
      console.log("the function abs doesn't exist", error)
    }
    finally{
      console.log("runs code anyways")
    }
  }
  
  async_order().then(()=>{
    console.log("bla bla bla");
  });*/
  
  ///////////////////////////////////////////////////////////////////////
  //Promises
  /*let is_shop_open = true;
  let order = (time, work) =>{
    //to write my promise I need to set the resolve and reject scenarios
    //To do so, I build an arrow function with resolve and reject arguments,
    //and implement the logic to execute each one. The resolve scenario
    //has some work to do in a certain time. The reject scenario maybe does not.
    return new Promise( (resolve, reject)=>{
      
      //if our shop is open, we are gonna serve icecream --> resolve
      if(is_shop_open){
        //first thing is the time and then the work
        setTimeout(()=>{
          resolve(work());
        },time); 
      }else{ //if not, (it's closed), we wouldn't serve icecream --> reject
        reject(console.log('our shop is closed'));
      }    
    });
  };
  
  order(2000, ()=>{console.log(`${stocks.Fruits[0]} was selected`)}) //no semicolon with .then
  
  //.then, inside brackets goes an arrow function with a return order that takes
  //first the time and then another arrow function for the work to do
  //order
  .then(()=>{
    return order (0000, ()=>{console.log("production has strated")});
  })
  //cut the fruit
  .then(()=>{
    return order(2000, ()=>{console.log("the fruit was chopped")});
  })
  
  .then(()=>{
    return order(1000, ()=>{console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} was added`)});
  })
  
  .then(()=>{
    return order(1000, ()=>{console.log("start the machine")});
  })
  
  .then(()=>{
    return order(2000, ()=>{ console.log(`ice cream was placed on ${stocks.Holder[0]}`)});
  })
  
  .then(()=>{
    return order(3000, ()=>{ console.log(`${stocks.Toppings[0]} was selected as topping`)});
  })
  
  .then(()=>{
    return order(1000, ()=>{ console.log('icecream was served')});
  })
  
  //error handling
  .catch(()=>{
    console.log("client left")})
  
  .finally(()=>{
    console.log("day ended. Out shop is closed")
  });*/
  
  ///////////////////////////////////////////////////////////////////////
  //Callback
  //to order we have to note the fruit the client picked and start the production, which takes 2 seconds
  /*let order = (fruit_index, call_production) =>{
    
    setTimeout(()=>{
      console.log(`${stocks.Fruits[fruit_index]} was selected`);
      console.log("order placed, please call production");
      call_production();
    }, 2000); //2 seconds
    
  };
  
  let production =()=>{
    
    setTimeout(()=>{ //production started (takes 0 seconds)
        console.log("production has started");
      setTimeout(()=>{ // fruit is chopped (takes 2 seconds)
        console.log("the fruit has been chopped");
         setTimeout(()=>{ // water and ice was added (takes 1 second)
              console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} was added`); 
              setTimeout(()=>{ //the machine is started (takes 1 second)
                console.log('the machine was started');
                 setTimeout(()=>{ //the holder is selected (takes 2 seconds)
                    console.log(`ice cream was placed on ${stocks.Holder[1]}`);
                     setTimeout(()=>{ //adding the toppings (takes 3 seconds)
                      console.log(`${stocks.Toppings[0]} was added as topping`);
                        setTimeout(()=>{ //service completed (takes 2 seconds)
                            console.log('ice cream is served');
                        }, 2000);  
                     }, 3000);                 
                 }, 2000);
            }, 1000);  
         }, 1000);    
      }, 2000); 
    }, 000);
  };
  
  order(0, production);*/