# Mounishwaran A - Portfolio Website

A modern, professional developer portfolio built with React.js, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Hero Section**: Profile image card with smooth animations
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Smooth Navigation**: Functional navbar with mobile hamburger menu
- **Contact Form**: Fully functional EmailJS integration
- **Social Links**: Clickable GitHub, LinkedIn, and LeetCode links
- **Resume Download**: One-click resume download functionality
- **Animations**: Smooth transitions and hover effects using Framer Motion

## 📁 Project Structure

```
Portfolio/
├── public/
│   ├── images/
│   │   └── profile.jpg          # PLACE YOUR PROFILE IMAGE HERE
│   └── resume/
│       └── Mounishwaran_A_Resume.pdf  # PLACE YOUR RESUME PDF HERE
├── src/
│   ├── assets/                   # Additional assets (images, fonts, etc.)
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Achievements.tsx
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx           # CONTACT FORM COMPONENT
│   │   ├── Hero.tsx              # HERO SECTION WITH SOCIAL LINKS
│   │   ├── Navbar.tsx            # MOBILE NAVBAR COMPONENT
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── config/
│   │   └── emailConfig.js        # EMAILJS CREDENTIALS CONFIGURATION
│   ├── data/
│   │   └── socialLinks.js        # SOCIAL MEDIA LINKS CONFIGURATION
│   ├── App.tsx
│   ├── index.css
│   └── index.tsx
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Place Your Profile Image

**Location**: `public/images/profile.jpg`

- Replace the placeholder with your actual profile photo
- Recommended size: 400x400px or larger
- Format: JPG or PNG
- The image will be automatically displayed in the hero section

### 3. Place Your Resume PDF

**Location**: `public/resume/Mounishwaran_A_Resume.pdf`

- Place your resume PDF in this location
- The "Download Resume" button will automatically download this file
- You can rename the file, but update the reference in `src/components/Hero.tsx` line 19

### 4. Configure Social Media Links

**File**: `src/data/socialLinks.js`

Update the following variables with your actual social media URLs:

```javascript
export const github = 'https://github.com/yourusername';
export const linkedin = 'https://linkedin.com/in/yourusername';
export const leetcode = 'https://leetcode.com/yourusername';
```

### 5. Configure EmailJS for Contact Form

**File**: `src/config/emailConfig.js`

#### Step-by-Step EmailJS Setup:

1. **Create EmailJS Account**
   - Go to [https://www.emailjs.com/](https://www.emailjs.com/)
   - Sign up for a free account

2. **Add Email Service**
   - Navigate to Email Services → Add New Service
   - Select Gmail (or your preferred email service)
   - Follow the instructions to connect your email account
   - Copy the `SERVICE_ID`

3. **Create Email Template**
   - Navigate to Email Templates → Create New Template
   - Design your template with these variables:
     - `{{to_name}}`: Recipient name (Mounishwaran)
     - `{{from_name}}`: Sender name
     - `{{from_email}}`: Sender email
     - `{{subject}}`: Email subject
     - `{{message}}`: Email message
   - Copy the `TEMPLATE_ID`

4. **Get Public Key**
   - Navigate to Account → General
   - Copy the `PUBLIC_KEY`

5. **Update Configuration**
   Replace the placeholder values in `src/config/emailConfig.js`:

```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'YOUR_SERVICE_ID',      // Replace with your Service ID
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID',    // Replace with your Template ID
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY',       // Replace with your Public Key
  RECIPIENT_EMAIL: 'mounish27934@gmail.com'  // All messages sent here
};
```

### 6. Run the Development Server

```bash
npm start
```

The portfolio will be available at `http://localhost:3000`

## 📱 Component Documentation

### Hero Component (`src/components/Hero.tsx`)

**Features**:
- Profile image display (static, no rotation)
- Social media links (GitHub, LinkedIn, LeetCode)
- Contact Me button (smooth scroll to Contact section)
- Download Resume button (downloads PDF)
- Mobile-responsive layout with social icons at bottom

**Key Functions**:
- `scrollToContact()`: Smooth scrolls to Contact section
- `downloadResume()`: Triggers resume PDF download

### Navbar Component (`src/components/Navbar.tsx`)

**Features**:
- Desktop navigation with smooth scrolling
- Mobile hamburger menu with animations
- Click outside to close menu
- Auto-close after navigation

**Key Functions**:
- `scrollToSection()`: Smooth scrolls to target section
- `toggleMobileMenu()`: Opens/closes mobile menu
- `closeMobileMenu()`: Closes mobile menu

### Contact Component (`src/components/Contact.tsx`)

**Features**:
- Fully functional contact form
- EmailJS integration
- Loading state with spinner
- Success/error message display
- Form validation
- Auto-reset after successful submission

**Key Functions**:
- `handleSubmit()`: Handles form submission via EmailJS
- `handleChange()`: Updates form state
- Loading state management
- Error handling with user-friendly messages

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color palette:

```javascript
colors: {
  'warm-yellow': '#F59E0B',
  'golden-yellow': '#FCD34D',
  'soft-white': '#FAFAFA',
  'light-gray': '#F3F4F6',
  'dark-gray': '#374151',
}
```

### Fonts

The portfolio uses Google Fonts (Inter and Space Grotesk). To change fonts:
1. Update the font imports in `public/index.html`
2. Update the font family in `tailwind.config.js`

## 📧 Contact Form Configuration

The contact form sends emails to: `mounish27934@gmail.com`

To change the recipient email, update the `RECIPIENT_EMAIL` in `src/config/emailConfig.js`.

## 🔧 Troubleshooting

### Contact Form Not Working

1. Ensure EmailJS credentials are correctly configured in `src/config/emailConfig.js`
2. Check that your EmailJS template includes all required variables
3. Verify your email service is properly connected in EmailJS dashboard
4. Check browser console for error messages

### Profile Image Not Displaying

1. Ensure the image is placed at `public/images/profile.jpg`
2. Check that the image file name matches exactly (case-sensitive)
3. Verify the image format is JPG or PNG

### Resume Download Not Working

1. Ensure the PDF is placed at `public/resume/Mounishwaran_A_Resume.pdf`
2. Check that the file path in `src/components/Hero.tsx` line 19 matches your file name
3. Verify the PDF file is not corrupted

### Mobile Menu Not Opening

1. Check that the hamburger button has the `onClick` handler
2. Verify the `mobileMenuOpen` state is being toggled
3. Check browser console for JavaScript errors

## 📦 Build for Production

```bash
npm run build
```

The optimized build will be created in the `build/` directory.

## 🚀 Deployment

### Deploy to Netlify

1. Run `npm run build`
2. Drag and drop the `build/` folder to Netlify
3. Or connect your GitHub repository to Netlify

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect and deploy the React app

## 📝 License

This portfolio is open source and available for personal use.

## 👤 Author

**Mounishwaran A**
- Full Stack Developer
- B.Tech Information Technology Student
- Kongu Engineering College

---

## 📋 Quick Reference

| Feature | File Location |
|---------|---------------|
| Profile Image | `public/images/profile.jpg` |
| Resume PDF | `public/resume/Mounishwaran_A_Resume.pdf` |
| Social Links | `src/data/socialLinks.js` |
| EmailJS Credentials | `src/config/emailConfig.js` |
| Contact Form | `src/components/Contact.tsx` |
| Mobile Navbar | `src/components/Navbar.tsx` |
| Hero Section | `src/components/Hero.tsx` |

## 🎯 Key Implementation Details

### Mobile Responsiveness
- Hero section uses flexbox with `order` classes to maintain layout
- Social icons appear at bottom on mobile, left side on desktop
- Navbar transforms to hamburger menu on mobile
- All components use responsive Tailwind classes breakpoint prefixes

### Animations
- Framer Motion for smooth transitions
- Scroll-triggered animations using `whileInView`
- Hover effects on interactive elements
- Loading spinner for form submission

### Accessibility
- Semantic HTML elements
- ARIA labels where appropriate
- Keyboard navigation support
- Screen reader friendly

---

**Last Updated**: June 2026
**Version**: 1.0.0
