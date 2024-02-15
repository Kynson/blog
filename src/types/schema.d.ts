interface TypedObject {
  _type: string,
  _key: string,
}

type GenericBlock = TypedObject & {
  [key: string]: any,
}

type FileAsset = {
  url: string
}

interface AccessibleImageMetadata {
  blurHash: string,
  width: number,
  height: number,
}
type AccessibleImageAsset = FileAsset & {
  metadata: AccessibleImageMetadata,
}

interface AccessibleImage {
  alt: string,
  asset: AccessibleImageAsset,
  // RichText is essentially a block
  caption?: GenericBlock[],
}

type BuiltinLanguages = 'typescript' | 'shellscript' | 'html' | 'css' | 'rust' | 'python';

interface CodeBlock {
  language: BuiltinLanguages,
  code: string,
}

interface Callout {
  style: 'info' | 'warning' | 'danger',
  title: string,
  // RichText is essentially a block
  content: GenericBlock[],
}

interface TerminalRecording {
  asset: FileAsset,
  cols: number,
  rows: number,
  controls: 'enabled' | 'disabled' | 'auto',
}

interface Embed {
  src: string,
  title: string,
  maxWidth?: number,
  height?: number,
  allow?: string,
  sandbox?: string,
  style?: string,
}

type PostBlockContent = TypedObject & (AccessibleImage | Callout | CodeBlock | TerminalRecording | Embed) | GenericBlock;

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