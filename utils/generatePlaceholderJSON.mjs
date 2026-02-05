import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import placeholderGenerator from "./placeholderGenerator.mjs";

async function getAllImages(dir) {
  let results = [];
  const list = await fs.readdir(dir, { withFileTypes: true });

  for (const file of list) {
    const filePath = path.join(dir, file.name);
    if (file.isDirectory()) {
      results = results.concat(await getAllImages(filePath));
    } else if (/\.(jpg|jpeg|png|gif|webp)$/i.test(file.name)) {
      results.push(filePath);
    }
  }
  return results;
}

async function main() {
  const currentDirectory = fileURLToPath(import.meta.url);
  const projectRoot = path.join(currentDirectory, "..", "..");
  const imagesDir = path.join(projectRoot, `public`);
  console.log(`\nScanning images in: ${imagesDir}`);
  const blurHashData = [];

  try {
    const imageFiles = await getAllImages(imagesDir);
    console.log(
      `\nFound ${imageFiles.length} image(s). Generating blurhash data...\n`,
    );
    let count = 0;

    for (const filePath of imageFiles) {
      const thumbhash = await placeholderGenerator(filePath);
      blurHashData.push({ name: path.basename(filePath), blurHash: thumbhash });
      count += 1;
      process.stdout.write(
        `\rGenerated ${count}/${imageFiles.length} blurhashes...`,
      );
    }
    console.log(
      `\nAll blurhashes generated. Writing to placeholderData.json...`,
    );
    await fs.writeFile(
      path.join(projectRoot, `lib`, `placeholderData.json`),
      JSON.stringify(blurHashData, null, 2),
    );
    console.log("\nblurhashData generated successfully 🎉\n");
  } catch (error) {
    console.error("Failed:", error);
  }
}

main();
