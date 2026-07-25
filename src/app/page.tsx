import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Sparkles,
} from "lucide-react";
import { SpecialistCatalog } from "@/components/specialist-catalog";

const previewSpecialists = [
  {
    lane: "BUILD / INTERFACE",
    name: "Front-end SLM",
    output: "Accessible UI",
    domain: "BUILD",
    tone: "light",
  },
  {
    lane: "BUILD / SERVICES",
    name: "Back-end SLM",
    output: "Tested service",
    domain: "BUILD",
    tone: "mid",
  },
  {
    lane: "OPERATE / DELIVERY",
    name: "DevOps SLM",
    output: "Release pipeline",
    domain: "OPERATE",
    tone: "dark",
  },
];

export default function Home() {
  return (
    <main>
      <div className="ambient ambientOne" aria-hidden="true" />
      <div className="ambient ambientTwo" aria-hidden="true" />

      <header className="siteHeader">
        <a className="brand" href="#" aria-label="Helios Marketplace home">
          <span className="brandMark" aria-hidden="true">
            <span />
          </span>
          <span className="brandName">HELIOS</span>
          <span className="brandDivider" />
          <span className="brandEdition">MARKETPLACE</span>
        </a>

        <nav className="navLinks" aria-label="Primary navigation">
          <a href="#catalog">Catalog</a>
          <a href="#principles">Principles</a>
          <a
            href="https://github.com/desync-org/helios-marketplace"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </nav>

        <a className="headerAction" href="#catalog">
          Explore specialists
          <ArrowDown size={14} strokeWidth={1.8} aria-hidden="true" />
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="heroCopy">
          <div className="eyebrow">
            <Sparkles size={13} strokeWidth={1.6} aria-hidden="true" />
            Curated for local intelligence
          </div>
          <h1 id="hero-title">
            Small models.
            <span>Serious work.</span>
          </h1>
          <p className="heroLead">
            Browse 15 role-focused small-model blueprints for the Helios local
            runtime—each scoped to a clear job, input, output, and boundary.
          </p>
          <div className="heroActions">
            <a className="primaryButton" href="#catalog">
              Browse specialists
              <ArrowDown size={16} strokeWidth={1.8} aria-hidden="true" />
            </a>
            <a
              className="secondaryButton"
              href="https://github.com/desync-org/helios-marketplace"
              target="_blank"
              rel="noreferrer"
            >
              <Code2 size={16} strokeWidth={1.7} aria-hidden="true" />
              View source
            </a>
          </div>
        </div>

        <div
          className="heroStage"
          aria-label="A preview of specialist SLMs in the catalog"
        >
          <div className="stageTopline">
            <span>CATALOG / PREVIEW</span>
            <span className="status">
              <i />
              15 SPECIALISTS
            </span>
          </div>
          <div className="modelStack">
            {previewSpecialists.map((specialist, index) => (
              <article
                className={`previewCard ${specialist.tone}`}
                key={specialist.name}
                style={{ "--index": index } as React.CSSProperties}
              >
                <div className="previewIndex">0{index + 1}</div>
                <div className="previewMain">
                  <span>{specialist.lane}</span>
                  <h2>{specialist.name}</h2>
                </div>
                <div className="previewMeta">
                  <span>{specialist.output}</span>
                  <strong>{specialist.domain}</strong>
                </div>
                <ArrowUpRight
                  className="previewArrow"
                  size={18}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </article>
            ))}
          </div>
          <div className="stageFooter">
            <span>ROLE-SCOPED</span>
            <span>CLEAR OUTPUTS</span>
            <span>POLICY-BOUND</span>
          </div>
        </div>
      </section>

      <div className="signalStrip" aria-label="Marketplace principles">
        <div>
          <span>01</span>
          <strong>Role-specific by design</strong>
        </div>
        <div>
          <span>02</span>
          <strong>Clear inputs and outputs</strong>
        </div>
        <div>
          <span>03</span>
          <strong>Explicit operating boundaries</strong>
        </div>
      </div>

      <section className="catalogShell" id="catalog" aria-labelledby="catalog-title">
        <div className="sectionHeading">
          <div>
            <span className="sectionKicker">THE CATALOG / 001</span>
            <h2 id="catalog-title">Find the right specialist.</h2>
          </div>
          <p>
            Front-end, back-end, DevOps, security, data, QA, and more—each
            scoped to a concrete delivery lane.
          </p>
        </div>

        <SpecialistCatalog />
      </section>

      <section className="principles" id="principles" aria-labelledby="principles-title">
        <div className="principlesIntro">
          <span className="sectionKicker">WHY HELIOS / 002</span>
          <h2 id="principles-title">Intelligence should feel personal again.</h2>
        </div>
        <div className="principlesBody">
          <p>
            One general model is not always the right tool. Helios is built
            around smaller, focused systems with a known job, a deliberate
            handoff, and a boundary they should not cross.
          </p>
          <a
            href="https://github.com/desync-org/helios-marketplace"
            target="_blank"
            rel="noreferrer"
          >
            Follow the build on GitHub
            <ArrowUpRight size={16} strokeWidth={1.6} />
          </a>
        </div>
      </section>

      <section
        className="contribute"
        id="contribute"
        aria-labelledby="contribute-title"
      >
        <div className="statusLedger" aria-label="Current marketplace status">
          <div>
            <span>01 / CATALOG</span>
            <strong>15 hardcoded specialists</strong>
          </div>
          <div>
            <span>02 / RUNTIME</span>
            <strong>Manifests not connected</strong>
          </div>
          <div>
            <span>03 / EVIDENCE</span>
            <strong>Evaluations pending</strong>
          </div>
        </div>
        <div className="contributeCopy">
          <span className="sectionKicker">OPEN REGISTRY / 003</span>
          <h2 id="contribute-title">What should Helios specialize in next?</h2>
          <p>
            Suggest a bounded role, define the input and expected output, and
            tell us which operating boundary the profile should make visible.
          </p>
          <div className="contributeActions">
            <a
              className="primaryButton"
              href="https://github.com/desync-org/helios-marketplace/issues/new?title=Specialist%20request%3A%20"
              target="_blank"
              rel="noreferrer"
            >
              Request a specialist
              <ArrowUpRight size={16} strokeWidth={1.6} aria-hidden="true" />
            </a>
            <a
              className="secondaryButton"
              href="https://github.com/desync-org/helios-marketplace/issues"
              target="_blank"
              rel="noreferrer"
            >
              View open issues
              <ArrowUpRight size={16} strokeWidth={1.6} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="footerBrand">
          <span className="brandMark" aria-hidden="true">
            <span />
          </span>
          <span>HELIOS MARKETPLACE</span>
        </div>
        <p>Small models, scoped to real work.</p>
        <span>© 2026 DESYNC</span>
      </footer>
    </main>
  );
}
