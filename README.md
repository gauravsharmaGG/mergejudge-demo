# mergejudge-demo

A small demo repository for [MergeJudge](https://mergejudge.si), an AI pull request reviewer with an open-source engine.

MergeJudge puts every pull request in one of three lanes:

| Lane | Meaning |
|---|---|
| **auto** | Low risk: can merge once required checks pass. |
| **review** | A person should review it before merging. |
| **block** | Something must be fixed first. |

Deterministic rules run first and set a minimum lane. The AI step can only make a lane stricter, never looser. MergeJudge never merges anything itself.

## The 3 demo pull requests

1. **Docs typo fix** in `docs/getting-started.md`. Docs are an auto path and the change is tiny, so the rules put it in **auto**.
2. **Workflow pin** in `.github/workflows/test.yml`. Everything under `.github/` is a protected path, so it goes to **review** before any AI runs.
3. **Hard-coded key** in `src/payments/client.js`. The secret scan on added lines finds it, so it goes to **block**.

The key in PR #3 (`demo-only-not-a-real-key`) is fake. It isn't valid anywhere and is only there to trigger the secret scan. PR #3 is never merged.

## How it runs here

`.github/workflows/mergejudge.yml` runs the open-source [MergeJudge GitHub Action](https://github.com/gauravsharmaGG/mergejudge-runner) (MIT) on each pull request. The AI key comes from the repository secret `MJ_API_KEY`. The diff is sent to the AI provider configured in the workflow, using that key. Without a key or model, the review runs rules-only and the lanes above stay the same.

No `.mergejudge.yml` is used, so the built-in defaults apply. `AGENTS.md` holds the review policy that MergeJudge reads from the base branch.

Learn more at https://mergejudge.si.
