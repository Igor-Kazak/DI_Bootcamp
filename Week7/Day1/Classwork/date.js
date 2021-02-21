const axios = require('axios');

exports.users = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const users = await response.data;
        return users;
      } catch (error) {
        console.error(error);
      }
}
