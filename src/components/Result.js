// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Result = () => {
//     const [result, setResult] = useState(null);

//     useEffect(() => {
//         axios.get('http://localhost:3001/api/result')
//             .then(response => {
//                 console.log(response.data); // Add this line to log the response data
//                 setResult(response.data);
//             })
//             .catch(error => console.error('Error fetching result:', error));
//     }, []);

//     if (!result) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div>
//             {result.captured ? (
//                 <h1>The fugitive was captured by {result.capturingCop}!</h1>
//             ) : (
//                 <h1>The fugitive escaped!</h1>
//             )}
//         </div>
//     );
// };

// export default Result;




//--------------------------




import React, { useEffect, useState } from 'react';
import { getResult } from '../api';

const Result = () => {
    const [result, setResult] = useState(null);

    useEffect(() => {
        getResult()
            .then(data => {
                console.log(data); // Log the response data
                setResult(data);
            })
            .catch(error => console.error('Error fetching result:', error));
    }, []);

    if (!result) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            {result.captured ? (
                <h1>The fugitive was captured by {result.capturingCop}!</h1>
            ) : (
                <h1>The fugitive escaped!</h1>
            )}
        </div>
    );
};

export default Result;
