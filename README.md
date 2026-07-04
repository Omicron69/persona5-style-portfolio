# Persona-Style Portfolio — Meraj Rahman

A Persona 5 menu-inspired portfolio, structured as Model–View–Controller.

## Structure

```
├── index.html            View skeleton — markup only, no logic or styles
├── css/
│   └── style.css         All styling (theme colors in :root at the top)
├── js/
│   ├── model.js          DATA — projects, skills, GitHub fetch, app state
│   ├── view.js           DOM — rendering, ransom lettering, wipe, cursor, sound
│   └── controller.js     EVENTS — keyboard/mouse input, navigation logic
└── assets/
    ├── sfx/select.mp3    Menu sound (plays on select/confirm)
    ├── cursors/          Animated cursor sprite strips (30 frames each)
    ├── menus/            per-screen backgrounds: home.jpg, skills.jpg, about.jpg,
    │                     contact.jpg (included) — add projects.jpg to complete the set
    ├── cv/               your downloadable CV (linked from About + Contact)
    ├── hero.png          ← optional: extra art layered on the home screen
    ├── me.jpg            ← add: your photo for the About polaroid
    └── projects/         ← add: card thumbnails
        ├── bsl.png, medcnn.png, gesture.png, rapidcheck.png   (featured)
        └── <RepoName>.png  (auto-matched to GitHub repos by exact name)
```

Missing images hide themselves — no broken icons.

## Editing content

Everything you'd normally want to change lives in **js/model.js**:
featured projects, skill bars, thumbnail overrides, your GitHub username.
Bio and contact links are plain HTML in **index.html**.
Colors are CSS variables at the top of **css/style.css**.

## Run locally

```
python3 -m http.server
```
then open http://localhost:8000 — opening index.html directly (file://)
blocks the audio fetch and GitHub API in most browsers.

## Deploy

Push the whole folder to a GitHub repo, enable Pages
(Settings → Pages → Deploy from branch → main → / root). Done.

## Controls

↑ / ↓ select · Enter confirm · Esc back · click the name to go home
