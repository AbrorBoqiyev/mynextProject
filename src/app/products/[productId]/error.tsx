"use client"

export default function errorBoundary({
    error, 
    reset, 
}: { 
    error: Error; 
    reset: ()=> void; 
}) {
    return (
        <div>
            { error.message } <button onClick={reset}>try again</button>
        </div>
    ); 
}