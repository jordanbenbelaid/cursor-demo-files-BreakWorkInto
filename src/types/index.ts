// Shared application interfaces
export interface User {
  id: string;
  name: string;
  role: 'admin' | 'user';
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}