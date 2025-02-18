import React, { useEffect, useState } from 'react';
import { useLocation } from '@docusaurus/router';

const MIN_SCALE = 0.8;
const MAX_SCALE = 1.5;
const STEP = 0.1;

export default function FontScaleControls(): JSX.Element | null {
  const location = useLocation();
  const [headingScale, setHeadingScale] = useState(1);
  const [textScale, setTextScale] = useState(1);
  const [isMinimized, setIsMinimized] = useState(false);

  // Reset scales when navigating to a new page
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--doc-heading-scale', '1');
    root.style.setProperty('--doc-text-scale', '1');
    setHeadingScale(1);
    setTextScale(1);
  }, [location]);

  const updateScale = (type: 'heading' | 'text', increase: boolean) => {
    const scale = type === 'heading' ? headingScale : textScale;
    const setScale = type === 'heading' ? setHeadingScale : setTextScale;
    const property = type === 'heading' ? '--doc-heading-scale' : '--doc-text-scale';
    
    let newScale = increase ? scale + STEP : scale - STEP;
    newScale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, newScale));
    
    document.documentElement.style.setProperty(property, String(newScale));
    setScale(newScale);
  };

  const resetScales = () => {
    document.documentElement.style.setProperty('--doc-heading-scale', '1');
    document.documentElement.style.setProperty('--doc-text-scale', '1');
    setHeadingScale(1);
    setTextScale(1);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  // Only show on doc pages
  if (!location.pathname.includes('/docs/')) {
    return null;
  }

  return (
    <div className={`font-scale-controls ${isMinimized ? 'minimized' : ''}`}>
      <button
        className="font-scale-button minimize-button"
        onClick={toggleMinimize}
        title={isMinimized ? "Expand Controls" : "Minimize Controls"}
        aria-label={isMinimized ? "Expand Controls" : "Minimize Controls"}
      />
      <button
        className="font-scale-button"
        onClick={() => updateScale('heading', true)}
        title="Increase Heading Size"
        aria-label="Increase Heading Size"
      >
        H+
      </button>
      <button
        className="font-scale-button"
        onClick={() => updateScale('heading', false)}
        title="Decrease Heading Size"
        aria-label="Decrease Heading Size"
      >
        H-
      </button>
      <button
        className="font-scale-button"
        onClick={() => updateScale('text', true)}
        title="Increase Text Size"
        aria-label="Increase Text Size"
      >
        T+
      </button>
      <button
        className="font-scale-button"
        onClick={() => updateScale('text', false)}
        title="Decrease Text Size"
        aria-label="Decrease Text Size"
      >
        T-
      </button>
      <button
        className="font-scale-button font-scale-reset"
        onClick={resetScales}
        title="Reset Font Sizes"
        aria-label="Reset Font Sizes"
      >
        R
      </button>
    </div>
  );
} 