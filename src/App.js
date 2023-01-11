import axios from 'axios';
import { useEffect, useState } from 'react';

import './App.css';
import Button from './components/Button';

function App() {

  // const { TOKEN, HOST_URL } = process.env;

  const TOKEN = 'figd_dN1neMPKHHmnDFU4AFlSMPwv6ZqLqK_ANxk7hj3l';
  const HOST_URL = 'https://api.figma.com/v1/files/vRCqsniN1t2PndqlKeYQwI';
  const [data, setData] = useState([]);
  const [error,setError] = useState('')

  const fetchData = async () => {
    try {
      const response = await axios.get(HOST_URL, {
        headers: {'X-Figma-Token': TOKEN }
      });
      // return response.data
      console.log('Response ===> ',response.data);
      setData(response.data);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  useEffect(() => {
    fetchData();

    fetchData(HOST_URL, TOKEN)
      .then(data => setData(data.data))
      .catch(error => setError(error));
  }, []);

  // const [groups, setGroupsData] = useState([]);

  // useEffect(() => {
  //   const getFigmaApiResponse = async () => {
  //     try {
  //       const apiResponse = await axios.get(HOST_URL, {
  //         headers: {
  //           'X-Figma-Token': TOKEN
  //         }
  //       });
  //       // console.log('shey e dey work',apiResponse.data.styles);
  //       setGroupsData(apiResponse.data);
  //     } catch (e) {
  //       console.log(e.message);
  //       throw Error
  //     }
  //   };

  //   getFigmaApiResponse();
  // }, []);

  // console.log('All the groups == > ', groups);
  // console.log('document ',groups.document);
  // // console.log('Component ',groups.components);
  // // console.log('componentSets ',groups.componentSets);
  // // console.log('Styles',groups.styles);
  // // console.log('All the groups in array == > ',Object.entries(groups));

  return (
    <div className="App">
      <Button />
    </div>
  );
}

export default App;
