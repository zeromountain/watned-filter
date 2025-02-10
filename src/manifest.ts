import { Manifest } from "webextension-polyfill";
import type PkgType from "../package.json";

import fs from "fs-extra";
import { resolve } from "node:path";

export function getManifest(): Manifest.WebExtensionManifest {
  const pkg = fs.readJSONSync(
    resolve(__dirname, "..", "package.json")
  ) as typeof PkgType;

  return {
    manifest_version: 2,
    name: pkg.name,
    version: pkg.version,
    permissions: ["tabs", "storage", "activeTab", "http//*/", "https://*/"],
    background: {
      scripts: ["src/background/script.ts"],
      persistent: false,
    },
    content_scripts: [
      {
        js: ["src/content/main.ts"],
        matches: ["http://*/*", "https://*/*"],
      },
    ],
    browser_action: {
      default_popup: "src/popup/index.html",
    },
    options_ui: {
      page: "src/options/index.html",
      chrome_style: false,
      open_in_tab: true,
    },
  };
}
