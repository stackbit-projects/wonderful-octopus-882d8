/*
  This is where your custom site code goes.
  This script will be loaded on all pages and posts.
 */


(function(){
  function openMobileMenu () {
    const hamburger = document.getElementById("hamburger")
    const header = document.getElementById("header")
    

    hamburger.addEventListener('click', function(event) {
      const isOpen = header.classList.contains("open")

      if(isOpen) {
        document.body.classList.remove('open')
        return header.classList.remove('open')
      }
      document.body.classList.add('open')
      return header.classList.add('open')
    })
  }

  openMobileMenu()
})()