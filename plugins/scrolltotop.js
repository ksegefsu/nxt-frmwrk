import router from '~router'

router.afterEach((to, from) => {
  console.log(to)
  // set timeout time to time of your transition
  setTimeout(() => {
    // dunno why but conditional helps to speed up build time…
    if (document) document.body.scrollTop = 0
  }, 515)
})
