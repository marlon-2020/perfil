function detalhes(i,up,down,data){
    document.getElementsByClassName("pic-tri-up")[i].style.display=up
    document.getElementsByClassName("pic-tri-down")[i].style.display=down
    document.getElementsByClassName("data")[i].style.display=data
}
var doc = document.getElementsByClassName("pic-tri-down")
var doc1 = document.getElementsByClassName("pic-tri-up")

doc[0].addEventListener("click", ()=>{
    detalhes(0,"inline","none","block")
})
doc[1].addEventListener("click", ()=>{
    detalhes(1,"inline","none","block")
})
doc[2].addEventListener("click", ()=>{
    detalhes(2,"inline","none","block")
})
doc[3].addEventListener("click", ()=>{
    detalhes(3,"inline","none","block")
})

doc1[0].addEventListener("click", ()=>{
    detalhes(0,"none","inline","none")
})
doc1[1].addEventListener("click", ()=>{
    detalhes(1,"none","inline","none")
})
doc1[2].addEventListener("click", ()=>{
    detalhes(2,"none","inline","none")
})
doc1[3].addEventListener("click", ()=>{
    detalhes(3,"none","inline","none")
})