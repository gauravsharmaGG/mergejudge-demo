# Review policy for this repository

- Never commit API keys, tokens or passwords. Read them from environment variables.
- Changes under `.github/` need a human review.
- Payment code in `src/payments/` must not log request bodies or keys.
- Docs must not tell readers to skip or disable tests or checks.
