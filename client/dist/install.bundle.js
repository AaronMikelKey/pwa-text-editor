;(() => {
	var e,
		r,
		n = {
			870: () => {
				const e = document.getElementById('buttonInstall')
				window.addEventListener('beforeinstallprompt', (e) => {}),
					e.addEventListener('click', async () => {}),
					window.addEventListener('appinstalled', (e) => {})
			},
		},
		t = {}
	function o(e) {
		var r = t[e]
		if (void 0 !== r) {
			if (void 0 !== r.error) throw r.error
			return r.exports
		}
		var i = (t[e] = { exports: {} })
		try {
			var c = { id: e, module: i, factory: n[e], require: o }
			o.i.forEach(function (e) {
				e(c)
			}),
				(i = c.module),
				c.factory.call(i.exports, i, i.exports, c.require)
		} catch (e) {
			throw ((i.error = e), e)
		}
		return i.exports
	}
	;(o.m = n),
		(o.c = t),
		(o.i = []),
		(o.hu = (e) => e + '.' + o.h() + '.hot-update.js'),
		(o.hmrF = () => 'install.' + o.h() + '.hot-update.json'),
		(o.h = () => '726bacfeb391e8c6a886'),
		(o.g = (function () {
			if ('object' == typeof globalThis) return globalThis
			try {
				return this || new Function('return this')()
			} catch (e) {
				if ('object' == typeof window) return window
			}
		})()),
		(o.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
		(e = {}),
		(r = 'pwa-text-editor-client:'),
		(o.l = (n, t, i, c) => {
			if (e[n]) e[n].push(t)
			else {
				var d, a
				if (void 0 !== i)
					for (
						var u = document.getElementsByTagName('script'), l = 0;
						l < u.length;
						l++
					) {
						var s = u[l]
						if (
							s.getAttribute('src') == n ||
							s.getAttribute('data-webpack') == r + i
						) {
							d = s
							break
						}
					}
				d ||
					((a = !0),
					((d = document.createElement('script')).charset = 'utf-8'),
					(d.timeout = 120),
					o.nc && d.setAttribute('nonce', o.nc),
					d.setAttribute('data-webpack', r + i),
					(d.src = n)),
					(e[n] = [t])
				var p = (r, t) => {
						;(d.onerror = d.onload = null), clearTimeout(f)
						var o = e[n]
						if (
							(delete e[n],
							d.parentNode && d.parentNode.removeChild(d),
							o && o.forEach((e) => e(t)),
							r)
						)
							return r(t)
					},
					f = setTimeout(
						p.bind(null, void 0, { type: 'timeout', target: d }),
						12e4
					)
				;(d.onerror = p.bind(null, d.onerror)),
					(d.onload = p.bind(null, d.onload)),
					a && document.head.appendChild(d)
			}
		}),
		(() => {
			var e,
				r,
				n,
				t = {},
				i = o.c,
				c = [],
				d = [],
				a = 'idle',
				u = 0,
				l = []
			function s(e) {
				a = e
				for (var r = [], n = 0; n < d.length; n++) r[n] = d[n].call(null, e)
				return Promise.all(r)
			}
			function p() {
				0 == --u &&
					s('ready').then(function () {
						if (0 === u) {
							var e = l
							l = []
							for (var r = 0; r < e.length; r++) e[r]()
						}
					})
			}
			function f(e) {
				if ('idle' !== a)
					throw new Error('check() is only allowed in idle status')
				return s('check')
					.then(o.hmrM)
					.then(function (n) {
						return n
							? s('prepare').then(function () {
									var t = []
									return (
										(r = []),
										Promise.all(
											Object.keys(o.hmrC).reduce(function (e, i) {
												return o.hmrC[i](n.c, n.r, n.m, e, r, t), e
											}, [])
										).then(function () {
											return (
												(r = function () {
													return e
														? v(e)
														: s('ready').then(function () {
																return t
														  })
												}),
												0 === u
													? r()
													: new Promise(function (e) {
															l.push(function () {
																e(r())
															})
													  })
											)
											var r
										})
									)
							  })
							: s(m() ? 'ready' : 'idle').then(function () {
									return null
							  })
					})
			}
			function h(e) {
				return 'ready' !== a
					? Promise.resolve().then(function () {
							throw new Error(
								'apply() is only allowed in ready status (state: ' + a + ')'
							)
					  })
					: v(e)
			}
			function v(e) {
				;(e = e || {}), m()
				var t = r.map(function (r) {
					return r(e)
				})
				r = void 0
				var o = t
					.map(function (e) {
						return e.error
					})
					.filter(Boolean)
				if (o.length > 0)
					return s('abort').then(function () {
						throw o[0]
					})
				var i = s('dispose')
				t.forEach(function (e) {
					e.dispose && e.dispose()
				})
				var c,
					d = s('apply'),
					a = function (e) {
						c || (c = e)
					},
					u = []
				return (
					t.forEach(function (e) {
						if (e.apply) {
							var r = e.apply(a)
							if (r) for (var n = 0; n < r.length; n++) u.push(r[n])
						}
					}),
					Promise.all([i, d]).then(function () {
						return c
							? s('fail').then(function () {
									throw c
							  })
							: n
							? v(e).then(function (e) {
									return (
										u.forEach(function (r) {
											e.indexOf(r) < 0 && e.push(r)
										}),
										e
									)
							  })
							: s('idle').then(function () {
									return u
							  })
					})
				)
			}
			function m() {
				if (n)
					return (
						r || (r = []),
						Object.keys(o.hmrI).forEach(function (e) {
							n.forEach(function (n) {
								o.hmrI[e](n, r)
							})
						}),
						(n = void 0),
						!0
					)
			}
			;(o.hmrD = t),
				o.i.push(function (l) {
					var v,
						m,
						y,
						g,
						b = l.module,
						w = (function (r, n) {
							var t = i[n]
							if (!t) return r
							var o = function (o) {
									if (t.hot.active) {
										if (i[o]) {
											var d = i[o].parents
											;-1 === d.indexOf(n) && d.push(n)
										} else (c = [n]), (e = o)
										;-1 === t.children.indexOf(o) && t.children.push(o)
									} else
										console.warn(
											'[HMR] unexpected require(' +
												o +
												') from disposed module ' +
												n
										),
											(c = [])
									return r(o)
								},
								d = function (e) {
									return {
										configurable: !0,
										enumerable: !0,
										get: function () {
											return r[e]
										},
										set: function (n) {
											r[e] = n
										},
									}
								}
							for (var l in r)
								Object.prototype.hasOwnProperty.call(r, l) &&
									'e' !== l &&
									Object.defineProperty(o, l, d(l))
							return (
								(o.e = function (e) {
									return (function (e) {
										switch (a) {
											case 'ready':
												s('prepare')
											case 'prepare':
												return u++, e.then(p, p), e
											default:
												return e
										}
									})(r.e(e))
								}),
								o
							)
						})(l.require, l.id)
					;(b.hot =
						((v = l.id),
						(m = b),
						(g = {
							_acceptedDependencies: {},
							_acceptedErrorHandlers: {},
							_declinedDependencies: {},
							_selfAccepted: !1,
							_selfDeclined: !1,
							_selfInvalidated: !1,
							_disposeHandlers: [],
							_main: (y = e !== v),
							_requireSelf: function () {
								;(c = m.parents.slice()), (e = y ? void 0 : v), o(v)
							},
							active: !0,
							accept: function (e, r, n) {
								if (void 0 === e) g._selfAccepted = !0
								else if ('function' == typeof e) g._selfAccepted = e
								else if ('object' == typeof e && null !== e)
									for (var t = 0; t < e.length; t++)
										(g._acceptedDependencies[e[t]] = r || function () {}),
											(g._acceptedErrorHandlers[e[t]] = n)
								else
									(g._acceptedDependencies[e] = r || function () {}),
										(g._acceptedErrorHandlers[e] = n)
							},
							decline: function (e) {
								if (void 0 === e) g._selfDeclined = !0
								else if ('object' == typeof e && null !== e)
									for (var r = 0; r < e.length; r++)
										g._declinedDependencies[e[r]] = !0
								else g._declinedDependencies[e] = !0
							},
							dispose: function (e) {
								g._disposeHandlers.push(e)
							},
							addDisposeHandler: function (e) {
								g._disposeHandlers.push(e)
							},
							removeDisposeHandler: function (e) {
								var r = g._disposeHandlers.indexOf(e)
								r >= 0 && g._disposeHandlers.splice(r, 1)
							},
							invalidate: function () {
								switch (((this._selfInvalidated = !0), a)) {
									case 'idle':
										;(r = []),
											Object.keys(o.hmrI).forEach(function (e) {
												o.hmrI[e](v, r)
											}),
											s('ready')
										break
									case 'ready':
										Object.keys(o.hmrI).forEach(function (e) {
											o.hmrI[e](v, r)
										})
										break
									case 'prepare':
									case 'check':
									case 'dispose':
									case 'apply':
										;(n = n || []).push(v)
								}
							},
							check: f,
							apply: h,
							status: function (e) {
								if (!e) return a
								d.push(e)
							},
							addStatusHandler: function (e) {
								d.push(e)
							},
							removeStatusHandler: function (e) {
								var r = d.indexOf(e)
								r >= 0 && d.splice(r, 1)
							},
							data: t[v],
						}),
						(e = void 0),
						g)),
						(b.parents = c),
						(b.children = []),
						(c = []),
						(l.require = w)
				}),
				(o.hmrC = {}),
				(o.hmrI = {})
		})(),
		(() => {
			var e
			o.g.importScripts && (e = o.g.location + '')
			var r = o.g.document
			if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
				var n = r.getElementsByTagName('script')
				n.length && (e = n[n.length - 1].src)
			}
			if (!e)
				throw new Error('Automatic publicPath is not supported in this browser')
			;(e = e
				.replace(/#.*$/, '')
				.replace(/\?.*$/, '')
				.replace(/\/[^\/]+$/, '/')),
				(o.p = e)
		})(),
		(() => {
			var e,
				r,
				n,
				t,
				i,
				c = (o.hmrS_jsonp = o.hmrS_jsonp || { 965: 0 }),
				d = {}
			function a(r, n) {
				return (
					(e = n),
					new Promise((e, n) => {
						d[r] = e
						var t = o.p + o.hu(r),
							i = new Error()
						o.l(t, (e) => {
							if (d[r]) {
								d[r] = void 0
								var t = e && ('load' === e.type ? 'missing' : e.type),
									o = e && e.target && e.target.src
								;(i.message =
									'Loading hot update chunk ' +
									r +
									' failed.\n(' +
									t +
									': ' +
									o +
									')'),
									(i.name = 'ChunkLoadError'),
									(i.type = t),
									(i.request = o),
									n(i)
							}
						})
					})
				)
			}
			function u(e) {
				function d(e) {
					for (
						var r = [e],
							n = {},
							t = r.map(function (e) {
								return { chain: [e], id: e }
							});
						t.length > 0;

					) {
						var i = t.pop(),
							c = i.id,
							d = i.chain,
							u = o.c[c]
						if (u && (!u.hot._selfAccepted || u.hot._selfInvalidated)) {
							if (u.hot._selfDeclined)
								return { type: 'self-declined', chain: d, moduleId: c }
							if (u.hot._main)
								return { type: 'unaccepted', chain: d, moduleId: c }
							for (var l = 0; l < u.parents.length; l++) {
								var s = u.parents[l],
									p = o.c[s]
								if (p) {
									if (p.hot._declinedDependencies[c])
										return {
											type: 'declined',
											chain: d.concat([s]),
											moduleId: c,
											parentId: s,
										}
									;-1 === r.indexOf(s) &&
										(p.hot._acceptedDependencies[c]
											? (n[s] || (n[s] = []), a(n[s], [c]))
											: (delete n[s],
											  r.push(s),
											  t.push({ chain: d.concat([s]), id: s })))
								}
							}
						}
					}
					return {
						type: 'accepted',
						moduleId: e,
						outdatedModules: r,
						outdatedDependencies: n,
					}
				}
				function a(e, r) {
					for (var n = 0; n < r.length; n++) {
						var t = r[n]
						;-1 === e.indexOf(t) && e.push(t)
					}
				}
				o.f && delete o.f.jsonpHmr, (r = void 0)
				var u = {},
					l = [],
					s = {},
					p = function (e) {
						console.warn(
							'[HMR] unexpected require(' + e.id + ') to disposed module'
						)
					}
				for (var f in n)
					if (o.o(n, f)) {
						var h,
							v = n[f],
							m = !1,
							y = !1,
							g = !1,
							b = ''
						switch (
							((h = v ? d(f) : { type: 'disposed', moduleId: f }).chain &&
								(b = '\nUpdate propagation: ' + h.chain.join(' -> ')),
							h.type)
						) {
							case 'self-declined':
								e.onDeclined && e.onDeclined(h),
									e.ignoreDeclined ||
										(m = new Error(
											'Aborted because of self decline: ' + h.moduleId + b
										))
								break
							case 'declined':
								e.onDeclined && e.onDeclined(h),
									e.ignoreDeclined ||
										(m = new Error(
											'Aborted because of declined dependency: ' +
												h.moduleId +
												' in ' +
												h.parentId +
												b
										))
								break
							case 'unaccepted':
								e.onUnaccepted && e.onUnaccepted(h),
									e.ignoreUnaccepted ||
										(m = new Error(
											'Aborted because ' + f + ' is not accepted' + b
										))
								break
							case 'accepted':
								e.onAccepted && e.onAccepted(h), (y = !0)
								break
							case 'disposed':
								e.onDisposed && e.onDisposed(h), (g = !0)
								break
							default:
								throw new Error('Unexception type ' + h.type)
						}
						if (m) return { error: m }
						if (y)
							for (f in ((s[f] = v),
							a(l, h.outdatedModules),
							h.outdatedDependencies))
								o.o(h.outdatedDependencies, f) &&
									(u[f] || (u[f] = []), a(u[f], h.outdatedDependencies[f]))
						g && (a(l, [h.moduleId]), (s[f] = p))
					}
				n = void 0
				for (var w, E = [], _ = 0; _ < l.length; _++) {
					var I = l[_],
						D = o.c[I]
					D &&
						(D.hot._selfAccepted || D.hot._main) &&
						s[I] !== p &&
						!D.hot._selfInvalidated &&
						E.push({
							module: I,
							require: D.hot._requireSelf,
							errorHandler: D.hot._selfAccepted,
						})
				}
				return {
					dispose: function () {
						var e
						t.forEach(function (e) {
							delete c[e]
						}),
							(t = void 0)
						for (var r, n = l.slice(); n.length > 0; ) {
							var i = n.pop(),
								d = o.c[i]
							if (d) {
								var a = {},
									s = d.hot._disposeHandlers
								for (_ = 0; _ < s.length; _++) s[_].call(null, a)
								for (
									o.hmrD[i] = a,
										d.hot.active = !1,
										delete o.c[i],
										delete u[i],
										_ = 0;
									_ < d.children.length;
									_++
								) {
									var p = o.c[d.children[_]]
									p && (e = p.parents.indexOf(i)) >= 0 && p.parents.splice(e, 1)
								}
							}
						}
						for (var f in u)
							if (o.o(u, f) && (d = o.c[f]))
								for (w = u[f], _ = 0; _ < w.length; _++)
									(r = w[_]),
										(e = d.children.indexOf(r)) >= 0 && d.children.splice(e, 1)
					},
					apply: function (r) {
						for (var n in s) o.o(s, n) && (o.m[n] = s[n])
						for (var t = 0; t < i.length; t++) i[t](o)
						for (var c in u)
							if (o.o(u, c)) {
								var d = o.c[c]
								if (d) {
									w = u[c]
									for (var a = [], p = [], f = [], h = 0; h < w.length; h++) {
										var v = w[h],
											m = d.hot._acceptedDependencies[v],
											y = d.hot._acceptedErrorHandlers[v]
										if (m) {
											if (-1 !== a.indexOf(m)) continue
											a.push(m), p.push(y), f.push(v)
										}
									}
									for (var g = 0; g < a.length; g++)
										try {
											a[g].call(null, w)
										} catch (n) {
											if ('function' == typeof p[g])
												try {
													p[g](n, { moduleId: c, dependencyId: f[g] })
												} catch (t) {
													e.onErrored &&
														e.onErrored({
															type: 'accept-error-handler-errored',
															moduleId: c,
															dependencyId: f[g],
															error: t,
															originalError: n,
														}),
														e.ignoreErrored || (r(t), r(n))
												}
											else
												e.onErrored &&
													e.onErrored({
														type: 'accept-errored',
														moduleId: c,
														dependencyId: f[g],
														error: n,
													}),
													e.ignoreErrored || r(n)
										}
								}
							}
						for (var b = 0; b < E.length; b++) {
							var _ = E[b],
								I = _.module
							try {
								_.require(I)
							} catch (n) {
								if ('function' == typeof _.errorHandler)
									try {
										_.errorHandler(n, { moduleId: I, module: o.c[I] })
									} catch (t) {
										e.onErrored &&
											e.onErrored({
												type: 'self-accept-error-handler-errored',
												moduleId: I,
												error: t,
												originalError: n,
											}),
											e.ignoreErrored || (r(t), r(n))
									}
								else
									e.onErrored &&
										e.onErrored({
											type: 'self-accept-errored',
											moduleId: I,
											error: n,
										}),
										e.ignoreErrored || r(n)
							}
						}
						return l
					},
				}
			}
			;(self.webpackHotUpdatepwa_text_editor_client = (r, t, c) => {
				for (var a in t) o.o(t, a) && ((n[a] = t[a]), e && e.push(a))
				c && i.push(c), d[r] && (d[r](), (d[r] = void 0))
			}),
				(o.hmrI.jsonp = function (e, r) {
					n || ((n = {}), (i = []), (t = []), r.push(u)),
						o.o(n, e) || (n[e] = o.m[e])
				}),
				(o.hmrC.jsonp = function (e, d, l, s, p, f) {
					p.push(u),
						(r = {}),
						(t = d),
						(n = l.reduce(function (e, r) {
							return (e[r] = !1), e
						}, {})),
						(i = []),
						e.forEach(function (e) {
							o.o(c, e) && void 0 !== c[e]
								? (s.push(a(e, f)), (r[e] = !0))
								: (r[e] = !1)
						}),
						o.f &&
							(o.f.jsonpHmr = function (e, n) {
								r && o.o(r, e) && !r[e] && (n.push(a(e)), (r[e] = !0))
							})
				}),
				(o.hmrM = () => {
					if ('undefined' == typeof fetch)
						throw new Error('No browser support: need fetch API')
					return fetch(o.p + o.hmrF()).then((e) => {
						if (404 !== e.status) {
							if (!e.ok)
								throw new Error(
									'Failed to fetch update manifest ' + e.statusText
								)
							return e.json()
						}
					})
				})
		})(),
		o(870)
})()
