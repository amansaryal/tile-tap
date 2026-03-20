import { BusinessModelSection } from "@/components/BusinessModelSection";
import { CTASection } from "@/components/CTASection";
import { FeatureGrid } from "@/components/FeatureGrid";
import { HeroSection } from "@/components/HeroSection";
import { NarrativeSection } from "@/components/NarrativeSection";
import { RiskSection } from "@/components/RiskSection";
import { pitchContent } from "@/content/pitch";

export default function Home() {
  return (
    <main className="page-shell">
      <HeroSection
        brand={pitchContent.brand}
        hero={pitchContent.hero}
        quote={pitchContent.quote}
      />
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
    </main>
  );
}
