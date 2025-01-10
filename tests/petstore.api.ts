import { test, expect } from '@playwright/test';
import { createPet, getPetById, updatePet, placeOrder, deletePetById } from './api-utils/api-utils';
import { petData, orderData } from './data/data';

test('Create a new pet', async ({ request }) => {
  console.log('Starting test: Create a new pet');
  const pet = petData(78641, 'Max', 'available');
  console.log('Sending POST request to create pet:', pet);
  
  const response = await createPet(request, pet);
  expect(response.ok()).toBeTruthy();
  
  const responseBody = await response.json();
  console.log('Response received:', responseBody);
  expect(response.status()).toBe(200);
  
  expect(responseBody.id).toBe(78641);
  expect(responseBody.name).toBe('Max');
  expect(responseBody.status).toBe('available');
});

test('Retrieve a pet by ID', async ({ request }) => {
  const petId = 78641;
  console.log(`Starting test: Retrieve a pet by ID ${petId}`);
  
  const response = await getPetById(request, petId);
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
  
  const responseBody = await response.json();
  console.log('Pet details retrieved:', responseBody);
  
  expect(responseBody.id).toBe(petId);
  expect(responseBody.name).toBe('Max');
});

test('Update an existing pet', async ({ request }) => {
  console.log('Starting test: Update pet information');
  const updatedPet = petData(78641, 'Max1', 'sold');
  console.log('Sending PUT request to update pet:', updatedPet);
  
  const response = await updatePet(request, updatedPet);
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
  
  const responseBody = await response.json();
  console.log('Updated pet details:', responseBody);
  
  expect(responseBody.name).toBe('Max1');
  expect(responseBody.status).toBe('sold');
});

test('Place an order for a pet', async ({ request }) => {
  console.log('Starting test: Order pet');
  const order = orderData(1,78641,1,new Date().toISOString(),'placed',true);
  console.log('Sending Post for placing Order:', order);

  const  response= await placeOrder(request, order);
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);

  const responseBody = await response.json();
  console.log('Updated pet details:', responseBody);
  
  expect(responseBody.petId).toBe(order.petId);
  expect(responseBody.status).toBe('placed');

 
});


test('Delete a pet by ID', async ({ request }) => {
  const petId = 78641;
  console.log(`Starting test: Delete pet with ID ${petId}`);
  
  const response = await deletePetById(request, petId);
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
  
  console.log(`Pet with ID ${petId} deleted successfully`);
});


