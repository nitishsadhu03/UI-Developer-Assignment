
# SaaS Dashboard (Juspay UI Developer Assignment)

A **pixel-perfect SaaS dashboard** built using **Next.js 15**, designed based on the provided Figma designs.  
This implementation focuses on clean UI, smooth motion, responsive layouts, and delightful microinteractions — all crafted to deliver a professional, production-ready user experience.


---


## 🚀 Live Demo  
🔗 [View Deployed Dashboard](https://ui-developer-assignment-eosin.vercel.app)


---


## 🎯 Objective  
To implement the provided SaaS dashboard designs in React (Next.js) with **pixel-perfect accuracy**, smooth animations, and meaningful interactions.  
The focus was on responsiveness, accessibility, and maintainable code aligned with modern frontend development standards.


---


## 🛠️ Tech Stack  

| Category | Tools / Libraries |
|-----------|-------------------|
| **Framework** | [Next.js 15](https://nextjs.org/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) + [ShadCN UI](https://ui.shadcn.com/) |
| **Charts** | [Recharts](https://recharts.org/en-US/) |
| **Icons** | [Phosphor Icons](https://phosphoricons.com/), [Lucide React](https://lucide.dev/) |
| **Deployment** | [Vercel](https://vercel.com/) |


---


## 💻 Features  

✅ Pixel-perfect implementation based on Figma design  
✅ Fully responsive across desktop, tablet, and mobile  
✅ Functional searching and pagination  
✅ Smooth animations and interactive UI states  
✅ Dark and light theme toggle  
✅ Reusable and modular component architecture  
✅ Browser compatibility (Chrome, Firefox, Safari, Edge)  


---


## 📁 Folder Structure  

```bash
📦 UI-Developer-Assignment
 ┣ 📂 app                 # Next.js 15 App Router structure
 ┃ ┣ 📜 global.css        # Global Styles
 ┃ ┣ 📜 loading.js        # Loading screen
 ┃ ┣ 📜 page.js           # Main dashboard landing page
 ┃ ┗ 📜 layout.js         # Root layout
 ┣ 📂 components          # Reusable UI components
 ┣ 📂 lib                 # Utility functions, constants, and helper files
 ┣ 📂 public              # Static assets like images, icons, etc.
 ┣ 📜 next.config.mjs     # Next.js configuration file
 ┣ 📜 postcss.config.mjs   # PostCSS configuration
 ┣ 📜 package.json        # Project dependencies and scripts
 ┗ 📜 README.md           # Project documentation
```

---


## ⚙️ Setup and Installation  

1. **Clone the repository**  
   ```bash
   git clone https://github.com/nitishsadhu03/UI-Developer-Assignment.git
   cd UI-Developer-Assignment


2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run locally**

   ```bash
   npm run dev
   ```

4. **Build for production**

   ```bash
   npm run build
   ```

5. **Preview production build**

   ```bash
   npm start
   ```


---


## 🧠 Design Decisions

* **Next.js App Router** for structured, modern routing and server rendering.
* **ShadCN UI + Tailwind CSS** for fast and consistent styling with clean class management.
* **Recharts** for flexible and customizable chart visualizations.
* **Icon Consistency** maintained through Lucide and Phosphor icons.
* **No external state library:** local and prop-based state management kept simple and efficient.
* **Responsive Design** using Tailwind’s grid and flex utilities to ensure cross-device consistency.


---


## ⚡ Challenges Faced

* Issues in implementing **charts pixel-perfectly**, especially the pie chart.
* Ensuring **smooth motion** without affecting rendering performance.
* Implementing **dark/light themes** with consistent component behavior.
* Fine-tuning **chart responsiveness** across screen sizes.


---


## 💎 Bonus Implementations

* Implemented add/edit/delete order feature in the order list using local storage for data persistence and useState for state management.
* Added full mobile responsiveness for all major breakpoints.
* Light/Dark theme switch with preference saved in local storage.
* Deployed and optimized production build on Vercel.


---


## 📜 License

This project was developed as part of a **UI Developer assignment** for **Juspay**.
All design assets and references belong to their respective owners.
