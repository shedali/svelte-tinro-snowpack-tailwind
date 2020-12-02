module.exports = {
  "mount": {
    "public": "/",
    "src": "/_dist_"
  },
  "plugins": [
    "@snowpack/plugin-svelte",
    "@snowpack/plugin-dotenv",
    [
      "@snowpack/plugin-build-script",
      {
        "cmd": "postcss",
        "input": [
          ".css"
        ],
        "output": [
          ".css"
        ]
      }
    ],
    [
      "snowpack-plugin-relative-css-urls"
    ]
  ],
  "install": [],
  "installOptions": {},
  "devOptions": {
    "port": 8080
  },
  "buildOptions": {},
  "proxy": {},
  "alias": {
    "src": "./src"
  }
}