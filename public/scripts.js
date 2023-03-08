
var navLinks = document.getElementById("navLinks");

var phoneScroll1 = document.getElementById("phone-sctoll-1")
var phoneScroll1h3 = document.getElementById("phone-sctoll-1-h3")
var phoneScroll2 = document.getElementById("phone-sctoll-2")
var phoneScroll2h3 = document.getElementById("phone-sctoll-2-h3")
var phoneScroll3 = document.getElementById("phone-sctoll-3")
var phoneScroll3h3 = document.getElementById("phone-sctoll-3-h3")

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}

function isInViewport(element) {
const rect = element.getBoundingClientRect();
return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
);
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if(window.innerWidth > 1100) {

    if (window.innerWidth > 1100) {
        if (document.body.scrollTop > (window.innerHeight * 0.3) || document.documentElement.scrollTop > (window.innerHeight * 0.3)) {
          document.getElementById("nav-js-home").style.top = "0";
          if (document.getElementById("logo-js-home")) {
            document.getElementById("logo-js-home").style.width = "350px";
            document.getElementById("logo-js-home").src = "design/images/hydrogenify_logo_green_text.png";
            document.getElementById("nav-links-list-js-home").style.webkitTextFillColor = "var(--green)";
            document.getElementById("nav-links-list-js-home").style.fontSize = "20px";
            document.getElementById("nav-js-home").style.backgroundColor = "var(--white)";
          }
          if (document.getElementById("logo-js")) {
            document.getElementById("logo-js").style.width = "350px";
            document.getElementById("logo-js").src = "../design/images/hydrogenify_logo_green_text.png";
            document.getElementById("nav-links-list-js").style.webkitTextFillColor = "var(--green)";
            document.getElementById("nav-links-list-js").style.fontSize = "20px";
            document.getElementById("nav-js").style.backgroundColor = "var(--header-white)";
          }
        } else {
          document.getElementById("nav-js-home").style.top = "-250px";
          // if (document.getElementById("logo-js-home")) {
          //   document.getElementById("logo-js-home").style.width = "400px";
          //   document.getElementById("logo-js-home").src = "design/images/logo_hydrogenify.png";
          //   document.getElementById("nav-links-list-js-home").style.webkitTextFillColor = "var(--white)";
          //   document.getElementById("nav-js-home").style.backgroundColor = "var(--transparent-white)";
          // }
          if (document.getElementById("logo-js")) {
            document.getElementById("logo-js").style.width = "400px";
            document.getElementById("logo-js").src = "../design/images/logo_hydrogenify.png";
            document.getElementById("nav-links-list-js").style.webkitTextFillColor = "var(--white)";
            document.getElementById("nav-js").style.backgroundColor = "var(--transparent-white)";
          }
        }
      }
  }



  if(window.innerWidth < 1100) {
    
    if (document.body.scrollTop > (window.innerHeight * 0.2) || document.documentElement.scrollTop > (window.innerHeight * 0.2)) {
      document.getElementById("nav-js-home").style.top = "0";
      if (document.getElementById("logo-js-home")) {
        document.getElementById("logo-js-home").src = "design/images/hydrogenify_logo_green_text.png";

      }
      if (document.getElementById("logo-js")) {
        document.getElementById("logo-js").src = "../design/images/hydrogenify_logo_green_text.png";

      }
    }
    else{
      document.getElementById("nav-js-home").style.top = "-250px";

    }
    if(isInViewport(phoneScroll1)) {
        phoneScroll1.style.backgroundColor = "var(--hover-green)";
        phoneScroll1h3.style.opacity = "1";
        phoneScroll1h3.style.padding = "0";

    } else {
        phoneScroll1.style.backgroundColor = "transparent";
        phoneScroll1h3.style.opacity = "0";
        phoneScroll1h3.style.paddingTop = "200px";
    }
    if(isInViewport(phoneScroll2)) {
        phoneScroll2.style.backgroundColor = "var(--hover-green)";
        phoneScroll2h3.style.opacity = "1";
        phoneScroll2h3.style.padding = "0";

    } else {
        phoneScroll2.style.backgroundColor = "transparent";
        phoneScroll2h3.style.opacity = "0";
        phoneScroll2h3.style.paddingTop = "200px";
    }
    if(isInViewport(phoneScroll3)) {
        phoneScroll3.style.backgroundColor = "var(--hover-green)";
        phoneScroll3h3.style.opacity = "1";
        phoneScroll3h3.style.padding = "0";

    } else {
        phoneScroll3.style.backgroundColor = "transparent";
        phoneScroll3h3.style.opacity = "0";
        phoneScroll3h3.style.paddingTop = "200px";
    }
  }

}
