import React, {useEffect, useRef} from 'react'
import { useState } from 'react'

const BASE_URL  ='https://jsonplaceholder.typicode.com';

interface Post {
    id: number;
    title: string;
}

function Demo(){
   
    //Step 4: Multiple requests for chuncks of data
    //Be carefull with race conditions!! We have to ensure that
    //before firing a new request, we need to abort the previous one
    //the abortController starts as null
    const [page, setPage] = useState(0);
    const abortControllerRef = useRef<AbortController | null>(null);

    //Step 3: Handling errors
    const [error, setError] = useState();

    //Step 2: Now, some 'beautifications' are done to improve the UX
    //We need to create a loading state
    const [isLoading, setIsLoading] = useState(false);

    //Step 1: This useEffect is gonna fetch our posts, get the response of the API
    //and then, set our state posts from whatever gets from the API
    const[posts, setPosts] = useState<Post[]>([]);    
    useEffect(() => {

        //(S1) we are in an async function, so we are need to await
        const fetchPosts= async() =>{

            //(S4)If there's an existing request, we ask to abort it
            //And then we set a new abortController for the new request
            abortControllerRef.current?.abort();
            abortControllerRef.current = new AbortController();

            //(S2) Before preforming the request, we are setting 'isLoading' to true
            setIsLoading(true);

            //(S3) try-catch
            try{
            //(S1) Received data is stored in response const in json form
            const response = await fetch(`${BASE_URL}/posts?=${page}`, {
                signal:abortControllerRef.current?.signal, 
            });
            //(S1) We need to convert the json into an array of Post.
            //(S1) This is also an async function
            const posts = await response.json() as Post[];
            //(S1) Finally, we can set our posts using the 'setpost' function
            setPosts(posts);
            }catch(e:any){
                if(e.name === "AbortError"){
                    console.log("Aborted"); return;
                }
                setError(e);
            }finally{                  
            //(S2) After our posts are posted, we change the 'isLoading' status to false
            setIsLoading(false);
            }
        };

        //(S1) Invoke the function
        fetchPosts();

    }, [page]);

    //(S2) Logic of 'what it's gonna be rendered' while 'isLoading' == true
    if(isLoading){
        return <div>Loading...</div>;
    }

    //(S3)
    if(error){
        return <div>Something went wrong! Please try again.</div>
    }

    return(
        <div className="tutorial">
            <h1 className="mb-4 text-2xl"> Data Fetching in React</h1>
            <button onClick={()=>setPage(page+1)}> Increase Page ({page})</button>
            <ul>
                {posts.map((post)=>{
                    return <li key={post.id}>{post.title}</li>;
                })}
            </ul>
        </div>
    );
}

export default Demo