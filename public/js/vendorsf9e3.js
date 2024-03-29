!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports)
    : "function" == typeof define && define.amd
      ? define(["exports"], e)
      : e(((t = t || self).window = t.window || {}));
})(this, function (t) {
  "use strict";
  var e =
    /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
  function i(t) {
    return _.getComputedStyle(t);
  }
  function r(t, e) {
    var i;
    return v(t)
      ? t
      : "string" == (i = typeof t) && !e && t
        ? y.call(d.querySelectorAll(t), 0)
        : t && "object" == i && "length" in t
          ? y.call(t, 0)
          : t
            ? [t]
            : [];
  }
  function n(t) {
    return "absolute" === t.position || !0 === t.absolute;
  }
  function u(t, e) {
    for (var i, r = e.length; -1 < --r; )
      if (((i = e[r]), t.substr(0, i.length) === i)) return i.length;
  }
  function s(t, e) {
    void 0 === t && (t = "");
    var i = ~t.indexOf("++"),
      r = 1;
    return (
      i && (t = t.split("++").join("")),
      function () {
        return (
          "<" +
          e +
          " style='position:relative;display:inline-block;'" +
          (t ? " class='" + t + (i ? r++ : "") + "'>" : ">")
        );
      }
    );
  }
  function a(t, e, i) {
    var r = t.nodeType;
    if (1 === r || 9 === r || 11 === r)
      for (t = t.firstChild; t; t = t.nextSibling) a(t, e, i);
    else (3 !== r && 4 !== r) || (t.nodeValue = t.nodeValue.split(e).join(i));
  }
  function o(t, e) {
    for (var i = e.length; -1 < --i; ) t.push(e[i]);
  }
  function D(t, e, i) {
    for (var r; t && t !== e; ) {
      if ((r = t._next || t.nextSibling)) return r.textContent.charAt(0) === i;
      t = t.parentNode || t._parent;
    }
  }
  function h(t) {
    var e,
      i,
      n = r(t.childNodes),
      u = n.length;
    for (e = 0; e < u; e++)
      (i = n[e])._isSplit
        ? h(i)
        : (e && 3 === i.previousSibling.nodeType
            ? (i.previousSibling.nodeValue +=
                3 === i.nodeType ? i.nodeValue : i.firstChild.nodeValue)
            : 3 !== i.nodeType && t.insertBefore(i.firstChild, i),
          t.removeChild(i));
  }
  function l(t, e) {
    return parseFloat(e[t]) || 0;
  }
  function f(t, e, r, u, s, f, p) {
    var c,
      _,
      m,
      g,
      F,
      C,
      v,
      y,
      E,
      x,
      w,
      b,
      T = i(t),
      A = l("paddingLeft", T),
      B = -999,
      M = l("borderBottomWidth", T) + l("borderTopWidth", T),
      S = l("borderLeftWidth", T) + l("borderRightWidth", T),
      O = l("paddingTop", T) + l("paddingBottom", T),
      k = l("paddingLeft", T) + l("paddingRight", T),
      P = 0.2 * l("fontSize", T),
      R = T.textAlign,
      z = [],
      N = [],
      L = [],
      I = e.wordDelimiter || " ",
      Y = e.tag ? e.tag : e.span ? "span" : "div",
      U = e.type || e.split || "chars,words,lines",
      V = s && ~U.indexOf("lines") ? [] : null,
      X = ~U.indexOf("words"),
      j = ~U.indexOf("chars"),
      W = n(e),
      q = e.linesClass,
      H = ~(q || "").indexOf("++"),
      Q = [];
    for (
      H && (q = q.split("++").join("")),
        m = (_ = t.getElementsByTagName("*")).length,
        F = [],
        c = 0;
      c < m;
      c++
    )
      F[c] = _[c];
    if (V || W)
      for (c = 0; c < m; c++)
        ((C = (g = F[c]).parentNode === t) || W || (j && !X)) &&
          ((b = g.offsetTop),
          V &&
            C &&
            Math.abs(b - B) > P &&
            ("BR" !== g.nodeName || 0 === c) &&
            ((v = []), V.push(v), (B = b)),
          W &&
            ((g._x = g.offsetLeft),
            (g._y = b),
            (g._w = g.offsetWidth),
            (g._h = g.offsetHeight)),
          V &&
            (((g._isSplit && C) ||
              (!j && C) ||
              (X && C) ||
              (!X &&
                g.parentNode.parentNode === t &&
                !g.parentNode._isSplit)) &&
              (v.push(g), (g._x -= A), D(g, t, I) && (g._wordEnd = !0)),
            "BR" === g.nodeName &&
              ((g.nextSibling && "BR" === g.nextSibling.nodeName) || 0 === c) &&
              V.push([])));
    for (c = 0; c < m; c++)
      (C = (g = F[c]).parentNode === t),
        "BR" !== g.nodeName
          ? (W &&
              ((E = g.style),
              X || C || ((g._x += g.parentNode._x), (g._y += g.parentNode._y)),
              (E.left = g._x + "px"),
              (E.top = g._y + "px"),
              (E.position = "absolute"),
              (E.display = "block"),
              (E.width = g._w + 1 + "px"),
              (E.height = g._h + "px")),
            !X && j
              ? g._isSplit
                ? ((g._next = g.nextSibling), g.parentNode.appendChild(g))
                : g.parentNode._isSplit
                  ? ((g._parent = g.parentNode),
                    !g.previousSibling &&
                      g.firstChild &&
                      (g.firstChild._isFirst = !0),
                    g.nextSibling &&
                      " " === g.nextSibling.textContent &&
                      !g.nextSibling.nextSibling &&
                      Q.push(g.nextSibling),
                    (g._next =
                      g.nextSibling && g.nextSibling._isFirst
                        ? null
                        : g.nextSibling),
                    g.parentNode.removeChild(g),
                    F.splice(c--, 1),
                    m--)
                  : C ||
                    ((b = !g.nextSibling && D(g.parentNode, t, I)),
                    g.parentNode._parent && g.parentNode._parent.appendChild(g),
                    b && g.parentNode.appendChild(d.createTextNode(" ")),
                    "span" === Y && (g.style.display = "inline"),
                    z.push(g))
              : g.parentNode._isSplit && !g._isSplit && "" !== g.innerHTML
                ? N.push(g)
                : j &&
                  !g._isSplit &&
                  ("span" === Y && (g.style.display = "inline"), z.push(g)))
          : V || W
            ? (g.parentNode && g.parentNode.removeChild(g),
              F.splice(c--, 1),
              m--)
            : X || t.appendChild(g);
    for (c = Q.length; -1 < --c; ) Q[c].parentNode.removeChild(Q[c]);
    if (V) {
      for (
        W &&
          ((x = d.createElement(Y)),
          t.appendChild(x),
          (w = x.offsetWidth + "px"),
          (b = x.offsetParent === t ? 0 : t.offsetLeft),
          t.removeChild(x)),
          E = t.style.cssText,
          t.style.cssText = "display:none;";
        t.firstChild;

      )
        t.removeChild(t.firstChild);
      for (y = " " === I && (!W || (!X && !j)), c = 0; c < V.length; c++) {
        for (
          v = V[c],
            (x = d.createElement(Y)).style.cssText =
              "display:block;text-align:" +
              R +
              ";position:" +
              (W ? "absolute;" : "relative;"),
            q && (x.className = q + (H ? c + 1 : "")),
            L.push(x),
            m = v.length,
            _ = 0;
          _ < m;
          _++
        )
          "BR" !== v[_].nodeName &&
            ((g = v[_]),
            x.appendChild(g),
            y && g._wordEnd && x.appendChild(d.createTextNode(" ")),
            W &&
              (0 === _ &&
                ((x.style.top = g._y + "px"), (x.style.left = A + b + "px")),
              (g.style.top = "0px"),
              b && (g.style.left = g._x - b + "px")));
        0 === m
          ? (x.innerHTML = "&nbsp;")
          : X || j || (h(x), a(x, String.fromCharCode(160), " ")),
          W && ((x.style.width = w), (x.style.height = g._h + "px")),
          t.appendChild(x);
      }
      t.style.cssText = E;
    }
    W &&
      (p > t.clientHeight &&
        ((t.style.height = p - O + "px"),
        t.clientHeight < p && (t.style.height = p + M + "px")),
      f > t.clientWidth &&
        ((t.style.width = f - k + "px"),
        t.clientWidth < f && (t.style.width = f + S + "px"))),
      o(r, z),
      X && o(u, N),
      o(s, L);
  }
  function p(t, i, r, s) {
    var o,
      D,
      h,
      l,
      f,
      p,
      c,
      _,
      m = i.tag ? i.tag : i.span ? "span" : "div",
      g = ~(i.type || i.split || "chars,words,lines").indexOf("chars"),
      v = n(i),
      y = i.wordDelimiter || " ",
      E = " " !== y ? "" : v ? "&#173; " : " ",
      x = "</" + m + ">",
      w = 1,
      b = i.specialChars
        ? "function" == typeof i.specialChars
          ? i.specialChars
          : u
        : null,
      T = d.createElement("div"),
      A = t.parentNode;
    for (
      A.insertBefore(T, t),
        T.textContent = t.nodeValue,
        A.removeChild(t),
        c =
          -1 !==
          (o = (function t(e) {
            var i = e.nodeType,
              r = "";
            if (1 === i || 9 === i || 11 === i) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) r += t(e);
            } else if (3 === i || 4 === i) return e.nodeValue;
            return r;
          })((t = T))).indexOf("<"),
        !1 !== i.reduceWhiteSpace && (o = o.replace(C, " ").replace(F, "")),
        c && (o = o.split("<").join("{{LT}}")),
        f = o.length,
        D = (" " === o.charAt(0) ? E : "") + r(),
        h = 0;
      h < f;
      h++
    )
      if (((p = o.charAt(h)), b && (_ = b(o.substr(h), i.specialChars))))
        (p = o.substr(h, _ || 1)),
          (D += g && " " !== p ? s() + p + "</" + m + ">" : p),
          (h += _ - 1);
      else if (p === y && o.charAt(h - 1) !== y && h) {
        for (D += w ? x : "", w = 0; o.charAt(h + 1) === y; ) (D += E), h++;
        h === f - 1
          ? (D += E)
          : ")" !== o.charAt(h + 1) && ((D += E + r()), (w = 1));
      } else
        "{" === p && "{{LT}}" === o.substr(h, 6)
          ? ((D += g ? s() + "{{LT}}</" + m + ">" : "{{LT}}"), (h += 5))
          : (55296 <= p.charCodeAt(0) && p.charCodeAt(0) <= 56319) ||
              (65024 <= o.charCodeAt(h + 1) && o.charCodeAt(h + 1) <= 65039)
            ? ((l = ((o.substr(h, 12).split(e) || [])[1] || "").length || 2),
              (D +=
                g && " " !== p
                  ? s() + o.substr(h, l) + "</" + m + ">"
                  : o.substr(h, l)),
              (h += l - 1))
            : (D += g && " " !== p ? s() + p + "</" + m + ">" : p);
    (t.outerHTML = D + (w ? x : "")), c && a(A, "{{LT}}", "<");
  }
  function c(t, e, u, s) {
    var a,
      o,
      D = r(t.childNodes),
      h = D.length,
      l = n(e);
    if (3 !== t.nodeType || 1 < h) {
      for (e.absolute = !1, a = 0; a < h; a++)
        (3 === (o = D[a]).nodeType && !/\S+/.test(o.nodeValue)) ||
          (l &&
            3 !== o.nodeType &&
            "inline" === i(o).display &&
            ((o.style.display = "inline-block"),
            (o.style.position = "relative")),
          (o._isSplit = !0),
          c(o, e, u, s));
      return (e.absolute = l), void (t._isSplit = !0);
    }
    p(t, e, u, s);
  }
  var d,
    _,
    m,
    g,
    F = /(?:\r|\n|\t\t)/g,
    C = /(?:\s\s+)/g,
    v = Array.isArray,
    y = [].slice,
    E =
      (((g = x.prototype).split = function (t) {
        this.isSplit && this.revert(),
          (this.vars = t = t || this.vars),
          (this._originals.length =
            this.chars.length =
            this.words.length =
            this.lines.length =
              0);
        for (
          var e,
            i,
            r,
            n = this.elements.length,
            u = t.tag ? t.tag : t.span ? "span" : "div",
            a = s(t.wordsClass, u),
            o = s(t.charsClass, u);
          -1 < --n;

        )
          (r = this.elements[n]),
            (this._originals[n] = r.innerHTML),
            (e = r.clientHeight),
            (i = r.clientWidth),
            c(r, t, a, o),
            f(r, t, this.chars, this.words, this.lines, i, e);
        return (
          this.chars.reverse(),
          this.words.reverse(),
          this.lines.reverse(),
          (this.isSplit = !0),
          this
        );
      }),
      (g.revert = function () {
        var t = this._originals;
        if (!t) throw "revert() call wasn't scoped properly.";
        return (
          this.elements.forEach(function (e, i) {
            return (e.innerHTML = t[i]);
          }),
          (this.chars = []),
          (this.words = []),
          (this.lines = []),
          (this.isSplit = !1),
          this
        );
      }),
      (x.create = function (t, e) {
        return new x(t, e);
      }),
      x);
  function x(t, e) {
    m || ((d = document), (_ = window), (m = 1)),
      (this.elements = r(t)),
      (this.chars = []),
      (this.words = []),
      (this.lines = []),
      (this._originals = []),
      (this.vars = e || {}),
      this.split(e);
  }
  (E.version = "3.0.0"),
    (t.SplitText = E),
    (t.default = E),
    Object.defineProperty(t, "__esModule", { value: !0 });
}),
  (function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
      ? e(exports)
      : "function" == typeof define && define.amd
        ? define(["exports"], e)
        : e(((t = t || self).window = t.window || {}));
  })(this, function (t) {
    "use strict";
    function e(t, e) {
      (t.prototype = Object.create(e.prototype)),
        ((t.prototype.constructor = t).__proto__ = e);
    }
    function i(t) {
      if (void 0 === t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      return t;
    }
    function r(t) {
      return "string" == typeof t;
    }
    function n(t) {
      return "function" == typeof t;
    }
    function u(t) {
      return "number" == typeof t;
    }
    function s(t) {
      return void 0 === t;
    }
    function a(t) {
      return "object" == typeof t;
    }
    function o(t) {
      return !1 !== t;
    }
    function D() {
      return "undefined" != typeof window;
    }
    function h(t) {
      return n(t) || r(t);
    }
    function l(t) {
      return (mt = De(t, te)) && ai;
    }
    function f(t, e) {
      return console.warn(
        "Invalid property",
        t,
        "set to",
        e,
        "Missing plugin? gsap.registerPlugin()",
      );
    }
    function p(t, e) {
      return !e && console.warn(t);
    }
    function c(t, e) {
      return (t && (te[t] = e) && mt && (mt[t] = e)) || te;
    }
    function d() {
      return 0;
    }
    function _(t) {
      var e,
        i,
        r = t[0];
      if ((a(r) || n(r) || (t = [t]), !(e = (r._gsap || {}).harness))) {
        for (i = ae.length; i-- && !ae[i].targetTest(r); );
        e = ae[i];
      }
      for (i = t.length; i--; )
        (t[i] && (t[i]._gsap || (t[i]._gsap = new Se(t[i], e)))) ||
          t.splice(i, 1);
      return t;
    }
    function m(t) {
      return t._gsap || _(ce(t))[0]._gsap;
    }
    function g(t, e) {
      var i = t[e];
      return n(i) ? t[e]() : (s(i) && t.getAttribute(e)) || i;
    }
    function F(t, e) {
      return (t = t.split(",")).forEach(e) || t;
    }
    function C(t) {
      return Math.round(1e5 * t) / 1e5 || 0;
    }
    function v(t, e) {
      for (var i = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < i; );
      return r < i;
    }
    function y(t, e, i) {
      var r,
        n = u(t[1]),
        s = (n ? 2 : 1) + (e < 2 ? 0 : 1),
        a = t[s];
      if ((n && (a.duration = t[1]), (a.parent = i), e)) {
        for (r = a; i && !("immediateRender" in r); )
          (r = i.vars.defaults || {}), (i = o(i.vars.inherit) && i.parent);
        (a.immediateRender = o(r.immediateRender)),
          e < 2 ? (a.runBackwards = 1) : (a.startAt = t[s - 1]);
      }
      return a;
    }
    function E() {
      var t,
        e,
        i = ie.length,
        r = ie.slice(0);
      for (re = {}, t = ie.length = 0; t < i; t++)
        (e = r[t]) &&
          e._lazy &&
          (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
    }
    function x(t, e, i, r) {
      ie.length && E(), t.render(e, i, r), ie.length && E();
    }
    function w(t) {
      var e = parseFloat(t);
      return (e || 0 === e) && (t + "").match(Kt).length < 2 ? e : t;
    }
    function b(t) {
      return t;
    }
    function T(t, e) {
      for (var i in e) i in t || (t[i] = e[i]);
      return t;
    }
    function A(t, e) {
      for (var i in e)
        i in t || "duration" === i || "ease" === i || (t[i] = e[i]);
    }
    function B(t, e) {
      for (var i in e) t[i] = a(e[i]) ? B(t[i] || (t[i] = {}), e[i]) : e[i];
      return t;
    }
    function M(t, e) {
      var i,
        r = {};
      for (i in t) i in e || (r[i] = t[i]);
      return r;
    }
    function S(t) {
      var e = t.parent || pt,
        i = t.keyframes ? A : T;
      if (o(t.inherit))
        for (; e; ) i(t, e.vars.defaults), (e = e.parent || e._dp);
      return t;
    }
    function O(t, e, i, r) {
      void 0 === i && (i = "_first"), void 0 === r && (r = "_last");
      var n = e._prev,
        u = e._next;
      n ? (n._next = u) : t[i] === e && (t[i] = u),
        u ? (u._prev = n) : t[r] === e && (t[r] = n),
        (e._next = e._prev = e.parent = null);
    }
    function k(t, e) {
      !t.parent || (e && !t.parent.autoRemoveChildren) || t.parent.remove(t),
        (t._act = 0);
    }
    function P(t) {
      for (var e = t; e; ) (e._dirty = 1), (e = e.parent);
      return t;
    }
    function R(t) {
      return t._repeat ? he(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
    }
    function z(t, e) {
      return (
        (t - e._start) * e._ts +
        (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
      );
    }
    function N(t) {
      return (t._end = C(
        t._start + (t._tDur / Math.abs(t._ts || t._rts || It) || 0),
      ));
    }
    function L(t, e) {
      var i;
      if (
        ((e._time || (e._initted && !e._dur)) &&
          ((i = z(t.rawTime(), e)),
          (!e._dur || fe(0, e.totalDuration(), i) - e._tTime > It) &&
            e.render(i, !0)),
        P(t)._dp && t._initted && t._time >= t._dur && t._ts)
      ) {
        if (t._dur < t.duration())
          for (i = t; i._dp; )
            0 <= i.rawTime() && i.totalTime(i._tTime), (i = i._dp);
        t._zTime = -It;
      }
    }
    function I(t, e, i, r) {
      return (
        e.parent && k(e),
        (e._start = C(i + e._delay)),
        (e._end = C(
          e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0),
        )),
        (function (t, e, i, r, n) {
          void 0 === i && (i = "_first"), void 0 === r && (r = "_last");
          var u,
            s = t[r];
          if (n) for (u = e[n]; s && s[n] > u; ) s = s._prev;
          s
            ? ((e._next = s._next), (s._next = e))
            : ((e._next = t[i]), (t[i] = e)),
            e._next ? (e._next._prev = e) : (t[r] = e),
            (e._prev = s),
            (e.parent = e._dp = t);
        })(t, e, "_first", "_last", t._sort ? "_start" : 0),
        (t._recent = e),
        r || L(t, e),
        t
      );
    }
    function Y(t, e) {
      return (
        (te.ScrollTrigger || f("scrollTrigger", e)) &&
        te.ScrollTrigger.create(e, t)
      );
    }
    function U(t, e, i, r) {
      return (
        Le(t, e),
        t._initted
          ? !i &&
            t._pt &&
            ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
            Ft !== ve.frame
            ? (ie.push(t), (t._lazy = [e, r]), 1)
            : void 0
          : 1
      );
    }
    function V(t, e, i) {
      var r = t._repeat,
        n = C(e) || 0;
      return (
        (t._dur = n),
        (t._tDur = r ? (r < 0 ? 1e10 : C(n * (r + 1) + t._rDelay * r)) : n),
        t._time > n &&
          ((t._time = n), (t._tTime = Math.min(t._tTime, t._tDur))),
        i || P(t.parent),
        t.parent && N(t),
        t
      );
    }
    function X(t) {
      return t instanceof Pe ? P(t) : V(t, t._dur);
    }
    function j(t, e) {
      var i,
        n,
        u = t.labels,
        s = t._recent || le,
        a = t.duration() >= Lt ? s.endTime(!1) : t._dur;
      return r(e) && (isNaN(e) || e in u)
        ? "<" === (i = e.charAt(0)) || ">" === i
          ? ("<" === i ? s._start : s.endTime(0 <= s._repeat)) +
            (parseFloat(e.substr(1)) || 0)
          : (i = e.indexOf("=")) < 0
            ? (e in u || (u[e] = a), u[e])
            : ((n = +(e.charAt(i - 1) + e.substr(i + 1))),
              1 < i ? j(t, e.substr(0, i - 1)) + n : a + n)
        : null == e
          ? a
          : +e;
    }
    function W(t, e) {
      return t || 0 === t ? e(t) : e;
    }
    function q(t) {
      return (t + "").substr((parseFloat(t) + "").length);
    }
    function H(t, e) {
      return (
        t &&
        a(t) &&
        "length" in t &&
        ((!e && !t.length) || (t.length - 1 in t && a(t[0]))) &&
        !t.nodeType &&
        t !== ct
      );
    }
    function Q(t) {
      return t.sort(function () {
        return 0.5 - Math.random();
      });
    }
    function G(t) {
      if (n(t)) return t;
      var e = a(t) ? t : { each: t },
        i = Te(e.ease),
        u = e.from || 0,
        s = parseFloat(e.base) || 0,
        o = {},
        D = 0 < u && u < 1,
        h = isNaN(u) || D,
        l = e.axis,
        f = u,
        p = u;
      return (
        r(u)
          ? (f = p = { center: 0.5, edges: 0.5, end: 1 }[u] || 0)
          : !D && h && ((f = u[0]), (p = u[1])),
        function (t, r, n) {
          var a,
            D,
            c,
            d,
            _,
            m,
            g,
            F,
            v,
            y = (n || e).length,
            E = o[y];
          if (!E) {
            if (!(v = "auto" === e.grid ? 0 : (e.grid || [1, Lt])[1])) {
              for (
                g = -Lt;
                g < (g = n[v++].getBoundingClientRect().left) && v < y;

              );
              v--;
            }
            for (
              E = o[y] = [],
                a = h ? Math.min(v, y) * f - 0.5 : u % v,
                D = h ? (y * p) / v - 0.5 : (u / v) | 0,
                F = Lt,
                m = g = 0;
              m < y;
              m++
            )
              (c = (m % v) - a),
                (d = D - ((m / v) | 0)),
                (E[m] = _ =
                  l ? Math.abs("y" === l ? d : c) : Xt(c * c + d * d)),
                g < _ && (g = _),
                _ < F && (F = _);
            "random" === u && Q(E),
              (E.max = g - F),
              (E.min = F),
              (E.v = y =
                (parseFloat(e.amount) ||
                  parseFloat(e.each) *
                    (y < v
                      ? y - 1
                      : l
                        ? "y" === l
                          ? y / v
                          : v
                        : Math.max(v, y / v)) ||
                  0) * ("edges" === u ? -1 : 1)),
              (E.b = y < 0 ? s - y : s),
              (E.u = q(e.amount || e.each) || 0),
              (i = i && y < 0 ? be(i) : i);
          }
          return (
            (y = (E[t] - E.min) / E.max || 0),
            C(E.b + (i ? i(y) : y) * E.v) + E.u
          );
        }
      );
    }
    function Z(t) {
      var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
      return function (i) {
        return (
          Math.floor(Math.round(parseFloat(i) / t) * t * e) / e +
          (u(i) ? 0 : q(i))
        );
      };
    }
    function $(t, e) {
      var i,
        r,
        s = qt(t);
      return (
        !s &&
          a(t) &&
          ((i = s = t.radius || Lt),
          t.values
            ? ((t = ce(t.values)), (r = !u(t[0])) && (i *= i))
            : (t = Z(t.increment))),
        W(
          e,
          s
            ? n(t)
              ? function (e) {
                  return (r = t(e)), Math.abs(r - e) <= i ? r : e;
                }
              : function (e) {
                  for (
                    var n,
                      s,
                      a = parseFloat(r ? e.x : e),
                      o = parseFloat(r ? e.y : 0),
                      D = Lt,
                      h = 0,
                      l = t.length;
                    l--;

                  )
                    (n = r
                      ? (n = t[l].x - a) * n + (s = t[l].y - o) * s
                      : Math.abs(t[l] - a)) < D && ((D = n), (h = l));
                  return (
                    (h = !i || D <= i ? t[h] : e),
                    r || h === e || u(e) ? h : h + q(e)
                  );
                }
            : Z(t),
        )
      );
    }
    function J(t, e, i, r) {
      return W(qt(t) ? !e : !0 === i ? !!(i = 0) : !r, function () {
        return qt(t)
          ? t[~~(Math.random() * t.length)]
          : (i = i || 1e-5) &&
              (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
              Math.floor(
                Math.round((t + Math.random() * (e - t)) / i) * i * r,
              ) / r;
      });
    }
    function K(t, e, i) {
      return W(i, function (i) {
        return t[~~e(i)];
      });
    }
    function tt(t) {
      for (var e, i, r, n, u = 0, s = ""; ~(e = t.indexOf("random(", u)); )
        (r = t.indexOf(")", e)),
          (n = "[" === t.charAt(e + 7)),
          (i = t.substr(e + 7, r - e - 7).match(n ? Kt : Ht)),
          (s += t.substr(u, e - u) + J(n ? i : +i[0], +i[1], +i[2] || 1e-5)),
          (u = r + 1);
      return s + t.substr(u, t.length - u);
    }
    function et(t, e, i) {
      var r,
        n,
        u,
        s = t.labels,
        a = Lt;
      for (r in s)
        (n = s[r] - e) < 0 == !!i &&
          n &&
          a > (n = Math.abs(n)) &&
          ((u = r), (a = n));
      return u;
    }
    function it(t) {
      return k(t), t.progress() < 1 && _e(t, "onInterrupt"), t;
    }
    function rt(t, e, i) {
      return (
        ((6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1
          ? e + (i - e) * t * 6
          : t < 0.5
            ? i
            : 3 * t < 2
              ? e + (i - e) * (2 / 3 - t) * 6
              : e) *
          me +
          0.5) |
        0
      );
    }
    function nt(t, e, i) {
      var r,
        n,
        s,
        a,
        o,
        D,
        h,
        l,
        f,
        p,
        c = t ? (u(t) ? [t >> 16, (t >> 8) & me, t & me] : 0) : ge.black;
      if (!c) {
        if (("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), ge[t]))
          c = ge[t];
        else if ("#" === t.charAt(0))
          4 === t.length &&
            (t =
              "#" +
              (r = t.charAt(1)) +
              r +
              (n = t.charAt(2)) +
              n +
              (s = t.charAt(3)) +
              s),
            (c = [
              (t = parseInt(t.substr(1), 16)) >> 16,
              (t >> 8) & me,
              t & me,
            ]);
        else if ("hsl" === t.substr(0, 3))
          if (((c = p = t.match(Ht)), e)) {
            if (~t.indexOf("="))
              return (c = t.match(Qt)), i && c.length < 4 && (c[3] = 1), c;
          } else
            (a = (+c[0] % 360) / 360),
              (o = c[1] / 100),
              (r =
                2 * (D = c[2] / 100) -
                (n = D <= 0.5 ? D * (o + 1) : D + o - D * o)),
              3 < c.length && (c[3] *= 1),
              (c[0] = rt(a + 1 / 3, r, n)),
              (c[1] = rt(a, r, n)),
              (c[2] = rt(a - 1 / 3, r, n));
        else c = t.match(Ht) || ge.transparent;
        c = c.map(Number);
      }
      return (
        e &&
          !p &&
          ((r = c[0] / me),
          (n = c[1] / me),
          (s = c[2] / me),
          (D = ((h = Math.max(r, n, s)) + (l = Math.min(r, n, s))) / 2),
          h === l
            ? (a = o = 0)
            : ((f = h - l),
              (o = 0.5 < D ? f / (2 - h - l) : f / (h + l)),
              (a =
                h === r
                  ? (n - s) / f + (n < s ? 6 : 0)
                  : h === n
                    ? (s - r) / f + 2
                    : (r - n) / f + 4),
              (a *= 60)),
          (c[0] = ~~(a + 0.5)),
          (c[1] = ~~(100 * o + 0.5)),
          (c[2] = ~~(100 * D + 0.5))),
        i && c.length < 4 && (c[3] = 1),
        c
      );
    }
    function ut(t) {
      var e = [],
        i = [],
        r = -1;
      return (
        t.split(Fe).forEach(function (t) {
          var n = t.match(Gt) || [];
          e.push.apply(e, n), i.push((r += n.length + 1));
        }),
        (e.c = i),
        e
      );
    }
    function st(t, e, i) {
      var r,
        n,
        u,
        s,
        a = "",
        o = (t + a).match(Fe),
        D = e ? "hsla(" : "rgba(",
        h = 0;
      if (!o) return t;
      if (
        ((o = o.map(function (t) {
          return (
            (t = nt(t, e, 1)) &&
            D +
              (e
                ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3]
                : t.join(",")) +
              ")"
          );
        })),
        i && ((u = ut(t)), (r = i.c).join(a) !== u.c.join(a)))
      )
        for (s = (n = t.replace(Fe, "1").split(Gt)).length - 1; h < s; h++)
          a +=
            n[h] +
            (~r.indexOf(h)
              ? o.shift() || D + "0,0,0,0)"
              : (u.length ? u : o.length ? o : i).shift());
      if (!n)
        for (s = (n = t.split(Fe)).length - 1; h < s; h++) a += n[h] + o[h];
      return a + n[s];
    }
    function at(t) {
      var e,
        i = t.join(" ");
      if (((Fe.lastIndex = 0), Fe.test(i)))
        return (
          (e = Ce.test(i)),
          (t[1] = st(t[1], e)),
          (t[0] = st(t[0], e, ut(t[1]))),
          !0
        );
    }
    function ot(t, e) {
      for (var i, r = t._first; r; )
        r instanceof Pe
          ? ot(r, e)
          : !r.vars.yoyoEase ||
            (r._yoyo && r._repeat) ||
            r._yoyo === e ||
            (r.timeline
              ? ot(r.timeline, e)
              : ((i = r._ease),
                (r._ease = r._yEase),
                (r._yEase = i),
                (r._yoyo = e))),
          (r = r._next);
    }
    function Dt(t, e, i, r) {
      void 0 === i &&
        (i = function (t) {
          return 1 - e(1 - t);
        }),
        void 0 === r &&
          (r = function (t) {
            return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
          });
      var n,
        u = { easeIn: e, easeOut: i, easeInOut: r };
      return (
        F(t, function (t) {
          for (var e in ((Ee[t] = te[t] = u),
          (Ee[(n = t.toLowerCase())] = i),
          u))
            Ee[
              n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")
            ] = Ee[t + "." + e] = u[e];
        }),
        u
      );
    }
    function ht(t) {
      return function (e) {
        return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : 0.5 + t(2 * (e - 0.5)) / 2;
      };
    }
    function lt(t, e, i) {
      function r(t) {
        return 1 === t ? 1 : n * Math.pow(2, -10 * t) * Wt((t - s) * u) + 1;
      }
      var n = 1 <= e ? e : 1,
        u = (i || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1),
        s = (u / Yt) * (Math.asin(1 / n) || 0),
        a =
          "out" === t
            ? r
            : "in" === t
              ? function (t) {
                  return 1 - r(1 - t);
                }
              : ht(r);
      return (
        (u = Yt / u),
        (a.config = function (e, i) {
          return lt(t, e, i);
        }),
        a
      );
    }
    function ft(t, e) {
      function i(t) {
        return t ? --t * t * ((e + 1) * t + e) + 1 : 0;
      }
      void 0 === e && (e = 1.70158);
      var r =
        "out" === t
          ? i
          : "in" === t
            ? function (t) {
                return 1 - i(1 - t);
              }
            : ht(i);
      return (
        (r.config = function (e) {
          return ft(t, e);
        }),
        r
      );
    }
    var pt,
      ct,
      dt,
      _t,
      mt,
      gt,
      Ft,
      Ct,
      vt,
      yt,
      Et,
      xt,
      wt,
      bt,
      Tt,
      At,
      Bt,
      Mt,
      St,
      Ot,
      kt,
      Pt,
      Rt,
      zt = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: { lineHeight: "" },
      },
      Nt = { duration: 0.5, overwrite: !1, delay: 0 },
      Lt = 1e8,
      It = 1 / Lt,
      Yt = 2 * Math.PI,
      Ut = Yt / 4,
      Vt = 0,
      Xt = Math.sqrt,
      jt = Math.cos,
      Wt = Math.sin,
      qt = Array.isArray,
      Ht = /(?:-?\.?\d|\.)+/gi,
      Qt = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,
      Gt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
      Zt = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi,
      $t = /\(([^()]+)\)/i,
      Jt = /[+-]=-?[\.\d]+/,
      Kt = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
      te = {},
      ee = {},
      ie = [],
      re = {},
      ne = {},
      ue = {},
      se = 30,
      ae = [],
      oe = "",
      De = function (t, e) {
        for (var i in e) t[i] = e[i];
        return t;
      },
      he = function (t, e) {
        return (t /= e) && ~~t === t ? ~~t - 1 : ~~t;
      },
      le = { _start: 0, endTime: d },
      fe = function (t, e, i) {
        return i < t ? t : e < i ? e : i;
      },
      pe = [].slice,
      ce = function (t, e) {
        return !r(t) || e || (!dt && ye())
          ? qt(t)
            ? (function (t, e, i) {
                return (
                  void 0 === i && (i = []),
                  t.forEach(function (t) {
                    return (r(t) && !e) || H(t, 1)
                      ? i.push.apply(i, ce(t))
                      : i.push(t);
                  }) || i
                );
              })(t, e)
            : H(t)
              ? pe.call(t, 0)
              : t
                ? [t]
                : []
          : pe.call(_t.querySelectorAll(t), 0);
      },
      de = function (t, e, i, r, n) {
        var u = e - t,
          s = r - i;
        return W(n, function (e) {
          return i + (((e - t) / u) * s || 0);
        });
      },
      _e = function (t, e, i) {
        var r,
          n,
          u = t.vars,
          s = u[e];
        if (s)
          return (
            (r = u[e + "Params"]),
            (n = u.callbackScope || t),
            i && ie.length && E(),
            r ? s.apply(n, r) : s.call(n)
          );
      },
      me = 255,
      ge = {
        aqua: [0, me, me],
        lime: [0, me, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, me],
        navy: [0, 0, 128],
        white: [me, me, me],
        olive: [128, 128, 0],
        yellow: [me, me, 0],
        orange: [me, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [me, 0, 0],
        pink: [me, 192, 203],
        cyan: [0, me, me],
        transparent: [me, me, me, 0],
      },
      Fe = (function () {
        var t,
          e =
            "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (t in ge) e += "|" + t + "\\b";
        return new RegExp(e + ")", "gi");
      })(),
      Ce = /hsl[a]?\(/,
      ve =
        ((bt = Date.now),
        (Tt = 500),
        (At = 33),
        (Bt = bt()),
        (Mt = Bt),
        (Ot = St = 1 / 240),
        (wt = {
          time: 0,
          frame: 0,
          tick: function () {
            Ae(!0);
          },
          wake: function () {
            gt &&
              (!dt &&
                D() &&
                ((ct = dt = window),
                (_t = ct.document || {}),
                (te.gsap = ai),
                (ct.gsapVersions || (ct.gsapVersions = [])).push(ai.version),
                l(mt || ct.GreenSockGlobals || (!ct.gsap && ct) || {}),
                (xt = ct.requestAnimationFrame)),
              yt && wt.sleep(),
              (Et =
                xt ||
                function (t) {
                  return setTimeout(t, (1e3 * (Ot - wt.time) + 1) | 0);
                }),
              (vt = 1),
              Ae(2));
          },
          sleep: function () {
            (xt ? ct.cancelAnimationFrame : clearTimeout)(yt),
              (vt = 0),
              (Et = d);
          },
          lagSmoothing: function (t, e) {
            (Tt = t || 1e8), (At = Math.min(e, Tt, 0));
          },
          fps: function (t) {
            (St = 1 / (t || 240)), (Ot = wt.time + St);
          },
          add: function (t) {
            kt.indexOf(t) < 0 && kt.push(t), ye();
          },
          remove: function (t) {
            var e;
            ~(e = kt.indexOf(t)) && kt.splice(e, 1);
          },
          _listeners: (kt = []),
        })),
      ye = function () {
        return !vt && ve.wake();
      },
      Ee = {},
      xe = /^[\d.\-M][\d.\-,\s]/,
      we = /["']/g,
      be = function (t) {
        return function (e) {
          return 1 - t(1 - e);
        };
      },
      Te = function (t, e) {
        return (
          (t &&
            (n(t)
              ? t
              : Ee[t] ||
                (function (t) {
                  var e = (t + "").split("("),
                    i = Ee[e[0]];
                  return i && 1 < e.length && i.config
                    ? i.config.apply(
                        null,
                        ~t.indexOf("{")
                          ? [
                              (function (t) {
                                for (
                                  var e,
                                    i,
                                    r,
                                    n = {},
                                    u = t.substr(1, t.length - 3).split(":"),
                                    s = u[0],
                                    a = 1,
                                    o = u.length;
                                  a < o;
                                  a++
                                )
                                  (i = u[a]),
                                    (e =
                                      a !== o - 1
                                        ? i.lastIndexOf(",")
                                        : i.length),
                                    (r = i.substr(0, e)),
                                    (n[s] = isNaN(r)
                                      ? r.replace(we, "").trim()
                                      : +r),
                                    (s = i.substr(e + 1).trim());
                                return n;
                              })(e[1]),
                            ]
                          : $t.exec(t)[1].split(",").map(w),
                      )
                    : Ee._CE && xe.test(t)
                      ? Ee._CE("", t)
                      : i;
                })(t))) ||
          e
        );
      };
    function Ae(t) {
      var e,
        i,
        r = bt() - Mt,
        n = !0 === t;
      Tt < r && (Bt += r - At),
        (Mt += r),
        (wt.time = (Mt - Bt) / 1e3),
        (0 < (e = wt.time - Ot) || n) &&
          (wt.frame++, (Ot += e + (St <= e ? 0.004 : St - e)), (i = 1)),
        n || (yt = Et(Ae)),
        i &&
          kt.forEach(function (e) {
            return e(wt.time, r, wt.frame, t);
          });
    }
    function Be(t) {
      return t < Rt
        ? Pt * t * t
        : t < 0.7272727272727273
          ? Pt * Math.pow(t - 1.5 / 2.75, 2) + 0.75
          : t < 0.9090909090909092
            ? Pt * (t -= 2.25 / 2.75) * t + 0.9375
            : Pt * Math.pow(t - 2.625 / 2.75, 2) + 0.984375;
    }
    F("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
      var i = e < 5 ? e + 1 : e;
      Dt(
        t + ",Power" + (i - 1),
        e
          ? function (t) {
              return Math.pow(t, i);
            }
          : function (t) {
              return t;
            },
        function (t) {
          return 1 - Math.pow(1 - t, i);
        },
        function (t) {
          return t < 0.5
            ? Math.pow(2 * t, i) / 2
            : 1 - Math.pow(2 * (1 - t), i) / 2;
        },
      );
    }),
      (Ee.Linear.easeNone = Ee.none = Ee.Linear.easeIn),
      Dt("Elastic", lt("in"), lt("out"), lt()),
      (Pt = 7.5625),
      (Rt = 1 / 2.75),
      Dt(
        "Bounce",
        function (t) {
          return 1 - Be(1 - t);
        },
        Be,
      ),
      Dt("Expo", function (t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0;
      }),
      Dt("Circ", function (t) {
        return -(Xt(1 - t * t) - 1);
      }),
      Dt("Sine", function (t) {
        return 1 === t ? 1 : 1 - jt(t * Ut);
      }),
      Dt("Back", ft("in"), ft("out"), ft()),
      (Ee.SteppedEase =
        Ee.steps =
        te.SteppedEase =
          {
            config: function (t, e) {
              void 0 === t && (t = 1);
              var i = 1 / t,
                r = t + (e ? 0 : 1),
                n = e ? 1 : 0;
              return function (t) {
                return (((r * fe(0, 0.99999999, t)) | 0) + n) * i;
              };
            },
          }),
      (Nt.ease = Ee["quad.out"]),
      F(
        "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
        function (t) {
          return (oe += t + "," + t + "Params,");
        },
      );
    var Me,
      Se = function (t, e) {
        (this.id = Vt++),
          ((t._gsap = this).target = t),
          (this.harness = e),
          (this.get = e ? e.get : g),
          (this.set = e ? e.getSetter : Qe);
      },
      Oe =
        (((Me = ke.prototype).delay = function (t) {
          return t || 0 === t
            ? (this.parent &&
                this.parent.smoothChildTiming &&
                this.startTime(this._start + t - this._delay),
              (this._delay = t),
              this)
            : this._delay;
        }),
        (Me.duration = function (t) {
          return arguments.length
            ? this.totalDuration(
                0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t,
              )
            : this.totalDuration() && this._dur;
        }),
        (Me.totalDuration = function (t) {
          return arguments.length
            ? ((this._dirty = 0),
              V(
                this,
                this._repeat < 0
                  ? t
                  : (t - this._repeat * this._rDelay) / (this._repeat + 1),
              ))
            : this._tDur;
        }),
        (Me.totalTime = function (t, e) {
          if ((ye(), !arguments.length)) return this._tTime;
          var i = this.parent || this._dp;
          if (i && i.smoothChildTiming && this._ts) {
            for (
              this._start = C(
                i._time -
                  (0 < this._ts
                    ? t / this._ts
                    : ((this._dirty ? this.totalDuration() : this._tDur) - t) /
                      -this._ts),
              ),
                N(this),
                i._dirty || P(i);
              i.parent;

            )
              i.parent._time !==
                i._start +
                  (0 <= i._ts
                    ? i._tTime / i._ts
                    : (i.totalDuration() - i._tTime) / -i._ts) &&
                i.totalTime(i._tTime, !0),
                (i = i.parent);
            !this.parent &&
              this._dp.autoRemoveChildren &&
              ((0 < this._ts && t < this._tDur) ||
                (this._ts < 0 && 0 < t) ||
                (!this._tDur && !t)) &&
              I(this._dp, this, this._start - this._delay);
          }
          return (
            (this._tTime !== t ||
              (!this._dur && !e) ||
              (this._initted && Math.abs(this._zTime) === It) ||
              (!t && !this._initted)) &&
              (this._ts || (this._pTime = t), x(this, t, e)),
            this
          );
        }),
        (Me.time = function (t, e) {
          return arguments.length
            ? this.totalTime(
                Math.min(this.totalDuration(), t + R(this)) % this._dur ||
                  (t ? this._dur : 0),
                e,
              )
            : this._time;
        }),
        (Me.totalProgress = function (t, e) {
          return arguments.length
            ? this.totalTime(this.totalDuration() * t, e)
            : this.totalDuration()
              ? Math.min(1, this._tTime / this._tDur)
              : this.ratio;
        }),
        (Me.progress = function (t, e) {
          return arguments.length
            ? this.totalTime(
                this.duration() *
                  (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                  R(this),
                e,
              )
            : this.duration()
              ? Math.min(1, this._time / this._dur)
              : this.ratio;
        }),
        (Me.iteration = function (t, e) {
          var i = this.duration() + this._rDelay;
          return arguments.length
            ? this.totalTime(this._time + (t - 1) * i, e)
            : this._repeat
              ? he(this._tTime, i) + 1
              : 1;
        }),
        (Me.timeScale = function (t) {
          if (!arguments.length) return this._rts === -It ? 0 : this._rts;
          if (this._rts === t) return this;
          var e =
            this.parent && this._ts ? z(this.parent._time, this) : this._tTime;
          return (
            (this._rts = +t || 0),
            (this._ts = this._ps || t === -It ? 0 : this._rts),
            (function (t) {
              for (var e = t.parent; e && e.parent; )
                (e._dirty = 1), e.totalDuration(), (e = e.parent);
              return t;
            })(this.totalTime(fe(0, this._tDur, e), !0))
          );
        }),
        (Me.paused = function (t) {
          return arguments.length
            ? (this._ps !== t &&
                ((this._ps = t)
                  ? ((this._pTime =
                      this._tTime || Math.max(-this._delay, this.rawTime())),
                    (this._ts = this._act = 0))
                  : (ye(),
                    (this._ts = this._rts),
                    this.totalTime(
                      this.parent && !this.parent.smoothChildTiming
                        ? this.rawTime()
                        : this._tTime || this._pTime,
                      1 === this.progress() &&
                        (this._tTime -= It) &&
                        Math.abs(this._zTime) !== It,
                    ))),
              this)
            : this._ps;
        }),
        (Me.startTime = function (t) {
          if (arguments.length) {
            this._start = t;
            var e = this.parent || this._dp;
            return (
              !e || (!e._sort && this.parent) || I(e, this, t - this._delay),
              this
            );
          }
          return this._start;
        }),
        (Me.endTime = function (t) {
          return (
            this._start +
            (o(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
          );
        }),
        (Me.rawTime = function (t) {
          var e = this.parent || this._dp;
          return e
            ? t &&
              (!this._ts ||
                (this._repeat && this._time && this.totalProgress() < 1))
              ? this._tTime % (this._dur + this._rDelay)
              : this._ts
                ? z(e.rawTime(t), this)
                : this._tTime
            : this._tTime;
        }),
        (Me.repeat = function (t) {
          return arguments.length
            ? ((this._repeat = t), X(this))
            : this._repeat;
        }),
        (Me.repeatDelay = function (t) {
          return arguments.length
            ? ((this._rDelay = t), X(this))
            : this._rDelay;
        }),
        (Me.yoyo = function (t) {
          return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
        }),
        (Me.seek = function (t, e) {
          return this.totalTime(j(this, t), o(e));
        }),
        (Me.restart = function (t, e) {
          return this.play().totalTime(t ? -this._delay : 0, o(e));
        }),
        (Me.play = function (t, e) {
          return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
        }),
        (Me.reverse = function (t, e) {
          return (
            null != t && this.seek(t || this.totalDuration(), e),
            this.reversed(!0).paused(!1)
          );
        }),
        (Me.pause = function (t, e) {
          return null != t && this.seek(t, e), this.paused(!0);
        }),
        (Me.resume = function () {
          return this.paused(!1);
        }),
        (Me.reversed = function (t) {
          return arguments.length
            ? (!!t !== this.reversed() &&
                this.timeScale(-this._rts || (t ? -It : 0)),
              this)
            : this._rts < 0;
        }),
        (Me.invalidate = function () {
          return (this._initted = 0), (this._zTime = -It), this;
        }),
        (Me.isActive = function (t) {
          var e,
            i = this.parent || this._dp,
            r = this._start;
          return !(
            i &&
            !(
              this._ts &&
              (this._initted || !t) &&
              i.isActive(t) &&
              (e = i.rawTime(!0)) >= r &&
              e < this.endTime(!0) - It
            )
          );
        }),
        (Me.eventCallback = function (t, e, i) {
          var r = this.vars;
          return 1 < arguments.length
            ? (e
                ? ((r[t] = e),
                  i && (r[t + "Params"] = i),
                  "onUpdate" === t && (this._onUpdate = e))
                : delete r[t],
              this)
            : r[t];
        }),
        (Me.then = function (t) {
          var e = this;
          return new Promise(function (i) {
            function r() {
              var t = e.then;
              (e.then = null),
                n(u) && (u = u(e)) && (u.then || u === e) && (e.then = t),
                i(u),
                (e.then = t);
            }
            var u = n(t) ? t : b;
            (e._initted && 1 === e.totalProgress() && 0 <= e._ts) ||
            (!e._tTime && e._ts < 0)
              ? r()
              : (e._prom = r);
          });
        }),
        (Me.kill = function () {
          it(this);
        }),
        ke);
    function ke(t, e) {
      var i = t.parent || pt;
      (this.vars = t),
        (this._delay = +t.delay || 0),
        (this._repeat = t.repeat || 0) &&
          ((this._rDelay = t.repeatDelay || 0),
          (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
        (this._ts = 1),
        V(this, +t.duration, 1),
        (this.data = t.data),
        vt || ve.wake(),
        i && I(i, this, e || 0 === e ? e : i._time, 1),
        t.reversed && this.reverse(),
        t.paused && this.paused(!0);
    }
    T(Oe.prototype, {
      _time: 0,
      _start: 0,
      _end: 0,
      _tTime: 0,
      _tDur: 0,
      _dirty: 0,
      _repeat: 0,
      _yoyo: !1,
      parent: null,
      _initted: !1,
      _rDelay: 0,
      _ts: 1,
      _dp: 0,
      ratio: 0,
      _zTime: -It,
      _prom: 0,
      _ps: !1,
      _rts: 1,
    });
    var Pe = (function (t) {
      function s(e, r) {
        var n;
        return (
          void 0 === e && (e = {}),
          ((n = t.call(this, e, r) || this).labels = {}),
          (n.smoothChildTiming = !!e.smoothChildTiming),
          (n.autoRemoveChildren = !!e.autoRemoveChildren),
          (n._sort = o(e.sortChildren)),
          n.parent && L(n.parent, i(n)),
          e.scrollTrigger && Y(i(n), e.scrollTrigger),
          n
        );
      }
      e(s, t);
      var a = s.prototype;
      return (
        (a.to = function (t, e, i, r) {
          return new Ve(t, y(arguments, 0, this), j(this, u(e) ? r : i)), this;
        }),
        (a.from = function (t, e, i, r) {
          return new Ve(t, y(arguments, 1, this), j(this, u(e) ? r : i)), this;
        }),
        (a.fromTo = function (t, e, i, r, n) {
          return new Ve(t, y(arguments, 2, this), j(this, u(e) ? n : r)), this;
        }),
        (a.set = function (t, e, i) {
          return (
            (e.duration = 0),
            (e.parent = this),
            S(e).repeatDelay || (e.repeat = 0),
            (e.immediateRender = !!e.immediateRender),
            new Ve(t, e, j(this, i), 1),
            this
          );
        }),
        (a.call = function (t, e, i) {
          return I(this, Ve.delayedCall(0, t, e), j(this, i));
        }),
        (a.staggerTo = function (t, e, i, r, n, u, s) {
          return (
            (i.duration = e),
            (i.stagger = i.stagger || r),
            (i.onComplete = u),
            (i.onCompleteParams = s),
            (i.parent = this),
            new Ve(t, i, j(this, n)),
            this
          );
        }),
        (a.staggerFrom = function (t, e, i, r, n, u, s) {
          return (
            (i.runBackwards = 1),
            (S(i).immediateRender = o(i.immediateRender)),
            this.staggerTo(t, e, i, r, n, u, s)
          );
        }),
        (a.staggerFromTo = function (t, e, i, r, n, u, s, a) {
          return (
            (r.startAt = i),
            (S(r).immediateRender = o(r.immediateRender)),
            this.staggerTo(t, e, r, n, u, s, a)
          );
        }),
        (a.render = function (t, e, i) {
          var r,
            n,
            u,
            s,
            a,
            o,
            D,
            h,
            l,
            f,
            p,
            c,
            d = this._time,
            _ = this._dirty ? this.totalDuration() : this._tDur,
            m = this._dur,
            g = this !== pt && _ - It < t && 0 <= t ? _ : t < It ? 0 : t,
            F = this._zTime < 0 != t < 0 && (this._initted || !m);
          if (g !== this._tTime || i || F) {
            if (
              (d !== this._time &&
                m &&
                ((g += this._time - d), (t += this._time - d)),
              (r = g),
              (l = this._start),
              (o = !(h = this._ts)),
              F && (m || (d = this._zTime), (!t && e) || (this._zTime = t)),
              this._repeat &&
                ((p = this._yoyo),
                (m < (r = C(g % (a = m + this._rDelay))) || _ === g) && (r = m),
                (s = ~~(g / a)) && s === g / a && ((r = m), s--),
                (f = he(this._tTime, a)),
                !d && this._tTime && f !== s && (f = s),
                p && 1 & s && ((r = m - r), (c = 1)),
                s !== f && !this._lock))
            ) {
              var v = p && 1 & f,
                y = v === (p && 1 & s);
              if (
                (s < f && (v = !v),
                (d = v ? 0 : m),
                (this._lock = 1),
                (this.render(d || (c ? 0 : C(s * a)), e, !m)._lock = 0),
                !e && this.parent && _e(this, "onRepeat"),
                this.vars.repeatRefresh && !c && (this.invalidate()._lock = 1),
                d !== this._time || o != !this._ts)
              )
                return this;
              if (
                (y &&
                  ((this._lock = 2),
                  (d = v ? m + 1e-4 : -1e-4),
                  this.render(d, !0),
                  this.vars.repeatRefresh && !c && this.invalidate()),
                (this._lock = 0),
                !this._ts && !o)
              )
                return this;
              ot(this, c);
            }
            if (
              (this._hasPause &&
                !this._forcing &&
                this._lock < 2 &&
                (D = (function (t, e, i) {
                  var r;
                  if (e < i)
                    for (r = t._first; r && r._start <= i; ) {
                      if (!r._dur && "isPause" === r.data && r._start > e)
                        return r;
                      r = r._next;
                    }
                  else
                    for (r = t._last; r && r._start >= i; ) {
                      if (!r._dur && "isPause" === r.data && r._start < e)
                        return r;
                      r = r._prev;
                    }
                })(this, C(d), C(r))) &&
                (g -= r - (r = D._start)),
              (this._tTime = g),
              (this._time = r),
              (this._act = !h),
              this._initted ||
                ((this._onUpdate = this.vars.onUpdate),
                (this._initted = 1),
                (this._zTime = t)),
              d || !r || e || _e(this, "onStart"),
              d <= r && 0 <= t)
            )
              for (n = this._first; n; ) {
                if (
                  ((u = n._next), (n._act || r >= n._start) && n._ts && D !== n)
                ) {
                  if (n.parent !== this) return this.render(t, e, i);
                  if (
                    (n.render(
                      0 < n._ts
                        ? (r - n._start) * n._ts
                        : (n._dirty ? n.totalDuration() : n._tDur) +
                            (r - n._start) * n._ts,
                      e,
                      i,
                    ),
                    r !== this._time || (!this._ts && !o))
                  ) {
                    (D = 0), u && (g += this._zTime = -It);
                    break;
                  }
                }
                n = u;
              }
            else {
              n = this._last;
              for (var E = t < 0 ? t : r; n; ) {
                if (
                  ((u = n._prev), (n._act || E <= n._end) && n._ts && D !== n)
                ) {
                  if (n.parent !== this) return this.render(t, e, i);
                  if (
                    (n.render(
                      0 < n._ts
                        ? (E - n._start) * n._ts
                        : (n._dirty ? n.totalDuration() : n._tDur) +
                            (E - n._start) * n._ts,
                      e,
                      i,
                    ),
                    r !== this._time || (!this._ts && !o))
                  ) {
                    (D = 0), u && (g += this._zTime = E ? -It : It);
                    break;
                  }
                }
                n = u;
              }
            }
            if (
              D &&
              !e &&
              (this.pause(),
              (D.render(d <= r ? 0 : -It)._zTime = d <= r ? 1 : -1),
              this._ts)
            )
              return (this._start = l), N(this), this.render(t, e, i);
            this._onUpdate && !e && _e(this, "onUpdate", !0),
              ((g === _ && _ >= this.totalDuration()) || (!g && d)) &&
                ((l !== this._start && Math.abs(h) === Math.abs(this._ts)) ||
                  this._lock ||
                  ((!t && m) ||
                    !((g === _ && 0 < this._ts) || (!g && this._ts < 0)) ||
                    k(this, 1),
                  e ||
                    (t < 0 && !d) ||
                    (!g && !d) ||
                    (_e(this, g === _ ? "onComplete" : "onReverseComplete", !0),
                    !this._prom ||
                      (g < _ && 0 < this.timeScale()) ||
                      this._prom())));
          }
          return this;
        }),
        (a.add = function (t, e) {
          var i = this;
          if ((u(e) || (e = j(this, e)), !(t instanceof Oe))) {
            if (qt(t))
              return (
                t.forEach(function (t) {
                  return i.add(t, e);
                }),
                P(this)
              );
            if (r(t)) return this.addLabel(t, e);
            if (!n(t)) return this;
            t = Ve.delayedCall(0, t);
          }
          return this !== t ? I(this, t, e) : this;
        }),
        (a.getChildren = function (t, e, i, r) {
          void 0 === t && (t = !0),
            void 0 === e && (e = !0),
            void 0 === i && (i = !0),
            void 0 === r && (r = -Lt);
          for (var n = [], u = this._first; u; )
            u._start >= r &&
              (u instanceof Ve
                ? e && n.push(u)
                : (i && n.push(u),
                  t && n.push.apply(n, u.getChildren(!0, e, i)))),
              (u = u._next);
          return n;
        }),
        (a.getById = function (t) {
          for (var e = this.getChildren(1, 1, 1), i = e.length; i--; )
            if (e[i].vars.id === t) return e[i];
        }),
        (a.remove = function (t) {
          return r(t)
            ? this.removeLabel(t)
            : n(t)
              ? this.killTweensOf(t)
              : (O(this, t),
                t === this._recent && (this._recent = this._last),
                P(this));
        }),
        (a.totalTime = function (e, i) {
          return arguments.length
            ? ((this._forcing = 1),
              this.parent ||
                this._dp ||
                !this._ts ||
                (this._start = C(
                  ve.time -
                    (0 < this._ts
                      ? e / this._ts
                      : (this.totalDuration() - e) / -this._ts),
                )),
              t.prototype.totalTime.call(this, e, i),
              (this._forcing = 0),
              this)
            : this._tTime;
        }),
        (a.addLabel = function (t, e) {
          return (this.labels[t] = j(this, e)), this;
        }),
        (a.removeLabel = function (t) {
          return delete this.labels[t], this;
        }),
        (a.addPause = function (t, e, i) {
          var r = Ve.delayedCall(0, e || d, i);
          return (
            (r.data = "isPause"), (this._hasPause = 1), I(this, r, j(this, t))
          );
        }),
        (a.removePause = function (t) {
          var e = this._first;
          for (t = j(this, t); e; )
            e._start === t && "isPause" === e.data && k(e), (e = e._next);
        }),
        (a.killTweensOf = function (t, e, i) {
          for (var r = this.getTweensOf(t, i), n = r.length; n--; )
            ze !== r[n] && r[n].kill(t, e);
          return this;
        }),
        (a.getTweensOf = function (t, e) {
          for (var i, r = [], n = ce(t), u = this._first; u; )
            u instanceof Ve
              ? !v(u._targets, n) ||
                (e && !u.isActive("started" === e)) ||
                r.push(u)
              : (i = u.getTweensOf(n, e)).length && r.push.apply(r, i),
              (u = u._next);
          return r;
        }),
        (a.tweenTo = function (t, e) {
          e = e || {};
          var i = this,
            r = j(i, t),
            n = e.startAt,
            u = e.onStart,
            s = e.onStartParams,
            a = Ve.to(
              i,
              T(e, {
                ease: "none",
                lazy: !1,
                time: r,
                duration:
                  e.duration ||
                  Math.abs(
                    (r - (n && "time" in n ? n.time : i._time)) / i.timeScale(),
                  ) ||
                  It,
                onStart: function () {
                  i.pause();
                  var t = e.duration || Math.abs((r - i._time) / i.timeScale());
                  a._dur !== t && V(a, t).render(a._time, !0, !0),
                    u && u.apply(a, s || []);
                },
              }),
            );
          return a;
        }),
        (a.tweenFromTo = function (t, e, i) {
          return this.tweenTo(e, T({ startAt: { time: j(this, t) } }, i));
        }),
        (a.recent = function () {
          return this._recent;
        }),
        (a.nextLabel = function (t) {
          return void 0 === t && (t = this._time), et(this, j(this, t));
        }),
        (a.previousLabel = function (t) {
          return void 0 === t && (t = this._time), et(this, j(this, t), 1);
        }),
        (a.currentLabel = function (t) {
          return arguments.length
            ? this.seek(t, !0)
            : this.previousLabel(this._time + It);
        }),
        (a.shiftChildren = function (t, e, i) {
          void 0 === i && (i = 0);
          for (var r, n = this._first, u = this.labels; n; )
            n._start >= i && (n._start += t), (n = n._next);
          if (e) for (r in u) u[r] >= i && (u[r] += t);
          return P(this);
        }),
        (a.invalidate = function () {
          var e = this._first;
          for (this._lock = 0; e; ) e.invalidate(), (e = e._next);
          return t.prototype.invalidate.call(this);
        }),
        (a.clear = function (t) {
          void 0 === t && (t = !0);
          for (var e, i = this._first; i; )
            (e = i._next), this.remove(i), (i = e);
          return (
            (this._time = this._tTime = this._pTime = 0),
            t && (this.labels = {}),
            P(this)
          );
        }),
        (a.totalDuration = function (t) {
          var e,
            i,
            r,
            n,
            u = 0,
            s = this,
            a = s._last,
            o = Lt;
          if (arguments.length)
            return s.timeScale(
              (s._repeat < 0 ? s.duration() : s.totalDuration()) /
                (s.reversed() ? -t : t),
            );
          if (s._dirty) {
            for (n = s.parent; a; )
              (e = a._prev),
                a._dirty && a.totalDuration(),
                o < (r = a._start) && s._sort && a._ts && !s._lock
                  ? ((s._lock = 1), (I(s, a, r - a._delay, 1)._lock = 0))
                  : (o = r),
                r < 0 &&
                  a._ts &&
                  ((u -= r),
                  ((!n && !s._dp) || (n && n.smoothChildTiming)) &&
                    ((s._start += r / s._ts), (s._time -= r), (s._tTime -= r)),
                  s.shiftChildren(-r, !1, -1 / 0),
                  (o = 0)),
                u < (i = N(a)) && a._ts && (u = i),
                (a = e);
            V(s, s === pt && s._time > u ? s._time : u, 1), (s._dirty = 0);
          }
          return s._tDur;
        }),
        (s.updateRoot = function (t) {
          if ((pt._ts && (x(pt, z(t, pt)), (Ft = ve.frame)), ve.frame >= se)) {
            se += zt.autoSleep || 120;
            var e = pt._first;
            if ((!e || !e._ts) && zt.autoSleep && ve._listeners.length < 2) {
              for (; e && !e._ts; ) e = e._next;
              e || ve.sleep();
            }
          }
        }),
        s
      );
    })(Oe);
    function Re(t, e, i, u, s, o) {
      var D, h, l, f;
      if (
        ne[t] &&
        !1 !==
          (D = new ne[t]()).init(
            s,
            D.rawVars
              ? e[t]
              : (function (t, e, i, u, s) {
                  if (
                    (n(t) && (t = Ie(t, s, e, i, u)),
                    !a(t) || (t.style && t.nodeType) || qt(t))
                  )
                    return r(t) ? Ie(t, s, e, i, u) : t;
                  var o,
                    D = {};
                  for (o in t) D[o] = Ie(t[o], s, e, i, u);
                  return D;
                })(e[t], u, s, o, i),
            i,
            u,
            o,
          ) &&
        ((i._pt = h = new ii(i._pt, s, t, 0, 1, D.render, D, 0, D.priority)),
        i !== Ct)
      )
        for (l = i._ptLookup[i._targets.indexOf(s)], f = D._props.length; f--; )
          l[D._props[f]] = h;
      return D;
    }
    T(Pe.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
    var ze,
      Ne = function (t, e, i, u, s, a, o, D, h) {
        n(u) && (u = u(s || 0, t, a));
        var l,
          p = t[e],
          c =
            "get" !== i
              ? i
              : n(p)
                ? h
                  ? t[
                      e.indexOf("set") || !n(t["get" + e.substr(3)])
                        ? e
                        : "get" + e.substr(3)
                    ](h)
                  : t[e]()
                : p,
          d = n(p) ? (h ? He : qe) : We;
        if (
          (r(u) &&
            (~u.indexOf("random(") && (u = tt(u)),
            "=" === u.charAt(1) &&
              (u =
                parseFloat(c) +
                parseFloat(u.substr(2)) * ("-" === u.charAt(0) ? -1 : 1) +
                (q(c) || 0))),
          c !== u)
        )
          return isNaN(c + u)
            ? (p || e in t || f(e, u),
              function (t, e, i, r, n, u, s) {
                var a,
                  o,
                  D,
                  h,
                  l,
                  f,
                  p,
                  c,
                  d = new ii(this._pt, t, e, 0, 1, $e, null, n),
                  _ = 0,
                  m = 0;
                for (
                  d.b = i,
                    d.e = r,
                    i += "",
                    (p = ~(r += "").indexOf("random(")) && (r = tt(r)),
                    u && (u((c = [i, r]), t, e), (i = c[0]), (r = c[1])),
                    o = i.match(Zt) || [];
                  (a = Zt.exec(r));

                )
                  (h = a[0]),
                    (l = r.substring(_, a.index)),
                    D ? (D = (D + 1) % 5) : "rgba(" === l.substr(-5) && (D = 1),
                    h !== o[m++] &&
                      ((f = parseFloat(o[m - 1]) || 0),
                      (d._pt = {
                        _next: d._pt,
                        p: l || 1 === m ? l : ",",
                        s: f,
                        c:
                          "=" === h.charAt(1)
                            ? parseFloat(h.substr(2)) *
                              ("-" === h.charAt(0) ? -1 : 1)
                            : parseFloat(h) - f,
                        m: D && D < 4 ? Math.round : 0,
                      }),
                      (_ = Zt.lastIndex));
                return (
                  (d.c = _ < r.length ? r.substring(_, r.length) : ""),
                  (d.fp = s),
                  (Jt.test(r) || p) && (d.e = 0),
                  (this._pt = d)
                );
              }.call(this, t, e, c, u, d, D || zt.stringFilter, h))
            : ((l = new ii(
                this._pt,
                t,
                e,
                +c || 0,
                u - (c || 0),
                "boolean" == typeof p ? Ze : Ge,
                0,
                d,
              )),
              h && (l.fp = h),
              o && l.modifier(o, this, t),
              (this._pt = l));
      },
      Le = function t(e, i) {
        var r,
          n,
          u,
          s,
          a,
          D,
          h,
          l,
          f,
          p,
          c,
          d,
          g = e.vars,
          F = g.ease,
          C = g.startAt,
          v = g.immediateRender,
          y = g.lazy,
          x = g.onUpdate,
          w = g.onUpdateParams,
          b = g.callbackScope,
          A = g.runBackwards,
          B = g.yoyoEase,
          S = g.keyframes,
          O = g.autoRevert,
          P = e._dur,
          R = e._startAt,
          z = e._targets,
          N = e.parent,
          L = N && "nested" === N.data ? N.parent._targets : z,
          I = "auto" === e._overwrite,
          Y = e.timeline;
        if (
          (!Y || (S && F) || (F = "none"),
          (e._ease = Te(F, Nt.ease)),
          (e._yEase = B ? be(Te(!0 === B ? F : B, Nt.ease)) : 0),
          B &&
            e._yoyo &&
            !e._repeat &&
            ((B = e._yEase), (e._yEase = e._ease), (e._ease = B)),
          !Y)
        ) {
          if (
            ((d = (l = z[0] ? m(z[0]).harness : 0) && g[l.prop]),
            (r = M(g, ee)),
            R && R.render(-1, !0).kill(),
            C)
          ) {
            if (
              (k(
                (e._startAt = Ve.set(
                  z,
                  T(
                    {
                      data: "isStart",
                      overwrite: !1,
                      parent: N,
                      immediateRender: !0,
                      lazy: o(y),
                      startAt: null,
                      delay: 0,
                      onUpdate: x,
                      onUpdateParams: w,
                      callbackScope: b,
                      stagger: 0,
                    },
                    C,
                  ),
                )),
              ),
              v)
            )
              if (0 < i) O || (e._startAt = 0);
              else if (P) return;
          } else if (A && P)
            if (R) O || (e._startAt = 0);
            else if (
              (i && (v = !1),
              (u = De(r, {
                overwrite: !1,
                data: "isFromStart",
                lazy: v && o(y),
                immediateRender: v,
                stagger: 0,
                parent: N,
              })),
              d && (u[l.prop] = d),
              k((e._startAt = Ve.set(z, u))),
              v)
            ) {
              if (!i) return;
            } else t(e._startAt, It);
          for (
            e._pt = 0, y = (P && o(y)) || (y && !P), n = 0;
            n < z.length;
            n++
          ) {
            if (
              ((h = (a = z[n])._gsap || _(z)[n]._gsap),
              (e._ptLookup[n] = p = {}),
              re[h.id] && E(),
              (c = L === z ? n : L.indexOf(a)),
              l &&
                !1 !== (f = new l()).init(a, d || r, e, c, L) &&
                ((e._pt = s =
                  new ii(e._pt, a, f.name, 0, 1, f.render, f, 0, f.priority)),
                f._props.forEach(function (t) {
                  p[t] = s;
                }),
                f.priority && (D = 1)),
              !l || d)
            )
              for (u in r)
                ne[u] && (f = Re(u, r, e, c, a, L))
                  ? f.priority && (D = 1)
                  : (p[u] = s =
                      Ne.call(e, a, u, "get", r[u], c, L, 0, g.stringFilter));
            e._op && e._op[n] && e.kill(a, e._op[n]),
              I &&
                e._pt &&
                ((ze = e), pt.killTweensOf(a, p, "started"), (ze = 0)),
              e._pt && y && (re[h.id] = 1);
          }
          D && ei(e), e._onInit && e._onInit(e);
        }
        (e._from = !Y && !!g.runBackwards),
          (e._onUpdate = x),
          (e._initted = !!e.parent);
      },
      Ie = function (t, e, i, u, s) {
        return n(t)
          ? t.call(e, i, u, s)
          : r(t) && ~t.indexOf("random(")
            ? tt(t)
            : t;
      },
      Ye = oe + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
      Ue = (Ye + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
      Ve = (function (t) {
        function n(e, r, n, s) {
          var D;
          "number" == typeof r && ((n.duration = r), (r = n), (n = null));
          var l,
            f,
            c,
            m,
            g,
            F,
            v,
            y,
            E = (D = t.call(this, s ? r : S(r), n) || this).vars,
            x = E.duration,
            w = E.delay,
            b = E.immediateRender,
            A = E.stagger,
            B = E.overwrite,
            M = E.keyframes,
            O = E.defaults,
            k = E.scrollTrigger,
            P = E.yoyoEase,
            R = D.parent,
            z = (qt(e) ? u(e[0]) : "length" in r) ? [e] : ce(e);
          if (
            ((D._targets = z.length
              ? _(z)
              : p(
                  "GSAP target " + e + " not found. https://greensock.com",
                  !zt.nullTargetWarn,
                ) || []),
            (D._ptLookup = []),
            (D._overwrite = B),
            M || A || h(x) || h(w))
          ) {
            if (
              ((r = D.vars),
              (l = D.timeline =
                new Pe({ data: "nested", defaults: O || {} })).kill(),
              (l.parent = i(D)),
              M)
            )
              T(l.vars.defaults, { ease: "none" }),
                M.forEach(function (t) {
                  return l.to(z, t, ">");
                });
            else {
              if (((m = z.length), (v = A ? G(A) : d), a(A)))
                for (g in A) ~Ye.indexOf(g) && ((y = y || {})[g] = A[g]);
              for (f = 0; f < m; f++) {
                for (g in ((c = {}), r)) Ue.indexOf(g) < 0 && (c[g] = r[g]);
                (c.stagger = 0),
                  P && (c.yoyoEase = P),
                  y && De(c, y),
                  (F = z[f]),
                  (c.duration = +Ie(x, i(D), f, F, z)),
                  (c.delay = (+Ie(w, i(D), f, F, z) || 0) - D._delay),
                  !A &&
                    1 === m &&
                    c.delay &&
                    ((D._delay = w = c.delay), (D._start += w), (c.delay = 0)),
                  l.to(F, c, v(f, F, z));
              }
              l.duration() ? (x = w = 0) : (D.timeline = 0);
            }
            x || D.duration((x = l.duration()));
          } else D.timeline = 0;
          return (
            !0 === B && ((ze = i(D)), pt.killTweensOf(z), (ze = 0)),
            R && L(R, i(D)),
            (b ||
              (!x &&
                !M &&
                D._start === C(R._time) &&
                o(b) &&
                (function t(e) {
                  return !e || (e._ts && t(e.parent));
                })(i(D)) &&
                "nested" !== R.data)) &&
              ((D._tTime = -It), D.render(Math.max(0, -w))),
            k && Y(i(D), k),
            D
          );
        }
        e(n, t);
        var s = n.prototype;
        return (
          (s.render = function (t, e, i) {
            var r,
              n,
              u,
              s,
              a,
              o,
              D,
              h,
              l,
              f = this._time,
              p = this._tDur,
              c = this._dur,
              d = p - It < t && 0 <= t ? p : t < It ? 0 : t;
            if (c) {
              if (
                d !== this._tTime ||
                !t ||
                i ||
                (this._startAt && this._zTime < 0 != t < 0)
              ) {
                if (((r = d), (h = this.timeline), this._repeat)) {
                  if (
                    ((c < (r = C(d % (s = c + this._rDelay))) || p === d) &&
                      (r = c),
                    (u = ~~(d / s)) && u === d / s && ((r = c), u--),
                    (o = this._yoyo && 1 & u) &&
                      ((l = this._yEase), (r = c - r)),
                    (a = he(this._tTime, s)),
                    r === f && !i && this._initted)
                  )
                    return this;
                  u !== a &&
                    (h && this._yEase && ot(h, o),
                    !this.vars.repeatRefresh ||
                      o ||
                      this._lock ||
                      ((this._lock = i = 1),
                      (this.render(C(s * u), !0).invalidate()._lock = 0)));
                }
                if (!this._initted) {
                  if (U(this, r, i, e)) return (this._tTime = 0), this;
                  if (c !== this._dur) return this.render(t, e, i);
                }
                for (
                  this._tTime = d,
                    this._time = r,
                    !this._act &&
                      this._ts &&
                      ((this._act = 1), (this._lazy = 0)),
                    this.ratio = D = (l || this._ease)(r / c),
                    this._from && (this.ratio = D = 1 - D),
                    !r || f || e || _e(this, "onStart"),
                    n = this._pt;
                  n;

                )
                  n.r(D, n.d), (n = n._next);
                (h && h.render(t < 0 ? t : !r && o ? -It : h._dur * D, e, i)) ||
                  (this._startAt && (this._zTime = t)),
                  this._onUpdate &&
                    !e &&
                    (t < 0 && this._startAt && this._startAt.render(t, !0, i),
                    _e(this, "onUpdate")),
                  this._repeat &&
                    u !== a &&
                    this.vars.onRepeat &&
                    !e &&
                    this.parent &&
                    _e(this, "onRepeat"),
                  (d !== this._tDur && d) ||
                    this._tTime !== d ||
                    (t < 0 &&
                      this._startAt &&
                      !this._onUpdate &&
                      this._startAt.render(t, !0, !0),
                    (!t && c) ||
                      !(
                        (d === this._tDur && 0 < this._ts) ||
                        (!d && this._ts < 0)
                      ) ||
                      k(this, 1),
                    e ||
                      (t < 0 && !f) ||
                      (!d && !f) ||
                      (_e(
                        this,
                        d === p ? "onComplete" : "onReverseComplete",
                        !0,
                      ),
                      !this._prom ||
                        (d < p && 0 < this.timeScale()) ||
                        this._prom()));
              }
            } else
              !(function (t, e, i, r) {
                var n,
                  u,
                  s = t.ratio,
                  a =
                    e < 0 ||
                    (!e && s && !t._start && t._zTime > It && !t._dp._lock) ||
                    t._ts < 0 ||
                    t._dp._ts < 0
                      ? 0
                      : 1,
                  o = t._rDelay,
                  D = 0;
                if (
                  (o &&
                    t._repeat &&
                    ((D = fe(0, t._tDur, e)),
                    he(D, o) !== (u = he(t._tTime, o)) &&
                      ((s = 1 - a),
                      t.vars.repeatRefresh && t._initted && t.invalidate())),
                  t._initted || !U(t, e, r, i))
                )
                  if (a !== s || r || t._zTime === It || (!e && t._zTime)) {
                    for (
                      u = t._zTime,
                        t._zTime = e || (i ? It : 0),
                        i = i || (e && !u),
                        t.ratio = a,
                        t._from && (a = 1 - a),
                        t._time = 0,
                        t._tTime = D,
                        i || _e(t, "onStart"),
                        n = t._pt;
                      n;

                    )
                      n.r(a, n.d), (n = n._next);
                    t._startAt && e < 0 && t._startAt.render(e, !0, !0),
                      t._onUpdate && !i && _e(t, "onUpdate"),
                      D && t._repeat && !i && t.parent && _e(t, "onRepeat"),
                      (e >= t._tDur || e < 0) &&
                        t.ratio === a &&
                        (a && k(t, 1),
                        i ||
                          (_e(t, a ? "onComplete" : "onReverseComplete", !0),
                          t._prom && t._prom()));
                  } else t._zTime || (t._zTime = e);
              })(this, t, e, i);
            return this;
          }),
          (s.targets = function () {
            return this._targets;
          }),
          (s.invalidate = function () {
            return (
              (this._pt =
                this._op =
                this._startAt =
                this._onUpdate =
                this._act =
                this._lazy =
                  0),
              (this._ptLookup = []),
              this.timeline && this.timeline.invalidate(),
              t.prototype.invalidate.call(this)
            );
          }),
          (s.kill = function (t, e) {
            if (
              (void 0 === e && (e = "all"),
              !(t || (e && "all" !== e)) && ((this._lazy = 0), this.parent))
            )
              return it(this);
            if (this.timeline) {
              var i = this.timeline.totalDuration();
              return (
                this.timeline.killTweensOf(t, e, ze && !0 !== ze.vars.overwrite)
                  ._first || it(this),
                this.parent &&
                  i !== this.timeline.totalDuration() &&
                  V(this, (this._dur * this.timeline._tDur) / i),
                this
              );
            }
            var n,
              u,
              s,
              a,
              o,
              D,
              h,
              l = this._targets,
              f = t ? ce(t) : l,
              p = this._ptLookup,
              c = this._pt;
            if (
              (!e || "all" === e) &&
              (function (t, e) {
                for (
                  var i = t.length, r = i === e.length;
                  r && i-- && t[i] === e[i];

                );
                return i < 0;
              })(l, f)
            )
              return it(this);
            for (
              n = this._op = this._op || [],
                "all" !== e &&
                  (r(e) &&
                    ((o = {}),
                    F(e, function (t) {
                      return (o[t] = 1);
                    }),
                    (e = o)),
                  (e = (function (t, e) {
                    var i,
                      r,
                      n,
                      u,
                      s = t[0] ? m(t[0]).harness : 0,
                      a = s && s.aliases;
                    if (!a) return e;
                    for (r in ((i = De({}, e)), a))
                      if ((r in i))
                        for (n = (u = a[r].split(",")).length; n--; )
                          i[u[n]] = i[r];
                    return i;
                  })(l, e))),
                h = l.length;
              h--;

            )
              if (~f.indexOf(l[h]))
                for (o in ((u = p[h]),
                "all" === e
                  ? ((n[h] = e), (a = u), (s = {}))
                  : ((s = n[h] = n[h] || {}), (a = e)),
                a))
                  (D = u && u[o]) &&
                    (("kill" in D.d && !0 !== D.d.kill(o)) || O(this, D, "_pt"),
                    delete u[o]),
                    "all" !== s && (s[o] = 1);
            return this._initted && !this._pt && c && it(this), this;
          }),
          (n.to = function (t, e, i) {
            return new n(t, e, i);
          }),
          (n.from = function (t, e) {
            return new n(t, y(arguments, 1));
          }),
          (n.delayedCall = function (t, e, i, r) {
            return new n(e, 0, {
              immediateRender: !1,
              lazy: !1,
              overwrite: !1,
              delay: t,
              onComplete: e,
              onReverseComplete: e,
              onCompleteParams: i,
              onReverseCompleteParams: i,
              callbackScope: r,
            });
          }),
          (n.fromTo = function (t, e, i) {
            return new n(t, y(arguments, 2));
          }),
          (n.set = function (t, e) {
            return (
              (e.duration = 0), e.repeatDelay || (e.repeat = 0), new n(t, e)
            );
          }),
          (n.killTweensOf = function (t, e, i) {
            return pt.killTweensOf(t, e, i);
          }),
          n
        );
      })(Oe);
    function Xe(t, e, i) {
      return t.setAttribute(e, i);
    }
    function je(t, e, i, r) {
      r.mSet(t, e, r.m.call(r.tween, i, r.mt), r);
    }
    T(Ve.prototype, {
      _targets: [],
      _lazy: 0,
      _startAt: 0,
      _op: 0,
      _onInit: 0,
    }),
      F("staggerTo,staggerFrom,staggerFromTo", function (t) {
        Ve[t] = function () {
          var e = new Pe(),
            i = pe.call(arguments, 0);
          return (
            i.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, i)
          );
        };
      });
    var We = function (t, e, i) {
        return (t[e] = i);
      },
      qe = function (t, e, i) {
        return t[e](i);
      },
      He = function (t, e, i, r) {
        return t[e](r.fp, i);
      },
      Qe = function (t, e) {
        return n(t[e]) ? qe : s(t[e]) && t.setAttribute ? Xe : We;
      },
      Ge = function (t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e);
      },
      Ze = function (t, e) {
        return e.set(e.t, e.p, !!(e.s + e.c * t), e);
      },
      $e = function (t, e) {
        var i = e._pt,
          r = "";
        if (!t && e.b) r = e.b;
        else if (1 === t && e.e) r = e.e;
        else {
          for (; i; )
            (r =
              i.p +
              (i.m
                ? i.m(i.s + i.c * t)
                : Math.round(1e4 * (i.s + i.c * t)) / 1e4) +
              r),
              (i = i._next);
          r += e.c;
        }
        e.set(e.t, e.p, r, e);
      },
      Je = function (t, e) {
        for (var i = e._pt; i; ) i.r(t, i.d), (i = i._next);
      },
      Ke = function (t, e, i, r) {
        for (var n, u = this._pt; u; )
          (n = u._next), u.p === r && u.modifier(t, e, i), (u = n);
      },
      ti = function (t) {
        for (var e, i, r = this._pt; r; )
          (i = r._next),
            (r.p === t && !r.op) || r.op === t
              ? O(this, r, "_pt")
              : r.dep || (e = 1),
            (r = i);
        return !e;
      },
      ei = function (t) {
        for (var e, i, r, n, u = t._pt; u; ) {
          for (e = u._next, i = r; i && i.pr > u.pr; ) i = i._next;
          (u._prev = i ? i._prev : n) ? (u._prev._next = u) : (r = u),
            (u._next = i) ? (i._prev = u) : (n = u),
            (u = e);
        }
        t._pt = r;
      },
      ii =
        ((ri.prototype.modifier = function (t, e, i) {
          (this.mSet = this.mSet || this.set),
            (this.set = je),
            (this.m = t),
            (this.mt = i),
            (this.tween = e);
        }),
        ri);
    function ri(t, e, i, r, n, u, s, a, o) {
      (this.t = e),
        (this.s = r),
        (this.c = n),
        (this.p = i),
        (this.r = u || Ge),
        (this.d = s || this),
        (this.set = a || We),
        (this.pr = o || 0),
        (this._next = t) && (t._prev = this);
    }
    F(
      oe +
        "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
      function (t) {
        return (ee[t] = 1);
      },
    ),
      (te.TweenMax = te.TweenLite = Ve),
      (te.TimelineLite = te.TimelineMax = Pe),
      (pt = new Pe({
        sortChildren: !1,
        defaults: Nt,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0,
      })),
      (zt.stringFilter = at);
    var ni = {
      registerPlugin: function () {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
          e[i] = arguments[i];
        e.forEach(function (t) {
          return (function (t) {
            var e = (t = (!t.name && t.default) || t).name,
              i = n(t),
              r =
                e && !i && t.init
                  ? function () {
                      this._props = [];
                    }
                  : t,
              u = {
                init: d,
                render: Je,
                add: Ne,
                kill: ti,
                modifier: Ke,
                rawVars: 0,
              },
              s = {
                targetTest: 0,
                get: 0,
                getSetter: Qe,
                aliases: {},
                register: 0,
              };
            if ((ye(), t !== r)) {
              if (ne[e]) return;
              T(r, T(M(t, u), s)),
                De(r.prototype, De(u, M(t, s))),
                (ne[(r.prop = e)] = r),
                t.targetTest && (ae.push(r), (ee[e] = 1)),
                (e =
                  ("css" === e
                    ? "CSS"
                    : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
            }
            c(e, r), t.register && t.register(ai, r, ii);
          })(t);
        });
      },
      timeline: function (t) {
        return new Pe(t);
      },
      getTweensOf: function (t, e) {
        return pt.getTweensOf(t, e);
      },
      getProperty: function (t, e, i, n) {
        r(t) && (t = ce(t)[0]);
        var u = m(t || {}).get,
          s = i ? b : w;
        return (
          "native" === i && (i = ""),
          t
            ? e
              ? s(((ne[e] && ne[e].get) || u)(t, e, i, n))
              : function (e, i, r) {
                  return s(((ne[e] && ne[e].get) || u)(t, e, i, r));
                }
            : t
        );
      },
      quickSetter: function (t, e, i) {
        if (1 < (t = ce(t)).length) {
          var r = t.map(function (t) {
              return ai.quickSetter(t, e, i);
            }),
            n = r.length;
          return function (t) {
            for (var e = n; e--; ) r[e](t);
          };
        }
        t = t[0] || {};
        var u = ne[e],
          s = m(t),
          a = (s.harness && (s.harness.aliases || {})[e]) || e,
          o = u
            ? function (e) {
                var r = new u();
                (Ct._pt = 0),
                  r.init(t, i ? e + i : e, Ct, 0, [t]),
                  r.render(1, r),
                  Ct._pt && Je(1, Ct);
              }
            : s.set(t, a);
        return u
          ? o
          : function (e) {
              return o(t, a, i ? e + i : e, s, 1);
            };
      },
      isTweening: function (t) {
        return 0 < pt.getTweensOf(t, !0).length;
      },
      defaults: function (t) {
        return t && t.ease && (t.ease = Te(t.ease, Nt.ease)), B(Nt, t || {});
      },
      config: function (t) {
        return B(zt, t || {});
      },
      registerEffect: function (t) {
        var e = t.name,
          i = t.effect,
          r = t.plugins,
          n = t.defaults,
          u = t.extendTimeline;
        (r || "").split(",").forEach(function (t) {
          return (
            t && !ne[t] && !te[t] && p(e + " effect requires " + t + " plugin.")
          );
        }),
          (ue[e] = function (t, e, r) {
            return i(ce(t), T(e || {}, n), r);
          }),
          u &&
            (Pe.prototype[e] = function (t, i, r) {
              return this.add(ue[e](t, a(i) ? i : (r = i) && {}, this), r);
            });
      },
      registerEase: function (t, e) {
        Ee[t] = Te(e);
      },
      parseEase: function (t, e) {
        return arguments.length ? Te(t, e) : Ee;
      },
      getById: function (t) {
        return pt.getById(t);
      },
      exportRoot: function (t, e) {
        void 0 === t && (t = {});
        var i,
          r,
          n = new Pe(t);
        for (
          n.smoothChildTiming = o(t.smoothChildTiming),
            pt.remove(n),
            n._dp = 0,
            n._time = n._tTime = pt._time,
            i = pt._first;
          i;

        )
          (r = i._next),
            (!e &&
              !i._dur &&
              i instanceof Ve &&
              i.vars.onComplete === i._targets[0]) ||
              I(n, i, i._start - i._delay),
            (i = r);
        return I(pt, n, 0), n;
      },
      utils: {
        wrap: function t(e, i, r) {
          var n = i - e;
          return qt(e)
            ? K(e, t(0, e.length), i)
            : W(r, function (t) {
                return ((n + ((t - e) % n)) % n) + e;
              });
        },
        wrapYoyo: function t(e, i, r) {
          var n = i - e,
            u = 2 * n;
          return qt(e)
            ? K(e, t(0, e.length - 1), i)
            : W(r, function (t) {
                return e + (n < (t = (u + ((t - e) % u)) % u || 0) ? u - t : t);
              });
        },
        distribute: G,
        random: J,
        snap: $,
        normalize: function (t, e, i) {
          return de(t, e, 0, 1, i);
        },
        getUnit: q,
        clamp: function (t, e, i) {
          return W(i, function (i) {
            return fe(t, e, i);
          });
        },
        splitColor: nt,
        toArray: ce,
        mapRange: de,
        pipe: function () {
          for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
            e[i] = arguments[i];
          return function (t) {
            return e.reduce(function (t, e) {
              return e(t);
            }, t);
          };
        },
        unitize: function (t, e) {
          return function (i) {
            return t(parseFloat(i)) + (e || q(i));
          };
        },
        interpolate: function t(e, i, n, u) {
          var s = isNaN(e + i)
            ? 0
            : function (t) {
                return (1 - t) * e + t * i;
              };
          if (!s) {
            var a,
              o,
              D,
              h,
              l,
              f = r(e),
              p = {};
            if ((!0 === n && (u = 1) && (n = null), f))
              (e = { p: e }), (i = { p: i });
            else if (qt(e) && !qt(i)) {
              for (D = [], h = e.length, l = h - 2, o = 1; o < h; o++)
                D.push(t(e[o - 1], e[o]));
              h--,
                (s = function (t) {
                  t *= h;
                  var e = Math.min(l, ~~t);
                  return D[e](t - e);
                }),
                (n = i);
            } else u || (e = De(qt(e) ? [] : {}, e));
            if (!D) {
              for (a in i) Ne.call(p, e, a, "get", i[a]);
              s = function (t) {
                return Je(t, p) || (f ? e.p : e);
              };
            }
          }
          return W(n, s);
        },
        shuffle: Q,
      },
      install: l,
      effects: ue,
      ticker: ve,
      updateRoot: Pe.updateRoot,
      plugins: ne,
      globalTimeline: pt,
      core: {
        PropTween: ii,
        globals: c,
        Tween: Ve,
        Timeline: Pe,
        Animation: Oe,
        getCache: m,
        _removeLinkedListItem: O,
      },
    };
    function ui(t, e) {
      for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
        i = i._next;
      return i;
    }
    function si(t, e) {
      return {
        name: t,
        rawVars: 1,
        init: function (t, i, n) {
          n._onInit = function (t) {
            var n, u;
            if (
              (r(i) &&
                ((n = {}),
                F(i, function (t) {
                  return (n[t] = 1);
                }),
                (i = n)),
              e)
            ) {
              for (u in ((n = {}), i)) n[u] = e(i[u]);
              i = n;
            }
            !(function (t, e) {
              var i,
                r,
                n,
                u = t._targets;
              for (i in e)
                for (r = u.length; r--; )
                  (n = (n = t._ptLookup[r][i]) && n.d) &&
                    (n._pt && (n = ui(n, i)),
                    n && n.modifier && n.modifier(e[i], t, u[r], i));
            })(t, i);
          };
        },
      };
    }
    F("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
      return (ni[t] = Ve[t]);
    }),
      ve.add(Pe.updateRoot),
      (Ct = ni.to({}, { duration: 0 }));
    var ai =
      ni.registerPlugin(
        {
          name: "attr",
          init: function (t, e, i, r, n) {
            var u, s;
            for (u in e)
              (s = this.add(
                t,
                "setAttribute",
                (t.getAttribute(u) || 0) + "",
                e[u],
                r,
                n,
                0,
                0,
                u,
              )) && (s.op = u),
                this._props.push(u);
          },
        },
        {
          name: "endArray",
          init: function (t, e) {
            for (var i = e.length; i--; ) this.add(t, i, t[i] || 0, e[i]);
          },
        },
        si("roundProps", Z),
        si("modifiers"),
        si("snap", $),
      ) || ni;
    function oi(t, e) {
      return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
    }
    function Di(t, e) {
      return e.set(
        e.t,
        e.p,
        1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
        e,
      );
    }
    function hi(t, e) {
      return e.set(
        e.t,
        e.p,
        t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
        e,
      );
    }
    function li(t, e) {
      var i = e.s + e.c * t;
      e.set(e.t, e.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + e.u, e);
    }
    function fi(t, e) {
      return e.set(e.t, e.p, t ? e.e : e.b, e);
    }
    function pi(t, e) {
      return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
    }
    function ci(t, e, i) {
      return (t.style[e] = i);
    }
    function di(t, e, i) {
      return t.style.setProperty(e, i);
    }
    function _i(t, e, i) {
      return (t._gsap[e] = i);
    }
    function mi(t, e, i) {
      return (t._gsap.scaleX = t._gsap.scaleY = i);
    }
    function gi(t, e, i, r, n) {
      var u = t._gsap;
      (u.scaleX = u.scaleY = i), u.renderTransform(n, u);
    }
    function Fi(t, e, i, r, n) {
      var u = t._gsap;
      (u[e] = i), u.renderTransform(n, u);
    }
    function Ci(t, e) {
      var i = Vi.createElementNS
        ? Vi.createElementNS(
            (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            t,
          )
        : Vi.createElement(t);
      return i.style ? i : Vi.createElement(t);
    }
    function vi(t, e, i) {
      var r = getComputedStyle(t);
      return (
        r[e] ||
        r.getPropertyValue(e.replace(mr, "-$1").toLowerCase()) ||
        r.getPropertyValue(e) ||
        (!i && vi(t, xr(e) || e, 1)) ||
        ""
      );
    }
    function yi() {
      "undefined" != typeof window &&
        window.document &&
        ((Ui = window),
        (Vi = Ui.document),
        (Xi = Vi.documentElement),
        (Wi = Ci("div") || { style: {} }),
        (qi = Ci("div")),
        (vr = xr(vr)),
        (yr = xr(yr)),
        (Wi.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0"),
        (Qi = !!xr("perspective")),
        (ji = 1));
    }
    function Ei(t) {
      var e,
        i = Ci(
          "svg",
          (this.ownerSVGElement &&
            this.ownerSVGElement.getAttribute("xmlns")) ||
            "http://www.w3.org/2000/svg",
        ),
        r = this.parentNode,
        n = this.nextSibling,
        u = this.style.cssText;
      if (
        (Xi.appendChild(i),
        i.appendChild(this),
        (this.style.display = "block"),
        t)
      )
        try {
          (e = this.getBBox()),
            (this._gsapBBox = this.getBBox),
            (this.getBBox = Ei);
        } catch (t) {}
      else this._gsapBBox && (e = this._gsapBBox());
      return (
        r && (n ? r.insertBefore(this, n) : r.appendChild(this)),
        Xi.removeChild(i),
        (this.style.cssText = u),
        e
      );
    }
    function xi(t, e) {
      for (var i = e.length; i--; )
        if (t.hasAttribute(e[i])) return t.getAttribute(e[i]);
    }
    function wi(t) {
      var e;
      try {
        e = t.getBBox();
      } catch (i) {
        e = Ei.call(t, !0);
      }
      return (
        (e && (e.width || e.height)) ||
          t.getBBox === Ei ||
          (e = Ei.call(t, !0)),
        !e || e.width || e.x || e.y
          ? e
          : {
              x: +xi(t, ["x", "cx", "x1"]) || 0,
              y: +xi(t, ["y", "cy", "y1"]) || 0,
              width: 0,
              height: 0,
            }
      );
    }
    function bi(t) {
      return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !wi(t));
    }
    function Ti(t, e) {
      if (e) {
        var i = t.style;
        e in pr && (e = vr),
          i.removeProperty
            ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
                (e = "-" + e),
              i.removeProperty(e.replace(mr, "-$1").toLowerCase()))
            : i.removeAttribute(e);
      }
    }
    function Ai(t, e, i, r, n, u) {
      var s = new ii(t._pt, e, i, 0, 1, u ? pi : fi);
      return ((t._pt = s).b = r), (s.e = n), t._props.push(i), s;
    }
    function Bi(t, e, i, r) {
      var n,
        u,
        s,
        a,
        o = parseFloat(i) || 0,
        D = (i + "").trim().substr((o + "").length) || "px",
        h = Wi.style,
        l = gr.test(e),
        f = "svg" === t.tagName.toLowerCase(),
        p = (f ? "client" : "offset") + (l ? "Width" : "Height"),
        c = "px" === r,
        d = "%" === r;
      return r === D || !o || wr[r] || wr[D]
        ? o
        : ("px" === D || c || (o = Bi(t, e, i, "px")),
          (a = t.getCTM && bi(t)),
          d && (pr[e] || ~e.indexOf("adius"))
            ? C((o / (a ? t.getBBox()[l ? "width" : "height"] : t[p])) * 100)
            : ((h[l ? "width" : "height"] = 100 + (c ? D : r)),
              (u =
                ~e.indexOf("adius") || ("em" === r && t.appendChild && !f)
                  ? t
                  : t.parentNode),
              a && (u = (t.ownerSVGElement || {}).parentNode),
              (u && u !== Vi && u.appendChild) || (u = Vi.body),
              (s = u._gsap) && d && s.width && l && s.time === ve.time
                ? C((o / s.width) * 100)
                : ((!d && "%" !== D) || (h.position = vi(t, "position")),
                  u === t && (h.position = "static"),
                  u.appendChild(Wi),
                  (n = Wi[p]),
                  u.removeChild(Wi),
                  (h.position = "absolute"),
                  l && d && (((s = m(u)).time = ve.time), (s.width = u[p])),
                  C(c ? (n * o) / 100 : n && o ? (100 / n) * o : 0))));
    }
    function Mi(t, e, i, r) {
      var n;
      return (
        ji || yi(),
        e in Cr &&
          "transform" !== e &&
          ~(e = Cr[e]).indexOf(",") &&
          (e = e.split(",")[0]),
        pr[e] && "transform" !== e
          ? ((n = Mr(t, r)),
            (n =
              "transformOrigin" !== e
                ? n[e]
                : Sr(vi(t, yr)) + " " + n.zOrigin + "px"))
          : ((n = t.style[e]) &&
              "auto" !== n &&
              !r &&
              !~(n + "").indexOf("calc(")) ||
            (n =
              (Tr[e] && Tr[e](t, e, i)) ||
              vi(t, e) ||
              g(t, e) ||
              ("opacity" === e ? 1 : 0)),
        i && !~(n + "").indexOf(" ") ? Bi(t, e, n, i) + i : n
      );
    }
    function Si(t, e, i, r) {
      if (!i || "none" === i) {
        var n = xr(e, t, 1),
          u = n && vi(t, n, 1);
        u && u !== i && ((e = n), (i = u));
      }
      var s,
        a,
        o,
        D,
        h,
        l,
        f,
        p,
        c,
        d,
        _,
        m,
        g = new ii(this._pt, t.style, e, 0, 1, $e),
        F = 0,
        C = 0;
      if (
        ((g.b = i),
        (g.e = r),
        (i += ""),
        "auto" == (r += "") &&
          ((t.style[e] = r), (r = vi(t, e) || r), (t.style[e] = i)),
        at((s = [i, r])),
        (r = s[1]),
        (o = (i = s[0]).match(Gt) || []),
        (r.match(Gt) || []).length)
      ) {
        for (; (a = Gt.exec(r)); )
          (f = a[0]),
            (c = r.substring(F, a.index)),
            h
              ? (h = (h + 1) % 5)
              : ("rgba(" !== c.substr(-5) && "hsla(" !== c.substr(-5)) ||
                (h = 1),
            f !== (l = o[C++] || "") &&
              ((D = parseFloat(l) || 0),
              (_ = l.substr((D + "").length)),
              (m = "=" === f.charAt(1) ? +(f.charAt(0) + "1") : 0) &&
                (f = f.substr(2)),
              (p = parseFloat(f)),
              (d = f.substr((p + "").length)),
              (F = Gt.lastIndex - d.length),
              d ||
                ((d = d || zt.units[e] || _),
                F === r.length && ((r += d), (g.e += d))),
              _ !== d && (D = Bi(t, e, l, d) || 0),
              (g._pt = {
                _next: g._pt,
                p: c || 1 === C ? c : ",",
                s: D,
                c: m ? m * p : p - D,
                m: h && h < 4 ? Math.round : 0,
              }));
        g.c = F < r.length ? r.substring(F, r.length) : "";
      } else g.r = "display" === e && "none" === r ? pi : fi;
      return Jt.test(r) && (g.e = 0), (this._pt = g);
    }
    function Oi(t) {
      var e = t.split(" "),
        i = e[0],
        r = e[1] || "50%";
      return (
        ("top" !== i && "bottom" !== i && "left" !== r && "right" !== r) ||
          ((t = i), (i = r), (r = t)),
        (e[0] = br[i] || i),
        (e[1] = br[r] || r),
        e.join(" ")
      );
    }
    function ki(t, e) {
      if (e.tween && e.tween._time === e.tween._dur) {
        var i,
          r,
          n,
          u = e.t,
          s = u.style,
          a = e.u,
          o = u._gsap;
        if ("all" === a || !0 === a) (s.cssText = ""), (r = 1);
        else
          for (n = (a = a.split(",")).length; -1 < --n; )
            (i = a[n]),
              pr[i] && ((r = 1), (i = "transformOrigin" === i ? yr : vr)),
              Ti(u, i);
        r &&
          (Ti(u, vr),
          o &&
            (o.svg && u.removeAttribute("transform"),
            Mr(u, 1),
            (o.uncache = 1)));
      }
    }
    function Pi(t) {
      return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
    }
    function Ri(t) {
      var e = vi(t, vr);
      return Pi(e) ? Ar : e.substr(7).match(Qt).map(C);
    }
    function zi(t, e) {
      var i,
        r,
        n,
        u,
        s = t._gsap || m(t),
        a = t.style,
        o = Ri(t);
      return s.svg && t.getAttribute("transform")
        ? "1,0,0,1,0,0" ===
          (o = [
            (n = t.transform.baseVal.consolidate().matrix).a,
            n.b,
            n.c,
            n.d,
            n.e,
            n.f,
          ]).join(",")
          ? Ar
          : o
        : (o !== Ar ||
            t.offsetParent ||
            t === Xi ||
            s.svg ||
            ((n = a.display),
            (a.display = "block"),
            ((i = t.parentNode) && t.offsetParent) ||
              ((u = 1), (r = t.nextSibling), Xi.appendChild(t)),
            (o = Ri(t)),
            n ? (a.display = n) : Ti(t, "display"),
            u &&
              (r
                ? i.insertBefore(t, r)
                : i
                  ? i.appendChild(t)
                  : Xi.removeChild(t))),
          e && 6 < o.length ? [o[0], o[1], o[4], o[5], o[12], o[13]] : o);
    }
    function Ni(t, e, i, r, n, u) {
      var s,
        a,
        o,
        D = t._gsap,
        h = n || zi(t, !0),
        l = D.xOrigin || 0,
        f = D.yOrigin || 0,
        p = D.xOffset || 0,
        c = D.yOffset || 0,
        d = h[0],
        _ = h[1],
        m = h[2],
        g = h[3],
        F = h[4],
        C = h[5],
        v = e.split(" "),
        y = parseFloat(v[0]) || 0,
        E = parseFloat(v[1]) || 0;
      i
        ? h !== Ar &&
          (a = d * g - _ * m) &&
          ((o = y * (-_ / a) + E * (d / a) - (d * C - _ * F) / a),
          (y = y * (g / a) + E * (-m / a) + (m * C - g * F) / a),
          (E = o))
        : ((y = (s = wi(t)).x + (~v[0].indexOf("%") ? (y / 100) * s.width : y)),
          (E =
            s.y + (~(v[1] || v[0]).indexOf("%") ? (E / 100) * s.height : E))),
        r || (!1 !== r && D.smooth)
          ? ((F = y - l),
            (C = E - f),
            (D.xOffset = p + (F * d + C * m) - F),
            (D.yOffset = c + (F * _ + C * g) - C))
          : (D.xOffset = D.yOffset = 0),
        (D.xOrigin = y),
        (D.yOrigin = E),
        (D.smooth = !!r),
        (D.origin = e),
        (D.originIsAbsolute = !!i),
        (t.style[yr] = "0px 0px"),
        u &&
          (Ai(u, D, "xOrigin", l, y),
          Ai(u, D, "yOrigin", f, E),
          Ai(u, D, "xOffset", p, D.xOffset),
          Ai(u, D, "yOffset", c, D.yOffset)),
        t.setAttribute("data-svg-origin", y + " " + E);
    }
    function Li(t, e, i) {
      var r = q(e);
      return C(parseFloat(e) + parseFloat(Bi(t, "x", i + "px", r))) + r;
    }
    function Ii(t, e, i, n, u, s) {
      var a,
        o,
        D = 360,
        h = r(u),
        l = parseFloat(u) * (h && ~u.indexOf("rad") ? cr : 1),
        f = s ? l * s : l - n,
        p = n + f + "deg";
      return (
        h &&
          ("short" === (a = u.split("_")[1]) &&
            (f %= D) != f % 180 &&
            (f += f < 0 ? D : -D),
          "cw" === a && f < 0
            ? (f = ((f + 36e9) % D) - ~~(f / D) * D)
            : "ccw" === a && 0 < f && (f = ((f - 36e9) % D) - ~~(f / D) * D)),
        (t._pt = o = new ii(t._pt, e, i, n, f, Di)),
        (o.e = p),
        (o.u = "deg"),
        t._props.push(i),
        o
      );
    }
    function Yi(t, e, i) {
      var r,
        n,
        u,
        s,
        a,
        o,
        D,
        h = qi.style,
        l = i._gsap;
      for (n in ((h.cssText =
        getComputedStyle(i).cssText + ";position:absolute;display:block;"),
      (h[vr] = e),
      Vi.body.appendChild(qi),
      (r = Mr(qi, 1)),
      pr))
        (u = l[n]) !== (s = r[n]) &&
          "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 &&
          ((a = q(u) !== (D = q(s)) ? Bi(i, n, u, D) : parseFloat(u)),
          (o = parseFloat(s)),
          (t._pt = new ii(t._pt, l, n, a, o - a, oi)),
          (t._pt.u = D || 0),
          t._props.push(n));
      Vi.body.removeChild(qi);
    }
    (Ve.version = Pe.version = ai.version = "3.3.3"), (gt = 1), D() && ye();
    var Ui,
      Vi,
      Xi,
      ji,
      Wi,
      qi,
      Hi,
      Qi,
      Gi = Ee.Power0,
      Zi = Ee.Power1,
      $i = Ee.Power2,
      Ji = Ee.Power3,
      Ki = Ee.Power4,
      tr = Ee.Linear,
      er = Ee.Quad,
      ir = Ee.Cubic,
      rr = Ee.Quart,
      nr = Ee.Quint,
      ur = Ee.Strong,
      sr = Ee.Elastic,
      ar = Ee.Back,
      or = Ee.SteppedEase,
      Dr = Ee.Bounce,
      hr = Ee.Sine,
      lr = Ee.Expo,
      fr = Ee.Circ,
      pr = {},
      cr = 180 / Math.PI,
      dr = Math.PI / 180,
      _r = Math.atan2,
      mr = /([A-Z])/g,
      gr = /(?:left|right|width|margin|padding|x)/i,
      Fr = /[\s,\(]\S/,
      Cr = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity",
      },
      vr = "transform",
      yr = vr + "Origin",
      Er = "O,Moz,ms,Ms,Webkit".split(","),
      xr = function (t, e, i) {
        var r = (e || Wi).style,
          n = 5;
        if (t in r && !i) return t;
        for (
          t = t.charAt(0).toUpperCase() + t.substr(1);
          n-- && !(Er[n] + t in r);

        );
        return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? Er[n] : "") + t;
      },
      wr = { deg: 1, rad: 1, turn: 1 },
      br = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%",
      },
      Tr = {
        clearProps: function (t, e, i, r, n) {
          if ("isFromStart" !== n.data) {
            var u = (t._pt = new ii(t._pt, e, i, 0, 0, ki));
            return (u.u = r), (u.pr = -10), (u.tween = n), t._props.push(i), 1;
          }
        },
      },
      Ar = [1, 0, 0, 1, 0, 0],
      Br = {},
      Mr = function (t, e) {
        var i = t._gsap || new Se(t);
        if ("x" in i && !e && !i.uncache) return i;
        var r,
          n,
          u,
          s,
          a,
          o,
          D,
          h,
          l,
          f,
          p,
          c,
          d,
          _,
          m,
          g,
          F,
          v,
          y,
          E,
          x,
          w,
          b,
          T,
          A,
          B,
          M,
          S,
          O,
          k,
          P,
          R,
          z = t.style,
          N = i.scaleX < 0,
          L = "deg",
          I = vi(t, yr) || "0";
        return (
          (r = n = u = o = D = h = l = f = p = 0),
          (s = a = 1),
          (i.svg = !(!t.getCTM || !bi(t))),
          (_ = zi(t, i.svg)),
          i.svg &&
            ((T = !i.uncache && t.getAttribute("data-svg-origin")),
            Ni(t, T || I, !!T || i.originIsAbsolute, !1 !== i.smooth, _)),
          (c = i.xOrigin || 0),
          (d = i.yOrigin || 0),
          _ !== Ar &&
            ((v = _[0]),
            (y = _[1]),
            (E = _[2]),
            (x = _[3]),
            (r = w = _[4]),
            (n = b = _[5]),
            6 === _.length
              ? ((s = Math.sqrt(v * v + y * y)),
                (a = Math.sqrt(x * x + E * E)),
                (o = v || y ? _r(y, v) * cr : 0),
                (l = E || x ? _r(E, x) * cr + o : 0) && (a *= Math.cos(l * dr)),
                i.svg &&
                  ((r -= c - (c * v + d * E)), (n -= d - (c * y + d * x))))
              : ((R = _[6]),
                (k = _[7]),
                (M = _[8]),
                (S = _[9]),
                (O = _[10]),
                (P = _[11]),
                (r = _[12]),
                (n = _[13]),
                (u = _[14]),
                (D = (m = _r(R, O)) * cr),
                m &&
                  ((T = w * (g = Math.cos(-m)) + M * (F = Math.sin(-m))),
                  (A = b * g + S * F),
                  (B = R * g + O * F),
                  (M = w * -F + M * g),
                  (S = b * -F + S * g),
                  (O = R * -F + O * g),
                  (P = k * -F + P * g),
                  (w = T),
                  (b = A),
                  (R = B)),
                (h = (m = _r(-E, O)) * cr),
                m &&
                  ((g = Math.cos(-m)),
                  (P = x * (F = Math.sin(-m)) + P * g),
                  (v = T = v * g - M * F),
                  (y = A = y * g - S * F),
                  (E = B = E * g - O * F)),
                (o = (m = _r(y, v)) * cr),
                m &&
                  ((T = v * (g = Math.cos(m)) + y * (F = Math.sin(m))),
                  (A = w * g + b * F),
                  (y = y * g - v * F),
                  (b = b * g - w * F),
                  (v = T),
                  (w = A)),
                D &&
                  359.9 < Math.abs(D) + Math.abs(o) &&
                  ((D = o = 0), (h = 180 - h)),
                (s = C(Math.sqrt(v * v + y * y + E * E))),
                (a = C(Math.sqrt(b * b + R * R))),
                (m = _r(w, b)),
                (l = 2e-4 < Math.abs(m) ? m * cr : 0),
                (p = P ? 1 / (P < 0 ? -P : P) : 0)),
            i.svg &&
              ((T = t.getAttribute("transform")),
              (i.forceCSS = t.setAttribute("transform", "") || !Pi(vi(t, vr))),
              T && t.setAttribute("transform", T))),
          90 < Math.abs(l) &&
            Math.abs(l) < 270 &&
            (N
              ? ((s *= -1),
                (l += o <= 0 ? 180 : -180),
                (o += o <= 0 ? 180 : -180))
              : ((a *= -1), (l += l <= 0 ? 180 : -180))),
          (i.x =
            ((i.xPercent =
              r && Math.round(t.offsetWidth / 2) === Math.round(-r) ? -50 : 0)
              ? 0
              : r) + "px"),
          (i.y =
            ((i.yPercent =
              n && Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0)
              ? 0
              : n) + "px"),
          (i.z = u + "px"),
          (i.scaleX = C(s)),
          (i.scaleY = C(a)),
          (i.rotation = C(o) + L),
          (i.rotationX = C(D) + L),
          (i.rotationY = C(h) + L),
          (i.skewX = l + L),
          (i.skewY = f + L),
          (i.transformPerspective = p + "px"),
          (i.zOrigin = parseFloat(I.split(" ")[2]) || 0) && (z[yr] = Sr(I)),
          (i.xOffset = i.yOffset = 0),
          (i.force3D = zt.force3D),
          (i.renderTransform = i.svg ? Nr : Qi ? zr : Or),
          (i.uncache = 0),
          i
        );
      },
      Sr = function (t) {
        return (t = t.split(" "))[0] + " " + t[1];
      },
      Or = function (t, e) {
        (e.z = "0px"),
          (e.rotationY = e.rotationX = "0deg"),
          (e.force3D = 0),
          zr(t, e);
      },
      kr = "0deg",
      Pr = "0px",
      Rr = ") ",
      zr = function (t, e) {
        var i = e || this,
          r = i.xPercent,
          n = i.yPercent,
          u = i.x,
          s = i.y,
          a = i.z,
          o = i.rotation,
          D = i.rotationY,
          h = i.rotationX,
          l = i.skewX,
          f = i.skewY,
          p = i.scaleX,
          c = i.scaleY,
          d = i.transformPerspective,
          _ = i.force3D,
          m = i.target,
          g = i.zOrigin,
          F = "",
          C = ("auto" === _ && t && 1 !== t) || !0 === _;
        if (g && (h !== kr || D !== kr)) {
          var v,
            y = parseFloat(D) * dr,
            E = Math.sin(y),
            x = Math.cos(y);
          (y = parseFloat(h) * dr),
            (u = Li(m, u, E * (v = Math.cos(y)) * -g)),
            (s = Li(m, s, -Math.sin(y) * -g)),
            (a = Li(m, a, x * v * -g + g));
        }
        d !== Pr && (F += "perspective(" + d + Rr),
          (r || n) && (F += "translate(" + r + "%, " + n + "%) "),
          (!C && u === Pr && s === Pr && a === Pr) ||
            (F +=
              a !== Pr || C
                ? "translate3d(" + u + ", " + s + ", " + a + ") "
                : "translate(" + u + ", " + s + Rr),
          o !== kr && (F += "rotate(" + o + Rr),
          D !== kr && (F += "rotateY(" + D + Rr),
          h !== kr && (F += "rotateX(" + h + Rr),
          (l === kr && f === kr) || (F += "skew(" + l + ", " + f + Rr),
          (1 === p && 1 === c) || (F += "scale(" + p + ", " + c + Rr),
          (m.style[vr] = F || "translate(0, 0)");
      },
      Nr = function (t, e) {
        var i,
          r,
          n,
          u,
          s,
          a = e || this,
          o = a.xPercent,
          D = a.yPercent,
          h = a.x,
          l = a.y,
          f = a.rotation,
          p = a.skewX,
          c = a.skewY,
          d = a.scaleX,
          _ = a.scaleY,
          m = a.target,
          g = a.xOrigin,
          F = a.yOrigin,
          v = a.xOffset,
          y = a.yOffset,
          E = a.forceCSS,
          x = parseFloat(h),
          w = parseFloat(l);
        (f = parseFloat(f)),
          (p = parseFloat(p)),
          (c = parseFloat(c)) && ((p += c = parseFloat(c)), (f += c)),
          f || p
            ? ((f *= dr),
              (p *= dr),
              (i = Math.cos(f) * d),
              (r = Math.sin(f) * d),
              (n = Math.sin(f - p) * -_),
              (u = Math.cos(f - p) * _),
              p &&
                ((c *= dr),
                (s = Math.tan(p - c)),
                (n *= s = Math.sqrt(1 + s * s)),
                (u *= s),
                c &&
                  ((s = Math.tan(c)),
                  (i *= s = Math.sqrt(1 + s * s)),
                  (r *= s))),
              (i = C(i)),
              (r = C(r)),
              (n = C(n)),
              (u = C(u)))
            : ((i = d), (u = _), (r = n = 0)),
          ((x && !~(h + "").indexOf("px")) ||
            (w && !~(l + "").indexOf("px"))) &&
            ((x = Bi(m, "x", h, "px")), (w = Bi(m, "y", l, "px"))),
          (g || F || v || y) &&
            ((x = C(x + g - (g * i + F * n) + v)),
            (w = C(w + F - (g * r + F * u) + y))),
          (o || D) &&
            ((x = C(x + (o / 100) * (s = m.getBBox()).width)),
            (w = C(w + (D / 100) * s.height))),
          (s =
            "matrix(" +
            i +
            "," +
            r +
            "," +
            n +
            "," +
            u +
            "," +
            x +
            "," +
            w +
            ")"),
          m.setAttribute("transform", s),
          E && (m.style[vr] = s);
      };
    F("padding,margin,Width,Radius", function (t, e) {
      var i = "Right",
        r = "Bottom",
        n = "Left",
        u = (
          e < 3 ? ["Top", i, r, n] : ["Top" + n, "Top" + i, r + i, r + n]
        ).map(function (i) {
          return e < 2 ? t + i : "border" + i + t;
        });
      Tr[1 < e ? "border" + t : t] = function (t, e, i, r, n) {
        var s, a;
        if (arguments.length < 4)
          return (
            (s = u.map(function (e) {
              return Mi(t, e, i);
            })),
            5 === (a = s.join(" ")).split(s[0]).length ? s[0] : a
          );
        (s = (r + "").split(" ")),
          (a = {}),
          u.forEach(function (t, e) {
            return (a[t] = s[e] = s[e] || s[((e - 1) / 2) | 0]);
          }),
          t.init(e, a, n);
      };
    });
    var Lr,
      Ir,
      Yr = {
        name: "css",
        register: yi,
        targetTest: function (t) {
          return t.style && t.nodeType;
        },
        init: function (t, e, i, r, n) {
          var u,
            s,
            a,
            o,
            D,
            h,
            l,
            p,
            c,
            d,
            _,
            m,
            g,
            F,
            C,
            v = this._props,
            y = t.style;
          for (l in (ji || yi(), e))
            if (
              "autoRound" !== l &&
              ((s = e[l]), !ne[l] || !Re(l, e, i, r, t, n))
            )
              if (
                ((D = typeof s),
                (h = Tr[l]),
                "function" === D && (D = typeof (s = s.call(i, r, t, n))),
                "string" === D && ~s.indexOf("random(") && (s = tt(s)),
                h)
              )
                h(this, t, l, s, i) && (C = 1);
              else if ("--" === l.substr(0, 2))
                this.add(
                  y,
                  "setProperty",
                  getComputedStyle(t).getPropertyValue(l) + "",
                  s + "",
                  r,
                  n,
                  0,
                  0,
                  l,
                );
              else {
                if (
                  ((u = Mi(t, l)),
                  (o = parseFloat(u)),
                  (d =
                    "string" === D && "=" === s.charAt(1)
                      ? +(s.charAt(0) + "1")
                      : 0) && (s = s.substr(2)),
                  (a = parseFloat(s)),
                  l in Cr &&
                    ("autoAlpha" === l &&
                      (1 === o &&
                        "hidden" === Mi(t, "visibility") &&
                        a &&
                        (o = 0),
                      Ai(
                        this,
                        y,
                        "visibility",
                        o ? "inherit" : "hidden",
                        a ? "inherit" : "hidden",
                        !a,
                      )),
                    "scale" !== l &&
                      "transform" !== l &&
                      ~(l = Cr[l]).indexOf(",") &&
                      (l = l.split(",")[0])),
                  (_ = l in pr))
                )
                  if (
                    (m ||
                      ((g = t._gsap).renderTransform || Mr(t),
                      (F = !1 !== e.smoothOrigin && g.smooth),
                      ((m = this._pt =
                        new ii(
                          this._pt,
                          y,
                          vr,
                          0,
                          1,
                          g.renderTransform,
                          g,
                          0,
                          -1,
                        )).dep = 1)),
                    "scale" === l)
                  )
                    (this._pt = new ii(
                      this._pt,
                      g,
                      "scaleY",
                      g.scaleY,
                      d ? d * a : a - g.scaleY,
                    )),
                      v.push("scaleY", l),
                      (l += "X");
                  else {
                    if ("transformOrigin" === l) {
                      (s = Oi(s)),
                        g.svg
                          ? Ni(t, s, 0, F, 0, this)
                          : ((c = parseFloat(s.split(" ")[2]) || 0) !==
                              g.zOrigin && Ai(this, g, "zOrigin", g.zOrigin, c),
                            Ai(this, y, l, Sr(u), Sr(s)));
                      continue;
                    }
                    if ("svgOrigin" === l) {
                      Ni(t, s, 1, F, 0, this);
                      continue;
                    }
                    if (l in Br) {
                      Ii(this, g, l, o, s, d);
                      continue;
                    }
                    if ("smoothOrigin" === l) {
                      Ai(this, g, "smooth", g.smooth, s);
                      continue;
                    }
                    if ("force3D" === l) {
                      g[l] = s;
                      continue;
                    }
                    if ("transform" === l) {
                      Yi(this, s, t);
                      continue;
                    }
                  }
                else l in y || (l = xr(l) || l);
                if (
                  _ ||
                  ((a || 0 === a) && (o || 0 === o) && !Fr.test(s) && l in y)
                )
                  (p = (u + "").substr((o + "").length)) !==
                    (c =
                      (s + "").substr(((a = a || 0) + "").length) ||
                      (l in zt.units ? zt.units[l] : p)) &&
                    (o = Bi(t, l, u, c)),
                    (this._pt = new ii(
                      this._pt,
                      _ ? g : y,
                      l,
                      o,
                      d ? d * a : a - o,
                      "px" !== c || !1 === e.autoRound || _ ? oi : li,
                    )),
                    (this._pt.u = c || 0),
                    p !== c && ((this._pt.b = u), (this._pt.r = hi));
                else if (l in y) Si.call(this, t, l, u, s);
                else {
                  if (!(l in t)) {
                    f(l, s);
                    continue;
                  }
                  this.add(t, l, t[l], s, r, n);
                }
                v.push(l);
              }
          C && ei(this);
        },
        get: Mi,
        aliases: Cr,
        getSetter: function (t, e, i) {
          var r = Cr[e];
          return (
            r && r.indexOf(",") < 0 && (e = r),
            e in pr && e !== yr && (t._gsap.x || Mi(t, "x"))
              ? i && Hi === i
                ? "scale" === e
                  ? mi
                  : _i
                : (Hi = i || {}) && ("scale" === e ? gi : Fi)
              : t.style && !s(t.style[e])
                ? ci
                : ~e.indexOf("-")
                  ? di
                  : Qe(t, e)
          );
        },
        core: { _removeProperty: Ti, _getMatrix: zi },
      };
    (ai.utils.checkPrefix = xr),
      (Ir = F(
        "x,y,z,scale,scaleX,scaleY,xPercent,yPercent" +
          "," +
          (Lr = "rotation,rotationX,rotationY,skewX,skewY") +
          ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
        function (t) {
          pr[t] = 1;
        },
      )),
      F(Lr, function (t) {
        (zt.units[t] = "deg"), (Br[t] = 1);
      }),
      (Cr[Ir[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + Lr),
      F(
        "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
        function (t) {
          var e = t.split(":");
          Cr[e[1]] = Ir[e[0]];
        },
      ),
      F(
        "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
        function (t) {
          zt.units[t] = "px";
        },
      ),
      ai.registerPlugin(Yr);
    var Ur = ai.registerPlugin(Yr) || ai,
      Vr = Ur.core.Tween;
    (t.Back = ar),
      (t.Bounce = Dr),
      (t.CSSPlugin = Yr),
      (t.Circ = fr),
      (t.Cubic = ir),
      (t.Elastic = sr),
      (t.Expo = lr),
      (t.Linear = tr),
      (t.Power0 = Gi),
      (t.Power1 = Zi),
      (t.Power2 = $i),
      (t.Power3 = Ji),
      (t.Power4 = Ki),
      (t.Quad = er),
      (t.Quart = rr),
      (t.Quint = nr),
      (t.Sine = hr),
      (t.SteppedEase = or),
      (t.Strong = ur),
      (t.TimelineLite = Pe),
      (t.TimelineMax = Pe),
      (t.TweenLite = Ve),
      (t.TweenMax = Vr),
      (t.default = Ur),
      (t.gsap = Ur),
      "undefined" == typeof window || window !== t
        ? Object.defineProperty(t, "__esModule", { value: !0 })
        : delete t.default;
  });
