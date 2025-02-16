# Next.js Blog App

## 🚀 Introduction
Welcome to the **Next.js Blog App**, a modern and fully functional blog built with **Next.js**. This project is designed for performance, SEO, and scalability, making it easy to create, manage, and display blog posts.

## 🛠️ Features
- **Next.js 15 with App Router**
- **SEO Optimized** with meta tags and structured data
- **Server-side Rendering (SSR) & Static Generation (SSG)**
- **Markdown Support** for writing blog posts
- **Tailwind CSS for Styling**
- **Prisma & PostgreSQL** for Database (Optional)
- **Authentication with NextAuth.js**
- **Image Optimization** using Next.js Image Component
- **Dark Mode Support**
- **Fast Performance & Mobile-Friendly**

## 📂 Folder Structure
```
nextjs-blog-app/
├── public/          # Static assets (images, icons, etc.)
├── src/
│   ├── app/        # Next.js App Router Pages
│   ├── components/ # Reusable UI Components
│   ├── styles/     # Global & Component Styles
│   ├── utils/      # Helper Functions
│   ├── database/   # Prisma ORM Configuration
│   └── pages/      # API Routes & Custom Pages
├── .env.example    # Example Environment Variables
├── next.config.js  # Next.js Configuration
├── tailwind.config.js # TailwindCSS Configuration
├── package.json    # Dependencies & Scripts
└── README.md       # Project Documentation
```

## 🔧 Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/codewithtabish/next-js-full-blogs
cd nextjs-blog-app
```

### 2️⃣ Install Dependencies
```sh
yarn install  # or npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env.local` file and add the following:
```
DATABASE_URL=your_database_url_here
NEXTAUTH_SECRET=your_secret_key_here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 4️⃣ Run the Development Server
```sh
yarn dev  # or npm run dev
```
App runs at **http://localhost:3000** 🚀

## 🚀 Deployment
You can deploy this Next.js app on:
- **Vercel** (Recommended)
- **Netlify**
- **AWS, Digital Ocean, or Custom Servers**

To deploy on **Vercel**, run:
```sh
vercel deploy
```

## 📌 Author
👤 **Talha Tabish**  
GitHub: [TalhaTabish](https://github.com/TalhaTabish)

## 📜 License
This project is licensed under the **MIT License**.

