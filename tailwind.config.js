/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Brand Core
        "brand-gold": "#D4AF37",
        "brand-gold-dim": "#C5A880",
        "brand-gold-bright": "#F5D87C",
        "navy": "#001F3F",

        // Dark Surface System
        "surface-0": "#0B0F19",
        "surface-1": "#111827",
        "surface-2": "#1F2937",
        "surface-3": "#263040",
        "surface-4": "#2E3A4E",

        // Legacy tokens (kept for backward compat)
        "background": "#0B0F19",
        "surface": "#111827",
        "primary-container": "#001F3F",
        "primary": "#0B0F19",
        "secondary": "#9CA3AF",
        "outline-variant": "#374151",
        "on-surface": "#E5E7EB",
        "on-surface-variant": "#9CA3AF",
        "on-background": "#E5E7EB",
        "outline": "#6B7280",
        "surface-container-highest": "#1F2937",
        "surface-container-high": "#1A2233",
        "surface-container": "#111827",
        "surface-container-low": "#0D1117",
        "surface-container-lowest": "#0B0F19",
        "brand-gold-legacy": "#D4AF37",

        // Status
        "error": "#EF4444",
        "success": "#22C55E",
      },
      fontFamily: {
        "manrope": ["Manrope", "sans-serif"],
        "workSans": ["Work Sans", "sans-serif"],
        "display-xl": ["Manrope", "sans-serif"],
        "headline-lg": ["Manrope", "sans-serif"],
        "headline-md": ["Manrope", "sans-serif"],
        "body-lg": ["Work Sans", "sans-serif"],
        "body-md": ["Work Sans", "sans-serif"],
        "label-sm": ["Work Sans", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(40px,5vw,72px)", { lineHeight: "1.05", letterSpacing: "-0.025em", fontWeight: "800" }],
        "display-lg": ["clamp(32px,4vw,56px)", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-lg": ["clamp(28px,3vw,40px)", { lineHeight: "1.2", fontWeight: "700" }],
        "headline-md": ["clamp(20px,2vw,24px)", { lineHeight: "1.3", fontWeight: "600" }],
        "headline-sm": ["18px", { lineHeight: "1.4", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "1.65", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-sm": ["14px", { lineHeight: "1.5", fontWeight: "400" }],
        "label-sm": ["12px", { lineHeight: "1", letterSpacing: "0.08em", fontWeight: "600" }],
      },
      spacing: {
        "gutter": "clamp(16px, 4vw, 48px)",
        "section-padding": "clamp(60px, 8vw, 120px)",
        "container-max": "1280px",
        "margin-mobile": "16px",
        "base": "8px",
      },
      borderRadius: {
        "DEFAULT": "4px",
        "lg": "8px",
        "xl": "12px",
        "2xl": "16px",
        "full": "9999px",
      },
      boxShadow: {
        "gold-sm": "0 4px 16px rgba(212,175,55,0.15)",
        "gold-md": "0 8px 32px rgba(212,175,55,0.2)",
        "gold-lg": "0 16px 48px rgba(212,175,55,0.25)",
        "card": "0 8px 32px rgba(0,0,0,0.4)",
        "card-hover": "0 20px 60px rgba(0,0,0,0.5)",
        "nav": "0 4px 30px rgba(0,0,0,0.5)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #D4AF37 0%, #F5D87C 50%, #C5A880 100%)",
        "surface-gradient": "linear-gradient(180deg, #0B0F19 0%, #111827 100%)",
        "hero-overlay": "linear-gradient(to bottom right, rgba(11,15,25,0.85) 0%, rgba(11,15,25,0.6) 100%)",
      },
      transitionTimingFunction: {
        "premium": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      animation: {
        "float": "float 3s ease-in-out infinite",
        "pulse-gold": "pulseGold 2s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(212,175,55,0.4)" },
          "50%": { boxShadow: "0 0 0 12px rgba(212,175,55,0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
}
