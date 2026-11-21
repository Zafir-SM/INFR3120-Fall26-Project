# FindIt — Campus Lost & Found Web Application

**INFR 3120 — Web & Script Programming | Project Part 1 (First Release)**

FindIt is an web application that allows campus students to create, view, edit, and delete lost and found item reports.

## Team Members
* **Muhammad Zafir Sheikh** (`Zafir-SM`)
* **Soban Ajmal** (`msobanajmal-cmd`)
* **M. Taaha Mahmood** (`MuhammadTaahaMahmood-19`)

## Features (First Release)
* **Landing Page & Branding:** Custom team logo, responsive Bootstrap navbar, and hero call-to-action button (`Report Lost or Found Item`).
* **Full CRUD Functionality:**
  * **Create (`/report`):** Submit new lost or found item reports with HTML5 form validation.
  * **Read (`/dashboard`):** View all active campus reports in a responsive table with status pills (`Lost` / `Found`).
  * **Update (`/edit/:id`):** Pre-fill and edit existing item details or update an item's status.
  * **Delete (`/delete/:id`):** Remove resolved or outdated listings with confirmation feedback banners.

## Citations & External Libraries
* **Bootstrap 5:** Used for responsive grid layout, navigation bar, cards, tables, forms, buttons, and alert components.
  * Source: [Bootstrap Documentation (v5.3)](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
* **Express.js & EJS:** Used for application routing and server-side view rendering.
  * Source: [Express.js Documentation](https://expressjs.com/) | [EJS Documentation](https://ejs.co/)
