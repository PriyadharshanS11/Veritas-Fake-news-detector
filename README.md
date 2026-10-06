# 🛡️ Veritas - AI Fake News Detector & Live Press Intelligence

Veritas is a modern web application designed to detect fake news, analyze linguistic sensationalism, stream live real-time news RSS feeds, and fact-check viral social media claims across platforms.

---

## ✨ Key Features

1. **3D Interactive Newspaper Background**:
   - Built with Three.js rendering a procedural front-page newspaper mesh that dynamically tilts, rotates, and floats tracking mouse movements.

2. **AI Detector & Credibility Gauge**:
   - Analyzes headlines & article text against known rumor patterns, domain trust factors, and linguistic sensationalism flags.
   - Animated circular SVG credibility meter with confetti celebrations for high-credibility news.

3. **Live 2026 RSS Stream**:
   - Streams real-time news wires from *The Indian Express*, *The Hindu*, *BBC News*, and *Reuters*.
   - Dynamic `pubDate` calculation calculating real relative time (e.g. `Aug 25, 2026 — 15 mins ago`).
   - 100% active section links with Google News fallback search.

4. **Social Rumor Desk**:
   - Fact-checks viral claims across Instagram, WhatsApp forwards, X/Twitter, and TikTok.

---

## 🚀 Quick Setup & Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/veritas-fake-news-detector.git
   cd veritas-fake-news-detector
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 🛠️ Tech Stack
- **Framework**: React 18 + Vite
- **3D Graphics**: Three.js
- **Icons**: Lucide React
- **Animations**: Canvas Confetti
- **Styling**: Vanilla CSS (Modern Dark Newspaper Theme)
