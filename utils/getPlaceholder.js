import blurHashData from "../lib/placeholderData.json";

export default function getBlurHash(fileName) {
  const hash =
    blurHashData.find(({ name }) => name === fileName)?.blurHash || undefined;
  return hash;
}
