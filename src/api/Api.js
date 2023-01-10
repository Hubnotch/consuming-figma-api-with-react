
import axios from 'axios'
const fetchData = async () => {
  try {
    const response = await axios.get('https://api.figma.com/v1/files/vRCqsniN1t2PndqlKeYQwI', {
      headers: {
        'X-Figma-Token': 'figd_dN1neMPKHHmnDFU4AFlSMPwv6ZqLqK_ANxk7hj3l'
      }
    });
    return response.data
  } catch (error) {
    console.error(error);
  }
}

export default fetchData
