### Project Ignition: Igniting Group Projects

**Purpose**: Build a simple-to-pickup task management app with team collaboration, task tracking, and integrations (Google Calendar, Trello).
**Notice**: This project is being made for learning and education purposes by getting hands-on experience with modern web dev technologies.

---

### **Key Features**:

- **User Authentication** → JWT, NextAuth.js
- **Task Management**:
  - Create tasks, assign deadlines, set priorities
  - Task tracking (To-Do, In Progress, Completed)
- **Kanban Boards** → Drag-and-Drop
- **Team Collaboration** → Comments, Task Assignment, Notifications
- **Dashboard** → Task stats, deadlines, team performance
- **Google Calendar Integration** → Sync tasks with deadlines

---

### **Tech Stack**:

- **Frontend**:
  - **React** → Core app functionality with Typescript
  - **Next.js** → SSR, routing, static generation
  - **Radix UI** → Accessible UI components
  - **Shadcn** → Styling the dashboard
  - **TailwindCSS** → Utility-first styling
  - **Chart.js/D3.js** → Data visualization
  - **React Flow** → Node-based editor
- **Backend**:
  - **Node.js (Express/Fastify)** → API server
  - **MongoDB** → Task & user data storage
  - **JWT** → Authentication
- **Integrations**:
  - **Google Calendar API** → Sync tasks with calendars
- **Deployment**:
  - **Vercel** → Hosting
  - **MongoDB Atlas** → Database hosting

---

### **Project Breakdown**:

- **Authentication** → JWT, NextAuth.js for secure login/signup
- **Task Management** → Create tasks, track status, Kanban board (drag-and-drop)
- **Google Calendar Sync** → OAuth2, Google Calendar API
- **Trello Sync** → Import boards, sync tasks (Trello API)
- **Dashboard** → Task stats, deadlines, performance metrics
- **Responsive Design** → Mobile-first, Radix UI components
