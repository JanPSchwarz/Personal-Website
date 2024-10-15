"use server";
import sharp from "sharp";

export default async function generateThumbhash(imagePath) {
  try {
    const image = sharp(imagePath)
      .resize(800, 800, {
        fit: `inside`,
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
