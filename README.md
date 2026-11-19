# Pricing Tables That Convert — Six Decisions

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/pricing-table-six-decisions/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A responsive HTML/CSS/JavaScript recreation of the 114.7-second reference video.

## Six design decisions from the video
1. **Hierarchy — The price speaks first.** 52px price, quiet plan labels and detail.
2. **Spacing — Room to compare.** Three cards, 20px gaps, 24px padding, 14px feature rhythm.
3. **Emphasis — One plan to pick.** Pro is the recommended plan, with an accent border, badge and the only filled button.
4. **Depth — Lift the pick.** Featured card raised 16px with a soft shadow and stronger edge.
5. **Anchor — Show the saving.** Yearly billing is the default, showing 20% off and the monthly equivalent with old price struck through.
6. **Motion — Every click answers.** Hover lifts a card, billing updates prices, and plan actions confirm selection.

## Pricing data recreated from the video
- Starter: $15/month or $12/month billed yearly ($180/year)
- Pro: $30/month or $24/month billed yearly ($360/year)
- Team: $60/month or $48/month billed yearly ($720/year)

Plan features:
- Starter: 1 project, 5 GB storage, Email support
- Pro: 10 projects, 100 GB storage, Priority support
- Team: Unlimited, 1 TB storage, 24/7 support

## Run locally
No dependencies or build step required:
```bash
python3 -m http.server 8000
```
Open http://localhost:8000 or open `index.html` directly.

## Source fidelity
The video shows the rendered pricing UI and design annotations, not the original creator's HTML/CSS/JS source. This is a clean-room implementation based on visible text, prices, plan features, and layout. The checkout/contact buttons provide local UI feedback only; no payment processing or sales CRM is connected.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
