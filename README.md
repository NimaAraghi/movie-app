# Movie App

A modern, responsive movie web application that allows users to search and browse their favorite movies, powered by the TMDB API. Designed with a sleek UI and seamless user experience, this project demonstrates the use of contemporary web technologies and patterns for building fast, scalable, and attractive web apps.

[Live Preview 🚀](https://movie-app-one-iota-88.vercel.app/)

---

## Features

- 🔍 **Movie Search**: Instantly search for movies from the vast TMDB database.
- 🎬 **Movie Details**: View detailed information about each movie, including synopsis, release date, rating, and more.
- ✨ **Modern UI/UX**: Smooth navigation and interactive design, following best UI/UX practices.
- 📱 **Responsive Design**: Fully responsive layout for mobile, tablet, and desktop devices.
- ⚡ **Fast Performance**: Optimized for speed using Next.js 15 and the App Router.
- 🌙 **Dark Mode**: Visually pleasing theme that adapts to user preferences.

---

## Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/)
- **API**: [TMDB (The Movie Database) API](https://www.themoviedb.org/documentation/api)
- **Deployment**: [Vercel](https://vercel.com/)

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/NimaAraghi/movie-app.git
cd movie-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory and add your TMDB API key:

```env
TMDB_API_KEY=your_tmdb_api_key_here
```

You can get a free API key from [TMDB account settings](https://www.themoviedb.org/settings/api).

### 4. Start the development server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

---

## Project Structure

```
movie-app/
│
├── app/                # Next.js App Router directory (pages, layouts, etc)
├── components/         # Reusable UI components
├── lib/                # API utilities and helpers
├── styles/             # Tailwind and global CSS
├── public/             # Static assets
├── types/              # TypeScript types
└── ...
```

---

## Acknowledgements

- [TMDB API](https://www.themoviedb.org/) for movie data and images.
- [shadcn/ui](https://ui.shadcn.com/) for beautiful and accessible UI components.
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS framework.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Screenshots

<!-- You can add screenshots to showcase your UI. Example: -->
<!-- ![Home Page](./public/screenshots/home.png) -->

---

## Contribution

Contributions, issues and feature requests are welcome!  
Feel free to open an [issue](https://github.com/NimaAraghi/movie-app/issues) or submit a pull request.

---

> Made with ❤️ using Next.js and TMDB API.
