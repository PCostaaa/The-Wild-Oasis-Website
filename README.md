# 🏔️ The Wild Oasis — Guest Website

Customer-facing website for The Wild Oasis hotel, where guests can browse luxury cabins, book their stay and manage their reservations.
Built with Next.js (App Router) as part of Jonas Schmedtmann's *Ultimate React Course* (Udemy).

**Live demo:** [the-wild-oasis-website-2zug.vercel.app](https://the-wild-oasis-website-2zug.vercel.app) · **Admin dashboard:** [the-wild-oasis](https://github.com/PCostaaa/the-wild-oasis)

## 📸 Screenshots

![Homepage](./screenshots/home.png)
![Cabins list with capacity filter](./screenshots/cabins.png)
![Booking a cabin with the date range picker](./screenshots/reservation.png)
![Guest area with reservations](./screenshots/my-reservations.png)

## 🚀 Features

- **Cabins** – browse all cabins and filter by capacity
- **Cabin details** – description, capacity, pricing and discounts
- **Reservations** – pick dates in a range calendar (booked dates are blocked), choose guests and add breakfast
- **Google login** – authentication with NextAuth
- **Guest area** – update profile (nationality and ID), view, edit and cancel reservations
- **Server-side rendering** – Server Components and Server Actions, with data from Supabase

## 🧰 Tech stack

Next.js 14 (App Router) · React · NextAuth · Supabase · Tailwind CSS · react-day-picker · date-fns · Heroicons

## ⚙️ Getting started

```bash
npm install
npm run dev
```

Requires Supabase and Google OAuth credentials in a `.env.local` file.

## 👤 Author

**Pedro Costa** – Web Developer
[Portfolio](https://pcostaaa.github.io/Portfolio/) · [LinkedIn](https://www.linkedin.com/in/pedroabcosta/) · [Behance](https://www.behance.net/pedrocosta262)
