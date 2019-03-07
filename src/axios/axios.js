import axios from 'axios';


export default function () {
  const token = localStorage.get('userToken');

  const instance = axios.create({
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  return instance;
}
