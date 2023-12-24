interface AccessibleImageMetadata {
  blurHash: string,
  width: number,
  height: number,
}
interface AccessibleImageAsset {
  url: string,
  metadata: AccessibleImageMetadata,
}

interface AccessibleImage {
  alt: string,
  asset: AccessibleImageAsset,
}

interface GenericBlock {
  [key: string]: unknown,
}

type PostBlockContent = AccessibleImage | GenericBlock;

interface Post {
  title: string,
  slug: string,
  postedAt: string,
  updatedAt: string,
  shortDescription: string,
  thumbnail: AccessibleImage,
  body: PostBlockContent[],
  tags?: string[],
}