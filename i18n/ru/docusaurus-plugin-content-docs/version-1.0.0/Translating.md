---
id: 'localisation'

title: Localisation
title_meta: Localisation

sidebar_label: Localisation
sidebar_position: 1
# sidebar_class_name:
# sidebar_custom_props: 
displayed_sidebar: main

hide_title: false
hide_table_of_contents: true

toc_max_heading_level: 3
toc_min_heading_level: 2

# pagination_next: null
# pagination_next: null

# pagination_next: null

keywords: ["intro", "home"]
description: Description is empty:(
# image: 
tags: [localisation, repoinfo]
draft: false
unlisted: false
# last_update: 
# slug: /
---
## Contributing Translations via GitHub Pull Requests

To contribute translations to this repository, you can submit a pull request using either the GitHub web interface or your local machine. Follow the steps below for your preferred method.

## Using the Web Interface

1. **Fork the Repository**: Click the "Fork" button in the upper-right corner of this repository to create a personal copy in your GitHub account.
2. **Navigate to Your Fork**: Go to your forked repository on GitHub (e.g., `https://github.com/your-username/docsv2`).
3. **Create or Edit a Translation File**:
    - Click on the "Add file" button and choose "Create new file" to add a new translation file.
    - To edit an existing translation file, navigate to it, and click the pencil icon.
4. **Add Your Translation**: Add your translation content to the editor. Ensure it follows the i18n guidelines provided by Docusaurus.
5. **Commit Your Changes**: Scroll down to the "Commit new file" section:
    - Enter a brief commit message that describes the changes you’ve made.
    - Optionally, provide more details in the extended description.
    - Click "Commit new file" (or "Commit changes" if editing an existing file).
6. **Submit a Pull Request (PR)**:
    - Navigate back to the original repository (not your fork).
    - Click on "New Pull Request".
    - Select the branch from your fork that contains your changes.
    - Add a meaningful description of your translation work, explaining any important details, then submit the pull request.

## Using Your Local Machine (Git & CLI)

1. **Fork the Repository**: Fork the original repository by clicking "Fork" in the upper-right corner to create a copy under your GitHub account.
2. **Clone Your Fork Locally**: Clone your forked repository to your local machine:

   ```bash
   git clone https://github.com/your-username/docsv2.git
   cd docsv2
   ```

3. **Create a New Branch**: Always create a separate branch for each translation to keep things organized:

   ```bash
   git checkout -b my-new-translation
   ```

4. **Add Your Translation Files**: Place your translation files in the appropriate directories, typically within the `i18n` folder. Ensure they follow any existing file structure or conventions, as well as the i18n guidelines provided by Docusaurus.

5. **Commit Your Changes**: Once your translations are added, stage and commit the changes:

   ```bash
   git add .
   git commit -m "Add translations for [language]"
   ```

6. **Push Changes to Your Fork**: Push the new branch to your forked GitHub repository:

   ```bash
   git push origin my-new-translation
   ```

7. **Open a Pull Request (PR)**:
    - Visit the original repository on GitHub.
    - Click "New Pull Request".
    - Select the branch from your fork that contains your translations.
    - Add a detailed description, including what languages you translated, and any special instructions for reviewing or using them. Then submit the PR.

## Important Notes

- **Testing**: Be sure to test your translations before submitting. Ensure they are accurate and formatted correctly.
- **Branch Naming**: When creating a new branch, use a descriptive name that relates to the translation.
- **Contributing Guidelines**: This repository has a `CONTRIBUTING.md` file, make sure to read and follow it before submitting your pull request.
- **i18n Guidelines**: Follow the i18n guidelines as provided by Docusaurus [here](https://docusaurus.io/docs/i18n/introduction).

By following these steps, you can help make the documentation accessible to a wider audience. Thank you for your contributions!