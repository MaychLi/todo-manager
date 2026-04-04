  A robust and scalable task management application built with a focus on Feature-Sliced Design Architecture, Type Safety, and modern frontend standards. This project serves as a demonstration of professional development practices suitable for high-load web applications.
 
  Key Features:
Task Management: Full CRUD operations for tasks.

Advanced Filtering: Filter tasks by status and priority using efficient state selectors.

Responsive UI: Developed with Material UI and custom SASS for a seamless experience across devices.

Robust State Management: Powered by Redux Toolkit with modular slices.

High Performance: Optimized rendering and modular styling using SCSS Modules.

  Architecture: Feature-Sliced Design (FSD)
The project follows the Feature-Sliced Design methodology to ensure high maintainability and scalability.
The directory structure is organized into layers:

app: Global providers, Redux store configuration, and global styles.

pages: Composition of features and entities into full views (e.g., Task List page).

features: User-interactive logic (Task filtering, adding new tasks).

entities: Business entities (Task items) and their data structures.

shared: Reusable UI components (Checkbox) and utility functions.

   Tech Stack:
Core: React 18 & TypeScript (Strict Mode).

State Management: Redux Toolkit (RTK) & React-Redux.

Styling: SASS / SCSS Modules & Material UI (MUI).

Testing: Jest & React Testing Library.

API: Axios for asynchronous actions.

  For Running on desktop: 
  git clone https://github.com/MaychLi/todo-manager.git **
  npm install **
  npm start** 

  For tunning tests: npm test
