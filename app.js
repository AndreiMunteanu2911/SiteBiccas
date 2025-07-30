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
        document.querySelector(".page5-proTierPrice").textContent=" 8";
        document.querySelector(".page5-freeTierPrice").textContent=" 0";
        document.querySelector(".page5-businessTierPrice").textContent=" 16";
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
        document.querySelector(".page5-proTierPrice").textContent=" 88";
        document.querySelector(".page5-freeTierPrice").textContent=" 0";
        document.querySelector(".page5-businessTierPrice").textContent=" 176";
    }
});