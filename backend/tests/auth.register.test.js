const request = require("supertest");
const app = require("../src/app");

describe("Auth Register API", () => {
  it("should register a new user successfully", async () => {
    const response = await request(app)
      .post("/api/auth/register")
      .send({
        name: "Test User",
        email: "testuser@example.com",
        password: "Password@123",
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("email", "testuser@example.com");
    expect(response.body).not.toHaveProperty("password");
  });
});