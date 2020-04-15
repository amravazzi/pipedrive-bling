import axios from 'axios';
import { apiKey, domain } from '../config/pipedrive';

class Pipedrive {
  constructor(status = 'won', limit = 500) {
    this._apiKey = apiKey;
    this._baseURL = `https://${domain}.pipedrive.com/v1`;
    this._dealsEndpoint = `${this._baseURL}/deals?status=${status}&start=0&limit=${limit}&api_token=${apiKey}`;
  }

  async run() {
    return new Promise((resolve, reject) => {
      axios.get(this._dealsEndpoint)
     .then(response => {
        let final = response.data.data.map(res => {
          return {
            deal_id: res.id,
            owner_name: res.owner_name,
            title: res.title,
            value: res.value,
            currency: res.currency,
            org_name: res.org_name
          }
        });

        resolve(final);
      })
      .catch(error => {
        console.log(error);
        reject(error.data);
      });
    });








  }

}

export default Pipedrive;
