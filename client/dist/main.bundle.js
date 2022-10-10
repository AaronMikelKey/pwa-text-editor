;(() => {
	'use strict'
	var e,
		n,
		r = {
			376: (e, n, r) => {
				try {
					self['workbox:window:6.5.3'] && _()
				} catch (t) {}
				function t(e, n) {
					return new Promise(function (r) {
						var t = new MessageChannel()
						;(t.port1.onmessage = function (e) {
							r(e.data)
						}),
							e.postMessage(n, [t.port2])
					})
				}
				function o(e, n) {
					;(null == n || n > e.length) && (n = e.length)
					for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r]
					return t
				}
				function i(e, n) {
					var r
					if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
						if (
							Array.isArray(e) ||
							(r = (function (e, n) {
								if (e) {
									if ('string' == typeof e) return o(e, n)
									var r = Object.prototype.toString.call(e).slice(8, -1)
									return (
										'Object' === r && e.constructor && (r = e.constructor.name),
										'Map' === r || 'Set' === r
											? Array.from(e)
											: 'Arguments' === r ||
											  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
											? o(e, n)
											: void 0
									)
								}
							})(e)) ||
							(n && e && 'number' == typeof e.length)
						) {
							r && (e = r)
							var t = 0
							return function () {
								return t >= e.length
									? { done: !0 }
									: { done: !1, value: e[t++] }
							}
						}
						throw new TypeError(
							'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
						)
					}
					return (r = e[Symbol.iterator]()).next.bind(r)
				}
				try {
					self['workbox:core:6.5.3'] && _()
				} catch (t) {}
				var a = function () {
					var e = this
					this.promise = new Promise(function (n, r) {
						;(e.resolve = n), (e.reject = r)
					})
				}
				function c(e, n) {
					var r = location.href
					return new URL(e, r).href === new URL(n, r).href
				}
				var s = function (e, n) {
					;(this.type = e), Object.assign(this, n)
				}
				function d(e, n, r) {
					return r
						? n
							? n(e)
							: e
						: ((e && e.then) || (e = Promise.resolve(e)), n ? e.then(n) : e)
				}
				function u() {}
				var l = { type: 'SKIP_WAITING' }
				function f(e, n) {
					if (!n) return e && e.then ? e.then(u) : Promise.resolve()
				}
				var p = (function (e) {
					var n, r
					function o(n, r) {
						var t, o
						return (
							void 0 === r && (r = {}),
							((t = e.call(this) || this).nn = {}),
							(t.tn = 0),
							(t.rn = new a()),
							(t.en = new a()),
							(t.on = new a()),
							(t.un = 0),
							(t.an = new Set()),
							(t.cn = function () {
								var e = t.fn,
									n = e.installing
								t.tn > 0 ||
								!c(n.scriptURL, t.sn.toString()) ||
								performance.now() > t.un + 6e4
									? ((t.vn = n), e.removeEventListener('updatefound', t.cn))
									: ((t.hn = n), t.an.add(n), t.rn.resolve(n)),
									++t.tn,
									n.addEventListener('statechange', t.ln)
							}),
							(t.ln = function (e) {
								var n = t.fn,
									r = e.target,
									o = r.state,
									i = r === t.vn,
									a = { sw: r, isExternal: i, originalEvent: e }
								!i && t.mn && (a.isUpdate = !0),
									t.dispatchEvent(new s(o, a)),
									'installed' === o
										? (t.wn = self.setTimeout(function () {
												'installed' === o &&
													n.waiting === r &&
													t.dispatchEvent(new s('waiting', a))
										  }, 200))
										: 'activating' === o &&
										  (clearTimeout(t.wn), i || t.en.resolve(r))
							}),
							(t.dn = function (e) {
								var n = t.hn,
									r = n !== navigator.serviceWorker.controller
								t.dispatchEvent(
									new s('controlling', {
										isExternal: r,
										originalEvent: e,
										sw: n,
										isUpdate: t.mn,
									})
								),
									r || t.on.resolve(n)
							}),
							(t.gn =
								((o = function (e) {
									var n = e.data,
										r = e.ports,
										o = e.source
									return d(t.getSW(), function () {
										t.an.has(o) &&
											t.dispatchEvent(
												new s('message', {
													data: n,
													originalEvent: e,
													ports: r,
													sw: o,
												})
											)
									})
								}),
								function () {
									for (var e = [], n = 0; n < arguments.length; n++)
										e[n] = arguments[n]
									try {
										return Promise.resolve(o.apply(this, e))
									} catch (e) {
										return Promise.reject(e)
									}
								})),
							(t.sn = n),
							(t.nn = r),
							navigator.serviceWorker.addEventListener('message', t.gn),
							t
						)
					}
					;(r = e),
						((n = o).prototype = Object.create(r.prototype)),
						(n.prototype.constructor = n),
						(n.__proto__ = r)
					var i,
						u = o.prototype
					return (
						(u.register = function (e) {
							var n = (void 0 === e ? {} : e).immediate,
								r = void 0 !== n && n
							try {
								var t = this
								return (function (e, n) {
									var r = e()
									return r && r.then ? r.then(n) : n()
								})(
									function () {
										if (!r && 'complete' !== document.readyState)
											return f(
												new Promise(function (e) {
													return window.addEventListener('load', e)
												})
											)
									},
									function () {
										return (
											(t.mn = Boolean(navigator.serviceWorker.controller)),
											(t.yn = t.pn()),
											d(t.bn(), function (e) {
												;(t.fn = e),
													t.yn &&
														((t.hn = t.yn),
														t.en.resolve(t.yn),
														t.on.resolve(t.yn),
														t.yn.addEventListener('statechange', t.ln, {
															once: !0,
														}))
												var n = t.fn.waiting
												return (
													n &&
														c(n.scriptURL, t.sn.toString()) &&
														((t.hn = n),
														Promise.resolve()
															.then(function () {
																t.dispatchEvent(
																	new s('waiting', {
																		sw: n,
																		wasWaitingBeforeRegister: !0,
																	})
																)
															})
															.then(function () {})),
													t.hn && (t.rn.resolve(t.hn), t.an.add(t.hn)),
													t.fn.addEventListener('updatefound', t.cn),
													navigator.serviceWorker.addEventListener(
														'controllerchange',
														t.dn
													),
													t.fn
												)
											})
										)
									}
								)
							} catch (e) {
								return Promise.reject(e)
							}
						}),
						(u.update = function () {
							try {
								return this.fn ? f(this.fn.update()) : void 0
							} catch (e) {
								return Promise.reject(e)
							}
						}),
						(u.getSW = function () {
							return void 0 !== this.hn
								? Promise.resolve(this.hn)
								: this.rn.promise
						}),
						(u.messageSW = function (e) {
							try {
								return d(this.getSW(), function (n) {
									return t(n, e)
								})
							} catch (e) {
								return Promise.reject(e)
							}
						}),
						(u.messageSkipWaiting = function () {
							this.fn && this.fn.waiting && t(this.fn.waiting, l)
						}),
						(u.pn = function () {
							var e = navigator.serviceWorker.controller
							return e && c(e.scriptURL, this.sn.toString()) ? e : void 0
						}),
						(u.bn = function () {
							try {
								var e = this
								return (function (e, n) {
									try {
										var r = e()
									} catch (e) {
										return n(e)
									}
									return r && r.then ? r.then(void 0, n) : r
								})(
									function () {
										return d(
											navigator.serviceWorker.register(e.sn, e.nn),
											function (n) {
												return (e.un = performance.now()), n
											}
										)
									},
									function (e) {
										throw e
									}
								)
							} catch (e) {
								return Promise.reject(e)
							}
						}),
						(i = [
							{
								key: 'active',
								get: function () {
									return this.en.promise
								},
							},
							{
								key: 'controlling',
								get: function () {
									return this.on.promise
								},
							},
						]) &&
							(function (e, n) {
								for (var r = 0; r < n.length; r++) {
									var t = n[r]
									;(t.enumerable = t.enumerable || !1),
										(t.configurable = !0),
										'value' in t && (t.writable = !0),
										Object.defineProperty(e, t.key, t)
								}
							})(o.prototype, i),
						o
					)
				})(
					(function () {
						function e() {
							this.Pn = new Map()
						}
						var n = e.prototype
						return (
							(n.addEventListener = function (e, n) {
								this.Sn(e).add(n)
							}),
							(n.removeEventListener = function (e, n) {
								this.Sn(e).delete(n)
							}),
							(n.dispatchEvent = function (e) {
								e.target = this
								for (var n, r = i(this.Sn(e.type)); !(n = r()).done; )
									(0, n.value)(e)
							}),
							(n.Sn = function (e) {
								return (
									this.Pn.has(e) || this.Pn.set(e, new Set()), this.Pn.get(e)
								)
							}),
							e
						)
					})()
				)
				let h, v
				const m = new WeakMap(),
					g = new WeakMap(),
					b = new WeakMap(),
					y = new WeakMap(),
					w = new WeakMap()
				let E = {
					get(e, n, r) {
						if (e instanceof IDBTransaction) {
							if ('done' === n) return g.get(e)
							if ('objectStoreNames' === n)
								return e.objectStoreNames || b.get(e)
							if ('store' === n)
								return r.objectStoreNames[1]
									? void 0
									: r.objectStore(r.objectStoreNames[0])
						}
						return x(e[n])
					},
					set: (e, n, r) => ((e[n] = r), !0),
					has: (e, n) =>
						(e instanceof IDBTransaction && ('done' === n || 'store' === n)) ||
						n in e,
				}
				function k(e) {
					return 'function' == typeof e
						? (n = e) !== IDBDatabase.prototype.transaction ||
						  'objectStoreNames' in IDBTransaction.prototype
							? (
									v ||
									(v = [
										IDBCursor.prototype.advance,
										IDBCursor.prototype.continue,
										IDBCursor.prototype.continuePrimaryKey,
									])
							  ).includes(n)
								? function (...e) {
										return n.apply(I(this), e), x(m.get(this))
								  }
								: function (...e) {
										return x(n.apply(I(this), e))
								  }
							: function (e, ...r) {
									const t = n.call(I(this), e, ...r)
									return b.set(t, e.sort ? e.sort() : [e]), x(t)
							  }
						: (e instanceof IDBTransaction &&
								(function (e) {
									if (g.has(e)) return
									const n = new Promise((n, r) => {
										const t = () => {
												e.removeEventListener('complete', o),
													e.removeEventListener('error', i),
													e.removeEventListener('abort', i)
											},
											o = () => {
												n(), t()
											},
											i = () => {
												r(
													e.error ||
														new DOMException('AbortError', 'AbortError')
												),
													t()
											}
										e.addEventListener('complete', o),
											e.addEventListener('error', i),
											e.addEventListener('abort', i)
									})
									g.set(e, n)
								})(e),
						  (r = e),
						  (
								h ||
								(h = [
									IDBDatabase,
									IDBObjectStore,
									IDBIndex,
									IDBCursor,
									IDBTransaction,
								])
						  ).some((e) => r instanceof e)
								? new Proxy(e, E)
								: e)
					var n, r
				}
				function x(e) {
					if (e instanceof IDBRequest)
						return (function (e) {
							const n = new Promise((n, r) => {
								const t = () => {
										e.removeEventListener('success', o),
											e.removeEventListener('error', i)
									},
									o = () => {
										n(x(e.result)), t()
									},
									i = () => {
										r(e.error), t()
									}
								e.addEventListener('success', o), e.addEventListener('error', i)
							})
							return (
								n
									.then((n) => {
										n instanceof IDBCursor && m.set(n, e)
									})
									.catch(() => {}),
								w.set(n, e),
								n
							)
						})(e)
					if (y.has(e)) return y.get(e)
					const n = k(e)
					return n !== e && (y.set(e, n), w.set(n, e)), n
				}
				const I = (e) => w.get(e),
					S = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'],
					j = ['put', 'add', 'delete', 'clear'],
					D = new Map()
				function P(e, n) {
					if (!(e instanceof IDBDatabase) || n in e || 'string' != typeof n)
						return
					if (D.get(n)) return D.get(n)
					const r = n.replace(/FromIndex$/, ''),
						t = n !== r,
						o = j.includes(r)
					if (
						!(r in (t ? IDBIndex : IDBObjectStore).prototype) ||
						(!o && !S.includes(r))
					)
						return
					const i = async function (e, ...n) {
						const i = this.transaction(e, o ? 'readwrite' : 'readonly')
						let a = i.store
						return (
							t && (a = a.index(n.shift())),
							(await Promise.all([a[r](...n), o && i.done]))[0]
						)
					}
					return D.set(n, i), i
				}
				var L
				;(L = E),
					(E = {
						...L,
						get: (e, n, r) => P(e, n) || L.get(e, n, r),
						has: (e, n) => !!P(e, n) || L.has(e, n),
					}),
					(async () => {
						!(function (
							e,
							n,
							{ blocked: r, upgrade: t, blocking: o, terminated: i } = {}
						) {
							const a = indexedDB.open(e, n),
								c = x(a)
							t &&
								a.addEventListener('upgradeneeded', (e) => {
									t(x(a.result), e.oldVersion, e.newVersion, x(a.transaction))
								}),
								r && a.addEventListener('blocked', () => r()),
								c
									.then((e) => {
										i && e.addEventListener('close', () => i()),
											o && e.addEventListener('versionchange', () => o())
									})
									.catch(() => {})
						})('jate', 1, {
							upgrade(e) {
								e.objectStoreNames.contains('jate')
									? console.log('jate database already exists')
									: (e.createObjectStore('jate', {
											keyPath: 'id',
											autoIncrement: !0,
									  }),
									  console.log('jate database created'))
							},
						})
					})(),
					r(962)
				const A = document.querySelector('#main')
				;(A.innerHTML = ''),
					void 0 ===
						new (class {
							constructor() {
								const e = localStorage.getItem('content')
								if ('undefined' == typeof CodeMirror)
									throw new Error('CodeMirror is not loaded')
								;(this.editor = CodeMirror(document.querySelector('#main'), {
									value: '',
									mode: 'javascript',
									theme: 'monokai',
									lineNumbers: !0,
									lineWrapping: !0,
									autofocus: !0,
									indentUnit: 2,
									tabSize: 2,
								})),
									(async () => console.error('getDb not implemented'))().then(
										(n) => {
											console.info(
												'Loaded data from IndexedDB, injecting into editor'
											),
												this.editor.setValue(
													n ||
														e ||
														'\n/*\n       _____  ____________\n      / /   |/_  __/ ____/\n __  / / /| | / / / __/   \n/ /_/ / ___ |/ / / /___   \n ____/_/  |_/_/ /_____/   \njust another text editor\n*/                          \n'
												)
										}
									),
									this.editor.on('change', () => {
										localStorage.setItem('content', this.editor.getValue())
									}),
									this.editor.on('blur', () => {
										console.log('The editor has lost focus'),
											(async (e) => {
												console.error('putDb not implemented')
											})(localStorage.getItem('content'))
									})
							}
						})() &&
						(() => {
							const e = document.createElement('div')
							e.classList.add('spinner'),
								(e.innerHTML =
									'\n  <div class="loading-container">\n  <div class="loading-spinner" />\n  </div>\n  '),
								A.appendChild(e)
						})(),
					'serviceWorker' in navigator
						? new p('/src-sw.js').register()
						: console.error(
								'Service workers are not supported in this browser.'
						  )
			},
			402: (e, n, r) => {
				r.r(n), r.d(n, { default: () => c })
				var t = r(81),
					o = r.n(t),
					i = r(645),
					a = r.n(i)()(o())
				a.push([
					e.id,
					"/* app shell CSS */\r\n:root {\r\n  --primary: #31a9e1;\r\n  --gray: #ececec;\r\n  --whitesmoke: #f5f5f5;\r\n  --dark: #222;\r\n  --monoaki: #272822;\r\n  --navbar-height: 50px;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  background-color: var(--monoaki);\r\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\r\n    Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\r\n    sans-serif;\r\n}\r\n\r\nh1 {\r\n  font-size: 22px;\r\n}\r\n\r\n#navbar {\r\n  height: var(--navbar-height);\r\n  background-color: var(--primary);\r\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  color: white;\r\n  font-size: 22px;\r\n  font-weight: 550;\r\n  letter-spacing: 0.9px;\r\n}\r\n\r\n.navbar-brand img {\r\n  padding-top: 10px;\r\n}\r\n\r\n.loading-spinner {\r\n  animation-duration: 0.75s;\r\n  animation-iteration-count: infinite;\r\n  animation-name: rotate-forever;\r\n  animation-timing-function: linear;\r\n  height: 30px;\r\n  width: 30px;\r\n  border: 3px solid var(--primary);\r\n  border-right-color: transparent;\r\n  border-radius: 50%;\r\n}\r\n\r\n.loading-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: calc(100vh - var(--navbar-height));\r\n}\r\n\r\n@keyframes rotate-forever {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n.app-update {\r\n  display: none;\r\n  position: absolute;\r\n  right: 10px;\r\n}\r\n\r\n.app-update.show {\r\n  display: block;\r\n}\r\n\r\n.nav-btn {\r\n  margin: 25px;\r\n}\r\n\r\n.btn {\r\n  text-align: center;\r\n  display: inline-block;\r\n  padding: 0.5rem 1.2rem;\r\n  margin: 0;\r\n  text-decoration: none;\r\n  font-size: 1rem;\r\n  border-radius: 0.3rem;\r\n  border: 1px solid transparent;\r\n  outline: none;\r\n  color: #1a1a1a;\r\n  background-color: #aeaeae;\r\n  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\r\n}\r\n\r\n.btn:hover {\r\n  background-color: #cecece;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn.btn-squared {\r\n  border-radius: 0;\r\n}\r\n\r\n.btn.btn-sm {\r\n  font-size: 0.85rem;\r\n  padding: 0.3rem 0.9rem;\r\n}\r\n\r\n.btn.btn-lg {\r\n  font-size: 1.25rem;\r\n  padding: 0.8rem 1.4rem;\r\n}\r\n\r\n.btn.btn-block {\r\n  width: 100%;\r\n  display: block;\r\n  text-align: center;\r\n}\r\n\r\n.btn.btn-primary {\r\n  background-color: #2d3e50;\r\n  color: #d9e9e8;\r\n}\r\n\r\n.btn.btn-primary:hover {\r\n  background-color: #57779a;\r\n}\r\n\r\n.btn.btn-danger {\r\n  background-color: #e64c66;\r\n  color: #ffffff;\r\n}\r\n\r\n.btn.btn-danger:hover {\r\n  background-color: #ee8294;\r\n}\r\n\r\n.btn.btn-info {\r\n  background-color: #1bbc9b;\r\n  color: #ffffff;\r\n}\r\n\r\n.btn.btn-info:hover {\r\n  background-color: #31e1bd;\r\n}\r\n\r\n.btn.btn-light {\r\n  background-color: #d9e9e8;\r\n  color: #1a1a1a;\r\n}\r\n\r\n.btn.btn-light:hover {\r\n  background-color: #84b8b4;\r\n}\r\n\r\n.btn.btn-dark {\r\n  background-color: #1a1a1a;\r\n  color: #d9e9e8;\r\n}\r\n\r\n.btn.btn-dark:hover {\r\n  background-color: #5f5f5f;\r\n}\r\n\r\n.btn.btn-white {\r\n  background-color: #ffffff;\r\n  color: #1a1a1a;\r\n}\r\n\r\n.btn.btn-white:hover {\r\n  background-color: #cccccc;\r\n}\r\n\r\n.btn.btn-black {\r\n  background-color: #000000;\r\n  color: #ffffff;\r\n}\r\n\r\n.btn.btn-black:hover {\r\n  background-color: #666666;\r\n}\r\n\r\n.btn.btn-link {\r\n  background-color: #1b89bc;\r\n  color: #ffffff;\r\n}\r\n\r\n.btn.btn-link:hover {\r\n  background-color: #31a9e1;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  .nav-btn {\r\n    display: none;\r\n  }\r\n\r\n  .navbar-brand {\r\n    display: none;\r\n  }\r\n\r\n  #navbar {\r\n    justify-content: center;\r\n  }\r\n\r\n  h1 {\r\n    font-size: 18px;\r\n  }\r\n}\r\n",
					'',
				])
				const c = a
			},
			645: (e) => {
				e.exports = function (e) {
					var n = []
					return (
						(n.toString = function () {
							return this.map(function (n) {
								var r = '',
									t = void 0 !== n[5]
								return (
									n[4] && (r += '@supports ('.concat(n[4], ') {')),
									n[2] && (r += '@media '.concat(n[2], ' {')),
									t &&
										(r += '@layer'.concat(
											n[5].length > 0 ? ' '.concat(n[5]) : '',
											' {'
										)),
									(r += e(n)),
									t && (r += '}'),
									n[2] && (r += '}'),
									n[4] && (r += '}'),
									r
								)
							}).join('')
						}),
						(n.i = function (e, r, t, o, i) {
							'string' == typeof e && (e = [[null, e, void 0]])
							var a = {}
							if (t)
								for (var c = 0; c < this.length; c++) {
									var s = this[c][0]
									null != s && (a[s] = !0)
								}
							for (var d = 0; d < e.length; d++) {
								var u = [].concat(e[d])
								;(t && a[u[0]]) ||
									(void 0 !== i &&
										(void 0 === u[5] ||
											(u[1] = '@layer'
												.concat(u[5].length > 0 ? ' '.concat(u[5]) : '', ' {')
												.concat(u[1], '}')),
										(u[5] = i)),
									r &&
										(u[2]
											? ((u[1] = '@media '
													.concat(u[2], ' {')
													.concat(u[1], '}')),
											  (u[2] = r))
											: (u[2] = r)),
									o &&
										(u[4]
											? ((u[1] = '@supports ('
													.concat(u[4], ') {')
													.concat(u[1], '}')),
											  (u[4] = o))
											: (u[4] = ''.concat(o))),
									n.push(u))
							}
						}),
						n
					)
				}
			},
			81: (e) => {
				e.exports = function (e) {
					return e[1]
				}
			},
			962: (e, n, r) => {
				var t = r(379),
					o = r.n(t),
					i = r(795),
					a = r.n(i),
					c = r(569),
					s = r.n(c),
					d = r(565),
					u = r.n(d),
					l = r(216),
					f = r.n(l),
					p = r(589),
					h = r.n(p),
					v = r(402),
					m = {}
				;(m.styleTagTransform = h()),
					(m.setAttributes = u()),
					(m.insert = s().bind(null, 'head')),
					(m.domAPI = a()),
					(m.insertStyleElement = f())
				var g = o()(v.default, m)
				if (!v.default.locals || e.hot.invalidate) {
					var b = !v.default.locals,
						y = b ? v : v.default.locals
					e.hot.accept(402, (n) => {
						;(v = r(402)),
							(function (e, n, r) {
								if ((!e && n) || (e && !n)) return !1
								var t
								for (t in e)
									if ((!r || 'default' !== t) && e[t] !== n[t]) return !1
								for (t in n) if (!((r && 'default' === t) || e[t])) return !1
								return !0
							})(y, b ? v : v.default.locals, b)
								? ((y = b ? v : v.default.locals), g(v.default))
								: e.hot.invalidate()
					})
				}
				e.hot.dispose(function () {
					g()
				}),
					v.default && v.default.locals && v.default.locals
			},
			379: (e) => {
				var n = []
				function r(e) {
					for (var r = -1, t = 0; t < n.length; t++)
						if (n[t].identifier === e) {
							r = t
							break
						}
					return r
				}
				function t(e, t) {
					for (var i = {}, a = [], c = 0; c < e.length; c++) {
						var s = e[c],
							d = t.base ? s[0] + t.base : s[0],
							u = i[d] || 0,
							l = ''.concat(d, ' ').concat(u)
						i[d] = u + 1
						var f = r(l),
							p = {
								css: s[1],
								media: s[2],
								sourceMap: s[3],
								supports: s[4],
								layer: s[5],
							}
						if (-1 !== f) n[f].references++, n[f].updater(p)
						else {
							var h = o(p, t)
							;(t.byIndex = c),
								n.splice(c, 0, { identifier: l, updater: h, references: 1 })
						}
						a.push(l)
					}
					return a
				}
				function o(e, n) {
					var r = n.domAPI(n)
					return (
						r.update(e),
						function (n) {
							if (n) {
								if (
									n.css === e.css &&
									n.media === e.media &&
									n.sourceMap === e.sourceMap &&
									n.supports === e.supports &&
									n.layer === e.layer
								)
									return
								r.update((e = n))
							} else r.remove()
						}
					)
				}
				e.exports = function (e, o) {
					var i = t((e = e || []), (o = o || {}))
					return function (e) {
						e = e || []
						for (var a = 0; a < i.length; a++) {
							var c = r(i[a])
							n[c].references--
						}
						for (var s = t(e, o), d = 0; d < i.length; d++) {
							var u = r(i[d])
							0 === n[u].references && (n[u].updater(), n.splice(u, 1))
						}
						i = s
					}
				}
			},
			569: (e) => {
				var n = {}
				e.exports = function (e, r) {
					var t = (function (e) {
						if (void 0 === n[e]) {
							var r = document.querySelector(e)
							if (
								window.HTMLIFrameElement &&
								r instanceof window.HTMLIFrameElement
							)
								try {
									r = r.contentDocument.head
								} catch (e) {
									r = null
								}
							n[e] = r
						}
						return n[e]
					})(e)
					if (!t)
						throw new Error(
							"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
						)
					t.appendChild(r)
				}
			},
			216: (e) => {
				e.exports = function (e) {
					var n = document.createElement('style')
					return e.setAttributes(n, e.attributes), e.insert(n, e.options), n
				}
			},
			565: (e, n, r) => {
				e.exports = function (e) {
					var n = r.nc
					n && e.setAttribute('nonce', n)
				}
			},
			795: (e) => {
				e.exports = function (e) {
					var n = e.insertStyleElement(e)
					return {
						update: function (r) {
							!(function (e, n, r) {
								var t = ''
								r.supports && (t += '@supports ('.concat(r.supports, ') {')),
									r.media && (t += '@media '.concat(r.media, ' {'))
								var o = void 0 !== r.layer
								o &&
									(t += '@layer'.concat(
										r.layer.length > 0 ? ' '.concat(r.layer) : '',
										' {'
									)),
									(t += r.css),
									o && (t += '}'),
									r.media && (t += '}'),
									r.supports && (t += '}')
								var i = r.sourceMap
								i &&
									'undefined' != typeof btoa &&
									(t +=
										'\n/*# sourceMappingURL=data:application/json;base64,'.concat(
											btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
											' */'
										)),
									n.styleTagTransform(t, e, n.options)
							})(n, e, r)
						},
						remove: function () {
							!(function (e) {
								if (null === e.parentNode) return !1
								e.parentNode.removeChild(e)
							})(n)
						},
					}
				}
			},
			589: (e) => {
				e.exports = function (e, n) {
					if (n.styleSheet) n.styleSheet.cssText = e
					else {
						for (; n.firstChild; ) n.removeChild(n.firstChild)
						n.appendChild(document.createTextNode(e))
					}
				}
			},
		},
		t = {}
	function o(e) {
		var n = t[e]
		if (void 0 !== n) {
			if (void 0 !== n.error) throw n.error
			return n.exports
		}
		var i = (t[e] = { id: e, exports: {} })
		try {
			var a = { id: e, module: i, factory: r[e], require: o }
			o.i.forEach(function (e) {
				e(a)
			}),
				(i = a.module),
				a.factory.call(i.exports, i, i.exports, a.require)
		} catch (e) {
			throw ((i.error = e), e)
		}
		return i.exports
	}
	;(o.m = r),
		(o.c = t),
		(o.i = []),
		(o.n = (e) => {
			var n = e && e.__esModule ? () => e.default : () => e
			return o.d(n, { a: n }), n
		}),
		(o.d = (e, n) => {
			for (var r in n)
				o.o(n, r) &&
					!o.o(e, r) &&
					Object.defineProperty(e, r, { enumerable: !0, get: n[r] })
		}),
		(o.hu = (e) => e + '.' + o.h() + '.hot-update.js'),
		(o.hmrF = () => 'main.' + o.h() + '.hot-update.json'),
		(o.h = () => '726bacfeb391e8c6a886'),
		(o.g = (function () {
			if ('object' == typeof globalThis) return globalThis
			try {
				return this || new Function('return this')()
			} catch (e) {
				if ('object' == typeof window) return window
			}
		})()),
		(o.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
		(e = {}),
		(n = 'pwa-text-editor-client:'),
		(o.l = (r, t, i, a) => {
			if (e[r]) e[r].push(t)
			else {
				var c, s
				if (void 0 !== i)
					for (
						var d = document.getElementsByTagName('script'), u = 0;
						u < d.length;
						u++
					) {
						var l = d[u]
						if (
							l.getAttribute('src') == r ||
							l.getAttribute('data-webpack') == n + i
						) {
							c = l
							break
						}
					}
				c ||
					((s = !0),
					((c = document.createElement('script')).charset = 'utf-8'),
					(c.timeout = 120),
					o.nc && c.setAttribute('nonce', o.nc),
					c.setAttribute('data-webpack', n + i),
					(c.src = r)),
					(e[r] = [t])
				var f = (n, t) => {
						;(c.onerror = c.onload = null), clearTimeout(p)
						var o = e[r]
						if (
							(delete e[r],
							c.parentNode && c.parentNode.removeChild(c),
							o && o.forEach((e) => e(t)),
							n)
						)
							return n(t)
					},
					p = setTimeout(
						f.bind(null, void 0, { type: 'timeout', target: c }),
						12e4
					)
				;(c.onerror = f.bind(null, c.onerror)),
					(c.onload = f.bind(null, c.onload)),
					s && document.head.appendChild(c)
			}
		}),
		(o.r = (e) => {
			'undefined' != typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
				Object.defineProperty(e, '__esModule', { value: !0 })
		}),
		(() => {
			var e,
				n,
				r,
				t = {},
				i = o.c,
				a = [],
				c = [],
				s = 'idle',
				d = 0,
				u = []
			function l(e) {
				s = e
				for (var n = [], r = 0; r < c.length; r++) n[r] = c[r].call(null, e)
				return Promise.all(n)
			}
			function f() {
				0 == --d &&
					l('ready').then(function () {
						if (0 === d) {
							var e = u
							u = []
							for (var n = 0; n < e.length; n++) e[n]()
						}
					})
			}
			function p(e) {
				if ('idle' !== s)
					throw new Error('check() is only allowed in idle status')
				return l('check')
					.then(o.hmrM)
					.then(function (r) {
						return r
							? l('prepare').then(function () {
									var t = []
									return (
										(n = []),
										Promise.all(
											Object.keys(o.hmrC).reduce(function (e, i) {
												return o.hmrC[i](r.c, r.r, r.m, e, n, t), e
											}, [])
										).then(function () {
											return (
												(n = function () {
													return e
														? v(e)
														: l('ready').then(function () {
																return t
														  })
												}),
												0 === d
													? n()
													: new Promise(function (e) {
															u.push(function () {
																e(n())
															})
													  })
											)
											var n
										})
									)
							  })
							: l(m() ? 'ready' : 'idle').then(function () {
									return null
							  })
					})
			}
			function h(e) {
				return 'ready' !== s
					? Promise.resolve().then(function () {
							throw new Error(
								'apply() is only allowed in ready status (state: ' + s + ')'
							)
					  })
					: v(e)
			}
			function v(e) {
				;(e = e || {}), m()
				var t = n.map(function (n) {
					return n(e)
				})
				n = void 0
				var o = t
					.map(function (e) {
						return e.error
					})
					.filter(Boolean)
				if (o.length > 0)
					return l('abort').then(function () {
						throw o[0]
					})
				var i = l('dispose')
				t.forEach(function (e) {
					e.dispose && e.dispose()
				})
				var a,
					c = l('apply'),
					s = function (e) {
						a || (a = e)
					},
					d = []
				return (
					t.forEach(function (e) {
						if (e.apply) {
							var n = e.apply(s)
							if (n) for (var r = 0; r < n.length; r++) d.push(n[r])
						}
					}),
					Promise.all([i, c]).then(function () {
						return a
							? l('fail').then(function () {
									throw a
							  })
							: r
							? v(e).then(function (e) {
									return (
										d.forEach(function (n) {
											e.indexOf(n) < 0 && e.push(n)
										}),
										e
									)
							  })
							: l('idle').then(function () {
									return d
							  })
					})
				)
			}
			function m() {
				if (r)
					return (
						n || (n = []),
						Object.keys(o.hmrI).forEach(function (e) {
							r.forEach(function (r) {
								o.hmrI[e](r, n)
							})
						}),
						(r = void 0),
						!0
					)
			}
			;(o.hmrD = t),
				o.i.push(function (u) {
					var v,
						m,
						g,
						b,
						y = u.module,
						w = (function (n, r) {
							var t = i[r]
							if (!t) return n
							var o = function (o) {
									if (t.hot.active) {
										if (i[o]) {
											var c = i[o].parents
											;-1 === c.indexOf(r) && c.push(r)
										} else (a = [r]), (e = o)
										;-1 === t.children.indexOf(o) && t.children.push(o)
									} else
										console.warn(
											'[HMR] unexpected require(' +
												o +
												') from disposed module ' +
												r
										),
											(a = [])
									return n(o)
								},
								c = function (e) {
									return {
										configurable: !0,
										enumerable: !0,
										get: function () {
											return n[e]
										},
										set: function (r) {
											n[e] = r
										},
									}
								}
							for (var u in n)
								Object.prototype.hasOwnProperty.call(n, u) &&
									'e' !== u &&
									Object.defineProperty(o, u, c(u))
							return (
								(o.e = function (e) {
									return (function (e) {
										switch (s) {
											case 'ready':
												l('prepare')
											case 'prepare':
												return d++, e.then(f, f), e
											default:
												return e
										}
									})(n.e(e))
								}),
								o
							)
						})(u.require, u.id)
					;(y.hot =
						((v = u.id),
						(m = y),
						(b = {
							_acceptedDependencies: {},
							_acceptedErrorHandlers: {},
							_declinedDependencies: {},
							_selfAccepted: !1,
							_selfDeclined: !1,
							_selfInvalidated: !1,
							_disposeHandlers: [],
							_main: (g = e !== v),
							_requireSelf: function () {
								;(a = m.parents.slice()), (e = g ? void 0 : v), o(v)
							},
							active: !0,
							accept: function (e, n, r) {
								if (void 0 === e) b._selfAccepted = !0
								else if ('function' == typeof e) b._selfAccepted = e
								else if ('object' == typeof e && null !== e)
									for (var t = 0; t < e.length; t++)
										(b._acceptedDependencies[e[t]] = n || function () {}),
											(b._acceptedErrorHandlers[e[t]] = r)
								else
									(b._acceptedDependencies[e] = n || function () {}),
										(b._acceptedErrorHandlers[e] = r)
							},
							decline: function (e) {
								if (void 0 === e) b._selfDeclined = !0
								else if ('object' == typeof e && null !== e)
									for (var n = 0; n < e.length; n++)
										b._declinedDependencies[e[n]] = !0
								else b._declinedDependencies[e] = !0
							},
							dispose: function (e) {
								b._disposeHandlers.push(e)
							},
							addDisposeHandler: function (e) {
								b._disposeHandlers.push(e)
							},
							removeDisposeHandler: function (e) {
								var n = b._disposeHandlers.indexOf(e)
								n >= 0 && b._disposeHandlers.splice(n, 1)
							},
							invalidate: function () {
								switch (((this._selfInvalidated = !0), s)) {
									case 'idle':
										;(n = []),
											Object.keys(o.hmrI).forEach(function (e) {
												o.hmrI[e](v, n)
											}),
											l('ready')
										break
									case 'ready':
										Object.keys(o.hmrI).forEach(function (e) {
											o.hmrI[e](v, n)
										})
										break
									case 'prepare':
									case 'check':
									case 'dispose':
									case 'apply':
										;(r = r || []).push(v)
								}
							},
							check: p,
							apply: h,
							status: function (e) {
								if (!e) return s
								c.push(e)
							},
							addStatusHandler: function (e) {
								c.push(e)
							},
							removeStatusHandler: function (e) {
								var n = c.indexOf(e)
								n >= 0 && c.splice(n, 1)
							},
							data: t[v],
						}),
						(e = void 0),
						b)),
						(y.parents = a),
						(y.children = []),
						(a = []),
						(u.require = w)
				}),
				(o.hmrC = {}),
				(o.hmrI = {})
		})(),
		(() => {
			var e
			o.g.importScripts && (e = o.g.location + '')
			var n = o.g.document
			if (!e && n && (n.currentScript && (e = n.currentScript.src), !e)) {
				var r = n.getElementsByTagName('script')
				r.length && (e = r[r.length - 1].src)
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
				n,
				r,
				t,
				i,
				a = (o.hmrS_jsonp = o.hmrS_jsonp || { 179: 0 }),
				c = {}
			function s(n, r) {
				return (
					(e = r),
					new Promise((e, r) => {
						c[n] = e
						var t = o.p + o.hu(n),
							i = new Error()
						o.l(t, (e) => {
							if (c[n]) {
								c[n] = void 0
								var t = e && ('load' === e.type ? 'missing' : e.type),
									o = e && e.target && e.target.src
								;(i.message =
									'Loading hot update chunk ' +
									n +
									' failed.\n(' +
									t +
									': ' +
									o +
									')'),
									(i.name = 'ChunkLoadError'),
									(i.type = t),
									(i.request = o),
									r(i)
							}
						})
					})
				)
			}
			function d(e) {
				function c(e) {
					for (
						var n = [e],
							r = {},
							t = n.map(function (e) {
								return { chain: [e], id: e }
							});
						t.length > 0;

					) {
						var i = t.pop(),
							a = i.id,
							c = i.chain,
							d = o.c[a]
						if (d && (!d.hot._selfAccepted || d.hot._selfInvalidated)) {
							if (d.hot._selfDeclined)
								return { type: 'self-declined', chain: c, moduleId: a }
							if (d.hot._main)
								return { type: 'unaccepted', chain: c, moduleId: a }
							for (var u = 0; u < d.parents.length; u++) {
								var l = d.parents[u],
									f = o.c[l]
								if (f) {
									if (f.hot._declinedDependencies[a])
										return {
											type: 'declined',
											chain: c.concat([l]),
											moduleId: a,
											parentId: l,
										}
									;-1 === n.indexOf(l) &&
										(f.hot._acceptedDependencies[a]
											? (r[l] || (r[l] = []), s(r[l], [a]))
											: (delete r[l],
											  n.push(l),
											  t.push({ chain: c.concat([l]), id: l })))
								}
							}
						}
					}
					return {
						type: 'accepted',
						moduleId: e,
						outdatedModules: n,
						outdatedDependencies: r,
					}
				}
				function s(e, n) {
					for (var r = 0; r < n.length; r++) {
						var t = n[r]
						;-1 === e.indexOf(t) && e.push(t)
					}
				}
				o.f && delete o.f.jsonpHmr, (n = void 0)
				var d = {},
					u = [],
					l = {},
					f = function (e) {
						console.warn(
							'[HMR] unexpected require(' + e.id + ') to disposed module'
						)
					}
				for (var p in r)
					if (o.o(r, p)) {
						var h,
							v = r[p],
							m = !1,
							g = !1,
							b = !1,
							y = ''
						switch (
							((h = v ? c(p) : { type: 'disposed', moduleId: p }).chain &&
								(y = '\nUpdate propagation: ' + h.chain.join(' -> ')),
							h.type)
						) {
							case 'self-declined':
								e.onDeclined && e.onDeclined(h),
									e.ignoreDeclined ||
										(m = new Error(
											'Aborted because of self decline: ' + h.moduleId + y
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
												y
										))
								break
							case 'unaccepted':
								e.onUnaccepted && e.onUnaccepted(h),
									e.ignoreUnaccepted ||
										(m = new Error(
											'Aborted because ' + p + ' is not accepted' + y
										))
								break
							case 'accepted':
								e.onAccepted && e.onAccepted(h), (g = !0)
								break
							case 'disposed':
								e.onDisposed && e.onDisposed(h), (b = !0)
								break
							default:
								throw new Error('Unexception type ' + h.type)
						}
						if (m) return { error: m }
						if (g)
							for (p in ((l[p] = v),
							s(u, h.outdatedModules),
							h.outdatedDependencies))
								o.o(h.outdatedDependencies, p) &&
									(d[p] || (d[p] = []), s(d[p], h.outdatedDependencies[p]))
						b && (s(u, [h.moduleId]), (l[p] = f))
					}
				r = void 0
				for (var w, _ = [], E = 0; E < u.length; E++) {
					var k = u[E],
						x = o.c[k]
					x &&
						(x.hot._selfAccepted || x.hot._main) &&
						l[k] !== f &&
						!x.hot._selfInvalidated &&
						_.push({
							module: k,
							require: x.hot._requireSelf,
							errorHandler: x.hot._selfAccepted,
						})
				}
				return {
					dispose: function () {
						var e
						t.forEach(function (e) {
							delete a[e]
						}),
							(t = void 0)
						for (var n, r = u.slice(); r.length > 0; ) {
							var i = r.pop(),
								c = o.c[i]
							if (c) {
								var s = {},
									l = c.hot._disposeHandlers
								for (E = 0; E < l.length; E++) l[E].call(null, s)
								for (
									o.hmrD[i] = s,
										c.hot.active = !1,
										delete o.c[i],
										delete d[i],
										E = 0;
									E < c.children.length;
									E++
								) {
									var f = o.c[c.children[E]]
									f && (e = f.parents.indexOf(i)) >= 0 && f.parents.splice(e, 1)
								}
							}
						}
						for (var p in d)
							if (o.o(d, p) && (c = o.c[p]))
								for (w = d[p], E = 0; E < w.length; E++)
									(n = w[E]),
										(e = c.children.indexOf(n)) >= 0 && c.children.splice(e, 1)
					},
					apply: function (n) {
						for (var r in l) o.o(l, r) && (o.m[r] = l[r])
						for (var t = 0; t < i.length; t++) i[t](o)
						for (var a in d)
							if (o.o(d, a)) {
								var c = o.c[a]
								if (c) {
									w = d[a]
									for (var s = [], f = [], p = [], h = 0; h < w.length; h++) {
										var v = w[h],
											m = c.hot._acceptedDependencies[v],
											g = c.hot._acceptedErrorHandlers[v]
										if (m) {
											if (-1 !== s.indexOf(m)) continue
											s.push(m), f.push(g), p.push(v)
										}
									}
									for (var b = 0; b < s.length; b++)
										try {
											s[b].call(null, w)
										} catch (r) {
											if ('function' == typeof f[b])
												try {
													f[b](r, { moduleId: a, dependencyId: p[b] })
												} catch (t) {
													e.onErrored &&
														e.onErrored({
															type: 'accept-error-handler-errored',
															moduleId: a,
															dependencyId: p[b],
															error: t,
															originalError: r,
														}),
														e.ignoreErrored || (n(t), n(r))
												}
											else
												e.onErrored &&
													e.onErrored({
														type: 'accept-errored',
														moduleId: a,
														dependencyId: p[b],
														error: r,
													}),
													e.ignoreErrored || n(r)
										}
								}
							}
						for (var y = 0; y < _.length; y++) {
							var E = _[y],
								k = E.module
							try {
								E.require(k)
							} catch (r) {
								if ('function' == typeof E.errorHandler)
									try {
										E.errorHandler(r, { moduleId: k, module: o.c[k] })
									} catch (t) {
										e.onErrored &&
											e.onErrored({
												type: 'self-accept-error-handler-errored',
												moduleId: k,
												error: t,
												originalError: r,
											}),
											e.ignoreErrored || (n(t), n(r))
									}
								else
									e.onErrored &&
										e.onErrored({
											type: 'self-accept-errored',
											moduleId: k,
											error: r,
										}),
										e.ignoreErrored || n(r)
							}
						}
						return u
					},
				}
			}
			;(self.webpackHotUpdatepwa_text_editor_client = (n, t, a) => {
				for (var s in t) o.o(t, s) && ((r[s] = t[s]), e && e.push(s))
				a && i.push(a), c[n] && (c[n](), (c[n] = void 0))
			}),
				(o.hmrI.jsonp = function (e, n) {
					r || ((r = {}), (i = []), (t = []), n.push(d)),
						o.o(r, e) || (r[e] = o.m[e])
				}),
				(o.hmrC.jsonp = function (e, c, u, l, f, p) {
					f.push(d),
						(n = {}),
						(t = c),
						(r = u.reduce(function (e, n) {
							return (e[n] = !1), e
						}, {})),
						(i = []),
						e.forEach(function (e) {
							o.o(a, e) && void 0 !== a[e]
								? (l.push(s(e, p)), (n[e] = !0))
								: (n[e] = !1)
						}),
						o.f &&
							(o.f.jsonpHmr = function (e, r) {
								n && o.o(n, e) && !n[e] && (r.push(s(e)), (n[e] = !0))
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
		(o.nc = void 0),
		o(376)
})()