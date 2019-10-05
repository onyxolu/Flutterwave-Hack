import axios from "axios";

const baseUrl = "http://enginear/test/api/";
const accessToken = 'fgkjhkfjhvfdksj'

function ApiService(accessToken) {
  this.accessToken = accessToken;
}

ApiService.prototype.signIn = function() {
  let url = `http://enginear.test/api/login`;

  const config = {
    timeout: 60000,
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    }
  };

  return axios.get(url, config);
};

ApiService.prototype.signUp = function(phone) {
    let url = `http://enginear.test/api/send_otp/${phone}`;
  
    const config = {
      timeout: 60000,
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      }
    };
  
    return axios.get(url, config);
};

ApiService.prototype.validateOtP = function(data) {
    let url = `http://enginear.test/api/verify_otp`;
  
    const config = {
      timeout: 60000,
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      }
    };
  
    return axios.post(url,data, config);
};

ApiService.prototype.getEngineer = function(problem) {
    let url = `http://enginear.test/api/get_eng/${problem}`;
  
    const config = {
      timeout: 60000,
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      }
    };
  
    return axios.get(url , config);
};

const instance = new ApiService(accessToken);

export default instance;
