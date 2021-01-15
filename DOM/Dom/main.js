function buttonClick()
{
    var str = document.getElementById("heading2").innerHTML="Welcome back";
    alert(str);
}

function fn2()
{
    var rad1 = document.getElementById("rd1");
    var rad2 = document.getElementById("rd2");

    if (rad1.checked == true)
        alert("Your city is: "+rad1.value);
    else if (rad2.checked == true)
        alert("Your city is: "+rad2.value)
    else
        alert("None of the city is selected.");
}

function fn3()
{
    var uname = document.getElementById("text1").value;
    var pass = document.getElementById("text2").value;

    if(uname == pass)
    {
        alert("Username and Password is same");
    }
    else{
        alert("Username and password is: "+uname+" "+pass);
    }
}

function fn4()
{
    var select = document.getElementById("selectbox");
    alert(select.options[select.selectedIndex].value);
}