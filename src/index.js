window._wpemojiSettings = {
    "baseUrl": "https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/72x72\/",
    "ext": ".png",
    "svgUrl": "https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/svg\/",
    "svgExt": ".svg",
    "source": {
        "concatemoji": "https:\/\/themes.pixelwars.org\/renovatio\/demo-01\/wp-includes\/js\/wp-emoji-release.min.js?ver=6.2.2"
    }
};
/*! This file is auto-generated */
! function(e, a, t) {
    var n, r, o, i = a.createElement("canvas"),
        p = i.getContext && i.getContext("2d");

    function s(e, t) {
        p.clearRect(0, 0, i.width, i.height),
            p.fillText(e, 0, 0);
        e = i.toDataURL();
        return p.clearRect(0, 0, i.width, i.height),
            p.fillText(t, 0, 0),
            e === i.toDataURL()
    }

    function c(e) {
        var t = a.createElement("script");
        t.src = e,
            t.defer = t.type = "text/javascript",
            a.getElementsByTagName("head")[0].appendChild(t)
    }
    for (o = Array("flag", "emoji"),
        t.supports = {
            everything: !0,
            everythingExceptFlag: !0
        },
        r = 0; r < o.length; r++)
        t.supports[o[r]] = function(e) {
            if (p && p.fillText)
                switch (p.textBaseline = "top",
                    p.font = "600 32px Arial",
                    e) {
                    case "flag":
                        return s("\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f", "\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f") ? !1 : !s("\ud83c\uddfa\ud83c\uddf3", "\ud83c\uddfa\u200b\ud83c\uddf3") && !s("\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f", "\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f");
                    case "emoji":
                        return !s("\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c\udfff", "\ud83e\udef1\ud83c\udffb\u200b\ud83e\udef2\ud83c\udfff")
                }
            return !1
        }(o[r]),
        t.supports.everything = t.supports.everything && t.supports[o[r]],
        "flag" !== o[r] && (t.supports.everythingExceptFlag = t.supports.everythingExceptFlag && t.supports[o[r]]);
    t.supports.everythingExceptFlag = t.supports.everythingExceptFlag && !t.supports.flag,
        t.DOMReady = !1,
        t.readyCallback = function() {
            t.DOMReady = !0
        },
        t.supports.everything || (n = function() {
                t.readyCallback()
            },
            a.addEventListener ? (a.addEventListener("DOMContentLoaded", n, !1),
                e.addEventListener("load", n, !1)) : (e.attachEvent("onload", n),
                a.attachEvent("onreadystatechange", function() {
                    "complete" === a.readyState && t.readyCallback()
                })),
            (e = t.source || {}).concatemoji ? c(e.concatemoji) : e.wpemoji && e.twemoji && (c(e.twemoji),
                c(e.wpemoji)))
}(window, document, window._wpemojiSettings);

(function($) {
    "use strict";
    $.extend($.validator.messages, {
        required: "This field is required.",
        remote: "Please fix this field.",
        email: "Please enter a valid email address.",
        url: "Please enter a valid URL.",
        date: "Please enter a valid date.",
        dateISO: "Please enter a valid date ( ISO ).",
        number: "Please enter a valid number.",
        digits: "Please enter only digits.",
        equalTo: "Please enter the same value again.",
        maxlength: $.validator.format("Please enter no more than {0} characters."),
        minlength: $.validator.format("Please enter at least {0} characters."),
        rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."),
        range: $.validator.format("Please enter a value between {0} and {1}."),
        max: $.validator.format("Please enter a value less than or equal to {0}."),
        min: $.validator.format("Please enter a value greater than or equal to {0}."),
        step: $.validator.format("Please enter a multiple of {0}.")
    });
})(jQuery);

var qodefQiAddonsGlobal = {
    "vars": {
        "adminBarHeight": 0,
        "iconArrowLeft": "<svg  xmlns=\"http:\/\/www.w3.org\/2000\/svg\" xmlns:xlink=\"http:\/\/www.w3.org\/1999\/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 34.2 32.3\" xml:space=\"preserve\" style=\"stroke-width: 2;\"><line x1=\"0.5\" y1=\"16\" x2=\"33.5\" y2=\"16\"\/><line x1=\"0.3\" y1=\"16.5\" x2=\"16.2\" y2=\"0.7\"\/><line x1=\"0\" y1=\"15.4\" x2=\"16.2\" y2=\"31.6\"\/><\/svg>",
        "iconArrowRight": "<svg  xmlns=\"http:\/\/www.w3.org\/2000\/svg\" xmlns:xlink=\"http:\/\/www.w3.org\/1999\/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 34.2 32.3\" xml:space=\"preserve\" style=\"stroke-width: 2;\"><line x1=\"0\" y1=\"16\" x2=\"33\" y2=\"16\"\/><line x1=\"17.3\" y1=\"0.7\" x2=\"33.2\" y2=\"16.5\"\/><line x1=\"17.3\" y1=\"31.6\" x2=\"33.5\" y2=\"15.4\"\/><\/svg>",
        "iconClose": "<svg  xmlns=\"http:\/\/www.w3.org\/2000\/svg\" xmlns:xlink=\"http:\/\/www.w3.org\/1999\/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 9.1 9.1\" xml:space=\"preserve\"><g><path d=\"M8.5,0L9,0.6L5.1,4.5L9,8.5L8.5,9L4.5,5.1L0.6,9L0,8.5L4,4.5L0,0.6L0.6,0L4.5,4L8.5,0z\"\/><\/g><\/svg>"
    }
};

/* <![CDATA[ */
var wpformsElementorVars = {
    "captcha_provider": "recaptcha",
    "recaptcha_type": "v2"
};
/* ]]> */

/* <![CDATA[ */
var _wpUtilSettings = {
    "ajax": {
        "url": "\/renovatio\/demo-01\/wp-admin\/admin-ajax.php"
    }
};

wp.i18n.setLocaleData({
    'text direction\u0004ltr': ['ltr']
});

var elementorFrontendConfig = {
    "environmentMode": {
        "edit": false,
        "wpPreview": false,
        "isScriptDebug": false
    },
    "i18n": {
        "shareOnFacebook": "Share on Facebook",
        "shareOnTwitter": "Share on Twitter",
        "pinIt": "Pin it",
        "download": "Download",
        "downloadImage": "Download image",
        "fullscreen": "Fullscreen",
        "zoom": "Zoom",
        "share": "Share",
        "playVideo": "Play Video",
        "previous": "Previous",
        "next": "Next",
        "close": "Close",
        "a11yCarouselWrapperAriaLabel": "Carousel | Horizontal scrolling: Arrow Left & Right",
        "a11yCarouselPrevSlideMessage": "Previous slide",
        "a11yCarouselNextSlideMessage": "Next slide",
        "a11yCarouselFirstSlideMessage": "This is the first slide",
        "a11yCarouselLastSlideMessage": "This is the last slide",
        "a11yCarouselPaginationBulletMessage": "Go to slide"
    },
    "is_rtl": false,
    "breakpoints": {
        "xs": 0,
        "sm": 480,
        "md": 768,
        "lg": 1025,
        "xl": 1440,
        "xxl": 1600
    },
    "responsive": {
        "breakpoints": {
            "mobile": {
                "label": "Mobile Portrait",
                "value": 767,
                "default_value": 767,
                "direction": "max",
                "is_enabled": true
            },
            "mobile_extra": {
                "label": "Mobile Landscape",
                "value": 880,
                "default_value": 880,
                "direction": "max",
                "is_enabled": false
            },
            "tablet": {
                "label": "Tablet Portrait",
                "value": 1024,
                "default_value": 1024,
                "direction": "max",
                "is_enabled": true
            },
            "tablet_extra": {
                "label": "Tablet Landscape",
                "value": 1200,
                "default_value": 1200,
                "direction": "max",
                "is_enabled": false
            },
            "laptop": {
                "label": "Laptop",
                "value": 1366,
                "default_value": 1366,
                "direction": "max",
                "is_enabled": false
            },
            "widescreen": {
                "label": "Widescreen",
                "value": 2400,
                "default_value": 2400,
                "direction": "min",
                "is_enabled": false
            }
        }
    },
    "version": "3.15.2",
    "is_static": false,
    "experimentalFeatures": {
        "e_dom_optimization": true,
        "e_optimized_assets_loading": true,
        "e_optimized_css_loading": true,
        "additional_custom_breakpoints": true,
        "e_swiper_latest": true,
        "landing-pages": true,
        "e_global_styleguide": true
    },
    "urls": {
        "assets": "https:\/\/themes.pixelwars.org\/renovatio\/demo-01\/wp-content\/plugins\/elementor\/assets\/"
    },
    "swiperClass": "swiper",
    "settings": {
        "page": [],
        "editorPreferences": []
    },
    "kit": {
        "active_breakpoints": ["viewport_mobile", "viewport_tablet"],
        "global_image_lightbox": "yes",
        "lightbox_enable_counter": "yes",
        "lightbox_enable_fullscreen": "yes",
        "lightbox_enable_zoom": "yes",
        "lightbox_enable_share": "yes",
        "lightbox_title_src": "title",
        "lightbox_description_src": "description"
    },
    "post": {
        "id": 2828,
        "title": "Home%2004%20%E2%80%93%20Renovatio",
        "excerpt": "",
        "featuredImage": false
    }
}

/* <![CDATA[ */
var _wpmejsSettings = {
    "pluginPath": "\/renovatio\/demo-01\/wp-includes\/js\/mediaelement\/",
    "classPrefix": "mejs-",
    "stretching": "responsive",
    "audioShortcodeLibrary": "mediaelement",
    "videoShortcodeLibrary": "mediaelement"
};

var mejsL10n = {
    "language": "en",
    "strings": {
        "mejs.download-file": "Download File",
        "mejs.install-flash": "You are using a browser that does not have Flash player enabled or installed. Please turn on your Flash player plugin or download the latest version from https:\/\/get.adobe.com\/flashplayer\/",
        "mejs.fullscreen": "Fullscreen",
        "mejs.play": "Play",
        "mejs.pause": "Pause",
        "mejs.time-slider": "Time Slider",
        "mejs.time-help-text": "Use Left\/Right Arrow keys to advance one second, Up\/Down arrows to advance ten seconds.",
        "mejs.live-broadcast": "Live Broadcast",
        "mejs.volume-help-text": "Use Up\/Down Arrow keys to increase or decrease volume.",
        "mejs.unmute": "Unmute",
        "mejs.mute": "Mute",
        "mejs.volume-slider": "Volume Slider",
        "mejs.video-player": "Video Player",
        "mejs.audio-player": "Audio Player",
        "mejs.captions-subtitles": "Captions\/Subtitles",
        "mejs.captions-chapters": "Chapters",
        "mejs.none": "None",
        "mejs.afrikaans": "Afrikaans",
        "mejs.albanian": "Albanian",
        "mejs.arabic": "Arabic",
        "mejs.belarusian": "Belarusian",
        "mejs.bulgarian": "Bulgarian",
        "mejs.catalan": "Catalan",
        "mejs.chinese": "Chinese",
        "mejs.chinese-simplified": "Chinese (Simplified)",
        "mejs.chinese-traditional": "Chinese (Traditional)",
        "mejs.croatian": "Croatian",
        "mejs.czech": "Czech",
        "mejs.danish": "Danish",
        "mejs.dutch": "Dutch",
        "mejs.english": "English",
        "mejs.estonian": "Estonian",
        "mejs.filipino": "Filipino",
        "mejs.finnish": "Finnish",
        "mejs.french": "French",
        "mejs.galician": "Galician",
        "mejs.german": "German",
        "mejs.greek": "Greek",
        "mejs.haitian-creole": "Haitian Creole",
        "mejs.hebrew": "Hebrew",
        "mejs.hindi": "Hindi",
        "mejs.hungarian": "Hungarian",
        "mejs.icelandic": "Icelandic",
        "mejs.indonesian": "Indonesian",
        "mejs.irish": "Irish",
        "mejs.italian": "Italian",
        "mejs.japanese": "Japanese",
        "mejs.korean": "Korean",
        "mejs.latvian": "Latvian",
        "mejs.lithuanian": "Lithuanian",
        "mejs.macedonian": "Macedonian",
        "mejs.malay": "Malay",
        "mejs.maltese": "Maltese",
        "mejs.norwegian": "Norwegian",
        "mejs.persian": "Persian",
        "mejs.polish": "Polish",
        "mejs.portuguese": "Portuguese",
        "mejs.romanian": "Romanian",
        "mejs.russian": "Russian",
        "mejs.serbian": "Serbian",
        "mejs.slovak": "Slovak",
        "mejs.slovenian": "Slovenian",
        "mejs.spanish": "Spanish",
        "mejs.swahili": "Swahili",
        "mejs.swedish": "Swedish",
        "mejs.tagalog": "Tagalog",
        "mejs.thai": "Thai",
        "mejs.turkish": "Turkish",
        "mejs.ukrainian": "Ukrainian",
        "mejs.vietnamese": "Vietnamese",
        "mejs.welsh": "Welsh",
        "mejs.yiddish": "Yiddish"
    }
};