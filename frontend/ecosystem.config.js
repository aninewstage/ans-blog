module.exports = {
    apps: [
        {
            name: 'ANS Blogs',
            port: '5000',
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs'
        }
    ]
}
