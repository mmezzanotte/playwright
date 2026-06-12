import { APIRequestContext, APIResponse } from '@playwright/test';

export class ApiClient {
  constructor(
    private request: APIRequestContext,
    private baseURL: string
  ) {}

  async get(endpoint: string): Promise<APIResponse> {
    return this.request.get(`${this.baseURL}${endpoint}`);
  }

  async post(endpoint: string, data: any): Promise<APIResponse> {
    return this.request.post(`${this.baseURL}${endpoint}`, { data });
  }

  async put(endpoint: string, data: any): Promise<APIResponse> {
    return this.request.put(`${this.baseURL}${endpoint}`, { data });
  }

  async delete(endpoint: string): Promise<APIResponse> {
    return this.request.delete(`${this.baseURL}${endpoint}`);
  }

  async patch(endpoint: string, data: any): Promise<APIResponse> {
    return this.request.patch(`${this.baseURL}${endpoint}`, { data });
  }
}
