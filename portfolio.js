let themeDots = document.querySelectorAll('.theme-dot')
let themeStyle = document.getElementById('theme-style')

themeDots.forEach(item => {

    item.addEventListener('click', (e) => {

        let myStylex = e.target.classList;

        if (myStylex.contains('blue')) {

            themeStyle.href = 'blue.css'

        } else if (myStylex.contains('green')) {

            themeStyle.href = 'green.css'

        } else if (myStylex.contains('light')) {

            themeStyle.href = 'portfolio.css'

        } else if (myStylex.contains('purple')) {

            themeStyle.href = 'purple.css'
        }

    })
})

// let lightMode = document.querySelector('#light-mode')