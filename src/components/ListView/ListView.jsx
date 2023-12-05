// ListView.js
import { useState, useEffect } from 'react';
import "./ListView.css";


const ListView = () => {
  const [data, setData] = useState([]);


  useEffect(() => {

  
    // Placeholder API endpoint
    const apiEndpoint ='https://api.slingacademy.com/v1/sample-data/photos';


    // Fetch data from the API
    fetch(apiEndpoint)
      .then((response) => response.json())
      .then((result) => setData(result.photos))
      .catch((error) => console.error('Error fetching data:', error));

      
  }, []);

 
  

  return (
    <div className='list-view'>
      <h2>List View</h2>
      
      <div >
        {data.map((item) => (
          <div className='data-box' key={item.id}>
            <h3>Title: {item.title}</h3>
            <p>Subtitle: {item.description}</p>
            <img className="img-box"src={item.url}></img>            
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListView;
