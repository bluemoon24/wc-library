function m() {
}
function H(t) {
  return t();
}
function T() {
  return /* @__PURE__ */ Object.create(null);
}
function E(t) {
  t.forEach(H);
}
function S(t) {
  return typeof t == "function";
}
function R(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function z(t) {
  return Object.keys(t).length === 0;
}
function y(t, e) {
  t.appendChild(e);
}
function w(t, e, n) {
  t.insertBefore(e, n || null);
}
function v(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function B(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function h(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function F(t) {
  return document.createTextNode(t);
}
function P() {
  return F("");
}
function o(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function V(t) {
  return Array.from(t.childNodes);
}
function q(t) {
  const e = {};
  for (const n of t)
    e[n.name] = n.value;
  return e;
}
let x;
function k(t) {
  x = t;
}
function G() {
  if (!x)
    throw new Error("Function called outside component initialization");
  return x;
}
function J(t) {
  G().$$.on_mount.push(t);
}
const b = [], L = [], C = [], O = [], K = Promise.resolve();
let N = !1;
function Q() {
  N || (N = !0, K.then(D));
}
function A(t) {
  C.push(t);
}
const j = /* @__PURE__ */ new Set();
let $ = 0;
function D() {
  if ($ !== 0)
    return;
  const t = x;
  do {
    try {
      for (; $ < b.length; ) {
        const e = b[$];
        $++, k(e), U(e.$$);
      }
    } catch (e) {
      throw b.length = 0, $ = 0, e;
    }
    for (k(null), b.length = 0, $ = 0; L.length; )
      L.pop()();
    for (let e = 0; e < C.length; e += 1) {
      const n = C[e];
      j.has(n) || (j.add(n), n());
    }
    C.length = 0;
  } while (b.length);
  for (; O.length; )
    O.pop()();
  N = !1, j.clear(), k(t);
}
function U(t) {
  if (t.fragment !== null) {
    t.update(), E(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(A);
  }
}
const W = /* @__PURE__ */ new Set();
function X(t, e) {
  t && t.i && (W.delete(t), t.i(e));
}
function Y(t, e, n, c) {
  const { fragment: u, after_update: r } = t.$$;
  u && u.m(e, n), c || A(() => {
    const l = t.$$.on_mount.map(H).filter(S);
    t.$$.on_destroy ? t.$$.on_destroy.push(...l) : E(l), t.$$.on_mount = [];
  }), r.forEach(A);
}
function Z(t, e) {
  const n = t.$$;
  n.fragment !== null && (E(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function tt(t, e) {
  t.$$.dirty[0] === -1 && (b.push(t), Q(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function et(t, e, n, c, u, r, l, a = [-1]) {
  const f = x;
  k(t);
  const i = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: m,
    not_equal: u,
    bound: T(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (f ? f.$$.context : [])),
    // everything else
    callbacks: T(),
    dirty: a,
    skip_bound: !1,
    root: e.target || f.$$.root
  };
  l && l(i.root);
  let g = !1;
  if (i.ctx = n ? n(t, e.props || {}, (d, p, ...s) => {
    const _ = s.length ? s[0] : p;
    return i.ctx && u(i.ctx[d], i.ctx[d] = _) && (!i.skip_bound && i.bound[d] && i.bound[d](_), g && tt(t, d)), p;
  }) : [], i.update(), g = !0, E(i.before_update), i.fragment = c ? c(i.ctx) : !1, e.target) {
    if (e.hydrate) {
      const d = V(e.target);
      i.fragment && i.fragment.l(d), d.forEach(v);
    } else
      i.fragment && i.fragment.c();
    e.intro && X(t.$$.fragment), Y(t, e.target, e.anchor, e.customElement), D();
  }
  k(f);
}
let I;
typeof HTMLElement == "function" && (I = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: t } = this.$$;
    this.$$.on_disconnect = t.map(H).filter(S);
    for (const e in this.$$.slotted)
      this.appendChild(this.$$.slotted[e]);
  }
  attributeChangedCallback(t, e, n) {
    this[t] = n;
  }
  disconnectedCallback() {
    E(this.$$.on_disconnect);
  }
  $destroy() {
    Z(this, 1), this.$destroy = m;
  }
  $on(t, e) {
    if (!S(e))
      return m;
    const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return n.push(e), () => {
      const c = n.indexOf(e);
      c !== -1 && n.splice(c, 1);
    };
  }
  $set(t) {
    this.$$set && !z(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
});
function nt(t, e, n) {
  const c = t.slice();
  return c[4] = e[n], c;
}
function rt(t, e, n) {
  const c = t.slice();
  return c[7] = e[n], c;
}
function ot(t) {
  let e;
  return {
    c() {
      e = h("line"), o(e, "class", "minor"), o(e, "y1", "42"), o(e, "y2", "45"), o(e, "transform", "rotate(" + 6 * /*minute*/
      (t[4] + /*offset*/
      t[7]) + ")");
    },
    m(n, c) {
      w(n, e, c);
    },
    p: m,
    d(n) {
      n && v(e);
    }
  };
}
function ct(t) {
  let e, n, c = [1, 2, 3, 4], u = [];
  for (let r = 0; r < 4; r += 1)
    u[r] = ot(rt(t, c, r));
  return {
    c() {
      e = h("line");
      for (let r = 0; r < 4; r += 1)
        u[r].c();
      n = P(), o(e, "class", "major"), o(e, "y1", "35"), o(e, "y2", "45"), o(e, "transform", "rotate(" + 30 * /*minute*/
      t[4] + ")");
    },
    m(r, l) {
      w(r, e, l);
      for (let a = 0; a < 4; a += 1)
        u[a].m(r, l);
      w(r, n, l);
    },
    p: m,
    d(r) {
      r && v(e), B(u, r), r && v(n);
    }
  };
}
function it(t) {
  let e, n, c, u, r, l, a, f, i, g, d = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55], p = [];
  for (let s = 0; s < 12; s += 1)
    p[s] = ct(nt(t, d, s));
  return {
    c() {
      e = h("svg"), n = h("circle");
      for (let s = 0; s < 12; s += 1)
        p[s].c();
      c = h("line"), r = h("line"), a = h("g"), f = h("line"), i = h("line"), this.c = m, o(n, "class", "clock-face"), o(n, "r", "48"), o(c, "class", "hour"), o(c, "y1", "2"), o(c, "y2", "-20"), o(c, "transform", u = "rotate(" + (30 * /*hours*/
      t[2] + /*minutes*/
      t[1] / 2) + ")"), o(r, "class", "minute"), o(r, "y1", "4"), o(r, "y2", "-30"), o(r, "transform", l = "rotate(" + (6 * /*minutes*/
      t[1] + /*seconds*/
      t[0] / 10) + ")"), o(f, "class", "second"), o(f, "y1", "10"), o(f, "y2", "-38"), o(i, "class", "second-counterweight"), o(i, "y1", "10"), o(i, "y2", "2"), o(a, "transform", g = "rotate(" + 6 * /*seconds*/
      t[0] + ")"), o(e, "viewBox", "-50 -50 100 100");
    },
    m(s, _) {
      w(s, e, _), y(e, n);
      for (let M = 0; M < 12; M += 1)
        p[M].m(e, null);
      y(e, c), y(e, r), y(e, a), y(a, f), y(a, i);
    },
    p(s, [_]) {
      _ & /*hours, minutes*/
      6 && u !== (u = "rotate(" + (30 * /*hours*/
      s[2] + /*minutes*/
      s[1] / 2) + ")") && o(c, "transform", u), _ & /*minutes, seconds*/
      3 && l !== (l = "rotate(" + (6 * /*minutes*/
      s[1] + /*seconds*/
      s[0] / 10) + ")") && o(r, "transform", l), _ & /*seconds*/
      1 && g !== (g = "rotate(" + 6 * /*seconds*/
      s[0] + ")") && o(a, "transform", g);
    },
    i: m,
    o: m,
    d(s) {
      s && v(e), B(p, s);
    }
  };
}
function st(t, e, n) {
  let c, u, r, l = new Date();
  return J(() => {
    const a = setInterval(
      () => {
        n(3, l = new Date());
      },
      1e3
    );
    return () => {
      clearInterval(a);
    };
  }), t.$$.update = () => {
    t.$$.dirty & /*time*/
    8 && n(2, c = l.getHours()), t.$$.dirty & /*time*/
    8 && n(1, u = l.getMinutes()), t.$$.dirty & /*time*/
    8 && n(0, r = l.getSeconds());
  }, [r, u, c, l];
}
class lt extends I {
  constructor(e) {
    super(), this.shadowRoot.innerHTML = "<style>svg{width:100%;height:100%}.clock-face{stroke:#333;fill:white}.minor{stroke:#999;stroke-width:0.5}.major{stroke:#333;stroke-width:1}.hour{stroke:#333}.minute{stroke:#666}.second,.second-counterweight{stroke:rgb(180,0,0)}.second-counterweight{stroke-width:3}</style>", et(
      this,
      {
        target: this.shadowRoot,
        props: q(this.attributes),
        customElement: !0
      },
      st,
      it,
      R,
      {},
      null
    ), e && e.target && w(e.target, this, e.anchor);
  }
}
customElements.define("my-component", lt);
export {
  lt as MyComponent
};
