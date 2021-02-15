import axios from "axios";


export default {
  getHoroscopeSign: function(sign) {
    return axios.get('https://aztro.sameerkumar.website/?sign=' + sign + '&day=today');
  }.then(response => {
    console.log(response);
  })
};

