import { getHighlighterCore, loadWasm } from 'shikiji/core';

import oneDarkProTheme from 'shikiji/themes/one-dark-pro.mjs';
import githubLightTheme from 'shikiji/themes/github-light.mjs';

// Owning to bundle size limit, we can only support these languages
import typescriptLanguage from 'shikiji/langs/typescript.mjs';
import shellscriptLanguage from 'shikiji/langs/shellscript.mjs';
import cssLanguage from 'shikiji/langs/css.mjs';
import rustLanguage from 'shikiji/langs/rust.mjs';

import highlighterWasm from 'shikiji/onig.wasm?module';

await loadWasm((importObject) => WebAssembly.instantiate(highlighterWasm, importObject));

const highlighter = await getHighlighterCore({
  themes: [oneDarkProTheme, githubLightTheme],
  langs: [typescriptLanguage, shellscriptLanguage, cssLanguage, rustLanguage],
});

export default highlighter;