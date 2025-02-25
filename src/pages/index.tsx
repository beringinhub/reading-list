import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { useAnalytics, trackEvent } from '../utils/firebase';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  const handleDocsClick = () => {
    trackEvent('docs_navigation_click', {
      source: 'homepage_header',
      destination: '/docs/intro'
    });
  };

  const handleGithubClick = () => {
    trackEvent('github_navigation_click', {
      source: 'homepage_header',
      destination: 'github_repo'
    });
  };

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <img 
          src="img/logo.png" 
          alt="BeringinHub Logo" 
          className={styles.logo}
          loading="eager"
        />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={clsx('button button--primary button--lg', styles.buttonPrimary)}
            to="/docs/intro"
            onClick={handleDocsClick}>
            Mulai Membaca 📚
          </Link>
          <Link
            className={clsx('button button--outline button--lg', styles.buttonSecondary)}
            href="https://github.com/BeringinHub/reading-list"
            onClick={handleGithubClick}>
            Lihat di GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomeFeatures() {
  const features = [
    {
      title: '📖 Koleksi Berkualitas',
      description: 'Kumpulan buku pilihan yang telah dikurasi untuk pengembangan diri dan bisnis.',
    },
    {
      title: '🚀 Praktis & Aplikatif',
      description: 'Konten yang mudah dipahami dan dapat langsung diterapkan.',
    },
    {
      title: '💡 Selalu Diperbarui',
      description: 'Konten yang terus diperbarui mengikuti perkembangan zaman.',
    },
  ];

  useEffect(() => {
    // Track when features section becomes visible
    trackEvent('features_section_view', {
      features_count: features.length
    });
  }, []);

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {features.map((feature, idx) => (
            <div key={idx} className={clsx('col col--4')}>
              <div className={styles.feature}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  const pageLoadTime = useRef(Date.now());
  
  // Initialize Analytics
  useAnalytics();

  useEffect(() => {
    // Track initial page load
    trackEvent('page_view', {
      page_title: siteConfig.title,
      page_location: window.location.href,
      page_path: window.location.pathname
    });

    // Track page view duration when component unmounts
    return () => {
      const duration = Math.round((Date.now() - pageLoadTime.current) / 1000);
      trackEvent('page_view_duration', {
        duration_seconds: duration,
        page_path: window.location.pathname
      });
    };
  }, [siteConfig.title]);

  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomeFeatures />
      </main>
    </Layout>
  );
} 