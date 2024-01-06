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

// Copied from Shiki, LICENSE: MIT
// We can't import from shiki as this will break this ambient file
// Note: Update the following if Shiki updates the language it supports
type BuiltinLanguage = 'abap'
  | 'actionscript-3'
  | 'ada'
  | 'apache'
  | 'apex'
  | 'apl'
  | 'applescript'
  | 'ara'
  | 'asm'
  | 'astro'
  | 'awk'
  | 'ballerina'
  | 'bat' | 'batch'
  | 'beancount'
  | 'berry' | 'be'
  | 'bibtex'
  | 'bicep'
  | 'blade'
  | 'c'
  | 'cadence' | 'cdc'
  | 'clarity'
  | 'clojure' | 'clj'
  | 'cmake'
  | 'cobol'
  | 'codeql' | 'ql'
  | 'coffee'
  | 'cpp' | 'c++'
  | 'crystal'
  | 'csharp' | 'c#' | 'cs'
  | 'css'
  // | 'csv'
  | 'cue'
  | 'cypher' | 'cql'
  | 'd'
  | 'dart'
  | 'dax'
  | 'diff'
  | 'docker' | 'dockerfile'
  | 'dream-maker'
  | 'elixir'
  | 'elm'
  | 'erb'
  | 'erlang' | 'erl'
  | 'fish'
  | 'fsharp' | 'f#' | 'fs'
  | 'gdresource'
  | 'gdscript'
  | 'gdshader'
  | 'gherkin'
  | 'git-commit'
  | 'git-rebase'
  | 'glimmer-js' | 'gjs'
  | 'glimmer-ts' | 'gts'
  | 'glsl'
  | 'gnuplot'
  | 'go'
  | 'graphql' | 'gql'
  | 'groovy'
  | 'hack'
  | 'haml'
  | 'handlebars' | 'hbs'
  | 'haskell' | 'hs'
  | 'hcl'
  | 'hjson'
  | 'hlsl'
  | 'html'
  | 'http'
  | 'imba'
  | 'ini' | 'properties'
  | 'java'
  | 'javascript' | 'js'
  | 'jinja-html'
  | 'jison'
  | 'json'
  | 'json5'
  | 'jsonc'
  | 'jsonl'
  | 'jsonnet'
  | 'jssm' | 'fsl'
  | 'jsx'
  | 'julia'
  | 'kotlin' | 'kt' | 'kts'
  | 'kusto' | 'kql'
  | 'latex'
  | 'less'
  | 'liquid'
  | 'lisp'
  | 'logo'
  | 'lua'
  | 'make' | 'makefile'
  | 'markdown' | 'md'
  | 'marko'
  | 'matlab'
  | 'mdc'
  | 'mdx'
  | 'mermaid'
  | 'mojo'
  | 'narrat' | 'nar'
  | 'nextflow' | 'nf'
  | 'nginx'
  | 'nim'
  | 'nix'
  | 'objective-c' | 'objc'
  | 'objective-cpp'
  | 'ocaml'
  | 'pascal'
  | 'perl'
  | 'php'
  | 'plsql'
  | 'postcss'
  | 'powerquery'
  | 'powershell' | 'ps' | 'ps1'
  | 'prisma'
  | 'prolog'
  | 'proto'
  | 'pug' | 'jade'
  | 'puppet'
  | 'purescript'
  | 'python' | 'py'
  | 'r'
  | 'raku' | 'perl6'
  | 'razor'
  | 'reg'
  | 'rel'
  | 'riscv'
  | 'rst'
  | 'ruby' | 'rb'
  | 'rust' | 'rs'
  | 'sas'
  | 'sass'
  | 'scala'
  | 'scheme'
  | 'scss'
  | 'shaderlab' | 'shader'
  | 'shellscript' | 'bash' | 'sh' | 'shell' | 'zsh'
  | 'shellsession' | 'console'
  | 'smalltalk'
  | 'solidity'
  | 'sparql'
  | 'splunk' | 'spl'
  | 'sql'
  | 'ssh-config'
  | 'stata'
  | 'stylus' | 'styl'
  | 'svelte'
  | 'swift'
  | 'system-verilog'
  | 'tasl'
  | 'tcl'
  | 'tex'
  | 'toml'
  | 'tsx'
  | 'turtle'
  | 'twig'
  | 'typescript' | 'ts'
  | 'v'
  | 'vb' | 'cmd'
  | 'verilog'
  | 'vhdl'
  | 'viml' | 'vim' | 'vimscript'
  | 'vue-html'
  | 'vue'
  | 'vyper' | 'vy'
  | 'wasm'
  | 'wenyan' | '文言'
  | 'wgsl'
  | 'wolfram'
  | 'xml'
  | 'xsl'
  | 'yaml' | 'yml'
  | 'zenscript'
  | 'zig';

interface CodeBlock {
  language: BuiltinLanguage,
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

type PostBlockContent = TypedObject & (AccessibleImage | Callout | TerminalRecording | Embed) | GenericBlock;

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