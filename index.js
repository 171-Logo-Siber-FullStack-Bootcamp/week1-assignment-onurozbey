let xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

xhr.onload = () => {
  console.log(xhr.response);

  //   to convert json data to js array
  //   const data = JSON.parse(xhr.response);
  //   console.log(data);
};

xhr.send();
