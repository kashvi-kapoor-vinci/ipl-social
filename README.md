# IPL Social

## Author
- **Name**: Kashvi Kapoor
- **Email**: kashvi.kapoor@student.vinci.be

## GitHub Repository URL
[https://github.com/kashvi-kapoor-vinci/ipl-social.git](https://github.com/kashvi-kapoor-vinci/ipl-social.git)

## Description
This project sets up a **DevOps** environment using **GitHub Actions**. It includes:
- A **CI pipeline**.
- A JavaScript function for password validation (**passwordChecker.js**) that checks the following criteria:
  - Minimum 8 characters.
  - At least one special character.
  - At least one digit.
  - **Prohibition of containing "IPL"** (case-insensitive).
- Tests for the function are implemented using **TDD** in the file **passwordChecker.test.js**.

## Run the Tests
1. Clone the repository:
    ```bash
    git clone https://github.com/kashvi-kapoor-vinci/ipl-social.git
    cd ipl-social
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Run the tests:
    ```bash
    npm test
    ```
