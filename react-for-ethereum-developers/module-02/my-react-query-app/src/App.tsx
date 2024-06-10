import './App.css'
import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { usePostCleaner } from './hooks/use-posts'

// https://jsonplaceholder.typicode.com/posts/

function App() {
  
  //useQuery is for get requests, while useMutation is for evrything else (post, patch)
  //First, we need to fetch the date using 'useQuery'. This uses
  //a queryFunction

  const wait = (ms:number)=> new Promise((resolve)=> setTimeout(resolve, ms))
/*const myvar = ' '
  const { data, isLoading} = useQuery({
    queryKey:['myQuery', {myvar}],
    queryFn: async () => {
      await wait(2000)
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
      return data as Data
    },
  })
  
  return <div>{isLoading? 'Content is loading...': JSON.stringify(data)}</div>
   */


  //useMutation to post data
  /*  const { data} = useMutation({
      mutationFn: async () => {
        const { data } = await axios.post('https://jsonplaceholder.typicode.com/posts/1',
          {myval: 'string'}
        )

        return data as Data
      },
    })
    return <div>{JSON.stringify(data)}</div> */

    const {data, isLoading} = usePostCleaner(1);
    return <div>{isLoading? 'Content is loading...': JSON.stringify(data)}</div>


  }

export default App
