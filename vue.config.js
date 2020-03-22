module.exports = {
    publicPath: '/',

    outputDir: 'dist',

    assetsDir: 'src/assets/',

    filenameHashing: true,

    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: 'Travel Planner',
            description: 'Test  travel planner for renlife',
            url: '/',
            themeColor: '#6b95e0'
        }
    },

    lintOnSave: true,

    productionSourceMap: true,

    chainWebpack: config => {
        config.module
            .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
            .tap(options => {
                options.transformAssetUrls = {
                    video: ['src', 'poster'],
                    source: 'src',
                    img: 'src',
                    image: 'xlink:href'
                };
                return options;
            });
    },

    css: {
        sourceMap: true
    },

    pwa: {
        manifestPath: 'site.webmanifest',
        name: 'Travel Planner',
        themeColor: '#6b95e0',
        msTileColor: '#ffc40d',
        iconPaths: {
            favicon32: 'img/icons/favicon-32x32.png',
            favicon16: 'img/icons/favicon-16x16.png',
            appleTouchIcon: 'img/icons/apple-touch-icon.png',
            maskIcon: 'img/icons/safari-pinned-tab.svg',
            msTileImage: 'img/icons/mstile-150x150.png'
        },
        workboxOptions: {
            skipWaiting: true,
            clientsClaim: true,
            offlineGoogleAnalytics: true,
            exclude: [/\.htaccess$/, /\.map$/, /\.php$/, /\.mp4$/, /\.webm$/, /\.mp3$/]
        },
        appleMobileWebAppStatusBarStyle: 'black'
    }
};
