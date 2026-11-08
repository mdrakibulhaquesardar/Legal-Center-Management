---
title: Privacy Policy
lastUpdated: November 8, 2026
---

# Privacy Policy for KhaiGO

Welcome to **KhaiGO** ("we," "our," or "us"), a food-first culinary discovery mobile application developed by **NexCode Studio** (Lead Developer: **Md Rakibul Haque Sardar**). KhaiGO empowers food enthusiasts to discover authentic dishes, explore local food moods, uncover culinary hidden gems, and navigate dining spots primarily in Rajshahi, Bangladesh.

This Privacy Policy explains how our mobile application handles user information in strict accordance with the **Google Play Developer Program Policies**, including Google Play's **Data Safety** requirements and applicable international privacy principles (GDPR, CCPA).

> [!IMPORTANT]
> **Zero Advertisements & Zero Ad Tracking:** KhaiGO is a 100% advertisement-free platform. We do **not** use Google AdMob, Unity Ads, or any third-party ad networks. We never sell, rent, or trade your personal information to data brokers or advertising networks.

> [!NOTE]
> **Non-Trader Status:** KhaiGO is published as a free community and discovery tool. The publisher operates as a **Non-Trader** under European Union (EU) and European Economic Area (EEA) consumer regulations, as the app engages in no commercial sales, digital storefront billing, or paid subscriptions.

---

## 1. Information We Collect

We adhere strictly to the principle of data minimization, collecting only information necessary to deliver authentic dish recommendations, calculate proximity to dining spots, and maintain app reliability.

| Data Category | Specific Data Types | Collection Method | Primary Purpose | Shared with Third Parties? |
| :--- | :--- | :--- | :--- | :--- |
| **Location Data** | Approximate & Precise Location (`ACCESS_COARSE_LOCATION`, `ACCESS_FINE_LOCATION`) | Foreground GPS / Network sensor | Calculating distance (km) to restaurants and sorting nearby dishes | **No** (Processed in real-time, never sold) |
| **Personal Information** | Name, Email address, Phone number, Profile avatar | User input during registration | Account management, profile personalization, and review attribution via Supabase | **No** (Stored securely in private cloud) |
| **User Generated Content** | Dish reviews, food ratings, uploaded food photographs | User submitted reviews | Displaying community reviews and dish recommendations | Stored publicly within the app community |
| **Device & App Identifiers** | Firebase Cloud Messaging (FCM) registration token | Automated background handshake | Delivering daily food craving recommendations and new restaurant alerts | Shared only with Google Firebase |
| **Diagnostics & Performance** | Crash logs, ANRs (Application Not Responding), device model, OS version | Automated SDK collection | Detecting application bugs and resolving performance issues | Shared only with Firebase Crashlytics |
| **Local Storage (On-Device)** | Bookmarked dishes, recent search queries, review drafts | On-device SQLite / Shared Preferences | Fast offline access, responsive local browsing | **No** (Never leaves your device) |

---

## 2. Precise Geolocation and Location Permissions

KhaiGO requests access to your device's geolocation to answer the central question: *"What delicious food is near me right now?"*

1. **Foreground-Only Access:** Geolocation permissions are requested and utilized **strictly while the app is active and visible on your screen**.
2. **No Background Tracking:** KhaiGO **never** accesses, monitors, or collects your GPS coordinates when the application is minimized, closed, or running in the background.
3. **Optional / Privacy Preserved:** Granting location permission is completely optional. If you decline location access, you can still explore all dishes and restaurants by manually selecting a neighborhood (such as Shaheb Bazar, Kazla, Motihar, or Rajpara).

---

## 3. How We Use Collected Information

We process user data solely for legitimate and functional purposes:

* **Dish & Restaurant Discovery:** Calculating real-time distance and driving/walking time to local dining spots.
* **Community & Culinary Reviews:** Enabling authenticated foodies to post genuine reviews, ratings, and food photos.
* **Smart Notifications:** Sending curated food suggestions, weekly trending spots, and app updates through Firebase Cloud Messaging.
* **App Stability & Maintenance:** Analyzing anonymous crash reports via Firebase Crashlytics to resolve crashes and maintain a smooth 60 FPS user experience.
* **Play Store Version Updates:** Utilizing Google Play In-App Update API to prompt users when major feature updates are published.

---

## 4. Third-Party Infrastructure & Service Providers

To ensure enterprise-grade security and reliability, KhaiGO utilizes standard, audited infrastructure providers that comply with SOC 2, ISO 27001, and GDPR:

1. **Supabase Inc.**
   * **Role:** Backend database (PostgreSQL with Row Level Security), user authentication, and encrypted image storage.
   * **Privacy Policy:** [https://supabase.com/privacy](https://supabase.com/privacy)
2. **Google Firebase (Google LLC)**
   * **Role:** Firebase Cloud Messaging (FCM) for push notifications and Firebase Crashlytics for crash logging.
   * **Privacy Policy:** [https://policies.google.com/privacy](https://policies.google.com/privacy)
3. **Google Play Services (Google LLC)**
   * **Role:** App distribution, license verification, and seamless in-app version updates.
   * **Privacy Policy:** [https://policies.google.com/privacy](https://policies.google.com/privacy)

---

## 5. Data Security & Storage Standards

We employ robust technical and organizational security measures to protect your information:

* **Encryption in Transit:** All communications between your mobile device and backend servers (Supabase and Firebase) are enforced with **Transport Layer Security (TLS 1.3 / HTTPS)**.
* **Row-Level Security (RLS):** Database records in Supabase are isolated using granular Row Level Security policies, ensuring only authorized account holders can modify their own profile data.
* **Encrypted On-Device Storage:** Local search history and cached bookmarks are maintained locally using protected application sandboxing.

---

## 6. Account & Data Deletion (Google Play Compliance)

In full compliance with Google Play's **Account Deletion Policy**, users have complete, unconditional control over their accounts and stored data.

### Option A: Instant In-App Deletion
You can permanently delete your KhaiGO account directly within the mobile application:
1. Open **KhaiGO** on your Android device.
2. Tap the **Profile** tab in the bottom navigation.
3. Tap the **Settings** gear icon in the top right corner.
4. Scroll to the **Account Management** section and tap **"Delete Account"**.
5. Confirm the deletion prompt. Your account credentials, profile, bookmarks, and reviews will be immediately and irreversibly purged from our live database.

### Option B: Web / Email Deletion Request
If you have uninstalled the app or cannot access your mobile device, you can submit a remote data deletion request:
* **Email:** [rakibul.nexcode@gmail.com](mailto:rakibul.nexcode@gmail.com)
* **Subject:** `KhaiGO Account Deletion Request`
* **Details Required:** Please provide the registered email address or phone number associated with your account.
* **Turnaround:** All server records, authentication tokens, and user submissions will be permanently expunged within **14 business days**.

---

## 7. Children's Privacy

KhaiGO is designed for a general audience of food lovers and does not knowingly collect personally identifiable information from children under 13 years of age. If you believe that a minor has provided us with personal information without parental consent, please contact us at [rakibul.nexcode@gmail.com](mailto:rakibul.nexcode@gmail.com), and we will promptly remove the records.

---

## 8. Updates to This Privacy Policy

We may periodically revise this Privacy Policy to reflect app enhancements or legal requirements. Material updates will be highlighted within the app or posted on this permanent URL with an updated effective date.

---

## 9. Contact Us

If you have questions, feedback, or inquiries regarding this Privacy Policy:

* **Developer:** NexCode Studio
* **Lead Developer:** Md Rakibul Haque Sardar
* **Official Support Email:** [rakibul.nexcode@gmail.com](mailto:rakibul.nexcode@gmail.com)
* **App Website:** [https://brilliant-otter-bc6f46.netlify.app](https://brilliant-otter-bc6f46.netlify.app)
* **Open Source Repository:** [https://github.com/mdrakibulhaquesardar/khai_go](https://github.com/mdrakibulhaquesardar/khai_go)
* **Headquarters:** Rajshahi, Bangladesh

