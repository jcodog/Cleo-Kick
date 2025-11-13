const path = require("path");
module.exports = {
  apps: [
    {
      name: "cleo-kick",
      interpreter: path.join(process.env.HOME, ".bun/bin/bun"),
      script: "src/server.ts", // or "dist/server.js"
      cwd: "/opt/cleo-kick/current",
      exec_mode: "cluster",
      instances: "max",
      env: { NODE_ENV: "production" },
    },
  ],
};
