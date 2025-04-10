//@ts-check
const { test, expect, request } = require('@playwright/test');

test('Get List Users Reqres', async ({ page }) => {
    const contextAPI = await request.newContext();
    const res = await contextAPI.get('https://reqres.in/api/users?page=2');
    expect(res.status()).toBe(200);
    const responJSON = await res.json();
    expect(responJSON.page).toBe(2);
    expect(responJSON.total).toBe(12);
});

test('Get Single User', async ({ page }) => {
    const contextAPI = await request.newContext();
    const res = await contextAPI.get('https://reqres.in/api/users/2');
    expect(res.status()).toBe(200);
    const responJSON = await res.json();
    expect(responJSON.data.id).toBe(2);
});

test('Get Single User Not Found', async ({ page }) => {
    const contextAPI = await request.newContext();
    const res = await contextAPI.get('https://reqres.in/api/users/23');
    expect(res.status()).toBe(404);
});

test('Get List Resource', async ({ page }) => {
    const contextAPI = await request.newContext();
    const res = await contextAPI.get('https://reqres.in/api/unknown');
    expect(res.status()).toBe(200);
    const responJSON = await res.json();
    expect(responJSON.page).toBe(1);
    expect(responJSON.total).toBe(12);
});

test('Get Single Resource', async ({ page }) => {
    const contextAPI = await request.newContext();
    const res = await contextAPI.get('https://reqres.in/api/unknown/2');
    expect(res.status()).toBe(200);
    const responJSON = await res.json();
    expect(responJSON.data.id).toBe(2);
});

test('Get Single Resource Not Found', async ({ page }) => {
    const contextAPI = await request.newContext();
    const res = await contextAPI.get('https://reqres.in/api/unknown/23');
    expect(res.status()).toBe(404);
});

test('Post User', async ({ page }) => {
    const contextAPI = await request.newContext();
    const postData = {
        "name": "ditha",
        "job": "leader"
    }
    const res = await contextAPI.post('https://reqres.in/api/users', {
        data : postData
    });
    expect(res.status()).toBe(201);
    const responJSON = await res.json();
    expect(responJSON.name).toBe('ditha');
    expect(responJSON.job).toBe('leader');
});

test('Put User', async ({ page }) => {
    const contextAPI = await request.newContext();
    const postData = {
        "name": "ditha",
        "job": "executive"
    }
    const res = await contextAPI.post('https://reqres.in/api/users/2', {
        data : postData
    })
    expect(res.status()).toBe(201);
    const responJSON = await res.json();
    expect(responJSON.name).toBe('ditha');
    expect(responJSON.job).toBe('executive');
});

test('Delete User', async ({ page }) => {
    const constextAPI = await request.newContext();
    const res = await constextAPI.delete('https://reqres.in/api/users/2');
    expect(res.status()).toBe(204);
});
