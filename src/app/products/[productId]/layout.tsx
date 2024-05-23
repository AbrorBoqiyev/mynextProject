export default function ProductDefaultLayout({ 
    children,
}: { 
    children: React.ReactNode 
}) {
    return (
        <div>
            { children }
            <h2 style={{backgroundColor: "yellowgreen", marginTop: '8rem'}}
            > Featured Products </h2>
        </div>
    ) 

}