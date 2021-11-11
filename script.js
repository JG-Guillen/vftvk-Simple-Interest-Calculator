function displayvalues()
{
    var amount = document.getElementById("amount");
    var rate = document.getElementById("rate");
    var years = document.getElementById("years");
    var revenue = document.getElementById("display_revenue");
    fecha = new Date().getFullYear()
    revenue_date = Number(fecha) + Number(years.value)
    //alert(revenue_date)
    revenue.innerHTML = "If you deposit " +amount.value+",<br>"+ "at an interest rate of " +rate.value+"%.<br>"+"You will receive an amount of " + amount.value*rate.value*years.value*0.01 +",<br>"+"In the Year "+ revenue_date
    //alert("amount" + years.value);
    return false;
}
        
function displayrange()
{
    var rate = document.getElementById("rate");
    var displayrate = document.getElementById("displayrate");
    displayrate.innerHTML = rate.value
    //alert("amount" + years.value);
    return false;
}