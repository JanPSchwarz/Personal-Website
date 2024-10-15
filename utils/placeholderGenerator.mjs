"use server";
import { g } from "framer-motion/client";
import sharp from "sharp";

export default async function generateThumbhash(imagePath) {
  try {
    const image = sharp(imagePath)
      .resize(100, 100, {
        fit: `inside`,
      })
      .extend({
        // right: 1,
        // left: 1,
        // top: 1,
        // bottom: 1,
        extendWith: "background",
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .blur(1)
      .webp({
        quality: 70,
        lossless: false,
        alphaQuality: 100,
        effort: 6,
      });

    const buffer = await image.toBuffer();

    const base64HashURL = `data:image/webp;base64,${buffer.toString(`base64`)}`;

    return base64HashURL;
  } catch (error) {
    console.error(`Error generating base64String:`, error);
    return null;
  }
}
