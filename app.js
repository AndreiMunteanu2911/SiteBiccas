console.log("test");

document.querySelector(".page5-buttonMonthly").addEventListener("click", function()
{
    console.log("Clicked Monthly");
    const btnYearly= document.querySelector(".page5-buttonYearly");
    const btnMonthly= document.querySelector(".page5-buttonMonthly");
    if (btnMonthly.style.background === "#FFFFFF"){
        console.log("Passed if Monthly");
        btnMonthly.style.background="#54BD95";
        btnMonthly.style.color="#FFFFFF";
        btnYearly.style.background="#FFFFFF";
        btnYearly.style.color="#000000";
    }
});

document.querySelector(".page5-buttonYearly").addEventListener("click", function()
{
    console.log("Clicked Yearly");
    const btnMonthly= document.querySelector(".page5-buttonMonthly");
    const btnYearly= document.querySelector(".page5-buttonYearly");
    if (btnYearly.style.background === "#FFFFFF"){
        console.log("Passed if Yearly");
        btnYearly.style.background="#54BD95";
        btnYearly.style.color="#FFFFFF";
        btnMonthly.style.background="#FFFFFF";
        btnMonthly.style.color="#000000";
    }
});