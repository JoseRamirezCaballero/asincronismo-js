const API = "https://api.escuelajs.co/api/v1";

async function fetchPOST(url, data) {
  try {
    const respose = await fetch(url, {
      method: "PUT",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return respose;
  } catch (error) {}
}

async function fetchPUT(url, data) {
  try {
    const respose = await fetch(url, {
      method: "PUT",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return respose;
  } catch (error) {}
}

async function fetchDELETE(url) {
  try {
    const respose = await fetch(url, {
      method: "DELETE",
      mode: "cors",
      credentials: "same-origin"
    });
    return respose;
  } catch (error) {}
}

// POST
const dataPOST = {
  title: "Platzi Product",
  price: 2023,
  description: "Nunca pares de aprender",
  categoryId: 5,
  images: ["https://static.platzi.com/static/images/footer/logo.png"],
};

fetchPOST(`${API}/products`, data)
  .then((respuesta) => respuesta.json())
  .then((data) => console.log(data));

// PUT
const dataPUT = {
  title: "Nuevo Titulo",
  price: 100,
};

fetchPOST(`${API}/products/204`, dataPUT)
  .then((respuesta) => respuesta.json())
  .then((data) => console.log(data));

// DELETE
fetchDELETE(`${API}/products/204`)
  .then((respuesta) => respuesta.json())
  .then((data) => console.log(data));
