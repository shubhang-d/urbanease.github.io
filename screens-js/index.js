function closeSidebar(){
    document.getElementById("sidebarOverlay").style.visibility='hidden';
}

function openNav(){
    document.getElementById("sidebarOverlay").style.visibility='visible';
}

function scrolltoview(){
    const elem = document.getElementById("sec-categories");
    elem.scrollIntoView({behavior: "smooth", block: "end"});
}