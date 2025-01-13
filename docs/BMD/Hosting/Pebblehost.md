---
title: PebbleHost
title_meta: PebbleHost

sidebar_label: PebbleHost
sidebar_position: 3
# sidebar_class_name:
# sidebar_custom_props: 
# displayed_sidebar:

# hide_title: false
# hide_table_of_contents: false

# toc_max_heading_level: 2
# toc_min_heading_level: 1

# pagination_next: null
# pagination_next: null

# pagination_next: null

keywords: ["bmd", "hosting"]
description: Hosting a BMD bot on PebbleHost
# image: 
tags: [hosting, bmd]
# draft: true
# unlisted: false
# last_update: 
# slug: /
---

## Purchase discord bot plan
Visit https://billing.pebblehost.com to purchase the **Discord bot hosting** plan.
## Connect to panel
You can find the information in the billing emails inbox. Please visit https://panel.pebblehost.com and enter the provided username and password.
## Uploading files
To upload your files, you can use the "Upload File" option on the panel or utilize FTP (File Transfer Protocol). Using FTP is generally considered best practice and is much easier. You can find a guide for uploading files via FTP [here](#ftp).
## Edit bot start file config
Go to the Pebblehost loader tab and change your "bot start file" from 'index.js' to 'bot.js'. If it is already set to 'bot.js', then leave it as is.

Go to the **bot language** section, select both “bot hosting” and “Node.js bot,” and then restart the host using the restart button.
## Install all required node modules 
Installing node modules through the console is not possible on Pebblehost. Therefore, we will navigate to the node modules section.
[Image of node modules section]
To install the required node modules for your project, type each one into the search bar. If you're unsure about what to enter, don't worry! You can refer to the `package.json` file for a complete list of all the necessary ones. However, if you're not sure what to look for, just ignore it; the console will display a message like `module 'nameofmodule' is missing` or something similar for any required modules that are not installed.
## Turning bot online
Turning your bot online is as simple pressing the **start** button
[Image]
## Fixing startup
BMD is facing an issue with startup initialization in the ʼpackage.jsonʼ file. To resolve this, please add the necessary line I ʼpackage.jsonʼ.

ʼʼʼjson
"name": "",
  "description": "",
  "author": "",
  "main": "bot.js",   <——this line is what needs to be added
  ʼʼʼ
## Connecting to SQL db
You can connect to your SQL database for fre[#sql]
## Common errors 
A list of common errors can be found here [#errors]
## Extra resources
