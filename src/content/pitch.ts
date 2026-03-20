import { PitchContent } from "@/types/pitch";

const primaryCtaHref = "mailto:founders@tiletap.co?subject=TileTap%20pilot%20discussion";
const calendlyHref = "https://calendly.com/replace-before-launch";
const linkedinHref = "https://www.linkedin.com/company/replace-before-launch";

export const pitchContent: PitchContent = {
  brand: "TileTap",
  metadata: {
    title: "TileTap | Last-Mile Reliability for Metro Commuters",
    description:
      "TileTap is an employer-backed, corridor-based shuttle system that gives metro commuters a guaranteed final connection between station and office.",
  },
  hero: {
    headline: "The metro works. The last kilometre still breaks the commute.",
    subhead: "Employer-backed last-mile transit for dense office corridors.",
    body:
      "TileTap is a scheduled transfer layer between metro stations and office clusters, built to give commuters a guaranteed, predictable ride for the final 1 to 3 km between station and workplace.",
    image: {
      src: "/images/tiletap-hero-portrait.png",
      alt: "A TileTap commuter stepping out of a branded shuttle outside an office complex.",
      priority: true,
    },
    ctas: [
      {
        label: "Discuss a Pilot",
        href: primaryCtaHref,
        variant: "primary",
      },
      {
        label: "See the Model",
        href: "#business-model",
        variant: "secondary",
      },
    ],
    signals: [
      {
        title: "1 to 3 km",
        body: "The final connection between station and office is where trust breaks.",
      },
      {
        title: "Weekday density",
        body: "The same commuters move through the same corridors at the same times.",
      },
      {
        title: "B2B2C wedge",
        body: "Employers subsidize access, making route utilization and acquisition more predictable.",
      },
    ],
  },
  quote: {
    label: "Positioning",
    body:
      "We built TileTap because the metro is not broken. The last kilometre out of it is.",
  },
  problem: {
    id: "problem",
    eyebrow: "The Gap",
    title: "The highest-friction part of the commute happens after the train arrives.",
    body: [
      "For metro commuters in Bengaluru and Delhi NCR, the most unreliable part of the journey is often the final 1 to 3 km between station and office. That leg is fragmented, stressful, and difficult to trust during peak hours.",
      "Once that trust breaks, commuters buffer for uncertainty or abandon the metro entirely and drive the whole way instead.",
    ],
  },
  problemCards: [
    {
      title: "Short-fare refusal",
      body:
        "Autos reject quick station-to-office hops, leaving commuters exposed exactly when they need a reliable handoff.",
    },
    {
      title: "Ride-hail volatility",
      body:
        "Surge pricing, long ETAs, and cancellation churn turn a predictable train trip into an unpredictable arrival.",
    },
    {
      title: "Walking is not a fallback",
      body:
        "Heat, rain, poor pedestrian access, and safety concerns make the final kilometre impractical for many office workers.",
    },
    {
      title: "Uncertainty kills mode shift",
      body:
        "When the last mile feels broken, commuters default to private cars or expensive cabs for the full journey.",
    },
  ],
  solution: {
    id: "solution",
    eyebrow: "The System",
    title: "TileTap runs scheduled last-mile corridors instead of chasing on-demand chaos.",
    body: [
      "The product is built around fixed peak-hour routes from high-footfall metro exits to dense office clusters. Departures are timed to metro arrival waves, so commuters reserve a seat on a predictable transfer instead of scrambling outside the station.",
      "Distribution starts with employers and office parks. Companies subsidize access as a commute benefit, while employees use a simple pass-based experience that guarantees availability and on-time departures.",
    ],
    bullets: [
      "Fixed peak-hour routes",
      "Departures matched to metro inflows",
      "Reserved-seat, pass-based access",
      "Employer-backed distribution",
    ],
  },
  solutionFlow: [
    {
      title: "Metro arrival",
      body: "Commuters exit high-footfall stations in concentrated, repeatable waves.",
    },
    {
      title: "TileTap departure",
      body: "Scheduled shuttles leave on fixed intervals with guaranteed seats for pass holders.",
    },
    {
      title: "Office cluster drop-off",
      body: "Riders complete the last 1 to 3 km without surge pricing, bargaining, or uncertainty.",
    },
  ],
  advantagesEyebrow: "Why TileTap Wins",
  advantagesTitle: "Reliability is the product, not a side effect.",
  advantages: [
    {
      title: "Clustered demand",
      body:
        "TileTap is designed around dense station-to-office corridors rather than scattered, citywide consumer demand.",
    },
    {
      title: "Employer distribution",
      body:
        "B2B2C go-to-market reduces rider-by-rider acquisition cost and makes utilization predictable from day one.",
    },
    {
      title: "Peak-hour discipline",
      body:
        "Operations are tuned for the exact trips that repeat every weekday, where certainty matters more than flexibility.",
    },
    {
      title: "Transit-native positioning",
      body:
        "TileTap complements the metro instead of competing with it, making the entire commute more usable at scale.",
    },
  ],
  whyNow: {
    id: "why-now",
    eyebrow: "Timing",
    title: "The market is finally shaped for a scheduled transfer layer.",
    body: [
      "Metro systems are expanding deeper into office districts, but the final approach to the workplace remains unreliable. That mismatch makes the last-mile pain more visible, not less.",
      "Return-to-office density and the maturity of small EV fleets create the operational conditions for predictable corridor transport that were harder to sustain during hybrid volatility.",
    ],
  },
  marketSignals: [
    {
      title: "Metro expansion",
      body: "Bengaluru and Delhi NCR continue to extend high-volume rail networks toward office hubs.",
    },
    {
      title: "Commute density is back",
      body: "Weekday office demand has reconcentrated around repeatable peak-hour flows.",
    },
    {
      title: "Fleet readiness",
      body: "Small EV operators and shuttle fleets are mature enough to support short, disciplined routes.",
    },
  ],
  businessModel: {
    id: "business-model",
    eyebrow: "Business Model",
    title: "Start with employers, then expand corridor by corridor.",
    body: [
      "TileTap monetizes through employer and campus contracts instead of relying on expensive consumer marketplace behavior. The wedge is simple: make metro commuting actually usable for concentrated office populations.",
      "Once a corridor proves reliable and well utilized, the playbook repeats at the next station-office cluster with anchor employers already in hand.",
    ],
  },
  revenueStreams: [
    {
      title: "Employee subscriptions",
      body: "Monthly employer-backed commute plans for staff using TileTap as a daily benefit.",
    },
    {
      title: "Bulk seat blocks",
      body: "Reserved seat inventory sold to large employers that want guaranteed employee access.",
    },
    {
      title: "Campus contracts",
      body: "Office parks and large campuses subsidize last-mile coverage across multiple tenant companies.",
    },
  ],
  expansion: [
    {
      title: "Pick a corridor",
      body: "Start with one high-density station and one office cluster where commute friction is already obvious.",
    },
    {
      title: "Sign anchor employers",
      body: "Secure enough concentrated demand to launch 1 to 3 scheduled routes with confidence.",
    },
    {
      title: "Prove reliability",
      body: "Win trust through punctuality, utilization, and repeatable weekday usage.",
    },
    {
      title: "Replicate outward",
      body: "Expand to the next adjacent corridor with the same operating and distribution playbook.",
    },
  ],
  risks: {
    id: "risks",
    eyebrow: "Skeptical Questions",
    title: "The hard parts are visible, which makes the execution bar clear.",
    body: [
      "The largest risks are demand aggregation, employer budget prioritization, and maintaining operational quality when trust can break after a single bad week.",
      "The visible surface can be copied. The durable advantage comes from route discipline, partner distribution, and making commuters trust the system enough to change behavior.",
    ],
    bullets: [
      "Can corridor density be aggregated quickly enough?",
      "Will employers treat this as a necessary benefit or a discretionary perk?",
      "Can operations stay punctual during peak-hour variability?",
      "How defensible is the model if incumbents copy the interface?",
    ],
  },
  ctas: {
    eyebrow: "Next Step",
    title: "Share the corridor. Pressure-test the pilot.",
    body:
      "If you invest in urban mobility or run workplace operations near a metro corridor, TileTap is built to turn a broken last mile into a repeatable system. Replace the placeholder contact links below before publishing.",
    items: [
      {
        label: "Email the team",
        href: primaryCtaHref,
        variant: "primary",
      },
      {
        label: "Book a meeting",
        href: calendlyHref,
        variant: "secondary",
      },
      {
        label: "Company LinkedIn",
        href: linkedinHref,
        variant: "ghost",
      },
    ],
  },
  images: {
    primary: {
      src: "/images/tiletap-hero-portrait.png",
      alt: "A TileTap commuter stepping out of a branded shuttle outside an office complex.",
      priority: true,
    },
    secondary: {
      src: "/images/tiletap-solution-wide.png",
      alt: "A commuter checking the TileTap app in front of a station shuttle at a business district stop.",
    },
    tertiary: {
      src: "/images/tiletap-corridor-wide.png",
      alt: "A TileTap shuttle loading commuters for the metro-to-office corridor route.",
    },
  },
};
