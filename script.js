var aname =  (YY, MM, d, gender)=>{
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var d = new Date(YY,--MM, d);
    if (gender === "Female") {
        return d && femaleNames[d.getDay()];
    } else {
        return d && maleNames[d.getDay()];
    }
}

$(document).ready( ()=> {
    $("form#form").submit( (event)=> {
        event.preventDefault();
        var YY = parseInt($("#year").val());
        var MM = parseInt($("#month").val());
        var d = parseInt($("#date").val());
        var gender = $("input:radio[name=gender]:checked").val();
        var result = aname(YY, MM, d, gender);
        alert("Your Akan name is: " + result);
        document.getId("form").reset();
    });
});
