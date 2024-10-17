// Menu section
const mobileMenuOpener = document.querySelector(".menu-logo");
const mobileMenuClosure = document.querySelector(".menu-closure"); 
const featureContents = document.querySelector(".features-menu"); 
const companyContents = document.querySelector(".company-menu"); 
const mobileFeatureContents = document.querySelector("#mobile-menu-features");
const mobileCompanyContents = document.querySelector("#mobile-menu-company");
const features = document.querySelector(".features"); 
const company = document.querySelector(".company");
const mobileMenu = document.querySelector(".mobile-nav");
const mobileFeatures = document.querySelector("#mobile-features"); 
const mobileCompany = document.querySelector("#mobile-company");
const featuresArrow = document.querySelector(".arrow"); 
const companyArrow = document.querySelector(".arrow-two");
const careers = document.querySelector(".careers"); 
const about = document.querySelector(".about");

// Animations 
const arrowAnimations = "flipper 1s 1 ease-in";
const menuSlide = "slipdown 1s 1 forwards ease-in"; 
const reverseMenuSlide = "slipdown 1s 1 reverse ease-in"; 

// Logic
let isActivated = false;

features.addEventListener("click", () => { 
    featuresArrow.style.animation = arrowAnimations;
    if (isActivated) { 
        isActivated = false;
        featuresArrow.style.animation = arrowAnimations + " reverse";
        setTimeout(() => { 
            featuresArrow.src = "icon-arrow-down.svg";
        }, 1010);
        featureContents.style.display = "none"; 
    } else {
        isActivated = true;
        featureContents.style.display = "block"; 
        setTimeout(() => { 
            featuresArrow.src = "icon-arrow-up.svg";
        }, 1010);
    }
});

company.addEventListener("click", () => { 
    companyArrow.style.animation = arrowAnimations;
    if (isActivated) { 
        isActivated = false;
        companyArrow.style.animation = arrowAnimations + " reverse";
        setTimeout(() => { 
            companyArrow.src = "icon-arrow-down.svg";
        }, 1010);
        companyContents.style.display = "none"; 
    } else {
        isActivated = true;
        companyContents.style.display = "block"; 
        setTimeout(() => { 
            companyArrow.src = "icon-arrow-up.svg";
        }, 1010);
    }
});

if (window.innerWidth < 768) { 
    mobileMenuOpener.addEventListener("click", () => { 
        mobileMenu.style.display = "block";
    }); 

    mobileMenuClosure.addEventListener("click", () => { 
        mobileMenu.style.display = "none";
    });

    mobileFeatures.addEventListener("click", () => { 
        company.style.animation = menuSlide; 
        careers.style.animation = menuSlide; 
        about.style.animation = menuSlide; 
        mobileFeatureContents.style.position = "static"; 
        mobileFeatureContents.style.boxShadow = "none";
        mobileFeatures.appendChild(mobileFeatureContents); 
        mobileFeatureContents.style.display = "block";

        if (isActivated) { 
            isActivated = false;
            mobileFeatureContents.style.display = "none"; 
            mobileFeatures.removeChild(mobileFeatureContents); 
            mobileFeatureContents.style.position = "absolute"; 
            mobileFeatureContents.style.boxShadow = "2px 2px 20px rgba(0, 0, 0, 0.2);";
            company.style.animation = reverseMenuSlide;
            careers.style.animation = reverseMenuSlide;
            about.style.animation = reverseMenuSlide;
        } else {
            isActivated = true; 
        }
    }); 
    
    mobileCompany.addEventListener("click", () => { 
        careers.style.animation = menuSlide; 
        about.style.animation = menuSlide; 
        mobileCompanyContents.style.position = "static"; 
        mobileCompanyContents.style.boxShadow = "none";
        mobileCompany.appendChild(mobileCompanyContents); 
        mobileCompanyContents.style.display = "block";

        if (isActivated) { 
            isActivated = false;
            mobileCompanyContents.style.display = "none";
            mobileCompany.removeChild(mobileCompanyContents);
            mobileCompanyContents.style.position = "absolute";
            mobileCompanyContents.style.boxShadow = "2px 2px 20px rgba(0, 0, 0, 0.2);";
            careers.style.animation = reverseMenuSlide;
            about.style.animation = reverseMenuSlide;
        } else {
            isActivated = true; 
        }
    });
}
