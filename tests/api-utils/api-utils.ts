// api-utils.ts
import { APIRequestContext, APIResponse } from '@playwright/test';
import { ENDPOINTS } from '../constants';

export async function createPet(request: APIRequestContext, petData: object): Promise<APIResponse> {
  return await request.post(ENDPOINTS.pet, {
    headers: { 'Content-Type': 'application/json' },
    data: petData,
  });
}

export async function getPetById(request: APIRequestContext, petId: number): Promise<APIResponse> {
  return await request.get(ENDPOINTS.petById(petId));
}

export async function updatePet(request: APIRequestContext, petData: object): Promise<APIResponse> {
  return await request.put(ENDPOINTS.pet, {
    headers: { 'Content-Type': 'application/json' },
    data: petData,
  });
}

export async function placeOrder(request: APIRequestContext, orderData: object): Promise<APIResponse> {
  return await request.post(ENDPOINTS.order, {
    headers: { 'Content-Type': 'application/json' },
    data: orderData,
  });
}

export async function deletePetById(request: APIRequestContext, petId: number): Promise<APIResponse> {
  return await request.delete(ENDPOINTS.petById(petId));
}




