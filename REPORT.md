# Assignment Report — Playwright_POM_CLI_Tusher

## Screenshots (add these yourself)

1. **Folder structure** — take a screenshot of this project folder in Finder / VS Code Explorer showing `tests/`, `pages/`, `data/`.
2. **CLI run** — run `npm run test:login` in Terminal and screenshot the output showing **3 passed**.

## What was generated correctly vs adjusted

Sauce Demo’s stable `data-test` attributes (`username`, `password`, `login-button`, `error`, `title`, `inventory-list`) mapped correctly into the LoginPage and InventoryPage locators after checking the live site. The data-driven `users.json` loop and `npm run test:login` script matched the assignment as written. The main fix needed was in `InventoryPage.isLoaded()`: a plain `isVisible()` check raced ahead of the product list rendering, so it was adjusted to wait for the URL and for the title/product list to become visible before returning success.

## Latest CLI result

```text
npm run test:login
  ✓ login as standard_user ... → success
  ✓ login as locked_out_user ... → error
  ✓ login as standard_user / wrong_password → error
  3 passed
```

## Submission checklist

- [ ] Push project to GitHub and copy the repo link
- [ ] Add the 2 screenshots above into this report (or a Google Doc)
- [ ] Upload project + report to Google Drive folder named `Playwright_POM_CLI_Tusher`
- [ ] Share Drive folder as **Anyone with the link can view**
