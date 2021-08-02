function menuMove(event){

    let whiteStyle = "color: black; background-color: white;"
    let blackStyle = "color: white; background-color: #298eb5;"

    let menu = ["home", "game", "jukebox"]
    for(let i=0;i<menu.length;i++){
        if(event.target.id === menu[i]){
            document.getElementById("menu").setAttribute("src", menu[i]+".html")
            document.getElementById(menu[i]).style = whiteStyle
        }else{
            document.getElementById(menu[i]).style = blackStyle
        }
    }
}