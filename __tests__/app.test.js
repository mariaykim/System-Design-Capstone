const request = require('supertest')
const app = require('../server/app.js');

const id = 1;

describe('GET products list', () => {
  test("Should expect 200 status code", async () => {
    const response = await request(app).get("/productlist");
    expect(response.statusCode).toBe(200);
  });

  test("It responds with an array of products", async () => {
    const response = await request(app).get("/productlist");

    expect(response.body[0]).toHaveProperty("id");
    expect(response.body[0]).toHaveProperty("name");
    expect(response.body[0]).toHaveProperty("slogan");
    expect(response.body[0]).toHaveProperty("description");
    expect(response.body[0]).toHaveProperty("category");
    expect(response.body[0]).toHaveProperty("default_price");
    expect(response.body[0]).toHaveProperty("created_at");
    expect(response.body[0]).toHaveProperty("updated_at");
  });
})

describe("GET a product by product id", () => {
  test("Should respond with a 200 status code", async () => {
    const response = await request(app).get(`/products/${id}`);
    expect(response.statusCode).toBe(200);
  });

  test("It responds with an array of one product", async () => {
    const response = await request(app).get(`/products/${id}`);
    expect(response.body.length).toBe(1);

    expect(response.body[0]).toHaveProperty("id");
    expect(response.body[0]).toHaveProperty("name");
    expect(response.body[0]).toHaveProperty("slogan");
    expect(response.body[0]).toHaveProperty("description");
    expect(response.body[0]).toHaveProperty("category");
    expect(response.body[0]).toHaveProperty("default_price");
    expect(response.body[0]).toHaveProperty("features");

  });
});

describe("GET related products by product id", () => {
  test("It responds with an array of related products", async () => {
    const response = await request(app).get(`/1/related`);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.statusCode).toBe(200);
  });
});

describe("GET styles by product id ", () => {
  test("It responds with an array of products", async () => {
    const response = await request(app).get(`/1/styles`);
    expect(response.body[0].results[0]).toHaveProperty("id");
    expect(response.body[0].results[0]).toHaveProperty("name");
    expect(response.body[0].results[0]).toHaveProperty("sale_price");
    expect(response.body[0].results[0]).toHaveProperty("original_price");
    expect(response.body[0].results[0]).toHaveProperty("default_style");
    expect(response.body[0].results[0]).toHaveProperty("photos");
    expect(response.body[0].results[0]).toHaveProperty("skus");

    expect(response.statusCode).toBe(200);
  });
});