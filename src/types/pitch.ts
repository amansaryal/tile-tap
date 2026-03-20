export type PitchImage = {
  src: string;
  alt: string;
  priority?: boolean;
  caption?: string;
};

export type PitchCTA = {
  label: string;
  href: string;
  variant: "primary" | "secondary" | "ghost";
};

export type PitchSection = {
  id: string;
  eyebrow?: string;
  title: string;
  body: string[];
  bullets?: string[];
};

export type PitchFeature = {
  title: string;
  body: string;
};

export type PitchFlowStep = {
  title: string;
  body: string;
};

export type PitchContent = {
  brand: string;
  metadata: {
    title: string;
    description: string;
  };
  hero: {
    headline: string;
    subhead: string;
    body: string;
    image: PitchImage;
    ctas: PitchCTA[];
    signals: PitchFeature[];
  };
  quote: {
    label: string;
    body: string;
  };
  problem: PitchSection;
  problemCards: PitchFeature[];
  solution: PitchSection;
  solutionFlow: PitchFlowStep[];
  advantagesEyebrow: string;
  advantagesTitle: string;
  advantages: PitchFeature[];
  whyNow: PitchSection;
  marketSignals: PitchFeature[];
  businessModel: PitchSection;
  revenueStreams: PitchFeature[];
  expansion: PitchFlowStep[];
  risks: PitchSection;
  ctas: {
    eyebrow: string;
    title: string;
    body: string;
    items: PitchCTA[];
  };
  images: {
    primary: PitchImage;
    secondary: PitchImage;
  };
};
