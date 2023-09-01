# Newman API Tests in GitHub Actions

This repository demonstrates how to set up and run API tests using [Newman](https://learning.postman.com/docs/running-collections/using-newman-cli/integration-with-github-actions/) in GitHub Actions. Newman is a command-line collection runner for Postman, which allows you to run and automate Postman collections.

## Prerequisites

Before getting started, ensure you have the following prerequisites:

- A GitHub repository containing your Newman tests and any necessary environment files.
- A Postman collection (`potsman_collection.json`) containing your API tests.

## GitHub Actions Workflow

We have set up a GitHub Actions workflow (`main.yml`) in this repository to automatically run Newman API tests when code is pushed to the `main` branch. Here's how it works:

1. When you push changes to the `main` branch, GitHub Actions triggers the workflow.

2. The workflow sets up a Node.js environment, installs Newman, and then runs your Newman tests using the specified collection and environment files.

3. Test results are displayed in the GitHub Actions workflow run.

## Usage

1. Clone this repository to your local machine.

2. Add your Postman collection (`postman_collection.json`) and, if necessary, the environment file (`environment.json`) to the repository.

3. Push your changes to the `main` branch of your GitHub repository.

4. GitHub Actions will automatically run your Newman API tests and display the results in the Actions tab of your repository.

## Customization

You can customize the GitHub Actions workflow by editing the `.github/workflows/main.yml` file in this repository. Modify the paths to your collection and environment files, or adjust the trigger conditions to suit your project's needs.


## References

- [Newman CLI Documentation](https://learning.postman.com/docs/running-collections/using-newman-cli/integration-with-github-actions/)




