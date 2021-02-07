const content = `
<form id= "myform" action="http://127.0.0.1" method="GET">
    <div>
        <label for="name">Name:</label>
        <input name="name" id="name" value="Arthur">
      </div>
    <div>
      <label for="lastname">Last name:</label>
      <input name="lastname" id="lastname" value="Dent">
    </div>
    <div>
      <button id="send">Send</button>
    </div>
  </form>
`;

document.body.innerHTML = content;

document.getElementById('myform').addEventListener('submit', submitForm);

function submitForm(event) {
  // Отменяем стандартное поведение браузера с отправкой формы
  event.preventDefault();

  // event.target — это HTML-элемент form
  let formData = new FormData(event.target);

  // Собираем данные формы в объект
  let obj = {};
  formData.forEach((value, key) => obj[key] = value);
  
  // Собираем запрос к серверу
  let request = new Request(event.target.action, {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
          'Content-Type': 'application/json',
      },
  });

  console.log(JSON.stringify(obj));
  
  // Отправляем (асинхронно!)
  fetch(request).then(
      function(response) {
          // Запрос успешно выполнен
          console.log(response);
          // return response.json() и так далее см. документацию
      },
      function(error) {
          // Запрос не получилось отправить
          console.error(error);
      }
  );

  // Код после fetch выполнится ПЕРЕД получением ответа
  // на запрос, потому что запрос выполняется асинхронно,
  // отдельно от основного кода
  console.log('Pending...');
}