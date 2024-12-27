---
id: 'contributing'

title: Contributing
title_meta: Contributing

sidebar_label: Contributing
sidebar_position: 1
# sidebar_class_name:
# sidebar_custom_props: 
displayed_sidebar: main

hide_title: false
hide_table_of_contents: false

toc_max_heading_level: 3
toc_min_heading_level: 2

# pagination_next: null
# pagination_next: null

# pagination_next: null

keywords: ["intro", "home"]
description: Description is empty:(
# image: 
tags: [contributing, repoinfo]
draft: false
unlisted: false
# last_update: 
# slug: /
---

## Contributing via GitHub Pull Requests

To contribute to this repository, you can submit a pull request using either the GitHub web interface or your local machine. Follow the steps below for your preferred method.

## Using the Web Interface

1. **Fork the Repository**: Click the "Fork" button in the upper-right corner of this repository to create a personal copy in your GitHub account.
2. **Navigate to Your Fork**: Go to your forked repository on GitHub (e.g., `https://github.com/devvyyxyz/docsv2`).
3. **Create or Edit a File**:
    - Click on the "Add file" button and choose "Create new file" to add a new file.
    - To edit an existing file, navigate to it, and click the pencil icon.
4. **Add Your Content**: Add your content to the editor. Ensure it follows any style guidelines or contribution rules for the project.
5. **Commit Your Changes**: Scroll down to the "Commit new file" section:
    - Enter a brief commit message that describes the changes you’ve made.
    - Optionally, provide more details in the extended description.
    - Click "Commit new file" (or "Commit changes" if editing an existing file).
6. **Submit a Pull Request (PR)**:
    - Navigate back to the original repository (not your fork).
    - Click on "New Pull Request".
    - Select the branch from your fork that contains your changes.
    - Add a meaningful description of your changes, then submit the pull request.

## Using Your Local Machine (Git & CLI)

1. **Fork the Repository**: Fork the original repository by clicking "Fork" in the upper-right corner to create a copy under your GitHub account.
2. **Clone Your Fork Locally**: Clone your forked repository to your local machine:

   ```bash
   git clone https://github.com/devvyyxyz/docsv2.git
   cd docsv2
   ```

3. **Create a New Branch**: Always create a separate branch for each change to keep things organized:

   ```bash
   git checkout -b my-new-branch
   ```

4. **Add Your Files**: Place your files in the appropriate directories. Ensure they follow any existing file structure or conventions.
5. **Commit Your Changes**: Once your changes are added, stage and commit the changes:

   ```bash
   git add .
   git commit -m "Add my changes [describe what the changes do]"
   ```

6. **Push Changes to Your Fork**: Push the new branch to your forked GitHub repository:

   ```bash
   git push origin my-new-branch
   ```

7. **Open a Pull Request (PR)**:
    - Visit the original repository on GitHub.
    - Click "New Pull Request".
    - Select the branch from your fork that contains your changes.
    - Add a detailed description, including what the changes do, why they are useful, and any special instructions for testing or using them. Then submit the PR.

## Important Notes

- **Testing**: Be sure to test your changes before submitting. Ensure they work as expected and don’t introduce bugs or issues.
- **Branch Naming**: When creating a new branch, use a descriptive name that relates to the change.
- **Contributing Guidelines**: This repository has a `CONTRIBUTING.md` file, make sure to read and follow it before submitting your pull request.

## Useful Resources

Here are some helpful resources to assist you in contributing to this repository:

- **[Markdown Guide](https://www.markdownguide.org/)**: A comprehensive guide to Markdown, a lightweight markup language for formatting text. Learn how to structure your README files, documentation, and more.
- **[GitHub Octicons](https://primer.github.io/octicons/)**: GitHub's official icon set, commonly used across GitHub projects. Use these icons to enhance your repository's visual appeal.
- **[Retype Octicons](https://retype.com/components/octicons/#icon-list)**: A collection of GitHub Octicons that can be easily integrated into Retype-powered documentation, perfect for adding icons to enhance your documentation pages.
- **[GitHub Docs](https://docs.github.com/)**: The official GitHub documentation. Learn about GitHub features, commands, workflows, and tips for managing repositories, handling pull requests, and more.
- **[Pro Git Book](https://git-scm.com/book/en/v2)**: A free online book that covers everything you need to know about Git, from the basics to advanced topics like branching and Git workflows.
- **[GitHub Flow](https://docs.github.com/en/get-started/quickstart/github-flow)**: An explanation of the GitHub Flow, a lightweight, branch-based workflow that supports teams and projects in version control.
- **[Semantic Commit Messages](https://gist.github.com/joshbuchea/01f9d4aa31638a2b95b8)**: A guide to writing clear and concise commit messages using semantic conventions, which helps maintain an organized commit history.
- **[Learn Git Branching](https://learngitbranching.js.org/)**: An interactive Git learning game that helps you practice and understand Git branching, merging, and rebasing.
- **[GitHub CLI](https://cli.github.com/)**: GitHub’s command-line tool for managing pull requests, issues, and repositories directly from your terminal.

These resources will help you with everything from mastering Markdown to understanding Git workflows, writing better commit messages, and effectively using GitHub tools.