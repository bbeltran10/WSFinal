# Book Tracker Website

## Site Description

Book Tracker is a simple and interactive web application designed to help users organize and manage their reading habits. Users can add books, track their reading progress, and filter books based on their current status. The application is built using HTML, CSS, and JavaScript, with a focus on usability, responsiveness, and clean design.

The site features a structured layout with a form for adding books, filter buttons for sorting by reading status, and a dynamically updated book list. All data is stored locally using the browser’s `localStorage`, allowing users to retain their book list even after refreshing or closing the browser.

---

## Pages

1. Home (index.html)

   * Main interface for the Book Tracker app
   * Includes a form to add new books (title, author, status)
   * Displays a list of books with their details
   * Provides filter buttons to view books by status (All, To Read, Reading, Finished)

---

## Key Features

* Add Books Users can input a book title, author, and reading status
* Update Status Cycle through reading stages (To Read → Reading → Finished)
* Delete Books Remove books from the list instantly
* Filtering View books based on their reading status
* Persistent Storage Uses `localStorage` to save data across sessions
* Responsive Design Works on both desktop and mobile devices

---

## Technical Details

* Books are stored as objects with unique IDs (generated using timestamps)
* JavaScript handles all DOM manipulation and dynamic rendering
* CSS provides a clean, modern layout with responsive behavior
* Status-based styling visually distinguishes reading progress

---

<img width="1920" height="1241" alt="image" src="https://github.com/user-attachments/assets/0ba09347-29c9-4f50-9c42-420d10ceaecb" />


---

This project demonstrates how core web development skills—HTML structure, CSS styling, and JavaScript interactivity—can be combined to create a practical, user-friendly application.
