// constants.ts
export const BASE_URL = 'https://petstore.swagger.io/v2';
export const ENDPOINTS = {
  pet: `${BASE_URL}/pet`,
  petById: (petId: number) => `${BASE_URL}/pet/${petId}`,
  order:`${BASE_URL}/store/order`,
};
