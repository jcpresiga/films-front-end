import React from 'react';
import axios from 'axios';

export default function Tabla(){

    const baseUrl = "http://localhost:8082/api";

    const [genders, setGenders] = useState([]);

    useEffect(() => {
        getGeneros();
    }, [])
    
    const getGeneros = () => {
        axios.get('${baseUrl}/gender').then(responde => {
            
            console.log(response)
        })
    }
    return(
        <>
        <h2>Generos</h2>
        <table className="table">
        <thead>
            <tr>
            <th scope="col">Id Genero</th>
            <th scope="col">Name</th>
            </tr>
        </thead>
        <tbody>
            {
                genders.map()
            }
            <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            </tr>
        </tbody>
        </table>
        </>
    );
}