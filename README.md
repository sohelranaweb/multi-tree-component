# Multi-Level Tree View Component

## Short Description

A recursive multi-level tree view built with Next.js and TypeScript. It supports unlimited nesting, expand/collapse behavior, adding child nodes via modal, and deleting nodes with confirmation. Tree state is managed immutably and persisted using localStorage so data remains after reload.

## Live Site

🔗 [https://multi-tree-component.vercel.app](https://multi-tree-component.vercel.app)

## GitHub Repository

🔗 [https://github.com/sohelranaweb/multi-tree-component.git](https://github.com/sohelranaweb/multi-tree-component.git)

## Technologies Used

- Next.js (Latest)
- React
- TypeScript
- Tailwind CSS
- Local Storage (for state persistence)

## Features

- Unlimited nested tree structure
- Recursive component rendering
- Expand / collapse only when children exist
- Add child node with modal input
- Delete node with confirmation (removes all descendants)
- Persistent state using localStorage
- Clean and reusable component architecture

## Project Setup & Run

### Clone the Repository

```bash
git https://github.com/sohelranaweb/multi-tree-component.git
cd your-repo-name
```

### Install Dependencies

```bash
npm install
```

### Run the Project

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Notes

- Tree data is stored and synced with localStorage
- State updates are handled immutably for deeply nested nodes
- Components are designed to be reusable and easy to extend
