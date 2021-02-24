class UserLogin {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}

class UserRegister {
  constructor(username, password, lastname, firstname, email) {
      this.username = username;
      this.password = password;
      this.lastname = lastname;
      this.firstname = firstname;
      this.email = email;
  }
}

function userLogin() {
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;
  if (username != '' && password != '') {
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify((new UserLogin(username, password)))
    })
      .then(res => res.json())
      .then(data => {
        userWelcome(data);
      })
      .catch(err => {
        console.log(err);
      })
  }
  else {
    document.getElementById('loginmessage').textContent = 'Enter username and password!';
  }
}

function userWelcome(data){
  let welcome = '';
  if (data.length > 0){
    welcome = 'Welcome, '+data[0].firstname+' '+data[0].lastname+'!';
  }
  else {
    welcome = 'Login error!';
  }
  document.getElementById('loginmessage').textContent = welcome;
}

function userRegister() {
  let username = document.getElementById('usernamereg').value;
  let password = document.getElementById('passwordreg').value;
  let lastname = document.getElementById('lastname').value;
  let firstname = document.getElementById('firstname').value;
  let email = document.getElementById('email').value;
  if (username != '' && password != '' && lastname != '' && firstname != '' && email != '') {
    fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify((new UserRegister(username, password, lastname, firstname, email)))
    })
      .then(res => res.json())
      .then(data => {
        document.getElementById('registermessage').textContent = data.message;
      })
      .catch(err => {
        console.log(err);
      })
      document.getElementById('usernamereg').value = '';
      document.getElementById('passwordreg').value = '';
      document.getElementById('lastname').value = '';
      document.getElementById('firstname').value = '';
      document.getElementById('email').value = '';
  }
  else {
    document.getElementById('registermessage').textContent = 'Enter all data!';
  }
}
