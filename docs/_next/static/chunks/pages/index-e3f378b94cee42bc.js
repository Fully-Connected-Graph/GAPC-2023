(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405],
    {
        8312: function (e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/',
                function () {
                    return r(4186);
                },
            ]);
        },
        8238: function (e, t, r) {
            'use strict';
            r.d(t, {
                Z: function () {
                    return N;
                },
            });
            var n = r(5893),
                l = r(9008),
                a = r.n(l),
                i = r(4926),
                s = {},
                c = r(3714),
                o = r(9234);
            let d = (e) => {
                let { markdown: t } = e;
                return (0, n.jsx)(i.D, {
                    className: 'markdown-body',
                    components: s,
                    rehypePlugins: [o.Z],
                    remarkPlugins: [c.Z],
                    children: t,
                });
            };
            var u = r(7851);
            let m = (e) => {
                    var t;
                    let r = new Date(JSON.stringify(e));
                    return 'Invalid Date' === r.toString()
                        ? ''
                        : null !==
                              (t =
                                  null == r
                                      ? void 0
                                      : r.toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                        })) && void 0 !== t
                        ? t
                        : '';
                },
                h = (e) =>
                    e
                        .replace(/\.md$/, '')
                        .replace(/_/g, '-')
                        .replace(/ /g, '-')
                        .replace(/[^a-zA-Z0-9-]/g, '-')
                        .replace(/-+/g, '-')
                        .toLowerCase();
            var x = r(1664),
                f = r.n(x);
            let g = (e) => {
                    let { href: t, target: r, children: l, className: a } = e;
                    return (0, n.jsx)(f(), {
                        href: t,
                        passHref: !0,
                        legacyBehavior: !0,
                        children: (0, n.jsx)('a', {
                            target: r,
                            className: a,
                            children: l,
                        }),
                    });
                },
                p = (e) => {
                    var t;
                    let { frontmatter: r } = e,
                        l = m(r.date),
                        a =
                            'w-full min-h-64 py-20 flex flex-col items-center text-center';
                    a = r.banner
                        ? (0, u.m)(a, 'bg-center bg-cover bg-no-repeat')
                        : (0, u.m)(
                              a,
                              'bg-gradient-to-r from-blue-500 to-blue-300'
                          );
                    let i =
                        (r.banner && {
                            backgroundImage: 'url('.concat(r.banner, ')'),
                        }) ||
                        void 0;
                    return (0, n.jsxs)('div', {
                        className: a,
                        style: i,
                        children: [
                            (0, n.jsx)('h1', {
                                className: 'text-white text-6xl drop-shadow-md',
                                children: r.title,
                            }),
                            (0, n.jsx)('p', {
                                className:
                                    'mb-2 text-white opacity-75 font-light',
                                children: r.description,
                            }),
                            (0, n.jsx)('p', {
                                className:
                                    'mb-2 text-white opacity-75 font-light',
                                children:
                                    null === (t = r.links) || void 0 === t
                                        ? void 0
                                        : t.map((e, t) =>
                                              (0, n.jsxs)(g, {
                                                  href:
                                                      'Home' === e ? '/' : h(e),
                                                  children: [
                                                      e,
                                                      r.links &&
                                                          t !==
                                                              r.links.length -
                                                                  1 &&
                                                          ' | ',
                                                  ],
                                              })
                                          ),
                            }),
                            l &&
                                (0, n.jsx)('div', {
                                    className:
                                        'text-white opacity-75 text-sm font-light py-1 px-4 rounded-md backdrop-blur-xl bg-black/30',
                                    children: l,
                                }),
                        ],
                    });
                };
            var w = r(9675),
                v = r.n(w);
            let b = (e) => {
                    try {
                        let t = v()(e);
                        if (!t) throw Error('No matter result');
                        return t;
                    } catch (e) {
                        console.warn('Error while reading Front matter', e);
                    }
                    return { data: {}, content: e };
                },
                j = (e) => {
                    let { markdown: t, title: r, ...l } = e,
                        { content: i, data: s } = b(t),
                        c = { title: r, ...s };
                    return (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(a(), {
                                children: (0, n.jsx)('title', {
                                    children: c.title,
                                }),
                            }),
                            (0, n.jsxs)('div', {
                                className: 'w-full overflow-y-auto',
                                children: [
                                    (0, n.jsx)(p, { frontmatter: c }),
                                    (0, n.jsx)('article', {
                                        className:
                                            'w-full max-w-2xl m-auto mt-8 max-sm:px-4',
                                        children: (0, n.jsx)(d, {
                                            markdown: i,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    });
                };
            var N = j;
        },
        4186: function (e, t, r) {
            'use strict';
            r.r(t),
                r.d(t, {
                    __N_SSG: function () {
                        return i;
                    },
                });
            var n = r(5893),
                l = r(8238);
            let a = (e) => {
                let { file: t, fileName: r } = e;
                return (0, n.jsx)(l.Z, { markdown: t, title: r });
            };
            var i = !0;
            t.default = a;
        },
        3596: function () {},
    },
    function (e) {
        e.O(0, [146, 87, 774, 888, 179], function () {
            return e((e.s = 8312));
        }),
            (_N_E = e.O());
    },
]);
