# Harshil Shah Portfolio — Product Requirements Document

## 1. Product summary

A focused one-page portfolio for Harshil Shah that communicates product thinking, project-management experience, and technical fluency. The visual direction reinterprets Gen X Soft Club for a modern, accessible web experience: late-1990s urban futurism, quiet editorial layouts, muted natural colours, soft-focus imagery, transit-system cues, and restrained motion.

The site should feel calm, intelligent, slightly nostalgic, and operational—not like a conventional “Y2K” theme or a novelty retro interface.

## 2. Research synthesis

The Consumer Aesthetics Research Institute describes Gen X Soft Club as a more natural counterpart to contemporaneous Y2K and McBling aesthetics. Aesthetics Wiki identifies its recurring motifs as urban typography, metros and airports, cityscapes, minimalism, plants/nature, Lomo-like blur, bloom, and muted greens, blues, beiges, greys, and black. Contemporary explainers similarly frame it as a fusion of minimalism and retro-futurism.

Design translation:

- Muted mineral palette: eucalyptus, fog, stone, steel-blue, charcoal, with a controlled acid-lime signal colour.
- Neo-grotesque typography for functional information, paired with an editorial italic serif for human warmth.
- Large cinematic portrait treatment with colour grading, haze, grain, radial light, and soft bloom.
- Transit-inspired metadata: coordinates, route history, numbered sections, fine rules, status markers, and compact uppercase labels.
- Minimal chrome and generous negative space, avoiding gratuitous retro UI decoration.
- Ambient motion that suggests screensavers, music visuals, and transport rather than loud interaction effects.

Sources:

- [Consumer Aesthetics Research Institute — Gen X Soft Club](https://cari.institute/aesthetics/gen-x-soft-club)
- [Aesthetics Wiki — Gen X Soft Club](https://aesthetics.fandom.com/wiki/Gen_X_Soft_Club)
- [Preview — Gen X Soft Club aesthetic explainer](https://www.preview.ph/fashion/gen-x-soft-club-aesthetic-explainer-a00388-20231102)

## 3. Goals and success criteria

### Primary goals

1. Make Harshil’s professional direction understandable within ten seconds.
2. Make selected work and experience easy to scan in under two minutes.
3. Turn the visual aesthetic into a memorable but credible product-management portfolio.
4. Drive résumé views, project visits, and direct contact.

### Success signals

- A visitor can identify Harshil, his discipline, school, and current status above the fold.
- Every featured project has a problem-oriented description, tags, and a clear destination or status.
- Email, LinkedIn, GitHub, and résumé are reachable from obvious locations.
- The page remains functional at 320px width, keyboard navigable, readable at 200% zoom, and respectful of reduced-motion preferences.
- No essential content depends on JavaScript.

## 4. Audience

- Product and program-management recruiters.
- Hiring managers in technology, financial services, and complex operational environments.
- Potential collaborators and peers evaluating Harshil’s work and interests.

## 5. Information architecture

1. Hero: identity, positioning, status, résumé and work actions.
2. Selected work: CivicLens, ShiftSync, and Spotify Album Finder.
3. Experience: American Express, Dayforce, Suncor, and BlackBerry QNX.
4. About: working style, cross-functional perspective, interests, and focus areas.
5. Contact: email, LinkedIn, GitHub, résumé.

## 6. Functional requirements

- Sticky responsive navigation with scroll-state contrast change.
- Semantic sections and heading hierarchy.
- Project cards with working external links and safe new-tab behaviour.
- Résumé links target `assets/cv/Harshil_Shah_Resume_2026.pdf`.
- Scroll-reveal motion using Intersection Observer.
- Light pointer-driven ambient parallax on capable devices.
- CSS-based project artwork so the experience has no stock-image dependency.
- Full reduced-motion fallback, visible content without Intersection Observer, and a keyboard skip link.

## 7. Interaction and motion principles

- Motion should clarify state or add atmosphere, never delay navigation.
- Reveals use a short upward fade with a soft easing curve.
- Decorative visuals use slow, continuous motion: orbit pulses, a rotating disc, and gentle equalizer movement.
- Hero light forms respond subtly to pointer position.
- Hover states use small positional or underline transitions.
- `prefers-reduced-motion` removes all nonessential animation and smooth scrolling.

## 8. Visual system

- Primary: charcoal `#18201e`.
- Surfaces: fog `#edf0eb`, mist `#dbe4df`, paper `#f4f2e9`.
- Signal: acid-lime `#c8df3d`, used sparingly for status and navigation cues.
- Typography: DM Sans for interface/content; Instrument Serif italic for expressive emphasis; system fallbacks included.
- Layout: wide editorial grid, strong rule lines, oversized headlines, compact metadata.
- Photography: existing portrait, editorial crop, reduced saturation, subtle colour cast and haze.

## 9. Content constraints and assumptions

- The current Harshil Shah page and the new Harshil résumé filename are treated as authoritative.
- Existing unused JavaScript mentioning Meraj Rahman is stale and should not be loaded.
- ShiftSync has no public URL in the repository, so it is presented as a concept rather than a broken link.
- Claims are kept close to the existing portfolio copy and avoid unsupported metrics.

## 10. Out of scope for this version

- CMS or admin interface.
- Contact-form backend.
- Analytics and conversion tracking.
- Multi-page project case studies.
- Live GitHub API dependency.
