// ============================================================
//  COCHISE ONCOLOGY — EDITABLE NUMBERS
//  Open in Notepad, change a number, save, refresh cochise-pitch.html.
//  Every figure the pitch page shows is computed from this file.
//  Dollar amounts are per month unless noted. Rates are decimals (0.06 = 6%).
// ============================================================

window.COCHISE = {

  // ---- What the practice spends today vs. what we propose ----
  today:    { agency: 2600, oversight: 400 },       // NP Digital retainer + leadership's own oversight hours (est.) = ~$3,000
  proposed: { ads: 2000, timeAndSoftware: 800 },    // ad spend + Will's time & tools (rough) = ~$2,800

  // ---- What one new patient is worth, by service line (rough, refine Tuesday) ----
  patientValue: {
    "Osteoarthritis (low-dose radiation)": 4000,
    "Xoft skin treatment":                 1000,
    "Metastatic":                          4000,
    "Breast cancer":                       6000,
    "Prostate cancer":                     8000,
    "SBRT (targeted radiation)":           6000
  },
  excluded: "Chemotherapy — loses money per patient, so we do not advertise for it.",

  // ---- Expected mix of ad-driven new patients (shares should add to 1.0) ----
  // Used to compute the blended value of one new patient.
  mix: {
    "Osteoarthritis (low-dose radiation)": 0.30,
    "Xoft skin treatment":                 0.10,
    "Metastatic":                          0.10,
    "Breast cancer":                       0.25,
    "Prostate cancer":                     0.15,
    "SBRT (targeted radiation)":           0.10
  },

  // ---- How ads turn into patients: [low, high] planning ranges ----
  // clicks = budget / cost per click;  inquiries = clicks x inquiryRate;  patients = inquiries x closeRate
  local: { cpc: [15, 30], inquiryRate: [0.05, 0.08], closeRate: [0.30, 0.40] },   // Cochise County + ~70-mile radius
  broad: { cpc: [20, 40], inquiryRate: [0.03, 0.06], closeRate: [0.10, 0.20] },   // national, high-intent LDRT searches

  // ---- Budget options shown to the board ----
  // efficiency < 1 means cheap local clicks run out and each extra dollar buys a little less.
  tiers: [
    { label: "Lower",       budget: 1000, efficiency: 1.00, note: "Proves tracking works. Too small to learn much quickly." },
    { label: "Proposed",    budget: 2000, efficiency: 1.00, note: "Same total spend as today. Enough clicks to learn what converts in 90 days.", isDefault: true },
    { label: "Higher",      budget: 3500, efficiency: 0.90, note: "Faster learning, but local search volume starts to cap out." },
    { label: "Typical practice", budget: 5000, efficiency: 0.80, note: "What a comparable specialty practice often spends. Wasteful here until tracking proves the first tier." }
  ],

  // ---- Local vs. broad split (percent local). Slider snaps to these. ----
  splits: [100, 80, 60, 40, 20],
  proposedSplit: 80,

  // ---- Ramp: month-one spend before scaling to the full budget ----
  rampMonthOne: 500,

  // ---- Key targets (edit freely) ----
  targets: {
    serviceLines: [
      "Low-dose radiation for osteoarthritis — ~1,410 searches/month nationally, low competition, our clearest differentiator",
      "Breast cancer — 'breast cancer center near me' (720/mo); October is Breast Cancer Awareness Month",
      "Prostate cancer & SBRT — highest value per patient",
      "Hematology — 'hematologist sierra vista' already ranks #3; cheap to defend"
    ],
    geography: [
      "Sierra Vista and Cochise County (core)",
      "Tucson and a ~70-mile driving radius (patients already come from here)",
      "Fort Huachuca — military, veteran and TRICARE families (confirm TRICARE is accepted)",
      "National — only for people searching low-dose radiation therapy by name"
    ],
    referralPartners: [
      "Copper Queen Community Hospital (CEO contact confirmed)",
      "Canyon Vista Medical Center",
      "Benson Hospital / Northern Cochise Community Hospital",
      "Chiricahua Community Health Centers"
    ],
    searchTerms: [
      "low dose radiation for osteoarthritis",
      "radiation for osteoarthritis of the knee",
      "breast cancer center near me",
      "breast cancer specialists arizona",
      "prostate cancer treatment sierra vista",
      "hematologist sierra vista",
      "cancer center near me"
    ]
  }
};
