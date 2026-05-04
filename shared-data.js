// ═══════════════════════════════════════════════════════
// SHARED PROJECT DATA — edit here to update both pages
// ═══════════════════════════════════════════════════════

const PROJECTS = [
  {
    id: 'dealspace',
    num: '001',
    flag: '🇺🇸',
    country: 'United States',
    type: 'SaaS · Real Estate CRM',
    name: 'DealSpace',
    status: 'featured',
    statusLabel: 'Flagship',
    featured: true,
    colClass: 'col-7',
    tags: ['SaaS','Enterprise'],
    preview: null, // replace with live URL
    desc: 'Multi-tenant Real Estate CRM SaaS on Laravel. Full sales pipeline — embeddable lead capture scripts, configurable routing (First-to-Claim, Round Robin), VoIP via Twilio, two-way Gmail & Outlook sync, Google Calendar integration, Stripe 4-tier subscriptions, and real-time WebSocket notifications via Laravel Reverb.',
    stack: ['Laravel','Octane','React','Twilio','Stripe','Multi-tenancy','Azure','GCP'],
  },
  {
    id: 'cyrus',
    num: '002',
    flag: '🇪🇬',
    country: 'Egypt',
    type: 'Enterprise · Retail Management',
    name: 'Cyrus RMS',
    status: 'live',
    statusLabel: 'Live',
    featured: false,
    colClass: 'col-5',
    tags: ['Enterprise'],
    preview: null,
    desc: 'Enterprise retail system in two forms: cloud web admin dashboard + offline-first Electron desktop POS. Bi-directional sync via RabbitMQ. Full RTL, Arabic & English.',
    stack: ['React','TypeScript','Electron','RabbitMQ','Laravel', 'SQL Server'],
  },
  {
    id: 'fentec',
    num: '003',
    flag: '🇩🇿',
    country: 'Algeria',
    type: 'Mobility · IoT · Mobile',
    name: 'Fentec Mobility',
    status: 'live',
    statusLabel: 'Published',
    featured: false,
    colClass: 'col-5',
    tags: ['Mobile','IoT'],
    preview: "https://apps.apple.com/us/app/fentec-mobility/id6502032921", // replace with App Store URL
    previewLabel: 'App Store',
    desc: 'Complete e-scooter ecosystem from scratch — iOS & Android apps, operator dashboard, POS seller app, accounting module. IoT hardware integration for live scooter control. Google Maps geofencing.',
    stack: ['React Native','Laravel','IoT','Google Maps'],
  },
  {
    id: 'gspos',
    num: '004',
    flag: '🇪🇬',
    country: 'Egypt',
    type: 'FinTech · POS',
    name: 'GS POS',
    status: 'deployed',
    statusLabel: 'Deployed',
    featured: false,
    colClass: 'col-3',
    tags: ['FinTech','Mobile'],
    preview: null,
    desc: 'Android POS on Fawry PAX devices. Fawry SDK integration + Egypt Tax Authority real-time e-invoicing.',
    stack: ['React Native','Fawry SDK','E-invoicing'],
  },
  {
    id: 'instasports',
    num: '005',
    flag: '🇪🇬',
    country: 'Egypt · UMS',
    type: 'Ticketing · Sports',
    name: 'InstaSports',
    status: 'live',
    statusLabel: 'Live',
    featured: false,
    colClass: 'col-4',
    tags: ['Government','SaaS'],
    preview: null,
    desc: 'Sports ticketing platform backed by UMS. Full stadium/seating map management, match scheduling, per-tier ticket pricing, booking flows, and real-time analytics dashboard.',
    stack: ['Laravel','React','Bilingual'],
  },
  {
    id: 'alamein',
    num: '006',
    flag: '🇪🇬',
    country: 'Egypt · Gov · Official',
    type: 'Event Management · Government',
    name: 'Al-Alamein Festival EMS',
    status: 'deployed',
    statusLabel: 'Gov-Grade',
    featured: false,
    colClass: 'col-8',
    tags: ['Government','Enterprise'],
    preview: "https://elalameinfestival.com",
    cardStyle: 'background: linear-gradient(135deg, rgba(82,168,224,0.05), var(--ink2));',
    desc: "Official system managing and monitoring Egypt's Al-Alamein Festival — one of the country's largest annual cultural events. Backend, admin dashboard, and RESTful APIs integrating with React.js and Flutter mobile app. Served thousands of live concurrent users.",
    stack: ['Laravel','React.js','Flutter','REST API','Government'],
  },
  {
    id: 'dropship',
    num: '007',
    flag: '🇬🇧',
    country: 'United Kingdom',
    type: 'E-commerce · Automation',
    name: 'Drop Shipping Tracker',
    status: 'live',
    statusLabel: 'Live',
    featured: false,
    colClass: 'col-6',
    tags: ['E-commerce'],
    preview: null,
    desc: 'Real-time price & stock monitor for eBay drop shipping (Amazon UK + Costco UK sources). Replaced a manual checking team with automated scraping + instant WebSocket alerts — keeping humans in the loop to protect eBay accounts from policy violations.',
    stack: ['Laravel Octane','Reverb','WebSockets','Scraping','React'],
  },
  {
    id: 'uma',
    num: '008',
    flag: '🇪🇬',
    country: 'Egypt · UMS',
    type: 'EdTech · Media',
    name: 'UMA — United Media Academy',
    status: 'live',
    statusLabel: 'Live',
    featured: false,
    colClass: 'col-6',
    tags: ['EdTech'],
    preview: "https://uma-eg.com/",
    desc: 'Digital platform for UMS scholarship academy. Structured applications with multimedia uploads, a gamified virtual coin marketplace with bidding and auctions, user dashboards, and full admin CMS. Bilingual Arabic & English.',
    stack: ['Laravel','React','Marketplace','Bilingual'],
  },
  {
    id: 'sphinx',
    num: '009',
    flag: '🇪🇬',
    country: 'Egypt',
    type: 'Travel · Mobile',
    name: 'Sphinx Travel',
    status: 'live',
    statusLabel: 'Published',
    featured: false,
    colClass: 'col-4',
    tags: ['Mobile'],
    preview: "https://apps.apple.com/eg/app/sphinx-travel/id6482297668",
    previewLabel: 'App Store',
    desc: 'Full travel booking app — hotels, tours, restaurants, car rentals. In-app chat, push notifications, Google OAuth, live currency rates.',
    stack: ['React Native','Laravel','App Store'],
  },
  {
    id: 'dawlet',
    num: '010',
    flag: '🇪🇬',
    country: 'Egypt',
    type: 'Voting Platform · Competition',
    name: 'Dawlet El Telawa',
    status: 'live',
    statusLabel: 'Live',
    featured: false,
    colClass: 'col-8',
    tags: ['Government'],
    preview: "https://dawlataltilawa.clicksegypt.net/",
    desc: 'Quran recitation competition voting platform with a multi-layered anti-abuse protection stack: hCaptcha, IP rate limiting, 30-day browser cookies, email uniqueness checks, device fingerprinting, and scheduled suspicious cluster purging.',
    stack: ['Laravel','React','hCaptcha','Fingerprinting','Cloudflare'],
  },
  // ── ADD NEW PROJECTS BELOW THIS LINE ──
  // Copy the object above and fill in your new project details.
  // The projects page will automatically pick it up.
  // Example:
  // {
  //   id: 'myproject',
  //   num: '011',
  //   flag: '🇪🇬',
  //   country: 'Egypt',
  //   type: 'Web · SaaS',
  //   name: 'My New Project',
  //   status: 'live',        // 'live' | 'deployed' | 'featured'
  //   statusLabel: 'Live',
  //   featured: false,
  //   colClass: 'col-6',    // col-3 | col-4 | col-5 | col-6 | col-7 | col-8 | col-9 | col-12
  //   tags: ['SaaS'],       // used for filtering: SaaS, Mobile, Enterprise, Government, IoT, FinTech, EdTech, E-commerce
  //   preview: 'https://myproject.com',
  //   previewLabel: 'Live Preview',
  //   desc: 'Description here.',
  //   stack: ['Laravel','React'],
  // },
];

const GALLERIES = {
  dealspace: {
    name: 'DealSpace', emoji: '🏢', color: '#f5a623',
    screens: [
      { img: 'imgs/dealspace/home-page-shows-managing-leads-or-people.png', label: 'Home Dashboard', caption: 'Home page showing managing leads or people — pipeline overview and team performance at a glance.' },
      { img: 'imgs/dealspace/managing-deals.png', label: 'Managing Deals', caption: 'Drag-and-drop deal management with full pipeline stages and deal tracking.' },
      { img: 'imgs/dealspace/managing-each-lead-follow-ups-and-data.png', label: 'Lead Follow-ups', caption: 'Detailed lead view — full follow-up history, notes, and contact data for each lead.' },
      { img: 'imgs/dealspace/control-your-whole-system-and-leads-automaticly.png', label: 'Automation Control', caption: 'Control your whole system and leads automatically — configurable routing and automated workflows.' },
      { img: 'imgs/dealspace/integrate-your-crm-account-with-any-third-party-and-track-campagins.png', label: 'Integrations', caption: 'Integrate your CRM with any third-party platform and track campaign performance in real time.' },
      { img: 'imgs/dealspace/preview-your-schedual-on-calendar-linked-to-google-calendar.jpeg', label: 'Calendar Sync', caption: 'Preview your schedule on a calendar linked to Google Calendar — two-way sync, appointments, and conflict checking.' },
      { img: 'imgs/dealspace/reporting-with-everything.png', label: 'Reporting', caption: 'Comprehensive reporting — agent activity, lead sources, campaign performance, and deal leaderboards.' },
    ]
  },
  cyrus: {
    name: 'Cyrus RMS', emoji: '🏪', color: '#52a8e0',
    screens: [
      { img: 'imgs/cyrus-crm/online-version.png', label: 'Web Dashboard', caption: 'Cloud-based admin dashboard — sales overview, inventory health, and branch performance.' },
      { img: 'imgs/cyrus-crm/offline-version.png', label: 'POS Interface', caption: 'Electron offline-first POS — full transaction management without internet dependency.' },
    ]
  },
  fentec: {
    name: 'Fentec Mobility', emoji: '🛴', color: '#52c97a',
    screens: [
      { img: 'imgs/fentec/1.png', label: 'Rider App Map', caption: 'Live map of nearby available scooters with real-time status, battery levels, and geofenced zones.' },
      { img: 'imgs/fentec/2.png', label: 'Active Ride', caption: 'Ride in progress — live route tracking, elapsed time, distance, and cost counter.' },
      { img: 'imgs/fentec/3.png', label: 'Operator Dashboard', caption: 'Fleet management — all scooters on map, live status, IoT lock/unlock commands, zone management.' },
      { img: 'imgs/fentec/4.png', label: 'POS Seller App', caption: 'On-ground seller interface — balance top-ups, cash transactions, customer onboarding.' },
    ]
  },
  gspos: {
    name: 'GS POS', emoji: '💳', color: '#f07178',
    screens: [
      { img: 'imgs/gs/1.png', label: 'POS Homescreen', caption: 'Main sales interface on Fawry PAX device — product catalog, barcode scanner integration.' },
      { img: 'imgs/gs/2.png', label: 'Transaction Flow', caption: 'Sale transaction in progress — hardware payment terminal triggered directly from the app.' },
      { img: 'imgs/gs/4.png', label: 'E-Invoice', caption: 'Real-time electronic receipt generated and submitted to Egypt Tax Authority on every sale.' },
      { img: 'imgs/gs/5.png', label: 'Returns & Voids', caption: 'Return and void management with full audit trail and printer receipt output.' },
    ]
  },
  instasports: {
    name: 'InstaSports', emoji: '⚽', color: '#52c97a',
    screens: [
      { img: 'imgs/instasports/1.png', label: 'Analytics Dashboard', caption: 'Real-time admin analytics — total users, tickets sold, pending bookings, gender distribution, monthly revenue chart.' },
      { img: 'imgs/instasports/2.png', label: 'Stadium Setup', caption: 'Multi-level seating map configuration — VIP, General, and custom tiers with per-tier pricing.' },
      { img: 'imgs/instasports/3.png', label: 'Match Management', caption: 'Match scheduling — link clubs, stadium, tournament, supplier, and sport type with ticket stock.' },
      { img: 'imgs/instasports/4.png', label: 'Booking Review', caption: 'Incoming booking requests with approve/reject flows and detailed customer information.' },
    ]
  },
  alamein: {
    name: 'Al-Alamein Festival', emoji: '🎪', color: '#c792ea',
    screens: [
      { img: 'imgs/elalamin/1.png', label: 'Event Dashboard', caption: 'Real-time festival operations dashboard — active events, attendee counts, live schedule monitoring.' },
      { img: 'imgs/elalamin/2.png', label: 'Schedule Manager', caption: 'Event scheduling interface — sessions, stages, time slots, and media update management.' },
      { img: 'imgs/elalamin/3.png', label: 'Mobile App View', caption: 'Flutter mobile companion — attendee-facing schedule, maps, and live updates synced to backend.' },
      { img: 'imgs/elalamin/4.png', label: 'Attendee Management', caption: 'Attendee tracking for thousands of concurrent live festival users.' },
    ]
  },
  dropship: {
    name: 'Drop Shipping Tracker', emoji: '📦', color: '#f5a623',
    screens: [
      { label: 'Alert Center', caption: 'Real-time notification center — price changes and stock alerts fired instantly via WebSockets.' },
      { label: 'Product Catalog', caption: 'Tracked product listing — each eBay item mapped to its Amazon/Costco UK source product.' },
      { label: 'Dashboard Overview', caption: 'Catalog health at a glance — flagged, resolved, and pending review counts.' },
      { label: 'Price Change Alert', caption: 'Detailed alert view — exact price delta, timestamp, source URL, and action required.' },
    ]
  },
  uma: {
    name: 'UMA Academy', emoji: '🎓', color: '#82aaff',
    screens: [
      { img: 'imgs/uma/1.png', label: 'Academy Homepage', caption: 'Public-facing course and major listings with full objectives, FAQs, and media content.' },
      { img: 'imgs/uma/2.png', label: 'Application Form', caption: 'Multi-step application with custom questions, multimedia file uploads, and auto-save progress.' },
      { img: 'imgs/uma/3.png', label: 'Marketplace', caption: 'Virtual coin marketplace — earn coins, bid in auctions, purchase packages, leave reviews.' },
    ]
  },
  sphinx: {
    name: 'Sphinx Travel', emoji: '✈️', color: '#f5a623',
    screens: [
      { img: 'imgs/sphinx/1.png', label: 'Home Feed', caption: 'Curated homepage — featured hotels, tours, and advertisements selected by the admin team.' },
      { img: 'imgs/sphinx/2.png', label: 'Hotel Listing', caption: 'Room-level hotel browsing with photos, amenities, pricing, and ratings per room type.' },
    ]
  },
  dawlet: {
    name: 'Dawlet El Telawa', emoji: '🕌', color: '#c3e88d',
    screens: [
      { img: 'imgs/dawlet-eltelawa/1.png', label: 'Voting Interface', caption: 'Clean public voting page — contestant profiles, competition details, and one-click vote submission.' },
      { img: 'imgs/dawlet-eltelawa/2.png', label: 'Contestant Profiles', caption: 'Individual contestant pages with bio, recitation details, and current vote standings.' },
      { img: 'imgs/dawlet-eltelawa/3.png', label: 'Protection Layer', caption: 'Multi-layer anti-abuse system — hCaptcha, IP limiting, device fingerprinting, and cookie verification.' },
      { img: 'imgs/dawlet-eltelawa/4.png', label: 'Admin Dashboard', caption: 'Competition management — contestant control, vote monitoring, suspicious cluster detection and purging.' },
    ]
  }
};

// ═══════════════════════════════════════════════════════
// FULL PROJECT DESCRIPTIONS — shown in the Details popup
// ═══════════════════════════════════════════════════════
const FULL_DESCRIPTIONS = {
  dealspace: {
    subtitle: 'Multi-tenant Real Estate CRM SaaS · Laravel Ecosystem · Clean Architecture',
    sections: [
      { heading: null, body: 'Acted as the sole system architect and backend engineer for this US-based real estate SaaS. After conducting a comprehensive 1-month market analysis, I translated complex real estate workflows into a scalable technical roadmap, resulting in a high-performance CRM tailored for real estate teams.' },
      { heading: 'Modular Architecture & Concurrency', body: 'Architected a Modular Monolith (Clean Architecture) leveraging Laravel Octane (FrankenPHP). Enforced strict separation of business logic by isolating domains (Auth, Subscriptions, Payments, Leads, Deals). Implemented interface-driven communication between modules to ensure loose coupling, allowing for a seamless future transition to Microservices.' },
      { heading: 'Performance Optimization', body: 'Addressed race conditions and concurrency challenges inherent in persistent PHP execution. Optimized database loads by designing a stateless AuthN system, utilizing a hybrid real-time database validation fallback only for highly sensitive operations. Engineered a highly optimized schema with strategic indexing to ensure strict tenant data isolation.' },
      { heading: 'Communication & Workflows', body: 'Integrated complex third-party services directly into the backend: VoIP via Twilio, automated lead routing algorithms (Round Robin, First-to-Claim), two-way calendar sync via webhooks, and real-time event broadcasting using Laravel Reverb and Redis.' },
    ],
  },
  cyrus: {
    subtitle: 'Unified Enterprise RMS Ecosystem · Laravel · RabbitMQ · React/Electron',
    sections: [
      { heading: null, body: 'Architected and contributed to a large-scale enterprise Retail Management System (RMS) deployed across Egyptian businesses. Focused on building a reliable infrastructure connecting a cloud-based web platform with an offline-first POS application.' },
      { heading: 'Offline-First Engine', body: 'Engineered an offline-capable version of the POS system from scratch. Empowered retail staff to execute full operations (sales, returns, cash management) without internet dependency, utilizing RabbitMQ and REST APIs for reliable, bi-directional data synchronization to the cloud backend.' },
      { heading: 'Scalable Architecture', body: 'Leveraged business analysis to translate client needs into scalable backend requirements. Established a unified technical documentation framework for the engineering team, covering cross-module interactions, AuthN, and AuthZ to maintain architectural integrity.' },
    ],
  },
  fentec: {
    subtitle: 'High-Concurrency Mobility Platform · Laravel Octane (Swoole) · Redis · IoT',
    sections: [
      { heading: 'The Business Pivot', body: 'Co-led the technical and business strategy to save the investor\'s vision when we hit a market hurdle regarding digital payments in Algeria. Engineered an alternative offline-to-online digital wallet ecosystem, creating a "Seller App" for local kiosks to sell ride points for cash, alongside an "Accountant App" for financial settlements.' },
      { heading: 'High-Frequency IoT Backend', body: 'Built a high-concurrency backend powered by Laravel Octane (Swoole). Successfully integrated a Chinese IoT hardware SDK to control the fleet. To prevent the main database from crashing under continuous, per-second IoT data streams, I routed all real-time pings and live tracking operations strictly through Redis.' },
      { heading: 'Vector-Based Geofencing', body: 'Researched and implemented custom vector-based algorithms to build a highly accurate geofencing engine. This allowed automatic tracking of scooters and real-time prevention of entry into restricted zones.' },
      { heading: 'Real-Time Financial Engine', body: 'Architected a live balance-tracking system synchronized directly with live trip monitors, designed to automatically terminate rides the exact moment a user\'s wallet depleted.' },
    ],
  },
  gspos: {
    subtitle: 'Fawry-Integrated POS & ETA Compliance · React Native · REST APIs',
    sections: [
      { heading: null, body: 'Independently managed the end-to-end integration of the Fawry SDK into an Android POS system for gas stations, ensuring secure and reliable processing of external financial transactions directly on PAX hardware.' },
      { heading: 'E-Invoicing Architecture', body: 'Integrated the platform with the Egyptian Tax Authority\'s (ETA) e-invoicing system. Engineered the backend logic to automatically generate and submit compliant electronic receipts in real-time, operating under strict zero-margin-for-error governmental standards.' },
    ],
  },
  instasports: {
    subtitle: 'Scalable Sports Ticketing Backend · Laravel · RBAC · Audit Logging',
    sections: [
      { heading: null, body: 'Built the scalable backend for a UMS-backed sports ticketing startup. Engineered the platform to handle high traffic during major match releases across Egyptian stadiums.' },
      { heading: 'Complex Hierarchies & RBAC', body: 'Architected a complex data structure to manage sports categories, clubs, tournaments, and multi-level stadium seating maps. Implemented strict Role-Based Access Control (RBAC) ensuring precise data scoping for Admins, Supervisors, and Suppliers.' },
      { heading: 'Data Integrity', body: 'Developed a comprehensive audit logging system tracking every create, update, and delete action with before/after data snapshots to maintain absolute system integrity and prevent internal fraud.' },
    ],
  },
  alamein: {
    subtitle: 'Mission-Critical Event Management · Laravel · Government-Grade',
    sections: [
      { heading: null, body: 'Architected and developed the core backend for the official event management system of Egypt\'s Al-Alamein Festival. Operated in a high-pressure environment, serving thousands of live concurrent users during active festival periods.' },
      { heading: 'High Availability', body: 'Delivered a highly reliable RESTful API infrastructure integrating with React.js and Flutter frontends. The system successfully powered operations for two consecutive years under intense operational load, strict deadlines, and zero tolerance for downtime.' },
    ],
  },
  dropship: {
    subtitle: 'High-Performance Price Monitor · Laravel Octane · WebSockets',
    sections: [
      { heading: null, body: 'Developed a high-performance inventory tracking system to optimize drop-shipping workflows from Amazon UK and Costco UK, replacing a manual team of checkers.' },
      { heading: 'Real-Time Automation', body: 'Implemented semi-automated scraping via Laravel cron jobs. Instead of auto-updating eBay (which violates policy), the system uses Laravel Reverb to fire real-time WebSocket notifications to agents the moment a price or stock change is detected, maintaining strict eBay compliance.' },
    ],
  },
  uma: {
    subtitle: 'E-Learning & Marketplace Backend · Laravel · Media Processing',
    sections: [
      { heading: null, body: 'Delivered the backend infrastructure for the United Media Academy (UMA) e-learning platform, ensuring pixel-perfect accuracy and high availability under the United Media Services (UMS) umbrella.' },
      { heading: 'Platform Features', body: 'Engineered a structured application system supporting multimedia uploads, combined with a gamified virtual coin marketplace featuring bidding and auctions. Fully localized for bilingual (Arabic & English) audiences.' },
    ],
  },
  sphinx: {
    subtitle: 'Full-Featured Travel API Architecture · Laravel · React Native',
    sections: [
      { heading: null, body: 'Designed the backend and mobile architecture for a comprehensive travel booking ecosystem covering hotels, tours, restaurants, and car rentals.' },
      { heading: 'Features', body: 'Implemented in-app chat systems, secure user authentication (Google OAuth), live currency exchange calculations, and robust reservation tracking APIs serving the cross-platform mobile app.' },
    ],
  },
  dawlet: {
    subtitle: 'High-Traffic National Voting Backend · Laravel · Security Architecture',
    sections: [
      { heading: null, body: 'Engineered the backend for a major national Quran recitation competition, scrutinized by the Ministry of Endowments. The platform successfully handled over 500,000 active users within its first week.' },
      { heading: 'Multi-Layered Anti-Abuse Stack', body: 'To manage massive concurrent voting requests and prevent fraud, I implemented robust security layers. This included request signatures, hCaptcha integration, strict IP rate-limiting, device fingerprinting, and scheduled background jobs to detect and purge suspicious voting clusters in real-time.' },
    ],
  },
};
