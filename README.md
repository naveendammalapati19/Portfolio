# Naveen Dammalapati — Cinematic JavaScript Portfolio

A responsive, cinematic portfolio built with **HTML, CSS, and vanilla JavaScript**.

## Features

- Dark Azure/DevOps visual theme
- Responsive mobile navigation
- Animated particle background
- Scroll reveal animations
- Active navigation highlighting
- Cursor glow interaction
- 3D hover/tilt project cards
- Experience, skills, certification, and contact sections
- Resume download
- Two professional portrait images
- GitHub Pages compatible

## Before publishing

Open `script.js` and change:

```js
githubUsername: "naveendammalapati19",
  githubUrl: "https://github.com/naveendammalapati19",
```

Then add your real repository links:

```js
projectRepos: [
  "https://github.com/YOUR_GITHUB_USERNAME/repo-1",
  "https://github.com/YOUR_GITHUB_USERNAME/repo-2",
  "https://github.com/YOUR_GITHUB_USERNAME/repo-3"
]
```

The current project cards are **portfolio project concepts aligned with your experience**, not claims that those repositories already exist.

## Run locally

You can simply open `index.html` in a browser.

For a local development server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages

1. Create a new GitHub repository, for example `naveen-portfolio`.
2. Upload all files from this folder.
3. Commit and push.
4. Open **Repository Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select the `main` branch and `/ (root)`.
7. Save. GitHub will provide your public portfolio URL.

## Project structure

```text
Naveen_Cinematic_JS_Portfolio/
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
    ├── naveen-portrait-main.jpeg
    ├── naveen-portrait-alt.jpeg
    ├── Naveen_Dammalapati_Resume.pdf
    └── Naveen_Dammalapati_Resume.docx
```

## Contact

- Email: naveendammalapati1@gmail.com
- Phone: +1 416-768-9687
- LinkedIn: https://www.linkedin.com/in/naveen-dammalapati1904toronto
- GitHub: https://github.com/naveendammalapati19
- GitHub profile repository: https://github.com/naveendammalapati19/naveendammalapati19


> GitHub profile connected: https://github.com/naveendammalapati19


## Resume download

The **Download Resume** button downloads the updated Word resume: `assets/Naveen_Dammalapati_Resume_Updated.docx`.

## Image fix

The two portfolio portrait images are embedded directly inside `index.html` as data URLs.
This prevents broken-image issues caused by missing files, wrong paths, filename case,
or GitHub Pages repository subpaths.

For GitHub Pages, upload the contents of this folder directly so `index.html` is at the repository root.
