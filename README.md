# Simple Authentication

> **Note:** This project was developed strictly according to the assignment instructions. I intentionally did not prioritize my own preferences and instead followed the requirements as specified.

A minimal authentication app built with Next.js App Router (v15) and TypeScript.  
This project demonstrates a client-side authentication flow using React Context and localStorage, styled with default shadcn/ui components.  
Custom Typography and Box components are included in shadcn format, as these were missing from the original library.

## Features

- **Next.js App Router (v15)**
- **TypeScript**
- **Client-side authentication:** User state managed with React Context
- **Session persistence:** User stored in `localStorage`
- **shadcn/ui basic styling:** Only default styles used, no custom CSS
- **Custom Components:**  
  - `Typography`: Semantic and styled text elements  
  - `Box`: Simple layout container

## Technical Overview

- On login, user info is saved in React Context and `localStorage`
- On reload, authentication state is restored from `localStorage`
- UI uses only basic shadcn/ui styles
- Custom `Typography` and `Box` components for structure and text

## Getting Started

1. **Install dependencies:**
    ```bash
    npm install
    ```

2. **Run the development server:**
    ```bash
    npm run dev
    ```

3. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## Usage

- Login stores user info client-side (Context + localStorage)
- Logout clears user info from both
- Components are styled with shadcn/ui defaults

## License

MIT