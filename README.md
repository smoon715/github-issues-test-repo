# GitHub Issues Dashboard - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This project serves as both a personal portfolio and a GitHub issues dashboard for testing and demonstration purposes.

## 🚀 Features

- **Modern Design**: Clean, professional design with responsive layout
- **Portfolio Showcase**: Display projects, skills, and experience
- **Issues Dashboard**: Interactive GitHub issues management interface
- **Dark Mode Ready**: Built with Tailwind CSS for easy theming
- **TypeScript**: Full type safety and better development experience
- **Mobile Responsive**: Optimized for all device sizes

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd github-issues-test-repo
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── projects/          # Projects showcase
│   └── issues/            # GitHub issues dashboard
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   └── Footer.tsx         # Site footer
├── public/               # Static assets
└── ...config files
```

## 📱 Pages

### Homepage (`/`)
- Hero section with introduction
- Project statistics
- Featured projects showcase
- Call-to-action sections

### Projects (`/projects`)
- Detailed project portfolio
- Technology stacks
- GitHub links and live demos
- Project features and descriptions

### Issues Dashboard (`/issues`)
- Interactive issues management
- Search and filtering capabilities
- Status tracking (Open, In Progress, Closed)
- Priority levels and labels
- Test data for demonstration

### About (`/about`)
- Personal information and bio
- Skills and technologies
- Work experience timeline
- Education and certifications

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom primary colors
      }
    }
  }
}
```

### Content
- Update personal information in `app/about/page.tsx`
- Modify project data in `app/projects/page.tsx`
- Customize issues data in `app/issues/page.tsx`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

This is a test repository for GitHub issues dashboard development. Feel free to:
- Create issues for testing
- Submit pull requests
- Suggest improvements
- Report bugs

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- Email: contact@example.com
- GitHub: [@username](https://github.com/username)
- LinkedIn: [Your Profile](https://linkedin.com/in/yourprofile)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS.
