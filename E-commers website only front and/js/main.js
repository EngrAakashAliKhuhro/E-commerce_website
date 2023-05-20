const MenuIcon =document.getElementById("menu_icon");
const slideoutMenu =document.getElementById("slideout_menu");
const searchIcon =document.getElementById("search_icon");
const searchBox =document.getElementById("searchbox");
searchIcon.addEventListener('click',function(){
    if(searchBox.style.top=='72px')
{
searchBox.style.top='24px';
searchBox.style.pointerEvents='none';
}
else{
    searchBox.style.top='72px';
    searchBox.style.pointerEvents='auto';

}
})
MenuIcon.addEventListener('click',function()
{
    if(slideoutMenu.style.opacity=="1")
    {
        slideoutMenu.style.opacity=='0';
        slideoutMenu.style.pointerEvents='none';
    }
    else
        {
            slideoutMenu.style.opacity=='1';
            slideoutMenu.style.pointerEvents='auto';
        }
    
})
