/***************************************************
Documentation:  https://github.com/iamdustan/smoothscroll
Demo: http://iamdustan.com/smoothscroll/
File: lib/polyfill/smoothscroll.min.js
****************************************************/
export const smoothScrollVs = () => {
    console.log('load scroll')
    let target = document.querySelectorAll('a[href*="#"]');

    target.forEach((item) => {
        item.addEventListener('click', e => {
            e.preventDefault()
            let value = item.getAttribute('href').split("#")[1]
            let scrollTo = document.getElementById(value)
            document.getElementById(value) ? scrollTo.scrollIntoView({behavior: 'smooth'}): '';
        })
    })
};
