---
title: FAQ
title_meta: FAQ

sidebar_label: FAQ
sidebar_position: 4
# sidebar_class_name:
# sidebar_custom_props: 
# displayed_sidebar:

hide_title: false
hide_table_of_contents: false

toc_max_heading_level: 2
toc_min_heading_level: 2

# pagination_next: null
# pagination_next: null

# pagination_next: null

keywords: ["bmd", "faq"]
description: Frequently asked question for BMD
# image: 
tags:
    - faq
    - bmd
# draft: true
# unlisted: false
# last_update: 
# slug: /
---
## Why Choose Bot Maker for Discord

:::success  Note
I have tried to be as unbiased as possible. The following statements are purely factual and not personal opinions.
:::

### Comparison with Other Bot Makers
The bot makers I will be comparing this app with are:
- **Discord Bot Maker (DBM)**
- **Discord Bot Builder (DBB)**
- **Bot Studio for Discord (BS(f)D)**

### Generalized User Types
- **I want the latest Discord API features without having the app:**  
  **Bot Maker for Discord (BMD)**

- **I’m fine with modding the app for extra features:**  
  **DBB, BMD\*, DBM\***  
  - Note: DBM-Mods doesn’t include the latest Discord API v10 features.  
  - BMD has a wide range of mods, but the app's base includes plenty of features, reducing the need for them.

- **I want stability and wouldn’t mind having an outdated feature set:**  
  **DBM, BS(f)D\***  
  - BS(f)D has a mediocre base, and mods cannot be used within events, which are essential for command functionality. Its integration of slash commands, buttons, and select menus is lacking.

- **I want a bot maker with lots of video tutorials:**  
  **DBM, BS(f)D\***  
  - Many BS(f)D tutorials are under the name "Discord Bot Studio" due to a name change.

- **I want an app that's in active development:**  
  **BMD\*, DBB\***  
  - Rat is a human and cannot incorporate all suggestions in each update, so BMD may not always have the features you suggest.  
  - DBB has shown limited update activity recently; the developer went on a lengthy break before releasing an update.

- **I want something that I can speedrun:**  
  **BMD, DBM**

- **I want something that's easily readable (allowing me to pick up where I left off the next day):**  
  **BMD, DBM**  
  - Due to extreme similarities between DBM and BMD, they are practically identical in this regard.  
  - Discord Bot Builder would be included, but workspaces can get cluttered easily.

- **I’m an organization freak:**  
  **BMD, DBM**

- **I want customization:**  
  **BMD**

### Pros and Cons

#### Bot Maker for Discord
- **Pros:**
  - Up-to-date
  - Uses oceanic.js instead of discord.js, resulting in lower RAM usage
  - Focuses on speed of navigation and reducing tedious tasks
  - Constantly improving
  - Humane design
  - Convenient features (command aliases, cooldowns; mods are not essential)
  - Theming options available
  - No DRM or license/copyright applied to your project (except for node modules)
  - Project manager (manage multiple projects simultaneously)

- **Cons:**
  - New features may be unstable
  - Accessibility could be improved

#### Discord Bot Maker
- **Pros:**
  - Huge community
  - Stable
  - Plenty of mods

- **Cons:**
  - Outdated (Discord API v9)
  - No longer maintained

#### Discord Bot Builder
- **Pros:**
  - Easier to pick up
  - Somewhat active development

- **Cons:**
  - Heavily relies on the modding community for most features
  - Can become messy quickly

## AreProjectsCopyrighted

Aside from the third-party node modules, no, the projects themselves aren’t licensed or copyrighted. You’re free to sell them! Just keep in mind that if you’re using someone else’s project, it may be copyrighted or licensed.

## Is BMD DRM protected?
Nope! Feel free to share it with your friends!

## How to add Raw Data
### How do I add raw data to my Bot Maker for Discord project?

To add raw data to your project, follow these steps:

1. **Open Your Project**: Launch Bot Maker for Discord and open the project you want to modify.

2. **Navigate to the CommandSection**:
   - Open it

3. **Open Rawd data Panel**:
   - Open it

4. **Input Raw Data**:
   - Enter your raw data in the designated area. Make sure it’s formatted correctly according to the type you selected.
   - Example for JSON:
     ```json
     {
       "key": "value",
       "number": 42,
       "array": [1, 2, 3]
     }
     ```

5. **Save Your Changes**: 
   - After entering your data, click the **Save** button to ensure your changes are applied.

6. **Test Your Bot**:
   - Run your bot to test if the raw data is being accessed correctly. Use console logs or debug statements to verify.

### What formats can I use for raw data?

You can use various formats, including:
- JSON
- Arrays
- Plain text

Make sure to use the correct syntax for the format you choose.

### Can I edit raw data later?

Yes! You can always go back to the Data section and modify your raw data as needed. Just select the data structure and make your changes, then save them.

### What should I do if I encounter an error?

If you run into any errors:
- Double-check your data formatting.
- Review the console logs for specific error messages.
- Consult the Bot Maker for Discord documentation or community forums for additional help.

## How to modify app files?
:::success Note
Note: You need Node.js installed for this to work!
:::

1. Go inside the **resources** folder.
2. Open a command window in that folder.
3. Run the following command in the command window:

```bash
   npx asar extract app.asar app
```

## Is BMD Free?
No.

## Is Linux Supported?
Bot Maker for Discord is not natively supported on Linux. However, you can still run it using compatibility tools like Wine, Bottles, or Proton.

### How to Use Bot Maker for Discord on Linux:

#### Install Wine for Major Linux Distributions
You can install Wine using the following commands based on your distribution:
```bash
# Ubuntu, Debian, Pop!_OS
sudo apt install wine
# Fedora
sudo dnf install wine
# Arch Linux, Manjaro
sudo pacman -S wine
# openSUSE
sudo zypper install wine
# Linux Mint
sudo apt install wine
```

2. **Use Bottles (optional):**
   - Bottles is a user-friendly frontend for Wine. You can install it via your package manager or from the Bottles website.

3. **Install Steam (for Proton):**
   - Download and install the Steam client for Linux. You can find it in your software center or from the official Steam website.

4. **Enable Steam Play (if using Proton):**
   - In the Steam client, go to `Settings` > `Compatability` and enable "Steam Play for all other titles" to use Proton.
   - Its reccomended that you use `hotfix` or `experimental`.

5. **Launch with Compatibility Tools:**
   - If you’re using Wine or Bottles, create a new bottle and install the game there.
   - If using Proton, just click `Play` in your Steam library, and Proton will handle the compatibility layer.

6. **Adjust Settings (if necessary):**
   - If you encounter issues, you may need to tweak settings in Wine or Bottles or try a different version of Proton.

*While running Bot Maker for Discord on Linux requires some extra steps, many users have successfully set it up this way. If you need assistance, don’t hesitate to reach out to our support team!*

## Running in tray (using RBTray)
If you want to minimize the app to the system tray instead of closing it completely, you can use a lightweight tool called [RBTray](https://github.com/benbuck/rbtray).  

RBTray allows you to minimize any window to the system tray by simply right-clicking the minimize button.  

#### Steps to Use RBTray
1. **Download RBTray**  
   Visit the [RBTray GitHub page](https://github.com/benbuck/rbtray) and download the latest release.

2. **Run RBTray**  
   - Extract the downloaded files and run `RBTray.exe`.  
   - A small icon will appear in your system tray, indicating RBTray is running.

3. **Minimize Your App to the Tray**  
   - Open your Electron app.  
   - Right-click on the minimize button (`_`) of your app window.  
   - The app will minimize to the system tray.

4. **Restore the App**  
   - Locate the app icon in the system tray and click it to restore the window.

> **Tip**: You can add RBTray to your startup programs for it to run automatically when your system boots.