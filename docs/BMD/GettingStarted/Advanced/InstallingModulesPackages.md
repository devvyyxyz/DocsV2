---
# title: Home
# title_meta: Home

# sidebar_label: Home
# sidebar_position: 1
# sidebar_class_name:
# sidebar_custom_props: 
# displayed_sidebar:

# hide_title: false
# hide_table_of_contents: false

# toc_min_heading_level: 2
# toc_min_heading_level: 1

# pagination_next: null
# pagination_next: null

# pagination_next: null

# keywords: ["intro", "home"]
# description: Description is empty:(
# image: 
# tags:
#     - home
#     - basic
# draft: true
# unlisted: false
# last_update: 
# slug: /
---

To install packages in Bot Maker For Discord (BMD), use the following commands, depending on your operating system:

### Windows

1. Open your terminal and use the following command:

    ```bash
    pnpm i <package_name>
    ```

2. Make sure to navigate to the BMD installation directory before running the command. By default, BMD is installed here:

    ```plaintext
    C:\Program Files (x86)\Steam\steamapps\common\Bot Maker For Discord
    ```

### Linux

1. **Navigate to the BMD directory.** You may need to locate it based on where you installed Steam, such as in the default directory:

    ```bash
    cd ~/.steam/steam/steamapps/common/Bot\ Maker\ For\ Discord
    ```

2. **Install the package** using `pnpm`:

    ```bash
    pnpm i <package_name>
    ```

Ensure `pnpm` is installed on your system. You can install it using `npm` with:

```bash
npm install -g pnpm
``` 