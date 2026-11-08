---
title: Privacy Policy
lastUpdated: November 8, 2026
---

# Privacy Policy for Dozora: Better Sleep

Welcome to **Dozora: Better Sleep** ("the App"), developed and operated by **NexCode Studio** ("we", "us", or "our"). Dozora is designed to help users calm their minds, meditate, and drift into peaceful sleep with curated nature sounds, white noise, ambient soundscapes, breathing exercises, and customizable sleep timers.

We are deeply committed to protecting your privacy and ensuring a transparent, distraction-free experience.

> [!NOTE]
> **Non-Trader Status:** Dozora is published and maintained as a **Non-Trader** entity under European Union (EU) and European Economic Area (EEA) consumer protection laws. The application operates strictly as a free wellness utility and does not conduct commercial sales, digital storefront purchases, or paid subscriptions.

> [!IMPORTANT]
> **100% Free & Zero Advertisements:** Dozora contains **no advertisements** (no Google AdMob, banner ads, interstitial pop-ups, or rewarded video ads). Furthermore, the application contains **no in-app purchases, no subscription tiers, and no payment gateway integrations**. We never sell, rent, or monetize your personal data.

---

## 1. Information We Collect

We prioritize user privacy above all else. **You do not need to create an account, log in with an email, or submit any personally identifiable information (PII) to use Dozora.**

### A. Data Stored Exclusively On Your Device (Local Storage)
All personal preferences and custom sound configurations are stored locally on your device using Android `SharedPreferences`:
* **Custom Sound Mixes:** Names, sound layer combinations, and individual volume ratios of your personalized sleep soundscapes.
* **App Preferences:** Master volume settings, selected sleep timer durations, theme options, and onboarding status.
* **Local Alarms:** Wake-up alarm schedules and sound selections created inside the app.

> [!TIP]
> **Zero Cloud Uploads:** Your custom mixes, alarms, and preferences remain strictly on your physical phone hardware and are **never** transmitted to our servers or any cloud database.

### B. Automated Diagnostics & Performance Data
To monitor app health, prevent audio glitches, and fix crashes across diverse Android devices, we integrate trusted developer SDKs from Google:
* **Google Firebase Crashlytics:** Collects anonymized crash logs, operating system stack traces, and device hardware specifications at the moment of an application crash.
* **Google Firebase Analytics:** Measures aggregated, non-personally identifiable diagnostic events (e.g., app opens, session duration, screen navigation, and broad regional metrics).
* **Google Play In-App Update API:** Queries Google Play Services strictly to check whether a newer version of the app is available for installation.

---

## 2. Android Device Permissions Required

To ensure continuous, uninterrupted audio playback during sleep and meditation, Dozora requests the following Android system permissions:

| Permission | Technical Name | Purpose & Justification |
| :--- | :--- | :--- |
| **Foreground Service (Audio)** | `FOREGROUND_SERVICE` & `FOREGROUND_SERVICE_MEDIA_PLAYBACK` | Allows soothing soundscapes to continue playing seamlessly when your phone screen turns off or while using other applications. |
| **Wake Lock** | `WAKE_LOCK` | Prevents the CPU from going into deep sleep during active audio playback and countdown timer operations. |
| **Post Notifications** | `POST_NOTIFICATIONS` | Displays a lightweight media playback control in your status bar / notification shade and triggers scheduled wake-up alarms. |
| **Exact Alarm Scheduling** | `SCHEDULE_EXACT_ALARM` & `RECEIVE_BOOT_COMPLETED` | Allows you to set precise wake-up alarms and automatically restores active alarms if your device reboots. |
| **Haptic Vibration** | `VIBRATE` | Provides gentle rhythmic haptic feedback during guided breathing exercises and alarm ringing. |
| **Internet Access** | `INTERNET` & `ACCESS_NETWORK_STATE` | Enables Firebase Crashlytics error reporting and verifies Google Play app updates. |

---

## 3. How We Use Collected Data

The non-personally identifiable, automated data collected is used solely for legitimate technical purposes:
* **Core Application Playback:** To play ambient sounds, run sleep timers, guide breathing exercises, and trigger scheduled alarms.
* **Application Stability & Bug Fixing:** To inspect crash reports via Firebase Crashlytics and resolve bugs promptly.
* **App Quality Improvements:** To understand aggregate usage trends via Firebase Analytics and optimize audio performance.

---

## 4. Data Sharing and Third-Party Disclosures

We do **NOT** sell, trade, rent, lease, or share any user data with commercial advertising networks, data brokers, or marketing agencies. Data is shared exclusively with Google infrastructure providers:

* **Google Firebase (Google LLC):** [Firebase Privacy & Security Documentation](https://firebase.google.com/support/privacy)
* **Google Play Services (Google LLC):** [Google Privacy Policy](https://policies.google.com/privacy)

---

## 5. Data Retention & Deletion

* **Local Preferences & Mixes:** All custom saved mixes and app settings are stored on your device. You can erase this data instantly at any time by navigating to your Android device's **Settings > Apps > Dozora > Storage > Clear Data**, or by using the **"Clear Cache"** button inside the app. Uninstalling the app permanently purges all local data.
* **Anonymized Analytics Data:** Diagnostic logs collected by Google Firebase are automatically purged in accordance with Google's standard retention schedules (typically up to 14 months) and cannot be linked to any individual user identity.

---

## 6. Children's Privacy (COPPA Compliance)

Dozora is intended for a general audience seeking sleep aid, relaxation, and mindfulness. The application is not directed at children under the age of 13, and we do not knowingly collect personal information from children. If you believe a child has provided us with any personal information, please contact us immediately, and we will promptly remove it.

---

## 7. Security Measures

Locally stored information is protected by Android's application sandboxing architecture, ensuring no other app can access your Dozora settings. Automated telemetry transmitted to Firebase is strictly encrypted using Transport Layer Security (TLS/HTTPS).

---

## 8. Changes to This Privacy Policy

We may periodically revise this Privacy Policy to reflect app enhancements or legal guidelines. Any updates will be published on this page with a revised "Last Updated" date.

---

## 9. Contact Information

If you have questions, feedback, or inquiries regarding this Privacy Policy:

* **Developer:** NexCode Studio
* **App Name:** Dozora: Better Sleep
* **Package Name:** `com.nexcode.studio.dozora`
* **Official Support Email:** [relaxnightapp@gmail.com](mailto:relaxnightapp@gmail.com)
* **Official Website:** [https://dozora.vercel.app](https://dozora.vercel.app)
