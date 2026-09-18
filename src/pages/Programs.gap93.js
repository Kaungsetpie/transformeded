// Velo Page Code - Programs
import { CORE_PROGRAMS, BRAND } from 'public/siteContent';

$w.onReady(function () {
  // Populate Programs Repeater if present
  try {
    const programsRepeater = $w('#programsRepeater');
    if (programsRepeater && typeof programsRepeater.data !== 'undefined') {
      programsRepeater.data = CORE_PROGRAMS.map(p => ({
        _id: p.id,
        ...p
      }));

      programsRepeater.onItemReady(($item, itemData) => {
        if ($item('#progTitle')) $item('#progTitle').text = itemData.title;
        if ($item('#progTagline')) $item('#progTagline').text = itemData.tagline;
        if ($item('#progSummary')) $item('#progSummary').text = itemData.summary;
      });
    }
  } catch (e) {}
});
