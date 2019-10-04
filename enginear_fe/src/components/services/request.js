import axios from "axios";

const baseUrl = "http://enginear/test/api/";

function ApiService(accessToken) {
  this.accessToken = accessToken;
}

ApiService.prototype.getProvider = function(providerCode) {
  let url = `http://localhost:6060/lendingservice/api/v1/offers/provider/${providerCode}`;

  const config = {
    timeout: 60000,
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    }
  };

  return axios.get(url, config);
};


const instance = new ApiService(accessToken);

export default instance;
