(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1931], {
        44856: function (e, a, s) {
            Promise.resolve().then(s.bind(s, 6072)), Promise.resolve().then(s.bind(s, 67230)), Promise.resolve().then(s.bind(s, 98592))
        },
        6072: function (e, a, s) {
            "use strict";
            var t = s(57437),
                i = s(2265);
            s(48313);
            var o = s(87138);
            a.default = () => {
                let [e, a] = (0, i.useState)(!1), s = () => {
                    let e = Date.now();
                    window.open("https://dextools.io/app/en/ether/pair-explorer/0xf07a84f0732dfe8eea0d3961bcd8f62c761ff508?t=".concat(e), "_blank", "noopener,noreferrer")
                };
                return (0, i.useEffect)(() => {
                    a("true" === localStorage.getItem("darkMode"));
                    let e = e => {
                        a(e.detail)
                    };
                    return window.addEventListener("darkModeChange", e), () => {
                        window.removeEventListener("darkModeChange", e)
                    }
                }, []), (0, t.jsx)(t.Fragment, {
                    children: (0, t.jsx)("footer", {
                        className: "footer pt-5 position-relative bg-".concat(!0 == e ? "white" : "black", " text-").concat(!0 == e ? "black" : "white"),
                        children: (0, t.jsxs)("div", {
                            className: "container-fluid px-2 px-lg-5",
                            children: [(0, t.jsxs)("div", {
                                className: "row m-0",
                                children: [(0, t.jsx)("div", {
                                    className: "col-lg-8 p-lg-0",
                                    children: (0, t.jsxs)
                                }), (0, t.jsx)("div", {
                                    className: "col-lg-4 d-flex justify-content-around justify-content-lg-end mt-5 mt-lg-0 mt-xl-0",
                                    children: (0, t.jsxs)("div", {
                                        className: "row py-5 px-lg-5 px-md-3 px-3 footer-image-right footer-text-right d-flex justify-content-evenly align-items-start h-100 w-100 text-".concat(!0 == e ? "black" : "white"),
                                        children: [(0, t.jsx)("div", {
                                            className: "col-lg-4 m-0 p-0"
                                        }), (0, t.jsxs)("div", {
                                            className: "col-lg-8 m-0 p-lg-0 ps-5",
                                            children: [(0, t.jsxs)("div", {
                                                children: [(0, t.jsx)("p", {
                                                    className: " metrophobic-txt d-flex justify-content-start align-items-start text-left flex-column flex-wrap m-0",
                                                    children: "Do you want to learn more about PINK AI"
                                                }), (0, t.jsx)("span", {
                                                    className: "ask-hash metrophobic-txt",
                                                    children: "Ask PINK AI"
                                                })]
                                            }), (0, t.jsx)("div", {
                                                className: "mt-5",
                                                children: (0, t.jsxs)("button", {
                                                    className: "px-4 my-2 footer-right-btn metrophobic-txt d-flex justify-content-center align-items-center text-center border border-".concat(!0 == e ? "white" : "black", " bg-").concat(!0 == e ? "white" : "black", " text-").concat(!0 == e ? "black" : "white"),
                                                    children: [(0, t.jsx)("span", {
                                                        className: "talk-to-hash ",
                                                        children: "Talk to PINK"
                                                    }), (0, t.jsx)("img", {
                                                        className: "ms-3",
                                                        src: "".concat("https://hashai.s3.eu-west-2.amazonaws.com/storage/footer/mic.svg"),
                                                        alt: "img",
                                                        width: "14px",
                                                        height: "19px"
                                                    })]
                                                })
                                            }), (0, t.jsx)("div", {
                                                className: "comingcoon_section",
                                                children: "*Feature Coming Soon!"
                                            })]
                                        })]
                                    })
                                })]
                            }), (0, t.jsxs)("div", {
                                className: "copyright py-4 mt-3 text-center orbitron-txt",
                                children: [(0, t.jsx)("p", {
                                    className: "contract-address",
                                    children: "Contract address: 0xcomingsoon"
                                }), (0, t.jsxs)("p", {
                                    children: ["\xa9", " ", (0, t.jsx)(o.default, {
                                        className: "text-decoration-none color-purple",
                                        href: "/",
                                        children: "PINKAI."
                                    }), " ", "2024, All rights reserved."]
                                })]
                            })]
                        })
                    })
                })
            }
        },
        67230: function (e, a, s) {
            "use strict";
            s.d(a, {
                default: function () {
                    return n
                }
            });
            var t = s(57437),
                i = s(2265);
            s(65221);
            var o = s(87138);
            (0, s(57818).default)(() => s.e(2096).then(s.bind(s, 92096)), {
                loadableGenerated: {
                    webpack: () => [92096]
                },
                ssr: !1
            });
            var n = () => {
                let [e, a] = (0, i.useState)(!1), [s, n] = (0, i.useState)(!1);
                (0, i.useEffect)(() => {
                    a("true" === localStorage.getItem("darkModeIs"))
                }, []);
                let l = e => {
                        e.preventDefault(), window.open("https://app.uniswap.org/explore/tokens/ethereum/0xcomingsoon", "_blank")
                    },
                    c = e => {
                        e.preventDefault(), window.open("https://app-pink-ai-bat2.vercel.app//", "_blank")
                    };
                return (0, t.jsxs)("header", {
                    className: "header  sticky-top bg-".concat(!0 == e ? "white" : "black", " ").concat(s ? "expanded" : "collapsed"),
                    children: [(0, t.jsx)("div", {
                        className: "container-fluid px-0 h-100",
                        children: (0, t.jsxs)("nav", {
                            className: "navbar h-100 navbar-expand-lg navbar-white mx-lg-5 px-lg-0 px-3 py-4 align-items-start",
                            children: [(0, t.jsx)(o.default, {
                                className: "navbar-brand",
                                href: "/",
                                children: !0 == e ? (0, t.jsx)("img", {
                                    src: "".concat("https://hashai.s3.eu-west-2.amazonaws.com/storage/header/HashAI-Dark.svg"),
                                    alt: "logo",
                                    className: "logo"
                                }) : (0, t.jsx)("img", {
                                    src: "".concat("/logo.png"),
                                    alt: "logo",
                                    className: "logo"
                                })
                            }), (0, t.jsxs)("button", {
                                className: "navbar-toggler collapsed border-0 px-0",
                                type: "button",
                                "data-bs-toggle": "collapse",
                                "data-bs-target": "#navbarSupportedContent",
                                "aria-controls": "navbarSupportedContent",
                                "aria-expanded": "false",
                                "aria-label": "Toggle navigation",
                                onClick: () => {
                                    n(!s)
                                },
                                children: [(0, t.jsx)("span", {
                                    className: "icon-bar"
                                }), (0, t.jsx)("span", {
                                    className: "icon-bar"
                                })]
                            }), (0, t.jsxs)("div", {
                                className: "collapse navbar-collapse justify-content-end",
                                id: "navbarSupportedContent",
                                children: [(0, t.jsxs)("ul", {
                                    className: "align-items-center d-flex gap-4 gap-lg-3 justify-content-center navbar-center navbar-nav w-100 mt-5 mt-lg-0",
                                    "data-toggle": "collapse",
                                    "data-target": "#navbar-collapse-x",
                                    children: [(0, t.jsx)("li", {
                                        className: "nav-item",
                                        children: (0, t.jsx)(o.default, {
                                            className: "nav-link header-nav-link text-".concat(!0 == e ? "black" : "white"),
                                            href: "/about",
                                            children: "About"
                                        })
                                    }), (0, t.jsx)("li", {
                                        className: "nav-item",
                                        children: (0, t.jsx)(o.default, {
                                            className: "nav-link header-nav-link text-".concat(!0 == e ? "black" : "white"),
                                            href: "/solutions",
                                            children: "Solutions"
                                        })
                                    }),(0, t.jsx)("li", {
                                        className: "nav-item",
                                        children: (0, t.jsx)(o.default, {
                                            className: "nav-link header-nav-link text-".concat(!0 == e ? "black" : "white"),
                                            href: "/node-rental",
                                            children: "Node Rental"
                                        })
                                    })]
                                }), (0, t.jsxs)("form", {
                                    className: "d-flex align-items-center text-center justify-content-center float-right flex-lg-row flex-column gap-3",
                                    children: [(0, t.jsx)("button", {
                                        onClick: e => c(e),
                                        className: "text-".concat(!0 == e ? "white" : "black", " launch-dapp-btn orbitron-txt text-white"),
                                        children: "Launch DApp"
                                    }), (0, t.jsx)("button", {
                                        onClick: e => l(e),
                                        className: "text-".concat(!0 == e ? "white" : "black", " custom-btn orbitron-txt"),
                                        children: "Buy $PINKAI"
                                    })]
                                })]
                            })]
                        })
                    }), (0, t.jsx)("div", {
                        className: "top-left-shadow z-n1"
                    }), (0, t.jsx)("div", {
                        className: "bottom-right-shadow z-n1"
                    })]
                })
            }
        },
        98592: function (e, a, s) {
            "use strict";
            s.d(a, {
                default: function () {
                    return h
                }
            });
            var t = s(57437),
                i = s(2265);
            s(42016);
            var o = s(87138),
                n = s(66648);
            s(43034), s(54885), s(17322), s(90906), s(9051), s(55291);
            var l = s(17323),
                c = s.n(l);
            s(73023);
            var r = s(44746);
            s(29933);
            var d = e => {
                let {
                    sliderData: a,
                    direction: s
                } = e;
                return (0, t.jsx)(t.Fragment, {
                    children: (0, t.jsx)("div", {
                        className: "app-container",
                        children: (0, t.jsx)("div", {
                            className: "wrapper",
                            children: (0, t.jsxs)("div", {
                                className: "marquee",
                                children: [(0, t.jsx)("div", {
                                    className: "marquee-".concat(s),
                                    children: null == a ? void 0 : a.map((e, a) => (0, t.jsx)("div", {
                                        className: "image-group",
                                        children: (0, t.jsx)("img", {
                                            className: "image",
                                            src: e,
                                            alt: "Image ".concat(a)
                                        })
                                    }, a))
                                }), (0, t.jsx)("div", {
                                    className: "marquee-".concat(s),
                                    children: null == a ? void 0 : a.map((e, a) => (0, t.jsx)("div", {
                                        className: "image-group",
                                        children: (0, t.jsx)("img", {
                                            className: "image",
                                            src: e,
                                            alt: "Image ".concat(a)
                                        })
                                    }, a))
                                })]
                            })
                        })
                    })
                })
            };
            s(53054);
            var h = e => {
                let {
                    fetchData: a,
                    status: s
                } = e, [l, h] = (0, i.useState)([]), [m, x] = (0, i.useState)(""), p = async () => {
                    try {
                        let t = "https://hashai.co.uk/api";
                        window.location.hostname.includes("www") && !window.location.hostname.startsWith("www") && (t = "https://hashai.co.uk/api".replace(/^https:\/\//, "https://www."));
                        let i = await fetch(t, {
                            cache: "no-store"
                        });
                        if (!i.ok) throw Error("API call failed with status: ".concat(i.status));
                        let o = await i.json();
                        if (o && (null == o ? void 0 : o.data)) {
                            var e, a, s;
                            h((null == o ? void 0 : null === (a = o.data["30369"]) || void 0 === a ? void 0 : null === (e = a.quote) || void 0 === e ? void 0 : e.USD) || []), x((null == o ? void 0 : null === (s = o.data["30369"]) || void 0 === s ? void 0 : s.total_supply) || "")
                        } else throw Error("Invalid data format from API")
                    } catch (e) {
                        return console.error("Error fetching data:", e), {
                            cryptoData: null,
                            totalSupply: null
                        }
                    }
                };
                (0, i.useEffect)(() => {
                    p();
                    let e = setInterval(() => {
                        p()
                    }, 6e4);
                    return () => clearInterval(e)
                }, []);
                let [u, g] = (0, i.useState)(!1), v = (0, i.useRef)();
                (0, i.useEffect)(() => {
                    c().init({
                        duration: 600
                    }), g("true" === localStorage.getItem("darkMode"));
                    let e = e => {
                        g(e.detail)
                    };
                    return window.addEventListener("darkModeChange", e), () => {
                        window.removeEventListener("darkModeChange", e)
                    }
                }, []);
                let j = () => {
                    window.open("https://app.uniswap.org/explore/tokens/ethereum/0xcomingsoon", "_blank")
                };

                function w(e) {
                    return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                return (0, t.jsx)(t.Fragment, {
                    children: (0, t.jsxs)("div", {
                        className: "bg-".concat(u ? "white" : "black", " text-").concat(u ? "black" : "white", " pb-5"),
                        children: [(0, t.jsxs)("section", {
                            className: "heroSection home d-flex text-left align-items-start flex-column orbitron-txt",
                            children: [(0, t.jsx)("video", {
                                muted: !0,
                                loop: !0,
                                autoPlay: !0,
                                id: "myVideo",
                                style: {
                                    width: "100%"
                                },
                                playsInline: !0,
                                children: (0, t.jsx)("source", {
                                    src: "https://hashai.s3.eu-west-2.amazonaws.com/storage/home/home_top_banner.mp4",
                                    type: "video/mp4"
                                })
                            }), (0, t.jsx)("div", {
                                className: "content w-100",
                                children: (0, t.jsxs)("div", {
                                    className: "container-fluid px-3 px-lg-5",
                                    children: [(0, t.jsxs)("h1", {
                                        className: "text-".concat(u ? "black" : "white", " main-heading-home text-center text-lg-start count-down-title m-0"),
                                        children: ["Revolutionary Artificial Intelligence, ", (0, t.jsx)("br", {}), "Optimizing Crypto Mining"]
                                    }), (0, t.jsxs)("div", {
                                        className: "my-5 d-flex gap-4 justify-content-center justify-content-lg-start",
                                        children: [(0, t.jsx)(o.default, {
                                            className: "",
                                            href: "https://etherscan.io/token/",
                                            target: "_blank",
                                            children: (0, t.jsxs)("button", {
                                                className: "text-".concat(u ? "white" : "black", " custom-btn"),
                                                children: [(0, t.jsx)("img", {
                                                    src: "".concat("https://hashai.s3.eu-west-2.amazonaws.com/storage/home/contract-img.svg"),
                                                    alt: "contract-img",
                                                    height: "36px",
                                                    width: "36px",
                                                    unoptimized: !0
                                                }), "Contract"]
                                            })
                                        }), (0, t.jsx)(o.default, {
                                            className: "",
                                            href: "https://t.me/",
                                            target: "_blank",
                                            children: (0, t.jsxs)("button", {
                                                className: "text-".concat(u ? "white" : "black", " custom-btn"),
                                                children: [(0, t.jsx)("img", {
                                                    src: "".concat("https://hashai.s3.eu-west-2.amazonaws.com/storage/home/telegram-img.svg"),
                                                    alt: "telegram-img",
                                                    height: "36px",
                                                    width: "38px",
                                                    unoptimized: !0
                                                }), " ", "Community"]
                                            })
                                        })]
                                    })]
                                })
                            })]
                        }), (0, t.jsxs)("section", {
                            className: "goalSection z-3",
                            children: [(0, t.jsx)("video", {
                                muted: !0,
                                loop: !0,
                                autoPlay: !0,
                                id: "goalSectionBG",
                                playsInline: !0,
                                children: (0, t.jsx)(t.Fragment, {
                                    children: (0, t.jsx)("source", {
                                        src: "https://hashai.s3.eu-west-2.amazonaws.com/storage/home/secondary_bg_website.mp4",
                                        type: "video/mp4"
                                    })
                                })
                            }), (0, t.jsxs)("div", {
                                className: "content w-100 h-100 pb-5",
                                children: [(0, t.jsxs)("div", {
                                    className: "home-center d-flex justify-content-start text-center align-items-center flex-column orbitron-txt mt-5 mb-5",
                                    children: [(0, t.jsxs)("div", {
                                        className: "w-100",
                                        children: [(0, t.jsx)("span", {
                                            className: "home-center-btn orbitron-txt my-3",
                                            "data-aos": "fade-up",
                                            children: "Ask PINK AI"
                                        }), (0, t.jsx)("div", {
                                            className: "text-center",
                                            children: (0, t.jsx)("div", {
                                                className: "p-0 mt-3",
                                                children: (0, t.jsxs)("div", {
                                                    className: "ask-icon",
                                                    children: [(0, t.jsx)("audio", {
                                                        ref: v,
                                                        src: "https://hashai.s3.eu-west-2.amazonaws.com/storage/home/ask_hash_opt_6.mp3"
                                                    }), (0, t.jsx)("video", {
                                                        muted: !0,
                                                        loop: !0,
                                                        autoPlay: !0,
                                                        id: "askHash",
                                                        style: {
                                                            width: "206px",
                                                            cursor: "pointer"
                                                        },
                                                        playsInline: !0,
                                                        onClick: () => {
                                                            v.current && v.current.play()
                                                        },
                                                        children: (0, t.jsx)("source", {
                                                            src: "https://hashai.s3.eu-west-2.amazonaws.com/storage/home/ask_hash.mp4",
                                                            type: "video/mp4"
                                                        })
                                                    })]
                                                })
                                            })
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: "wave-container d-flex justify-content-center text-center align-items-center w-100 d-none",
                                        children: [(0, t.jsx)("div", {
                                            className: "wave"
                                        }), (0, t.jsx)("div", {
                                            className: "wave"
                                        }), (0, t.jsx)("div", {
                                            className: "wave"
                                        }), (0, t.jsx)("div", {
                                            className: "wave"
                                        }), (0, t.jsx)("div", {
                                            className: "wave"
                                        }), (0, t.jsx)("div", {
                                            className: "wave"
                                        }), (0, t.jsx)("div", {
                                            className: "wave"
                                        }), (0, t.jsx)("div", {
                                            className: "wave"
                                        }), (0, t.jsx)("div", {
                                            className: "wave"
                                        }), (0, t.jsx)("div", {
                                            className: "wave"
                                        }), (0, t.jsx)("div", {
                                            className: "wave"
                                        }), (0, t.jsx)("div", {
                                            className: "wave"
                                        }), (0, t.jsx)("div", {
                                            className: "wave"
                                        }), (0, t.jsx)("div", {
                                            className: "wave"
                                        }), (0, t.jsx)("div", {
                                            className: "wave"
                                        }), (0, t.jsx)("div", {
                                            className: "wave"
                                        }), (0, t.jsx)("div", {
                                            className: "wave"
                                        }), (0, t.jsx)("div", {
                                            className: "wave"
                                        }), (0, t.jsx)("div", {
                                            className: "wave"
                                        }), (0, t.jsx)("div", {
                                            className: "wave"
                                        }), (0, t.jsx)("div", {
                                            className: "wave"
                                        }), (0, t.jsx)("div", {
                                            className: "wave"
                                        }), (0, t.jsx)("div", {
                                            className: "wave"
                                        }), (0, t.jsx)("div", {
                                            className: "wave"
                                        }), (0, t.jsx)("div", {
                                            className: "wave"
                                        }), (0, t.jsx)("div", {
                                            className: "wave"
                                        }), (0, t.jsx)("div", {
                                            className: "wave"
                                        }), (0, t.jsx)("div", {
                                            className: "wave"
                                        }), (0, t.jsx)("div", {
                                            className: "wave"
                                        }), (0, t.jsx)("div", {
                                            className: "wave"
                                        }), (0, t.jsx)("div", {
                                            className: "wave"
                                        }), (0, t.jsx)("div", {
                                            className: "wave"
                                        }), (0, t.jsx)("div", {
                                            className: "wave"
                                        }), (0, t.jsx)("div", {
                                            className: "wave"
                                        })]
                                    }), (0, t.jsx)("span", {
                                        className: "feature-coming-soon metrophobic-txt mt-2 mt-lg-4 mb-lg-5 text-".concat(!0 == u ? "black" : "white", " my-3"),
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "1000",
                                        children: "Feature Coming Soon"
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: "goal-div h-100",
                                    children: [(0, t.jsx)("div", {
                                        className: "container-fluid px-3 px-lg-5 goals",
                                        children: (0, t.jsxs)("div", {
                                            className: "row p-0 m-0 row-cols-1 row-cols-md-3",
                                            children: [(0, t.jsx)("div", {
                                                className: "col goals-value-box metrophobic-txt mb-lg-5 mb-4",
                                                "data-aos": "fade-up",
                                                "data-aos-duration": "1000",
                                                children: (0, t.jsxs)("div", {
                                                    className: "card h-100 align-items-center d-flex justify-content-center p-3 text-".concat(!0 == u ? "black" : "white", " bg-").concat(!0 == u ? "white" : "black"),
                                                    children: [(0, t.jsx)("h5", {
                                                        className: "orbitron-txt",
                                                        children: "Future-Proof Innovation"
                                                    }), (0, t.jsx)("p", {
                                                        className: "text-center",
                                                        children: "We utilize ever-evolving artificial intelligence and proactively develop mining solutions that meet the diverse needs of crypto."
                                                    })]
                                                })
                                            }), (0, t.jsx)("div", {
                                                className: "col goals-value-box metrophobic-txt mb-lg-5 mb-4",
                                                "data-aos": "fade-up",
                                                "data-aos-duration": "2000",
                                                children: (0, t.jsxs)("div", {
                                                    className: "card h-100 align-items-center d-flex justify-content-center p-3 text-".concat(!0 == u ? "black" : "white", " bg-").concat(!0 == u ? "white" : "black"),
                                                    children: [(0, t.jsx)("h5", {
                                                        className: "orbitron-txt",
                                                        children: "Sustainability by Nature"
                                                    }), (0, t.jsx)("p", {
                                                        className: "text-center",
                                                        children: "We advocate for responsible mining practices, eco-friendly energy resources, and invest in solutions for a greener crypto future."
                                                    })]
                                                })
                                            }), (0, t.jsx)("div", {
                                                className: "col goals-value-box metrophobic-txt mb-lg-5 mb-4 ",
                                                "data-aos": "fade-up",
                                                "data-aos-duration": "3000",
                                                children: (0, t.jsxs)("div", {
                                                    className: "card h-100 align-items-center d-flex justify-content-center p-3 text-".concat(!0 == u ? "black" : "white", " bg-").concat(!0 == u ? "white" : "black"),
                                                    children: [(0, t.jsx)("h5", {
                                                        className: "orbitron-txt",
                                                        children: "Transparency"
                                                    }), (0, t.jsx)("p", {
                                                        className: "text-center",
                                                        children: "We believe in open communication and building trust with our community through verifiable data, clear information, and actions."
                                                    })]
                                                })
                                            })]
                                        })
                                    }), (0, t.jsxs)("div", {
                                        className: "home-logo-slider-section1 pb-5",
                                        children: [(0, t.jsx)("div", {
                                            className: "d-block w-100 py-3 home-logo-slider",
                                            children: !0 == u ? (0, t.jsx)(t.Fragment, {
                                                children: (0, t.jsx)("div", {
                                                    className: "slider-container",
                                                    children: (0, t.jsx)(d, {
                                                        sliderData: ["https://hashai.s3.eu-west-2.amazonaws.com/storage/home/asus-light-img.svg", "https://hashai.s3.eu-west-2.amazonaws.com/storage/home/asus-light-img.svg", "https://hashai.s3.eu-west-2.amazonaws.com/storage/home/msi-light-img.svg", "https://hashai.s3.eu-west-2.amazonaws.com/storage/home/amda-light-img.svg", "https://hashai.s3.eu-west-2.amazonaws.com/storage/home/gigabyte-light-img.svg", "https://hashai.s3.eu-west-2.amazonaws.com/storage/home/evga-light-img.svg", "https://hashai.s3.eu-west-2.amazonaws.com/storage/home/zotac-light-img.svg"],
                                                        direction: "rtl"
                                                    })
                                                })
                                            }) : (0, t.jsx)(t.Fragment, {
                                                children: (0, t.jsx)("div", {
                                                    className: "slider-container",
                                                    children: (0, t.jsx)(d, {
                                                        sliderData: ["https://hashai.s3.eu-west-2.amazonaws.com/storage/home/nvidia.svg", "https://hashai.s3.eu-west-2.amazonaws.com/storage/home/asus.svg", "https://hashai.s3.eu-west-2.amazonaws.com/storage/home/msi.svg", "https://hashai.s3.eu-west-2.amazonaws.com/storage/home/amda.svg", "https://hashai.s3.eu-west-2.amazonaws.com/storage/home/gigabyte.svg", "https://hashai.s3.eu-west-2.amazonaws.com/storage/home/evga.svg", "https://hashai.s3.eu-west-2.amazonaws.com/storage/home/zotac.svg"],
                                                        direction: "rtl"
                                                    })
                                                })
                                            })
                                        }), (0, t.jsx)("div", {
                                            className: "d-block w-100 py-3 home-logo-slider",
                                            children: u ? (0, t.jsx)(t.Fragment, {
                                                children: (0, t.jsx)("div", {
                                                    className: "slider-container",
                                                    children: (0, t.jsx)(d, {
                                                        sliderData: ["https://hashai.s3.eu-west-2.amazonaws.com/storage/home/asus-light-img.svg", "https://hashai.s3.eu-west-2.amazonaws.com/storage/home/asus-light-img.svg", "https://hashai.s3.eu-west-2.amazonaws.com/storage/home/msi-light-img.svg", "https://hashai.s3.eu-west-2.amazonaws.com/storage/home/amda-light-img.svg", "https://hashai.s3.eu-west-2.amazonaws.com/storage/home/gigabyte-light-img.svg", "https://hashai.s3.eu-west-2.amazonaws.com/storage/home/evga-light-img.svg", "https://hashai.s3.eu-west-2.amazonaws.com/storage/home/zotac-light-img.svg"],
                                                        direction: "ltr"
                                                    })
                                                })
                                            }) : (0, t.jsx)(t.Fragment, {
                                                children: (0, t.jsx)("div", {
                                                    className: "slider-container",
                                                    children: (0, t.jsx)(d, {
                                                        sliderData: ["https://hashai.s3.eu-west-2.amazonaws.com/storage/home/Neuro Chain.svg", "https://hashai.s3.eu-west-2.amazonaws.com/storage/home/chainswap.png", "https://hashai.s3.eu-west-2.amazonaws.com/storage/home/meta-trust.png", "https://hashai.s3.eu-west-2.amazonaws.com/storage/home/moontropica.png", "https://hashai.s3.eu-west-2.amazonaws.com/storage/home/three-protocol.png", "https://hashai.s3.eu-west-2.amazonaws.com/storage/home/kelp.png", "https://hashai.s3.eu-west-2.amazonaws.com/storage/home/ArcasFullLogo.png", "https://hashai.s3.eu-west-2.amazonaws.com/storage/home/cswap_png.svg", "https://hashai.s3.eu-west-2.amazonaws.com/storage/home/marqueree1.svg", "https://hashai.s3.eu-west-2.amazonaws.com/storage/home/marqueree2.svg", "https://hashai.s3.eu-west-2.amazonaws.com/storage/home/marqueree3.svg", "https://hashai.s3.eu-west-2.amazonaws.com/storage/home/marqueree4.svg", "https://hashai.s3.eu-west-2.amazonaws.com/storage/home/pawchainlogo.svg"],
                                                        direction: "ltr"
                                                    })
                                                })
                                            })
                                        })]
                                    })]
                                })]
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "optimized-section position-relative",
                            children: [(0, t.jsx)("div", {
                                className: "shadowLeft"
                            }), (0, t.jsx)("div", {
                                className: "container-fluid px-3 px-lg-5",
                                children: (0, t.jsxs)("div", {
                                    className: "row m-0 p-0 d-flex justify-content-between text-left align-items-center",
                                    children: [(0, t.jsx)("div", {
                                        className: "align-items-center col-lg-6 d-flex justify-content-center justify-content-lg-end orbitron-txt p-lg-5 mt-5 whitepaper-sec-left order-2 order-lg-1 position-relative",
                                        children: (0, t.jsxs)("div", {
                                            className: "z-3 whitepaper-sec-content text-center text-lg-start",
                                            "data-aos": "fade-up",
                                            children: [(0, t.jsx)("h1", {
                                                children: "Optimized Mining for Maximized Profits "
                                            }), (0, t.jsx)("p", {
                                                className: "metrophobic-txt",
                                                children: "PINK AI tackles the inefficiency of manually switching between profitable coins and optimizes your mining with AI. Our advanced algorithms analyze markets, choose the most profitable coins in real-time, and adjust your rigs automatically - maximizing your returns. This, combined with our focus on sustainability and community, makes PINK AI a leader in AI-powered mining, offering a secure and efficient crypto mining experience."
                                            }), (0, t.jsx)("div", {
                                                className: "my-5 mb-0",
                                                "data-aos": "fade-up",
                                                "data-aos-duration": "1000",
                                                children: (0, t.jsx)(o.default, {
                                                    href: "".concat("https://mighty-2.gitbook.io/pinkai"),
                                                    target: "_blank",
                                                    children: (0, t.jsx)("button", {
                                                        className: "text-".concat(u ? "white" : "black", " custom-btn position-relative white-paper-btn"),
                                                        children: "Doc"
                                                    })
                                                })
                                            })]
                                        })
                                    }), (0, t.jsxs)("div", {
                                        className: "col-lg-6 orbitron-txt p-lg-5 p-md-4 p-sm-3 p-2 position-relative white-paper-bg-container order-1 order-lg-2",
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "1500",
                                        children: [(0, t.jsxs)("div", {
                                            className: "d-flex justify-content-center align-items-center position-relative",
                                            children: [(0, t.jsx)("video", {
                                                muted: !0,
                                                loop: !0,
                                                autoPlay: !0,
                                                id: "performance",
                                                style: {
                                                    width: "100%",
                                                    maxWidth: "512px"
                                                },
                                                playsInline: !0,
                                                className: "z-3",
                                                children: (0, t.jsx)("source", {
                                                    src: "".concat("https://hashai.s3.eu-west-2.amazonaws.com/storage/home/performance_final.mp4"),
                                                    type: "video/mp4"
                                                })
                                            }), (0, t.jsx)(n.default, {
                                                className: "img-fluid position-absolute white-papaer-bg-right z-3",
                                                unoptimized: !0,
                                                src: "https://hashai.s3.eu-west-2.amazonaws.com/storage/home/bg-white-paper-right1.svg",
                                                alt: "logo",
                                                height: 100,
                                                width: 100
                                            })]
                                        }), (0, t.jsx)(t.Fragment, {
                                            children: (0, t.jsx)("div", {
                                                className: "position-absolute z-0 d-none d-lg-block",
                                                children: (0, t.jsx)(r.Xu, {
                                                    children: (0, t.jsx)(r.VS, {
                                                        translateX: [-10, 0, "easeOutQuint"],
                                                        translateY: [-60, -350, "easeInQuint"],
                                                        children: (0, t.jsx)("img", {
                                                            className: "img-fluid",
                                                            unoptimized: !0,
                                                            src: "https://hashai.s3.eu-west-2.amazonaws.com/storage/home/hash-today-top.svg",
                                                            alt: "logo"
                                                        })
                                                    })
                                                })
                                            })
                                        })]
                                    })]
                                })
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "d-block d-lg-none text-center position-relative z-0",
                            children: [(0, t.jsx)("video", {
                                muted: !0,
                                loop: !0,
                                autoPlay: !0,
                                style: {
                                    width: "100%",
                                    maxWidth: "220px"
                                },
                                playsInline: !0,
                                "data-aos": "fade-up",
                                children: (0, t.jsx)("source", {
                                    src: "https://hashai.s3.eu-west-2.amazonaws.com/storage/home/short_line1.mp4",
                                    type: "video/mp4"
                                })
                            }), (0, t.jsx)("div", {
                                class: "top-bottom-shadow z-1"
                            })]
                        }), (0, t.jsx)("div", {
                            className: "position-absolute z-1 d-none d-lg-block",
                            children: (0, t.jsx)(r.Xu, {
                                children: (0, t.jsx)(r.VS, {
                                    translateX: [0, 100, "easeOutQuint"],
                                    translateY: [0, -100, "easeInQuint"],
                                    children: (0, t.jsx)("img", {
                                        className: "img-fluid",
                                        unoptimized: !0,
                                        src: "".concat("https://hashai.s3.eu-west-2.amazonaws.com/storage/home/hash-today-left-img.svg"),
                                        alt: "logo"
                                    })
                                })
                            })
                        }), (0, t.jsxs)("div", {
                            className: "container-fluid px-3 px-lg-5 hash-today-tbl",
                            children: [(0, t.jsx)("h2", {
                                className: "hash-today-title text-center",
                                "data-aos": "fade-up",
                                children: "PINKAI Today"
                            }), (0, t.jsxs)("div", {
                                className: "row hash-today-sec-border border-color z-3 p-0 m-0",
                                children: [(0, t.jsx)("div", {
                                    className: "col-lg-6 hash-today-txt p-0",
                                    children: (0, t.jsxs)("div", {
                                        className: "d-flex h-100 w-100 justify-content-around flex-column",
                                        children: [(0, t.jsxs)("div", {
                                            className: "py-4 px-5 border-bottom-hash-sec",
                                            "data-aos": "fade-up",
                                            children: [(0, t.jsx)("h4", {
                                                className: "hash-today-txt",
                                                children: "Total Supply 100M"
                                            })]
                                        }), (0, t.jsxs)("div", {
                                            className: "py-4 px-5 border-bottom-hash-sec-center",
                                            "data-aos": "fade-up",
                                            children: [(0, t.jsx)("h4", {
                                                className: "hash-today-txt",
                                                children: "LP burnt"
                                            })]
                                        }), (0, t.jsxs)("div", {
                                            className: "py-4 px-5 border-bottom-hash-sec-last",
                                            "data-aos": "fade-up",
                                            children: [(0, t.jsx)("h4", {
                                                className: "hash-today-txt",
                                                children: "Ownership Renounced"
                                            })]
                                        }), (0, t.jsxs)("div", {
                                            className: "py-4 px-5",
                                            "data-aos": "fade-up",
                                            children: [(0, t.jsx)("h4", {
                                                className: "hash-today-txt",
                                                children: "0% Buy/Sell Tax"
                                            })]
                                        })]
                                    })
                                }), (0, t.jsxs)("div", {
                                    className: "col-lg-6 p-5 d-flex flex-column justify-content-between border-section-top-hash-sec border-left-hash-sec",
                                    children: [(0, t.jsx)("div", {
                                        className: "row",
                                        children: (0, t.jsx)("div", {
                                            className: "col-lg-12 text-left",
                                            "data-aos": "fade-up",
                                            children: (0, t.jsx)("h4", {
                                                className: "hash-today-txt",
                                                children: "Worldwide Rigs Online"
                                            })
                                        })
                                    }), (0, t.jsxs)("div", {
                                        className: "row pt-4",
                                        children: [(0, t.jsxs)("div", {
                                            className: "col-md-6 col-sm-6 text-left ",
                                            "data-aos": "fade-up",
                                            children: [(0, t.jsxs)("div", {
                                                className: "d-flex justify-content-start gap-2",
                                                children: [(0, t.jsx)("img", {
                                                    className: "mx-1",
                                                    unoptimized: !0,
                                                    src: "".concat("https://hashai.s3.eu-west-2.amazonaws.com/storage/home/uk.svg"),
                                                    alt: "uk",
                                                    height: "26px",
                                                    width: "52px"
                                                }), (0, t.jsx)("p", {
                                                    className: "countryTxt",
                                                    children: "United Kingdom"
                                                })]
                                            }), (0, t.jsxs)("ul", {
                                                className: "country-sec py-2",
                                                children: [(0, t.jsx)("li", {
                                                    className: "",
                                                    children: "80 Rigs Online"
                                                }), (0, t.jsx)("li", {
                                                    className: "",
                                                    children: "640 GPUs Online"
                                                })]
                                            })]
                                        }), (0, t.jsxs)("div", {
                                            className: "col-md-6 col-sm-6 text-left d-flex justidy-content-center align-items-start text-left flex-column ",
                                            "data-aos": "fade-up",
                                            children: [(0, t.jsxs)("div", {
                                                className: "d-flex justify-content-center gap-2",
                                                children: [(0, t.jsx)("img", {
                                                    className: "mx-1",
                                                    unoptimized: !0,
                                                    src: "".concat("https://hashai.s3.eu-west-2.amazonaws.com/storage/home/ethiopia.svg"),
                                                    alt: "Ethiopia",
                                                    height: "26px",
                                                    width: "52px"
                                                }), (0, t.jsx)("p", {
                                                    className: "countryTxt",
                                                    children: "Ethiopia"
                                                })]
                                            }), (0, t.jsx)("ul", {
                                                className: "country-sec py-2",
                                                children: (0, t.jsx)("li", {
                                                    className: "",
                                                    children: "ASIC S19 XP"
                                                })
                                            })]
                                        })]
                                    }), (0, t.jsx)("div", {
                                        className: "row",
                                        "data-aos": "fade-up",
                                        children: (0, t.jsx)("div", {
                                            className: "col-lg-12 d-flex justify-content-center text-center align-items-center",
                                            "data-aos": "fade-up",
                                            children: (0, t.jsx)("video", {
                                                muted: !0,
                                                loop: !0,
                                                autoPlay: !0,
                                                id: "earthHash",
                                                style: {
                                                    width: "100%",
                                                    maxWidth: "320px"
                                                },
                                                playsInline: !0,
                                                children: (0, t.jsx)("source", {
                                                    src: "https://hashai.s3.eu-west-2.amazonaws.com/storage/home/earth_hash.mp4",
                                                    type: "video/mp4"
                                                })
                                            })
                                        })
                                    }), (0, t.jsxs)("div", {
                                        className: "row",
                                        "data-aos": "fade-up",
                                        children: [(0, t.jsx)("div", {
                                            className: "col-12 text-center pb-4 ",
                                            children: "More rigs coming soon in India and USA"
                                        }), (0, t.jsx)("div", {
                                            className: "col-lg-12 d-flex justify-content-center text-center align-items-center",
                                            children: (0, t.jsx)("button", {
                                                onClick: () => j(),
                                                className: "text-".concat(!0 == u ? "white" : "black", " custom-btn orbitron-txt"),
                                                children: "Buy $PINKAI"
                                            })
                                        })]
                                    })]
                                })]
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "jarallax py-0 text-center position-relative",
                            children: [(0, t.jsx)("video", {
                                muted: !0,
                                loop: !0,
                                autoPlay: !0,
                                id: "earthHash",
                                className: "img-fluid jarallax-img hash-after-connector position-relative p-0 z-0",
                                style: {
                                    width: "100%",
                                    maxWidth: "220px"
                                },
                                playsInline: !0,
                                children: (0, t.jsx)("source", {
                                    src: "https://hashai.s3.eu-west-2.amazonaws.com/storage/home/short_line1.mp4",
                                    type: "video/mp4"
                                })
                            }), (0, t.jsx)("div", {
                                class: "top-bottom-shadow z-1"
                            })]
                        }), (0, t.jsx)("div", {
                            className: "container-fluid px-3 px-lg-5",
                            children: (0, t.jsx)("div", {
                                className: "row m-0 p-0",
                                children: (0, t.jsxs)("div", {
                                    className: "col-lg-12 d-flex justify-content-center text-center align-items-center flex-column mx-0 px-0",
                                    children: [(0, t.jsxs)("h2", {
                                        className: "node-renal-cta-sec-txt h1",
                                        "data-aos": "fade-up",
                                        children: ["Power Your Projects with Pink ", (0, t.jsx)("br", {}), "AI’s Reliable Nodes"]
                                    }), (0, t.jsx)("p", {
                                        className: "node-renal-cta-sec-register-txt my-1",
                                        "data-aos": "fade-up",
                                        children: "Register Your Interest Today."
                                    })]
                                })
                            })
                        }), (0, t.jsx)("div", {
                            className: "container-fluid px-3 px-lg-5",
                            children: (0, t.jsxs)("div", {
                                className: "row mt-5 mb-0 mx-0 p-0",
                                id: "roadmap",
                                children: [(0, t.jsx)("div", {
                                    className: "col-lg-7 d-flex justify-content-end text-center align-items-lg-center flex-column",
                                    children: (0, t.jsxs)("div", {
                                        className: "road-map-left-sec position-relative",
                                        children: [(0, t.jsx)("h4", {
                                            className: "road-map-left-txt mb-5",
                                            "data-aos": "fade-up",
                                            children: "Roadmap"
                                        }), (0, t.jsxs)("div", {
                                            className: "section--s1 sticky road-map-slide bg-".concat(!0 == u ? "white" : "black"),
                                            "data-aos": "fade-up",
                                            children: [(0, t.jsx)("h4", {
                                                className: "metrophobic-txt road-map-slide-name",
                                                children: "Launched"
                                            }), (0, t.jsx)("h4", {
                                                className: "my-3 orbitron-txt road-map-slide-title",
                                                children: "Branding & Web Development"
                                            }), (0, t.jsx)("p", {
                                                className: "metrophobic-txt road-map-slide-content",
                                                children: "We have launched our brand-new modern website that showcases our new branding, shares our new vision and values, and of course, empowers you to use our world-leading solutions. Plus, we have launched new social media channels so you can engage with the community like never before!"
                                            }), (0, t.jsxs)("ul", {
                                                children: [(0, t.jsx)("li", {
                                                    children: "Futuristic Vision"
                                                }), (0, t.jsx)("li", {
                                                    children: "New Website"
                                                }), (0, t.jsx)("li", {
                                                    children: "Revamped Branding"
                                                })]
                                            })]
                                        }), (0, t.jsxs)("div", {
                                            className: "section--s2 sticky road-map-slide road-map-2 bg-".concat(!0 == u ? "white" : "black"),
                                            "data-aos": "fade-up",
                                            children: [(0, t.jsx)("h4", {
                                                className: "metrophobic-txt road-map-slide-name",
                                                children: "Year 1"
                                            }), (0, t.jsx)("h4", {
                                                className: "my-3 orbitron-txt road-map-slide-title",
                                                children: "Growth & Partnerships"
                                            }), (0, t.jsx)("p", {
                                                className: "metrophobic-txt road-map-slide-content",
                                                children: "Through the launch of new services and solutions such as Ask PINK AI and Node Rentals, we will be empowering more of our community than ever before! By growing our infrastructure and creating more partnerships, we will have the means to power and supply more of your projects, and more mining!"
                                            }), (0, t.jsxs)("ul", {
                                                children: [(0, t.jsx)("li", {
                                                    children: "Diversifying Services"
                                                }), (0, t.jsx)("li", {
                                                    children: "Scaling Mining Power"
                                                }), (0, t.jsx)("li", {
                                                    children: "Strategic Partnerships"
                                                })]
                                            })]
                                        }), (0, t.jsxs)("div", {
                                            className: "section--s3 sticky road-map-slide road-map-3 bg-".concat(!0 == u ? "white" : "black"),
                                            "data-aos": "fade-up",
                                            children: [(0, t.jsx)("h4", {
                                                className: "metrophobic-txt road-map-slide-name",
                                                children: "Year 2"
                                            }), (0, t.jsx)("h4", {
                                                className: "my-3 orbitron-txt road-map-slide-title",
                                                children: "Infrastructure & Market Access"
                                            }), (0, t.jsx)("p", {
                                                className: "metrophobic-txt road-map-slide-content",
                                                children: "PINK AI aims to acquire and expand our dedicated mining facility for long-term scalability. We will also look to list on additional reputable exchanges, including international ones, to increase liquidity and allow $PINKAI to be more accessible. By scaling up our technology and infrastructure we are ensuring continual evolution of PINK AI."
                                            }), (0, t.jsxs)("ul", {
                                                children: [(0, t.jsx)("li", {
                                                    children: "Expanding Market Accessibility"
                                                }), (0, t.jsx)("li", {
                                                    children: "Infrastructure Investment"
                                                }), (0, t.jsx)("li", {
                                                    children: "Scaling Up"
                                                })]
                                            })]
                                        }), (0, t.jsxs)("div", {
                                            className: "section--s4 sticky road-map-slide road-map-3 bg-".concat(!0 == u ? "white" : "black"),
                                            "data-aos": "fade-up",
                                            children: [(0, t.jsx)("h4", {
                                                className: "metrophobic-txt road-map-slide-name",
                                                children: "Year 3"
                                            }), (0, t.jsx)("h4", {
                                                className: "my-3 orbitron-txt road-map-slide-title",
                                                children: "Global Expansion & Sustainability"
                                            }), (0, t.jsx)("p", {
                                                className: "metrophobic-txt road-map-slide-content",
                                                children: "PINK AI will strategically expand our operations to regions with favorable regulatory environments and access to renewable energy sources. This will diversify our geographic footprint and mitigate potential risks. Plus, we will expand our team with diverse expertise and cultural understanding to effectively navigate the international crypto landscape."
                                            }), (0, t.jsxs)("ul", {
                                                children: [(0, t.jsx)("li", {
                                                    children: "Expand Our Worldwide Team"
                                                }), (0, t.jsx)("li", {
                                                    children: "Operational Expansion"
                                                }), (0, t.jsx)("li", {
                                                    children: "Upkeep Sustainability"
                                                })]
                                            })]
                                        }), (0, t.jsx)("div", {
                                            className: "section--s5 sticky road-map-slide border-0 road-map-3"
                                        })]
                                    })
                                }), (0, t.jsx)("div", {
                                    className: "col-lg-5",
                                    children: (0, t.jsx)("video", {
                                        muted: !0,
                                        loop: !0,
                                        autoPlay: !0,
                                        id: "earthHash",
                                        className: "sticky z-0 road-map-img-right d-none d-lg-block max-w-100",
                                        playsInline: !0,
                                        children: (0, t.jsx)("source", {
                                            src: "https://hashai.s3.eu-west-2.amazonaws.com/storage/home/long_line.mp4",
                                            type: "video/mp4"
                                        })
                                    })
                                })]
                            })
                        }), (0, t.jsxs)("section", {
                            className: "compunityPoolSection d-flex justify-content-center text-left align-items-start flex-column orbitron-txt ",
                            children: [(0, t.jsx)("video", {
                                muted: !0,
                                loop: !0,
                                autoPlay: !0,
                                id: "compunityPoolSectionBG",
                                playsInline: !0,
                                children: (0, t.jsx)(t.Fragment, {
                                    children: (0, t.jsx)("source", {
                                        src: "https://hashai.s3.eu-west-2.amazonaws.com/storage/home/secondary_bg_website.mp4",
                                        type: "video/mp4"
                                    })
                                })
                            }), (0, t.jsxs)("div", {
                                className: "content w-100 h-100",
                                children: [(0, t.jsxs)("div", {
                                    className: "d-block d-lg-none text-center position-relative z-0",
                                    children: [(0, t.jsx)("video", {
                                        muted: !0,
                                        loop: !0,
                                        autoPlay: !0,
                                        id: "earthHash",
                                        className: "img-fluid",
                                        style: {
                                            width: "100%",
                                            maxWidth: "220px"
                                        },
                                        playsInline: !0,
                                        children: (0, t.jsx)("source", {
                                            src: "https://hashai.s3.eu-west-2.amazonaws.com/storage/home/short_line1.mp4",
                                            type: "video/mp4"
                                        })
                                    }), (0, t.jsx)("div", {
                                        class: "top-bottom-shadow z-1"
                                    })]
                                }), (0, t.jsx)("div", {
                                    className: "container-fluid px-3 px-lg-5 py-0",
                                    children: (0, t.jsxs)("div", {
                                        className: "row position-relative h-100 p-0 m-0",
                                        children: [(0, t.jsxs)("div", {
                                            className: "col-lg-7 d-flex text-center align-items-end flex-column align-items-md-center align-items-lg-end",
                                            "data-aos": "fade-up",
                                            children: [(0, t.jsx)("video", {
                                                muted: !0,
                                                loop: !0,
                                                autoPlay: !0,
                                                id: "HardwareVideo",
                                                className: "w-100",
                                                playsInline: !0,
                                                children: (0, t.jsx)("source", {
                                                    src: "https://hashai.s3.eu-west-2.amazonaws.com/storage/home/hardware_n.mp4",
                                                    type: "video/mp4"
                                                })
                                            }), (0, t.jsx)("div", {
                                                className: "hardware-left-img-bg"
                                            })]
                                        }), (0, t.jsxs)("div", {
                                            className: "col-lg-5 mt-5 mt-lg-0 mt-xl-0 hardware-right-sec ps-lg-5 text-lg-start text-center",
                                            "data-aos": "fade-up",
                                            children: [(0, t.jsx)("h1", {
                                                className: "hardware-txt mb-3",
                                                children: "Hardware"
                                            }), (0, t.jsxs)("div", {
                                                className: "metrophobic-txt",
                                                children: [(0, t.jsx)("p", {
                                                    children: "At PINK AI, we're not just miners, we're pioneers. We combine industry-leading node hardware with cutting-edge AI algorithms to provide the most secure, reliable, and profitable purchasing, rental and leasing solutions available. We're constantly expanding, but currently offer 100 GPUs across 54 nodes, catering to a variety of processing needs."
                                                }), (0, t.jsx)("p", {
                                                    className: "m-0",
                                                    children: "What Can You Do with Our Nodes?"
                                                }), (0, t.jsxs)("ul", {
                                                    children: [(0, t.jsx)("li", {
                                                        children: "Graphic Rendering & Animation: Streamline your creative workflow with robust processing power."
                                                    }), (0, t.jsx)("li", {
                                                        children: "AI Computing: Train and run advanced AI models with ease."
                                                    }), (0, t.jsx)("li", {
                                                        children: "IoT: Manage and analyze data from your connected devices."
                                                    })]
                                                }), (0, t.jsx)("p", {
                                                    children: "The potential applications are limited only by your imagination."
                                                })]
                                            }), (0, t.jsx)(o.default, {
                                                href: "https://app.uniswap.org/explore/tokens/ethereum/0xcomingsoon",
                                                children: (0, t.jsx)("button", {
                                                    className: "text-".concat(!0 == u ? "white" : "black", " custom-btn orbitron-txt"),
                                                    children: "Buy Rig"
                                                })
                                            })]
                                        })]
                                    })
                                }), (0, t.jsx)("div", {
                                    className: "community-text h-100",
                                    children: (0, t.jsx)("div", {
                                        className: "align-items-end community-txt-overly d-flex h-100 justify-content-center w-100",
                                        children: (0, t.jsxs)("div", {
                                            className: "d-flex justify-content-center align-items-center text-center flex-column main-txt-sec-community-pool",
                                            children: [(0, t.jsx)("h1", {
                                                className: "metrophobic-txt",
                                                "data-aos": "fade-up",
                                                children: "Community Share Pool"
                                            }), (0, t.jsx)("p", {
                                                className: "metrophobic-txt",
                                                "data-aos": "fade-up",
                                                children: "Begin your investment journey with us and experience the power and profits of AI mining."
                                            }), (0, t.jsx)(o.default, {
                                                href: "https://app-pink-ai-bat2.vercel.app//",
                                                target: "_blank",
                                                children: (0, t.jsx)("button", {
                                                    className: "text-".concat(!0 == u ? "white" : "black", " custom-btn orbitron-txt"),
                                                    "data-aos": "fade-up",
                                                    children: "Launch DApp"
                                                })
                                            })]
                                        })
                                    })
                                })]
                            })]
                        })]
                    })
                })
            }
        },
        48313: function () {},
        65221: function () {},
        53054: function () {},
        42016: function () {},
        29933: function () {}
    },
    function (e) {
        e.O(0, [7274, 4945, 3151, 5684, 2971, 7023, 1744], function () {
            return e(e.s = 44856)
        }), _N_E = e.O()
    }
]);