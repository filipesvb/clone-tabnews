test("GET em http://localhost:3000/api/v1/status deve retornar status 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();

  const parsedResponseTime = new Date(responseBody.updated_at).toISOString();
  expect(parsedResponseTime).toEqual(responseBody.updated_at);

  expect(responseBody.dependencies.database.version).toBe("16.0");
  expect(responseBody.dependencies.database.max_connections).toBe(100);
  expect(responseBody.dependencies.database.open_connections).toBe(1);
});
