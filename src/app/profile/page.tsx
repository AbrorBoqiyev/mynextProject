import Link from "next/link"


export default function Profile(){
    return (
        <div>
            <h1>Welcome to my Profile!</h1>

            <Link href={'/blog'}>Blog</Link>
        </div>
    ) 
}