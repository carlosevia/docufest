import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout
      title="DocuFest"
      description="Documentation, content design, and content operations at Virginia Tech"
    >
      <header className="hero hero--primary">
        <div className="container">
          <h1 className="hero__title">DocuFest</h1>
          <p className="hero__subtitle">
            Learn, build, and ship great docs — powered by Docusaurus and styled in Virginia Tech colors.
          </p>

          <div className="buttons" style={{gap: '0.75rem', display: 'flex', flexWrap: 'wrap'}}>
            <Link className="button button--secondary button--lg" to="/docs/intro">
              Read the Docs
            </Link>
            <Link className="button button--accent button--lg" to="https://github.com/carlosevia/docufest">
              View on GitHub
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Audience cards */}
        <section className="margin-vert--lg">
          <div className="container">
            <div className="row">
              <div className="col col--4">
                <h3>For Writers</h3>
                <p>
                  Draft in Markdown, organize with a docs sidebar, and keep voice and tone consistent.
                </p>
              </div>
              <div className="col col--4">
                <h3>For Editors</h3>
                <p>
                  Review Pull Requests, preview changes, and version content safely with Git.
                </p>
              </div>
              <div className="col col--4">
                <h3>For Engineers</h3>
                <p>
                  Reuse components, automate builds with GitHub Actions, and deploy to GitHub Pages.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick start */}
        <section className="margin-vert--lg">
          <div className="container">
            <h2 className="margin-bottom--sm">Get Started</h2>
            <ol>
              <li>
                Open the <Link to="/docs/intro">Introduction</Link> to learn the basics.
              </li>
              <li>
                Edit files in <code>docs/</code>, commit, and push to <code>main</code>.
              </li>
              <li>
                GitHub Actions builds your site and publishes it to{' '}
                <code>https://carlosevia.github.io/docufest/</code>.
              </li>
            </ol>
          </div>
        </section>

        {/* What’s inside */}
        <section className="margin-vert--lg">
          <div className="container">
            <h2 className="margin-bottom--sm">What’s Inside</h2>
            <ul>
              <li>Docs with search and a structured sidebar</li>
              <li>Optional blog with tags and archives</li>
              <li>Custom Virginia Tech color theme and components</li>
            </ul>
          </div>
        </section>
      </main>
    </Layout>
  );
}
