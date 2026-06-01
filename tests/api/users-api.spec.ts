import { test, expect } from '@playwright/test';

test('GET post by id', async ({ request }) => {

  const response = await request.get(
    'https://jsonplaceholder.typicode.com/posts/1'
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.id).toBe(1);

  expect(body.userId).toBe(1);
  console.log(body);
});

test('POST create post', async ({ request }) => {

  const createResponse = await request.post(
    'https://jsonplaceholder.typicode.com/posts',
    {
      data: {
        title: 'Aprendiendo Playwright',
        body: 'Mi primer POST',
        userId: 1
      }
    }
  );

  expect(createResponse .status()).toBe(201);

  const createBody =
  await createResponse.json();
  const postId = createBody.id;

  console.log(createBody);
});