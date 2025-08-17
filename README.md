# ⚖️ Justice GPT - AI-Powered Legal Assistant

**Justice GPT** is a comprehensive AI-powered legal education and assistance platform that helps users identify relevant Indian Penal Code (IPC) sections, constitutional articles, and provides detailed legal analysis using Google Gemini AI.

---

## 🚀 **Latest Features & Improvements**

### **🔐 Real AI Integration**
- ✅ **Google Gemini AI Integration** - Real AI-powered legal analysis
- ✅ **Structured Legal Prompts** - Consistent analysis output format
- ✅ **API Fallback System** - Graceful degradation if API fails
- ✅ **Secure API Key Management** - Environment-based configuration

### **🎨 Enhanced User Experience**
- ✅ **Beautiful Loading Skeleton** - Professional loading experience with progress indicators
- ✅ **Toast Notification System** - Success, error, info, and warning notifications
- ✅ **Error Boundary System** - Graceful error handling with retry options
- ✅ **Advanced Animations** - Smooth Framer Motion transitions throughout

### **🔐 User Authentication System**
- ✅ **User Registration & Login** - Secure user account management
- ✅ **Role-Based Access** - Lawyer vs Common Person differentiation
- ✅ **Session Management** - Persistent login state
- ✅ **Profile Management** - User preferences and settings

### **📱 Mobile-First Design**
- ✅ **Responsive Layout** - Works perfectly on all device sizes
- ✅ **Touch-Friendly Interface** - Optimized for mobile interaction
- ✅ **Adaptive Typography** - Text scales appropriately
- ✅ **Mobile Navigation** - Intuitive mobile experience

### **🎯 Case Management Features**
- ✅ **Case Templates** - Pre-built templates for common legal scenarios
- ✅ **Smart Case Forms** - Dynamic forms based on case type
- ✅ **Case History** - Persistent storage of previous cases
- ✅ **Export & Print** - PDF generation and printing capabilities

### **🔍 Advanced Search & Discovery**
- ✅ **Legal Resource Search** - Search through articles and case law
- ✅ **Smart Filtering** - Category-based and relevance-based filtering
- ✅ **Real-time Search** - Instant search results with debouncing
- ✅ **Search Analytics** - Relevance scoring and result ranking

---

## 🛠️ **Tech Stack**

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + Framer Motion
- **AI Integration**: Google Gemini API
- **State Management**: React Context + Hooks
- **Build Tools**: Vite, PostCSS, ESLint
- **Deployment**: Static site ready

---

## 📁 **Project Structure**

```
justice-gpt/
├── src/
│   ├── components/          # React components
│   │   ├── WelcomeScreen.tsx       # Landing page
│   │   ├── Login.tsx              # Authentication
│   │   ├── CaseTemplates.tsx      # Case templates
│   │   ├── SearchLegalArticles.tsx # Legal search
│   │   ├── LoadingSkeleton.tsx    # Loading states
│   │   ├── Toast.tsx              # Notifications
│   │   ├── ErrorBoundary.tsx      # Error handling
│   │   └── ...                    # Other components
│   ├── contexts/           # React contexts
│   │   └── AuthContext.tsx        # Authentication context
│   ├── lib/                # External integrations
│   │   └── gemini.ts              # Google Gemini AI
│   ├── data/               # Static data
│   │   └── constitutionalArticles.ts # Legal articles
│   ├── types/              # TypeScript definitions
│   └── App.tsx            # Main application
├── .env                   # Environment variables
├── package.json           # Dependencies
└── README.md             # This file
```

---

## 🚀 **Installation & Setup**

### **1. Clone the Repository**
```bash
git clone <your-repo-url>
cd justice-gpt
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Configure Environment Variables**
Create a `.env` file in the root directory:
```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

### **4. Start Development Server**
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or next available port).

---

## 🔧 **Configuration**

### **Google Gemini API Setup**
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Add it to your `.env` file as `VITE_GEMINI_API_KEY`

### **Customizing Legal Prompts**
Edit `src/lib/gemini.ts` to modify the AI prompts for different legal analysis types.

---

## 🎯 **Key Features in Detail**

### **AI-Powered Legal Analysis**
- **Case Classification**: Automatic categorization of legal issues
- **IPC Section Mapping**: Relevant Indian Penal Code sections
- **Legal Reasoning**: Detailed analysis with mens rea and actus reus
- **Procedural Guidance**: Step-by-step legal procedures
- **Precedent Analysis**: Relevant case law and precedents

### **Case Templates**
- **Motor Vehicle Accidents**: Traffic violations and accidents
- **Property Disputes**: Landlord-tenant and boundary issues
- **Employment Issues**: Workplace harassment and termination
- **Family Law**: Divorce, custody, and domestic violence
- **Consumer Complaints**: Product defects and fraud
- **Cyber Crimes**: Online fraud and digital harassment

### **Search & Discovery**
- **Constitutional Articles**: Search through Indian Constitution
- **Case Law Database**: Landmark legal cases
- **Smart Filtering**: Category and relevance-based filtering
- **Real-time Results**: Instant search with debouncing

---

## 🚀 **Deployment**

### **Build for Production**
```bash
npm run build
```

### **Preview Production Build**
```bash
npm run preview
```

### **Deploy to Static Hosting**
The built files in the `dist/` folder can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

---

## 🔮 **Future Roadmap**

- [ ] **Voice Input Support** - Speech-to-text for case descriptions
- [ ] **Multi-language Support** - Hindi, Telugu, and other Indian languages
- [ ] **Document Upload** - PDF and image analysis
- [ ] **Legal Expert Network** - Connect with real lawyers
- [ ] **Court Filing Integration** - Direct court document generation
- [ ] **Mobile App** - Native iOS and Android applications

---

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## ⚠️ **Disclaimer**

**Justice GPT is an educational tool only.** The information provided should not be considered as legal advice. Always consult with qualified legal professionals for specific legal matters.

---

## 🆘 **Support**

If you encounter any issues or have questions:
1. Check the [Issues](https://github.com/your-repo/issues) page
2. Create a new issue with detailed information
3. Contact the development team

---

**Built with ❤️ for the Indian legal community**
