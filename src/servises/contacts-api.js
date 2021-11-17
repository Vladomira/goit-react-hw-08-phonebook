import axios from "axios";

axios.defaults.baseURL = "https://6192166f41928b00176902b2.mockapi.io/contacts";

export async function fetchContactsApi() {
  const { data } = await axios.get("/contacts");

  return data;
}

export async function addContactFetch(name, number) {
  const contact = { name, number };
  const data = axios.post("/contacts", contact);
  // console.log(data, "data from fetch");
  return data;
}

export async function deleteContactFetch(contactId) {
  return axios.delete(`/contacts/${contactId}`);
}

// const fetchAPI = { fetchContactsApi, addContactByFetch, deleteContactByFetch };
// export default fetchAPI;
