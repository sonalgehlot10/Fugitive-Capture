const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

export const getCities = async () => {
  const response = await fetch(`${API_URL}/api/cities`);
  const data = await response.json();
  return data;
};

export const getVehicles = async () => {
  const response = await fetch(`${API_URL}/api/vehicles`);
  const data = await response.json();
  return data;
};

export const submitCops = async (copSelection) => {
  const response = await fetch(`${API_URL}/api/cops`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(copSelection),
  });
  const data = await response.json();
  return data;
};

export const getResult = async () => {
  const response = await fetch(`${API_URL}/api/result`);
  const data = await response.json();
  return data;
};
