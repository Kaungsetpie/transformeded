// Velo Master Page Code - TransformED Asia Pacific
import { BRAND, SECRETARIATS } from 'public/siteContent';

$w.onReady(function () {
  // 1. Initialize Site-Wide Brand & Navigation
  try {
    // Header CTA Button if present
    const headerCta = $w('#headerCta') || $w('#btnBecomeFellow');
    if (headerCta && typeof headerCta.link !== 'undefined') {
      headerCta.link = '/become-a-fellow';
      headerCta.label = 'Become a Fellow';
    }
  } catch (err) {
    // Graceful fallback if elements are not on DOM
  }

  // 2. Initialize Secretariat Addresses in Footer
  try {
    if ($w('#footerGlobalAddress')) {
      $w('#footerGlobalAddress').text = `${SECRETARIATS.global.organization}\n${SECRETARIATS.global.address}`;
    }
    if ($w('#footerApacAddress')) {
      $w('#footerApacAddress').text = `${SECRETARIATS.asiaPacific.organization}\n${SECRETARIATS.asiaPacific.address}\n${SECRETARIATS.asiaPacific.email}`;
    }
  } catch (err) {
    // Ignore missing footer elements
  }
});
