import {useState, useEffect} from 'react';

function Home(){

    //this variable is not reactive like it is
    //then we should make it reactive using 'useState' from react
    //let name = 'ana';
    //first elem. in the array is the name of the variable,
    //the second elem. is the function to invoke to change variable's value
    const [name, setName] = useState('ana');
    const [age, setAge] = useState(29);

    //button function
    const handleClick=(eventObj)=>{
        /*console.log('hello, stranger', eventObj);*/
        //name = 'luigi';
        setName('luigi'); 
        setAge(30);  
    }

    /*const handleClickAgain =(name)=>{
        console.log('hello, '+ name);
    }*/

    //useEffect() does not return value, but recceives
    //a function as argument. Is gonna run each time there is a 
    //re-render. Useful for fectching data.
    useEffect(()=>{
        console.log('use effect ran');
    });

    return(
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}

export default Home