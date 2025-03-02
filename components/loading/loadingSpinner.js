import { disableNextTaskButton, enableNextTaskButton } from "../buttons/wireNextTaskButton.js";
import { disablePrevTaskButton, enablePrevTaskButton } from "../buttons/wirePrevTaskButton.js";
import { hideResetButton, showResetButton } from "../buttons/wireResetButton.js";

export const startLoadingSpinner = () => {
    disableNextTaskButton();
    disablePrevTaskButton();
    hideResetButton();

    const loadingContainer = document.getElementById("loading-container");
    loadingContainer.style.display = "flex";

    const bodyComponent = document.getElementById("body");
    bodyComponent.style.pointerEvents = "none";
}

export const stopLoadingSpinner = () => {
    enableNextTaskButton();
    enablePrevTaskButton();
    showResetButton();

    const loadingContainer = document.getElementById("loading-container");
    loadingContainer.style.display = "none";

    const bodyComponent = document.getElementById("body");
    bodyComponent.style.pointerEvents = "auto";
}
