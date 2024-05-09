const htmlTags = [
    "a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", 
    "bdo", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", 
    "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", 
    "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", 
    "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", 
    "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "link", "main", 
    "map", "mark", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", 
    "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", 
    "samp", "script", "section", "select", "small", "source", "span", "strong", "style", 
    "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", 
    "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr"
    // ... and potentially more
  ];

const deprecatedTags = [  "track", "u", "ul", "var", "video", "wbr",
    "applet", "basefont", "big", "blink", "center", "command", "content", 
    "font", "frame", "frameset", "isindex", "keygen", "listing", "marquee", 
    "menu", "meta", "multicol", "nextid", "nobr", "noembed", "noframes", 
    "plaintext", "shadow", "spacer", "strike", "tt", "xmp"
];

const attributes = [
    "accept", "accept-charset", "accesskey", "action", "align", "alt", "async", 
    "autocomplete", "autofocus", "autoplay", "bgcolor", "border", "charset", 
    "checked", "cite", "class", "color", "cols", "colspan", "content", "contenteditable", 
    "controls", "coords", "data", "datetime", "default", "defer", "dir", "dirname", 
    "disabled", "download", "draggable", "dropzone", "enctype", "for", "form", "formaction", 
    "headers", "height", "hidden", "high", "href", "hreflang", "http-equiv", "icon", "id", 
    "ismap", "itemprop", "keytype", "kind", "label", "lang", "language", "list", "loop", 
    "low", "manifest", "max", "maxlength", "media", "method", "min", "multiple", "name", 
    "novalidate", "open", "optimum", "pattern", "ping", "placeholder", "poster", "preload", 
    "radiogroup", "readonly", "rel", "required", "reversed", "rows", "rowspan", "sandbox", 
    "scope", "scoped", "seamless", "selected", "shape", "size", "sizes", "span", "spellcheck", 
    "src", "srcdoc", "srclang", "srcset", "start", "step", "style", "summary", "tabindex", 
    "target", "title", "type", "usemap", "value", "width", "wrap", "xmlns", "onabort"
]

const eventAttributes = [
    "onabort", "onblur", "oncancel", "oncanplay", "oncanplaythrough", "onchange", 
    "onclick", "onclose", "oncontextmenu", "oncuechange", "ondblclick", "ondrag", 
    "ondragend", "ondragenter", "ondragexit", "ondragleave", "ondragover", "ondragstart", 
    "ondrop", "ondurationchange", "onemptied", "onended", "onerror", "onfocus", 
    "oninput", "oninvalid", "onkeydown", "onkeypress", "onkeyup", "onload", "onloadeddata", 
    "onloadedmetadata", "onloadstart", "onmousedown", "onmouseenter", "onmouseleave", 
    "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onmousewheel", "onpause", 
    "onplay", "onplaying", "onprogress", "onratechange", "onreset", "onresize", 
    "onscroll", "onseeked", "onseeking", "onselect", "onshow", "onstalled", "onsubmit", 
    "onsuspend", "ontimeupdate", "ontoggle", "onvolumechange", "onwaiting", "onwheel"
];

export { htmlTags, deprecatedTags, attributes, eventAttributes }