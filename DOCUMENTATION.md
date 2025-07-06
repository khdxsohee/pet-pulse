# 📚 Project Documentation: Pet Pulse - Adoption Website (Multi-Theme UI)

[![Documentation Status](https://img.shields.io/badge/Documentation-Complete-brightgreen?style=for-the-badge&logo=readthedocs)](https://github.com/khdxsohee/pet-pulse/blob/main/DOCUMENTATION.md)
[![Project Version](https://img.shields.io/badge/Version-1.0.0-blue?style=for-the-badge)](https://github.com/khdxsohee/pet-pulse/releases)
[![Build Status](https://img.shields.io/badge/Build-Passing-green?style=for-the-badge&logo=github-actions)](https://github.com/khdxsohee/pet-pulse/actions)
[![Code Style: Prettier](https://img.shields.io/badge/code%20style-prettier-ff69b4.svg?style=for-the-badge&logo=prettier)](https://prettier.io/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Total Lines of Code](https://img.shields.io/tokei/lines/github/khdxsohee/pet-pulse?style=for-the-badge&label=Total%20Lines&color=informational)](https://github.com/khdxsohee/pet-pulse)
[![Dependabot Status](https://img.shields.io/badge/Dependabot-Enabled-success?style=for-the-badge&logo=dependabot)](https://github.com/khdxsohee/pet-pulse/security/dependabot)

<br>

## 📄 Table of Contents

1.  [Introduction](#1-introduction)
2.  [Project Overview](#2-project-overview)
    * [Purpose and Goals](#21-purpose-and-goals)
    * [Key Features](#22-key-features)
3.  [Technology Stack](#3-technology-stack)
    * [Core Technologies](#31-core-technologies)
    * [Libraries and External Resources](#32-libraries-and-external-resources)
4.  [Setup and Installation](#4-setup-and-installation)
    * [Prerequisites](#41-prerequisites)
    * [Local Development Setup](#42-local-development-setup)
5.  [Code Structure and Architecture](#5-code-structure-and-architecture)
    * [File Structure](#51-file-structure)
    * [HTML (`index.html`)](#52-html-indexhtml)
    * [CSS (`style.css`)](#53-css-stylecss)
    * [JavaScript (`script.js`)](#54-javascript-scriptjs)
6.  [Multi-Theme UI Implementation](#6-multi-theme-ui-implementation)
    * [CSS Variables](#61-css-variables)
    * [JavaScript Logic](#62-javascript-logic)
7.  [Styling Guidelines (CSS)](#7-styling-guidelines-css)
    * [Naming Conventions](#71-naming-conventions)
    * [Responsive Design Approach](#72-responsive-design-approach)
8.  [JavaScript Best Practices](#8-javascript-best-practices)
    * [DOM Manipulation](#81-dom-manipulation)
    * [Event Handling](#82-event-handling)
    * [Local Storage Usage](#83-local-storage-usage)
9.  [Future Enhancements / Roadmap](#9-future-enhancements--roadmap)
10. [Troubleshooting](#10-troubleshooting)
11. [Contributing Guidelines](#11-contributing-guidelines)
12. [License](#12-license)
13. [Contact](#13-contact)

<br>

---

## 1. Introduction

This document provides in-depth technical documentation for the **Pet Pulse - Adoption Website (Multi-Theme UI)** front-end project. It serves as a comprehensive guide for developers, detailing the project's architecture, implementation specifics, setup instructions, and best practices.

## 2. Project Overview

### 2.1 Purpose and Goals

The primary purpose of this project is to create a user-friendly and visually appealing web interface for a pet adoption platform. Key goals include:
* **Facilitating Pet Adoption:** Providing a clear and engaging pathway for users to learn about and potentially adopt pets.
* **Modern User Experience:** Implementing a clean, intuitive, and responsive design that works seamlessly across various devices.
* **Customization:** Offering multi-theme UI options to enhance user personalization and accessibility.
* **Maintainability:** Writing clean, modular, and well-documented code for easy future enhancements and debugging.

### 2.2 Key Features

* **Responsive Layout:** Adapts dynamically to different screen sizes (mobile, tablet, desktop).
* **Dynamic Multi-Theme UI:** Allows users to switch between a predefined set of color themes (Dark, Light, Red, Green, Yellow, Pink, Chocolate).
* **Persistent Theme Preference:** Utilizes Local Storage to remember the user's last selected theme.
* **Interactive Navigation:** Clear header navigation with calls to action.
* **Informative Sections:** Dedicated sections for "About Us," "How It Works," "Featured Pets," and "Testimonials."
* **Call to Action (CTA):** Prominent sections for donations and further inquiries.
* **Semantic HTML5 Structure:** Ensures accessibility and good SEO practices.
* **Modular CSS Styling:** Uses CSS variables for efficient theme management.

## 3. Technology Stack

### 3.1 Core Technologies

* **HTML5:** The foundation for structuring the web content. Adheres to semantic HTML principles for better readability and accessibility.
* **CSS3:** Responsible for all styling and visual presentation. Employs modern CSS features including:
    * **CSS Variables (Custom Properties):** Centralized theme management for dynamic color switching.
    * **Flexbox & Grid:** For robust and efficient layout management across different screen sizes.
    * **Transitions:** For smooth visual effects during theme changes and interactive elements.
    * **Media Queries:** For responsive adjustments.
* **JavaScript (Vanilla JS):** Handles all interactive elements and dynamic functionalities, most notably the multi-theme toggling and persistence. No external frameworks or libraries are used for core logic.

### 3.2 Libraries and External Resources

* **Font Awesome:** Used for scalable vector icons throughout the website (e.g., theme toggle icon, social media icons). Integrated via a CDN link.
* **Google Fonts (Roboto):** A highly readable and versatile sans-serif typeface used for consistent typography. Integrated via a CDN link.

## 4. Setup and Installation

This project is a static front-end application. No backend server, database, or complex build tools are required.

### 4.1 Prerequisites

* A modern web browser (e.g., Google Chrome, Mozilla Firefox, Microsoft Edge, Safari) for rendering the website.
* A code editor (e.g., VS Code, Sublime Text) for viewing and modifying the source code.
* Git (optional, but recommended for cloning the repository and version control).

### 4.2 Local Development Setup

To get a local copy up and running, follow these simple steps:

1.  **Clone the repository:**
    Open your terminal or command prompt and run:
    ```bash
    git clone [https://github.com/khdxsohee/pet-pulse.git](https://github.com/khdxsohee/pet-pulse.git)
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd pet-pulse
    ```
3.  **Open `index.html`:**
    Simply double-click the `index.html` file in your file explorer. Your default web browser will open the website.
    Alternatively, you can open it directly from your browser by typing the file path, e.g., `file:///path/to/your/pet-pulse/index.html`.

## 5. Code Structure and Architecture

The project follows a standard, clean front-end architecture, separating concerns into distinct files.

### 5.1 File Structure

pet-pulse/
- ├── index.html        # Main HTML file for the website structure.
- ├── style.css         # Contains all CSS rules, including theme definitions and responsive styles.
- ├── script.js         # Houses all JavaScript logic for interactivity.
- ├── assets/           # (Optional) Directory for static assets.
- │   ├── images/       # Stores all image files used in the project (e.g., hero, section images).
- │   │   └── hero-dog.jpg
- │   │   └── about-dog.jpg
- │   │   └── pet1.jpg
- │   │   └── ...
- │   └── fonts/        # (Optional) For custom font files if not using CDN.
- ├── README.md         # General project overview, features, and quick setup guide.
- └── DOCUMENTATION.md  # This detailed technical documentation file.
- └── LICENSE           # Project's licensing information (e.g., MIT).


### 5.2 HTML (`index.html`)

* **Semantic HTML5:** Uses appropriate HTML5 tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, etc.) for better structure, accessibility, and SEO.
* **External Resource Linking:** Links to `style.css` in the `<head>` and `script.js` just before the closing `</body>` tag for optimal loading performance.
* **Font Awesome & Google Fonts:** CDNs are used for external libraries.
* **Theme Toggle Button:** A dedicated `<button id="theme-selector" class="theme-selector-btn">` is present in the header for theme switching.

### 5.3 CSS (`style.css`)

* **CSS Variables (`:root` and `body.[theme-class]`):** This is the core of the multi-theme system.
    * A default set of variables is defined directly on `body` (or `:root`) which serves as a fallback.
    * Specific theme classes (e.g., `body.dark-theme`, `body.light-theme`, `body.red-theme`) redefine these variables to apply different color schemes.
    * All UI components (text, backgrounds, borders, shadows) consume these variables, allowing a single change in the theme class to cascade visual updates across the entire site.
* **Modular Styling:** Styles are organized into logical sections (e.g., `Header Styling`, `Hero Section`, `About Us Section`).
* **Responsive Breakpoints:** Uses media queries (`@media`) to adjust layouts and element sizes for various screen dimensions (e.g., `max-width: 992px`, `max-width: 768px`, `max-width: 576px`).
* **Transitions:** `transition` properties are applied to color and background properties on the `body` and individual elements to ensure smooth visual changes during theme transitions and hover effects.

### 5.4 JavaScript (`script.js`)

* **`DOMContentLoaded` Listener:** Ensures the script runs only after the entire HTML document is fully loaded and parsed, preventing errors from attempting to access non-existent DOM elements.
* **DOM Element Selection:** Uses `document.getElementById()` for efficient selection of key elements like the theme toggle button and the `body` element.
* **Theme Array:** A `const themes` array holds all available theme class names, defining the order of theme cycling.
* **`applyTheme(themeName)` Function:** A central function responsible for:
    * Removing all existing theme classes from the `body`.
    * Adding the specified `themeName` class to the `body`.
    * Storing the `themeName` in `localStorage` for persistence.
* **Local Storage Integration:**
    * On initial page load, it checks `localStorage.getItem('theme')` to retrieve the user's previously chosen theme.
    * If a valid saved theme is found, it's applied immediately.
    * If no theme is saved or the saved theme is invalid, `dark-theme` is applied as the default.
    * After each theme toggle, `localStorage.setItem('theme', themeName)` updates the saved preference.
* **Event Listener:** An `addEventListener` on the theme toggle button triggers the theme cycling logic on click.
* **Theme Cycling Logic:**
    * `currentThemeIndex` is used to track the active theme within the `themes` array.
    * The modulo operator (`% themes.length`) ensures that the index wraps around to the beginning of the array after the last theme is reached, creating a continuous cycle.

## 6. Multi-Theme UI Implementation

The multi-theme functionality is a core aspect of this project, primarily implemented through a combination of CSS Variables and JavaScript.

### 6.1 CSS Variables

Each theme is defined as a CSS class applied to the `<body>` element. Within these classes, a set of custom CSS properties (variables) are redefined to specific color values for that theme.

**Example `style.css` Snippet:**

```css
/* Base variables (default to dark theme if no class is applied) */
body {
    --primary-text-color: #fff;
    --secondary-text-color: #cccccc;
    --background-color: #0d0d0d;
    /* ... other default variables */
    transition: background-color 0.3s ease, color 0.3s ease; /* Smooth transition */
}

/* Light Theme Definition */
body.light-theme {
    --primary-text-color: #333;
    --secondary-text-color: #777;
    --background-color: #fff;
    /* ... other light theme variables */
}

/* Red Theme Definition */
body.red-theme {
    --primary-text-color: #fff;
    --secondary-text-color: #ffe0e0;
    --background-color: #8B0000; /* Dark Red */
    /* ... other red theme variables */
}
UI components across the HTML then reference these variables using var(--variable-name), ensuring that their colors automatically update when the <body> class changes.

6.2 JavaScript Logic
The script.js manages the theme switching:

It maintains an array of all available theme class names.

On button click, it iterates through this array.

It removes any existing theme class from the <body> and adds the new one.

The selected theme is saved to localStorage for persistence across sessions.

7. Styling Guidelines (CSS)
7.1 Naming Conventions
BEM (Block-Element-Modifier): Although not strictly BEM for every single class, the naming tends towards modularity (e.g., header-actions, theme-selector-btn).

Semantic Class Names: Class names are chosen to reflect the purpose or content of the element rather than its visual styling (e.g., hero-section, about-content).

CSS Variables: Variables are prefixed with -- and are descriptive (e.g., --primary-text-color, --background-color).

7.2 Responsive Design Approach
Mobile-First (Implicit): While not strictly a mobile-first approach from scratch, the media queries are designed to progressively enhance the layout for larger screens.

Fluid Layouts: Uses percentages, flex-grow, flex-shrink, and minmax() for fluid layouts that adapt to viewport width.

Media Query Breakpoints:

@media (max-width: 992px): Adjustments for larger tablets and smaller desktops.

@media (max-width: 768px): Adjustments for standard tablets.

@media (max-width: 576px): Adjustments for mobile devices.

8. JavaScript Best Practices
8.1 DOM Manipulation
Efficient Selection: document.getElementById() is used for single, unique elements where an ID is appropriate.

No Inline JavaScript: All JavaScript logic is kept separate in script.js to ensure clean HTML.

8.2 Event Handling
addEventListener: Used for attaching event handlers, which is the modern and preferred method. This allows multiple handlers for the same event on the same element without overwriting.

8.3 Local Storage Usage
Persistence: localStorage is used for non-sensitive data persistence (user theme preference) that needs to survive browser sessions.

Graceful Degradation: The code checks if a savedTheme exists and is valid, providing a fallback to the default theme if not, ensuring robustness.

9. Future Enhancements / Roadmap
Potential future features and improvements for the Pet Pulse website include:

Animations: More sophisticated CSS animations or JavaScript-driven animations for a richer UI.

Dynamic Content Loading: Fetching pet data from an API instead of static HTML.

Filtering/Sorting: Adding options to filter pets by type, age, breed, etc.

Search Functionality: Implementing a search bar for finding specific pets.

Backend Integration: Connecting to a real backend for managing pet listings, user accounts, and adoption applications.

Contact Form: Implementing a functional contact form.

Accessibility Improvements: Further enhancing ARIA attributes and keyboard navigation.

Unit/Integration Tests: Adding automated tests for JavaScript logic.

Build Process: Integrating a build system (e.g., Webpack, Vite) for minification, bundling, and more advanced asset management.

10. Troubleshooting
Theme Not Changing:

Ensure script.js is linked correctly at the end of <body> in index.html.

Check your browser's developer console for any JavaScript errors.

Verify that the id="theme-selector" and class="theme-selector-btn" are correctly applied to your button in index.html.

Confirm that the theme class names in script.js (themes array) exactly match the class names defined in style.css.

Styles Not Applying:

Ensure style.css is linked correctly in the <head> of index.html.

Check for CSS syntax errors in style.css.

Use browser developer tools to inspect elements and see which CSS rules are being applied (or overridden).

Verify that CSS variable names (--variable-name) are consistent across your theme definitions and their usage.

Images Not Loading:

Confirm that the assets/images/ path in your <img> tags in index.html and background-image properties in style.css are correct relative to the HTML and CSS files, respectively.

Ensure the image files actually exist in the specified assets/images directory.

11. Contributing Guidelines
We encourage contributions to improve the Pet Pulse project! Please refer to the README.md's Contributing section for detailed steps on how to contribute.

12. License
This project is open-source and licensed under the MIT License. For the full license text, please see the LICENSE file in the repository's root.

13. Contact
For any inquiries, suggestions, or feedback regarding this project, please feel free to reach out:

GitHub: @khdxsohee


© 2025 khdxsohee. All Rights Reserved.
