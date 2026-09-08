# Content and design notes — 7 September 2026

The user confirmed KINS WEST TRADING CO. LTD, company number 15860450, its Watford registered office and the existing email/phone. The user requested a corporate business-card website with furniture, audio, lighting and medical supply, including only non-Ukrainian medical manufacturers from iminstrument.com.

## Sources

- https://www.kins-west.co.uk/ — existing business description, Europe/Ukraine delivery and contacts; hero and category images.
- https://www.kins-west.co.uk/categories/furniture — all 10 original company names preserved.
- https://www.kins-west.co.uk/categories/lights — all 4 original company names preserved.
- https://www.kins-west.co.uk/categories/audio — all 7 original company names preserved. The original source includes suppliers as well as brands; these are deliberately labelled product sources rather than all being called manufacturers.
- https://find-and-update.company-information.service.gov.uk/company/15860450 — legal name, company number, registered address.
- https://iminstrument.com/ — four non-Ukrainian manufacturers: Geister, Hadeco, Meril, SINAPI. Slavna and GOLNIT are omitted as requested.
- https://iminstrument.com/geister/ — surgical product categories and supplied Geister product image; source image: https://iminstrument.com/assets/geister/photos/_hero/micro-scissors-cut.webp
- https://iminstrument.com/hadeco-ua/ — Japan, ultrasonic Dopplers and flowmetry.
- https://iminstrument.com/meril/ — India, cardiovascular devices and sutures.
- https://iminstrument.com/sinapi/ — South Africa, chest drainage.
- https://www.geister.com/impressum/ — Germany; https://www.hadeco.co.jp/ — official manufacturer; https://www.merillife.com/ — India; https://sinapibiomedical.com/how-can-we-help/ — South Africa.

Descriptions are newly written concise summaries. Supplying the four medical brands is the user's business assertion. No exclusive/official distributor status, certification, clinical efficacy, turnover, staff counts, warehouse ownership or service history has been inferred from Medinnovation. No medical services or pharmaceutical distribution is claimed.

## Design directions considered

1. Recommended and implemented: understated corporate style, white and deep navy, restrained blue accents, prominent registration details and four product sectors.
2. More editorial: larger interior photography and gallery-style category pages, with a stronger furniture/design identity.
3. More operational: denser company and delivery information, smaller imagery, procurement-oriented presentation.

The implemented direction fits the user's request for a solid corporate identity across four different areas of supply. The original public frontend is retained in `original-site/`, with asset provenance in `original-manifest.json`. It is a snapshot of published HTML/CSS/JS/assets, not access to the original development repository.

## Brand-depth expansion

Added a brand-profile layer under each existing sector. Medical product imagery and short descriptions are from the four user-supplied Medinnovation reference pages above. These profiles identify product families and invite supply enquiries; they do not reproduce clinical instructions or infer a Kins West official-distributor status. Full image provenance for the other sectors is retained under `brand-research/`.

The user confirmed that the Tandem Company design studio found during research is their supplier. Its profile is therefore described as design work, rather than manufacturing. Retail and distribution companies are also described according to their verified role.

Medical assets: Geister `card-speroni.webp`, `neuro-krex-gold.webp`, `micro-structurae-color.webp` from `/assets/geister/photos/_hero/`; Hadeco `dvm-4500.png`, `smartdop-30ex.png`, `minidop.png` from `/assets/hadeco/display/`; Meril `myval-cut.png`, `biomime.png`, `mozec-rx.png` from `/assets/meril/clean/`; SINAPI `xl2200s-cutout.webp`, `xl1150sci-cutout.webp`, `xs100-local.webp` from `/assets/sinapi/local/`. All these paths are on https://iminstrument.com and were observed in the supplied brand pages on 7 September 2026. Original downloaded files are preserved.

## Current publication

The user subsequently requested public access to this separate Sites review version; it is now accessible to anyone with its URL. The existing kins-west.co.uk website and its DNS have not been changed. Search indexing is disabled for the review version. When migration to the company domain is requested, review the production origin and indexing settings and point the domain at the approved hosting. A company-domain email is a suggested later improvement; the user confirmed retaining the present working address.

## B2B company profile

The user explicitly supplied the following business facts: B2B sales and professional transport/delivery across the listed sectors; company-owned warehouses within the European Union; storage, transportation and business-project support with full documentation. The updated hero, company profile, contact invitation and metadata reflect these user-provided facts. Warehouse locations, capacities, licences and certifications have not been inferred or added. These operational facts are user-supplied, not independently audited.

## Pool equipment expansion

At the user’s request, added a fifth sector with Pentair, Hayward and AstralPool manufacturer profiles. Product areas cover pumps, filtration and automation or water treatment. Descriptions are original summaries of official European and UK manufacturer catalogues; source URLs and image provenance are retained in `brand-research/pool.json`. The site invites B2B supply enquiries, with specifications and availability confirmed individually. It does not claim official or exclusive distributor status, installation services, guaranteed stock or a particular commercial relationship. The home introduction, company profile, metadata, sector navigation and footer include pool equipment.

## Home sector slideshow

The user requested rotating hero photographs to introduce the full product scope. The five frames reuse existing sourced images: original furniture, Pro-Ject turntable from Audio Tuning, Geister microsurgical instrument, Lee Broom lighting and the Hayward pool setting. No new imagery or manufacturer claims were added. The existing carousel component provides looping and touch navigation, with six-second automatic progression, labelled sector selectors, a pause/play control and a link to the displayed sector. Autoplay stops after manual navigation or keyboard focus, pauses while hovered or the page is hidden, and starts disabled when reduced motion is preferred.

## Company profile visual balance

Added a flexible warehouse photograph beneath the left-hand heading to balance the height of the company description. The image is illustrative stock photography, not a photograph of Kins West premises. Source: Junseong Lee, https://unsplash.com/photos/a-large-warehouse-filled-with-lots-of-boxes-WKMOPVvlLvo . Exact downloaded image: https://images.unsplash.com/photo-1643894440673-553350d13370?auto=format&fit=crop&fm=jpg&q=88&w=1800 . Free under the Unsplash License (https://unsplash.com/license), verified 7 September 2026. Optimised to WebP for the site. Existing operational statements are unchanged. On mobile, the photograph uses a fixed landscape proportion above the company text.

## Manufacturer outbound links removed

At the user’s request, the shared brand-page navigation no longer renders outbound manufacturer or supplier website links. All 28 brand profiles retain internal product-area and supply-enquiry navigation. Research URLs remain private source provenance and are not visitor navigation.

## Pool photograph quality upgrade

Replaced the 550×400 pool photograph with a high-resolution poolside leisure photograph by Pure house On the lake: https://www.pexels.com/photo/relaxing-poolside-at-palm-lined-resort-35023213/ . Original resolution is 6988×3931; the site uses an optimised 2400px-wide WebP. The same new asset is used in the pool category, homepage sector card and hero slideshow. People and a swimming pool remain the subject. This is illustrative stock imagery and makes no claim about company-owned premises. Source and Pexels licence details are recorded in `brand-research/pool.json`.

## Complete pool equipment range — 8 September 2026

Expanded the pool sector at the user's request to cover the pool's components as well as pumps. The sector has a 12-area visual index linking directly to product groups within the three manufacturer profiles. Those profiles now contain 20 illustrated groups in total: Pentair 5, Hayward 5, AstralPool 10. Added filtration, heating, controls, water treatment, robotic cleaning, skimmers, underwater lighting, ladders, covers and rollers, glass mosaic, return inlets, main drains and valves. The brand hero photographs now show a filter, a cleaning robot and an underwater light.

Product examples and photographs were checked against official Pentair Europe, Hayward UK and AstralPool pages. Source pages, exact asset URLs, original dimensions, product names and image-rights notes are retained in `brand-research/pool-*-range.json`. These official product assets are not described as openly licensed; any separate supplier permissions were not independently checked. Seventeen new images were converted to WebP without enlargement; the Clear Series valve is the manufacturer's product visualization. The three existing pump photographs remain in their circulation groups. No outbound manufacturer links, stock promises, official-dealer claims or installation services were added. Product fit and exact specifications are confirmed for each enquiry.

## Compact automatic hero — 8 September 2026

At the user's request, replaced the large white slideshow panel with a small sector name, link arrow and five subtle selectors directly over the photograph. Removed the secondary captions and visible play/pause control. A restrained lower gradient preserves text contrast across the existing photographs, and the medical instrument now has more image space.

Automatic rotation starts on load and continues every six seconds, including after manual selection and while the pointer is over the image. Dragging and hidden browser tabs pause the timer temporarily; rotation resumes on release or return to the tab. Reduced-motion preference removes sliding movement while preserving the explicitly requested automatic image changes. Timer lifecycle checks cover continuous loops, manual navigation, dragging, hidden tabs, reduced motion, reinitialisation and cleanup.

## Medical environment photograph — 8 September 2026

At the user's request, the medical sector now uses an operating-theatre photograph in the home sector card, rotating hero and medical category header. It shows two masked surgical staff, an operating light and clinical equipment, presenting the products in their working setting like the other sectors. The card no longer has a rotated cut-out treatment or empty image padding.

Source: cottonbro studio, https://www.pexels.com/photo/surgeons-working-on-a-patient-in-an-operating-room-7583384/ . Pexels License (https://www.pexels.com/license/) allows commercial website use and modification. The 4949×7420 original was optimised to a 2000px-wide WebP without enlargement; responsive cover positioning is set for each placement. Exact provenance and dimensions are retained in `brand-research/medical-theatre.json`. This is illustrative stock photography and does not depict or assert Kins West clinical services, facilities or staff. The category caption is generic medical supply, without implying the photographed equipment is Geister. The existing instrument image remains in the Geister product profile.

## Equipment-led medical scene — 8 September 2026

The user clarified that equipment must be the subject, with people secondary or absent. Replaced the surgical-team photograph in all three representative placements with vijay victor’s empty, equipped operating room: https://www.pexels.com/photo/operating-room-ready-to-use-20186736/ . The frame shows a surgical table, large monitor, anaesthesia workstation and other clinical apparatus. Central crops retain the key equipment in the narrow sector card and home slideshow; the category header shows a wider room view.

The source is 6720×4480; the published WebP is 2400×1600. Pexels License permits commercial website use and modification. Exact URL, author and dimensions are retained in `brand-research/medical-equipment-room.json`. This remains illustrative stock photography, with no assertion about company-owned clinical premises or supply of every pictured manufacturer. Product ranges and company services are unchanged.
