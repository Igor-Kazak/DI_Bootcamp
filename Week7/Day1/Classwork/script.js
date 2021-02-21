const  {users} =  require("./date");

users()
.then(data => console.log(data))
.catch(e => console.log(e))