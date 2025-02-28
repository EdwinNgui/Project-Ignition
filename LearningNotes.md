### Diataxis Model: For naming documentation

## **Types** (the category):

- **`feat`**: A new feature or functionality added.
- **`fix`**: A bug fix or issue resolved.
- **`docs`**: Changes to documentation.
- **`style`**: Changes that don't affect the functionality (e.g., formatting, code style).
- **`refactor`**: A code change that neither fixes a bug nor adds a feature, but improves the code structure.
- **`perf`**: Performance improvements.
- **`test`**: Adding or modifying tests.
- **`chore`**: Routine tasks like build changes, dependency updates, etc.
- **`ci`**: Changes to the continuous integration (CI) configuration.
- **`build`**: Changes that affect the build process or external dependencies.
- **`revert`**: Reverts a previous commit.

## **Scopes** (what part):

- **`auth`**: Authentication-related changes.
- **`ui`**: User interface-related changes.
- **`api`**: Changes to the API or backend.
- **`db`**: Database-related changes.
- **`components`**: Changes to reusable components.
- **`styles`**: Changes to CSS or styling-related files.
- **`tests`**: Modifications to test files or test configurations.
- **`config`**: Changes to configurations (e.g., webpack, environment settings).
- **`utils`**: Utility functions or helpers.

### Next.JS Setup

- When asked about App Router, if declined will lead to pages
- Pages are structured by having the page itself, layouts that that mold the shape of the page and components which are smaller pieces. The pages are routed through their name
- App Router instead has an /app folder which houses the layout + index, and each subdirectory page is housed in a corresponding folder with its name while components are in their own folder too within app router
