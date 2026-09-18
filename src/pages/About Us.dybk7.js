// Velo Page Code - About Us / Our Work
import { LEADERSHIP_TEAM, HOMEPAGE_CONTENT } from 'public/siteContent';

$w.onReady(function () {
  // Populate Leadership Team if repeaters exist
  try {
    const executiveRepeater = $w('#executiveRepeater');
    if (executiveRepeater && typeof executiveRepeater.data !== 'undefined') {
      executiveRepeater.data = LEADERSHIP_TEAM.executive.map((m, idx) => ({
        _id: `exec-${idx}`,
        ...m
      }));
      executiveRepeater.onItemReady(($item, itemData) => {
        if ($item('#memberName')) $item('#memberName').text = itemData.name;
        if ($item('#memberRole')) $item('#memberRole').text = itemData.role;
      });
    }

    const countryRepeater = $w('#countryTeamRepeater');
    if (countryRepeater && typeof countryRepeater.data !== 'undefined') {
      countryRepeater.data = LEADERSHIP_TEAM.countryTeam.map((m, idx) => ({
        _id: `country-${idx}`,
        ...m
      }));
      countryRepeater.onItemReady(($item, itemData) => {
        if ($item('#countryMemberName')) $item('#countryMemberName').text = itemData.name;
        if ($item('#countryName')) $item('#countryName').text = `${itemData.country} • ${itemData.role}`;
      });
    }
  } catch (e) {}
});
