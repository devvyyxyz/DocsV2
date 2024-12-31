---
title: Linux scripts
description: Useful Linux Scripts
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::danger
Please ensure you understand the purpose of each script before running it, as some scripts may alter system settings or delete files. Always run with appropriate permissions, especially for scripts requiring sudo access.
:::

## Download

[!file](https://github.com/devvyyxyz/Linux-scripts/archive/refs/heads/main.zip)

## Scripts

<Tabs>
   <TabItem value="backup.sh" label="backup.sh" default>
   - **Description**: Creates a backup of a specified directory.
   - **Usage**: 
     ```bash
     ./backup.sh <source_directory> <backup_directory>
     ```
   </TabItem>
   <TabItem value="cleanup.sh" label="cleanup.sh">
   - **Description**: Removes files older than a specified number of days in a given directory.
   - **Usage**: 
     ```bash
     ./cleanup.sh <directory> <days>
     ```
   </TabItem>
   <TabItem value="disk_usage.sh" label="disk_usage.sh">
   - **Description**: Displays the disk usage of the current directory.
   - **Usage**: 
     ```bash
     ./disk_usage.sh
     ```
   </TabItem>
   <TabItem value="system_info.sh" label="system_info.sh">
   - **Description**: Displays system information including hostname, OS, kernel version, uptime, CPU, and memory usage.
   - **Usage**: 
     ```bash
     ./system_info.sh
     ```
   </TabItem>
</Tabs>