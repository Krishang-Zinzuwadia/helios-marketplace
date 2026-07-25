import {
  ArrowDown,
  ArrowUpRight,
  Box,
  Code2,
  Layers3,
  Search,
  Sparkles,
} from "lucide-react";

const previewModels = [
  {
    maker: "Google",
    name: "Gemma 3",
    size: "4B",
    use: "Multimodal",
    tone: "light",
  },
  {
    maker: "Qwen",
    name: "Qwen2.5 Coder",
    size: "7B",
    use: "Code",
    tone: "mid",
  },
  {
    maker: "Microsoft",
    name: "Phi-4 Mini",
    size: "3.8B",
    use: "Reasoning",
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
          Explore models
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
            Find capable, compact models for the Helios local runtime—selected
            for the work you want to keep close.
          </p>
          <div className="heroActions">
            <a className="primaryButton" href="#catalog">
              Browse the catalog
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

        <div className="heroStage" aria-label="A preview of models in the catalog">
          <div className="stageTopline">
            <span>CATALOG / PREVIEW</span>
            <span className="status">
              <i />
              15 MODELS
            </span>
          </div>
          <div className="modelStack">
            {previewModels.map((model, index) => (
              <article
                className={`previewCard ${model.tone}`}
                key={model.name}
                style={{ "--index": index } as React.CSSProperties}
              >
                <div className="previewIndex">0{index + 1}</div>
                <div className="previewMain">
                  <span>{model.maker}</span>
                  <h2>{model.name}</h2>
                </div>
                <div className="previewMeta">
                  <span>{model.use}</span>
                  <strong>{model.size}</strong>
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
            <span>LOCAL-FIRST</span>
            <span>OPEN ECOSYSTEM</span>
            <span>CURATED SPECS</span>
          </div>
        </div>
      </section>

      <div className="signalStrip" aria-label="Marketplace principles">
        <div>
          <span>01</span>
          <strong>Compact by design</strong>
        </div>
        <div>
          <span>02</span>
          <strong>Built to stay close</strong>
        </div>
        <div>
          <span>03</span>
          <strong>Clear model metadata</strong>
        </div>
      </div>

      <section className="catalogShell" id="catalog" aria-labelledby="catalog-title">
        <div className="sectionHeading">
          <div>
            <span className="sectionKicker">THE CATALOG / 001</span>
            <h2 id="catalog-title">Find your next small model.</h2>
          </div>
          <p>
            A focused starting set for reasoning, code, vision, and everyday
            language work.
          </p>
        </div>

        <div className="catalogToolbar" aria-hidden="true">
          <div className="searchPreview">
            <Search size={16} strokeWidth={1.5} />
            Search by model, maker, or task
          </div>
          <div className="filterPreview">All models</div>
          <div className="filterPreview">Featured first</div>
        </div>

        <div className="catalogPreviewGrid">
          {previewModels.map((model, index) => (
            <article className="catalogPreviewCard" key={model.name}>
              <div className="cardTop">
                <span className="modelGlyph">
                  {index === 0 ? (
                    <Sparkles size={19} strokeWidth={1.4} />
                  ) : index === 1 ? (
                    <Layers3 size={19} strokeWidth={1.4} />
                  ) : (
                    <Box size={19} strokeWidth={1.4} />
                  )}
                </span>
                <span className="sizePill">{model.size}</span>
              </div>
              <span className="maker">{model.maker}</span>
              <h3>{model.name}</h3>
              <p>
                A compact model selected for thoughtful local workflows and a
                clear path into the Helios ecosystem.
              </p>
              <div className="cardBottom">
                <span>{model.use}</span>
                <span className="viewLabel">
                  View model
                  <ArrowUpRight size={15} strokeWidth={1.6} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="principles" id="principles" aria-labelledby="principles-title">
        <div className="principlesIntro">
          <span className="sectionKicker">WHY HELIOS / 002</span>
          <h2 id="principles-title">Intelligence should feel personal again.</h2>
        </div>
        <div className="principlesBody">
          <p>
            The biggest model is not always the right model. Helios is built
            around smaller, focused systems that can live closer to your work,
            your tools, and your rules.
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

      <footer>
        <div className="footerBrand">
          <span className="brandMark" aria-hidden="true">
            <span />
          </span>
          <span>HELIOS MARKETPLACE</span>
        </div>
        <p>Small models, selected with intent.</p>
        <span>© 2026 DESYNC</span>
      </footer>
    </main>
  );
}
