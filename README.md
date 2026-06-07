# Arabic Words Quiz

A simple, static quiz website for practising the most common words of the Qur'an (Lessons L1-L5).

## Features

- Asks for the user's name
- Choose one or more lessons (L1-L5) - L1 & L2 selected by default
- Configurable options (under a "Configuration" section):
  - **Number of questions** (default 5)
  - **Language toggle**: English or Urdu
  - **Quiz type**: Arabic to language, or language to Arabic
  - **Answer feedback**: reveal on each question, or show a summary at the end (default)
- Random multiple-choice questions drawn from the selected lessons
- End-of-quiz score shown in a circular gauge, plus a per-question review

## Lessons

| Lesson | Topic |
| ------ | ----- |
| L1 | Demonstrative, relative & negative particles |
| L2 | Pronouns - object & possessive |
| L3 | Pronouns - subject |
| L4 | Interrogatives |
| L5 | Possession & other particles |

Word data was transcribed from the lesson images (`L1.jpeg`-`L5.jpeg`). English translations were added for the language toggle.

## Run locally

It is a plain HTML/CSS/JS site with no build step. Just open `index.html` in a browser, or serve the folder:

```bash
# Python
python -m http.server 8000
# then open http://localhost:8000
```

## Project structure

```
index.html    # markup and screens
styles.css    # styling, Arabic/Urdu fonts, RTL handling
app.js        # word dataset + quiz logic
```

## Deploy (GitHub Pages)

This repository is published with GitHub Pages from the `main` branch root. Any push to `main` updates the live site.
