# Personal Portfolio Website

## Overview

This is a modern, responsive personal portfolio website built with React, Express.js, and PostgreSQL. The application showcases Swapnil Gore, a 14-year-old developer's skills, projects, and setup through an interactive dark/light themed interface with smooth animations, a graph paper-style grid background, and realistic cursor ripple effects.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Build Tool**: Vite for fast development and optimized production builds
- **State Management**: React Context API for theme management, TanStack Query for server state

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Structure**: RESTful API with `/api` prefix for all endpoints
- **Middleware**: Express JSON parsing, CORS handling, and request logging
- **Development**: Hot reload with Vite integration in development mode

### Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured but not yet implemented)
- **Schema**: User management schema defined in shared directory
- **Migrations**: Drizzle-kit for database schema management
- **Current Storage**: In-memory storage implementation with interface for future database integration

## Key Components

### Theme System
- Custom theme provider with localStorage persistence
- CSS variables for consistent theming across light/dark modes
- Smooth transitions between theme states

### Navigation
- Fixed island-style navigation bar with smooth scroll
- Active section highlighting using intersection observer
- Mobile-responsive design with hamburger menu capability

### Interactive Elements
- Custom cursor ripple effect for enhanced user experience
- Smooth scroll-to-section functionality
- Fade-in animations for content sections on scroll

### Portfolio Sections
- **Hero**: Personal introduction with social links
- **About**: Developer story and interests
- **Projects**: Showcased development work with technology tags
- **Skills**: Progress bars showing proficiency levels
- **Setup**: Development environment and tools
- **Contact**: Direct communication methods

## Data Flow

1. **Frontend Rendering**: React components render the portfolio interface
2. **Theme Management**: Context provider manages theme state across components
3. **Scroll Tracking**: Custom hooks monitor scroll position for navigation highlighting
4. **API Communication**: TanStack Query handles server communication (prepared for future features)
5. **Storage Interface**: Abstracted storage layer allows switching between in-memory and database storage

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React 18, React DOM, React Query
- **UI Framework**: Radix UI primitives, shadcn/ui components
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **Database**: Drizzle ORM, Neon Database serverless driver
- **Validation**: Zod for schema validation
- **Icons**: Lucide React icons
- **Utilities**: date-fns, nanoid

### Development Dependencies
- **Build Tools**: Vite, esbuild, TypeScript compiler
- **Development**: tsx for TypeScript execution, Replit integration plugins

## Deployment Strategy

### Development Environment
- **Runtime**: Node.js 20 with npm package management
- **Database**: PostgreSQL 16 for development
- **Ports**: Application runs on port 5000, exposed as port 80
- **Hot Reload**: Vite development server with HMR enabled

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Deployment**: Replit autoscale deployment target
- **Environment**: Production mode with optimized asset serving

### Database Configuration
- **Connection**: Environment variable `DATABASE_URL` required
- **Migrations**: Drizzle-kit manages schema migrations
- **Current State**: In-memory storage for development, PostgreSQL ready for production

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

### June 18, 2025 - Enhanced Portfolio Features
- Updated portfolio owner from Aarav Gupta to Swapnil Gore
- Enhanced grid background to resemble graph paper with dual-layer grid pattern (20px and 100px)
- Implemented realistic cursor ripple effects with smooth following animation
- Added click-triggered expanding ripple waves with proper animations
- Updated HTML meta tags and titles to reflect name change
- Improved visual aesthetics with better contrast and theme-aware styling

### June 18, 2025 - Initial Setup
- Created modern portfolio website with React, TypeScript, and Tailwind CSS
- Implemented dark/light theme toggle with localStorage persistence
- Built island-style navigation with smooth scroll functionality
- Added sections: Hero, About, Projects, Skills, Setup, Contact
- Integrated Font Awesome icons and JetBrains Mono typography