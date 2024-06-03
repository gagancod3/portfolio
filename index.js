function calculateSettingAsThemeString(localStorageTheme, systemSettingDark) {
    if (localStorageTheme !== null) {
        return localStorageTheme;
    }
    if (systemSettingDark.matches) {
        return "dark";
    }
    return "light";
}

const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prders-color-scheme: dark)");

let currentThemeSetting = calculateSettingAsThemeString(localStorageTheme, systemSettingDark);

// target the button using the data attribute we added earlier
const button = document.querySelector("[data-theme-toggle]");

// event listener for button
button.addEventListener("click", ()=>{
    const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

// update the button text
const newBtnTxt = newTheme === "dark" ? "Change to light theme" : "Change to dark theme";
button.innerText = newBtnTxt;

// updating the attribute for button tag using setAttribute(<target_string>,<target_value>)
button.setAttribute("aria-label",newBtnTxt);

// update theme attribute on HTML to switch theme in CSS
document.querySelector("html").setAttribute("data-theme", newTheme);

// update in local storage
localStorage.setItem("theme",newTheme);

// update the currentThemeSetting in memory
currentThemeSetting = newTheme;

});

