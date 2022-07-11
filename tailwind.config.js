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
            'orange': '#FF4D00',
            'blue': '#00A3FF',
            'yellow': '#FFB800',
            'purple': '#7000FF',
            'pink': '#FF008A',
            'grey': '#464A4B',
            'water-green': '#00CBBF',
            'strong-green':'#149521',
            'brown': '#552C0E',
            'strong-pink': '#CB009E',
            'strong-blue': '#0039CB',
            'strong-orange': '#CB3D00',
            'strong-grey': '#212022',
            'blue-grey': '#087CBD'
        },
    },
    plugins: []
}