# Pivovarov Academy - Frontend

Modern online learning platform built with Nuxt 3, featuring video courses, subscription management, and interactive learning modules.

## 📋 Overview

Pivovarov Academy is a comprehensive e-learning platform that provides users with access to high-quality educational content through video lessons, structured learning modules, and a subscription-based access model.

## ✨ Features

- 🎥 **Video Learning** - Watch educational videos with custom player and playlists
- 📚 **Learning Modules** - Organized courses with structured lessons
- 🔐 **Authentication** - Secure user registration and login system
- 💳 **Subscription Management** - Flexible subscription plans and access control
- 📱 **Responsive Design** - Modern UI built with Nuxt UI and Tailwind CSS
- 🔒 **Content Access Control** - Role-based access to premium content
- 🎯 **Type Safety** - Full TypeScript support with Zod validation
- ⚡ **Optimized Performance** - Server-side rendering and caching

## 🛠 Tech Stack

- **Framework:** [Nuxt 3](https://nuxt.com/)
- **UI Library:** [Nuxt UI](https://ui.nuxt.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **State Management:** [TanStack Query (Vue Query)](https://tanstack.com/query/latest)
- **HTTP Client:** [Ky](https://github.com/sindresorhus/ky)
- **Authentication:** [nuxt-auth-utils](https://github.com/Atinux/nuxt-auth-utils)
- **Validation:** [Zod](https://zod.dev/)
- **Utilities:** [VueUse](https://vueuse.org/)
- **SEO:** [nuxt-seo-utils](https://nuxtseo.com/)
- **TypeScript:** Full type safety

## 📦 Prerequisites

- **Node.js:** >= 18.x
- **pnpm:** >= 9.2.0 (recommended package manager)

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd pivovarov.academy.front
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Configure your `.env` file:
```env
API_URL=http://localhost:4200/api
```

### Development

Start the development server on `http://localhost:3000`:

```bash
pnpm dev
```

### Linting

Run ESLint to check and fix code quality:

```bash
pnpm lint
```

## 🏗 Project Structure

```
pivovarov.academy.front/
├── assets/              # Static assets (CSS, images)
├── modules/             # Feature modules
│   ├── api/            # API services and HTTP client
│   ├── auth/           # Authentication module
│   ├── content/        # Content access control
│   ├── header/         # Header components
│   ├── learning-modules/ # Learning modules feature
│   ├── lessons/        # Lesson management
│   ├── price/          # Pricing components
│   ├── subscription/   # Subscription management
│   ├── users/          # User management
│   └── video/          # Video player and playlist
├── pages/              # Application routes
├── layouts/            # Layout components
├── composables/        # Reusable composition functions
├── server/             # Server-side code and API
│   ├── api/           # Server API endpoints
│   └── plugins/       # Server plugins
├── public/             # Public static files
└── nuxt.config.ts     # Nuxt configuration
```

## 🎯 Key Modules

### Authentication (`modules/auth/`)
- User registration and login
- Email verification
- Session management

### Learning Modules (`modules/learning-modules/`)
- Browse and filter courses
- Technology-based categorization
- Detailed course information

### Lessons (`modules/lessons/`)
- Structured lesson content
- Progress tracking
- Interactive learning materials

### Video Player (`modules/video/`)
- Custom video player
- Playlist management
- Video previews and thumbnails

### Subscription (`modules/subscription/`)
- Multiple subscription tiers
- Period-based pricing (monthly/yearly)
- Access control based on subscription

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm generate` | Generate static site |
| `pnpm preview` | Preview production build |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |

## 🐳 Docker Support

Build the Docker image:

```bash
docker build -t pivovarov-academy-front .
```

Run the container:

```bash
docker run -p 3000:3000 pivovarov-academy-front
```

## 🔧 Configuration

### API Proxy

The application proxies requests to the backend API. Configure the API URL in your `.env` file:

```env
API_URL=http://localhost:4200/api
```

The proxy is configured in `nuxt.config.ts`:
```typescript
routeRules: {
  '/backend-api/**': {
    proxy: `${process.env.API_URL}/**`
  }
}
```

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `API_URL` | Backend API base URL | `http://localhost:4200/api` |

## 📱 Responsive Design

The application is fully responsive and optimized for:
- 📱 Mobile devices
- 💻 Tablets
- 🖥 Desktop screens

## 🔒 Security

- Server-side authentication
- HTTP-only cookies for session management
- CSRF protection
- Input validation with Zod schemas

## 📚 Additional Resources

- [Nuxt 3 Documentation](https://nuxt.com/docs)
- [Nuxt UI Documentation](https://ui.nuxt.com/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Vue Query Documentation](https://tanstack.com/query/latest/docs/vue/overview)

## 📄 License

This project is private and proprietary.

---

Built with ❤️ using Nuxt 3
