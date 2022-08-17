module.exports = {
  apps: [
    {
      name: 'codeexpress',
      exec_mode: 'cluster',
      instances: 'max',
      script: '.output/server/index.mjs'
    }
  ]
}