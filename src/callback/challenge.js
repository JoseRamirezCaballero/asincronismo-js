const API = "https://api.escuelajs.co/api/v1";

async function fetchData(url, callback) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    callback(data, null);
  } catch (error) {
    callback(null, error);
  }
}

fetchData(`${API}/products`, (data1, error1) => {
  if (error1) return console.error(error1);
  fetchData(`${API}/products/${data1[0].id}`, (data2, error2) => {
    if (error2) return console.error(error2);
    fetchData(`${API}/categories/${data2?.category.id}`, (data3, error3) => {
      if (error3) return console.error(error3);
      console.log(data1[0])
      console.log(data2.title)
      console.log(data3.name)
    });
  });
});
