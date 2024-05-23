import { Metadata } from "next"  

export const metadata: Metadata = {
    title: {
        absolute: 'Blog',
    }, 
} 

export default function Myblog(){
    return <h1>My blog</h1>
}