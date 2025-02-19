import api from "../services/apiRequester";

export const fetchCountries = async () => {
    const response = await api.get('/all');
    return response;
  };