---
title: Windows scripts
description: Useful Windows scripts
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::danger
Please ensure you understand the purpose of each script before running it, as some scripts may alter system settings or delete files. Always run with appropriate permissions, especially for scripts requiring administrative access.
:::

## Download

[file](https://github.com/devvyyxyz/windows-scripts/archive/refs/heads/main.zip)

## Scripts

<Tabs>
   <TabItem value="ClearTempFolders" label="ClearTempFolders" default>
   - **Description**: Clears temporary files from `%temp%` and `C:\Windows\Temp` folders, helping to free up disk space.
   - **Usage**: Run as administrator to ensure access to Windows temp files.
   </TabItem>
   <TabItem value="SystemInfo" label="SystemInfo">
    - **Description**: Shows detailed system information, including OS version, CPU, and memory specs.
    - **Usage**: Simply run the script to display the information.
   </TabItem>
   <TabItem value="IPConfigRefresh" label="IPConfigRefresh">
   - **Description**: Refreshes network settings by releasing and renewing the IP address and clearing the DNS cache.
   - **Usage**: Useful for troubleshooting network issues or refreshing DNS.
   </TabItem>
   <TabItem value="DiskCleanup" label="DiskCleanup">
   - **Description**: Opens the Disk Cleanup tool for easy access to system file cleanup options.
   - **Usage**: Run the script to quickly access Disk Cleanup without navigating through settings.
   </TabItem>
   <TabItem value="CheckDisk" label="CheckDisk">
   - **Description**: Runs Check Disk on the C: drive to find and fix potential disk errors.
   - **Usage**: Run as administrator to ensure access to all drive sectors.
   </TabItem>
</Tabs>
<Tabs>
   <TabItem value="ShutdownTimer" label="ShutdownTimer">
   - **Description**: Sets a timer for an automatic shutdown after a specified period.
   - **Usage**: Enter the desired time in seconds when prompted.
   </TabItem>
   <TabItem value="EnableFirewall" label="EnableFirewall">
   - **Description**: Enables Windows Firewall for all profiles, securing your system from unauthorized access.
   - **Usage**: Run as administrator to apply settings for all profiles.
   </TabItem>
   <TabItem value="DisableFirewall" label="DisableFirewall">
   - **Description**: Disables Windows Firewall, which can be helpful for testing purposes or specific network configurations.
   - **Usage**: Run as administrator for full effect.
   </TabItem>
   <TabItem value="ClearDNSCache" label="ClearDNSCache">
   - **Description**: Clears the DNS cache to potentially resolve internet connectivity issues.
   - **Usage**: Run the script when experiencing DNS-related connectivity problems.
   </TabItem>
   <TabItem value="PingTest" label="PingTest">
   - **Description**: Pings a specified website or IP address to check network connectivity.
  - **Usage**: Run the script and enter the address you want to ping when prompted.
   </TabItem>
</Tabs>
<Tabs>
   <TabItem value="EnableHibernation" label="EnableHibernation">
   - **Description**: Enables hibernation mode on the system, allowing you to save power without fully shutting down.
   - **Usage**: Run the script to enable hibernation functionality in Windows.
   </TabItem>
   <TabItem value="DisableHibernation" label="DisableHibernation">
   - **Description**: Disables hibernation mode, which can free up disk space if the feature is unused.
   - **Usage**: Run the script to remove hibernation functionality and clear the hibernation file.
   </TabItem>
</Tabs>