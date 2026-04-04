📝 Task Manager ApplicationA robust and scalable task management application built with a focus on Feature-Sliced Design (FSD), Type Safety, and modern frontend standards. This project serves as a demonstration of professional development practices suitable for high-load web applications.🚀 Key Features✅ Task Management: Full CRUD operations for seamless task control.🔍 Advanced Filtering: Efficient state selectors to filter by status and priority.📱 Responsive UI: Developed with Material UI and custom SASS for a fluid experience across all devices.🛠 Robust State Management: Powered by Redux Toolkit with modular slices.⚡ High Performance: Optimized rendering and modular styling using SCSS Modules.🏗 Architecture: Feature-Sliced Design (FSD)The project follows the FSD methodology to ensure high maintainability and scalability. The directory structure is organized into layers:app — Global providers, Redux store configuration, and global styles.pages — Composition of features and entities into full views (e.g., Task List page).features — User-interactive logic (Task filtering, adding new tasks).entities — Business entities (Task items) and their data structures.shared — Reusable UI components (Checkbox) and utility functions.🛠 Tech StackLayerTechnologyCoreReact 18, TypeScript (Strict Mode)State ManagementRedux Toolkit (RTK), React-ReduxStylingSASS / SCSS Modules, Material UI (MUI)TestingJest, React Testing LibraryAPIAxios⚙️ Getting StartedInstallation & LaunchBash# Clone the repository
git clone https://github.com/MaychLi/todo-manager.git

# Install dependencies
npm install

# Start the development server
npm start
Running TestsBashnpm test

