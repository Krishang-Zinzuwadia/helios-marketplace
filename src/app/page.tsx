import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Sparkles,
} from "lucide-react";
import { SpecialistCatalog } from "@/components/specialist-catalog";

const previewSpecialists = [
  {
    lane: "BUILD / FRONT END",
    name: "Front-end SLM",
    output: "Working interface",
    domain: "BUILD",
    tone: "light",
  },
  {
    lane: "BUILD / BACK END",
    name: "Back-end SLM",
    output: "Tested API",
    domain: "BUILD",
    tone: "mid",
  },
  {
    lane: "OPERATE / RELEASE",
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
          Browse all 15
          <ArrowDown size={14} strokeWidth={1.8} aria-hidden="true" />
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="heroCopy">
          <div className="eyebrow">
            <Sparkles size={13} strokeWidth={1.6} aria-hidden="true" />
            15 specialist SLMs
          </div>
          <h1 id="hero-title">
            Small models.
            <span>Clear jobs.</span>
          </h1>
          <p className="heroLead">
            Front end, back end, DevOps, security, and 11 more. Pick the one
            that fits the job. Helios keeps the work local.
          </p>
          <div className="heroActions">
            <a className="primaryButton" href="#catalog">
              See all 15
              <ArrowDown size={16} strokeWidth={1.8} aria-hidden="true" />
            </a>
            <a
              className="secondaryButton"
              href="https://github.com/desync-org/helios-marketplace"
              target="_blank"
              rel="noreferrer"
            >
              <Code2 size={16} strokeWidth={1.7} aria-hidden="true" />
              View on GitHub
            </a>
          </div>
        </div>

        <div
          className="heroStage"
          aria-label="A preview of specialist SLMs in the catalog"
        >
          <div className="stageTopline">
            <span>A FEW EXAMPLES</span>
            <span className="status">
              <i />
              15 ROLES
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
            <span>ONE JOB EACH</span>
            <span>KNOWN INPUTS</span>
            <span>CLEAR LIMITS</span>
          </div>
        </div>
      </section>

      <div className="signalStrip" aria-label="Marketplace principles">
        <div>
          <span>01</span>
          <strong>Made for one job</strong>
        </div>
        <div>
          <span>02</span>
          <strong>Tells you what it needs</strong>
        </div>
        <div>
          <span>03</span>
          <strong>Knows when to stop</strong>
        </div>
      </div>

      <section className="catalogShell" id="catalog" aria-labelledby="catalog-title">
        <div className="sectionHeading">
          <div>
            <span className="sectionKicker">THE CATALOG / 001</span>
            <h2 id="catalog-title">Pick a specialist.</h2>
          </div>
          <p>
            Search by role, tool, or the kind of work you need done.
          </p>
        </div>

        <SpecialistCatalog />
      </section>

      <section className="principles" id="principles" aria-labelledby="principles-title">
        <div className="principlesIntro">
          <span className="sectionKicker">WHY SPECIALISTS / 002</span>
          <h2 id="principles-title">One model doesn’t need to do everything.</h2>
        </div>
        <div className="principlesBody">
          <p>
            A front-end task and a security review are different jobs. Helios
            gives each one a smaller brief, then hands the work over when
            another specialist should take it from there.
          </p>
          <a
            href="https://github.com/desync-org/helios-marketplace"
            target="_blank"
            rel="noreferrer"
          >
            See how Helios is built
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
            <strong>15 roles, hardcoded for now</strong>
          </div>
          <div>
            <span>02 / RUNTIME</span>
            <strong>Runtime hookup comes next</strong>
          </div>
          <div>
            <span>03 / EVIDENCE</span>
            <strong>No eval results yet</strong>
          </div>
        </div>
        <div className="contributeCopy">
          <span className="sectionKicker">MISSING A ROLE? / 003</span>
          <h2 id="contribute-title">What should we add next?</h2>
          <p>
            Tell us the job, what you would give it, what you expect back, and
            anything it should never touch.
          </p>
          <div className="contributeActions">
            <a
              className="primaryButton"
              href="https://github.com/desync-org/helios-marketplace/issues/new?title=Specialist%20request%3A%20"
              target="_blank"
              rel="noreferrer"
            >
              Suggest a role
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
        <p>Small models for specific jobs.</p>
        <span>© 2026 DESYNC</span>
      </footer>
    </main>
  );
}
