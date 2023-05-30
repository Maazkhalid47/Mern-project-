// 1. Store the access token (assuming you have stored it in localStorage)
export const token = localStorage.getItem('accessToken');

// 2. Create a request interceptor
fetch.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
