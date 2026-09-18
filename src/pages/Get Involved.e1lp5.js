// Velo Page Code - Become a Fellow (Get Involved)
import { FELLOWSHIP_PROGRAM, BRAND } from 'public/siteContent';

$w.onReady(function () {
  // 1. Populate Fellowship Hero & Ethos
  try {
    if ($w('#fellowshipTitle')) {
      $w('#fellowshipTitle').text = FELLOWSHIP_PROGRAM.headline;
    }
    if ($w('#fellowshipEthos')) {
      $w('#fellowshipEthos').text = FELLOWSHIP_PROGRAM.ethos;
    }
  } catch (e) {}

  // 2. Populate Benefits Repeater if present
  try {
    const benefitsRepeater = $w('#benefitsRepeater');
    if (benefitsRepeater && typeof benefitsRepeater.data !== 'undefined') {
      benefitsRepeater.data = FELLOWSHIP_PROGRAM.benefits.map((b, idx) => ({
        _id: `benefit-${idx}`,
        ...b
      }));

      benefitsRepeater.onItemReady(($item, itemData) => {
        if ($item('#benefitTitle')) $item('#benefitTitle').text = itemData.title;
        if ($item('#benefitDesc')) $item('#benefitDesc').text = itemData.description;
      });
    }
  } catch (e) {}

  // 3. Fellowship Application Form Handling & Validation
  try {
    const submitBtn = $w('#btnSubmitFellowship') || $w('#submitApplication');
    if (submitBtn) {
      submitBtn.onClick(async () => {
        const fullName = $w('#inputFullName')?.value;
        const email = $w('#inputEmail')?.value;
        const country = $w('#inputCountry')?.value;
        const org = $w('#inputOrg')?.value;
        const role = $w('#inputRole')?.value;
        const contribution = $w('#inputContribution')?.value;

        // Validation
        if (!fullName || !email || !country || !org || !role) {
          if ($w('#formErrorMsg')) {
            $w('#formErrorMsg').text = 'Please complete all required fields (*).';
            $w('#formErrorMsg').show();
          }
          return;
        }

        // Check 150 words limit for contribution essay
        if (contribution) {
          const wordCount = contribution.trim().split(/\s+/).length;
          if (wordCount > 150) {
            if ($w('#formErrorMsg')) {
              $w('#formErrorMsg').text = `Your contribution essay exceeds 150 words (currently ${wordCount} words).`;
              $w('#formErrorMsg').show();
            }
            return;
          }
        }

        // Success state
        if ($w('#formSuccessMsg')) {
          $w('#formSuccessMsg').text = 'Thank you for applying to the TransformED Future Schools Fellowship! Our country committee will review your application.';
          $w('#formSuccessMsg').show();
        }
        if ($w('#formErrorMsg')) $w('#formErrorMsg').hide();
      });
    }
  } catch (e) {}
});
