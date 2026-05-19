# **RecipesOnFire — Web Engineering Semester Project**

A full-featured Food Recipe Website built with **HTML, CSS, Bootstrap 5, JavaScript, and PHP + MySQL (XAMPP)**.

---

## 📁 Project File Structure

```ini
RecipeOnFire/
├── index.html              ← Homepage (hero, featured recipes, footer)
├── recipes.html            ← All Recipes page (search, filter, modal)
├── login.html              ← Login form
├── signup.html             ← Signup form
├── profile.html            ← User profile & favourites
├── login_success.html      ← Bridge: PHP → localStorage after login
├── logout_success.html     ← Bridge: clears localStorage after logout
├── style.css               ← All styles (orange accent #ff5722 + dark navbar)
├── recipes-data.js         ← JSON array of 12 recipe objects (add recipes here!)
├── script.js               ← Homepage JavaScript
├── recipes.js              ← Recipes page JavaScript (API search, modal, filter)
├── Images/
│   └── bg.jpg              ← Hero background image
└── php/
    ├── db.php              ← Database connection (PDO)
    ├── setup.php           ← Run ONCE to create DB + tables
    ├── signup.php          ← Handles registration form
    ├── login.php           ← Handles login form
    ├── logout.php          ← Destroys session
    ├── toggle_favourite.php← Add/remove a favourite recipe (AJAX)
    └── get_favourites.php  ← Returns user's favourite IDs as JSON
```

---

## **How to Run (Step-by-Step)**

### 1. Start XAMPP

- Open **XAMPP Control Panel**
- Start **Apache** and **MySQL**

### 2. Copy Project to XAMPP

- Copy the entire `RecipeOnFire` folder to: `C:\xampp\htdocs\RecipeOnFire`

### 3. Create the Database (Run ONCE)

Open your browser and go to:

```sh
http://localhost/RecipeOnFire/php/setup.php
```

You should see green ✅ messages confirming the database and tables were created.

### 4. Open the Website

```sh
http://localhost/RecipeOnFire/index.html
```

---

## **Database Schema**

**Database name:** `recipeonfire`

| Table | Columns |
|-------|---------|
| `users` | `id`, `username`, `email`, `password` (hashed), `created_at` |
| `favourites` | `id`, `user_id`, `recipe_id`, `created_at` |

---

## **Features**

| Feature | How It Works |
|---------|-------------|
| Recipe Cards | JS reads `recipes` array in `recipes-data.js` and builds Bootstrap cards |
| Recipe Modal | Click any card → Bootstrap modal shows full ingredients + steps |
| Search (Local) | Filters the 12 local recipes by name/category in real-time |
| Search (API) | Searches TheMealDB API — shows live results as extra cards |
| Category Filter | Filter buttons for Italian, Indian, Pakistani, American, etc. |
| Sort | Sort by name, quickest, or easiest difficulty |
| Signup / Login | PHP validates + stores users in MySQL with hashed passwords |
| Favourites ❤️ | Heart button on each card — only works when logged in |
| Profile Page | Shows all your saved favourite recipes |
| Responsive | Bootstrap grid — works on mobile, tablet, desktop |

---

## **➕ How to Add a New Recipe**

Open `recipes-data.js` and add a new object to the `recipes` array:

```javascript
{
    id: 13,                              // unique number
    name: "My New Recipe",
    category: "Italian",                 // used for filter buttons
    time: "20 mins",
    difficulty: "Easy",                  // Easy / Medium / Hard
    image: "https://link-to-image.jpg",  // use TheMealDB or any URL
    description: "Short description...",
    ingredients: ["Item 1", "Item 2"],
    steps: ["Step 1", "Step 2"]
}
```

Save the file → the card appears automatically on the page! ✅

---

## **🔑 Default XAMPP Credentials (db.php)**

```yaml
Host:     localhost
Username: root
Password: (empty)
Database: recipeonfire
```

If your XAMPP has a password, edit `php/db.php` and set `$password`.

---

## **🌐 API Used**

**TheMealDB** — Free, no API key needed  
`https://www.themealdb.com/api/json/v1/1/search.php?s=QUERY`

---

## **🎨 Color Scheme**

| Color | Value | Used For |
|-------|-------|---------|
| Orange Accent | `#ff5722` | Buttons, badges, links, icons |
| Dark Navbar | `#212529` | Navigation bar |
| Dark Footer | `#1a1a2e` | Footer background |
| Light Body | `#f8f9fa` | Page background |

---

*Made for Web Engineering Semester Project — RecipesOnFire*
