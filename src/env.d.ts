/// <reference types="astro/client" />
/// <reference types="@sanity/astro/module" />

// Defined by cloudflare adapter
// https://github.com/withastro/adapters/blob/09306d51bb83f584ab35509881c83618a2752445/packages/cloudflare/src/utils/wasm-module-loader.ts#L12
declare module '*.wasm?module' {
  const wasmModule: WebAssembly.Module;
  export default wasmModule;
}
