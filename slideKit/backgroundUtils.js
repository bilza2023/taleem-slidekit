
// backgroundUtils.js

/**
 * Deep-clones the base background and applies any per-slide overrides.
 *
 * @param {object} baseBackground  The global background object
 * @param {object} override        Partial background overrides
 * @returns {object}               New background object for a slide
 */
export function cloneBackground(baseBackground, override = {}) {
    // Deep clone via structuredClone if available, otherwise JSON fallback
    const cloned = typeof structuredClone === 'function'
      ? structuredClone(baseBackground)
      : JSON.parse(JSON.stringify(baseBackground));
  
    // Merge in any slide-specific overrides
    return { ...cloned, ...override };
  }
   