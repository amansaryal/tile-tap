import Image from "next/image";

import { PitchFeature, PitchFlowStep, PitchImage, PitchSection } from "@/types/pitch";

type NarrativeSectionProps = {
  section: PitchSection;
  variant: "problem" | "solution" | "why-now";
  cardBullets?: PitchFeature[];
  timelineSteps?: PitchFlowStep[];
  image?: PitchImage;
};

export function NarrativeSection({
  section,
  variant,
  cardBullets,
  timelineSteps,
  image,
}: NarrativeSectionProps) {
  return (
    <section id={section.id} className={`narrative-section ${variant}`}>
      <div className="section-heading">
        {section.eyebrow ? <p className="section-eyebrow">{section.eyebrow}</p> : null}
        <h2>{section.title}</h2>
      </div>
      <div className="narrative-copy">
        {section.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      {section.bullets?.length ? (
        <ul className="bullet-row">
          {section.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      ) : null}

      {cardBullets?.length ? (
        <div className="feature-grid compact">
          {cardBullets.map((item) => (
            <article key={item.title} className="feature-card">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      ) : null}

      {timelineSteps?.length ? (
        <div className="timeline-grid">
          {timelineSteps.map((step, index) => (
            <article key={step.title} className="timeline-card">
              <span>{`0${index + 1}`}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      ) : null}

      {image ? (
        <figure className="section-visual">
          <Image
            src={image.src}
            alt={image.alt}
            width={1200}
            height={800}
            className="section-image"
          />
          {image.caption ? <figcaption className="asset-note">{image.caption}</figcaption> : null}
        </figure>
      ) : null}
    </section>
  );
}
