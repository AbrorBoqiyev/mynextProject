import Link from "next/link";



export default function ProductList(){
    return (
        <div>
            <Link style={{textDecoration: 'none',color: "orange",fontSize: "16px",fontFamily: "sans-serif",fontWeight: "bolder",borderBottom: '2px solid orange',paddingBottom: '3px', margin: '20px',}} 
             href={'/'}>Home</Link>
            <h1>Product List</h1>
            <h2>product 1</h2>
            <h2>product 2</h2>
            <h2>product 3</h2>
        </div>
    );
}