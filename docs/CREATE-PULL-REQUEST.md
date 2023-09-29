## Steps to create a pull request at OpenGenus Checklist

To contribute code changes to the OpenGenus Checklist project, follow these steps:

1. **Fork the Repository**: Click the "Fork" button on the [repository page](https://github.com/OpenGenus/checklist) to create your copy of the project.

2. **Clone Your Fork**: Clone the repository to your local machine using `git clone`. Replace `<your-username>` with your GitHub username.

   ```bash
   git clone https://github.com/<your-username>/checklist.git
   cd checklist
   ```
   
3. **Create a Branch**: Create a new branch for your changes. Use a descriptive branch name that reflects the purpose of your changes.

```
git checkout -b feature
```

Remember to replace `feature` with your feature name.

4. **Make Changes**: Make your code changes, enhancements, or bug fixes in the branch you created.
5. Test Your Changes: Ensure that your changes work as expected and do not introduce new issues. Run tests if available.
6. Commit Your Changes: Commit your changes with a clear and concise commit message.

```
git commit -m "Add new feature: My Feature"
```

7. Push Your Changes: Push your branch to your fork on GitHub.

```
git push origin feature/my-feature
```

8. Open a Pull Request: Go to the OpenGenus Checklist repository and click "New Pull Request." Compare your branch with the main branch, add a title and description, and create the pull request.

9. Review and Collaborate: Collaborate with other contributors and maintainers to address any feedback or changes required for your pull request.
10. Merge Your Pull Request: Once your pull request is approved and passes any required tests, it will be merged into the main repository.
