import { useQuery } from "@tanstack/react-query"
import axios from 'axios'

interface Data {
    userId: number,
    id: number,
    title: string,
    body: string
}

export const usePost = (postId:number) =>{
    const myvar = ' '
    const { data , isLoading} = useQuery({
        queryKey:['myQuery', {myvar}],
        queryFn: async () => {
          const { data } = await axios.post('https://jsonplaceholder.typicode.com/posts/1',
            {myval: 'string'}
          )
          return data as Data
        },
    })
    return {data, isLoading}
}

export const usePostCleaner = (postId:number) =>{
    const myvar = ' '
    return useQuery({
        queryKey:['myQuery', {myvar}],
        queryFn: async () => {
          const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`,
          )
          return data as Data
        },
    })

}