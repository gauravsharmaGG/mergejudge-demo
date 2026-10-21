const BASE_URL = "https://api.payments.invalid/v1";

function createClient(options = {}) {
  return {
    baseUrl: options.baseUrl || BASE_URL,
    timeoutMs: options.timeoutMs || 5000,
  };
}

module.exports = { BASE_URL, createClient };
