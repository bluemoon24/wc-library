function y() {
}
function D(e) {
  return e();
}
function A() {
  return /* @__PURE__ */ Object.create(null);
}
function C(e) {
  e.forEach(D);
}
function I(e) {
  return typeof e == "function";
}
function H(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function P(e) {
  return Object.keys(e).length === 0;
}
function p(e, t) {
  e.appendChild(t);
}
function E(e, t, n) {
  e.insertBefore(t, n || null);
}
function w(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function z(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function d(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function T(e) {
  return document.createTextNode(e);
}
function q() {
  return T("");
}
function o(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function G(e) {
  return Array.from(e.childNodes);
}
let x;
function b(e) {
  x = e;
}
function J() {
  if (!x)
    throw new Error("Function called outside component initialization");
  return x;
}
function K(e) {
  J().$$.on_mount.push(e);
}
const v = [], O = [], k = [], B = [], L = Promise.resolve();
let N = !1;
function Q() {
  N || (N = !0, L.then(F));
}
function S(e) {
  k.push(e);
}
const j = /* @__PURE__ */ new Set();
let $ = 0;
function F() {
  if ($ !== 0)
    return;
  const e = x;
  do {
    try {
      for (; $ < v.length; ) {
        const t = v[$];
        $++, b(t), R(t.$$);
      }
    } catch (t) {
      throw v.length = 0, $ = 0, t;
    }
    for (b(null), v.length = 0, $ = 0; O.length; )
      O.pop()();
    for (let t = 0; t < k.length; t += 1) {
      const n = k[t];
      j.has(n) || (j.add(n), n());
    }
    k.length = 0;
  } while (v.length);
  for (; B.length; )
    B.pop()();
  N = !1, j.clear(), b(e);
}
function R(e) {
  if (e.fragment !== null) {
    e.update(), C(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(S);
  }
}
const U = /* @__PURE__ */ new Set();
function V(e, t) {
  e && e.i && (U.delete(e), e.i(t));
}
function W(e, t, n, c) {
  const { fragment: i, after_update: r } = e.$$;
  i && i.m(t, n), c || S(() => {
    const f = e.$$.on_mount.map(D).filter(I);
    e.$$.on_destroy ? e.$$.on_destroy.push(...f) : C(f), e.$$.on_mount = [];
  }), r.forEach(S);
}
function X(e, t) {
  const n = e.$$;
  n.fragment !== null && (C(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Y(e, t) {
  e.$$.dirty[0] === -1 && (v.push(e), Q(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function Z(e, t, n, c, i, r, f, u = [-1]) {
  const a = x;
  b(e);
  const l = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: y,
    not_equal: i,
    bound: A(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (a ? a.$$.context : [])),
    // everything else
    callbacks: A(),
    dirty: u,
    skip_bound: !1,
    root: t.target || a.$$.root
  };
  f && f(l.root);
  let m = !1;
  if (l.ctx = n ? n(e, t.props || {}, (_, g, ...s) => {
    const h = s.length ? s[0] : g;
    return l.ctx && i(l.ctx[_], l.ctx[_] = h) && (!l.skip_bound && l.bound[_] && l.bound[_](h), m && Y(e, _)), g;
  }) : [], l.update(), m = !0, C(l.before_update), l.fragment = c ? c(l.ctx) : !1, t.target) {
    if (t.hydrate) {
      const _ = G(t.target);
      l.fragment && l.fragment.l(_), _.forEach(w);
    } else
      l.fragment && l.fragment.c();
    t.intro && V(e.$$.fragment), W(e, t.target, t.anchor, t.customElement), F();
  }
  b(a);
}
class ee {
  $destroy() {
    X(this, 1), this.$destroy = y;
  }
  $on(t, n) {
    if (!I(n))
      return y;
    const c = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return c.push(n), () => {
      const i = c.indexOf(n);
      i !== -1 && c.splice(i, 1);
    };
  }
  $set(t) {
    this.$$set && !P(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
function te(e, t, n) {
  const c = e.slice();
  return c[4] = t[n], c;
}
function ne(e, t, n) {
  const c = e.slice();
  return c[7] = t[n], c;
}
function re(e) {
  let t;
  return {
    c() {
      t = d("line"), o(t, "class", "minor svelte-7fcxns"), o(t, "y1", "42"), o(t, "y2", "45"), o(t, "transform", "rotate(" + 6 * /*minute*/
      (e[4] + /*offset*/
      e[7]) + ")");
    },
    m(n, c) {
      E(n, t, c);
    },
    p: y,
    d(n) {
      n && w(t);
    }
  };
}
function oe(e) {
  let t, n, c = [1, 2, 3, 4], i = [];
  for (let r = 0; r < 4; r += 1)
    i[r] = re(ne(e, c, r));
  return {
    c() {
      t = d("line");
      for (let r = 0; r < 4; r += 1)
        i[r].c();
      n = q(), o(t, "class", "major svelte-7fcxns"), o(t, "y1", "35"), o(t, "y2", "45"), o(t, "transform", "rotate(" + 30 * /*minute*/
      e[4] + ")");
    },
    m(r, f) {
      E(r, t, f);
      for (let u = 0; u < 4; u += 1)
        i[u].m(r, f);
      E(r, n, f);
    },
    p: y,
    d(r) {
      r && w(t), z(i, r), r && w(n);
    }
  };
}
function ce(e) {
  let t, n, c, i, r, f, u, a, l, m, _ = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55], g = [];
  for (let s = 0; s < 12; s += 1)
    g[s] = oe(te(e, _, s));
  return {
    c() {
      t = d("svg"), n = d("circle");
      for (let s = 0; s < 12; s += 1)
        g[s].c();
      c = d("line"), r = d("line"), u = d("g"), a = d("line"), l = d("line"), o(n, "class", "clock-face svelte-7fcxns"), o(n, "r", "48"), o(c, "class", "hour svelte-7fcxns"), o(c, "y1", "2"), o(c, "y2", "-20"), o(c, "transform", i = "rotate(" + (30 * /*hours*/
      e[2] + /*minutes*/
      e[1] / 2) + ")"), o(r, "class", "minute svelte-7fcxns"), o(r, "y1", "4"), o(r, "y2", "-30"), o(r, "transform", f = "rotate(" + (6 * /*minutes*/
      e[1] + /*seconds*/
      e[0] / 10) + ")"), o(a, "class", "second svelte-7fcxns"), o(a, "y1", "10"), o(a, "y2", "-38"), o(l, "class", "second-counterweight svelte-7fcxns"), o(l, "y1", "10"), o(l, "y2", "2"), o(u, "transform", m = "rotate(" + 6 * /*seconds*/
      e[0] + ")"), o(t, "viewBox", "-50 -50 100 100"), o(t, "class", "svelte-7fcxns");
    },
    m(s, h) {
      E(s, t, h), p(t, n);
      for (let M = 0; M < 12; M += 1)
        g[M].m(t, null);
      p(t, c), p(t, r), p(t, u), p(u, a), p(u, l);
    },
    p(s, [h]) {
      h & /*hours, minutes*/
      6 && i !== (i = "rotate(" + (30 * /*hours*/
      s[2] + /*minutes*/
      s[1] / 2) + ")") && o(c, "transform", i), h & /*minutes, seconds*/
      3 && f !== (f = "rotate(" + (6 * /*minutes*/
      s[1] + /*seconds*/
      s[0] / 10) + ")") && o(r, "transform", f), h & /*seconds*/
      1 && m !== (m = "rotate(" + 6 * /*seconds*/
      s[0] + ")") && o(u, "transform", m);
    },
    i: y,
    o: y,
    d(s) {
      s && w(t), z(g, s);
    }
  };
}
function le(e, t, n) {
  let c, i, r, f = new Date();
  return K(() => {
    const u = setInterval(
      () => {
        n(3, f = new Date());
      },
      1e3
    );
    return () => {
      clearInterval(u);
    };
  }), e.$$.update = () => {
    e.$$.dirty & /*time*/
    8 && n(2, c = f.getHours()), e.$$.dirty & /*time*/
    8 && n(1, i = f.getMinutes()), e.$$.dirty & /*time*/
    8 && n(0, r = f.getSeconds());
  }, [r, i, c, f];
}
class se extends ee {
  constructor(t) {
    super(), Z(this, t, le, ce, H, {});
  }
}
export {
  se as MyComponent
};
