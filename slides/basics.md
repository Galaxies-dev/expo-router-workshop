# Expo Router

![Expo Router](https://miro.medium.com/v2/resize:fit:720/format:webp/1*ocHdXN0Ithn5Xj7QTs_ucA.png)

---
# 👋 I'm Simon

- 🏡 Münster, Germany
- 👩 👧 👦
- 🏢 Techfluencer
- 🏋️ Sports addict

---
# What this workshop is

- Learn how to use the Expo Router
- Excercises
- Write Code

![Instructions](https://glebbahmutov.com/blog/images/how-to-draw-fp-owl/how-to-draw-an-owl.jpg)

---
# What it's not

- A deep dive into React Navigation
- Endless slides

---
# Prerequisites

- Check out GitHub Repository
- Install Dependencies in `src/workshop-app` with `npm install`
- Start Expo with `npx expo`

---
# Schedule

- 🤝 Intro
- 🚀 Expo Router Basics
- 🏗️ Stack, Tabs, Drawer
- 💪 Params & Hooks
- ☕️ Break
- 🔥 Expo Web
- 🌈 Styling
- 🔗 Deep Linking
- 🍝 Lunch
- 🔐 Case Study: Auth
- 🙋‍♂️ Wrap Up

---
# Emoji

- **Cody Cat** 🐱 "Write Code"
- **Betty Beaver** 🦫 "Bonus Tasks"
- **Olivia Owl** 🦉 "Good to know"
- **Lilly Link** 🔗 "Useful docs"
  
---
# Are you ready?

---
# Routing with Expo Router

![Expo Router](https://miro.medium.com/v2/resize:fit:720/format:webp/1*ocHdXN0Ithn5Xj7QTs_ucA.png)

---
# Expo Router Basics
- Every file inside `app` becomes a page
- Layouts (`_layout`) define your page structure
- Create Expo Router apps with the CLI:

`npx create-expo-app myapp -t tabs`

---
# Exercise 1: Stack
- Copy the `1-1/_layout.tsx` to your `app/` folder

![Stack Navigation](https://github.com/Galaxies-dev/expo-router-workshop/blob/main/slides/assets/1-1.png?raw=true)

---
# Exercise 2: Tabs
- Create a `tabs` folder inside `app/`
- Copy the `1-2/_layout.tsx` to your `app/tabs` folder

![Tabs Navigation](https://github.com/Galaxies-dev/expo-router-workshop/blob/main/slides/assets/1-2.png?raw=true)
---
# Exercise 3: Drawer
- Create a `drawer` folder inside `app/`
- Copy the `1-3/_layout.tsx` to your `app/drawer` folder

![Drawer Navigation](https://github.com/Galaxies-dev/expo-router-workshop/blob/main/slides/assets/1-3.png?raw=true)

---
# Exercise 4: Navigation Params
- Copy the `1-4/list.tsx` and `1-4/[id].tsx` to your `app/tabs` folder

![Using Params](https://github.com/Galaxies-dev/expo-router-workshop/blob/main/slides/assets/1-4.png?raw=true)

---
# Exercise 5: Nested Layout & Hooks
- Create a `list` folder inside `app/tabs`
- Copy the `1-5/_layout_.tsx` to your `app/tabs/list` folder

![Details Page](https://github.com/Galaxies-dev/expo-router-workshop/blob/main/slides/assets/1-5.png?raw=true)

---
# Coffee Break

![Coffee break](https://cdn.shopify.com/s/files/1/0435/1216/8606/files/Coffee-is-ready-Coffee-Memes_480x480.jpg?v=1633902188)

---
# Universal Apps with Expo Router

![Expo Router](https://miro.medium.com/v2/resize:fit:720/format:webp/1*ocHdXN0Ithn5Xj7QTs_ucA.png)

---
# Exercise 1: Web Layout
- Copy the `2-1/_layout.tsx` to your `app/drawer` folder

![Web Layout](https://github.com/Galaxies-dev/expo-router-workshop/blob/main/slides/assets/2-1.png?raw=true)

---
# Exercise 2: Platform-specific Extensions
- Copy the `2-2/page.web.tsx.tsx` to your `components/home` folder

![Platform Specific files](https://github.com/Galaxies-dev/expo-router-workshop/blob/main/slides/assets/2-2.png?raw=true)

---
# Alternative Approach

- Solito + Next.js

![Solito](https://github.com/Galaxies-dev/expo-router-workshop/blob/main/slides/assets/solito.png?raw=true)

---
# Exercise 3: CSS
- Copy the `2-3/page.web.tsx` and `2-3/page.css` to your `components/home` folder

![CSS](https://github.com/Galaxies-dev/expo-router-workshop/blob/main/slides/assets/2-3.png?raw=true)

---
# More CSS Styling?

- Nativewind (Tailwind)
- Tamagui

---
# Exercise 4: HTML Head
- Copy the `2-4/+html.tsx` and `2-4/[...unmatched].tsx` to your `app/` folder

![HTML Head](https://github.com/Galaxies-dev/expo-router-workshop/blob/main/slides/assets/2-4.png?raw=true)

---
# Exercise 5: Static Export
- Copy the `2-4/+html.tsx` and `2-4/[...unmatched].tsx` to your `app/` folder

![Static Page](https://github.com/Galaxies-dev/expo-router-workshop/blob/main/slides/assets/2-5.png?raw=true)

---
# Exercise 6: Deep Links

![Android Deep Link](https://github.com/Galaxies-dev/expo-router-workshop/blob/main/slides/assets/2-6.png?raw=true)

---
# Deep Linking

- Android: App Links
- iOS: Universal Links
- Also possible: Apple Handoff


# Lunch Break

![Hungry](https://i.pinimg.com/originals/9a/93/77/9a9377aef09b47f0f9f0a3e722934f8e.gif)

---
# Case Study: Auth

- Login/Register
- Protected Routes (Tabs)


---
# Exercise 1: Login Stack
- Copy the `3-1/_layout_.tsx` to your `app/` folder

![Login UI](https://github.com/Galaxies-dev/expo-router-workshop/blob/main/slides/assets/3-1.png?raw=true)

---
# Exercise 2: Protected Routes
- Copy the `3-2/_layout_.tsx` to your `app/` folder
- Copy the `3-2/(authenticated)).tsx` to your `app/` folder

![Inside UI](https://github.com/Galaxies-dev/expo-router-workshop/blob/main/slides/assets/3-2.png?raw=true)

---
# Exercise 3: Nested Tabs
- Copy the `3-3/_layout_.tsx` to your `app/(authenticated)` folder

![Inside UI](https://github.com/Galaxies-dev/expo-router-workshop/blob/main/slides/assets/3-3.png?raw=true)

---
# Exercise 4: Additional Drawer
- Copy the `3-4/_layout_.tsx` to your `app/(authenticated)` folder

![Drawer UI](https://github.com/Galaxies-dev/expo-router-workshop/blob/main/slides/assets/3-4.png?raw=true)

---
# Wrap Up

- What did you learn?
- Feedback 🙏
- https://galaxies.dev/workshop-feedback

![Feedback](https://github.com/Galaxies-dev/expo-router-workshop/blob/main/slides/assets/feedback.png?raw=true)

