# gh-actions-demo

A React app that demonstrates a GitHub Actions CI pipeline. On every pull request to `main` or `dev`, the workflow automatically runs ESLint to keep code quality consistent.

## Workflow

`.github/workflows/main.yml` — triggered on PRs to `main` / `dev`

| Step | Action |
|---|---|
| Checkout code | `actions/checkout@v4` |
| Setup Node.js 20 | `actions/setup-node@v4` |
| Install dependencies | `npm ci` |
| Run ESLint | `npm run eslint` |

## Local development

```bash
npm install
npm start       # dev server at http://localhost:3000
npm test        # run tests
npm run eslint  # lint
npm run build   # production build
```
