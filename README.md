# Playwright_POM_CLI_Tusher

Playwright + Page Object Model assignment for [Sauce Demo](https://www.saucedemo.com/).

## Folder structure

```text
Playwright_POM_CLI_Tusher/
├── data/
│   └── users.json          # Data-driven login cases
├── pages/
│   ├── LoginPage.js        # Login form POM
│   └── InventoryPage.js    # Products page POM
├── tests/
│   └── login.spec.js       # Data-driven login tests
├── playwright.config.js
├── package.json
└── README.md
```

## Setup

```bash
cd ~/Desktop/SQA_AUTOMATION/Playwright_POM_CLI_Tusher
npm install
npx playwright install chromium
```

## Run tests (CLI)

```bash
npm run test:login
```

Expected: **3 passed** (1 success + 2 error cases).

## Credentials (from Sauce Demo)

| Username         | Password      | Notes        |
|------------------|---------------|--------------|
| standard_user    | secret_sauce  | Valid login  |
| locked_out_user  | secret_sauce  | Locked error |

## Report notes (for submission doc)

**What matched well:** Sauce Demo `data-test` attributes (`username`, `password`, `login-button`, `error`, `title`, `inventory-list`) map cleanly to POM locators. The data-driven JSON loop (1 success / 2 errors) matches the assignment exactly.

**What to verify yourself:** Confirm locators in the browser DevTools if the site UI changes. Capture screenshots of (1) this folder structure and (2) the CLI output of `npm run test:login` showing 3 passing cases for your report doc.
