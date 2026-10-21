const { createClient } = require("./payments/client");

function main() {
  const client = createClient();
  console.log(`Payments API: ${client.baseUrl}`);
}

if (require.main === module) main();

module.exports = { main };
