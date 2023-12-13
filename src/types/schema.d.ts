interface ImageMetadata {
  blurHash: string,
  width: number,
  height: number,
}
interface ImageAsset {
  url: string,
  metadata: ImageMetadata,
}

interface AccessibleImage {
  alt: string,
  asset: ImageAsset,
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