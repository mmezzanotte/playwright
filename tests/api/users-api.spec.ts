import { test, expect } from '@playwright/test';
import { ApiClient } from '../../fixtures/ApiClient';

// Para tests específicos de API sin otros fixtures
const apiTest = test.extend<{ apiClient: ApiClient }>({
  apiClient: async ({ request }, use) => {
    const apiClient = new ApiClient(
      request,
      'https://jsonplaceholder.typicode.com'
    );
    await use(apiClient);
  },
});

apiTest('GET post by id', async ({ apiClient }) => {
  const response = await apiClient.get('/posts/1');

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.id).toBe(1);
  expect(body.userId).toBe(1);
  console.log(body);
});

apiTest('POST create post', async ({ apiClient }) => {
  const createResponse = await apiClient.post('/posts', {
    title: 'Aprendiendo Playwright',
    body: 'Mi primer POST',
    userId: 1
  });

  expect(createResponse.status()).toBe(201);

  const createBody = await createResponse.json();
  const postId = createBody.id;

  console.log(createBody);
});

apiTest('PUT update post', async ({ apiClient }) => {
  const updateResponse = await apiClient.put('/posts/1', {
    title: 'Post Actualizado',
    body: 'Contenido actualizado',
    userId: 1,
    id: 1
  });

  expect(updateResponse.status()).toBe(200);

  const updatedBody = await updateResponse.json();
  expect(updatedBody.title).toBe('Post Actualizado');

  console.log(updatedBody);
});

apiTest('DELETE post', async ({ apiClient }) => {
  const deleteResponse = await apiClient.delete('/posts/1');

  expect(deleteResponse.status()).toBe(200);
  console.log('Post eliminado');
});
