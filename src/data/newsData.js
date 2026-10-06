export const sampleDatasets = {
  india: [
    {
      id: "ind-1",
      title: "RBI clarifies no Micro-GPS Chips exist in currency notes following recurring social media viral rumors",
      content: "Viral social media posts claim that the Reserve Bank of India (RBI) has embedded Nano GPS chips (NGC) inside currency notes. According to the claims, satellite tracking can locate notes hidden 120 meters underground without any power source.",
      category: "India",
      region: "India National",
      isFake: true,
      verdict: "DEBUNKED FAKE",
      score: 12,
      analysis: {
        sensationalism: "Extreme (92%)",
        domainTrust: "Low / Unverified Social Posts",
        factualMatch: "0% - Officially denied by RBI",
        keyFlags: ["Impossible technology claims", "No official RBI circular", "Pseudoscientific terminology"],
        explanation: "RBI officially issued a press release clarifying that no GPS chips exist in currency notes. Signal transmission from paper currency without a power supply violates fundamental laws of physics."
      },
      source: "WhatsApp & Facebook Viral Claim",
      factCheckedBy: "PIB Fact Check & RBI Statement"
    },
    {
      id: "ind-2",
      title: "ISRO outlines roadmap for 2026 Gaganyaan human spaceflight mission & Chandrayaan-4 lunar sample return",
      content: "Indian Space Research Organisation (ISRO) chairman announced progress on the uncrewed Gaganyaan test flights and preliminary payload integration for the Chandrayaan-4 lunar sample return mission planned for 2026.",
      category: "India",
      region: "India National",
      isFake: false,
      verdict: "VERIFIED REAL",
      score: 98,
      analysis: {
        sensationalism: "Low (10%)",
        domainTrust: "Verified Scientific Source (ISRO)",
        factualMatch: "99% - Matches official space agency press release",
        keyFlags: ["Verified official press release", "ISRO official logs"],
        explanation: "Confirmed by ISRO official announcements and published across official space research channels."
      },
      source: "ISRO Official Press Release",
      factCheckedBy: "ISRO & International Space Science Board"
    },
    {
      id: "ind-3",
      title: "UNESCO announces Indian National Anthem 'Jana Gana Mana' as the Best National Anthem in the World",
      content: "Viral messages circulating across social media groups state that UNESCO has officially declared India's National Anthem 'Jana Gana Mana' as the best national anthem in the world after a worldwide evaluation.",
      category: "India",
      region: "India National",
      isFake: true,
      verdict: "VIRAL HOAX",
      score: 15,
      analysis: {
        sensationalism: "High (85%)",
        domainTrust: "Unverified Forward Chain",
        factualMatch: "0% - UNESCO never holds anthem competitions",
        keyFlags: ["Old internet chain letter", "No UNESCO official document"],
        explanation: "UNESCO officially confirmed that it has never conducted any poll or declaration regarding national anthems."
      },
      source: "Social Media Chain Message",
      factCheckedBy: "UNESCO Official Statement & BoomLive"
    }
  ],
  foreign: [
    {
      id: "for-1",
      title: "NASA warns Earth will experience 15 consecutive days of complete darkness due to planetary alignment",
      content: "A widely shared article claims that NASA administrator confirmed Earth will be plunged into total darkness for 15 days due to an astronomical event between Venus and Jupiter causing hydrogen release.",
      category: "Foreign",
      region: "Global / International",
      isFake: true,
      verdict: "DEBUNKED HOAX",
      score: 8,
      analysis: {
        sensationalism: "Extreme (95%)",
        domainTrust: "Fake News Clickbait Site",
        factualMatch: "0% - Physically impossible celestial mechanics",
        keyFlags: ["Re-hashed annual scam article", "No NASA advisory", "False scientific terminology"],
        explanation: "NASA has repeatedly debunked this recurring internet hoax. No planetary alignment can block solar illumination across the planet."
      },
      source: "Clickbait Web Portals",
      factCheckedBy: "NASA Public Affairs & Reuters Fact Check"
    },
    {
      id: "for-2",
      title: "NASA James Webb Telescope observations provide high-resolution spectroscopic data on exoplanet atmospheres",
      content: "Astronomers analyzing data from NASA's James Webb Space Telescope have published detailed atmospheric transmission spectrum profiles for exoplanets, identifying water vapor, carbon dioxide, and methane gas signatures.",
      category: "Foreign",
      region: "Global / International",
      isFake: false,
      verdict: "VERIFIED REAL",
      score: 96,
      analysis: {
        sensationalism: "Low (14%)",
        domainTrust: "NASA / ESA / Astrophysical Journal",
        factualMatch: "98% - Published scientific research",
        keyFlags: ["Peer-reviewed journal publication", "Official telescope data archive"],
        explanation: "Directly corroborated by NASA Webb Mission science team publication in peer-reviewed scientific journals."
      },
      source: "NASA Webb Telescope Science Release",
      factCheckedBy: "NASA Goddard & ESA Astrophysics"
    },
    {
      id: "for-3",
      title: "Viral video clip claims Eiffel Tower in Paris caught on massive destructive fire",
      content: "A dramatic video clip and photo showing the Eiffel Tower in Paris engulfed in massive smoke and fire flames went viral on TikTok and X, claiming a major disaster destroyed the monument.",
      category: "Foreign",
      region: "Global / International",
      isFake: true,
      verdict: "AI GENERATED FAKE",
      score: 10,
      analysis: {
        sensationalism: "Extreme (98%)",
        domainTrust: "Unverified TikTok Video",
        factualMatch: "0% - Live Paris webcams show Eiffel tower intact",
        keyFlags: ["3D CGI / AI Generated visual artifacts", "No live news coverage", "Live webcams contradict claim"],
        explanation: "The viral imagery was created using 3D visual effects software (VFX). Live webcams in Paris and French authorities confirmed zero fire incidents."
      },
      source: "TikTok VFX Creator",
      factCheckedBy: "AFP Fact Check & France24"
    }
  ],
  tamilnadu: [
    {
      id: "tn-1",
      title: "TN Cyber Crime Police warns citizens against fake WhatsApp festival gift bonus links harvesting bank credentials",
      content: "A viral WhatsApp link circulating in Tamil Nadu claims that the Tamil Nadu government has launched an online portal where ration card holders can click a link and enter bank details to claim ₹5,000 gift bonus immediately.",
      category: "Tamil Nadu",
      region: "Tamil Nadu Regional",
      isFake: true,
      verdict: "PHISHING FRAUD",
      score: 5,
      analysis: {
        sensationalism: "High (88%)",
        domainTrust: "Suspicious APK / Phishing URL (.xyz)",
        factualMatch: "0% - TN Govt does not distribute schemes via WhatsApp links",
        keyFlags: ["Phishing domain URL", "Bank credential harvester", "No official TN DIPR announcement"],
        explanation: "Tamil Nadu DIPR (Department of Information and Public Relations) warned citizens against fake WhatsApp phishing links. Official government schemes are distributed directly via PDS ration shops or official government portals (.gov.in)."
      },
      source: "WhatsApp Forward Scam",
      factCheckedBy: "TN DIPR Fact Check Unit & Cyber Crime Police"
    },
    {
      id: "tn-2",
      title: "Tamil Nadu Government expands 'Pudhumai Penn' scheme providing ₹1,000 monthly allowance for female college students",
      content: "The Tamil Nadu Higher Education Department has expanded the Moovalur Ramamirtham Ammiyar Higher Education Assurance Scheme ('Pudhumai Penn'), crediting ₹1,000 per month directly into bank accounts of eligible female students who studied in government schools.",
      category: "Tamil Nadu",
      region: "Tamil Nadu Regional",
      isFake: false,
      verdict: "VERIFIED REAL",
      score: 97,
      analysis: {
        sensationalism: "Low (10%)",
        domainTrust: "Tamil Nadu Govt Portal & Leading Dailies",
        factualMatch: "100% - Budget allocation & G.O. issued",
        keyFlags: ["Government Order (G.O.) available", "Direct Benefit Transfer (DBT) records"],
        explanation: "Confirmed by Government Orders (G.O.) issued by the Social Welfare & Women Empowerment Department, Tamil Nadu."
      },
      source: "TN DIPR & The Hindu Tamil",
      factCheckedBy: "TN Social Welfare Department"
    },
    {
      id: "tn-3",
      title: "Satellite image shows massive Cyclone forming near Chennai coast bringing 100cm rain in 2 hours",
      content: "Viral social media posts in Tamil Nadu feature a dark red satellite map claiming an unprecedented super-cyclone is directly hitting Chennai within hours, urging people to evacuate immediately.",
      category: "Tamil Nadu",
      region: "Tamil Nadu Regional",
      isFake: true,
      verdict: "MISLEADING PANIC",
      score: 14,
      analysis: {
        sensationalism: "Extreme (94%)",
        domainTrust: "Social Media Rumor Channel",
        factualMatch: "5% - Misinterpreted old cloud imagery",
        keyFlags: ["Outdated weather map from 2015", "Contradicts IMD Met Dept bulletin"],
        explanation: "Regional Meteorological Centre (RMC Chennai) issued a statement confirming normal rainfall forecast and urged public not to believe viral panic posts."
      },
      source: "YouTube Clickbait Weather Channels",
      factCheckedBy: "RMC Chennai & TN Disaster Management Authority"
    }
  ]
};

// Current 2026 Headlines for Initial State (Fallback until RSS stream loads live)
export const initialLiveScrapedNews = [
  {
    id: "live-real-1",
    title: "Indian Express: Union Cabinet approves Digital India expansion & AI computing infrastructure investments",
    source: "The Indian Express",
    category: "India",
    time: "August 2026 — 15 mins ago",
    isNew: true,
    snippet: "New Delhi: Union Cabinet chaired by PM Narendra Modi approved new fund allocations for IndiaAI mission and national digital broadband infrastructure.",
    verdict: "VERIFIED REAL",
    score: 98,
    url: "https://indianexpress.com/section/india/"
  },
  {
    id: "live-real-2",
    title: "The Hindu: Tamil Nadu Police Cyber Crime Wing alerts public to report cyber financial frauds on helpline 1930",
    source: "The Hindu",
    category: "Tamil Nadu",
    time: "August 2026 — 32 mins ago",
    isNew: false,
    snippet: "Chennai: TN Police Cyber Crime Wing urged citizens to dial national helpline 1930 within the golden hour to freeze unauthorized bank transfers.",
    verdict: "VERIFIED REAL",
    score: 97,
    url: "https://www.thehindu.com/news/national/tamil-nadu/"
  },
  {
    id: "live-real-3",
    title: "BBC News: Global tech coalition adopts C2PA digital provenance standards for authenticating AI imagery",
    source: "BBC World",
    category: "Foreign",
    time: "August 2026 — 45 mins ago",
    isNew: false,
    snippet: "London: International news organizations and technology providers deploy cryptographic watermarks to tag verified news photos.",
    verdict: "VERIFIED REAL",
    score: 96,
    url: "https://www.bbc.com/news/world"
  },
  {
    id: "live-real-4",
    title: "Dina Thanthi: Chennai Metro Rail Phase-II driverless train signal & track trials conducted on elevated stretch",
    source: "Daily Thanthi",
    category: "Tamil Nadu",
    time: "August 2026 — 1 hour ago",
    isNew: false,
    snippet: "Chennai: CMRL conducted successful track compliance and signal integration trial runs on the Poonamallee bypass corridor.",
    verdict: "VERIFIED REAL",
    score: 99,
    url: "https://www.dailythanthi.com/"
  },
  {
    id: "live-real-5",
    title: "Reuters: Reserve Bank of India Monetary Policy Committee maintains benchmark repo rate at 6.5 percent",
    source: "Reuters",
    category: "India",
    time: "August 2026 — 2 hours ago",
    isNew: false,
    snippet: "Mumbai: The RBI Monetary Policy Committee voted unanimously to keep the key repo rate unchanged at 6.50% while monitoring liquidity.",
    verdict: "VERIFIED REAL",
    score: 98,
    url: "https://www.reuters.com/world/india/"
  }
];

export const dynamicNewsPool = [
  {
    id: "dyn-real-1",
    title: "Indian Express: SEBI issues advisory warning investors against illegal stock recommendation groups on Telegram",
    source: "The Indian Express",
    category: "India",
    snippet: "Mumbai: Capital markets regulator SEBI warned investors against unregistered entities offering fake stock tips and high-yield investment schemes.",
    verdict: "VERIFIED REAL",
    score: 96,
    url: "https://indianexpress.com/section/business/"
  },
  {
    id: "dyn-real-2",
    title: "The Hindu: Tamil Nadu Cabinet approves state industrial infrastructure expansion policy",
    source: "The Hindu",
    category: "Tamil Nadu",
    snippet: "Chennai: Chief Minister of Tamil Nadu approved the revised state industrial policy aimed at boosting manufacturing and tech jobs.",
    verdict: "VERIFIED REAL",
    score: 98,
    url: "https://www.thehindu.com/news/national/tamil-nadu/"
  },
  {
    id: "dyn-real-3",
    title: "Reuters: European Union enacts landmark rules regulating artificial intelligence deployment",
    source: "Reuters",
    category: "Foreign",
    snippet: "Brussels: The European Parliament officially passed landmark legislation regulating AI systems based on risk levels and transparency tags.",
    verdict: "VERIFIED REAL",
    score: 97,
    url: "https://www.reuters.com/technology/"
  },
  {
    id: "dyn-real-4",
    title: "PIB Fact Check: Ministry of Power debunks viral notification claiming nationwide 8-hour electricity shutdown",
    source: "PIB India",
    category: "India",
    snippet: "New Delhi: Government press bureau confirmed that no nationwide power shutdown notice was issued by the Ministry of Power.",
    verdict: "DEBUNKED FAKE",
    score: 12,
    url: "https://pib.gov.in/"
  }
];

export const initialViralSocialPosts = [
  {
    id: "soc-dedup-1",
    platform: "Instagram",
    handle: "@viral_factcheck_india",
    shares: "4.8M Shares",
    likes: "890K Likes",
    badge: "INSTAGRAM REEL",
    imageCaption: "DO NOT WEAR SILK CLOTHES NEAR LED DIWALI LIGHTS! Instant static charge explosion reported in Mumbai market! (VIRAL HOAX)",
    claim: "Wearing silk sarees near LED decorative lights causes static spark explosions.",
    reality: "Physical chemistry experts & Mumbai Fire Department confirmed silk fabrics cannot spontaneously explode near ambient electric LED lights.",
    verdict: "DEBUNKED FALSE",
    velocity: "+14.2K shares/hr 🚀",
    factChecker: "Alt News & Mumbai Fire Brigade",
    statusColor: "white"
  },
  {
    id: "soc-dedup-2",
    platform: "WhatsApp",
    handle: "Forwarded Chain Scam",
    shares: "12M+ Forwards",
    likes: "N/A",
    badge: "WHATSAPP FORWARD",
    imageCaption: "🚨 EMERGENCY NOTICE FROM RBI: All ATM machines will charge ₹100 per transaction starting midnight tonight!",
    claim: "RBI introducing ₹100 flat fee per ATM withdrawal across India.",
    reality: "RBI officially issued a scam alert clarifying that standard free transaction limits remain active with standard inter-bank rules.",
    verdict: "FAKE FORWARD",
    velocity: "+45K forwards/hr ⚡",
    factChecker: "PIB Fact Check & RBI Statement",
    statusColor: "white"
  },
  {
    id: "soc-dedup-3",
    platform: "X / Twitter",
    handle: "@TechRant_Global",
    shares: "320K Retweets",
    likes: "1.4M Likes",
    badge: "TRENDING TOPIC",
    imageCaption: "Photo of Pope Francis walking down street wearing stylish white luxury puffer jacket (AI GENERATED)",
    claim: "Pope Francis spotted wearing a high-fashion luxury streetwear puffer jacket in Rome.",
    reality: "The photo was generated using Midjourney v5 AI by a Chicago visual creator. Millions believed it was authentic before AI rendering flaws were highlighted.",
    verdict: "AI GENERATED PHOTO",
    velocity: "+8.5K retweets/hr 🌀",
    factChecker: "Reuters Fact Check & AFP",
    statusColor: "white"
  },
  {
    id: "soc-dedup-4",
    platform: "Instagram",
    handle: "@chennai_ocean_watch",
    shares: "2.1M Views",
    likes: "450K Likes",
    badge: "VIRAL REEL",
    imageCaption: "Chennai Marina Beach water turns glowing electric blue neon due to bioluminescent algae bloom",
    claim: "Bioluminescent Noctiluca scintillans plankton glowing along Marina & ECR beach shores.",
    reality: "Oceanographers & TN Pollution Control Board verified natural bioluminescence occurred due to sea water temperature fluctuations.",
    verdict: "VERIFIED REAL FACT",
    velocity: "+18.9K likes/hr 🌊",
    factChecker: "National Institute of Ocean Technology",
    statusColor: "white"
  }
];

export const dynamicSocialPool = [
  {
    id: "soc-dedup-5",
    platform: "TikTok",
    handle: "@global_vfx_clips",
    shares: "1.9M Views",
    likes: "310K Likes",
    badge: "TIKTOK TREND",
    imageCaption: "Leaked footage claims ancient pyramids in Egypt emitting visible energy beams into space",
    claim: "Egyptian pyramids shooting energy beams into sky during solar eclipse.",
    reality: "Visual effects artists confirmed the video was created using Adobe After Effects particle CGI plugins.",
    verdict: "CGI VFX FAKE",
    velocity: "+22K views/min 🔥",
    factChecker: "Snopes & LeadStories",
    statusColor: "white"
  },
  {
    id: "soc-dedup-6",
    platform: "WhatsApp",
    handle: "Phishing Link Warning",
    shares: "850K Forwards",
    likes: "N/A",
    badge: "PHISHING SCAM",
    imageCaption: "Tamil Nadu Govt offering free laptop to all citizens who complete 3-minute online survey link",
    claim: "Government distributing free laptops via WhatsApp survey link.",
    reality: "TN Cyber Crime department issued warning against fraudulent phishing domains harvesting personal banking credentials.",
    verdict: "PHISHING SCAM",
    velocity: "+12.4K forwards/hr ⚡",
    factChecker: "TN Cyber Crime Police",
    statusColor: "white"
  }
];
