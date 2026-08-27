---
title: Deckaura Tarot Dataset Explorer
emoji: 🔮
colorFrom: purple
colorTo: indigo
sdk: static
app_file: index.html
pinned: false
license: mit
short_description: Search Deckaura's open 78-card tarot dataset.
---

# Deckaura Tarot Dataset Explorer

An interactive browser for the open 78-card tarot dataset published by [Deckaura](https://deckaura.com).

The explorer and its bundled dataset are available under the MIT License.

## Features

- Search across upright, reversed, love, and career meanings
- Filter Major and Minor Arcana
- Open the canonical Deckaura guide for every result
- Uses the maintained CSV from the Deckaura Tarot MCP repository

## Run

```bash
npm start
```

Then open `http://localhost:3000`.

## Publish as a Hugging Face Space

The repository card is configured for Hugging Face's free static Space SDK. After authenticating as `Blacik`, publish the same files with:

```bash
hf repo create Blacik/deckaura-tarot-dataset-explorer --repo-type space --space_sdk static --exist-ok
hf upload Blacik/deckaura-tarot-dataset-explorer . . --repo-type space --include README.md CITATION.cff index.html app.js styles.css
```

## Sources

- [Deckaura Tarot Card Database](https://deckaura.com/pages/tarot-card-database)
- [Deckaura Open Data & AI Resources](https://deckaura.com/pages/ai-data-sources)
- [Hugging Face dataset](https://huggingface.co/datasets/Blacik/deckaura-tarot-card-meanings)
- [Permanent DOI archive](https://doi.org/10.5281/zenodo.19475329)

GitHub's **Cite this repository** panel is configured through [`CITATION.cff`](CITATION.cff).

