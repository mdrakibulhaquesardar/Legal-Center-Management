---
title: Data Deletion Policy
lastUpdated: November 8, 2026
---

# Dozora Data & Account Deletion Policy

In full alignment with **Google Play Developer Program Policies** and **Google Play's Data Safety guidelines**, this document details how user data is managed, retained, and deleted in **Dozora: Better Sleep**, developed by **NexCode Studio**.

---

## 1. No Account Required & Zero Cloud Storage

Dozora is intentionally architected with privacy-first principles:
* **No Account Creation:** The application does not require registration, email verification, username creation, or phone numbers.
* **Zero Cloud Databases:** We do **not** maintain remote cloud servers or databases storing user profiles, personal identifiers, or listening history.

All personal preferences—including custom sound mixes, favorite ambient tracks, volume levels, and alarm schedules—are stored exclusively on your physical device hardware in local storage (`SharedPreferences`).

---

## 2. How to Delete All Local Data Immediately

Because your data is stored locally on your device, you have complete and immediate control over its deletion at any time:

### Method A: Clear Data via In-App Settings
1. Open **Dozora** on your Android device.
2. Tap the **Settings** icon.
3. Tap **"Clear Cache & Reset Preferences"**.
4. Confirm the prompt to immediately reset all saved mixes and app settings.

### Method B: Clear Data via Android System Settings
1. Open your phone's **Settings** app.
2. Navigate to **Apps** (or **Application Manager**) &rarr; Select **Dozora**.
3. Tap **Storage & Cache**.
4. Tap **"Clear Storage"** (or **"Clear Data"**).
5. All custom sound combinations, alarms, and local configurations are instantly and permanently erased from your device.

### Method C: Uninstalling the Application
Uninstalling Dozora automatically removes the application sandbox, resulting in the permanent, irreversible deletion of all local data stored by the App.

---

## 3. Remote Analytics & Diagnostics Deletion Request

While Dozora collects no personal identity data, automated crash diagnostics and aggregated usage telemetry are handled through Google Firebase. This data contains no names, email addresses, or phone numbers and cannot be linked back to you personally.

If you wish to submit a manual deletion inquiry regarding Firebase analytics records associated with your installation:

* **Email:** [relaxnightapp@gmail.com](mailto:relaxnightapp@gmail.com)
* **Subject:** `Dozora Data Deletion Request`
* **Information to Include:** Please state your device model, Android OS version, and any diagnostic context.
* **Timeline:** Inquiries are acknowledged within **48 hours** and processed within **14 business days**.

---

## 4. Summary of Data Types and Retention

| Data Type | Storage Location | Retention Period | Deletion Method |
| :--- | :--- | :--- | :--- |
| **Custom Sound Mixes & Alarms** | Local device storage only | Until user clears data or uninstalls | Instant via App Settings, Android Storage Settings, or Uninstall |
| **App Volume & Timer Preferences**| Local device storage only | Until user clears data or uninstalls | Instant via App Settings, Android Storage Settings, or Uninstall |
| **Firebase Crash Logs & Telemetry**| Encrypted Google Firebase servers | Automatically expires under standard Firebase schedule (up to 14 months) | Automated expiration by Google, or email request to developer |

---

## 5. Contact Data Privacy Support

For questions, requests, or privacy assistance regarding Dozora:

* **Developer:** NexCode Studio
* **App Name:** Dozora: Better Sleep
* **Package Name:** `com.nexcode.studio.dozora`
* **Official Support Email:** [relaxnightapp@gmail.com](mailto:relaxnightapp@gmail.com)
* **Official Website:** [https://dozora.vercel.app](https://dozora.vercel.app)
