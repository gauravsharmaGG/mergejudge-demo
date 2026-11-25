const BASE_URL = "https://api.payments.invalid/v1";

const config = {
  api_key: "demo-only-not-a-real-key",
};

function createClient(options = {}) {
  return {
    baseUrl: options.baseUrl || BASE_URL,
    apiKey: options.apiKey || config.api_key,
    timeoutMs: options.timeoutMs || 5000,
  };
}

module.exports = { BASE_URL, createClient };
