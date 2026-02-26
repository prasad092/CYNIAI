/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                deep: "oklch(var(--deep) / <alpha-value>)",
                "deep-2": "oklch(var(--deep-2) / <alpha-value>)",
                teal: "oklch(var(--teal) / <alpha-value>)",
                "teal-light": "oklch(var(--teal-light) / <alpha-value>)",
                amber: "oklch(var(--amber) / <alpha-value>)",
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Syne', 'Inter', 'sans-serif'],
            },
            animation: {
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'bounce-slow': 'bounce 3s infinite',
                'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
            spacing: {
                '18': '4.5rem',
            },
        },
    },
    plugins: [],
}
