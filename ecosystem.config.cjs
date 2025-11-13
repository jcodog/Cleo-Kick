module.exports = {
  apps: [
    {
      name: "cleo-kick-app",
      interpreter: "/root/.bun/bin/bun",
      script: "src/server.ts",
      cwd: "/opt/cleo-kick/current",
      exec_mode: "fork",
      instances: 1,
      env: { NODE_ENV: "production" },
    },
  ],
};
