import Image from "next/image";

import { BusinessModelSection } from "@/components/BusinessModelSection";
import { CTASection } from "@/components/CTASection";
import { FeatureGrid } from "@/components/FeatureGrid";
import { HeroSection } from "@/components/HeroSection";
import { NarrativeSection } from "@/components/NarrativeSection";
import { RiskSection } from "@/components/RiskSection";
import { pitchContent } from "@/content/pitch";

export default function Home() {
  return (
    <main>
      <section className="hero-shell">
        <div className="page-shell">
          <header className="site-header">
            <a className="brand-lockup" href="#">
              <span className="brand-mark" />
              <span>{pitchContent.brand}</span>
            </a>
            <nav className="site-nav" aria-label="Section navigation">
              <a href="#problem">Problem</a>
              <a href="#solution">Model</a>
              <a href="#business-model">Business</a>
              <a href="#risks">Risk</a>
            </nav>
          </header>
          <HeroSection
            brand={pitchContent.brand}
            hero={pitchContent.hero}
            quote={pitchContent.quote}
          />
        </div>
      </section>

      <section className="content-shell">
        <div className="page-shell page-shell-light">
          <NarrativeSection
            section={pitchContent.problem}
            variant="problem"
            cardBullets={pitchContent.problemCards}
          />
          <NarrativeSection
            section={pitchContent.solution}
            variant="solution"
            timelineSteps={pitchContent.solutionFlow}
            image={pitchContent.images.secondary}
          />
          <FeatureGrid
            eyebrow={pitchContent.advantagesEyebrow}
            title={pitchContent.advantagesTitle}
            items={pitchContent.advantages}
          />
          <section className="photo-break" aria-label="TileTap corridor visual">
            <Image
              src={pitchContent.images.tertiary.src}
              alt={pitchContent.images.tertiary.alt}
              width={1536}
              height={1024}
              className="photo-break-image"
            />
          </section>
          <NarrativeSection
            section={pitchContent.whyNow}
            variant="why-now"
            cardBullets={pitchContent.marketSignals}
          />
          <BusinessModelSection
            section={pitchContent.businessModel}
            revenueStreams={pitchContent.revenueStreams}
            expansion={pitchContent.expansion}
          />
          <RiskSection section={pitchContent.risks} />
          <CTASection ctas={pitchContent.ctas} />
        </div>
      </section>
    </main>
  );
}
