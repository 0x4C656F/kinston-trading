# Kins West Trading

Company website for KINS WEST TRADING CO. LTD: furniture, lighting, audio, medical and swimming-pool equipment, B2B supply and European logistics.

## Run locally

Use Node.js 22 and npm.

```sh
npm ci
npm run dev
```

Production build and local production server:

```sh
npm run build
npm start
```

The approved design and content are preserved from the Sites review version. This repository uses Next.js 16 and React 19 for the existing Vercel deployment. `vercel.json` explicitly selects the Next.js framework, npm installation, build command and `.next` output so the former SvelteKit settings do not determine this deployment. No application secrets or external services are required.

## Content and routes

- `app/site-data.ts`: company details and five sectors.
- `app/catalogue.json` and `app/brands.ts`: 28 supplier/manufacturer profiles.
- `app/hero-carousel.tsx` and `lib/hero-rotation.ts`: five-slide automatic hero.
- `app/globals.css`: approved responsive styling.
- `public/images/`: locally served photographs.
- `reference/`: content and image provenance.

The existing category URLs remain: `/categories/furniture`, `/categories/lights`, `/categories/audio`; medical and pool equipment and their brand pages extend the site. Company-domain metadata and search indexing are enabled for production at `https://www.kins-west.co.uk`.

## Restore the previous site

The original source and full Git history were archived before migration. Original production commit:

`22e83a04b39731d6fa7076d89899eae8bd82082c`

[Browse or download the original site](https://github.com/levlavryniuk/kinston-trading/tree/22e83a04b39731d6fa7076d89899eae8bd82082c).

For an immediate service rollback, select the former production deployment in the existing Vercel project. To restore the source without deleting later history, create a restoration branch from current `origin/main` in a clean checkout:

```sh
git fetch origin
git switch -c restore-original origin/main
git restore --source=22e83a04b39731d6fa7076d89899eae8bd82082c --staged --worktree -- .
git commit -m "Restore original website"
git push -u origin restore-original
```

Review and merge that restoration branch into `main`. The original SvelteKit/Vercel configuration and lockfile are restored with the source. A separate complete Git bundle, source archive and checksums are also kept in the owner's local backup folder. DNS and Vercel account settings are not part of a Git source archive.
