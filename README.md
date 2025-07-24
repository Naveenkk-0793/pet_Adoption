# Pet Adoption Website 🐾

A responsive, interactive web application for browsing and filtering adoptable pets. This project showcases modern web development techniques with vanilla JavaScript, CSS Grid, and API integration.

![Pet Adoption Preview](https://img.shields.io/badge/Status-Active-brightgreen) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## 🌟 Features

- **🔍 Smart Filtering**: Filter pets by species (All Animals, Dogs, Cats, Rabbits)
- **📱 Responsive Design**: Seamless experience across desktop, tablet, and mobile devices
- **🎨 Modern UI**: Purple gradient theme with smooth animations and hover effects
- **⚡ Fast Loading**: Optimized performance with embedded CSS and JavaScript
- **🛡️ Error Handling**: Graceful handling of API failures with user-friendly messages
- **🔄 Real-time Data**: Fetches live pet data from external API
- **♿ Accessibility**: Semantic HTML and keyboard navigation support

## 🚀 Demo

Visit the live demo: [Pet Adoption Site](https://naveenkk-0793.github.io/pet_Adoption/) *(replace with your actual GitHub Pages URL)*

## 📸 Screenshots

*Add screenshots of your application here*

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Layout**: CSS Grid, Flexbox
- **API**: Fetch API for data retrieval
- **Responsive**: Mobile-first design approach
- **Version Control**: Git & GitHub
- **Hosting**: GitHub Pages

## 📁 Project Structure

```
pet_Adoption/
├── index.html          # Main application file
├── README.md          # Project documentation
├── assets/            # Images and static files (if any)
└── screenshots/       # Application screenshots (if any)
```

## 🏃‍♂️ Quick Start

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for API data

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Naveenkk-0793/pet_Adoption.git
   cd pet_Adoption
   ```

2. **Open the application**
   - Simply open `index.html` in your web browser
   - Or use a local server for development:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. **View in browser**
   - Direct file: `file:///path/to/index.html`
   - Local server: `http://localhost:8000`

## 🎯 How It Works

### Data Flow
1. **Page Load**: Application fetches pet data from the Learn Web Code API
2. **Template Processing**: Each pet is rendered using the HTML template element
3. **Interactive Filtering**: Users can filter pets by species with instant results
4. **Responsive Display**: Layout adapts automatically to screen size

### Key Components

#### HTML Structure
- **Hero Section**: Eye-catching banner with gradient background
- **Filter Navigation**: Species filter buttons with active state management
- **Pet Grid**: Dynamic container for pet cards
- **Template Element**: Reusable structure for consistent pet card layout

#### CSS Features
- **Purple Theme**: Consistent brand colors with gradients
- **Grid Layout**: Responsive two-column design for desktop, single-column for mobile
- **Animations**: Smooth transitions and dramatic hover effects
- **Typography**: Clean, readable font hierarchy

#### JavaScript Functionality
- **Async Loading**: Non-blocking API data fetching
- **DOM Manipulation**: Dynamic content generation from templates
- **Event Handling**: Interactive filtering and navigation
- **Error Management**: User-friendly error states

## 🎨 Customization

### Changing the Color Scheme
Update the main colors in the CSS section:
```css
/* Primary brand color */
background-color: #7c109a;

/* Secondary color */
border: 1px solid #db68d6;

/* Gradient colors */
background: linear-gradient(to left, rgb(247, 0, 255), #7c109a);
```

### Adding New Filter Categories
1. Add filter button in HTML:
   ```html
   <a href="#" data-filter="bird"><span class="only-large-screen">Only </span>Birds</a>
   ```
2. Ensure your data source includes the new species

### Modifying Card Layout
Adjust grid columns in CSS:
```css
.animal-card {
    grid-template-columns: 200px 1fr; /* Image width | Content area */
}
```

## 🌐 API Integration

**Data Source**: [Learn Web Code Pet Adoption API](https://learnwebcode.github.io/pet-adoption-data/pets.json)

**Pet Object Structure**:
```json
{
  "id": "unique-pet-id",
  "name": "Pet Name",
  "species": "dog|cat|rabbit",
  "birthYear": 2020,
  "photo": "https://example.com/pet-photo.webp",
  "description": "Friendly pet description..."
}
```

## 📱 Responsive Breakpoints

- **Mobile**: `< 768px` - Single column layout, compact navigation
- **Desktop**: `≥ 768px` - Two-column cards, expanded hero text

## ⚡ Performance Features

- **Single File Architecture**: All assets embedded for minimal HTTP requests
- **Optimized Images**: WebP format for faster loading
- **Efficient Filtering**: Hide/show elements without DOM regeneration
- **CSS Transforms**: Hardware-accelerated animations

## 🐛 Known Issues

- Requires internet connection for pet data
- Some images may load slowly depending on network speed
- Advanced CSS features have limited IE support

## 🔮 Future Enhancements

- [ ] **Search Functionality**: Search pets by name or description
- [ ] **Advanced Filters**: Age range, size, location-based filtering
- [ ] **Pet Details Modal**: Expanded information popup
- [ ] **Favorites System**: Save favorite pets locally
- [ ] **Contact Integration**: Direct contact with adoption centers
- [ ] **Image Gallery**: Multiple photos per pet
- [ ] **Dark Mode**: Toggle between light and dark themes

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Contribution Guidelines
- Follow existing code style and structure
- Test your changes across different browsers
- Update documentation if needed
- Keep commits focused and descriptive

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Naveen K**
- GitHub: [@Naveenkk-0793](https://github.com/Naveenkk-0793)
- Email: *Add your email if you want to share it*

## 🙏 Acknowledgments

- **Pet Data**: Thanks to [Learn Web Code](https://learnwebcode.github.io/) for providing the pet adoption API
- **Design Inspiration**: Modern pet adoption platforms and animal welfare websites
- **Community**: Open source contributors and web development community

## 📊 Project Stats

![GitHub repo size](https://img.shields.io/github/repo-size/Naveenkk-0793/pet_Adoption)
![GitHub last commit](https://img.shields.io/github/last-commit/Naveenkk-0793/pet_Adoption)
![GitHub issues](https://img.shields.io/github/issues/Naveenkk-0793/pet_Adoption)
![GitHub pull requests](https://img.shields.io/github/issues-pr/Naveenkk-0793/pet_Adoption)

## 🌟 Show Your Support

If you found this project helpful, please consider:
- ⭐ Starring the repository
- 🍴 Forking for your own modifications
- 🐛 Reporting issues or suggesting improvements
- 📢 Sharing with others who might find it useful

---

**Made with ❤️ for pets in need of loving homes**
