import axios from 'axios';
import { apiKey } from '../config/bling';

class Bling {
  constructor(xml) {
    this._apiKey = apiKey;
    this._baseURL = 'https://bling.com.br/Api/v2/pedido/json';
    this._payload = [{ apikey: apiKey }, { xml: xml }];
  }

  async run() {
    return new Promise((resolve, reject) => {
      axios.post(this._baseURL, this._payload)
     .then(response => {
        console.log(response.data);

        // resolve(final);
      })
      .catch(error => {
        console.log(error);
        reject(error.data);
      });
    });
  }
}

export default Bling;
