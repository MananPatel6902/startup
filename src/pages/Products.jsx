import { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const products = [
  {
    id: 'cineflow',
    index: '01',
    name: 'CineFlow OS',
    category: 'Studio operations platform',
    icon: 'movie_edit',
    url: 'https://cineflow-os.workaidlywriters.chatgpt.site/',
    guide: '/guides/cineflow-client-guide.pdf',
    statement: 'One calm operating system for the moving parts behind every production.',
    description: 'CineFlow connects leads, clients, projects, editors and studio finance in one visible workflow. Less chasing, fewer hand-off gaps and a clear view of every production.',
    outcome: 'Production under control',
    audience: 'Production studios and editing teams',
    features: ['Lead-to-client pipeline', 'Live production board', 'Editor workspaces', 'Finance and payouts'],
  },
  {
    id: 'lexflow',
    index: '02',
    name: 'LexFlow',
    category: 'Legal practice management',
    icon: 'account_tree',
    url: 'https://lexflow-legal-practice.workaidlywriters.chatgpt.site/',
    guide: '/guides/lexflow-client-guide.pdf',
    statement: 'A composed workspace for matters, hearings and the work around them.',
    description: 'LexFlow keeps cases, court dates, tasks, fees and secure documents in one calm workspace so the whole practice works from the same context.',
    outcome: 'Matters clearly in view',
    audience: 'Law firms, advocates and legal teams',
    features: ['Matter lifecycle', 'Court calendar', 'Secure document vault', 'Fees and collections'],
  },
  {
    id: 'aarogya',
    index: '03',
    name: 'Aarogya',
    category: 'Hospital operations',
    icon: 'local_hospital',
    url: 'https://aarogya-hospital-demo.prakhyat-qlb.chatgpt.site/',
    guide: '/guides/aarogya-client-guide.pdf',
    statement: 'One shared patient record from reception to pharmacy.',
    description: 'A role-based hospital workspace where registration, live queues, consultation, pharmacy and stock all follow the same patient journey.',
    outcome: 'One record, every team',
    audience: 'Hospitals, clinics and care teams',
    features: ['Patient registration', 'Doctor live queue', 'Clinical consultation', 'Pharmacy and inventory'],
  },
  {
    id: 'fitted-pos',
    index: '04',
    name: 'Fitted & Co. POS',
    category: 'Retail point of sale',
    icon: 'point_of_sale',
    url: 'https://fitted-and-co-pos.workaidlywriters.chatgpt.site/',
    guide: '/guides/fitted-and-co-pos-client-guide.pdf',
    statement: 'Fast counter billing with the stock intelligence behind it.',
    description: 'Fitted & Co. POS ties checkout to the stock behind every sale, from product variants and GST to payments, invoices and store reporting.',
    outcome: 'Checkout and stock, connected',
    audience: 'Fashion retailers and store teams',
    features: ['Barcode-ready billing', 'Variant-level inventory', 'GST invoices', 'Sales reporting'],
  },
  {
    id: 'silfira',
    index: '05',
    name: 'Silfira',
    category: 'Luxury property discovery',
    icon: 'hotel',
    url: 'https://www.silfira.co.in/',
    statement: 'Property discovery designed to feel measured, premium and direct.',
    description: 'Silfira brings curated listings, rich property presentation and a frictionless enquiry journey into one unhurried real-estate experience.',
    outcome: 'Discovery to enquiry',
    audience: 'Property firms, buyers and investors',
    features: ['Curated listings', 'Featured properties', 'Valuation requests', 'Enquiry capture'],
  },
  {
    id: 'netrafly',
    index: '06',
    name: 'Netra Fly Overseas',
    category: 'Global trade experience',
    icon: 'public',
    url: 'https://netraflyoverseas.com/',
    statement: 'A broad export catalogue shaped into clear buying journeys.',
    description: 'Netra Fly combines product discovery, trade credentials and international offices so wholesale buyers can move confidently from category to bulk quote.',
    outcome: 'Catalogue to global enquiry',
    audience: 'Exporters, buyers and trade partners',
    features: ['Category catalogue', 'Bulk quote journeys', 'Trade credentials', 'Global offices'],
  },
  {
    id: 'ezee-controls',
    index: '07',
    name: 'Ezee Controls',
    category: 'Industrial engineering platform',
    icon: 'precision_manufacturing',
    url: 'https://www.ezeecontrols.com/',
    embeddable: false,
    statement: 'A clear path from the first product brief to serial production.',
    description: 'Ezee Controls makes OEM, ODM, engineering and manufacturing capabilities easier to understand, compare and enquire about.',
    outcome: 'Concept to serial production',
    audience: 'Product, engineering and procurement teams',
    features: ['OEM and ODM', 'Product engineering', 'Control systems', 'Manufacturing support'],
  },
]

function LivePreview({ product, loaded, onLoad, eager }) {
  const host = new URL(product.url).hostname

  return (
    <section className="product-live-panel" aria-label={`${product.name} live preview`}>
      <div className="product-browser-bar">
        <div className="product-browser-dots" aria-hidden="true"><span /><span /><span /></div>
        <div className="product-browser-address">
          <span className="material-symbols-outlined" aria-hidden="true">lock</span>
          <span>{host}</span>
        </div>
        <a href={product.url} target="_blank" rel="noreferrer" className="product-browser-open" aria-label={`Open ${product.name} in a new tab`}>
          <span className="material-symbols-outlined" aria-hidden="true">open_in_new</span>
        </a>
      </div>

      <div className={`product-live-frame ${loaded || product.embeddable === false ? 'is-loaded' : ''}`}>
        {product.embeddable === false ? (
          <div className="product-external-preview">
            <span className="material-symbols-outlined" aria-hidden="true">precision_manufacturing</span>
            <small>Live site · Protected preview</small>
            <h3>{product.name}</h3>
            <p>This website prevents embedded viewing. Open the live experience directly to explore its engineering and manufacturing capabilities.</p>
            <a href={product.url} target="_blank" rel="noreferrer">Open live website <span aria-hidden="true">↗</span></a>
          </div>
        ) : (
          <>
            <div className="product-preview-loading" aria-live="polite"><span /> Loading live product</div>
            <iframe
              src={product.url}
              title={`${product.name} live website`}
              loading={eager ? 'eager' : 'lazy'}
              referrerPolicy="strict-origin-when-cross-origin"
              onLoad={onLoad}
            />
          </>
        )}
        <div className="product-live-status">
          <span><i aria-hidden="true" /> {product.embeddable === false ? 'External live site' : 'Live website'}</span>
          <a href={product.url} target="_blank" rel="noreferrer">Open full screen <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  )
}

function ProductStory({ product }) {
  return (
    <aside className="product-story-panel">
      <div className="product-story-topline">
        <span>{product.index} / {String(products.length).padStart(2, '0')}</span>
        <span className="product-live-badge"><i aria-hidden="true" /> Live</span>
      </div>
      <div className="product-story-heading">
        <span className="material-symbols-outlined" aria-hidden="true">{product.icon}</span>
        <p>{product.category}</p>
      </div>
      <h2 id={`${product.id}-title`}>{product.name}</h2>
      <p className="product-story-statement">{product.statement}</p>
      <p className="product-story-description">{product.description}</p>

      <dl className="product-story-facts">
        <div><dt>Core outcome</dt><dd>{product.outcome}</dd></div>
        <div><dt>Built for</dt><dd>{product.audience}</dd></div>
      </dl>

      <div className="product-story-features">
        <span className="product-story-label">Inside the product</span>
        <ul>
          {product.features.map((feature) => (
            <li key={feature}><span className="material-symbols-outlined" aria-hidden="true">check</span>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="product-story-actions">
        <Link to="/contact" className="product-story-primary">Discuss a similar build <span aria-hidden="true">↗</span></Link>
        {product.guide ? (
          <a href={product.guide} target="_blank" rel="noreferrer" className="product-story-secondary">Client guide <span aria-hidden="true">↓</span></a>
        ) : (
          <a href={product.url} target="_blank" rel="noreferrer" className="product-story-secondary">Visit site <span aria-hidden="true">↗</span></a>
        )}
      </div>
    </aside>
  )
}

export default function Products() {
  const [loadedPreviews, setLoadedPreviews] = useState({})
  const markLoaded = (id) => setLoadedPreviews((current) => ({ ...current, [id]: true }))

  return (
    <div id="main-content" className="product-showcase-page">
      <Nav />
      <main className="product-showcase-main">
        <header className="product-showcase-intro">
          <div>
            <span className="product-showcase-eyebrow">Selected work · Seven live products</span>
            <h1>See the product. <em>Then read the story.</em></h1>
          </div>
          <p>Working software, shown in context. Move through the collection to see what each product does and why it exists.</p>
        </header>

        <div className="product-showcase-list">
          {products.map((product, index) => (
            <article
              key={product.id}
              className={`product-showcase-shell product-showcase-row ${index % 2 ? 'is-reversed' : ''}`}
              aria-labelledby={`${product.id}-title`}
            >
              <LivePreview
                product={product}
                loaded={Boolean(loadedPreviews[product.id])}
                onLoad={() => markLoaded(product.id)}
                eager={index === 0}
              />
              <ProductStory product={product} />
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
