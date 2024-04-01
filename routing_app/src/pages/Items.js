import React from 'react';

const dresses = [
    { ProductName: "Adzepa-Jackets", Brand: "Adzepa Esentials", Price: "$400:", id: "0900056270", sizes: "Medium" },
    { ProductName: "Bown-Box", Brand: "Primark", Price: "$120:", id: "0900056200", sizes: "Large" },
    { ProductName: "Men Joogers", Brand: "Addidas", Price: "$600:", id: "0900056230", sizes: "Large" },
    { ProductName: "Adzepa-Jackets", Brand: "Adzepa Esentials", Price: "$400:", id: "0900056280", sizes: "Small" }
];

export default function Items() {
    return (
        <div>
            <h3> {dresses.map(item => {
                return <h1 key={item.id}>{item.ProductName}</h1>; 
            })}</h3>
           
        </div>
    );
}

