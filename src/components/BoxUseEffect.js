import React, {useState, useEffect} from 'react'
import axios from 'axios'
export default function BoxUseEffect() {

    const [dataArray, setDataArray] = useState([]);

    const feedData = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(result =>{
        console.log("data: ",result.data);
        setDataArray(result.data)
        })
    }
    
    useEffect(() => {
        // on did mount
        feedData();
        // on did update
        // return () => {
        //     cleanup
        // }
    }, [])

    return (
        <div>
            <h2>This is BoxUseEffect</h2>
            <ul>
            {dataArray.length > 0 && dataArray.map(item=>
                <li key={item.id}>ID: {item.id} title:{item.title}</li>
            ) 
            }
            </ul>
        </div>
    )
}
