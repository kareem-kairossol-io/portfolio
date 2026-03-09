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
    subtitle: 'Multi-tenant Real Estate CRM SaaS · Laravel 11 · React',
    sections: [
      { heading: null, body: 'DealSpace is a multi-tenant SaaS CRM built on Laravel 11, designed specifically for real estate teams. It covers the complete sales workflow — from capturing and routing leads all the way through deal close — with deep communication tooling, automation, and team performance reporting, all scoped per organisation.' },
      { heading: 'Lead Management & Pipeline', body: 'Leads are captured automatically from websites via an embeddable tracking script with UTM and form-to-lead support, then distributed to agents through configurable routing rules — including First-to-Claim groups, Round Robin queues, and condition-based Lead Flow Rules with priority ordering. Agents manage contacts through a full pipeline of deal stages, with commission tracking, projected close dates, and file attachments at the deal level.' },
      { heading: 'Communication Stack', body: 'Communication is deeply integrated across every channel. Agents make and receive VoIP calls directly in the browser via Twilio, with call recording and outcome tracking. SMS is handled through Twilio as well. Email connects to Gmail and Outlook via OAuth, linking conversations directly to contacts. Marketing campaigns and Action Plans automate follow-up sequences with time-delayed steps, open/click tracking, and bounce analytics.' },
      { heading: 'Calendar & Tasks', body: 'The calendar system supports appointments with conflict checking, custom types and outcomes, and two-way sync with both Google Calendar and Outlook Calendar via webhooks. Tasks span all interaction types — calls, emails, showings, appointments — with due date reminders and filters for today, overdue, and upcoming.' },
      { heading: 'Business & Architecture', body: 'DealSpace runs Stripe-based subscriptions across four tiers (Free, Basic, Pro, Enterprise) with plan-level limits, invoices, and a self-serve Billing Portal. Real-time notifications via WebSockets through Laravel Reverb. Reporting covers agent activity, lead sources, calls, SMS, campaigns, deal leaderboards, and appointments — all Excel-exportable. Built on Laravel 11 with Octane, Repository + Service architecture, custom per-tenant Eloquent scopes, and stancl/tenancy powering domain-based multi-tenancy across all models.' },
    ],
  },
  cyrus: {
    subtitle: 'Enterprise Retail Management System · React · TypeScript · Electron · Laravel',
    sections: [
      { heading: null, body: 'Cyrus RMS is an enterprise-grade retail management solution built in two complementary versions: a cloud-based web platform and an offline-first desktop application, designed to cover the full spectrum of retail operations across single and multi-branch businesses.' },
      { heading: 'Web Platform', body: 'Built with React, TypeScript, and Tailwind CSS, the web platform delivers a comprehensive admin dashboard spanning sales, purchases, inventory, expenses, and financial management. Features a role-based access control system with granular, resource-level permissions, RTK Query-powered data fetching, and conditional module configuration. Key modules include catalog management, POS device configuration, warehouse and stock control, supplier and purchase order tracking, safe and cash management, expense tracking, and cross-module analytics. Supports Arabic & English with full RTL layout.' },
      { heading: 'Desktop POS App', body: 'Built with Electron, React, and TypeScript as an offline-first counterpart. Enables retail staff to run full POS operations — sales, returns, delivery orders, cash management, and session tracking — without requiring a constant internet connection. Data syncs bi-directionally with the cloud backend via REST API or RabbitMQ whenever connectivity is available, with rejected orders queued for resyncing. Supports Arabic & English with i18next.' },
      { heading: null, body: 'Together, the two versions form a unified retail ecosystem: the web platform handles administration, analytics, and configuration at management level, while the desktop app empowers frontline staff to operate seamlessly on the ground — online or offline.' },
    ],
  },
  fentec: {
    subtitle: 'Full-Stack E-Scooter Platform · React Native · Laravel · IoT · Algeria',
    sections: [
      { heading: null, body: 'Fentec Mobility is a complete, production-ready e-scooter rental ecosystem built entirely from the ground up — covering every layer of the product: customer mobile apps, operator management, seller tooling, accounting, and a public landing page. Think Lime or Bolt Scooters, built end-to-end for the Algerian market.' },
      { heading: 'Customer Mobile Apps (iOS & Android)', body: 'Built in React Native and published on both the App Store and Google Play. Customers locate nearby scooters on a live map, scan to unlock, track their ride in real time, manage payments and balance, and view their full ride history. Deeply integrated with Google Maps for routing, distance calculation, and geofencing.' },
      { heading: 'Operator Management Dashboard', body: 'A web-based admin dashboard giving operators complete fleet visibility and control — live scooter status, battery levels, and locations; user account management; pricing and ride zone configuration; payment processing; and overall platform performance. IoT integration enables real-time lock/unlock commands directly from the dashboard to the physical scooter hardware.' },
      { heading: 'POS Seller App', body: 'A dedicated point-of-sale app for on-the-ground sellers and agents — enabling balance top-ups, cash transactions, inventory management, and customer onboarding at physical locations, extending the platform\'s reach beyond the digital experience.' },
      { heading: 'Accounting Module', body: 'A standalone module tracking the full financial picture: ride revenue, seller transactions, balance top-ups, refunds, and profit reporting. Supports multi-seller accounting with breakdowns by zone, seller, or time period — providing the financial transparency needed to run the business at scale.' },
    ],
  },
  gspos: {
    subtitle: 'Fawry-Integrated Android POS · React Native · PAX Devices · Egypt Tax Authority',
    sections: [
      { heading: null, body: 'GS POS is an Android-based point-of-sale application built with React Native, developed in partnership with Fawry and deployed exclusively on Fawry PAX devices. A fully integrated retail sales solution for the Egyptian market, combining hardware-level device integration with compliance to Egypt\'s national tax infrastructure.' },
      { heading: 'Hardware Integration', body: 'Integrates directly with the Fawry SDK to leverage the PAX device\'s built-in capabilities — including the payment terminal, receipt printer, and barcode scanner — providing a seamless, hardware-native experience without external peripherals. Core operations cover sales transactions, returns, and void management.' },
      { heading: 'E-Invoicing Compliance', body: 'A key differentiator is the integration with the Egyptian Tax Authority\'s e-invoicing system. Every transaction automatically generates and submits a compliant electronic receipt to the tax system in real time, eliminating the manual burden of tax reporting and ensuring businesses remain fully compliant with Egyptian tax regulations.' },
      { heading: null, body: 'The result brings together Fawry\'s payment infrastructure, PAX hardware capabilities, and Egypt\'s national tax system into a single, easy-to-use retail application — helping merchants sell faster, operate legally, and settle tax obligations with zero friction.' },
    ],
  },
  instasports: {
    subtitle: 'Sports Ticketing Platform · Laravel · React · UMS-Backed · Egypt',
    sections: [
      { heading: null, body: 'InstaSports is an Egyptian sports ticketing startup — think Tazkarti, but built from the ground up as a scalable, modern platform for buying and selling tickets to sports events across Egypt. Backed by United Media Services (UMS / المتحدة), one of Egypt\'s largest media groups.' },
      { heading: 'Venue & Event Configuration', body: 'Admins configure the full hierarchy: sports categories, stadiums with multi-level seating maps (VIP, General, etc.), clubs, and tournaments. Matches are scheduled by linking clubs, stadiums, tournaments, suppliers, and sport types. Ticket pricing and stock per seating level are configurable per match. Incoming booking requests are reviewed and approved or rejected with reasons.' },
      { heading: 'Analytics & Access Control', body: 'Three user roles — Admin, Supervisor, and Supplier — each with scoped access. Admins get a real-time analytics dashboard covering total users, tickets sold, pending bookings, gender distribution, top countries, and a monthly sales chart tracking both volume and revenue. Suppliers are scoped to their assigned matches and tickets only.' },
      { heading: 'Content Management & Audit', body: 'Full bilingual website CMS — admins edit the public site\'s hero section, contact details, social links, and all legal pages using a rich-text Arabic & English editor. A full audit log tracks every create, update, and delete action across the system with before/after data snapshots.' },
    ],
  },
  alamein: {
    subtitle: 'Egypt\'s Al-Alamein Festival EMS · Laravel · React · Flutter · Government',
    sections: [
      { heading: null, body: 'Official event management system for Egypt\'s Al-Alamein Festival — one of the country\'s largest annual cultural events, operated under government-grade reliability requirements and serving thousands of live concurrent users during festival operations.' },
      { heading: 'System', body: 'Backend, admin dashboard, and RESTful APIs integrating with a React.js web frontend and Flutter mobile app. The system managed live event scheduling, session monitoring, attendee tracking, and real-time status updates — all built and deployed during active festival periods with zero tolerance for downtime.' },
    ],
  },
  dropship: {
    subtitle: 'Amazon & Costco UK Price Monitor · Laravel Octane · WebSockets · eBay',
    sections: [
      { heading: null, body: 'A semi-automated product tracking and alerting system built for a large-scale drop shipping business sourcing from Amazon and Costco UK and selling on eBay. Born from a real operational problem: the business employed a team to manually check hundreds of product listings every day — slow, expensive, and error-prone at scale.' },
      { heading: 'The Problem It Solves', body: 'Fully automated tools like AutoDS exist but come with a critical risk: they update eBay listings automatically, which violates eBay\'s policies and puts high-reputation seller accounts in jeopardy. The solution needed to sit in the middle — smart enough to detect changes instantly, but human enough to keep the eBay account safe.' },
      { heading: 'How It Works', body: 'The system scrapes product data from Amazon and Costco UK on a scheduled basis using Laravel cron jobs, continuously monitoring prices, stock availability, and product status. The moment a change is detected, it fires a real-time WebSocket notification via Laravel Reverb with exactly what changed. The team member then makes the update on eBay themselves — keeping a human in the loop and the account fully compliant.' },
      { heading: 'What Was Built', body: 'A product management interface mapping each eBay listing to its Amazon or Costco source. A real-time notification center surfaces alerts with full change details. A dashboard shows catalog health — flagged, resolved, or pending review. Built with Laravel Octane for high-performance scraping and notification delivery under heavy load.' },
    ],
  },
  uma: {
    subtitle: 'United Media Academy Platform · Laravel · React · Gamified Marketplace',
    sections: [
      { heading: null, body: 'UMA (United Media Academy) is the digital platform for United Media Services\' premier educational initiative — a scholarship and training academy dedicated to developing the next generation of Egyptian media professionals.' },
      { heading: 'Student Experience', body: 'The site showcases the academy\'s courses and majors with full details, objectives, FAQs, and media content. Applicants apply online through structured forms supporting custom questions and multimedia file uploads. Registered users manage their profiles, track applications, and participate in the platform\'s built-in marketplace.' },
      { heading: 'Marketplace', body: 'Users can earn and spend virtual coins, bid in auctions, purchase products and packages, and leave reviews — creating a gamified, community-driven ecosystem around the academy\'s content and offerings.' },
      { heading: 'Admin Backend', body: 'Staff control every aspect of the platform — configuring site-wide settings in both languages, managing homepage content, reviewing and rating applicant submissions, exporting applicant data, and maintaining all platform content from a single dashboard.' },
    ],
  },
  sphinx: {
    subtitle: 'Full-Featured Travel Booking App · React Native · Laravel · iOS & Android',
    sections: [
      { heading: null, body: 'Sphinx Travel is a full-featured travel booking application built for an Egyptian travel company, delivering a complete end-to-end experience for discovering, booking, and managing travel services — available on iOS and Android.' },
      { heading: 'Travel Discovery', body: 'Covers the four pillars of travel: hotels with room-level browsing, guided tours, restaurants, and car rentals. Each listing comes with photos, amenities, pricing, and ratings. A destinations explorer and live currency exchange rates provide full trip planning context.' },
      { heading: 'Booking & Account', body: 'Users register via email, phone, or Google OAuth and submit reservation requests for any service type, with full status tracking from a personal dashboard. An in-app chat system connects travelers with support staff, and users can leave detailed ratings after completing stays or tours.' },
      { heading: 'Admin Backend', body: 'Staff manage the full content catalog: hotels, rooms, tours, cars, restaurants, destinations, currencies, and languages. The homepage is fully curated — admins select which items appear on users\' home screens. Ratings go through a moderation queue, and the team can broadcast push notifications to the entire user base.' },
    ],
  },
  dawlet: {
    subtitle: 'Quran Competition Voting Platform · Laravel · React · Multi-layer Anti-abuse',
    sections: [
      { heading: null, body: 'Dawlet El Telawa is a web-based voting platform built for an online Quran recitation competition, enabling the public to follow contestants, cast votes, and track live results — while ensuring vote integrity through multiple layers of anti-abuse protection.' },
      { heading: 'Platform', body: 'Two sides: a public-facing experience where visitors browse contestants and submit votes; and an admin backend where organizers manage contestant profiles, monitor incoming votes, and oversee the competition end to end.' },
      { heading: 'Vote Protection System', body: 'Every submission passes through a multi-layered verification stack: hCaptcha confirms the voter is human, a Laravel rate limiter enforces a 5-minute cooldown per IP, and a 30-day browser cookie prevents repeat submissions. Each vote is also checked against the voter\'s email (unique), IP address (capped at 3 per IP), and a device fingerprint derived from a hash of IP, browser agent, language, and encoding settings. A scheduled command purges suspicious vote clusters — more than 100 votes from a single IP — and recalculates contestant totals. Cloudflare Turnstile is also scaffolded and ready for activation.' },
    ],
  },
};
