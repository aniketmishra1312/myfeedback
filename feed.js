function Clear() {
    document.getElementById("fname").value = "";
    document.getElementById("mname").value = "";
    document.getElementById("lname").value = "";
    document.querySelector('input[name="gender"]:checked').checked = false;
    document.getElementById("sugges").value = "";
}
function input() {
    debugger;
 
    var fname = document.getElementById("fname").value;
    var midmame = document.getElementById("mname").value;
    var lastname = document.getElementById("lname").value;
   var Gender = document.querySelector('input[name="gender"]:checked').value;
   
  
    var feedback = document.getElementById("Feedback").innerHTML;
    var suggestion = document.getElementById("sugges").value;
    var d = new Date();
   
    if (fname == "" ) {
        alert("Please enter your first name. ");
    }
    else if (lastname == "")
    {
        alert("Please enter your last name. ");
    }
    else if (suggestion == "") {
        alert("Please enter your suggestion. ");
    }
    else if (fname.length > 40 || midmame.length > 40 || lastname.length > 40)
    {
        alert("Please enter your name in 40 char ");
    }
    else{
        if (midmame.trim() == "")
            name = Gender + " " + fname.trim() + " " + lastname.trim();
        else {
            name = Gender + " " + fname.trim() + " " + midmame.trim() + " " + lastname.trim()
        }
        feedback +="<div  class='feed' id='f'>";
        feedback += "<br>" + "Name: " + name + "<br>" + "Suggestion: " + suggestion + "<br>" + d + "<br>";
        feedback += "</div>";
       
        document.getElementById("Feedback").innerHTML = feedback;
        

    } 
    
    var objDiv = document.getElementById("Feedback");
    objDiv.scrollTop = objDiv.scrollHeight;
    Clear();
    
}
function validName() {
    
    var a = document.getElementById("fname").value;
    if(a.length>0)
        document.getElementById("s").style.display = "none";
    else
        document.getElementById("s").style.display = "inline-block";
}