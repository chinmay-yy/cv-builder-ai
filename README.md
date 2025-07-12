# CV Builder - Modern Resume Builder Application

A modern, feature-rich CV/Resume builder built with React, Vite, and Strapi CMS. Create professional resumes with an intuitive drag-and-drop interface and AI-powered suggestions.

## 🚀 Features

- **Modern UI/UX**: Clean, responsive design with Tailwind CSS
- **Real-time Preview**: See changes instantly as you edit
- **Multiple Templates**: Choose from various professional templates
- **AI Integration**: Get AI-powered suggestions for content improvement
- **Export Options**: Download as PDF, PNG, or share online
- **User Authentication**: Secure user accounts with Clerk
- **Cloud Storage**: Save and sync resumes across devices
- **Customizable Sections**: Personal details, experience, education, skills, and more

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI framework
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls

### Backend
- **Strapi CMS** - Headless CMS for content management
- **SQLite** - Database for development
- **JWT Authentication** - Secure API authentication

### AI & Services
- **Google Generative AI** - AI-powered content suggestions
- **Clerk** - User authentication and management

## 📸 Screenshots

### Dashboard
![Dashboard](https://via.placeholder.com/800x400/3B82F6/FFFFFF?text=CV+Builder+Dashboard)

### Resume Editor
![Editor](https://via.placeholder.com/800x400/10B981/FFFFFF?text=Resume+Editor)

### Preview Mode
![Preview](https://via.placeholder.com/800x400/F59E0B/FFFFFF?text=Resume+Preview)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd cvBuilder
   ```

2. **Install frontend dependencies**
   ```bash
   cd cvBuilder
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd "strapi backend 3/ai-resume-admin"
   npm install
   ```

4. **Set up environment variables**
   Create `.env` files in both frontend and backend directories with your API keys.

5. **Start the development servers**

   **Frontend (React/Vite):**
   ```bash
   cd cvBuilder
   npm run dev
   ```
   Frontend will be available at: http://localhost:5173

   **Backend (Strapi):**
   ```bash
   cd "strapi backend 3/ai-resume-admin"
   DATABASE_CLIENT=sqlite DATABASE_FILENAME=.tmp/data.db npm run develop
   ```
   Backend will be available at: http://localhost:1337

## 📁 Project Structure

```
cvBuilder/
├── cvBuilder/                 # Frontend React application
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   ├── dashboard/        # Dashboard and resume management
│   │   ├── auth/            # Authentication components
│   │   ├── service/         # API service layer
│   │   └── context/         # React context providers
│   └── public/              # Static assets
├── strapi backend 3/        # Backend Strapi CMS
│   └── ai-resume-admin/
│       ├── src/
│       │   ├── api/         # API endpoints
│       │   └── components/  # Strapi content types
│       └── config/          # Strapi configuration
└── README.md
```

## 🎯 Key Features Explained

### 1. Resume Editor
- Rich text editor for content creation
- Real-time preview of changes
- Drag-and-drop section reordering
- Template switching

### 2. AI Integration
- Smart content suggestions
- Grammar and style improvements
- Keyword optimization for ATS systems

### 3. Export & Sharing
- PDF export with high quality
- PNG export for social media
- Shareable links
- Print-friendly layouts

### 4. User Management
- Secure authentication with Clerk
- Cloud storage of resumes
- Version history
- Collaboration features

## 🔧 Configuration

### Environment Variables

**Frontend (.env):**
```env
VITE_STRAPI_API_KEY=your_strapi_api_key
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key
VITE_GOOGLE_AI_KEY=your_google_ai_key
```

**Backend (.env):**
```env
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db
JWT_SECRET=your_jwt_secret
```

## 🚀 Deployment

### Frontend Deployment
The frontend can be deployed to Vercel, Netlify, or any static hosting service:

```bash
npm run build
```

### Backend Deployment
The Strapi backend can be deployed to:
- Railway
- Heroku
- DigitalOcean
- AWS

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Strapi](https://strapi.io/) for the amazing headless CMS
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) for accessible components
- [Clerk](https://clerk.com/) for authentication
- [Google AI](https://ai.google.dev/) for AI integration

## 📞 Support

If you have any questions or need help, please open an issue in the repository or contact the development team.

---

**Built with ❤️ using modern web technologies** 