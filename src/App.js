// import axios from 'axios';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';


function App() {

  // const { TOKEN, HOST_URL } = process.env;
  const TOKEN = 'igd_dN1neMPKHHmnDFU4AFlSMPwv6ZqLqK_ANxk7hj3l';
  const HOST_URL = 'https://api.figma.com/v1/files/vRCqsniN1t2PndqlKeYQwI';
  const [data, setData] = useState([]);

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(HOST_URL, {
  //       headers: {'X-Figma-Token': TOKEN }
  //     });
  //     // return response.data
  //     console.log('Response ===> ',response);
  //     setData(response.data);
  //   } catch (error) {
  //     console.error(error);
  //     throw error;
  //   }
  // }
  // useEffect(() => {
  //   fetchData();

  //   // fetchData(HOST_URL, TOKEN)
  //   //   .then(data => setData(data.data))
  //   //   .catch(error => setError(error));
  // }, []);

  const [groups, setGroupsData] = useState(null);

  useEffect(() => {
    const getUserMetadata = async () => {
      try {
        const accessToken = TOKEN
        const groupData = await axios.get( HOST_URL, {
          headers: {
            'X-Figma-Token': 'figd_dN1neMPKHHmnDFU4AFlSMPwv6ZqLqK_ANxk7hj3l'
          }
        });
        console.log('shey e dey work',groupData.data.styles);
        setGroupsData(groupData);
      } catch (e) {
        console.log(e.message);
        throw Error
      }
    };

    getUserMetadata();
  }, []);


  return (
    <div className="App">
hello 
    </div>
  );
}

export default App;
