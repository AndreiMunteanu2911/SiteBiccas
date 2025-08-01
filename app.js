function setEnlarged(whichCard){
    document.querySelector(`#page5-${whichCard}Tier`).classList.add("enlarged");
    document.querySelector(`#page5-${whichCard}Tier`).classList.remove("enlargeable");
}

function setEnlargeable(whichCard){
    document.querySelector(`#page5-${whichCard}Tier`).classList.remove("enlarged");
    document.querySelector(`#page5-${whichCard}Tier`).classList.add("enlargeable");
}

function setActive(whichCard){
    document.querySelector(`#page5-${whichCard}Tier`).classList.remove("page5-cardUnselected");
    document.querySelector(`#page5-${whichCard}Tier`).classList.add("page5-cardSelected");
    document.querySelector(`#page5-${whichCard}TierPrice`).classList.remove("page5-Price");
    document.querySelector(`#page5-${whichCard}TierPrice`).classList.add("page5-SelectedPrice");
    document.querySelector(`#page5-${whichCard}TierName`).classList.remove("page5-Name");
    document.querySelector(`#page5-${whichCard}TierName`).classList.add("page5-SelectedName");
    document.querySelector(`#page5-${whichCard}TierSubtitle`).classList.remove("page5-Subtitle");
    document.querySelector(`#page5-${whichCard}TierSubtitle`).classList.add("page5-SelectedSubtitle");
    document.querySelector(`#page5-${whichCard}TierSign`).classList.remove("page5-Sign");
    document.querySelector(`#page5-${whichCard}TierSign`).classList.add("page5-SelectedSign");
    document.querySelector(`#page5-${whichCard}TierNestedDiv`).classList.remove("page5-unselectedNestedDiv");
    document.querySelector(`#page5-${whichCard}TierNestedDiv`).classList.add("page5-selectedNestedDiv");
    document.querySelector(`#page5-${whichCard}TierButton`).classList.remove("page5-unselectedButton");
    document.querySelector(`#page5-${whichCard}TierButton`).classList.add("page5-selectedButton");
}

function setInactive(whichCard){
    document.querySelector(`#page5-${whichCard}Tier`).classList.add("page5-cardUnselected");
    document.querySelector(`#page5-${whichCard}Tier`).classList.remove("page5-cardSelected");
    document.querySelector(`#page5-${whichCard}TierPrice`).classList.add("page5-Price");
    document.querySelector(`#page5-${whichCard}TierPrice`).classList.remove("page5-SelectedPrice");
    document.querySelector(`#page5-${whichCard}TierName`).classList.add("page5-Name");
    document.querySelector(`#page5-${whichCard}TierName`).classList.remove("page5-SelectedName");
    document.querySelector(`#page5-${whichCard}TierSubtitle`).classList.add("page5-Subtitle");
    document.querySelector(`#page5-${whichCard}TierSubtitle`).classList.remove("page5-SelectedSubtitle");
    document.querySelector(`#page5-${whichCard}TierSign`).classList.add("page5-Sign");
    document.querySelector(`#page5-${whichCard}TierSign`).classList.remove("page5-SelectedSign");
    document.querySelector(`#page5-${whichCard}TierNestedDiv`).classList.add("page5-unselectedNestedDiv");
    document.querySelector(`#page5-${whichCard}TierNestedDiv`).classList.remove("page5-selectedNestedDiv");
    document.querySelector(`#page5-${whichCard}TierButton`).classList.add("page5-unselectedButton");
    document.querySelector(`#page5-${whichCard}TierButton`).classList.remove("page5-selectedButton");
}

document.querySelector(".page5-buttonMonthly").addEventListener("click", function()
{
    const btnYearly= document.querySelector(".page5-buttonYearly");
    const btnMonthly= document.querySelector(".page5-buttonMonthly");
    if (window.getComputedStyle(btnMonthly).backgroundColor==="rgb(255, 255, 255)"){

        btnMonthly.style.background="#54BD95";
        btnMonthly.style.color="#FFFFFF";
        btnYearly.style.background="#FFFFFF";
        btnYearly.style.color="#000000";

        document.querySelector("#page5-proTierPrice").textContent=" 8";
        document.querySelector("#page5-freeTierPrice").textContent=" 0";
        document.querySelector("#page5-businessTierPrice").textContent=" 16";

        setEnlargeable("free");
        setEnlargeable("pro");
        setEnlargeable("business");

        setInactive("free");
        setInactive("pro");
        setInactive("business");

    }

});

document.querySelector(".page5-buttonYearly").addEventListener("click", function()
{
    const btnMonthly= document.querySelector(".page5-buttonMonthly");
    const btnYearly= document.querySelector(".page5-buttonYearly");
    if (window.getComputedStyle(btnYearly).backgroundColor==="rgb(255, 255, 255)"){

        btnYearly.style.background="#54BD95";
        btnYearly.style.color="#FFFFFF";
        btnMonthly.style.background="#FFFFFF";
        btnMonthly.style.color="#000000";

        document.querySelector("#page5-proTierPrice").textContent=" 96";
        document.querySelector("#page5-freeTierPrice").textContent=" 0";
        document.querySelector("#page5-businessTierPrice").textContent=" 192";

        setEnlargeable("free");
        setEnlargeable("pro");
        setEnlargeable("business");

        setInactive("free");
        setInactive("pro");
        setInactive("business");

    }
});

document.querySelector("#page5-freeTier").addEventListener("click", function(){

    setEnlarged("free");
    setEnlargeable("pro");
    setEnlargeable("business");


    setActive("free");
    setInactive("pro");
    setInactive("business");
});


document.querySelector("#page5-proTier").addEventListener("click", function(){

    setEnlarged("pro");
    setEnlargeable("free");
    setEnlargeable("business");

    setInactive("free");
    setActive("pro");
    setInactive("business");

});






document.querySelector("#page5-businessTier").addEventListener("click", function(){

    setEnlarged("business");
    setEnlargeable("pro");
    setEnlargeable("free");

    setInactive("free");
    setInactive("pro");
    setActive("business");
});