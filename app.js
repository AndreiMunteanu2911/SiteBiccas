console.log("test");

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

        freeDiv=document.querySelector("#page5-freeTier");
        proDiv=document.querySelector("#page5-proTier");
        businessDiv=document.querySelector("#page5-businessTier");
        freeDiv.classList.add("enlargeable");
        freeDiv.classList.remove("enlarged");
        proDiv.classList.add("enlargeable");
        proDiv.classList.remove("enlarged");
        businessDiv.classList.remove("enlarged");
        businessDiv.classList.add("enlargeable");

        document.querySelector("#page5-proTier").classList.remove("page5-cardSelected");
        document.querySelector("#page5-proTier").classList.add("page5-cardUnselected");
        document.querySelector("#page5-proTierPrice").classList.remove("page5-SelectedPrice");
        document.querySelector("#page5-proTierPrice").classList.add("page5-Price");
        document.querySelector("#page5-proTierName").classList.remove("page5-SelectedName");
        document.querySelector("#page5-proTierName").classList.add("page5-Name");
        document.querySelector("#page5-proTierSubtitle").classList.remove("page5-SelectedSubtitle");
        document.querySelector("#page5-proTierSubtitle").classList.add("page5-Subtitle");
        document.querySelector("#page5-proTierSign").classList.remove("page5-SelectedSign");
        document.querySelector("#page5-proTierSign").classList.add("page5-Sign");
        document.querySelector("#page5-proTierNestedDiv").classList.remove("page5-selectedNestedDiv");
        document.querySelector("#page5-proTierNestedDiv").classList.add("page5-unselectedNestedDiv");
        document.querySelector("#page5-proTierButton").classList.remove("page5-selectedButton");
        document.querySelector("#page5-proTierButton").classList.add("page5-unselectedButton");

        document.querySelector("#page5-freeTier").classList.remove("page5-cardSelected");
        document.querySelector("#page5-freeTier").classList.add("page5-cardUnselected");
        document.querySelector("#page5-freeTierPrice").classList.remove("page5-SelectedPrice");
        document.querySelector("#page5-freeTierPrice").classList.add("page5-Price");
        document.querySelector("#page5-freeTierName").classList.remove("page5-SelectedName");
        document.querySelector("#page5-freeTierName").classList.add("page5-Name");
        document.querySelector("#page5-freeTierSubtitle").classList.remove("page5-SelectedSubtitle");
        document.querySelector("#page5-freeTierSubtitle").classList.add("page5-Subtitle");
        document.querySelector("#page5-freeTierSign").classList.remove("page5-SelectedSign");
        document.querySelector("#page5-freeTierSign").classList.add("page5-Sign");
        document.querySelector("#page5-freeTierNestedDiv").classList.remove("page5-selectedNestedDiv");
        document.querySelector("#page5-freeTierNestedDiv").classList.add("page5-unselectedNestedDiv");
        document.querySelector("#page5-freeTierButton").classList.remove("page5-selectedButton");
        document.querySelector("#page5-freeTierButton").classList.add("page5-unselectedButton");

        document.querySelector("#page5-businessTier").classList.remove("page5-cardSelected");
        document.querySelector("#page5-businessTier").classList.add("page5-cardUnselected");
        document.querySelector("#page5-businessTierPrice").classList.remove("page5-SelectedPrice");
        document.querySelector("#page5-businessTierPrice").classList.add("page5-Price");
        document.querySelector("#page5-businessTierName").classList.remove("page5-SelectedName");
        document.querySelector("#page5-businessTierName").classList.add("page5-Name");
        document.querySelector("#page5-businessTierSubtitle").classList.remove("page5-SelectedSubtitle");
        document.querySelector("#page5-businessTierSubtitle").classList.add("page5-Subtitle");
        document.querySelector("#page5-businessTierSign").classList.remove("page5-SelectedSign");
        document.querySelector("#page5-businessTierSign").classList.add("page5-Sign");
        document.querySelector("#page5-businessTierNestedDiv").classList.remove("page5-selectedNestedDiv");
        document.querySelector("#page5-businessTierNestedDiv").classList.add("page5-unselectedNestedDiv");
        document.querySelector("#page5-businessTierButton").classList.remove("page5-selectedButton");
        document.querySelector("#page5-businessTierButton").classList.add("page5-unselectedButton");


        
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


        freeDiv=document.querySelector("#page5-freeTier");
        proDiv=document.querySelector("#page5-proTier");
        businessDiv=document.querySelector("#page5-businessTier");
        freeDiv.classList.add("enlargeable");
        freeDiv.classList.remove("enlarged");
        proDiv.classList.add("enlargeable");
        proDiv.classList.remove("enlarged");
        businessDiv.classList.remove("enlarged");
        businessDiv.classList.add("enlargeable");

        document.querySelector("#page5-proTier").classList.remove("page5-cardSelected");
        document.querySelector("#page5-proTier").classList.add("page5-cardUnselected");
        document.querySelector("#page5-proTierPrice").classList.remove("page5-SelectedPrice");
        document.querySelector("#page5-proTierPrice").classList.add("page5-Price");
        document.querySelector("#page5-proTierName").classList.remove("page5-SelectedName");
        document.querySelector("#page5-proTierName").classList.add("page5-Name");
        document.querySelector("#page5-proTierSubtitle").classList.remove("page5-SelectedSubtitle");
        document.querySelector("#page5-proTierSubtitle").classList.add("page5-Subtitle");
        document.querySelector("#page5-proTierSign").classList.remove("page5-SelectedSign");
        document.querySelector("#page5-proTierSign").classList.add("page5-Sign");
        document.querySelector("#page5-proTierNestedDiv").classList.remove("page5-selectedNestedDiv");
        document.querySelector("#page5-proTierNestedDiv").classList.add("page5-unselectedNestedDiv");
        document.querySelector("#page5-proTierButton").classList.remove("page5-selectedButton");
        document.querySelector("#page5-proTierButton").classList.add("page5-unselectedButton");

        document.querySelector("#page5-freeTier").classList.remove("page5-cardSelected");
        document.querySelector("#page5-freeTier").classList.add("page5-cardUnselected");
        document.querySelector("#page5-freeTierPrice").classList.remove("page5-SelectedPrice");
        document.querySelector("#page5-freeTierPrice").classList.add("page5-Price");
        document.querySelector("#page5-freeTierName").classList.remove("page5-SelectedName");
        document.querySelector("#page5-freeTierName").classList.add("page5-Name");
        document.querySelector("#page5-freeTierSubtitle").classList.remove("page5-SelectedSubtitle");
        document.querySelector("#page5-freeTierSubtitle").classList.add("page5-Subtitle");
        document.querySelector("#page5-freeTierSign").classList.remove("page5-SelectedSign");
        document.querySelector("#page5-freeTierSign").classList.add("page5-Sign");
        document.querySelector("#page5-freeTierNestedDiv").classList.remove("page5-selectedNestedDiv");
        document.querySelector("#page5-freeTierNestedDiv").classList.add("page5-unselectedNestedDiv");
        document.querySelector("#page5-freeTierButton").classList.remove("page5-selectedButton");
        document.querySelector("#page5-freeTierButton").classList.add("page5-unselectedButton");

        document.querySelector("#page5-businessTier").classList.remove("page5-cardSelected");
        document.querySelector("#page5-businessTier").classList.add("page5-cardUnselected");
        document.querySelector("#page5-businessTierPrice").classList.remove("page5-SelectedPrice");
        document.querySelector("#page5-businessTierPrice").classList.add("page5-Price");
        document.querySelector("#page5-businessTierName").classList.remove("page5-SelectedName");
        document.querySelector("#page5-businessTierName").classList.add("page5-Name");
        document.querySelector("#page5-businessTierSubtitle").classList.remove("page5-SelectedSubtitle");
        document.querySelector("#page5-businessTierSubtitle").classList.add("page5-Subtitle");
        document.querySelector("#page5-businessTierSign").classList.remove("page5-SelectedSign");
        document.querySelector("#page5-businessTierSign").classList.add("page5-Sign");
        document.querySelector("#page5-businessTierNestedDiv").classList.remove("page5-selectedNestedDiv");
        document.querySelector("#page5-businessTierNestedDiv").classList.add("page5-unselectedNestedDiv");
        document.querySelector("#page5-businessTierButton").classList.remove("page5-selectedButton");
        document.querySelector("#page5-businessTierButton").classList.add("page5-unselectedButton");

    }
});

document.querySelector("#page5-freeTier").addEventListener("click", function(){

    freeDiv=document.querySelector("#page5-freeTier");
    proDiv=document.querySelector("#page5-proTier");
    businessDiv=document.querySelector("#page5-businessTier");
    freeDiv.classList.remove("enlargeable");
    freeDiv.classList.add("enlarged");
    proDiv.classList.add("enlargeable");
    proDiv.classList.remove("enlarged");
    businessDiv.classList.remove("enlarged");
    businessDiv.classList.add("enlargeable");
    proDiv.style.color="black";

    document.querySelector("#page5-freeTier").classList.remove("page5-cardUnselected");
    document.querySelector("#page5-freeTier").classList.add("page5-cardSelected");
    document.querySelector("#page5-freeTierPrice").classList.remove("page5-Price");
    document.querySelector("#page5-freeTierPrice").classList.add("page5-SelectedPrice");
    document.querySelector("#page5-freeTierName").classList.remove("page5-Name");
    document.querySelector("#page5-freeTierName").classList.add("page5-SelectedName");
    document.querySelector("#page5-freeTierSubtitle").classList.remove("page5-Subtitle");
    document.querySelector("#page5-freeTierSubtitle").classList.add("page5-SelectedSubtitle");
    document.querySelector("#page5-freeTierSign").classList.remove("page5-Sign");
    document.querySelector("#page5-freeTierSign").classList.add("page5-SelectedSign");
    document.querySelector("#page5-freeTierNestedDiv").classList.remove("page5-unselectedNestedDiv");
    document.querySelector("#page5-freeTierNestedDiv").classList.add("page5-selectedNestedDiv");
    document.querySelector("#page5-freeTierButton").classList.remove("page5-unselectedButton");
    document.querySelector("#page5-freeTierButton").classList.add("page5-selectedButton");

    document.querySelector("#page5-proTier").classList.remove("page5-cardSelected");
    document.querySelector("#page5-proTier").classList.add("page5-cardUnselected");
    document.querySelector("#page5-proTierPrice").classList.remove("page5-SelectedPrice");
    document.querySelector("#page5-proTierPrice").classList.add("page5-Price");
    document.querySelector("#page5-proTierName").classList.remove("page5-SelectedName");
    document.querySelector("#page5-proTierName").classList.add("page5-Name");
    document.querySelector("#page5-proTierSubtitle").classList.remove("page5-SelectedSubtitle");
    document.querySelector("#page5-proTierSubtitle").classList.add("page5-Subtitle");
    document.querySelector("#page5-proTierSign").classList.remove("page5-SelectedSign");
    document.querySelector("#page5-proTierSign").classList.add("page5-Sign");
    document.querySelector("#page5-proTierNestedDiv").classList.remove("page5-selectedNestedDiv");
    document.querySelector("#page5-proTierNestedDiv").classList.add("page5-unselectedNestedDiv");
    document.querySelector("#page5-proTierButton").classList.remove("page5-selectedButton");
    document.querySelector("#page5-proTierButton").classList.add("page5-unselectedButton");

    document.querySelector("#page5-businessTier").classList.remove("page5-cardSelected");
    document.querySelector("#page5-businessTier").classList.add("page5-cardUnselected");
    document.querySelector("#page5-businessTierPrice").classList.remove("page5-SelectedPrice");
    document.querySelector("#page5-businessTierPrice").classList.add("page5-Price");
    document.querySelector("#page5-businessTierName").classList.remove("page5-SelectedName");
    document.querySelector("#page5-businessTierName").classList.add("page5-Name");
    document.querySelector("#page5-businessTierSubtitle").classList.remove("page5-SelectedSubtitle");
    document.querySelector("#page5-businessTierSubtitle").classList.add("page5-Subtitle");
    document.querySelector("#page5-businessTierSign").classList.remove("page5-SelectedSign");
    document.querySelector("#page5-businessTierSign").classList.add("page5-Sign");
    document.querySelector("#page5-businessTierNestedDiv").classList.remove("page5-selectedNestedDiv");
    document.querySelector("#page5-businessTierNestedDiv").classList.add("page5-unselectedNestedDiv");
    document.querySelector("#page5-businessTierButton").classList.remove("page5-selectedButton");
    document.querySelector("#page5-businessTierButton").classList.add("page5-unselectedButton");
});


document.querySelector("#page5-proTier").addEventListener("click", function(){
    freeDiv=document.querySelector("#page5-freeTier");
    proDiv=document.querySelector("#page5-proTier");
    businessDiv=document.querySelector("#page5-businessTier");
    proDiv.classList.remove("enlargeable");
    proDiv.classList.add("enlarged");
    freeDiv.classList.add("enlargeable");
    freeDiv.classList.remove("enlarged");
    businessDiv.classList.remove("enlarged");
    businessDiv.classList.add("enlargeable");
    proDiv.style.color="black";

    document.querySelector("#page5-proTier").classList.remove("page5-cardUnselected");
    document.querySelector("#page5-proTier").classList.add("page5-cardSelected");
    document.querySelector("#page5-proTierPrice").classList.remove("page5-Price");
    document.querySelector("#page5-proTierPrice").classList.add("page5-SelectedPrice");
    document.querySelector("#page5-proTierName").classList.remove("page5-Name");
    document.querySelector("#page5-proTierName").classList.add("page5-SelectedName");
    document.querySelector("#page5-proTierSubtitle").classList.remove("page5-Subtitle");
    document.querySelector("#page5-proTierSubtitle").classList.add("page5-SelectedSubtitle");
    document.querySelector("#page5-proTierSign").classList.remove("page5-Sign");
    document.querySelector("#page5-proTierSign").classList.add("page5-SelectedSign");
    document.querySelector("#page5-proTierNestedDiv").classList.remove("page5-unselectedNestedDiv");
    document.querySelector("#page5-proTierNestedDiv").classList.add("page5-selectedNestedDiv");
    document.querySelector("#page5-proTierButton").classList.remove("page5-unselectedButton");
    document.querySelector("#page5-proTierButton").classList.add("page5-selectedButton");

    document.querySelector("#page5-freeTier").classList.remove("page5-cardSelected");
    document.querySelector("#page5-freeTier").classList.add("page5-cardUnselected");
    document.querySelector("#page5-freeTierPrice").classList.remove("page5-SelectedPrice");
    document.querySelector("#page5-freeTierPrice").classList.add("page5-Price");
    document.querySelector("#page5-freeTierName").classList.remove("page5-SelectedName");
    document.querySelector("#page5-freeTierName").classList.add("page5-Name");
    document.querySelector("#page5-freeTierSubtitle").classList.remove("page5-SelectedSubtitle");
    document.querySelector("#page5-freeTierSubtitle").classList.add("page5-Subtitle");
    document.querySelector("#page5-freeTierSign").classList.remove("page5-SelectedSign");
    document.querySelector("#page5-freeTierSign").classList.add("page5-Sign");
    document.querySelector("#page5-freeTierNestedDiv").classList.remove("page5-selectedNestedDiv");
    document.querySelector("#page5-freeTierNestedDiv").classList.add("page5-unselectedNestedDiv");
    document.querySelector("#page5-freeTierButton").classList.remove("page5-selectedButton");
    document.querySelector("#page5-freeTierButton").classList.add("page5-unselectedButton");

    document.querySelector("#page5-businessTier").classList.remove("page5-cardSelected");
    document.querySelector("#page5-businessTier").classList.add("page5-cardUnselected");
    document.querySelector("#page5-businessTierPrice").classList.remove("page5-SelectedPrice");
    document.querySelector("#page5-businessTierPrice").classList.add("page5-Price");
    document.querySelector("#page5-businessTierName").classList.remove("page5-SelectedName");
    document.querySelector("#page5-businessTierName").classList.add("page5-Name");
    document.querySelector("#page5-businessTierSubtitle").classList.remove("page5-SelectedSubtitle");
    document.querySelector("#page5-businessTierSubtitle").classList.add("page5-Subtitle");
    document.querySelector("#page5-businessTierSign").classList.remove("page5-SelectedSign");
    document.querySelector("#page5-businessTierSign").classList.add("page5-Sign");
    document.querySelector("#page5-businessTierNestedDiv").classList.remove("page5-selectedNestedDiv");
    document.querySelector("#page5-businessTierNestedDiv").classList.add("page5-unselectedNestedDiv");
    document.querySelector("#page5-businessTierButton").classList.remove("page5-selectedButton");
    document.querySelector("#page5-businessTierButton").classList.add("page5-unselectedButton");
});






document.querySelector("#page5-businessTier").addEventListener("click", function(){

    freeDiv=document.querySelector("#page5-freeTier");
    proDiv=document.querySelector("#page5-proTier");
    businessDiv=document.querySelector("#page5-businessTier");
    freeDiv.classList.remove("enlarged");
    freeDiv.classList.add("enlargeable");
    businessDiv.classList.remove("enlargeable");
    businessDiv.classList.add("enlarged");
    proDiv.classList.remove("enlarged");
    proDiv.classList.add("enlargeable");

    document.querySelector("#page5-proTier").classList.remove("page5-cardSelected");
    document.querySelector("#page5-proTier").classList.add("page5-cardUnselected");
    document.querySelector("#page5-proTierPrice").classList.remove("page5-SelectedPrice");
    document.querySelector("#page5-proTierPrice").classList.add("page5-Price");
    document.querySelector("#page5-proTierName").classList.remove("page5-SelectedName");
    document.querySelector("#page5-proTierName").classList.add("page5-Name");
    document.querySelector("#page5-proTierSubtitle").classList.remove("page5-SelectedSubtitle");
    document.querySelector("#page5-proTierSubtitle").classList.add("page5-Subtitle");
    document.querySelector("#page5-proTierSign").classList.remove("page5-SelectedSign");
    document.querySelector("#page5-proTierSign").classList.add("page5-Sign");
    document.querySelector("#page5-proTierNestedDiv").classList.remove("page5-selectedNestedDiv");
    document.querySelector("#page5-proTierNestedDiv").classList.add("page5-unselectedNestedDiv");
    document.querySelector("#page5-proTierButton").classList.remove("page5-selectedButton");
    document.querySelector("#page5-proTierButton").classList.add("page5-unselectedButton");

    document.querySelector("#page5-freeTier").classList.remove("page5-cardSelected");
    document.querySelector("#page5-freeTier").classList.add("page5-cardUnselected");
    document.querySelector("#page5-freeTierPrice").classList.remove("page5-SelectedPrice");
    document.querySelector("#page5-freeTierPrice").classList.add("page5-Price");
    document.querySelector("#page5-freeTierName").classList.remove("page5-SelectedName");
    document.querySelector("#page5-freeTierName").classList.add("page5-Name");
    document.querySelector("#page5-freeTierSubtitle").classList.remove("page5-SelectedSubtitle");
    document.querySelector("#page5-freeTierSubtitle").classList.add("page5-Subtitle");
    document.querySelector("#page5-freeTierSign").classList.remove("page5-SelectedSign");
    document.querySelector("#page5-freeTierSign").classList.add("page5-Sign");
    document.querySelector("#page5-freeTierNestedDiv").classList.remove("page5-selectedNestedDiv");
    document.querySelector("#page5-freeTierNestedDiv").classList.add("page5-unselectedNestedDiv");
    document.querySelector("#page5-freeTierButton").classList.remove("page5-selectedButton");
    document.querySelector("#page5-freeTierButton").classList.add("page5-unselectedButton");

    document.querySelector("#page5-businessTier").classList.remove("page5-cardUnselected");
    document.querySelector("#page5-businessTier").classList.add("page5-cardSelected");
    document.querySelector("#page5-businessTierPrice").classList.remove("page5-Price");
    document.querySelector("#page5-businessTierPrice").classList.add("page5-SelectedPrice");
    document.querySelector("#page5-businessTierName").classList.remove("page5-Name");
    document.querySelector("#page5-businessTierName").classList.add("page5-SelectedName");
    document.querySelector("#page5-businessTierSubtitle").classList.remove("page5-Subtitle");
    document.querySelector("#page5-businessTierSubtitle").classList.add("page5-SelectedSubtitle");
    document.querySelector("#page5-businessTierNestedDiv").classList.remove("page5-unselectedNestedDiv");
    document.querySelector("#page5-businessTierNestedDiv").classList.add("page5-selectedNestedDiv");
    document.querySelector("#page5-businessTierButton").classList.remove("page5-unselectedButton");
    document.querySelector("#page5-businessTierButton").classList.add("page5-selectedButton");
    document.querySelector("#page5-businessTierSign").classList.remove("page5-Sign");
    document.querySelector("#page5-businessTierSign").classList.add("page5-SelectedSign");
});