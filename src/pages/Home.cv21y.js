// Velo Homepage Code - TransformED Asia Pacific
import { HOMEPAGE_CONTENT, BRAND } from 'public/siteContent';

$w.onReady(function () {
  // 1. Configure Hero Section
  try {
    if ($w('#heroTitle')) {
      $w('#heroTitle').text = HOMEPAGE_CONTENT.hero.title;
    }
    if ($w('#heroSubtitle')) {
      $w('#heroSubtitle').text = HOMEPAGE_CONTENT.hero.subtitle;
    }
    if ($w('#heroPrimaryBtn')) {
      $w('#heroPrimaryBtn').label = HOMEPAGE_CONTENT.hero.ctaPrimary.label;
      $w('#heroPrimaryBtn').link = HOMEPAGE_CONTENT.hero.ctaPrimary.link;
    }
    if ($w('#heroSecondaryBtn')) {
      $w('#heroSecondaryBtn').label = HOMEPAGE_CONTENT.hero.ctaSecondary.label;
      $w('#heroSecondaryBtn').link = HOMEPAGE_CONTENT.hero.ctaSecondary.link;
    }
  } catch (e) {}

  // 2. Configure Mission & Vision Section
  try {
    if ($w('#missionText')) {
      $w('#missionText').text = HOMEPAGE_CONTENT.missionVision.mission;
    }
    if ($w('#visionText')) {
      $w('#visionText').text = HOMEPAGE_CONTENT.missionVision.vision;
    }
  } catch (e) {}

  // 3. Configure Upcoming Events (2026/2027 Updates)
  try {
    const eventsRepeater = $w('#eventsRepeater');
    if (eventsRepeater && typeof eventsRepeater.data !== 'undefined') {
      eventsRepeater.data = HOMEPAGE_CONTENT.upcomingEvents.map((evt, idx) => ({
        _id: `evt-${idx}`,
        ...evt
      }));

      eventsRepeater.onItemReady(($item, itemData) => {
        if ($item('#eventTitle')) $item('#eventTitle').text = itemData.title;
        if ($item('#eventDate')) $item('#eventDate').text = `${itemData.date} • ${itemData.location}`;
        if ($item('#eventDesc')) $item('#eventDesc').text = itemData.description;
      });
    }
  } catch (e) {}
});
