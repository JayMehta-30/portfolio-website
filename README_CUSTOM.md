# Jay Mehta — The Sketchbook · V6

**A personalized interactive 3D portfolio** based on the supplied open-source hand-drawn Sketch Portfolio. It includes Jay's newest approved illustrated portrait, six real project stories, a 3D corridor, four immersive rooms, project galleries and interactive contact scene.

An accessible **HTML alternative is also included** and uses the same source-of-truth project data. Open `preview/index.html` right away after extracting the ZIP; it works offline and requires no npm installation. This is the lightweight edition, not the 3D WebGL application.

## Start the 3D experience

1. Install [Node.js](https://nodejs.org/en) 22 or newer; for the Vite 8 version pinned in `package-lock.json`, Node 22.12+ or Node 20.19+ is appropriate.
2. Open a terminal in this directory.
3. Run:

```bash
npm ci
npm run dev
```

4. Open the URL printed by Vite (usually `http://localhost:5173`). Click/tap the doors to enter; explore Gallery, About, Studio, Contact and use the on-screen map. **Read my portfolio** in the bottom-right opens the lightweight edition, also useful on slow phones.

## Build and publish

```bash
npm run build
npm run preview
```

Build output is written to `dist/`. You can host it on Cloudflare Pages: connect your GitHub repository, set build command to `npm run build`, and output directory to `dist`. `_redirects` handles known deep-link rooms. You can use the host's free subdomain initially. For Vercel or another host, add matching SPA rewrites for `/about`, `/gallery`, `/studio`, and `/contact`.

**We have not deployed it to a live domain.** You must run a real production build and browser test on your machine before public launch; this environment did not have npm dependencies available.

## Where to edit in the future

| Change | Edit |
| --- | --- |
| Name, intro, work, social links | `src/data/profile.js` |
| Downloadable resume PDF | `public/Jay_Mehta_Resume.pdf` (linked from `src/data/profile.js`) |
| Project list, links, descriptions | `src/data/projects.js` |
| Journey and employment | `src/data/journey.js` |
| Technical categories | `src/data/skills.js` |
| Your sketch portrait (full body) | `public/images/jay-avatar.png` |
| About-room square illustration | `public/images/jay-portrait-square.webp` |
| Main 3D project drawings | `public/textures/gallery/jay_*.webp` |
| Studio monitor artwork | `public/textures/studio/jay_monitor_*.webp` |
| Lightweight edition design | `scripts/generate-overview.mjs` |

After changing data files, rerun `npm run overview` (or `npm run build`) to regenerate `public/overview.html` and the offline `preview/index.html` from the same profile and project content. No committee or leadership sections are shown in the website. The separate downloadable resume DOES include the four committee and leadership roles, as Jay explicitly requested.

## How the portrait is used

The portrait is derived from the photograph and pencil artwork Jay provided. A carefully cropped full-body cut-out appears in the 3D corridor (`profile.avatar`), a taller crop appears in the entrance window, and a square framed head-and-torso portrait appears in the flying About scene (`profile.portrait`). The Open Graph share preview is in `public/images/jay-og.png`. To replace the portrait later, preserve the file dimensions/transparency where possible or update the texture mapping.

## Contact behavior

No third-party email service is configured. The 3D contact form uses a `mailto:` draft; **it does not send an email automatically**. If you add Web3Forms, carefully configure the allowed domain and spam protections; see `.env.example`. The HTML portfolio includes direct GitHub, LinkedIn and mailto links.

## Launch checklist

- [ ] Run `npm ci` and `npm run build` successfully on your computer.
- [ ] Open the 3D experience on a desktop and a real phone; check gallery cards, audio controls, room navigation, and contact.
- [ ] Open `preview/index.html` offline and `/overview.html` on the deployed site.
- [ ] Get permission where necessary to use client project logos, screenshots, and proprietary work.
- [x] Added a newly updated resume to the public site, including the leadership positions that Jay approved for the resume only. The 3D scene remains free of leadership sections.
- [ ] Confirm artwork, font, audio and code licenses from the upstream project before public/commercial publication. Public source availability alone does not grant rights to every bundled asset.
- [ ] When you know your final domain, configure absolute social-sharing image URLs, your sitemap and canonical URLs. No assumed personal domain was hard-coded.

## Content provenance

**Confirmed by Jay:** Current SWE work at Scanerio (APIs, frontend/backend, automation, bug fixes, databases); Quorum is a group movie-choice hackathon project; Ghanshyam Property & SPG are client websites; currently third-year B.Tech AI/ML with graduation in 2028; public GitHub profile; approved portrait artwork.

**From Jay's earlier resume:** Diploma, past ShadowFox role, AWS completions and remaining project details. Those can be updated when Jay provides newer evidence. No fictional growth/usage metrics were introduced.

See `GITHUB_PROJECT_NOTES.md` and `UPSTREAM_README.md` for prior project notes and upstream background.

## V6 portrait update

Replaced all of Jay’s old kurta portrait textures with the newer pencil illustration in a football jersey: the 3D corridor (`public/images/jay-avatar.png`), entrance window (`public/textures/entrance/avatar_window.webp`), About-room framed portrait (`public/images/jay-portrait-square.webp`), plus social metadata (`public/images/jay-og.png`) and the lightweight overview. No 3D interaction logic was changed.

## V6 resume download update

- A small, visible **Download resume · PDF** hand-drawn-style box sits above **Read my portfolio** in the bottom-right of the interactive 3D view, including on mobile.
- The updated resume is stored at `public/Jay_Mehta_Resume.pdf` (Vite will make it available at `/Jay_Mehta_Resume.pdf`).
- The lightweight HTML portfolio has a matching **Download resume** button, and the offline preview includes its own copy at `preview/assets/Jay_Mehta_Resume.pdf`.
- The **resume includes** ERAC Treasurer, Chanakya Technical Head, Enigma 24 Design Head, and Spectrum 2.0 Committee Member. The **website scene does not display** those committee/leadership details.
- To update it later, replace the PDF with the same filename and leave `src/data/profile.js` pointing to `/Jay_Mehta_Resume.pdf`.
- The accessible/screen-reader About content also includes a download link.
