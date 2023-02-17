(self.__BUILD_MANIFEST = (function (s, e) {
    return {
        __rewrites: { beforeFiles: [], afterFiles: [], fallback: [] },
        '/': [s, e, 'static/chunks/pages/index-e3f378b94cee42bc.js'],
        '/404': ['static/chunks/pages/404-e5df0a0f545e725e.js'],
        '/_error': ['static/chunks/pages/_error-8353112a01355ec2.js'],
        '/tags/[slug]': ['static/chunks/pages/tags/[slug]-9892737c58e6d931.js'],
        '/[slug]': [s, e, 'static/chunks/pages/[slug]-fe9f4a35df9fb334.js'],
        sortedPages: [
            '/',
            '/404',
            '/_app',
            '/_error',
            '/tags/[slug]',
            '/[slug]',
        ],
    };
})(
    'static/chunks/9f96d65d-c9e0543547ce45e9.js',
    'static/chunks/87-a510332f3f756b8a.js'
)),
    self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
