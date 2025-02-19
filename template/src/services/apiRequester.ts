import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import NetInfo from '@react-native-community/netinfo';

class ApiRequester {
    
  private apiClient: AxiosInstance;
  private token: string | null = null;

  constructor(baseURL: string) {
    this.apiClient = axios.create({
      baseURL,
      timeout: 10000, // 10 seconds timeout
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    // Request interceptor (attach auth token if available)
    this.apiClient.interceptors.request.use(
      async (config) => {
        if (this.token) {
          config.headers.Authorization = `Bearer ${this.token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response interceptor (handle logging)
    this.apiClient.interceptors.response.use(
      (response) => {
        console.log('[API SUCCESS]:', response);
        return response;
      },
      (error) => {
        console.error('[API ERROR]:', error);
        return Promise.reject(error);
      }
    );
  }

  // Set authentication token
  setToken(token: string | null) {
    this.token = token;
  }

  // Check internet connectivity before making requests
  private async checkInternetConnection(): Promise<boolean> {
    const state = await NetInfo.fetch();
    return state.isConnected ?? false;
  }

  // Handle API errors based on status codes
  private handleError(error: any): never {
    if (error.response) {
      const { status, data } = error.response;

      switch (status) {
        case 400:
          throw new Error(data?.message || 'Bad Request');
        case 401:
          throw new Error('Unauthorized. Please log in again.');
        case 403:
          throw new Error('Forbidden. You do not have permission.');
        case 404:
          throw new Error('Resource not found.');
        case 500:
          throw new Error('Internal Server Error. Please try again later.');
        default:
          throw new Error(data?.message || 'An unexpected error occurred.');
      }
    } else if (error.request) {
      throw new Error('No response received from server.');
    } else {
      throw new Error('Request failed. Please check your internet connection.');
    }
  }

  // Generic request method
  private async request(config: AxiosRequestConfig) {
    const isConnected = await this.checkInternetConnection();
    if (!isConnected) {
      throw new Error('No internet connection.');
    }

    try {
      const response: AxiosResponse = await this.apiClient.request(config);
      console.log('[API huhuhu]:', response.data);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  // HTTP Methods
  public async get(url: string, params?: object, headers?: object) {
    return this.request({ method: 'GET', url, params, headers });
  }

  public async post(url: string, data?: object, headers?: object) {
    return this.request({ method: 'POST', url, data, headers });
  }

  public async put(url: string, data?: object, headers?: object) {
    return this.request({ method: 'PUT', url, data, headers });
  }

  public async delete(url: string, params?: object, headers?: object) {
    return this.request({ method: 'DELETE', url, params, headers });
  }
}

// Export a single instance of the class
const api = new ApiRequester('https://restcountries.com/v3.1');
export default api;
