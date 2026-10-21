const test = require("node:test");
const assert = require("node:assert");
const { BASE_URL, createClient } = require("../src/payments/client");

test("uses the default base URL", () => {
  assert.strictEqual(createClient().baseUrl, BASE_URL);
});

test("accepts a custom timeout", () => {
  assert.strictEqual(createClient({ timeoutMs: 1000 }).timeoutMs, 1000);
});
