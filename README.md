# Modern Portfolio Website

A beautiful, responsive portfolio website built with modern technologies, featuring smooth animations, dark mode support, and a ChatGPT-inspired design.

## 🚀 Features

- **Modern Design**: Clean, professional design inspired by ChatGPT's interface
- **Responsive**: Fully responsive design that works on all devices
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Interactive Components**: Hover effects, scroll animations, and interactive elements
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Filterable project gallery with detailed information
- **Skills Visualization**: Animated skill bars and technology tags
- **SEO Optimized**: Meta tags and structured data for better search visibility

## 🛠️ Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **Lucide React** - Beautiful, customizable icons
- **React Icons** - Additional icon library

## 📁 Project Structure

```
portfolio-website/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── Header.tsx           # Navigation header with dark mode toggle
│   ├── Hero.tsx             # Hero section with animated content
│   ├── About.tsx            # About section with personal info
│   ├── Skills.tsx           # Skills section with progress bars
│   ├── Projects.tsx         # Projects showcase with filtering
│   ├── Contact.tsx          # Contact form and information
│   └── Footer.tsx           # Footer with links and copyright
├── public/                  # Static assets
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Personal Information

Update the following files to customize your personal information:

- **Hero Section** (`components/Hero.tsx`): Update name, title, and description
- **About Section** (`components/About.tsx`): Update personal details, experience, and stats
- **Skills Section** (`components/Skills.tsx`): Modify skills and proficiency levels
- **Projects Section** (`components/Projects.tsx`): Add your own projects
- **Contact Section** (`components/Contact.tsx`): Update contact information and social links

### Styling

- **Colors**: Modify the color palette in `tailwind.config.js`
- **Fonts**: Change fonts in `app/layout.tsx`
- **Animations**: Adjust animation settings in component files

### Content

- **Meta Data**: Update SEO information in `app/layout.tsx`
- **Images**: Add your own images to the `public` folder
- **Links**: Update all external links and social media URLs

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🌙 Dark Mode

The website includes a built-in dark mode toggle that:
- Persists user preference
- Provides smooth transitions
- Maintains accessibility standards

## ⚡ Performance

- **Optimized Images**: Use Next.js Image component for optimal loading
- **Code Splitting**: Automatic code splitting with Next.js
- **Lazy Loading**: Components load as needed
- **SEO**: Optimized meta tags and structured data

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The website can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out!

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS** 