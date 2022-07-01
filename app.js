let places=document.getElementsByClassName("black")
let str="",str2="",coord,coord2,coordination,arr,counter=0
let arr1=[
    [2,7,11],
    [1,6,10,15,19],
    [0,5,9,14,18,23,27],
    [4,8,13,17,22,26,31],
    [20,24,29],
    [27,31],
    [19,23,26,30],
    [11,15,18,22,25,29],
    [3,7,10,14,17,21,24,28],
    [2,6,9,13,16,20],
    [1,5,8,12],
    [0,4],
]



let blacks=document.getElementsByClassName("b")
let whites=document.getElementsByClassName("w")
let arrB=Array.from(blacks)
let arrW=Array.from(whites)
for(let i=0;i<whites.length;i++){
    whites[i].addEventListener("click",click)
    blacks[i].addEventListener("click",click2)
}



function click(event){
   coord=event.target.id.slice(1)
   event.stopPropagation()
   str="white"
    if(event.target.classList[2]){
        str2="queen"
    }
}



function click2(event){
    coord2=event.target.id.slice(1)
    event.stopPropagation()
    str="black"
    if(event.target.classList[2]){
        str2="queen"
    }
 }




for(let f=0;f<places.length;f++){
    places[f].addEventListener("click",()=>{
        if(!places[f].innerHTML){
            
            coord2=Number(coord2)
            coord=Number(coord)
            coordination=   str=="white"?coord:coord2
            if(str2=="queen" && str=='white'){
                stepQueen(places,f,coordination,arrB)
            }else if(str2=="queen" && str=='black'){
                
                stepQueen(places,f,coordination,arrW)
            }
             arr= str=="white"?arrB:arrW
             
            if(!str2 && coordination>f+5 || coordination<f-5){
                eating(places,f,coordination,arr)
            }else if(!str2){
            
                placeStep(places,f,coordination,str)
            }
            
        }
        str2=""
        })
           
        
}



function placeStep(places,i,coorD,str){
    if(coorD==i+4 && str=="white"){
        step(places,i,coorD)
    }else if(coorD==i-4 && str=="black"){
        step(places,i,coorD)
    }
    if(coorD>=28 && coorD<=31 || coorD>=20 && coorD<=23 || coorD>=12 && coorD<=15 || coorD>=4 && coorD<=7){
        if(coorD==i+5 && str=="white"){
            
            step(places,i,coorD)
        }else if(coorD==i-3 && str=="black")  {
            
            step(places,i,coorD)
        }
    }else if(coorD>=24 && coorD<=27 || coorD>=16 && coorD<=19 || coorD>=8 && coorD<=11 || coorD>=0 && coorD<=3){
            if(coorD==i+3 && str=="white"){
            
                step(places,i,coorD)
            }else if(coorD==i-5 && str=="black"){
                
                step(places,i,coorD)
            }
        }
        queening(arrW,places,0)
        queening(arrB,places,28)
}






function step(a,b,c){
    let child=document.getElementById(`_${c}`)
    if(child){
        a[b].append(child)
        child.id=`_${b}`
        a[c].innerHTML=""
    }
    
    
}


function eating(places,i,coorD,arr){
    
    if(coorD>=28 && coord<=31 || coorD>=20 && coorD<=23 || coorD>=12 && coorD<=15 || coorD>=4 && coorD<=7){
        if(coorD>=5 && arr.includes(places[coorD-5].children[0])  && coorD==i+9 ){
            step(places,i,coorD)
            places[coorD-5].innerHTML=""
        }else if(coorD>=4 && arr.includes(places[coorD-4].children[0])  && coorD==i+7 && coorD>=4){
            step(places,i,coorD)
            places[coorD-4].innerHTML=""
        }   
        if(coorD<=28 && arr.includes(places[coorD+3].children[0])  && coorD==i-7){
            step(places,i,coorD)
            places[coorD+3].innerHTML=""
        }else if(coorD<=27 && arr.includes(places[coorD+4].children[0])  && coorD==i-9){
            step(places,i,coorD)
            places[coorD+4].innerHTML=""
        }
    }else if(coorD>=24 && coorD<=27 || coorD>=16 && coorD<=19 || coorD>=8 && coorD<=11 || coorD>=0 && coorD<=3){
            
            if(coorD>=3 && coorD>=3 && arr.includes(places[coorD-3].children[0])  && coorD==i+7 ){
                step(places,i,coorD)
                places[coorD-3].innerHTML=""
            }else if(coorD>=4 && arr.includes(places[coorD-4].children[0])  && coorD==i+9){
                step(places,i,coorD)
                places[coorD-4].innerHTML=""
            } 
            if(coorD<=26 && arr.includes(places[coorD+5].children[0])  && coorD==i-9){
                step(places,i,coorD)
                places[coorD+5].innerHTML=""
            }else if(coorD<=27 && arr.includes(places[coorD+4].children[0])  && coorD==i-7){
                step(places,i,coorD)
                places[coorD+4].innerHTML=""
            } 
           
        }
        queening(arrW,places,0)
        queening(arrB,places,28)
       
        
}



function stepQueen(place,i,coorD,arr){
    let kerac,placeKerac
    for(let f=0;f<arr1.length;f++){
        for(let a=0;a<places.length;a++){
          
            if(arr1[f].includes(i) && arr1[f].includes(coorD) && arr.includes(places[a].children[0]) && arr1[f].includes(a) ){
              
                if(coorD>i && coorD>a && a>i || i>a && i>coorD && a>coorD){
                    counter++
                    kerac=places[a].children[0]
                    placeKerac=places[a]
                }
                
            }
        }
        if(arr1[f].includes(i) && arr1[f].includes(coorD) && counter>=0 && counter<=1){
            
            step(place,i,coorD)
            if(kerac){
                kerac.remove()
                placeKerac.innerHTML=""
            }
            
        }
    }
    counter=0
}


function queening(arr,places,a){
    for(let f=a;f<a+4;f++){
        if(arr.includes(places[f].children[0])){
            places[f].children[0].classList.add("queen")
            places[f].children[0].style.borderColor= str=="white"? "blue":"red"
        }
    }
}


// function winning(arr){
//     for(let i=0;i<places.length;i++){
//         if(!arr(places[i].children[0])){
//             str=="white" ? alert("whites wins") : alert("blacks wins")
//         }
//     }
// }