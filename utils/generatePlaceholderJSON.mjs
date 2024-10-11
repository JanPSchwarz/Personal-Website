"use server";
import fs from "node:fs/promises";
import path from "node:path";
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
  const imagesDir = path.join(process.cwd(), `public`);
  const blurHashData = [];

  try {
    const imageFiles = await getAllImages(imagesDir);

    for (const filePath of imageFiles) {
      const thumbhash = await placeholderGenerator(filePath);
      const relativePath = path.relative(imagesDir, filePath);
      blurHashData.push({ name: path.basename(filePath), blurHash: thumbhash });
    }
    await fs.writeFile(
      path.join(process.cwd(), `lib`, `placeholderData.json`),
      JSON.stringify(blurHashData, null, 2),
    );

    console.log("blurhashData generated");
  } catch (error) {
    console.error("Failed:", error);
  }
}

main();
