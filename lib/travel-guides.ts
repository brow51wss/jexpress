/**
 * Travel guide posts without a real cover image stay hidden from the listing
 * and return 404 on their individual pages until images are added.
 */
export function isTravelGuidePublished(coverImage: string): boolean {
  return Boolean(coverImage && !coverImage.includes('placeholder'))
}
