// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.joejoe.online",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.joejoe.online/","title_tag":"Singer Songwriter Folk Songs About Life | Kumbak Joy","meta_description":"Alt. folk and Americana stories on love, loss, self-discovery and social commentary. Songs about life, scars, addiction to screens and emotional healing."},{"page_url":"https://www.joejoe.online/read","title_tag":"Lyrics Folk Alt. Rock Survivor Stories | Kumbak Joy","meta_description":"Dive into lyrics of folk, alt. folk and Americana songs about life, self-discovery, survivor stories, addiction to screens, relationships and life lessons."},{"page_url":"https://www.joejoe.online/me","title_tag":"Singer Songwriter Folk Influences Dylan Cohen | Kumbak Joy","meta_description":"Tel Aviv based singer songwriter Joy Seroussi. Folk and alt. folk songs as music therapy, self-discovery and social commentary. Let’s connect and collaborate."}],"keywords":["singer songwriter","folk","country","alt. folk","alt. rock","americana","leonard cohen","nick cave","bob dylan","john lennon","cat stevens","songs about life","self-discovery","social commentary","relationships","addiction to screens","music therapy","survivor stories","overcoming obstacles","circumstance","crossroads","choice","consequences","empathy in conflict","emotional healing","personal narratives","cultural reflections","art as expression","community connection","life lessons"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  "@id": "https://www.joejoe.online/#musicgroup",
  "name": "Kumbak Joy",
  "alternateName": "Joy Seroussi",
  "url": "https://www.joejoe.online/",
  "image": [
    "https://static.wixstatic.com/media/d46790_cbe4bc1a01e14eaa8169b59e84b9bf18~mv2.png/v1/fill/w_185,h_190,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo%20icon.png",
    "https://static.wixstatic.com/media/d46790_cbe4bc1a01e14eaa8169b59e84b9bf18%7Emv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/d46790_cbe4bc1a01e14eaa8169b59e84b9bf18%7Emv2.png"
  ],
  "description": "Kumbak Joy is the music project of songwriter and singer Joy Seroussi, who writes personal and social songs as a form of self-therapy, inspired by singer-songwriters such as Bob Dylan, Leonard Cohen, John Lennon, Cat Stevens and Nick Cave.",
  "founder": {
    "@type": "Person",
    "name": "Joy Seroussi",
    "description": "Songwriter and singer in his sixties, father of three, living in Tel Aviv and Plomari. Writes songs about personal experiences and social themes.",
    "homeLocation": [
      {
        "@type": "Place",
        "name": "Tel Aviv"
      },
      {
        "@type": "Place",
        "name": "Plomari"
      }
    ]
  },
  "member": {
    "@type": "Person",
    "name": "Joy Seroussi"
  },
  "genre": [
    "Singer-Songwriter",
    "Folk",
    "Rock"
  ],
  "sameAs": [],
  "album": [
    {
      "@type": "MusicAlbum",
      "name": "In Black & In White!",
      "byArtist": {
        "@id": "https://www.joejoe.online/#musicgroup"
      },
      "url": "https://www.joejoe.online/",
      "image": [
        "https://static.wixstatic.com/media/d46790_804451d3fc5047a6ba24f85e7fb1ebe4~mv2.png/v1/fill/w_212,h_212,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/In%20Black%20and%20In%20White.png"
      ],
      "track": [
        {
          "@type": "MusicRecording",
          "name": "In Black! & In White! (I don't wanna live in)",
          "url": "https://www.joejoe.online/",
          "byArtist": {
            "@id": "https://www.joejoe.online/#musicgroup"
          },
          "description": "A song inspired by polarized conversations about the Israeli-Palestinian conflict, calling for empathy, nuance and connection beyond black-and-white thinking.",
          "inLanguage": "en"
        },
        {
          "@type": "MusicRecording",
          "name": "Bow To The Screen",
          "url": "https://www.joejoe.online/",
          "byArtist": {
            "@id": "https://www.joejoe.online/#musicgroup"
          },
          "description": "A song about screen addiction, social media and the impact of endless digital content on real-life interactions and relationships.",
          "inLanguage": "en"
        },
        {
          "@type": "MusicRecording",
          "name": "Scars",
          "url": "https://www.joejoe.online/",
          "byArtist": {
            "@id": "https://www.joejoe.online/#musicgroup"
          },
          "description": "A song about emotional and physical scars, focusing on stories of survival after trauma, and transforming victimhood into resilience.",
          "inLanguage": "en"
        },
        {
          "@type": "MusicRecording",
          "name": "October Winds (Nova 7/10/24)",
          "url": "https://www.joejoe.online/",
          "byArtist": {
            "@id": "https://www.joejoe.online/#musicgroup"
          },
          "description": "A memorial song dedicated to the victims and survivors of the Nova festival massacre on October 7th, 2023, reflecting on grief, remembrance and spirits carried by the wind.",
          "inLanguage": "en"
        },
        {
          "@type": "MusicRecording",
          "name": "The Lady Of My Heart",
          "url": "https://www.joejoe.online/",
          "byArtist": {
            "@id": "https://www.joejoe.online/#musicgroup"
          },
          "description": "A fictional, passionate love song inspired by Bob Dylan playlists, telling a Bonnie-and-Clyde style story of criminal lovers whose bond transcends time and death.",
          "inLanguage": "en"
        },
        {
          "@type": "MusicRecording",
          "name": "Sleepless Lullaby",
          "url": "https://www.joejoe.online/",
          "byArtist": {
            "@id": "https://www.joejoe.online/#musicgroup"
          },
          "description": "A song born from binge-watching a TV series and struggling with insomnia, exploring anxiety, looping worries and the hopeful, soothing presence of a loved one.",
          "inLanguage": "en"
        },
        {
          "@type": "MusicRecording",
          "name": "It's Getting Late (Didi's Song)",
          "url": "https://www.joejoe.online/",
          "byArtist": {
            "@id": "https://www.joejoe.online/#musicgroup"
          },
          "description": "A reflective song about grief, lost friendships and the urgency to reconnect before it is too late, dedicated to Didi and Dida and their loved ones.",
          "inLanguage": "en"
        },
        {
          "@type": "MusicRecording",
          "name": "My Gift Is Their Songs (and this one's for you)",
          "url": "https://www.joejoe.online/",
          "byArtist": {
            "@id": "https://www.joejoe.online/#musicgroup"
          },
          "description": "A love song built from 27 adapted quotes from songs by admired artists, dedicated to the songwriter's wife and spanning decades of shared life and emotion.",
          "inLanguage": "en"
        },
        {
          "@type": "MusicRecording",
          "name": "The Bells Of Change",
          "url": "https://www.joejoe.online/",
          "byArtist": {
            "@id": "https://www.joejoe.online/#musicgroup"
          },
          "description": "A song about breaking out of a comfort zone, self-forgiveness and choosing change, inspired by a solitary Yom Kippur walk to the beach and the chimes of bells within the waves.",
          "inLanguage": "en"
        }
      ]
    }
  ],
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.joejoe.online/"
  }
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
