// AevoClient.ts

import axios, { AxiosInstance, AxiosResponse } from 'axios';

interface BaseURIs {
  [key: string]: string;
}

class AevoClient {
  private axiosInstance: AxiosInstance;

  private baseURIs: BaseURIs = {
    testnet: 'https://api-testnet.aevo.xyz',
    mainnet: 'https://api.aevo.xyz',
  };

  constructor(private baseUrl: string, private network: string) {
    this.axiosInstance = axios.create({
      baseURL: this.baseURIs[network],
    });
  }

  async fetchData<T>(endpoint: string, params: Record<string, any> = {}): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.get(endpoint, { params });
    return response.data;
  }
}

export default AevoClient;
