module.exports = {
  apps: [
    {
      name: "my-portfolio-matheusqueiroz",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3005",
      cwd: "/var/www/matheusqueiroz.dev.br", // Importante que este seja o caminho correto no servidor
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
