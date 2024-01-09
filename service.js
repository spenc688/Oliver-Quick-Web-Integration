import { Service } from 'node-windows'

const svc = new Service({
    name: 'Saltburn Oliver Quick Web Integration',
    description: 'Web server for the Saltburn Oliver Quick web integration',
    script: './index.js'
})

svc.on('install', () => {
    svc.start()
})

svc.install()