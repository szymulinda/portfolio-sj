import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve("public");
const sourceRoot = path.join(root, "projekty-zrodla");
const outRoot = path.join(root, "projekty");

const slugs = ["callnest", "glamour-kosmetik", "atb-bud", "mixmedix"];

const cream = { r: 242, g: 237, b: 226, alpha: 1 };

async function ensureDir(dir) {
  await fs.promises.mkdir(dir, { recursive: true });
}

async function findFavicon(dir) {
  const names = await fs.promises.readdir(dir);
  const match = names.find((name) => /^favicon\./i.test(name) || /^ikona\./i.test(name));
  return match ? path.join(dir, match) : null;
}

async function findPhotoSources(dir) {
  const names = await fs.promises.readdir(dir);
  return names
    .filter((name) => !/^favicon\./i.test(name) && !/^ikona\./i.test(name))
    .filter((name) => /\.(webp|png|jpe?g|avif)$/i.test(name))
    .sort()
    .map((name) => path.join(dir, name));
}

async function writePlaceholder(file) {
  await sharp({
    create: {
      width: 1600,
      height: 1200,
      channels: 3,
      background: cream,
    },
  })
    .webp({ quality: 82 })
    .toFile(file);
}

async function processSlug(slug) {
  const srcDir = path.join(sourceRoot, slug);
  const outDir = path.join(outRoot, slug);
  await ensureDir(outDir);

  const report = {
    slug,
    favicon: false,
    photos: 0,
    missingPhotos: [],
    files: [],
  };

  if (!fs.existsSync(srcDir)) {
    report.missingPhotos = ["01", "02", "03", "04"];
    report.faviconMissing = true;
    for (let i = 1; i <= 4; i += 1) {
      const file = path.join(outDir, `${String(i).padStart(2, "0")}.webp`);
      await writePlaceholder(file);
      report.files.push(file);
    }
    return report;
  }

  const favicon = await findFavicon(srcDir);
  if (favicon) {
    const outIcon = path.join(outDir, "ikona.png");
    await sharp(favicon)
      .resize(64, 64, { fit: "cover", position: "centre" })
      .png()
      .toFile(outIcon);
    report.favicon = true;
    report.files.push(outIcon);
  } else {
    report.faviconMissing = true;
  }

  const photos = await findPhotoSources(srcDir);
  for (let i = 0; i < 4; i += 1) {
    const label = String(i + 1).padStart(2, "0");
    const outFile = path.join(outDir, `${label}.webp`);
    if (photos[i]) {
      await sharp(photos[i])
        .resize({ width: 1600, withoutEnlargement: true })
        .webp({ quality: 82 })
        .toFile(outFile);
      report.photos += 1;
    } else {
      await writePlaceholder(outFile);
      report.missingPhotos.push(label);
    }
    report.files.push(outFile);
  }

  return report;
}

const reports = [];
for (const slug of slugs) {
  reports.push(await processSlug(slug));
}

const sourceBytes = await totalBytes(sourceRoot);
console.log(JSON.stringify({ sourceBytes, sourceMB: +(sourceBytes / 1024 / 1024).toFixed(2), reports }, null, 2));

async function totalBytes(dir) {
  if (!fs.existsSync(dir)) return 0;
  let sum = 0;
  async function walk(current) {
    for (const entry of await fs.promises.readdir(current, { withFileTypes: true })) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) await walk(full);
      else sum += (await fs.promises.stat(full)).size;
    }
  }
  await walk(dir);
  return sum;
}
