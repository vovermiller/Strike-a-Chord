//  
//  Student Name: Vashti Overmiller
//     File Name: instructors.html
//     Date: 12/8/2020
// 

// Hamburger menu function
function hamburger(){
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block"){
        menu.style.display = "none";
    } else{
        menu.style.display = "block";
    }
}