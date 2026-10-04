import {
  Message,
  MessageContent,
  MessageResponse,
} from "@/components/ai-elements/message";

const pillars = [
  {
    label: "Fast start",
    detail: "Opinionated structure with App Router, strict TypeScript, and a homepage you can actually build from.",
  },
  {
    label: "Visual baseline",
    detail: "A strong first viewport, deliberate spacing, and a design system foundation without locking you into a component library.",
  },
  {
    label: "Production path",
    detail: "Simple scripts, clean metadata, and a layout that can scale from landing page to product surface.",
  },
];

const checkpoints = [
  "Replace the product name and headline with your actual concept.",
  "Add your first route in app/ and keep server-first rendering by default.",
  "Install only the UI or data layers you know you need.",
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero pr-14 sm:pr-16">
        <div className="hero__veil" />
        <header className="hero__header">
          <span className="eyebrow">Signal Starter</span>
          <nav aria-label="Primary" className="hero__nav">
            <a href="#structure">Structure</a>
            <a href="#workflow">Workflow</a>
            <a href="#launch">Launch</a>
          </nav>
        </header>

        <div className="hero__body">
          <div className="hero__copy">
            <p className="hero__kicker">NEXT.JS APP ROUTER</p>
            <h1>Scaffold the idea first. Polish the product once the shape is real.</h1>
            <p className="hero__lede">
              This starter gives you a clean surface, strong typography, and enough structure
              to move from concept to working interface without dragging a pile of placeholder
              UI behind you.
            </p>

            <div className="hero__actions">
              <a className="button button--primary" href="#launch">
                Start shaping
              </a>
              <a className="button button--secondary" href="#workflow">
                See the flow
              </a>
            </div>
          </div>

          <aside className="hero__aside" aria-label="Starter summary">
            <p>Built for new projects that need a deliberate baseline, not a dashboard full of fake charts.</p>
            <ul>
              <li>TypeScript strict mode</li>
              <li>App Router conventions</li>
              <li>Responsive homepage shell</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="band" id="ai-elements" aria-label="AI Elements verification">
        <div className="section-heading">
          <p className="section-label">AI Elements</p>
          <h2>Installed and ready.</h2>
        </div>
        <div className="max-w-2xl">
          <Message from="assistant">
            <MessageContent>
              <MessageResponse>Hello, world!</MessageResponse>
            </MessageContent>
          </Message>
        </div>
      </section>

      <section className="band" id="structure">
        <div className="section-heading">
          <p className="section-label">Structure</p>
          <h2>One strong page, three clear promises.</h2>
        </div>

        <div className="pillar-list">
          {pillars.map((pillar) => (
            <article className="pillar" key={pillar.label}>
              <p className="pillar__label">{pillar.label}</p>
              <p className="pillar__detail">{pillar.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="workflow" id="workflow">
        <div className="section-heading">
          <p className="section-label">Workflow</p>
          <h2>Keep the stack light until the product proves it needs more.</h2>
        </div>

        <div className="workflow__grid">
          <div>
            <p className="workflow__index">01</p>
            <h3>Define the first route</h3>
            <p>
              Start with a page that communicates the product clearly. Avoid adding auth,
              databases, or UI kits before the first user-facing path feels correct.
            </p>
          </div>
          <div>
            <p className="workflow__index">02</p>
            <h3>Layer on real behavior</h3>
            <p>
              Add route handlers, data fetches, or client components only where the interface
              actually needs them. Keep the default path server-rendered.
            </p>
          </div>
          <div>
            <p className="workflow__index">03</p>
            <h3>Refine for deployment</h3>
            <p>
              Once the shape is stable, wire in your data model, analytics, and deployment
              target without reworking the entire surface.
            </p>
          </div>
        </div>
      </section>

      <section className="launch" id="launch">
        <div className="section-heading">
          <p className="section-label">Launch</p>
          <h2>Immediate next steps after install.</h2>
        </div>

        <ol className="checklist">
          {checkpoints.map((checkpoint) => (
            <li key={checkpoint}>{checkpoint}</li>
          ))}
        </ol>
      </section>
    </main>
  );
}
