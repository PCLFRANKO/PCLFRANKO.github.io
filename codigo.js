let msj = ["Eres la niña mas bonita", "Te quiero muchisimo","Me encantas","Eres muy especial","Me gustas mucho",
            "Siempre seras mi pequeñita"]
let emo = ["😍😍","💗💗","🥰🥰","🥰😍","💗🥰","🥰💗😍💗🥰"]
var n = 0

function respuestaSi(){
    if(n >= msj.length){
       
        const p = document.getElementById("letras")
        const e = document.getElementById("emotes")

        p.innerText = "De: Frank💘"
        e.innerText = "Para: Melicita💗"

        var b = document.getElementById("si")
        b.style.display = "none"

    } else {
        
        const p = document.getElementById("letras")
        const e = document.getElementById("emotes")
        var b = document.getElementById("si")

        p.innerText = msj[n]
        e.innerText = emo[n] 
        b.innerText = "Otra vez💘"

        n++
    }
}