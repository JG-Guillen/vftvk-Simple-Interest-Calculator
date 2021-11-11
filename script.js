function displayvalues()
{
    var amount = document.getElementById("amount");
    var rate = document.getElementById("rate");
    var years = document.getElementById("years");
    var revenue = document.getElementById("display_revenue");
    fecha = new Date().getFullYear()
    var result = amount.value*rate.value*years.value*0.01
    revenue_date = Number(fecha) + Number(years.value)
    revenue.innerHTML = "If you deposit <span class=\"result\">"+amount.value+"</span>,<br> at an interest rate of <span class=\"result\">"+rate.value+"%</span>.<br>You will receive an amount of <span class=\"result\">"+result+"</span>,<br> in the year <span class=\"result\">"+ revenue_date+"</span>"
    return false
}
        
function displayrange()
{
    var rate = document.getElementById("rate");
    var displayrate = document.getElementById("displayrate");
    displayrate.innerHTML = rate.value
    return false;
}
