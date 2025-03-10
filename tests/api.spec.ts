import { test, expect } from "@playwright/test";
import { request } from "http";

test("API Delete Testing", async ({ request }) => {
  const response = await request.delete("https://reqres.in/api/users/2");
  expect(response.status()).toBe(204);
});

test("API Put Testing", async ({ request }) => {
  const response = await request.put("https://reqres.in/api/users/2", {
    data: {
      name: "Raghav",
      job: "engineer",
    },
  });
  expect(response.status()).toBe(200);
  const text = await response.text();
  expect(text).toContain("engineer");
  console.log(response.json());
});

test("API Post Testing", async ({ request }) => {
  const response = await request.post("https://reqres.in/api/users", {
    data: {
      "First name": "Lakshay",
      "Second name": "Shankar",
    },
  });
  expect(response.status()).toBe(201);
  const text = await response.text();
  expect(text).toContain("Lakshay");
  console.log(response.json());
});

test("API Testing", async ({ request }) => {
  const response = await request.get("https://reqres.in/api/users/2");
  expect(response.status()).toBe(200);
  const text = await response.text();
  expect(text).toContain("Janet");
  console.log(await response.json());
});
