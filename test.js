const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sideBar = document.querySelector(".sidebar");


toggleBtn.addEventListener("click",function(){
    // console.log(sideBar.classList);
    // console.log("listing",sideBar.classList);

    // if(sideBar.classList.contains("sidebar")){
    //     sideBar.classList.remove("sidebar")
    // }else{
    //     sideBar.classList.add("sidebar")
    // }
    sideBar.classList.toggle("sidebar")

})

