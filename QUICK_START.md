# Quick Start Guide

## 🎯 What You Need to Do

This is your career website skeleton. Follow these steps to complete your assignment:

### Step 1: Customize Your Content (Most Important!)

1. Open `index.html` in VS Code (right-click → Open with Code)
2. Find and replace these placeholders with YOUR information:
   - `"Your Name Here"` → your actual name
   - `[Career Profession]` → your chosen career
   - Replace all placeholder descriptions with your research

### Step 2: Add Your Images

1. Create a folder called `images` in your project
2. Add 8-9 professional images (one for each section)
3. Update the image file paths in `index.html`

**Example:**
```html
<!-- Change this: -->
<img src="placeholder-career.jpg" alt="Career professional">

<!-- To this: -->
<img src="images/my-career-photo.jpg" alt="Software Engineer at work">
```

### Step 3: Add Your Resume

1. Create a folder called `documents`
2. Place your `resume.pdf` in this folder
3. The link is already set up in the Resume tab

### Step 4: Fill in All Sections

Go through each page and replace placeholder text:

| Tab | What to Include |
|-----|-----------------|
| **Home** | Career name + brief description |
| **What They Do** | Main job responsibilities |
| **Work Environment** | Where/how they work, hours, conditions |
| **Pathway** | Education requirements, certifications, steps |
| **Pay/Benefits** | Salary, benefits, compensation data |
| **Job Outlook** | Growth data, job market, regional info |
| **More Info** | Links, citations, and resources |
| **Career Goals** | Your personal short/long term goals |
| **Resume** | Your professional resume |

### Step 5: Test Your Website

1. Open `index.html` in your browser (double-click the file)
2. Click through all tabs - verify everything shows correctly
3. Test on mobile (Chrome DevTools: F12 → Toggle device toolbar)
4. Check that images display and links work

### Step 6: Deploy to GitHub

1. Create a GitHub repository named `English-11-Career-Website`
2. Push your files:
   ```bash
   git init
   git add .
   git commit -m "Career website project"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/English-11-Career-Website.git
   git push -u origin main
   ```

3. Enable GitHub Pages:
   - Go to Settings → Pages
   - Select "Deploy from a branch" → "main" → "root"
   - Your site will be at: `https://YOUR-USERNAME.github.io/English-11-Career-Website/`

### Step 7: Share with Your Teacher

Send your GitHub Pages link to your teacher!

---

## 📝 Content Tips

### For Bureau of Labor Statistics Data:
- Visit: https://www.bls.gov/ooh/
- Search for your career
- Copy salary, job outlook, work environment info
- **Don't forget to cite!**

### For Images:
- Use free stock photos: Unsplash.com, Pexels.com, Pixabay.com
- Search for your career profession
- Cite the image source in the caption

### For Citations:
Use one of these formats and put them in the "More Information" section:

**MLA Example:**
```
Bureau of Labor Statistics. "Software Developers." 
Bureau of Labor Statistics, U.S. Department of Labor, 2023,
www.bls.gov/ooh/computer-and-information-technology/software-developers.htm.
```

---

## ✅ Before Submitting

Make sure:
- [ ] Your name is on the home page
- [ ] All 9 sections have content
- [ ] Each section has at least one image
- [ ] All images have captions
- [ ] All links work (click them!)
- [ ] Website looks good on mobile (test it!)
- [ ] Your resume PDF is linked
- [ ] Citations are included
- [ ] Website is deployed to GitHub Pages
- [ ] Link works from a different device

---

## 🆘 Need Help?

**Images not showing?**
- Check file paths are correct
- Make sure images are in the `images/` folder
- Verify spelling matches exactly

**Navigation not working?**
- Make sure all files are in the same folder
- Refresh the page (Ctrl+R or Cmd+R)
- Check browser console (F12) for errors

**Can't deploy to GitHub Pages?**
- Make sure your repo is PUBLIC (Settings → Visibility)
- Wait 1-2 minutes for GitHub to build your site
- Check the Pages settings again

---

## 🎨 Want to Customize Colors?

Open `styles.css` and change these at the top:

```css
:root {
    --primary-color: #2c3e50;      /* Dark blue - main color */
    --secondary-color: #3498db;    /* Bright blue - buttons */
    --accent-color: #e74c3c;       /* Red - highlights */
}
```

Try these color combinations:
- Professional: `#1e3a8a`, `#3b82f6`, `#dc2626`
- Modern: `#111827`, `#8b5cf6`, `#ec4899`
- Nature: `#065f46`, `#10b981`, `#f59e0b`

---

Good luck! You've got this! 🚀
