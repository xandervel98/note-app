
# Notes App

A simple web app to manage notes, built with **React** and **Next.js**. It allows users to add, view, and delete notes easily. The app uses **React Context** to manage the global state of the notes and **styled-components** for the visual styling.

---

## Features

- **Add notes** with a title and description.
- **View all notes** on the main page.
- **Delete notes** from the list.
- **View full details** of each note on a separate page.
- **Minimal and elegant design** with a soft color palette and modern fonts.

---

## Technologies Used

- **React** - JavaScript library for building user interfaces.
- **Next.js** - Framework for React applications with server-side rendering and static routing.
- **React Context** - React's API for managing global state.
- **styled-components** - Library for styling React components using CSS-in-JS.
- **Google Fonts** - Web fonts for modern and elegant typography.

---

## Installation

### 1. Clone this repository

```bash
git clone https://github.com/xandervel98/note-app.git
```

### 2. Navigate to the project directory

```bash
cd notes-app
```

### 3. Install dependencies

Make sure you have **Node.js** and **npm** installed on your system. Then run:

```bash
npm install
```

### 4. Run the application

To run the app locally, use the following command:

```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

---

## Project Structure

The project structure is as follows:

```
/note-app
├── /components           # Reusable components
│   ├── NoteForm
        ├── NoteForm.js   # Component to add a new note
│   └── NoteList
        └── NoteList.js   # Component to display the list of notes
├── /context              # Context to manage global state for notes
│   └── NotesContext.js   # Context API for managing the notes state
├── /pages                # Pages for the app
│   ├── /note             # Page for displaying note details
│   │   └── [id].js       # Dynamic page for each note
│   ├── _app.js           # App component that wraps the app with context
│   ├── _document.js      # Custom document for Next.js
│   └── index.js          # Main page showing all notes
├── /styles               # Global CSS files
│   └── globals.css       # Global styles for the app
├── .gitignore            # Specifies which files to ignore in version control
├── jsconfig.json         # Configuration for JavaScript language features
├── next.config.mjs       # Next.js configuration file
├── package-lock.json     # Automatically generated file for npm dependencies
├── package.json          # Project dependencies and scripts
└── README.md             # Documentation for the project

```

---

## Usage

### Add a new note

On the main page, you can add a new note by providing a **title** and a **description**. After clicking the "Add Note" button, the note will be added to the list and displayed on the main page.

### View details of a note

Click on the title of a note on the main page to see its full details. Each note has its own page with a unique identifier.

### Delete a note

On the main page, you can delete a note by clicking the trash icon next to the note you want to remove.

### Go back to the main page

On the note details page, there is a button to go back to the main page where all the notes are displayed.

---

## Contributing

If you would like to contribute to the project, please open a **pull request** with your improvements or fixes. Make sure the tests and documentation are up to date.

---

## License

This project is licensed under the **MIT License**. See the `LICENSE` file for more details.

---

Thank you for using Notes App!
