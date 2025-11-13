const path = require("path");
module.exports = {
  apps: [
    {
      name: "cleo-kick",
      interpreter: path.join(process.env.HOME, ".bun/bin/bun"),
      script: "src/server.ts", // or "dist/server.js" if you build
      cwd: path.join(process.env.HOME, "apps", "cleo-kick", "current"),
      exec_mode: "cluster",
      instances: "max",
      env: { NODE_ENV: "production" },
      max_memory_restart: "512M",
    },
  ],
};
