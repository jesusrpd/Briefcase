module.exports = {
    content: [
        './pages/**/*.{js,jsx}',
        './components/**/*.{js,jsx}'
    ],
    theme: {
        extend: {
            backgroundImage: {
                'work': "url('/images/work.png')"
            }
        },
        colors: {
            'green': '#05EBB4',
            'green-dark': '#05DEAA',
            'dark': '#1A2B3A',
            'red': '#E74343',
            'red-dark': 'E72424',
            'white': '#ffff',
        },
    },
    plugins: []
}