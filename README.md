# Career Research Project Website

A professional, styled career research website built with HTML, CSS, and JavaScript - perfect for the English 11 Career Project assignment.

## 📋 Overview

This is a complete skeleton website that you can customize with your career research information. It includes all required sections:

- **Home** - Your name and career overview
- **What They Do** - Job responsibilities and tasks
- **Work Environment** - Where and how professionals work
- **Pathway** - How to become a professional in this field
- **Pay/Benefits** - Compensation and benefits information
- **Job Outlook** - Market data and area information
- **More Information** - Resources and citations
- **Career Goals** - Your personal aspirations
- **Resume** - Your professional resume

## 🎨 Features

✅ **Fully Responsive Design** - Works on desktop, tablet, and mobile devices
✅ **Professional Styling** - Modern gradient design with accessibility in mind
✅ **Easy Navigation** - Smooth tab switching with hamburger menu on mobile
✅ **Image Support** - Add images to each section with captions
✅ **Citation Management** - Built-in section for citations and resources
✅ **Print-Friendly** - Can be printed directly or saved as PDF
✅ **No External Dependencies** - Pure HTML, CSS, and JavaScript

## 🚀 Getting Started

### 1. Replace Your Information

Open `index.html` in a text editor and replace these placeholders:

- **Your Name**: Replace "Your Name Here" in the home section
- **Career Title**: Replace "[Career Profession]" across the site
- **Content**: Fill in each section with your research:
  - Use information from the Bureau of Labor Statistics
  - Reference the Occupational Outlook Handbook
  - Include data from Pathful, CareerStop One, or CareerShip

### 2. Add Your Images

Create an `images` folder in your project and add images for each section:

```
images/
  ├── career-hero.jpg          (for home section)
  ├── what-they-do.jpg         (for What They Do section)
  ├── work-environment.jpg     (for Work Environment section)
  ├── pathway.jpg              (for Pathway section)
  ├── salary.jpg               (for Pay/Benefits section)
  ├── job-outlook.jpg          (for Job Outlook section)
  ├── resources.jpg            (for More Info section)
  ├── career-goals.jpg         (for Career Goals section)
  └── resume.jpg               (for Resume section)
```

Then update the image paths in `index.html`:

```html
<!-- Change from: -->
<img src="placeholder-career.jpg" alt="Career professional">

<!-- To: -->
<img src="images/career-hero.jpg" alt="[Career] professional">
```

### 3. Add Your Resume

1. Prepare your resume as a PDF file
2. Create a `documents` folder in your project
3. Add your `resume.pdf` file to this folder
4. The link `documents/resume.pdf` in the Resume tab will work automatically

### 4. Add Citations

In the "More Information" section, add your citations:

1. Use MLA, APA, or Chicago format
2. Reference vetted sources (BLS, OOH, Pathful, CareerStop One, CareerShip)
3. Replace the placeholder citations with your actual sources

## 📝 Project Structure

```
English-11-Career-Website/
├── index.html            # Main website file (edit this with your content)
├── styles.css            # All styling and responsive design
├── script.js             # Navigation and interactivity
├── README.md             # This file - instructions and guide
├── images/               # Add your images here
│   ├── career-hero.jpg
│   ├── what-they-do.jpg
│   └── ...
└── documents/            # Add your resume here
    └── resume.pdf
```

## 🖼️ Adding Content Guide

### Text Content
- Replace all placeholder text with your research information
- Keep descriptions clear and concise
- Use bullet points for lists
- Include specific examples where possible

### Images
- Use high-quality images (JPG or PNG)
- Recommended image sizes:
  - Hero image: 400x300px or larger
  - Section images: 300x200px or larger
- Resize images to optimize file size (keep under 500KB each)
- Always include descriptive captions

### Links
- Replace placeholder URLs in the "More Information" section
- Link directly to BLS, OOH, or other vetted sources
- Use `target="_blank"` to open links in new tabs (already set up)

### Styling Customization
If you want to customize colors, open `styles.css` and modify these values:

```css
:root {
    --primary-color: #2c3e50;      /* Main dark blue */
    --secondary-color: #3498db;    /* Bright blue */
    --accent-color: #e74c3c;       /* Red accent */
    --success-color: #27ae60;      /* Green */
}
```

## 🌐 Deploying to GitHub Pages

### Method 1: Enable GitHub Pages in Repository Settings
1. Push your files to GitHub:
   ```bash
   git add .
   git commit -m "Initial career website"
   git push
   ```

2. Go to your repository on GitHub
3. Click **Settings** → **Pages**
4. Select **Deploy from a branch**
5. Choose **main** branch and **root** folder
6. Click **Save**
7. Your site will be available at: `https://yourusername.github.io/English-11-Career-Website/`

### Method 2: Using GitHub CLI (if installed)
```bash
gh repo create English-11-Career-Website --source=. --remote=origin --push
```

## ✅ Assignment Checklist

Use this to track your progress:

- [ ] Replace "Your Name Here" with your name
- [ ] Choose your career and add profession title
- [ ] **Home Tab**
  - [ ] Career profession name and description
  - [ ] Professional image with caption
  
- [ ] **What They Do**
  - [ ] Description of main responsibilities
  - [ ] List of key responsibilities
  - [ ] Relevant image
  
- [ ] **Work Environment**
  - [ ] Description of typical work environment
  - [ ] Work setting details
  - [ ] Relevant image
  
- [ ] **Pathway/How to Become One**
  - [ ] Educational requirements
  - [ ] Certifications needed
  - [ ] Entry steps outlined
  - [ ] Relevant image
  
- [ ] **Pay/Benefits**
  - [ ] Median salary information (from BLS)
  - [ ] Salary ranges
  - [ ] Benefits information
  - [ ] Relevant image
  
- [ ] **Job Outlook/State and Area Data**
  - [ ] National job growth outlook
  - [ ] State-specific opportunities
  - [ ] Geographic data
  - [ ] Relevant chart or graph
  
- [ ] **More Information/External Links**
  - [ ] At least 3 external resource links
  - [ ] Proper citations (MLA/APA/Chicago format)
  - [ ] Related career article
  - [ ] Relevant image
  
- [ ] **Career Goals**
  - [ ] Short-term goals (1-2 years)
  - [ ] Long-term goals (5-10 years)
  - [ ] Personal reflection
  - [ ] Relevant image
  
- [ ] **Resume**
  - [ ] Resume PDF uploaded and linked
  - [ ] Properly formatted
  
- [ ] **General**
  - [ ] All images have captions
  - [ ] Website is mobile-friendly (tested)
  - [ ] All links work correctly
  - [ ] Proper citations included
  - [ ] Deployed to GitHub Pages
  - [ ] Link shared with instructor

## 💡 Tips & Best Practices

### Content Writing
- **Be Specific**: Use real data from BLS and OOH
- **Original Descriptions**: Write your own summaries, don't copy/paste
- **Consistent Tone**: Keep writing professional and informative
- **Cite Sources**: Always credit where your information comes from

### Image Selection
- Use professional images for the career
- Avoid copyrighted images - use:
  - Stock photo sites (Unsplash, Pexels, Pixabay - free & open)
  - Government images (often public domain)
  - Properly licensed images
- Always cite image sources in captions

### Testing
- Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- Test on mobile device or use browser DevTools
- Test all links and navigation
- Verify all images display correctly
- Print preview to check formatting

## 🐛 Troubleshooting

### Images Not Showing
- Check file paths are correct
- Verify files are in the `images/` folder
- Make sure file names match exactly (case-sensitive on some systems)

### Links Not Working
- Verify URL is correct
- Check that external links include `http://` or `https://`
- Make sure PDF path is correct for resume

### Navigation Not Working
- Make sure `script.js` is in the same folder as `index.html`
- Check browser console for errors (F12 key)
- Verify JavaScript is enabled in browser

### Mobile Menu Issues
- Test in mobile view (DevTools)
- Check that hamburger menu appears on small screens
- Verify menu closes when link is clicked

## 📞 Getting Help

If you have questions:
1. Check that all file names are spelled correctly
2. Verify folder structure matches the guide
3. Review the assignment instructions again
4. Ask your teacher or classmates
5. Check browser console (F12) for error messages

## 🔒 Sharing Your Website

When sharing with your instructor:
1. Make sure repository is set to **Public**
2. Share the GitHub Pages URL (usually: `https://yourusername.github.io/English-11-Career-Website/`)
3. Ensure all content is complete and images show
4. Test the link from a different device to verify access

## 📄 Files Reference

| File | Purpose |
|------|---------|
| `index.html` | Main website structure - update content here |
| `styles.css` | All styling and responsive design |
| `script.js` | Navigation functionality and interactivity |
| `README.md` | Instructions and guide (this file) |

## 📚 Resources for Research

- [Bureau of Labor Statistics](https://www.bls.gov/) - Official career data
- [Occupational Outlook Handbook](https://www.bls.gov/ooh/) - Detailed career info
- [Pathful](https://www.pathful.io/) - Interactive career exploration
- [Unsplash](https://unsplash.com/) - Free professional images
- [Pexels](https://www.pexels.com/) - Free stock photos

## 📋 Citation Format Guide

### MLA Format Example
```
Bureau of Labor Statistics. "Information Security Analysts." 
Bureau of Labor Statistics, U.S. Department of Labor, 2024, 
www.bls.gov/ooh/information-technology/information-security-analysts.htm.
```

### APA Format Example
```
Bureau of Labor Statistics. (2024). Information security analysts. 
U.S. Department of Labor. 
https://www.bls.gov/ooh/information-technology/information-security-analysts.htm
```

## ⭐ Going Above and Beyond

To make your project stand out:
- Add subtle animations or hover effects (CSS transitions are already included)
- Create interactive charts showing salary data
- Add a "Day in the Life" video or interview
- Include professional testimonials from people in the field
- Create a skills assessment section
- Add a "Similar Careers" page with comparisons

## 📱 Browser Compatibility

This website works on:
- ✅ Chrome (latest versions)
- ✅ Firefox (latest versions)
- ✅ Safari (latest versions)
- ✅ Edge (latest versions)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Version History

- **v1.0** - Initial skeleton template with all required sections

---

**Created for English 11 Career Project**
Design and functionality ready for your career research content.
Good luck with your project! 🎯