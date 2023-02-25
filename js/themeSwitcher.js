const toggle = document.getElementById("themeSwitcherButton");
const theme = localStorage.getItem("theme");
const navBarLogo = document.getElementById("navBarLogo");
const icon200 = document.getElementById("icon200");
const logoXL = document.getElementById("logoXL");
const customerReviews = document.getElementById("logoXL");
const htmlLogo = document.getElementById("htmlLogo");
const cssLogo = document.getElementById("cssLogo");
const sqlLogo = document.getElementById("sqlLogo");
const pythonLogo = document.getElementById("pythonLogo");
const gitlabLogo = document.getElementById("gitlabLogo");
const awsLogo = document.getElementById("awsLogo");

if (theme === "light"){
  document.body.classList.add("light");
}

document.addEventListener('DOMContentLoaded', function(){
  toggle.addEventListener("click", () =>{
    document.body.classList.toggle("light");

// BREAK COMMENTS TO ALLOW DARK/LIGHT THEME IMAGE SWITCHING
// BROKEN FEATURE AS OF 25/02/2023
//    if (navBarLogo.src.match("resources/darkThemeLogo.png")){
//      navBarLogo.src = "resources/lightThemeLogo.png";
//    } else if (navBarLogo.src.match("resources/lightThemeLogo.png")){
//      navBarLogo.src = "resources/darkThemeLogo.png";
//    }

//    if (icon200.src.match("resources/icon200DarkTheme.png")){
//      icon200.src = "resources/icon200LightTheme.png";
//    } else if (icon200.src.match("resources/icon200LightTheme.png")){
//      icon200.src = "resources/icon200DarkThem.png";
//    }

//    if (logoXL.src.match("resources/darkThemeLogoXL.png")){
//      logoXL.src = "resources/lightThemeLogoXL.png";
//    } else if (logoXL.src.match("resources/lightThemeLogoXL.png")){
//      logoXL.src = "resources/darkThemeLogoXL.png";
//    }

//    if (customerReviews.src.match("resources/darkThemeCustomerReviews.png")){
//      customerReviews.src = "resources/lightThemeCustomerReviews.png";
//    } else if (customerReviews.src.match("resources/lightThemeCustomerReviews.png")){
//      customerReviews.src = "resources/darkThemeCustomerReviews.png";
//    }

//    if (htmlLogo.src.match("resources/index/htmlDarkTheme.png")){
//      htmlLogo.src = "resources/index/htmlLightTheme.png";
//    } else if (htmlLogo.src.match("resources/index/htmlLightTheme.png")){
//      htmlLogo.src = "resources/index/htmlDarkTheme.png";
//    }

//    if (cssLogo.src.match("resources/index/cssDarkTheme.png")){
//      cssLogo.src = "resources/index/cssLightTheme.png";
//    } else if (cssLogo.src.match("resources/index/cssLightTheme.png")){
//      cssLogo.src = "resources/index/cssDarkTheme.png";
//    }

//    if (pythonLogo.src.match("reviews/index/pythonDarkTheme.png")){
//      pythonLogo.src = "reviews/index/pythonLightTheme.png";
//    } else if (pythonLogo.src.match("reviews/index/pythonLightTheme.png")){
//      pythonLogo.src = "reviews/index/pythonDarkTheme.png";
//    }

//    if (gitlab.src.match("reviews/qualifications/gitlabDarkTheme.png")){
//      gitlab.src = "reviews/qualifications/gitlabLightTheme.png";
//    } else if (gitlab.src.match("reviews/qualifications/gitlabLightTheme.png")){
//      gitlab.src = "reviews/qualifications/gitlabDarkTheme.png";
//    }

//    if (awsLogo.src.match("reviews/qualifications/awsDarkTheme.png")){
//      awsLogo.src = "reviews/qualifications/awsLightTheme.png";
//    } else if (awsLogo.src.match("reviews/qualifications/awsLightTheme.png")){
//      awsLogo.src = "reviews/qualifications/awsDarkTheme.png";
//    }

    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
    }   
    else{
      window.localStorage.setItem("theme", "light");
    }
  });
});