/ *! jQuery v3.5.0 | (c) Фонд JS и другие участники | jquery.org/license * /! function (e, t) {
"использовать строгий";
"объект" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) выбросить новую ошибку(«jQuery требует окно с документом»);
    return t(e)
} : t(e)
}(«undefined»! = typeof window ? window : this, function (C, e) {
        "использовать строгий";
        var t = [],
            r = Object.getPrototypeOf,
            s = t.slice,
            g = t.flat ? Function(e) {
                return t.flat.call(e)
            } : function (e) {
                return t.concat.apply([], e)
            },
            u = t.push,
            i = t.indexOf,
            n = {},
            o = n.toString,
            v = n.hasOwnProperty,
            a = v.toString,
            l = a.call(Object),
            y = {},
            m = function (e) {
                return "function" == typeof e && "number"! = typeof e.nodeType
            },
            x = function (e) {
                return null! = e && e === e.window
            },
            E = C.document,
            c = {
                type: !0,
                src: !0,
                nonce: !0,
                noModule: !0
            };
        функция b(e, t, n) {
            var r, i, o = (n = n || E).createElement("script");
            if (o.text = e, t) для(r в c)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
            n.head.appendChild(o).parentNode.removeChild(o)
        }

        function w(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "объект" : typeof e
        }
        var f = "3.5.0",
            S = function (e, t) {
                вернуть новый S.fn.init(e, t)
            };
        функция p(e) {
            var t = !!e && "length"
            в e && e.length, n = w(e);
            return !m(e) && !x(e) && ("array" === n || 0 === t || " число " == typeof t && 0 < t && t - 1 в e)
        }
        S.fn = S.prototype = {
            jquery: f,
            конструктор: S,
            длина: 0,
            toArray: function () {
                return s.call(this)
            },
            get: function (e) {
                return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function (e) {
                var t = S.merge(this.constructor(), e);
                return t.prevObject = this, t
            },
            каждый: function (e) {
                return S.each(this, e)
            },
            map: function (n) {
                return this.pushStack(S.map(this, function (e, t) {
                    вернуть n.call(e, t, e)
                }))
            },
            slice: function () {
                вернуть this.pushStack(s.apply(this, arguments))
            },
            first: function () {
                return this.eq(0)
            },
            last: function () {
                return this.eq(-1)
            },
            четный: function () {
                return this.pushStack(S.grep(this, function (e, t) {
                    return (t + 1) % 2
                }))
            },
            нечетный: function () {
                return this.pushStack(S.grep(this, function (e, t) {
                    return t % 2
                }))
            },
            eq: function (e) {
                var t = this.length,
                    n = +e + (e < 0 ? T : 0);
                вернуть this.pushStack(0 <= n && n < t ? [This[n]] : [])
            },
            end: function () {
                вернуть this.prevObject || this.constructor()
            },
            push: u,
            sort: t.sort,
            splice: t.splice
        }, S.extend = S.fn.extend = function () {
            var e, t, n, r, i, o, a = arguments[0] || {},
                s = 1,
                u = arguments.length,
                l = !1;
            for ("логическое значение" == typeof a && (l = a, a = arguments[s] || {}, s++), " объект " == typeof a || m(a) || (a = {}), s === u && (a = this, s - ); s < u; s++)
                if (null! = (e = arguments[s])) для(t in e) r = e[t], "__proto__"! == t && a! == r && (л && && г(S.isPlainObject(г) || (я = Array.isArray(г)))(п = а[т], о = я && Array.isArray(п)[]: ? ! ? я || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)): void 0! == r && (a[t] = r));
            вернуть a
        }, S.extend({
                expando: "jQuery" + (f + Math.random()).Replace(/ \ D /
                    g, ""),
                isReady: !0,
                error: function (e) {
                    throw new Error(e)
                },
                noop: function () {},
                isPlainObject: function (e) {
                    var t, n;
                    return !(!e || "[Object Object]"! == o.call(e)) && (!(т = г(е)) || "функции" == TypeOf(п = v.call(т, "конструктор") && t.constructor) && a.call(п) === л)
                },
                isEmptyObject: функция(e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                },
                globalEval: function (e, t, n) {
                    b(e, {
                        nonce: t && t.nonce
                    }, n)
                },
                каждый: function (e, t) {
                    var n, r = 0;
                    if (p(e)) {
                        for (n = e.длина; r < n; r++)
                            if (!1 === t.call(e[r], r, e[r])) break
                    }
                    иначе для(r в e) if (!1 === t.call(e[r], r, e[r])) break;
                    return e
                },
                makeArray: function (e, t) {
                    var n = t || [];
                    return null! = e && (p(Object(e))) ? S.merge(n, "string" == typeof e ? [E] : e) : u.call(n, e)),
                n
            }, inArray: function (e, t, n) {
                вернуть ноль == t ? -1 : i.call(t, e, n)
            }, merge: function (e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                вернуть e.length = i, e
            }, grep: function (e, t, n) {
                for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) ! == a && r.push(e[i]);
                return r
            }, map: function (e, t, n) {
                var r, i, o = 0,
                    a = [];
                if (p(e)) для(r = e.length; o < r; o++) null! = (i = t(e[o], o, n)) && a.push(i);
                иначе для(o in e) null! = (i = t(e[o], o, n)) && a.push(i);
                вернуть g(a)
            }, guid: 1, поддержка: y
        }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Булево число Строка Функция Массив Дата Символ ошибки объекта RegExp ".split(" "), функция(e, t) {
        n[" [object " + t + "] "] = t.toLowerCase()
    });
    var d = function (n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, S = "шипение" + 1 * новая дата,
            p = n.document,
            k = 0,
            r = 0,
            m = ue(),
            x = ue(),
            A = ue(),
            N = ue(),
            D = функция(e, t) {
                return e === t && (l = !0), 0
            },
            j = {}.hasOwnProperty,
            t = [],
            q = t.pop,
            L = t.push,
            H = t.push,
            O = t.slice,
            P = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            R = "проверяется | выбраны | асинхронные | автофокусировка | автовоспроизведение | управления | Defer | инвалиды | скрытый | ISMAP | цикл | кратны | открыты | только для чтения | требуется | область действия",
            М = "[\\ x20 \\ т \\ г \ \ п \\ е] "
        I = "(?:? \\\\ [\\ да-FA-F] {1,6}" + М + " | \\\\ [^ \\ г \\ п \\ е] | [\\ w-] | [^ \ 0 - \\ x7f]) + "
        W = "\\ [" + M + "* (" + I + ") (?:" + M + " * (? [* ^ $ |! ~] =) " + M + " * (?:'((?:. \\\\ | [^ \\\\']) *) '| \ "(( ? : .\\\\ | [ ^ \\\\\"]) *) \» | ( " + I + ")) |) " + M + " * \\] "
                    F = ":(" + I + ") (: \\ ((( '((?:?. \\\\ | [ ^ \\\\ ']) *)' | \ "(( ? : \\\\ | [ ^ \\\\\.
                        "]) *) \ ") | (( ? : .\\\\ | [ ^ \\\\()[\\]] | "+ W +") * ) | .*)\\) | )
                ", B = новый RegExp (M +" + ","
                g "), $ = новый RegExp ( " ^ " + M + " + | ((: ^ | [ ^ \\\\])( ? : ? .\\\\) * )
                " + M + " + $ ", "
                г "), _ = новый RegExp (" ^ " + M + " * , " + M + " * "), z = новый RegExp (" ^ " + M + " * ([ > +~] | " + M + ")
                " + M + " * ") , U = новый RegExp (M + " | > "), X = новый RegExp (F), V = новый RegExp (" ^ " + I + "
                $ "), G = {ID: новый RegExp (" ^ #(" + I + ")
                "), CLASS: новый RegExp (" ^ \\.(" + I + ")
                "), TAG: новый RegExp (" ^ (" + I + " | [ * ])
                "), ATTR: новый RegExp ( " ^ "+ W), PSEUDO: новый RegExp (" ^ "+ F), РЕБЕНОК: новый RegExp (" ^: (только | первый | последний | последний | nth | последний - последний) - (дочерний | типа)( ? : \\("+ M +" * (четные | нечетные | (([+ -] | )(\\д * ) п | )
                        "+ M +" * ( ? : ([+ -] | )
                            "+ M +" * (\\d + ) | ))
                    "+ M +" * \\) | )
                ","
                i "), bool: new RegExp (" ^ ( ? : "+ R +") $ ","
                i "), needsContext: новый RegExp (" ^ " + M + " * [ > +~] |: (четный | нечетный | eq | gt | lt | nth | первый | последний)( ? : \\(" + M + " * (( ? : - ? \\г)\\ д * )
                    "+ M +" * \\) | )( = [ ^ -] | $)», "я")
        }, Y = / html $ /
        I, Q = / ^ (?: input | select | textarea | button) $ /
        i, J = / ^ h \ d $ /
        i, K = / ^ [^ {] + \ {\ s * \ [native \ w /, Z = / ^ (?: # ([\ w -] +) | (\ w +) | \. ([\ w -] +)) $ /, ee = / [+ ~] /, te = new RegExp("\\ \\ [\\ да-FA-F] {1,6} " + М + " |? \\\\ ([^ \\ г \\ п \\ е])», "
            г "), п = функция (e, t) {var n = "
            0x " + e.slice (1) -65536; вернуть t || (n <0? String.fromCharCode (n + 65536): String.fromCharCode (п >> 10 | 55296,1023 & п | 56320))}, ре = / ([\ 0- \ x1f \ x7f] |? ^ - \ d) | ^ - $ | [^ \ 0- \ x1f \ x7f - \ uFFFF \ w -] / g, т.е. = function (e, t) {return t? "\
            0 " === e? "\
            ufffd ": e.slice (0, -1) + "\\
            " + e.charCodeAt (e.length-1) .toString (16) + "
            ": "\\
            " + e}, oe = function () {T ()}, ae = be (function (e) {return! 0 === e.disabled && "
            FIELDSET " === e.nodeName.toLowerCase ()}, {реж: "
            ParentNode ", следующая: "
            легенда "}); попытка {H.apply (т = O.call (р .childNodes), p.childNodes), т [p.childNodes.length] .nodeType} поймать (е) {Н = {применяются: t.length функция (е, т) {L.apply (е, O.call (t))}: функция (e, t) {var n = e.length, r = 0; while (e [n ++] = t [r ++]); e.length = n-1}}} функция se ( t, e, n, r) {var i, o, a, s, u, l, c, f = e && e.ownerDocument, p = e? e.nodeType: 9; if (n = n || [], "
            string "! = typeof t ||! t || 1! == p && 9! == p && 11! == p) вернуть n; if (! r && (T (e), e = e || C,Е)) {если (11! == р && (и = Z.exec (т))), если (I = U [1]) {если (9 === р) {если (! (А = e.getElementById (i))) вернуть n; if (a.id === i) вернуть n.push (a), n} else if (f && (a = f.getElementById (i)) && y (e, a) && a. id === i) вернуть n.push (a), n} else {if (u [2]) вернуть H.apply (n, e.getElementsByTagName (t)), n; if ((i = u [3 ]) && d.getElementsByClassName && e.getElementsByClassName) возвращает H.apply (n, e.getElementsByClassName (i)), n} if (d.qsa &&! N [t + "
            "] && (! v ||! v.test (t) ) && (1! == р || "
            объект "! == e.nodeName.toLowerCase ())) {если (с = т, е = е, 1 === р && (U.test (т) || z.test (т))) {(е = ee.test (т) && Ye (e.parentNode) || е) === е && d.scope || ((s = e.getAttribute ( "
            ID "))? s = s.replace (ре, то есть):. e.setAttribute ( "
            идентификатор ", S = S)), о = (л = ч (т)) длины, в то время (о -) л [о] = ( s? "#
            " + s: ": scope ") + "
            " + xe (l [o]); c = l.join (", ")} try {return H.apply (n, f.querySelectorAll (c)), n} catch (e) {N (t,! 0)} finally {s === S && e.removeAttribute ("
            id ")} }} return g (t.replace ($, "
            $ 1 "), e, n, r)} function ue () {var r = []; вернуть функцию e (t, n) {return r.push (t + "
            ")> b.cacheLength && delete e [r.shift ()], e [t +"
            "] = n}} функция le (e) {вернуть e [S] =! 0, e} функция ce (e) {var t = C.createElement ("
            fieldset "); try {return !! e (t)} catch (e) {return! 1} finally {t.parentNode && t.parentNode.removeChild (t), t = null}} функция fe ( e, t) {var n = e.split (" | "), r = n.length; тогда как (r -) b.attrHandle [n [r]] = t} функция pe (e, t) {var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex-t.sourceIndex; if (r) возвращает r; if (n), а (n = n.nextSibling) if (n == = t) return-1; return e? 1: -1} function de (t) {return function (e) {return "
            input " === e.nodeName.toLowerCase () && e.type === t}} функция he (n) {return function (e) {var t = e.nodeName.toLowerCase (); кнопка return ("
            input " === t || "
            "=== t) && e.type === n}} функция ge (t) {return function (e) {вернуть"
            форму "в e? e.parentNode &&! 1 === e.disabled?"
            label "в e? "
            label " в e.parentNode? e.parentNode.disabled === t: e.disabled === t: e.isDisabled === t || e.isDisabled! ==! t && ae (e) == = t: e.disabled === t: «метка» в e && e.disabled === t}} функция ve (a) {return le (function (o) {return o = + o, le (function (e, t) {var n, r = a ([], e.length, o), i = r.length; тогда как (i -) e [n = r [i]] && (e [n] =! ( t [n] = e [n]))})})} функция ye (e) {вернуть e && "
            undefined "! = typeof e.getElementsByTagName && e} для (e in d = se.support = {}, i = se .isXML = function (e) {var t = e.namespaceURI, n = (e.ownerDocument || e) .documentElement;return! Y.test (t || n && n.nodeName || "
            HTML ")}, T = se.setDocument = function (e) {var t, n, r = e? e.ownerDocument || e: p; возврат г! = С && 9 === r.nodeType && && r.documentElement (а = (С = г) .documentElement, Е =! I (C), р! = С && (п = C.defaultView) && n.top! == п && ( n.addEventListener? n.addEventListener ("
            unload ", oe,! 1): n.attachEvent && n.attachEvent ("
            onunload ", oe)), d.scope = ce (function (e) {вернуть a.appendChild (e) .appendChild (C.createElement ("
            div ")), "
            undefined "! = typeof e.querySelectorAll &&! e.querySelectorAll (": scope fieldset div "). length}), d.attributes = ce (function (e) { return e.className = "
            i ",! e.getAttribute ("
            className ")}), d.getElementsByTagName = ce (function (e) {return e.appendChild (C.createComment ("
            ")) ,! e.getElementsByTagName ( " * ").length}), d.getElementsByClassName = K.test (C.getElementsByClassName), d.getById = ce (function (e) {вернуть a.appendChild (e) .id = S,! C.getElementsByName ||! C.getElementsByName (S) .length}), d.getById? (B.filter.ID = function (e) {var t = e.replace (te, ne); return function (e) {return e.getAttribute ("
            id ") ) === t}}, b.find.ID = function (e, t) {if ("
            undefined "! = typeof t.getElementById && E) {var n = t.getElementById (e); вернуть n? [n] : []}}) :( b.filter.ID = function (e) {var n = e.replace (te, ne); return function (e) {var t = "
            undefined "! = typeof e.getAttributeNode && e. getAttributeNode ("
            id "); return t && t.value === n}}, b.find.ID = function (e, t) {if ("
            undefined "! = typeof t.getElementById && E) {var n, r, i , о = t.getElementById (е), если (о) {если ((п = o.getAttributeNode ( "
            ID ")) && n.value === е) возвращение [о]; I = t.getElementsByName (е) , г = 0;в то время как (о = я [г ++]), если ((п = o.getAttributeNode ( "
            ID ")) && n.value === е) возвращение [о]} возвращение []}}), b.find.TAG = д .getElementsByTagName? function (e, t) {return "
            undefined "! = typeof t.getElementsByTagName? t.getElementsByTagName (e): d.qsa? t.querySelectorAll (e): void 0}: function (e, t) { var n, r = [], i = 0, o = t.getElementsByTagName (e); if (" * " === e) {while (n = o [i ++]) 1 === n.nodeType && r.push (n); return r} return o}, b.find.CLASS = d.getElementsByClassName && function (e, t) {if ("
            undefined "! = typeof t.getElementsByClassName && E) return t.getElementsByClassName (e)}, s = [ ], v = [], (d.qsa = K.test (C.querySelectorAll)) && (ce (function (e) {var t; a.appendChild (e) .innerHTML = " < a id = '" + S + "' > < /a> <select id ='" + S + "- \ r \\ 'msallowcapture =' '>> option selected =' '> <Опция / > < / выберите> "e.querySelectorAll ( "[msallowcapture ^ = '']"). Длина && v.push ( "[* ^ $] =" + M + "* (?: '' | \" \" ) "), e.querySelectorAll (" [выбран] ") длина || v.push (". \\ [ "+ M +" * (?: значение | "+ R +") "), e.querySelectorAll (" [ ID ~ = "+ S +" - ") длина || v.push] (" ~ = "), (т = C.createElement (" вход ")) SetAttribute (." название», ""), е. AppendChild (т), e.querySelectorAll ( "[имя = '']"). длина || v.push ( "\\ [" + M + "* название" + M + "* =" + M + "* (?: '' | \ "\") "), e.querySelectorAll (":. проверено ") длина || v.push (": проверено "), e.querySelectorAll (" а # "+ S +" + * ") длина || v.push ( "#. + [+ ~] "), e.querySelectorAll (" \\\ ф"), т.push ("[\\ r \\ n \\ f]")}), ce (function (e) {e.innerHTML = "<a href='' disabled='disabled'> </a > < выбрать отключен = 'disabled' > < option / > < / select> "; var t = C.createElement (" input "); t.setAttribute (" type "," hidden "), e.appendChild (t) .setAttribute (" название», "D"), e.querySelectorAll ( "[имя = d]".) длина && v.push ( "имя" + M + "*?! [* ^ $ |! ~] ="), 2 == е .querySelectorAll. ( ": включено") длина && v.push ( ": включено", ": отключено"), a.appendChild (е) .disabled = 0,2 == e.querySelectorAll! ( ": отключено"). длина && v.push ( ": включено", ": отключено"), e.querySelectorAll ( "* ,: х"), v.push ( "*:.")})), (d.matchesSelector = K.test (с = a.matches || a.webkitMatchesSelector || а.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && с (функция (е) {d.disconnectedMatch = c.call(е, "*"), c.call(е, "[s = '']: x "), s.push("! = ", F)}), v = v.length && new RegExp (v.join (" | ")), s = s.length && new RegExp (s.join (" | ") ), t = K.test (a.compareDocumentPosition), y = t || K.test (a.contains)? function (e, t) {var n = 9 === e.nodeType? e.documentElement: e , r = t && t.parentNode; вернуть e === r ||! (! r || 1! == r.nodeType ||! (n.contains? n.contains (r): e.compareDocumentPosition && 16 & e.compareDocumentPosition (r )))}:!? функция (е, т) {если(т), а(т = t.parentNode), если(т === е) возврат 0; возврат 1}, D = т функция (е, т ) {if (e === t) return l =! 0,0; var n =! e.compareDocumentPosition-! t.compareDocumentPosition; return n || (1 & (n = (e.ownerDocument || e) == ? (t.ownerDocument || т) e.compareDocumentPosition (т): 1) || d!.? SortDetached && t.compareDocumentPosition (е) === п е == С || e.ownerDocument == р && у (р, е) - 1: т == С || t.ownerDocument == р && у (р, т)? 1: u? P (u, e) -P (u, t): 0: 4 & n? -1: 1)}: функция (e, t) {if (e === t) вернуть l =! 0, 0; var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t]; если (! I ||! O), вернуть e == C? -1 : t == C? 1: i? -1: o? 1: u? P (u, e) -P (u, t): 0; если (i === o) вернуть pe (e, t) ; п = е, в то время как (п = n.parentNode) a.unshift (п); п = т, в то время как (п = n.parentNode) s.unshift (п), в то время (а [г] === ы [ r]) r ++; return r? pe (a [r], s [r]): a [r] == p? -1: s [r] == p? 1: 0}), C}, se .matches = function (e, t) {return se (e, null, null, t)}, se.matchesSelector = function (e, t) {if (T (e), d.matchesSelector && E &&! N [t + "" ] && (! s ||! s.test (t)) && (! v ||! v.test (t))) try {var n = c.call (e, t); if (n || d .disconnectedMatch || e.document && 11! == e.document.nodeType) return n} catch (e) {N(t, !0)} return 0 <se ({возвращение(e.ownerDocument || е)! = С && Т(е), у(е, т)}, se.attr = функция (е, т) {(e.ownerDocument || e)! = C && T(e); var n = b.attrHandle [t.toLowerCase ()], r = n && j.call (b.attrHandle, t.toLowerCase ())? n (e, t,! E): void 0; вернуть void 0! == r? r: d.attributes ||! E? e.getAttribute (t) :( r = e.getAttributeNode (t)) && r.specified? r.value: null}, se .escape = function (e) {return (e + ""). replace (re, т.е.)}, se.error = function (e) {throw new Error ("Синтаксическая ошибка, нераспознанное выражение:" + e)}, se .uniqueSort = function (e) {var t, n = [], r = 0, i = 0; если (l =! d.detectDuplicates, u =! d.sortStable && e.slice (0), e.sort (D) ), л) {в то время (т = е [я ++]) === т е [I] && (г = n.push (я)), тогда как (г -) e.splice (п [г], 1 )} return u = null, e}, o = se.getText = function (e) {var t, n = "", r = 0, i = e.nodeType; if (i) {if (1 === i || 9 === i || 11 === i) {if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n + = o (e)} иначе, если (3 === i || 4 === i) вернуть e.nodeValue } else while (t = e [r ++]) n + = o (t); return n}, (b = se.selectors = {cacheLength: 50, createPseudo: le, match: G, attrHandle: {}, find: {}, относительный: {">": {dir: "parentNode", first:! 0}, "": {dir: "parentNode"}, "+": {dir: "previousSibling", first:! 0}, "~": {dir: "previousSibling"}}, preFilter: {ATTR: function (e) {return e [1] = e [1] .replace (te, ne), e [3] = (e [3 ] || e [4] || e [5] || ""). replace (te, ne), "~ =" === e [2] && (e [3] = "" + e [3 ] + ""), e.slice (0,4)}, РЕБЕНОК: function (e) {return e [1] = e [1] .toLowerCase (), "nth" === e [1] .slice ? (0,3) (е [3] || se.error (е [0]), е [4] = + (е [4] е [5] + (е [6] || 1): 2 * ( "даже" === е [3] || "нечетные" === е [3])), е [5] = + (е [7] + е [8] ||»нечетное "=== e [3])): e [3] && se.error (e [0]), e}, PSEUDO: function (e) {var t, n =! e [6] && e [2] ; вернуть G.CHILD.test (e [0])? null: (e [3]? e [2] = e [4] || e [5] || "": n && X.test (n) && ( т = ч (п,! 0)) && (т = n.indexOf ( ")", n.length-т) -n.length) && (е [0] = е [0] .slice (0, т ), e [2] = n.slice (0, t)), e.slice (0,3))}}, фильтр: {TAG: function (e) {var t = e.replace (te, ne) .toLowerCase (); return "*" === e? function () {return! 0}: function (e) {return e.nodeName && e.nodeName.toLowerCase () === t}}, CLASS: function (e ) {var t = m [e + ""]; вернуть t || (t = new RegExp ("(^ |" + M + ")" + e + "(" + M + "| $)")) && m (e, function (e) {return t.test ("string" == typeof e.className && e.className || "undefined"! = typeof e.getAttribute && e.getAttribute ("class") || "")})}}, ATTR:function (n, r, i) {вернуть функцию (e) {var t = se.attr (e, n); вернуть null == t? "! =" === r:! r || (t + = " », "=" === г т === я? "! =" === г т == я?! "? =" === г я && 0 === t.indexOf (я) : "* =" === г я && - 1 <t.indexOf (<({var y = "nth"! == h.slice (0,3 ), m = "last"! == h.slice (-4), x = "of-type" === e; return 1 === g && 0 === v? function (e) {return !! e .parentNode}: function (e, t, n) {var r, i, o, a, s, u, l = y! == m? "nextSibling": "previousSibling", c = e.parentNode, f = !! х && e.nodeName.toLowerCase (), р = п && х, д = 1;!, если (с) {если(у) {в то время как (л) {а = е;в то время как (A = A [L]), если (х a.nodeName.toLowerCase () === е: 1 === a.nodeType)! возвращение 1; U = L = "только" === ч && у && "NextSibling"}} возвращает 0, если (и = [м c.firstChild: c.lastChild], м && р)! {d = (s = (г = (г = (о = (а = с)[S] | | (а[S] = {}))[a.uniqueID] || (о[a.uniqueID] = {}))[ч] || [])[0] === к && г[1]) && г[2], A = s && c.childNodes[с], в то время (а = ++ с && && а [л] || (d = s = 0) || u.pop ()), если (1 === a.nodeType && + + d && a === e) {i[h] = [k, s, d]{})) [a.uniqueID] || (о [a.uniqueID] = {})) [ч] || []) [0] === к && г [1]) ,! 1 === г), а (а = ++ с && && а [л] || (d = s = 0) || u.pop ()), если ((х? a.nodeName.toLowerCase () === F: 1 === a.nodeType) && ++ && д (р && ((я = (о = [S] || (а [S] = {})) [a.uniqueID] || (о [а .uniqueID] = {})) [ч] = [K, d]), A === е)) перерыва; возвращение (D- = v) === г || д% г == 0 && 0 <= d /
            г
        }
    }
}, пСЕВДО: function (e, o) {
var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("неподдерживаемое псевдо:" + e);
вернуть a[S] ? a(o) : 1 < a.length ? {
    var n, г = а(е, о),
        I = r.length;!,
    а(я - ) е[п = Р(е, г[г])] = (т[п] = г[г])
}): function (e) {
return a(e, 0, t)
}): a
}
}, псевдо: {
not: le(function (e) {
    var r = [],
        i = [],
        s = f(e.replace($, "$ 1"));
    return s[S] ? le(function (e, t, n, r) {
        var i, o = s(e, null, r, []),
            a = e.length;
        while (a - )(i = o[a]) && (e[a] = !(t[a] = i))
    }) : function (e, t, n) {
        return r[0] = e, s(r, null, n, i), r[0] = null, !I.pop()
    }
}),
имеет: le(function (t) {
        return function (e) {
            return 0) < se(t, e).length
    }
}), содержит: le(function (t) {
return t = t.replace(te, ne),
    function (e) {
        return -1 < (e.textContent || o(e)).indexOf(t)
    }
}), lang: le(function (n) {
return V.test(n || "") || se.error("неподдерживаемый lang:" + n), n = n.replace(te, ne).toLowerCase(),
    function (e) {
        var t;
        do {
            if (t = E ? e.lang : e.getAttribute("xml: lang") || e.getAttribute("языки")) возвращение(т = t.toLowerCase()) === п || 0 === t.indexOf(п + "-")
        }
        в то время как((е = e.parentNode) && 1 === е.nodeType);
        return !1
    }
}), target: function (e) {
var t = n.location && n.location.hash;
return t && t.slice(1) === e.id
}, root: function (e) {
return e === a
}, focus: function (e) {
return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href | | ~e.tabIndex)
}, включено: ge(!1), отключено: ge(!0), проверено: function (e) {
var t = e.nodeName.toLowerCase();
вернуть« input» === t && !!e.checked || "option" === t && !!e.selected
}, selected: function (e) {
вернуть e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
}, пусто: функция(е) {
для(е = e.firstChild; е; е = e.nextSibling), если(e.nodeType < 6) return !1;
return !0
}, родитель: function (e) {
return !B.pseudos.empty(e)
}, заголовок: function (e) {
return J.test(e.nodeName)
}, ввод: function (e) {
return Q.test(e.nodeName)
}, кнопка: function (e) {
var t = e.nodeName.toLowerCase();
вернуть« input» === t && «button» === e.type || "button" === t
}, text: function (e) {
var t;
вернуть "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (т = e.getAttribute("тип")) || "текст" === t.toLowerCase())
}, во - первых: ве(функция() {
возвращение[0]
}), последнее: ве(функция(е, т) {
возвращение[т - 1]
}), экв: ве(функция(е, т, п) {
возвращение[п < 0 п + т: п]
}), даже: ве(функция(е, т) {
for (var n = 0; n < t; n + = 2) e.push(n);
return e
}), нечетное: ve(function (e, t) {
    for (var n = 1; n < t);
    n + = 2) e.push(n);
return e
}), lt: ve(функция(e, t, n) {
for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= -r;) e.push(r);
return e
}), gt: ve(функция(e, t, n) {
for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
вернуть e
})
}
}).pseudos.nth = b.pseudos.eq, {
radio: !0,
флажок: !0,
файл: !0,
пароль: !0,
изображение: !0
}) b.pseudos[e] = de(e);
для(e в {
    submit: !0,
    сброс: !0
}) b.pseudos[e] = he(e);

function me() {}

function xe(e) {
    for (var t = 0, n = e.length, r = ""; t < n; t++) r + = e[t].value;
    return r
}
функция be(s, e, t) {
    var u = e.dir,
        l = e.next,
        c = l || u,
        f = t && "parentNode " === c,
        p = r++;
    вернуть функцию e.first ? (e, t, n) {
        while (e = e[u]), если(1 === e.nodeType || f) вернуть s(e, t, n);
        return !1
    } : функция(e, t, n) {
        var r, i, o, a = [k, p];
        if (n) {
            while (e = e[u])
                if ((1 === e.nodeType || f) && s(e, t, n)) возвращает!0
        }, в то время как(e = e[u]) if (1 === e.nodeType || f)
            if (I = (о = е[S] || (е[S] = {}))[e.uniqueID] || (о[e.uniqueID] = {}), л && л === e.nodeName.toLowerCase()) e = e[u] || e;
            else {
                if ((r = i[c]) && r[0] === k && r[1] === p) вернуть a[2] = r[2];
                если((я[с] = а)[2] = S(е, т, п)) возврат 0
            } возвращение!1
    }
}
функция we(i) {
    return 1 < i.length ? {
        var r = i.length;
        while (r - )
            if (!I[r](e, t, n)) return !1;
        return !0
    } : функция i[0]
}
Te(e, t, n, r, i) {
    для( < и; s++), (!о = е[с]) && (п && п(о, г, я) || (a.push(о), л && t.push(ы)));
    вернуть функцию
}
Ce(d, h, g, v, y, e) {
    вернуть v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le(функция(e, t, n, r) {
        var i, o, a, s = [],
            u = [],
            l = t.length,
            c = e || функция(e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                вернуть n
            }(h || "*", n.nodeType[N]: N, []),
            е = е д || && ч с: ! ? Те(C, S, д, п, г),
            р = г у || (е д: ? л || v)[] : т: F;
        если(г && г(е, р, п, г), v) {
            I = Te(р, и), V(я, [], N, R), O ? = i.length, в то время(о - )(а = я[о]) && (!р[и[о]] = (е[и[о]] = а))
        }, если(е) {
            если(Y || г) {
                если(у) {
                    I = [], O = p.length, в то время(O - )(а = р[O]) && i.push(п[о] = а);
                    у(нуль, р = [], I, R)
                }
                о = p.length, в то время(о - )(а = р[о]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(T[i] = a))
            }
        }
        иначе p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p)
    })
}
функция Ee(e) {
        для({
            return e === i
        }, a, !0), l = be(function (e) {
            return -1 < P(i, e)
        }, a, !0), c = [function (e, t, n) {
            var r = !o && (n || t! == w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
            вернуть i = null, r
        }];
        s < r;
        s++) if (t = b.relative[e[s].type]) c = [be(we(c), t)];
    else {
        if ((т = b.filter[е[с].type].Нанесите(нуль, е[с].matches))[S]) {
            для(п = ++с; п < г; п++), если(б.relative[e[n].type]) break;
            вернуть Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
                value: "" === e[ ? с - 2].type "*": "".
            })) заменить($ "$ 1"), T, s < N && Ee(e.slice(с, п)), п < г && Ee(е = е.срез(п)), п < г && х(е))
        }
        с.push(t)
    }
return we(c)
}
return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function (e, t) {
    var n, r, i, o, a, s, u, l = x[e + ""];
    если(l) вернуть t ? 0 : l.slice(0);
    a = e, s = [], u = b.preFilter;
    while (a) {
        for (o в n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), п = 1, (г = z.exec(а)) && (п = r.shift(), i.push({
                значение: п,
                тип: г[0].Надеть($»«)
            }), а = a.slice(n.length)), b.filter) !(г = о[о].exec(а)) || и[о] && !(г = и[о](г)) || (п = r.shift(), i.push({
            значение: п,
            тип: о,
            совпадений: г
        }) !, а = a.slice(n.length));
        если(п) break
    }
    return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
}, f = se.compile = function (e, t) {
    var n, v, y, m, x, r, i = [],
        o = [],
        a = A[e + ""];
    if (!a) {
        t || (t = h(e)), n = t.length;
        при этом(п - )(а = Ee(т[п]))[S] i.push(а): o.push(а);
        (а = А(е, (v = о, т = 0 < ( < v.length, r = функция(e, t, n, r, i) {
                var o, a, s, u = 0,
                    l = "0",
                    с = е && [],
                    F = [],
                    р = ш,
                    д = е || х && b.find.TAG("*", я),
                    ч = к + = NULL == р 1: Math.random() || .1,
                    г = D.Length,
                    ибо(я && (ш = т == С || т || я); !л == г && нуль = (о = д[л]); !л++) {
                        если(х && о) {
                            а = 0, т || o.ownerDocument == С || (!Т(о), п = Е), в то время(с = v[A++]), если(s(O, т || С, п)) {
                                r.push(о);
                                перерыв
                            }
                            я && (к = з)
                        }
                        т && ((о = ы && о) && и - , е && c.push(о) !)
                    }, если(и + = л, м && л == у!) {
                        а = 0, в то время(с = у[A++]) с(в, е, т, п), если(е) {
                            если(0 < и), а(л - ) с[л] || F[л] || (е[л] = q.call(г));
                            !е = Те(е)
                        }
                        H.apply(г, е), я && е && 0 < f.length && 1 < и + y.length && se.uniqueSort(г)
                    }
                return i && (k = h, w = p), c
            }, m ? le(r) : r))).selector = e
        }
        return a
    }, g = se.select = function (e, t, n, r) {
        var i, o, a, s, u, l = "функция" == typeof e && e,
            c = !r && h(e = l.selector || e);
        if (n = n || [], 1 === c.length) {
            если(2 < (о = с[0] = с[0].slice(0)).длина && "ИД" === (а = о[0]).типа && 9 === t.nodeType && Е && b.relative[о[1].type]) {
                если(!(т = (b.find.ID(a.matches[0].Надеть(т, п), т) || [])[0])) return n;
                l && (t = t.parentNode), e = e.slice(o.shift().Value.length)
            }
            i = G.needsContext.test(e) ? 0 : o.length, в то время(я - ) {
                если(а = O[I], b.relative[с = a.type]) перерыва;
                если((и = b.find[с]) && (г = и(a.matches[0].Надеть(т, п), ee.test(о[0].type) && вы(t.parentNode) || т))) {
                    если(o.splice(я, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
                    break
                }
            }
        }
        return (l || f(e, c))(r, t, !E, n, !т || ee.test(е) && вы(t.parentNode) || т), п
    }, d.sortStable = ДЕЛЕНИЕ("").рода(D), .join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) {
        return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
    }), ce(function (e) {
        return e.innerHTML = "<a href='#'> </a>", "#" === e.firstChild.getAttribute("href")
    }) || fe("type | href | height | width", функция(e, t, n) {
        if (!n) возвращает e.getAttribute(t, "type" == = t.toLowerCase() ? 1 : 2)
    }), d.attributes && ce(function (e) {
        return e.innerHTML = "<input />", e.firstChild.setAttribute("value", ""), " " === e.firstChild.getAttribute(" значение ")
    }) || Fe(" значение», функция (е, т, п) {если(!п && "
        вход " === e.nodeName.toLowerCase () ) return e.defaultValue}), ce (function (e) {return null == e.getAttribute ("
        disabled ")}) || fe (R, функция (e, t, n) {var r; if (! ! п) возврат 0 === е [т] t.toLowerCase () :( г = e.getAttributeNode (т)) && r.specified r.value:? NULL}), как таковые} (С); S.find = д, S.expr = d.selectors, S.expr [ ": "] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape; var h = function (e, t, n) {var r = [], i = void 0! == n; while ((e = e [t]) && 9! == e.nodeType ) if (1 === e.nodeType) {if (i && S (e) .is (n)) break; r.push (e)} return r}, T = function (e, t) {for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e! == t && n.push (e); вернуть n}, k = S.expr.match.needsContext; функция A (e, t) {return e.nodeName && e.nodeName.toLowerCase () === t.toLowerCase ()} var N = / ^ <(<\ / \ 1> |) $ / i; функция D (e, n, r) {return m (n)? S .grep (e, function (e, t) {return !! n.call (e, t, e)! == r}): n.nodeType? S.grep (e, function (e) {return e = == n! == r}): "
        строка "! = typeof n? S.grep (e, function (e) {return-1 <i.call ({var r = t [0]; вернуть n && (e = ": not(" + e + ")
        "), 1 == = t.length && 1 === r.nodeType? S.find.matchSelector (r, e)? [r]: []: S.find.matches (e, S.grep (t, function (e) {return 1 === e.nodeType}))}, S.fn. extend ({find: function (e) {var t, n, r = this.length, i = this; if ("
        string "! = typeof e) возвращает this.pushStack (S (e) .filter (function ()) {для(Т = 0, T < г, Т++), если(S.contains(я[т], это)) возврат 0!})), для (п = this.pushStack ([]), т = 0; t <r; <r?{вернуть this.pushStack (D (this , e || [] ,! 1))}, а не: function (e) {return this.pushStack (D (this, e || [] ,! 0))}, is: function (e) {return! ! D (this, "
        string " == typeof e && k.test (e)? S (e): e || [] ,! 1) .length}}); var j, q = / ^ (?: \ S * (<[{var r, i; if (! e) вернуть это; if (n = n || j, "
        string " == typeof e) {if (! (r = " < " === e [0] && " > " == = е [e.length-1] && 3 <= e.length [нуль, е, нулевая]: д.! Exec (е)) || г [1] && г) возвращение т || t.jquery (т || п) .find (е):!? This.constructor (т) .find (е), если (г [1]) {if (t = t instanceof S? T [0]: t, S.merge (this, S.parseHTML (r [1], t && t.nodeType? T.ownerDocument || t: E,! 0 )), N.test (r [1]) && S.isPlainObject (t)) для (r в t) m (this [r])? This [r] (t [r]): this.attr (r, t [r]); вернуть this} return (i = E.getElementById (r [2])) && (this [0] = i, this.length = 1), this} вернуть e.nodeType? (this [0 ] = e, this.length = 1, this): m (e)? void 0! == n.ready? n.ready (e): e (S): S.makeArray (e, this)}). прототип = S.fn, j = S (E); var L = / ^ (?: родители | предыдущая (?: до | все)) /, H = {children:! 0, содержимое:! 0, следующее :! 0, prev:! 0}; функция O (e, t) {while ((e = e [t]) && 1! == e.nodeType); вернуть e} S.fn.extend ({has: function (e ) {var t = S (e, this), n = t.length; вернуть this.filter (function () {for (var e = 0; e <n; {var n, r = 0, i = this.length, o = [],a = "
        string "! = typeof e && S (e); if (! k.test (e)) для (; r <i; <11 && (-1 <a.index ({o.push(п); разрыв } return this.pushStack (1 <o.length?{return e? "
        string " == typeof e? i.call (S (e), это [0]): i.call (это, e.jquery е [0]: е): это [0] && это [0] .parentNode this.first () возобладать () длина:?.. -1} , add: function (e, t) {вернуть this.pushStack (S.uniqueSort (S.merge (this.get (), S (e, t))))}, addBack: function (e) {вернуть this. add (null == e? this.prevObject: this.prevObject.filter (e))}}), S.each ({parent: function (e) {var t = e.parentNode; вернуть t && 11! == t. nodeType? t: null}, parent: function (e) {return h (e, "
        parentNode ")}, parentUntil: function (e, t, n) {return h (e, "
        parentNode ", n)},next: function (e) {return O (e, "
        nextSibling ")}, prev: function (e) {return O (e, previousSibling ")
}, nextAll: function (e) {
    вернуть h(e, " nextSibling ")
}, prevAll: function (e) {
    return h(e, " previousSibling ")
}, nextUntil: function (e, t, n) {
    return h(e, " nextSibling ", n)
}, prevUntil: function (e, t, n) {
    return h(e, "previousSibling", n)
}, братья и сестры: function (e) {
    return T((e.parentNode || {}).firstChild, e)
}, дети: функция(e) {
    return T(e.firstChild)
}, содержимое: function (e) {
    return null! = e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes))
}
}, функция(r, i) {
S.fn[r] = функция(e, t) {
    var n = S.map(this, i, e);
    вернуть« До»! == r.slice(-5) && (t = e), t && «string» == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n)
}
});
var P = / [^ \ x20 \ t \ r \ n \ f] + /
g;
функция R(e) {
    вернуть e
}
функция M(e) {
    throw e
}
функция I(e, t, n, r) {
    var i;
    try {
        e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
    } catch (e) {
        n.apply(void 0, [e])
    }
}
S.Callbacks = function (r) {
        var e, n;
        r = "string" == typeof r ? (e = г, п = {}, S.each(e.match(Р) || [], функция(е, т) {
            п[т] = 0!
        }), п) : S.extend({}, r);
        var i, t, o, a, s = [],
            u = [],
            l = -1,
            c = function () {
                для(a = a || r.once, o = i = !0; u.length; л = -1) {
                    т = u.shift(), в то время(++л < s.length) 1 === s[L].Нанесите(т[0], т[1] !) && r.stopOnFalse && (л = s.length, т = 1)
                }
                r.memory || (т = 1), г = 1, а && (s = T[]: !!! ? "")
            },
            F = {
                add: function () {
                    return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
                        S.each(e, function (e, t) {
                            m(т) ? r.unique && ф.имеет(т) || s.push(т) : т && t.length && "строка" == ш(т) && п(т)
                        })
                    }(аргументы), т && я && с()), это
                },
                удалить: !функцию() {
                    вернуть S.each(аргументы, функция(e, t) {
                        var n;
                        while (-1 < (n = S.inArray(t, s, n))) s.splice(n, 1), n <= l && l -
                    }), это
                },
                имеет: function (e) {
                    return e ? -1 < S.inArray( < s.length
                        },
                        пусто : function () {
                            return s && (s = []), это
                        },
                        отключить: function () {
                            return a = u = [], s = t = "", это
                        },
                        отключено: function () {
                            return !s
                        },
                        lock: function () {
                            return a = u = [], t || i || (s = t = ""), это
                        },
                        заблокировано: function () {
                            return !!a
                        },
                        fireWith: function (e, t) {
                            return a || (т = [. ? е, (т = т || []) срез t.slice() : т], u.push(т), я || с()), это
                        },
                        огонь: функция() {
                            return f.fireWith(this, arguments), this
                        },
                        fired: function () {
                            return !!o
                        }
                };
                return f
            },
            S.extend({
                    Отложено: function (e) {
                        var o = [
                            ["notify », "
                                прогресс ", S.Callbacks ( "
                                память "), S.Обратные вызовы («память»), 2], [«разрешить», «сделано», S.Callbacks («однажды память»), S.Callbacks («однажды память»), 0, «разрешено»], [«отклонить» , "
                                fail ", S.Callbacks ("
                                однажды память "), S.Callbacks ("
                                однажды память "), 1, "
                                отклонено "]], i = "
                                в ожидании ", a = {состояние: функция () {вернуть i }, всегда: function () {return s.done (arguments) .fail (arguments), это}, «catch»: function (e) {return a.then (null, e)}, pipe: function () { var i = аргументы; вернуть S.Deferred (function (r) {S.each(o, function (e, t) {
                                var n = m(i[t[4]]) && i[t[4]];s[t[1]](function () {
                                        var e = n && n.apply(this, arguments);
                                        e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).Сбой(r.reject) : г[т[0] + "
                                            С "] (этого, н [е]: аргументы)})}), i = NULL}) обещание ()}, то:. функции (T , n, r) {var u = 0; функция l (i, o, a,s) {return function () {var n = this, r = аргументы, e = function () {var e, t; if (! (i <u)) {if ((e = a.apply (n, r )) === o.promise ()) выбрасывать новую ошибку TypeError ("
                                            Собственно разрешаемость "); t = e && ("
                                            object " == typeof e || "
                                            function " == typeof e) && e.then, m ( т)? с? t.call (е, л (и, о, R, s), л (и, о, M, s)) :( у ++ t.call (е, л (и, о, R , s), l (u, o, M, s), l (u, o, R, o.notifyWith))) :( a! == R && (n = void 0, r = [e]), ( с || o.resolveWith) (п, г))}}, т = ы е: функция () {попытка {е ()} поймать (е) {S.Deferred.exceptionHook && S.Deferred.exceptionHook (д, т .stackTrace), u <= i + 1 && (a! == M && (n = void 0, r = [e]), o.rejectWith (n, r))}}; i? t () :( S. Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook ()), C.setTimeout (t))}} возвращает S.Deferred (function (e) {o [0] [3] .add (l (0, е, т (г) г: Р, e.notifyWith)), о [1] [3] .add (л (0, е, м (т) т: R)), о [2] [3 ] .add (л (0, е, т (п) п: M +)).}) обещание ()}, обещание:function (e) {return null! = e? S.extend (e, a): a}}, s = {}; вернуть S.each (o, function (e, t) {var n = t [2] , г = т [5]; а [т [1]] = n.add, г && n.add (функция () {I = г}, о [3-е] [2] .disable, о [3-е ] [3] .disable, о [0] [2] .lock, о [0] [3] .lock), n.add (т [3] .fire), S [T [0]] = функция ( ) {return s [t [0] + "
                                            With "] (this === s? void 0: this, arguments), this}, s [t [0] + "
                                            With "] = n.fireWith}), a.promise (s), e && e.call (s, s), s}, когда: function (e) {var n = arguments.length, t = n, r = Array (t), i = s.call ( arguments), o = S.Deferred (), a = function (t) {return function (e) {r [t] = this, i [t] = 1 <arguments.length? s.call (arguments): e .!, - п || o.resolveWith (г, я)}}, если (п <= 1 && (I (е, o.done (а (т)) решимость, o.reject, п), "
                                            ожидание "=== o.state () || m (i [t] && i [t] .then))) return o.then (); в то время как (t -) I (i [t], a (t) , o.reject); return o.promise ()}}); var W = / ^ (Eval | Внутренний | Диапазон | Ссылка | Синтаксис | Тип | URI) Ошибка $ /; S.Deferred.exceptionHook = function (e, t) {C.console && C.console.warn && e && W.test (e.name) && C.console.warn ("
                                            исключение jQuery.Deferred: " + e.message, e.stack, t)} , S.readyException = function (e) {C.setTimeout(function () { throw e })}; var F = S.Deferred (); function B () {E.removeEventListener("
                                            DOMContentLoaded ", B), C .removeEventListener ("
                                            load ", B), S.ready ()} S.fn.ready = function (e) {return F.then (e) ["
                                            catch "] (function (e) {S.readyException(e)}), это}, S.extend ({isReady: 1, readyWait: 1, готов: функция (е) {(0 === е - S.readyWait:!? S.isReady) || (S .isReady = 0) == 0 && е <-! S.readyWait || F.resolveWith (е, [S])}}), S.ready.then = F.then, "
                                            полный " === е. readyState || "
                                            загрузка "! == E.readyState &&! E.documentElement.doScroll? C.setTimeout (S.ready) :( E.addEventListener ( "
                                            DOMContentLoaded ", B), C.addEventListener ("
                                            load ", B)); var $ = function (e, t, n, r, i, o, a) {var s = 0, u = длина e, l = null == n; if ( "
                                            объект " === w (n)) для (s в i =! 0, n) $ (e, t, s, n [s] ,! 0, o, a), иначе if (void 0! = = г && (я =! 0, т (г) || (а =! 0), л && (а? (t.call (е, г), т = NULL) :( л = т, т = функция (е , t, n) {вернуть l.call (S (e), n)})), t)) для (; s <u; {return t.toUpperCase ()} функция X (e) {return e.replace (_, "
                                            ms - "). replace (z, U)} var V = function (e) {return 1 === e.nodeType || 9 === e.nodeType ||! + e.nodeType}; функция G () {this.expando = S.expando + G.uid++} G.uid = 1, G.prototype = {cache: function (e) {var t = e [this.expando]; вернуть t || (t = Object.create (нуль), V (е) && (e.nodeType е [this.expando] = т: Object.defineProperty (е, this.expando, {значение: т, настраивается: 0}))), т}, набор: функция (е, т,n) {var r, i = this.cache (e); if ("
                                            строка " == typeof t) i [X (t)] = n; еще для (r in t) i [X (r)] = t [r]; return i}, get: function (e, t) {return void 0 === t? this.cache (e): e [this.expando] && e [this.expando] [X (t) ]}, access: function (e, t, n) {return void 0 === t || t && "
                                            string " == typeof t && void 0 === n? this.get (e, t) :( this.set (e, t, n), void 0! == n? n: t)}, remove: function (e, t) {var n, r = e [this.expando]; if (void 0! == r ) {if (void 0! == t) {n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) в r? [t]: t.match ( P) || []). Length; while (n -) delete r [t [n]]} (void 0 === t || S.isEmptyObject (r)) && (e.nodeType? E [this .expando] = void 0: удалить e [this.expando])}}, hasData: function (e) {var t = e [this.expando]; вернуть void 0! == t &&! S.isEmptyObject (t)} }; var Y = новая G, Q = новая G, J = / ^ (?: \ {[{ var r, i; if(void 0 === n && 1 === e.nodeType) if (r = "
                                            данных - "+ t.replace (К," - $ & ") строка " == TypeOf(п = e.getAttribute(г))) {
                                            попытка {
                                                п = " истина" === (toLowerCase(), .
                                                    " я = п) || "
                                                    ложь " == я && ( "
                                                    нулевой " === я нуль: я === + я + "
                                                    " + я: J.test (я)! JSON.parse (я): i)} catch (e) {} Q.set (e, t, n)} else n = void 0; return n} S.extend ({hasData: function (e) {return Q.hasData (e) || Y.hasData (e)}, data: function (e, t, n) {return Q.access (e, t, n)}, removeData: function (e, t) {Q.remove(e, t)} , _data: function (e, t, n) {вернуть Y.access (e, t, n)}, _ removeData: function (e, t) {Y.remove(e, t)}}), S.fn. extend ({data: function (n, e) {var t, r, i, o = this [0], a = o && o.attributes; if (void 0 === n) {if (this.length && (i =) ! Q.get (о), 1 === o.nodeType && Y.get (O, "
                                                    hasDataAttrs "))) {т = a.length, в то время (т -) а [т] && 0 === (г = а [т] .name) .indexOf ( "
                                                    данных - ") && (г = Х (r.slice (5)), Z (о, г, я [г])); Y.set (о,»hasDataAttrs ", !0)
                                            }
                                            return i
                                        }
                                        return " object " == typeof n ? this.each(function () {
                                            Q.set(this, n)
                                        }) : $(this, function (e) {
                                            var t;
                                            if (o && void 0 === e) вернуть void 0! == (t = Q.get(o, n)) ? t : void 0! == (t = Z(o, n)) ? t : void 0;
                                            this.each(function () {
                                                Q.set(this, n, e)
                                            })
                                        }, null, e, 1 < arguments.length, null, !0)
                                    },
                                    removeData: function (e) {
                                        вернуть это.each(function () {
                                            Q.remove(this, e)
                                        })
                                    }
                                }), S.extend({
                                queue: function (e, t, n) {
                                    var r;
                                    if (e) возвращает t = (t || "FX") + "очереди", г = Y.get(е, т), п && (!г || Array.isArray(п) ? г = Y.access(е, т, S.makeArray(п)) : r.push(n)), r || []
                                },
                                dequeue: function (e, t) {
                                    t = t || "fx";
                                    var n = S.queue(e, t),
                                        r = n.длина,
                                        I = n.shift(),
                                        O = S._queueHooks(е, т);
                                    "InProgress" === я && (I = n.shift(), г - ), я && ("FX" === t && n.unshift("inprogress"), удалить o.stop, i.call(e, function () {
                                        S.dequeue(e, t)
                                    }, o)), !r && o && o.empty.fire()
                                },
                                _ queueHooks: function (e, t) {
                                    var n = t + «queueHooks»;
                                    вернуть Y.get(e, n) || Y.access(e, n, {
                                        empty: S.Обратные вызовы(«однажды память»).Add(function () {
                                            Y.remove(e, [t + «queue», n])
                                        })
                                    })
                                }
                            }), S.fn.extend({
                                    queue: function (t, n) {
                                        var e = 2;
                                        вернуть "строку"! = typeof t && (n = t, t = "fx", e - ), arguments.length < e ? {
                                            var e = S.queue(this, t, n);
                                            S._queueHooks(this, t),
                                            "fx" === t && "inprogress") ! == e[0] && S.dequeue(this, t)
                                    })
                            },
                            dequeue: function (e) {
                                вернуть this.each(function () {
                                    S.dequeue(this, e)
                                })
                            },
                            clearQueue: function (e) {
                                вернуть this.queue(e || "fx", [])
                            },
                            обещание: function (e, t) {
                                var n, r = 1,
                                    i = S.Deferred(),
                                    o = this,
                                    a = this.length,
                                    s = function () {
                                        -r || i.resolveWith(o, [o])
                                    };«
                                строка»! = typeof e && (t = e, e = void 0), e = e | | "FX";
                                while (a - )(n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                                вернуть s(), i.promise(t)
                            }
                        });
                    var ee = / [+ -]? (?: \ d * \. |) \ d + (?: [eE] [+ -]? \ d + |) /.source,
                        te = new RegExp("^ (?: ([+ -]) = |) (" + й + ") ([аз%] *) $", "я"),
                        п = ["Вверх", "Вправо", "Вниз", "Left"],
                        re = E.documentElement,
                        т.е. = function (e) {
                            return S.contains(e.ownerDocument, e)
                        },
                        oe = {
                            составе: !0
                        };
                    re.getRootNode && (т.е. = функция(e) {
                        return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
                    });
                    var ae = function (e, t) {
                        вернуть« none» === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display")
                    };
                    функция se(e, t, n, r) {
                        var i, o, a = 20,
                            s = r ? function () {
                                return r.cur()
                            } : function () {
                                return S.css(e, t, "")
                            },
                            u = s(),
                            л = п && п[3] || (S.cssNumber[т]
                                "?": "ПВ"),
                            с = e.nodeType && (S.cssNumber[т] || "точек" == л && +и) && te.exec(S.css(е, т!));
                        если(с && с[3] == л!) {
                            и / = 2, L = L || с[3], с = +и || 1, в то время(а - ) S.style(е, т, C + L), (1 - о) * (1 - (о = ы() / и || 0, 5)) <= 0 && (а = 0), с / = о;
                            с * = 2, S.style(e, t, c + l), n = n || []
                        }
                        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
                    }
                    var ue = {};
                    функция le(e, t) {
                        для( < f; c++)(r = e[c]).style && (n = r.style.display, т ? ("нет" === п && (л[с] = Y.get(г, "дисплей") || нуль, л[с] || (r.style.display = »")),"
                                "=== r.style.display && ae (r) && (l [c] = (u = a = o = void 0, a = (i = r) .ownerDocument, s = i.nodeName, (и = ие [с]) || (о = a.body.appendChild (a.createElement (s)), U = S.css (о, "
                                дисплей "), o.parentNode.removeChild (о),"
                                Нет " === у && (и = "
                                блок "), ие [с] = и)))): "
                                нет " == п && (л [с] = "
                                нет ", Y.set (г,» display ", n)));
                            for (c = 0; c < f; c++) null! = l[c] && (e[c].style.display = l[c]); вернуть e
                        }
                        S.fn.extend({
                            show: function () {
                                return le(this, !0)
                            },
                            hide: function () {
                                return le(this)
                            },
                            toggle: function (e) {
                                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(функция() {
                                    ае(это)(это).show(): & alpha;
                                    S(это).hide()
                                })
                            }
                        });
                        вар се, к, ре = / ^ (?: флажок | радио) $ /
                        я, де = / <([AZ] [^ \ / \ 0> \ x20 \ т \ г \ п \ е] *) /
                        я, он = / ^ $ | ^ модуль $ | \ /( ? : Java | ECMA) скрипт / я;. = в.п.E.createDocumentFragment() AppendChild(E.createElement("ДИВ")), (к = E.createElement("вход")).SetAttribute("тип", "радио"), fe.setAttribute("проверено", "проверено"), fe.setAttribute("имя", "т"), ce.appendChild(к), y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<TextArea> х </ TextArea>", y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option> </ option>", y.option = !!ce.lastChild;
                        var ge = {
                            thead: [1, "<table>", "</ table>"],
                            колонка: [2, "<таблица> <COLGROUP>", "</ COLGROUP> </ таблицы>"],
                            тр: [2, "<таблица> <TBODY>", "</ TBODY> </ таблица > "],
                            тд: [3, " <таблица> <TBODY> <TR>», " < / TR> </
                                TBODY > < / таблицы>"] _ по умолчанию: [0, "", ""]}; функция ve (e, t) {var n; return n = "undefined"! = typeof e.getElementsByTagName? e.getElementsByTagName (t || "*"): "undefined"! = typeof e.querySelectorAll? e.querySelectorAll (t || "*"): [], void 0 === t || t && A (e, t)? S.merge ([e], n): n} функция ye (e, t) {для(<r; <выберите несколько='множественные'> "," </
                                select > "]); var me = / < | & # ? \w + ; /;функция xe(e, t, n, r, i) {
                                для( < ч; {
                                        a = a | | f.appendChild(t.createElement("DIV")), s = (de.exec(о) || ["", ""])[1].toLowerCase(), и = GE[с] || ge._default, a.innerHTML = и[1] + S.htmlPrefilter(о) + и[2], с = и[0], в то время(с - ) а = a.lastChild;
                                        S.merge(р, a.childNodes), (а = ф.firstChild).textContent = ""
                                    }
                                    иначе p.push(t.createTextNode(o)); f.textContent = "", d = 0;
                                    while (o = p[d++])
                                        if (r && -1 < S.inArray({
                                                    c = 0;
                                                    while (o = a[c++]) he.test(o.type || "") && n.push(o)
                                                }
                                                return f
                                            }
                                            var be = / ^ key /, мы = / ^ (?: mouse | указатель | contextmenu | drag | drop) | click /, Te = / ^ ([^.] *) (?: \. (. +) |) /;

                                            function Ce() {
                                                return !0
                                            }

                                            function Ee() {
                                                return !1
                                            }

                                            function Se(e, t) {
                                                return e === function () {
                                                    try {
                                                        return E.activeElement
                                                    } catch (e) {}
                                                }() == ("focus" === t)
                                            }
                                            функция ke(e, t, n, r, i, o) {
                                                var a, s;
                                                if ("object" == typeof t) {
                                                    for (s в "string"! = typeof n && (r = r || n, n = void 0), t) ke(e, s, n, r, t[s], o);
                                                    вернуть e
                                                }
                                                if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ee;
                                                в противном случае(!I) вернуть e;
                                                вернуть 1 === o && (a = i, (i = function (e) {
                                                    return S().Off(e), a.применить(это, аргументы)
                                                }).GUID = a.guid || (a.guid = S.guid++)), e.each(функция() {
                                                    S.event.add(это, T, I, г, п)
                                                })
                                            }

                                            function Ae(e, i, o) {
                                                o ? (Y.set(e, i, !1), S.event.add(e, i, {
                                                    пространство имен: !1,
                                                    обработчик: функция(e) {
                                                        var t, n, r = Y.get(this, i);
                                                        if (1 & e.isTrigger && this[i]) {
                                                            if (r.length)(S.event.special[i] || {}).DelegateType && e.stopPropagation();
                                                            иначе, если(r = s.call(аргументы), Y.set(this, i, r), t = o(this, i), this[i](), r! == (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r! == n) return e.stopImmediatePropagation(), e.preventDefault(), n.value
                                                        } else r.length && (Y.set(this, i, {
                                                            value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
                                                        }), e.stopImmediatePropagation())
                                                    }
                                                })) : void 0 === Y.get(e, i) && S.event.add(e, i, Ce)
                                            }
                                            S.event = {
                                                global: {},
                                                добавьте: function (t, e, n, r, i) {
                                                    var o, a, s, u, l, c, е, р, д, ч, г, v = Y.get(т),
                                                        если(V(T)) {
                                                            n.handler && (п = (о = п).handler, I = o.selector), я && S.find.matchesSelector(п, я), n.guid || (n.guid = S.guid++), (и = v.events) || (и = v.events = Object.create(нуль)), (а = v.handle) || (a = v.handle = function (e) {
                                                                вернуть "undefined"! = typeof S && S.event.triggered! == e.type ? S.event.dispatch.apply(t, аргументы) : void 0
                                                            }), l = (e = (e || "").match(P) || [""]).length;
                                                            тогда как(l - ) d = g = (s = Te.exec(е[л]) || [])[1], H = (с[2] || "").сплит("").рода(), д && (е = S.event.special[d] || {}, д = (я f.delegateType: f.bindType) || д, е = S.event.special[d] || {}, с = S.extend({
                                                                тип: д,
                                                                OrigType: г,
                                                                данные: г,
                                                                обработчик: п,
                                                                справ: n.guid,
                                                                селектор: я,
                                                                needsContext: я && S.expr.match.needsContext.test(я),
                                                                пространство имен: h.join("")
                                                            }, о), (р = и[d]) || ((р = и[d] = []) delegateCount = 0, f.setup && 1 == f.setup.call(т, г, д, а).! | | т.addEventListener && t.addEventListener(д, а)), f.add && (f.add.call(т, с), c.handler.guid || (c.handler.guid = n.guid)), я ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0)
                                                        }
                                                },
                                                remove: function (e, t, n, r, i) {
                                                    var o, A, S, U, L, C, F, р, д, ч, г, v = Y.hasData(е) && Y.get(е),
                                                        если(V && (и = v.events)) {
                                                            л = (т = (т || "") матч(P) || . [""]) длины;
                                                            в то время.(л - ), если(д = г = (s = Te.exec(т[л]) || [])[1], H = (с[2] || "").расщепленные("").Sort(), г) {
                                                                е = S.event.special[d] || {}, р = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^ | \\.)" + h.join("\ . (?..: * \\ |). \ ") + " (\\ | $) "), а = о = p.length, в то время как(о - ) с = р[о], !я && г! == c.origType || п && n.guid! == c.guid || s && !s.test(c.namespace) || г && г! == c.selector && ("**"! == г || !гр.Селекторный) || (p.splice(о, 1), c.selector && р.delegateCount - , f.remove && f.remove.call(е, с)), A && && p.length(f.teardown && 1 == f.teardown.call(е, ч, v.handle!!) || S!.removeEvent(e, d, v.handle), delete u[d])
                                                            } else для(d in u) S.event.remove(e, d + t[l], n, r, !0);
                                                            S.isEmptyObject(u) && Y.remove(e, «обрабатывать события»)
                                                        }
                                                },
                                                диспетчеризация: function (e) {
                                                    var t, n, r, i, o, a, s = новый массив(arguments.length),
                                                        u = S.event.fix(е),
                                                        л = (Y.get(это, "события") || Object.create(нуль))[u.type] || [],
                                                        с = S.event.special[и.type] || {};
                                                    для(s[0] = и, т = 1, T < arguments.length; т++) с[т] = аргументы[т];
                                                    если(! = u.delegateTarget этого, гр.preDispatch || 1 == c.preDispatch.call(это, и)) {
                                                        а = S.event.handlers.call(это, U, L), т = 0;
                                                        !в то время как((я = а[T++]) && u.isPropagationStopped()) {
                                                            u.currentTarget = i.elem, п = 0;
                                                            !!!!в то время как((о = i.handlers[п++]) && u.isImmediatePropagationStopped()) u.rnamespace && 1 == o.namespace && !и.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0! == (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()))
                                                        }
                                                        return c.postDispatch && c.postDispatch.call(this, u), u.result
                                                    }
                                                },
                                                обработчики: function (e, t) {
                                                    var n, r, i, o, a, s = [],
                                                        u = t.delegateCount,
                                                        l = e.target,
                                                        если(и && l.nodeType && ("щелчок" === e.type && 1 <= e.button) !) для(; !л == это, л = l.parentNode || это), если(1 == = l.nodeType && ("щелчок" == e.type || 0 == l.disabled!!)) {
                                                            для(о = [], а = {}, п = 0, п < и; п++) недействительным 0 === a[i = (r = t[n]).Селектор + ""] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);
                                                            o.length && s.push({
                                                                elem: l,
                                                                handlers: o
                                                            })
                                                        }
                                                    return l = this, u < t.length && s.push({
                                                        эль: л,
                                                        обработчики: т.ломтик(и)
                                                    }), с
                                                },
                                                addProp: функция(т, е) {
                                                    Object.defineProperty(S.Event.prototype, т, {
                                                        перечислимы: 0,
                                                        конфигурируемый: 0,
                                                        получим: т(е) ? функция() {
                                                            if (this.originalEvent) возвращает e(this.originalEvent)
                                                        } : function () {
                                                            if (this.originalEvent) возвращает this.originalEvent[t]
                                                        },
                                                        set: function (e) {
                                                            Object.defineProperty(this, t, {
                                                                enumerable: !0,
                                                                настраиваемый: !0,
                                                                доступный для записи: !0,
                                                                значение: e
                                                            })
                                                        }
                                                    })
                                                },
                                                fix: function (e) {
                                                    return e[S.expando] ? e : new S.Event(e)
                                                },
                                                special: {
                                                    load: {
                                                        noBubble: !0
                                                    },
                                                    щелкните: {
                                                        setup: function (e) {
                                                            var t = this || e;
                                                            вернуть pe.test(t.type) && t.click && A(t, " input ") && Ae(t, " click ", Ce), !1
                                                        },
                                                        триггер: function (e) {
                                                            var t = this || e;
                                                            вернуть pe.test(t.type) && t.click && A(t, " input ") && Ae(t, " click "), !0
                                                        },
                                                        _ default: function (e) {
                                                            var t = e.target;
                                                            return pe.test(t.type) && t.click && A(t, " input ") && Y.получить(т, »click ") || A (t,"
                                                                a ")}}, перед загрузкой: {postDispatch: function (e) {void 0! == e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)}}}} }, S.removeEvent = function (e, t, n) {e.removeEventListener && e.removeEventListener(t, n)}, S.Event = function (e, t) {if (! (Это экземпляр S.Event)) return новый S.Event (e, t); e && e.type? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented &&! 1 == = e.returnValue Се: Ee, this.target = e.target && 3 === e.target.nodeType e.target.parentNode: e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget ): this.type = е, т && S.extend (это, т), this.timeStamp = е && e.timeStamp || Date.now (), это [S.expando] = 0}, {S.Event.prototype = конструктор: S.Event, isDefaultPrevented: Ee, isPropagationStopped: Ee,isImmediatePropagationStopped: Ee, isSimulated:! 1, protectDefault: function () {var e = this.originalEvent; this.isDefaultPrevented = Ce, e &&! this.isSimulated && e.preventDefault ()}, stopPropagation: function () {var e = this. originalEvent; this.isPropagationStopped = Ce, e &&! this.isSimulated && e.stopPropagation ()}, stopImmediatePropagation: function () {var e = this.originalEvent; this.isImmediatePropagationStopped = Ce, e &&! this.isSimulated &) thisopis () stopPropagation ()}}, S.each ({клавишу Alt: 0, пузыри: 0, отменяемый: 0, changedTouches: 0, ctrlKey: 0, деталь: 0, EventPhase: 0, metaKey: 0 , pageX: 0, Пейджи: 0, shiftKey: 0, вид: 0, "
                                                                символ ": 0, код: 0, charCode: 0, ключ: 0, KEYCODE: 0, кнопка: ! 0, кнопки: 0, clientX: 0, clientY: 0, OffsetX: 0, OffsetY: 0, pointerId: 0, pointerType: 0, ScreenX: 0, Screeny: 0, targetTouches: ! 0, toElement:! 0, трогает:! 0, что: function (e) {var t = e.button; return null == e.which && be.test (e.type)? Null! = E.charCode? E.charCode: e. keyCode:! e.which && void 0! == t && we.test (e.type)? 1 & t? 1: 2 & t? 3: 4 & t? 2: 0: e.which}}, S.event.addProp), S.each ( {focus: "
                                                                focusin ", blur: "
                                                                focusout "}, function (e, t) {S.event.special[e] = { setup: function () { вернуть Ae(this, e, Se), !1 }, trigger: function () { return Ae(this, e), !0 }, DelegateType: t }}), S.each ({mouseenter: "
                                                                mouseover ", mouseleave: "
                                                                mouseout ", pointerenter: "
                                                                pointerover ", pointerleave : "
                                                                pointerout "}, function (e, i) {S.event.special[e] = { DelegateType: i, bindType: i, handle: function (e) { var t, n = e.relatedTarget, r = e.handleObj; вернуть n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, аргументы), e.type = я), т } }}), S.fn.extend ({на: функции (е, т, п,r) {return ke (this, e, t, n, r)}, one: function (e, t, n, r) {return ke (this, e, t, n, r, 1)}, выкл .: function (e, t, n) {var r, i; if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S (e.delegateTarget) .off (r.namespace? r.origType + ".
                                                                " + r .namespace: r.origType, r.selector, r.handler), this; if ("
                                                                объект " == typeof e) {для(i in e) this.off (i, t, e [i]); возврат this} return! 1! == t && "
                                                                function "! = typeof t || (n = t, t = void 0) ,! 1 === n && (n = Ee), this.each (function () {S.event.remove(this, e, n, t)})}}); var Ne = / <script | <style | <link / i, De = / checked \ s * (?: [^ =] | = \ s * .Checked) / я, JE = / ^ \ s *. <({return A (e, "
                                                                table ") && A (11! == t.nodeType? t: t.firstChild, "
                                                                tr ") && S (e) .children ("
                                                                tbody ") [ 0] || e} функция Le (e) {return e.type = (null! == e.getAttribute ("
                                                                type ")) +" / "+ e.type, e} function He (e) {return"
                                                                true / "=== (e.type ||"
                                                                "). slice (0,5)? e.type = e.type.slice (5): e.removeAttribute ("
                                                                type "), e} функция Oe (e, t) {var n, r, i, o, a, s; if (1 === t.nodeType ) {if (Y.hasData (e) && (s = Y.get (e) .events)) для (i в Y.remove (t, «обрабатывать события»), s) для (n = 0, r = с [я] .length; п <г; {}, o), Q.set (t, a))}} функция Pe (n, r, i, o) {r = g(r); var e, t, a, s, u, l, c = 0, f = n.length, p = f-1, d = r [0], h = m (d), если (h || 1 <f && "
                                                                string " == typeof d &&! y.checkClone && De.test (d)) return n.each (function (e) {var t = n.eq (e); h && (r [0] = d.call (this, e, t.html ()) ), Пе. (т, т, I, O)});!, если (е && (т = (е = х (г, п [0] .ownerDocument, 1, N, O)) FirstChild, 1 === e.childNodes.length && (е = т), т || о)) {для(s = (а = S.map(в(е, "
                                                                сценарий ".), Le)) длина, с <е;!! C ++) и = е, с == р && (и = S.clone (и, 0, 0), с && S.merge (а, в (и,» сценарий "))),
                                                    i.call(п[с], и, с);если(ов) для(л = а[a.length - 1].ownerDocument, S.map(а, он), с = 0; с < с; C++) и = а[C],
                                                    he.test(u.type || ""!) && Y.access(и, "globalEval") && S.contains(л, и) && (U!.src && "модуль" == (u.type || "").toLowerCase() S._evalUrl && && u.noModule S._evalUrl(u.src, {
                                                        нонс: !u.nonce || u.getAttribute("нонс ")
                                                    }, l): b(u.textContent.replace(je, " "), u, l))
                                                }
                                                return n
                                            }
                                            функция Re(e, t, n) {
                                                для(var r, i = t ? S.filter(т, е) : !е, о = 0; нуль = (г = я[о]); O++), п || 1 == r.nodeType || S.cleanData(ве(г)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
                                                return e
                                            }
                                            S.extend({
                                                htmlPrefilter: function (e) {
                                                    return e
                                                },
                                                clone: function (e, t, n) {
                                                    var r, i, o, a, (!0) з, и, л, с = e.cloneNode,
                                                        е = е(е);
                                                    !!!Если((y.noCloneChecked || 1 == e.nodeType && 11 == e.nodeType || S.isXMLDoc(е))) для(а = в(с), г = 0, I = (о = в(е)) длиной;.г < я; г++) s = O[R], и = а[г], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input"! == l && "textarea"! = = || л(u.defaultValue = s.defaultValue);
                                                    если(т), если(п) при(о = о || в(е), а = || в(с), г = 0, г = o.length; r < i; r++) Oe(o[r], a[r]);
                                                    еще Oe(e, c);
                                                    возврат 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
                                                },
                                                cleanData: function (e) {
                                                    for (var t, n, r, i = S.event.special, o = 0; void 0! == (n = e[o]); o++)
                                                        if (V(n)) {
                                                            if (t = n[Y.expando]) {
                                                                if (t.events) для(r в t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                                                                n[Y.expando] = void 0
                                                            }
                                                            n[Q.expando] && (n[Q.expando] = void 0)
                                                        }
                                                }
                                            }), S.fn.extend({
                                                    detach: function (e) {
                                                        return Re(this, e, !0)
                                                    },
                                                    remove: function (e) {
                                                        return Re(this, e)
                                                    },
                                                    text: function (e) {
                                                        return $(this, function (e) {
                                                            return void 0 === e ? S.текст(это).this.empty() каждая(функция() {
                                                                1 == this.nodeType && 11 == this.nodeType && 9 == this.nodeType || (this.textContent = е) !!
                                                            })
                                                        }, нуль, e, arguments.length)
                                                    },
                                                    append: function () {
                                                        return Pe(this, arguments, function (e) {
                                                            1! == this.nodeType && 11! == this.nodeType && 9! == this.nodeType || qe(this, e).appendChild(e)
                                                        })
                                                    },
                                                    prepend: function () {
                                                        return Pe(this, аргументы, function (e) {
                                                            if (1 === this.nodeType || 11 === this.nodeType | | 9 === this.nodeType) {
                                                                var t = qe(this, e);
                                                                t.insertBefore(e, t.firstChild)
                                                            }
                                                        })
                                                    },
                                                    before: function () {
                                                        вернуть Pe(this, аргументы, функцию(e) {
                                                            this.parentNode && this.parentNode.insertBefore(e, this)
                                                        })
                                                    },
                                                    после: function () {
                                                        return Pe(this, arguments, function (e) {
                                                                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling))
                                                        })
                                                }, опустошить: function () {
                                                    for (var e, t = 0; null! = (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = "");
                                                    вернуть this
                                                }, clone: ​​ function (e, t) {
                                                    return e = null! = e && e, t = null == t ? e : t, this.map(function () {
                                                        return S.clone(this, e, t)
                                                    })
                                                }, html: function (e) {
                                                    return $(this, function (e) {
                                                        var t = this[0] || {},
                                                            n = 0,
                                                            r = this.length;
                                                        if (void 0 === e && 1 === t.nodeType) возвращает t.innerHTML;
                                                        if ("строка" == typeof e && !Ne.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                                                            е = S.htmlPrefilter(е);
                                                            попытка {
                                                                для( < г; {}) NODETYPE && (S.cleanData(ве(т, 1) !), t.innerHTML = е), т = 0
                                                            }
                                                            поймать(е) {}
                                                        }
                                                        т && this.empty() Append(е)
                                                    }, нуль., e, arguments.length)
                                                }, replaceWith: function () {
                                                    var n = [];
                                                    вернуть Pe(this, arguments, function (e) {
                                                        var t = this.parentNode;
                                                        S.inArray(this, n) < 0 && (S.cleanData(в(это)), т && т.replaceChild(е, это))
                                                    }, п)
                                                }
                                            }),
                                    S.each({
                                        appendTo: "Append",
                                        prependTo: "перед именем",
                                        InsertBefore: "до",
                                        InsertAfter: "после",
                                        replaceAll: "ReplaceWith"
                                    }, function (e, a) {
                                        S.fn[e] = function (e) {
                                            для(var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= я; о++), т = о === я это: ? this.clone(!0), S(г[о])[а](т), u.apply(п, t.get());
                                            return this.pushStack(n)
                                        }
                                    });
                                    var Me = new RegExp("^ (" + ee + ") (?! px) [az%] + $", "i"),
                                        т.е. = функция(e) {
                                            var t = e.ownerDocument.defaultView;
                                            вернуть t && t.opener || (t = C), t.getComputedStyle(e)
                                        },
                                        We = функция(e, t, n) {
                                            var r, i, o = {};
                                            для(i в t) o[i] = e.style[i], e.style[i] = t[i];
                                            для(i в r = n.call(e), t) e.style[i] = o[i];
                                            return r
                                        },
                                        Fe = new RegExp(ne.join("|"), "i"); функция Be(e, t, n) {
                                        var r, i, o, a, s = e.style;
                                        возвращение(п = п || Того(е)) && ("" == (а = n.getPropertyValue(т) || п[т]) || т(е) || (!а = S.стиль(е, т)), !y.pixelBoxStyles() && Me.test(а) && Fe.test(т) && (г = s.width, I = s.minWidth, о = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0! == a ? a + "" : a
                                    }
                                    функция $ e(e, t) {
                                        return {
                                            get: function () {
                                                if (!e()) return (this.get = t).apply(this, аргументы);
                                                удалить this.get
                                            }
                                        }
                                    }! function () {
                                        function e() {
                                            if (l) {
                                                u.style.cssText = "position: absolute; left: -11111px; ширина: 60px; margin-top: 1px; отсis, e)})}}), S.extend ({attr: function (e, t, n) {var r, i, o = e.nodeType; if (3! == o && 8! == o && 2! = = o) вернуть "
                                                undefined " == typeof e.getAttribute? S.prop (e, t, n) :( 1 === o && S.isXMLDoc (e) || (i = S.attrHooks [t.toLowerCase () ] || (S.expr.match.bool.test (t)? Pt: void 0)), void 0! == n? Null === n? Void S.removeAttr (e, t): i && "
                                                set "в i && void 0! == (r = i.set (e, n, t))? r: (e.setAttribute (t, n +"
                                                "), n): i &&"
                                                get "in i && null! == (r = i.get (e, t))? r: null == (r = S.find.attr (e, t))? void 0: r)}, attrHooks: {тип: {set: function (e, t) {if (! y.radioValue && "
                                                radio " === t && A (e, "
                                                input ")) {var n = e.value; вернуть e.setAttribute ("
                                                type ", t), n && (e.value = n), t}}}}, removeAttr: function (e, t) {var n, r = 0, i = t && t.match (P); if (i && 1 === e.nodeType) while (n = i [ г ++]) e.removeAttribute (п)}}), пт = {множество:функция (е, т, п) {возвращение 1 === т S.removeAttr (е, п):? e.setAttribute (п, п), п}}, S.each (S.expr.match.bool .source.match (/ \ w + / g), функция (e, t) {var a = dt [t] || S.find.attr; dt [t] = function (e, t, n) {var r , i, o = t.toLowerCase (); вернуть n || (i = dt [o], dt [o] = r, r = null! = a (e, t, n)? o: null, dt [ o] = i), r}}); var ht = / ^ (?: input | select | textarea | button) $ / i, gt = / ^ (?: a | area) $ / i; функция vt (e ) {return (e.match (P) || []). join ("
                                                ")} function yt (e) {return e.getAttribute && e.getAttribute ("
                                                class ") || "
                                                "} функция mt (e) { return Array.isArray (e)? e: "
                                                string " == typeof e && e.match (P) || []} S.fn.extend ({prop: function (e, t) {return $ (this, S. prop, e, t, 1 <arguments.length)}, removeProp: function (e) {вернуть this.each (function () {удалить this [S.propFix [e] || e]})}}), S .extend ({prop: function (e, t, n) {var r, i, o = e.nodeType; if (3! == o && 8! == o && 2! == o) вернуть 1 === o && S.isXMLDoc (e) || (t = S.propFix [t] || t, i = S.propHooks [t]), void 0! == n? i && "
                                                set " в i && void 0! == (r = i .set (e, n, t))? r: e [t] = n: i && "
                                                get " in i && null! == (r = i.get (e, t))? r: e [t]}, propHooks: {tabIndex: {get: function (e) {var t = S.find.attr (e, "
                                                tabindex "); return t? parseInt (t, 10): ht.test (e.nodeName) || gt .test (e.nodeName) && e.href 0: -1}}}, propFix: { "
                                                за ": "
                                                htmlFor ", "
                                                класс ": "
                                                имя класса "}}), y.optSelected || (S.propHooks .selected = {get: function (e) {var t = e.parentNode; вернуть t && t.parentNode && t.parentNode.selectedIndex, null}, установить: function (e) {var t = e.parentNode; t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)}}), S.each ([ "
                                                TabIndex ", "
                                                доступен только для чтения ", "
                                                MaxLength ", "
                                                CELLSPACING ", "
                                                CELLPADDING ",»RowSpan», "
                                                COLSPAN ", "
                                                useMap ", "
                                                frameBorder ", "
                                                contentEditable "], функция () {S.propFix [this.toLowerCase ()] = это}), S.fn.extend ({addClass: функцию ( t) {var e, n, r, i, o, a, s, u = 0; если (m (t)) вернуть this.each (function (e) {S (this) .addClass (t.call ( это, е, уг (это)))});., если ((е = т (т)) длины), а (п = это [и ++]), если (I = уг (п), г = 1 === n.nodeType && "
                                                " + vt (i) + "
                                                ") {a = 0; while (o = e [a ++]) r.indexOf ("
                                                " + o + "
                                                ") <0 && (r + = o + "
                                                "); i ! == (s = vt (r)) && n.setAttribute ("
                                                class ", s)} вернуть это}, removeClass: function (t) {var e, n, r, i, o, a, s, u = 0; if (m (t)) возвращает this.each (function (e) {S (this) .removeClass (t.call (this, e, yt (this)))}); if (! Arguments.length) вернуть this.attr ("
                                                class ", "
                                                "); if ((e = mt (t)). length) while (n = this [u ++]) if (i = yt (n), r = 1 === n.nodeType && "
                                                "+ vt (i) + "
                                                ") {a = 0; while (o = e [a ++]) while (-1 <r.indexOf ("
                                                " + o + "
                                                ")) r = r.replace ("
                                                " + o + "
                                                ", "
                                                "); i! == (s = vt (r)) && n.setAttribute ("
                                                class ", s)} вернуть это}, toggleClass: function (i, t) {var o = typeof i, a = "
                                                string " === o || Array.isArray (i); вернуть "
                                                логическое значение " == typeof t && a? t? this.addClass (i): this.removeClass (i): m (i)? this.each (function (e) {S (this) .toggleClass (i.call (this, e, yt (this), t), t)}): this.each (function () {var e, t, n, r ; если (а) {т ​​= 0, п = S (это), г = т (я), в то время (е = г [т ++]) n.hasClass (е) n.removeClass (е): n.addClass? (e)} else void 0! == i && "
                                                boolean "! == o || ((e = yt (this)) && Y.set (this, "
                                                __ className __ ", e), this.setAttribute && this.setAttribute ("
                                                class» е || 1 === я! ? "" : Y.get(это, "__ __ имя класса") || ""))
                                    })
                            },
                            hasClass: function (e) {
                                var t, n, r = 0;
                                t = "" + e + "";
                                while (n = this[r++])
                                    if (1 === n.nodeType && -1 < ("" + vt(yt(n)) + "").indexOf(t)) return !0;
                                return !1
                            }
                        });
                    var xt = / \ r /
                    g;
                    S.fn.extend({
                        val: function (n) {
                            var r, e, i, t = this[0];
                            вернуть arguments.length ? (i = m(n), this.each(function (e) {
                                var t;
                                1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t + = "" : Array.isArray(t) && (t = S.map(t, function (e) {
                                        return null == e ? "" : e + ""
                                    })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set"
                                    в r && void 0! == r.set(this, t, "value") || (this.value = t))
                            })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get"
                            в r && void 0! == (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(xt, "") : null == e ? "" : e: void 0
                        }
                    }),
                    S.extend({
                        valHooks: {
                            option: {
                                get: function (e) {
                                    var t = S.find.attr(e, "value");
                                    вернуть null! = t ? t : vt(S.text(e))
                                }
                            },
                            выбрать: {
                                get: function (e) {
                                    var t, n, r, i = e.options,
                                        o = e.selectedIndex,
                                        a = "select-one" === e.type,
                                        s = a ? null : [],
                                        u = a ? o + 1 : i.length,
                                        ибо(г = о < 0 и: А о: ? 0; г < и; {
                                                if (t = S(n).val(), a) вернуть t;
                                                s.push(t)
                                            }
                                            return s
                                        },
                                        set: function (e, t) {
                                            var n, r, i = e.options,
                                                o = S.makeArray(t),
                                                a = i.length;
                                            while (a - )((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
                                            вернуть n || (e.selectedIndex = -1), о
                                        }
                                }
                            }
                        }), S.each(["радио", "флажок"], функция() {
                            S.valHooks[это] = {
                                множество: функция(е, т) {
                                    если(Array.isArray(т)) return e.checked = -1 < S.inArray(S(e).val(), t)
                                }
                            }, y.checkOn || (S.valHooks[this].get = function (e) {
                                    return null === e.getAttribute("value")) ? "on" : e.value
                            })
                    }),
                    y.focusin = "onfocusin"
                    в C;
                    var bt = / ^ (?: focusinfocus | focusoutblur) $ /,
                        wt = function (e) {
                            e.stopPropagation()
                        };
                    S.extend(S.event, {
                        trigger: function (e, t, n, r) {
                            var i, o, a, s, u, l, c, f, p = [n || E],
                                d = v.call(е, "тип") e.type: е,
                                ч = v.call(е, "пространство имен") e.namespace.split(""): ? [];
                            если(о = F = а = п = п || Е, 3 == n.nodeType && 8 == n.nodeType && bt.test(д + S.event.triggered) && (-!!!""
                                1 < d.indexOf() && (д = (ч = d.split()
                                    " ") сдвиг(), h.sort()), и = d.indexOf(.
                                    ": ") < 0 && " на" + д, (е = e[S.expando] ? e : новый S.Event(d, "объект" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^ | \\.) " + h.join(" \\. (?:. * \\. |) ") + " (\\. | $) ") : null, e.result = void 0, e.target || (e.target = п), т = NULL == т[е]: S.makeArray(т, [е]), с = S.event.special[d] || {}, !!!г || c.trigger || 1 == c.trigger.apply(п, т))) {
                                если(г && && c.noBubble х(п)) {
                                    для(S = c.delegateType!!! | | д, bt.test(с + д) || (о = o.parentNode); а; о = o.parentNode) p.push(о), а = о;
                                    а === (n.ownerDocument || Е) && p.push(a.defaultView || a.parentWindow || С)
                                } = 0, тогда как((о = р[я++]) ! && e.isPropagationStopped()) е = о, e.type = 1 < я с: c.bindType || д, (л = (Y.get(о, "события") || Object.create(нуль))[e.type] && Y.get(о, "ручка")) && l.apply(о, т), (л = и && о[и]) && && l.apply В(о) && (e.result = l.apply(о, т), !1 === e.result && e.preventDefault());
                                return e.type = d, r || e.isDefaultPrevented() || c._default && !1! == c._default.apply(p.pop(), t) || !В(п) || и && т(п[d]) && !Х(п) && ((а = п[и]) && (п[и] = нуль), S.event.triggered = д, e.isPropagationStopped() && f.addEventListener(d, wt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, wt), S.event.triggered = void 0, a && (n[u] = a)), e.result
                            }
                        },
                        имитировать: function (e, t, n) {
                            var r = S.extend(новый S.Event, n, {
                                тип: e,
                                isSimulated: !0
                            });
                            S.event.trigger(r, null, t)
                        }
                    }),
                    S.fn.extend({
                        trigger: function (e, t) {
                            вернуть this.each(function () {
                                S.event.trigger(e, t, this)
                            })
                        },
                        triggerHandler: function (e, t) {
                            var n = this[0];
                            если(n) возвращает S.event.trigger(e, t, n, !0)
                        }
                    }),
                    y.focusin || S.каждый({
                        focus: "focusin",
                        blur: "focusout"
                    }, function (n, r) {
                        var i = function (e) {
                            S.event.simulate(r, e.target, S.event.fix(e))
                        };
                        S.event.special[r] = {
                            setup: function () {
                                var e = this.ownerDocument || this.document || this,
                                    t = Y.доступ(e, r);
                                t || e.addEventListener(п, я, !0), Y.access(е, г, (t || 0) + 1)
                            },
                            разрыв: function () {
                                var e = this.ownerDocument || this.document || this,
                                    t = Y.access(e, r) - 1;
                                t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r))
                            }
                        }
                    });
                    var Tt = C.location,
                        Ct = {
                            guid: Date.now()
                        },
                        Et = / \? /;
                    S.parseXML = function (e) {
                        var t;
                        if (!E || "string"! = Typeof e) вернуть ноль;
                        try {
                            t = (new C.DOMParser).parseFromString(e, "text / xml")
                        } catch (e) {
                            t = void 0
                        }
                        return t && !t.getElementsByTagName("parsererror").length || S.error("Неверный XML:" + e), t
                    };
                    var St = / \ [\] $ /, kt = / \ r? \ n / g, At = / ^ (?: отправить | кнопку | изображение | сбросить | файл) $ / i, Nt = / ^ (?: input | select | textarea | keygen) / i; функция Dt (n, e, r, i) {var t; if (Array.isArray (e)) S.each (e, функция (e, t) {r || St.test(n) ? i(n, t) : Dt(n + "[" + ("object" == typeof t && null! = t ? e : "") + "]", t, r , i)}); иначе if (r || "объект"! == w (e)) i (n, e);иначе для (t в e) Dt (n + "[" + t + "]", e [t], r, i)} S.param = function (e, t) {var n, r = [], i = function (e, t) {var n = m (t)? t (): t; r [r.length] = encodeURIComponent (e) + "=" + encodeURIComponent (null == n? "": n)} , если (нуль == е) возвращение ""; если (Array.isArray (е) || e.jquery && S.isPlainObject (е)!) S.each (е, функция () {я(this.name, это.value)}); иначе для (n в e) Dt (n, e [n], t, i); return r.join ("&")}, S.fn.extend ({serialize: function () {return S.param (this.serializeArray ())}, serializeArray: function () {return this.map (function () {var e = S.prop (this, "elements"); вернуть e? S.makeArray ( e): this}). filter (function () {var e = this.type; вернуть this.name &&! S (this) .is (": disabled") && Nt.test (this.nodeName) &&! At.test (e) && (this.checked ||! pe.test (e))}). map (function (e, t) {var n = S (this) .val ();return null == n? null: Array.isArray (n)? S.map (n, function (e) {return {name: t.name, значение: e.replace (kt, "\ r \ n")} }): {name: t.name, value: n.replace (kt, "\ r \ n")}}). get ()}}); var jt = / % 20 / g,
                        qt = / #. * $ /,
                        Lt = / ([? &]) _ = [^ &] * /,
                        Ht = / ^ (. *?): [\ T] * ([^ \ r \ n] *) $ /
                    г,
                    Ot = / ^ (?: GET | ГОЛОВА) $ /,
                    Pt = / ^ \ /\ //, Rt = {}, Mt = {}, It = "* /" CONCAT ( "*"), Wt. = E.createElement ("a"); function Ft (o) {return function (e, t) {"string"! = Typeof e && (t = e, e = "*"); var n, r = 0, I = e.toLowerCase () соответствует (P) || [];., если (м (т)), а (п = я [г ++]) "+" === п [0] (п = n.slice? (1) || "*", (о [N] = о [п] || []). unshift (т)) :( о [п] = о [п] || []). толчок (т )}} функция Bt (t, i, o, a) {var s = {}, u = t === Mt; функция l (e) {var r; return s [e] =! 0, S.each (t [e] || [], функция (e, t) {var n = t (i, o, a); вернуть «строку»! = typeof n || u || s [n]? u ?! (r = n): void 0: (i.dataTypes.unshift (n), l (n) ,! 1)}),r} return l (i.dataTypes [0]) ||! s ["*"] && l ("*")} функция $ t (e, t) {var n, r, i = S.ajaxSettings.flatOptions | | {}; для (n in t) void 0! == t [n] && ((i [n]? e: r || (r = {})) [n] = t [n]); возврат г && S.extend, е} Wt.href = Tt.href, S.extend ((0, е, г!) {активна: 0, LastModified: {}, ETag: {}, ajaxSettings: {URL: Tt.href, типа: "GET", isLocal.: / ^ (. ?: о | приложение | приложение-хранение | + - расширение | файл | Рез | виджет): $ / тест (Tt.protocol), глобальные: 0, ProcessData: ! 0, async:! 0, contentType: "application / x-www-form-urlencoded; charset = UTF-8", принимает: {"*": It, text: "text / plain", html: "text / html ", xml:" application / xml, text / xml ", json:" application / json, text / javascript "}, содержимое: {xml: / \ bxml \ b /, html: / \ bhtml /, json: / \ bjson \ Ь /}, responseFields: {XML: "responseXML", текст: "responseText", JSON:»responseJSON "}, конвертеры: {" * text ": String," text html ":! 0," text json ": JSON.parse," text xml ": S.parseXML}, flatOptions: {url:! 0, context :! 0}}, ajaxSetup: function (e, t) {return t? $ T ($ t (e, S.ajaxSettings), t): $ t (S.ajaxSettings, e)}, ajaxPrefilter: Ft (Rt ), ajaxTransport: Ft (Mt), ajax: function (e, t) {"object" == typeof e && (t = e, e = void 0), t = t || {}; var c, f, p , п, д, г, д, г, I, O, V = S.ajaxSetup ({}, т), у = v.context || v, м = v.context && (y.nodeType || y.jquery )? S (y): S.event, x = S.Deferred (), b = S.Callbacks («однажды память»), w = v.statusCode || {}, a = {}, s = {} , u = "отменено", T = {readyState: 0, getResponseHeader: function (e) {var t; if (h) {if (! n) {n = {}; while (t = Ht.exec (p) ) n [t [1] .toLowerCase () + ""] = (n [t [1] .toLowerCase () + ""] || []). concat (t [2])} t = n [e .toLowerCase () + ""]} return null == t? null: t.join (",")}, getAllResponseHeaders: function () {return h? p: null}, setRequestHeader: function (e, t) {return null == h && (e = s [e.toLowerCase ()] = s [e.toLowerCase ( )] || e, a [e] = t), this}, overrideMimeType: function (e) {return null == h && (v.mimeType = e), this}, statusCode: function (e) {var t; if (e) if (h) T. всегда (e [T.status]); еще для (t in e) w [t] = [w [t], e [t]]; вернуть this}, отменить: function (e) {var t = e || u; вернуть c && c.abort (t), l (0, t), это}}; if (x.promise (T), v.url = ((e || v.url || Tt.href) + ""). заменить (Pt, Tt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*") toLowerCase () совпадают (P) || [ ""], нуль == v.crossDomain) {г = E.createElement("а");.. попытка {r.href = v.url, r.href = r.href, v.crossDomain = Wt.protocol + "//" + Wt.host!{v.crossDomain! = 0}} если (v.data && v.processData && "string"! = typeof v.data && (v.data = S.param (v.data, v.traditional)), Bt (Rt, v, t, T), h) вернуть T; для (i in ( г = S.event && v.global) && 0 == S.active ++ && S.event.trigger ( "ajaxStart"), v.type = v.type.toUpperCase (), v.hasContent =! Ot.test (v. тип), е = v.url.replace (кварты ""), v.hasContent? v.data && && v.processData 0 === (v.contentType || ""). IndexOf ( "применение / х-WWW-form- urlencoded ") && (v.data = v.data.replace (JT," + ")) :( а = v.url.slice (f.length), v.data && (v.processData ||" строка "= = typeof v.data) && (f + = (Et.test (f)? "&": "?") + v.data, удалить v.data) ,! 1 === v.cache && (f = f. заменить (Lt, "$ 1"), O = (Et.test (F) "&"?: "?") + "_ =" + Ct.guid +++ о), v.url = е + о) , v.ifModified && (S.LastModified [е] && T.setRequestHeader ( "If-Modified-С", S.lastModified [е]), S.etag [е] && T.setRequestHeader ( "If-None-Match", S.etag [е])) (v.data && v.hasContent &&! 1! == v.contentType || t.contentType) && T.setRequestHeader ( "Content-Type", v.contentType), T.setRequestHeader ( "Accept", v.dataTypes [0] && v.accepts [v.dataTypes [0]]? v.accepts [v.dataTypes [0]] + ("*"! == v.dataTypes [0]? "," + It + "; q = 0,01": ""): v.accepts! [ "*"]), v.headers) T.setRequestHeader (я, v.headers [я]), если (v.beforeSend && (1 === v.beforeSend.call (у , T, v) || h)) вернуть T.abort (); if (u = "abort", b.add (v.complete), T.done (v.success), T.fail (v.error ), c = Bt (Mt, v, t, T)) {if (T.readyState = 1, g && m.trigger ("ajaxSend", [T, v]), h) return T; v.async && 0 <v.Тайм-аут && (D = C.setTimeout (функция () {T.abort("тайм-аут")}, v.timeout)); попытка {!H = 1, c.send (А, Л)} поймать (е) {если(h) бросить e; l (-1, e)}} иначе l (-1, «Нет транспорта»); функция l (e, t, n, r) {var i, o, a, s, u, l = t; h || (h =! 0, d && C.clearTimeout (d), c = void 0, p = r || "", T.readyState = 0 <e? 4: 0, i = 200 <= e && e <300 || 304 === e, n && (s = function (e, t, n) {var r, i, o, a, s = e.contents, u = e.dataTypes; while ("*" === u [0]) u.shift (), void 0 === r && (r = e.mimeType || t.getResponseHeader ("Content-Type")); if (r) для (i в s) if (s [i] && s [i] .test (r)) {u.unshift(i); break} if (u [0] в n) o = u [0]; else {for (i в n) {if (! u [0] || e.converters [i + "" + u [0]]) {o = i; break} a || (a = i)} o = o || a} if (o ) return o! == u [0] && u.unshift (o), n [o]} (v, T, n)) ,! i && - 1 <S.inArray ({}), s = function (e, t, n, r) {var i, o, a, s, u, l = {}, c = e.dataTypes.slice () ; if (c [1]) для (a в e.converters) l [a.toLowerCase ()] = e.converters [a]; o = c.shift (); while (o) if (e.responseFields [ о] && (п [e.responseFields [о]] = т) ,! у && г && && e.dataFilter (т = e.dataFilter (т, e.dataType)), и = O, O = c.shift ()), если ( "*" === o) o = u; иначе if ("*"! == u && u! == o) {if (! (a = l [u + "" + o] || l ["*" + o])) для (i в l) if ((s = i.split ("")) [1] === o && (a = l [u + "" + s [0]] || l ["* «+ s [0]])) {!0 === стоит ? а = л[я] : !0! == л[я] && (о = с[0], c.unshift(с[1])); break} if (! 0! == a) if (a && e ["throws"]) t = a (t), иначе попытайтесь {t = a(t)} catch (e) {return {state: " parsererror ", ошибка: a? e:" Нет преобразования из "+ u +" в "+ o}}} return {состояние:" успех ", данные: t}} (v, s, T, i), i? ( противifModified && ((и = T.getResponseHeader ( "Last-Modified")) && (S.lastModified [е] = и), (и = T.getResponseHeader ( "ETag")) && (S.etag [е] = и )), 204 === е || "голова" === v.type л = "nocontent":? 304 === е л = "notmodified" :( л = s.state, о = s.data , I =! (а = s.error))) :( а = л! е л && || (л = "ошибка", е <0 && (е = 0))), T.status = е, T.statusText = (т || л) + "", я x.resolveWith (у, [о, L, T]): x.rejectWith (у, [T, L, а]), T.statusCode (ш), w = void 0, g && m.trigger (i? "ajaxSuccess": "ajaxError", [T, v, i? o: a]), b.fireWith (y, [T, l]), g && (m.trigger ("ajaxComplete", [T, v]), - S.active || S.event.trigger ("ajaxStop")))} return T}, getJSON: function (e, t, n) {return S. get (e, t, n, "json")}, getScript: function (e, t) {return S.get (e, void 0, t, "script")}}), S.each (["get »,"post"], function (e, i) {S[i] = функция(e, t, n, r) {вернуть m (t) && (r = r || n, n = t, t = void 0 ), S.ajax (S.extend ({URL: адрес, тип: I, тип данных: R, данные: т, успех: п}, S.isPlainObject (е) && е))}}), S.ajaxPrefilter (функция (e) {var t; for (t в e.headers) "content-type" === t.toLowerCase () && (e.contentType = e.headers [t] || "")}), S. _evalUrl = function (e, t, n) {вернуть S.ajax ({url: e, тип: «GET», dataType: «script», кэш:! 0, асинхронный:! 1, глобальный:! 1, преобразователи: {"текстовый скрипт": function () {}}, dataFilter: function (e) {S.globalEval(e, t, n)}})}, S.fn.extend ({wrapAll: function (e) {var t; вернуть это [0] && (m (e) && (e = e.call (this [0])), t = S (e, this [0] .ownerDocument) .eq (0) .clone (! 0), этот [0] .parentNode && t.insertBefore (this [0]), t.map (function () {var e = this; while (e.firstElementChild) e = e.firstElementChild; return e}). Append ( это)),this}, wrapInner: function (n) {return m (n)? this.each (function (e) {S(this).wrapInner(n.call(this, e))}): this.each (function ( ) {var e = S (this), t = e.contents (); t.length? t.wrapAll (n): e.append (n)})}, wrap: function (t) {var n = m (t); вернуть this.each (function (e) {S(this).wrapAll(n ? t.call(this, e) : t)})}, развернуть: function (e) {вернуть this.parent ( е) .not ( "тело"). каждая (функция () {S(это).replaceWith(this.childNodes)}), это}}), S.expr.pseudos.hidden = функция (е) {возвращение!{возвращение!!(e.offsetWidth || e.offsetHeight || e.getClientRects().длина)}, S .ajaxSettings.xhr = function () {try {return new C.XMLHttpRequest} catch (e) {}}; var _t = {0: 200,1223: 204}, zt = S.ajaxSettings.xhr (); y. cors = !! zt && "withCredentials" в zt, y.ajax = zt = !! zt, S.ajaxTransport (function (i) {var o, a; if (y.cors || zt &&! i.crossDomain) return {Отправить:function (e, t) {var n, r = i.xhr (); if (r.open (i.type, i.url, i.async, i.username, i.password), i.xhrFields) для (n в i.xhrFields) r [n] = i.xhrFields [n]; for (n в i.mimeType && r.overrideMimeType && r.overrideMimeType (i.mimeType), i.crossDomain || e ["X-Requested-With" ] || (e ["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader (n, e [n]); o = function (e) {return function () {o && (o = а = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = NULL, "Прервать" === е r.abort (): "ошибка" === е "число"?! = typeof r.status? t (0, "ошибка"): t (r.status, r.statusText): t (_t [r.status] || r.status, r.statusText, "text"! == (r.responseType || "text") || "string"! = typeof r.responseText? {binary: r.response}: {text: r.responseText}, r.getAllResponseHeaders ()))}}, r. OnLoad = о (), а = r.onerror = г.ontimeout = o ("ошибка"), void 0! == r.onabort? r.onabort = a: r.onreadystatechange = function () {4 === r.readyState && C.setTimeout(function () { o && a() })}, o = o ("abort"); try {r.send(i.hasContent && i.data || null)} catch (e) {if (o) throw e}}, прерывание: function () {o && o()}}}), S.ajaxPrefilter (function (e) {e.crossDomain && (e.contents.script = !1)}), S.ajaxSetup ({принимает: {script: "text / javascript, application / javascript, application / ecmascript, application / x-ecmascript "}, содержимое: {script: / \ b (?: java | ecma) script \ b /}, преобразователи: {" text script ": function (e) {return S.globalEval (e), e}}}), S.ajaxPrefilter ("скрипт", функция (e) {void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET ")}), S.ajaxTransport (" скрипт ", функция (n) {var r, i; if (n.crossDomain || n.scriptAttrs) return {send:Функция (е, т) {г = S("<скрипт>") атр (n.scriptAttrs || {}) проп ({кодировка: n.scriptCharset, SRC: n.url})... на ( "нагрузки ошибка», I = функция (е) {r.remove(), I = NULL, е && T("ошибка" === e.type 404: 200, e.type)}), E.head.appendChild (г [0])}, прервать: function () {i && i()}}}); var Ut, Xt = [], Vt = / (=) \? (? = & | $) | \? \? /; S.ajaxSetup ({jsonp: "обратный вызов", jsonpCallback: function () {var e = Xt.pop () || S.expando + "_" + Ct.guid ++; вернуть это [e] =! 0, e}} ), S.ajaxPrefilter ("json jsonp", функция (e, t, n) {var r, i, o, a =! 1! == e.jsonp && (Vt.test (e.url)? "Url") : "string" == typeof e.data && 0 === (e.contentType || ""). indexOf ("application / x-www-form-urlencoded") && Vt.test (e.data) && "data") ; if (a || "jsonp" === e.dataTypes [0]) return r = e.jsonpCallback = m (e.jsonpCallback)? e.jsonpCallback (): e.jsonpCallback, а е [а] = е [а] .Надеть (Vt, "$ 1" + г) :! 1 == e.jsonp && (e.url + = (Et.test (е! .url)? "&": "?") + e.jsonp + "=" + r), e.converters ["script json"] = function () {return o || S.error (r + "не был вызван "), O [0]}, e.dataTypes [0] =" JSON», I = С [г], С [г] = функция () {O =} аргументов, n.always (функция () {пустота 0 === I S (С) .removeProp (г): C [г] = я, е [г] && (e.jsonpCallback = t.jsonpCallback, Xt.push (г)), о && м (я) && я (o [0]), o = i = void 0}), "script"}), y.createHTMLDocument = ((Ut = E.implementation.createHTMLDocument (""). body) .innerHTML = "<form> < /form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n) enjreturn"string"!=typeof e? [] :( " логическое значение "== typeof t && (n = t, t =! 1), t || (y.createHTMLDocument? ((г = (т = E.implementation.createHTMLDocument ( "база")) = HREF E.location.href, t.head.appendChild (г) ")) createElement (.".): т = Е) , о =! п && [], (I = N.exec (е))? [t.createElement (я [1])] :( я = х ([е], т, о), о && && o.length S (O ) .remove (), S.merge ([], i.childNodes))); var r, i, o}, S.fn.load = function (e, t, n) {var r, i, o, a = this, s = e.indexOf (""); return-1 <s && (r = vt (e.slice (s)), e = e.slice (0, s)), m (t)? ( n = t, t = void 0): t && "object" == typeof t && (i = "POST"), 0 <a.length && S.ajax ({url: e, type: i || "GET", dataType: "HTML", данные:.?.. т}) сделано (функция (е) {о = аргументы, a.html(г S("<DIV>") Append(S.parseHTML(е)) найти(г) : д.)}) всегда (п && функция (е, т) {a.each(функция() { n.apply(это, о || [e.responseText, т, е]) })}), это}, S.expr.pseudos.animated = function (t) {return S.grep (S.timers, function (e) {return t === e.elem}). length}, S.offset = {setOffset: function (e, t, n) {var r, i, o, a, s, u, l = S.css (e, "position"), c = S (e), f = {}; "static" === l && (e.style .position = "относительно"), с = c.offset (), о = S.css (е, "верхний"), и = S.css (е, "влево"), ( "абсолютный" === л || "фиксированные" === л) && -. 1 <({}, S))), нуль ! = t.top && (f.top = t.top-s.top + a), null! = t.left && (f.left = t.left-s.left + i), "использование" в t? t .using.call (e, f) :( "число" == typeof f.top && (f.top + = "px"), "number" == typeof f.left && (f.left + = "px"), c .css (е))}}, S.fn.extend ({смещение: функция (т) {если(аргументы.длина) return void 0 === t? this: this.each (function (e) {S.offset.setOffset(this, t, e)}); var e, n, r = this [0]; вернуть r ?.? r.getClientRects () длина (е = r.getBoundingClientRect (), п = r.ownerDocument.defaultView, {верх: e.top + n.pageYOffset, слева: e.left + n.pageXOffset}): {top: 0, left: 0}: void 0}, position: function () {if (this [0]) {var e, t, n, r = this [0], i = {top: 0, left: 0}, если ( "фиксированные" === S.css (г, "позиция")) т = r.getBoundingClientRect (); еще {т = this.offset(), п = r.ownerDocument, е = г.offsetParent || n.documentElement; в то время как (е && (е === n.body || е === n.documentElement) && "статический" === S.css (е, "позиция")) е = е. ParentNode;!.! е && е == г && 1 === e.nodeType && ((я = S (е) .offset ()) верхняя часть + = S.css (е, "borderTopWidth", 0), i.left + = S.css (е, "borderLeftWidth", 0!))} {возвращение верхней части: t.top-i.top-S.css (г, "MarginTop", 0), слева: t.left-я.left-S.css (r, "marginLeft",! 0)}}}, offsetParent: function () {вернуть this.map (function () {var e = this.offsetParent; while (e && "static" === S.css (e, "position")) e = e.offsetParent; return e || re})}}), S.each ({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, функция (t, i) {var o = "pageYOffset" === i; S.fn [t] = function (e) {return $ (this, function (e, t, n) {var r; if (x (e)?) r = e: 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r? r [i]: e [t]; r? r.scrollTo (o? r.pageXOffset : N, O п:? r.pageYOffset): е [т] = п}, т, е, arguments.length)}}), S.each ([ "верх", "влево"], функция (е, n) {S.cssHooks[n] = $ e (y.pixelPosition, function (e, t) {if (t), вернуть t = Be (e, n), Me.test (t)? S (e). положение () [N] + "ПВ": т})}), S.each ({высота: "высота", ширина: "ширина"}, функция (a, s) {S.each({ обивка: { S.fn[o] = function (e, t) { var n = arguments.length && (r || "boolean"! = typeof e), i = r || (!0 === e || !0 === t ? "margin" : "border"); вернуть $ (this, function (e, t, n) {var r ; return x (e)? 0 === o.indexOf ("external")? e ["inner" + a]: e.document.documentElement ["client" + a]: 9 === e.nodeType? (г = e.documentElement, Math.max (e.body [ "прокрутки" + а], г [ "прокрутки" + а], e.body [ "смещение" + а], г [ "смещение" + а] , r ["client" + a])): void 0 === n? S.css (e, t, i): S.style (e, t, n, i)}, s, n? e: void 0, n)}})}), S.each (["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {S.fn[t] = function (e) { вернуть this.on(t, e) }}), S.fn.extend ({bind: function (e, t, n) {вернуть this.on (e, ноль, т,n)}, unbind: function (e, t) {вернуть this.off (e, null, t)}, делегат: function (e, t, n, r) {вернуть this.on (t, e, n, r)}, undelegate: function (e, t, n) {return 1 === arguments.length? this.off (e, "**"): this.off (t, e || "**", n)}, hover: function (e, t) {return this.mouseenter (e) .mouseleave (t || e)}}), S.each ("размытие фокуса в фокусе при изменении размера при прокрутке прокрутки нажмите dblclick mousedown mouseup mousemove mouseover mouseout mouseout mouseenter mouseleave изменить выберите отправить отправить нажатие клавиши keyup keyup contextmenu ".split (" "), function (e, n) {S.fn[n] = function (e, t) { return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n) }}); var Gt = / ^ [\ s \ uFEFF \ xA0] + | [\ s \ uFEFF \ xA0] + $ / g; S.proxy = function (e, t) {var n, r, i; if ("строка" == typeof t && (n = e [t], t = e, e = n), m (e)) return r = s. call (arguments, 2), (i = function () {return e.apply (t || this, r.concat (s.call (arguments)))}). guid = e.справ = e.guid || S.guid ++, я}, S.holdReady = функция (е) {е S.readyWait ++: (! 0) S.ready}, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = А, S.isFunction = м, S.isWindow = х, S.camelCase = х, S.type = ш, S.now = Date.now, S.isNumeric = функция (е) {var t = S.type (e); return ("число" === t || "string" === t) &&! isNaN (e-parseFloat (e))}, S.trim = function (e ) {return null == e? "" :( e + ""). replace (Gt, "")}, "function" == typeof define && define.amd && define ("jquery", [], function () {return S} ); var Yt = C.jQuery, Qt = C. $; вернуть S.noConflict = function (e) {вернуть C. $ === S && (C. $ = Qt), e && C.jQuery === S && (C .jQuery = Yt), S}, "undefined" == typeof e && (C.jQuery = C. $ = S), S});S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function (e) {var t = S.type (e); return ("число" === t || "string" === t) &&! IsNaN (e-parseFloat (e))}, S.trim = function (e) {вернуть ноль == e? "" :( e + ""). replace (Gt, "")}, "function" == typeof define && define.amd && define ("jquery", [], function () {return S}); var Yt = C.jQuery, Qt = C. $; Return S.noConflict = function (e) {return C. $ === S && (C. $ = Qt), e && C.jQuery === S && (C.jQuery = Yt ), S}, "undefined" == typeof e && (C.jQuery = C. $ = S), S});S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function (e) {var t = S.type (e); return ("число" === t || "string" === t) &&! IsNaN (e-parseFloat (e))}, S.trim = function (e) {вернуть ноль == e? "" :( e + ""). replace (Gt, "")}, "function" == typeof define && define.amd && define ("jquery", [], function () {return S}); var Yt = C.jQuery, Qt = C. $; Return S.noConflict = function (e) {return C. $ === S && (C. $ = Qt), e && C.jQuery === S && (C.jQuery = Yt ), S}, "undefined" == typeof e && (C.jQuery = C. $ = S), S});trim = function (e) {return null == e? "" :( e + ""). replace (Gt, "")}, "function" == typeof define && define.amd && define ("jquery", [], function ( ) {return S}); var Yt = C.jQuery, Qt = C. $; return S.noConflict = function (e) {return C. $ === S && (C. $ = Qt), e && C.jQuery = == S && (C.jQuery = Yt), S}, "undefined" == typeof e && (C.jQuery = C. $ = S), S});trim = function (e) {return null == e? "" :( e + ""). replace (Gt, "")}, "function" == typeof define && define.amd && define ("jquery", [], function ( ) {return S}); var Yt = C.jQuery, Qt = C. $; return S.noConflict = function (e) {return C. $ === S && (C. $ = Qt), e && C.jQuery = == S && (C.jQuery = Yt), S}, "undefined" == typeof e && (C.jQuery = C. $ = S), S});