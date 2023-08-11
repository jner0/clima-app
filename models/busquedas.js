const axios = require("axios");

class Busquedas {
  historial = [""];

  constructor() {
    //TODO: leer DB si existe
  }

  get paramsMapbox() {
    return {
      access_token:
        "pk.eyJ1Ijoiam5lbWVjaW8iLCJhIjoiY2xsNzQxdDBjMGhydTNrdGpibG9uYnRydiJ9.6U7uvh4PwS4BJSdo5r604w",
      limit: 5,
      language: "es",
    };
  }

  async ciudad(lugar = "") {
    try {
      //peticion http
      const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/-${lugar}.json`,
        params: this.paramsMapbox,
      });
      const resp = await instance.get();

      console.log("working", resp.data);

      return []; //retornar los lugares
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}

module.exports = Busquedas;
