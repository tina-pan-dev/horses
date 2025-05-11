# 🐎 Horse Tracker App

A full-stack proof-of-concept app for displaying horse data, built with React (Vite) on the front end and a .NET REST API on the back end.

## 🎯 Project Focus

This project was completed as part of a technical test under a 2-hour time constraint. The goal was not to build a fully featured app, but to demonstrate:

- A functional full-stack architecture
- Clean, testable React code
- Clear structure and scalability
- Attention to realistic engineering priorities (time, constraints, scope)

## 💡 Assumptions Made

- A full implementation of all 5 tasks wasn't expected (per the brief), so I focused on **Tasks 1 and 2**: listing horses and showing details
- I assumed:
  - Styling should be clean but minimal — design skills weren’t being assessed
  - The API is unauthenticated and reliably available at `localhost:3016`
- I treated this as a real-world feature: **prioritising stable infrastructure and test coverage** over speculative feature work

## 🔨 Tech Stack

### Frontend
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Query (TanStack)](https://tanstack.com/query/v4)
- [Vitest](https://vitest.dev/)
- [Testing Library](https://testing-library.com/)

### Backend
- .NET REST API running on `localhost:3016`

## 🧪 Testing

- `Horse.test.tsx` covers interaction and conditional rendering
- `App.test.tsx` covers full app including provider mocks
- Mocked data and hooks ensure UI can be tested independently of API

## 🗂 File Structure

```
app/
├── src/
│   ├── App.tsx
│   ├── hooks/
│   │   └── useHorses.ts
│   ├── test/
│   │   ├── App.test.tsx
│   │   └── Horse.test.tsx
│   └── ...
├── vite.config.ts
└── package.json
```

## 🚀 Getting Started

### 1. Install frontend dependencies

```bash
cd app
npm install
```

### 2. Run the frontend

```bash
npm run dev
```

### 3. Run frontend tests

```bash
npm run test
```

### 4. Start the backend API

Follow the API setup instructions in the technical test doc:
- Build with Docker:  
  ```bash
  docker build -t horse_api .
  ```
- Run the API:
  ```bash
  docker run -p 3016:3016 horse_api
  ```

---

## 🗺 Roadmap

- Wire up form fields and submit functionality for adding/editing horses
- Pagination
- Design and implement horse comparison screen
- Form validation + error handling
- Data persistence

---

Made with 🐎 by Tina Pan
