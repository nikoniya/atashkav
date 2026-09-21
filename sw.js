{
    "name": "آتش‌کاو - AtashKav",
    "short_name": "آتش‌کاو",
    "description": "سیستم هدایت آتش و ناوبری نظامی",
    "id": "ir.atashkav.app",
    "start_url": "./index.html",
    "display": "standalone",
    "display_override": ["standalone", "fullscreen"],
    "orientation": "any",
    "background_color": "#0A0A0A",
    "theme_color": "#FF6B00",
    "lang": "fa",
    "dir": "rtl",
    "scope": "./",
    "prefer_related_applications": false,
    "related_applications": [],
    "categories": ["navigation", "utilities", "productivity"],
    "icons": [
        {
            "src": "logo.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "any"
        },
        {
            "src": "logo.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "any"
        },
        {
            "src": "logo.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "maskable"
        },
        {
            "src": "logo.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "maskable"
        }
    ],
    "shortcuts": [
        {
            "name": "هدایت آتش",
            "short_name": "هدایت",
            "url": "./index.html?panel=fire",
            "icons": [{ "src": "logo.png", "sizes": "192x192" }]
        },
        {
            "name": "نقشه",
            "short_name": "نقشه",
            "url": "./index.html?panel=map",
            "icons": [{ "src": "logo.png", "sizes": "192x192" }]
        }
    ]
}
