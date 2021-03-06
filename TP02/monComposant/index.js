const getBaseURL = () => {
    return new URL('.', import.meta.url);
};
window.URL = window.URL || window.webkitURL;

const fileSelect = document.getElementById("fileSelect");
const fileElem = document.getElementById("fileElem");
const fileList = document.getElementById("fileList");

class MyLogo extends HTMLElement {

    style = `
    
    #logo {
        font-family: 'Grey Qo', cursive;
        background-size: auto;
        background-repeat: no-repeat;
        color:red;
        font-size: 40px;
        border:5px solid green;
    }
    }
    .focus-in-expand {
        -webkit-animation: focus-in-expand 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
                animation: focus-in-expand 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }
    .focus-in-expand-fwd {
        -webkit-animation: focus-in-expand-fwd 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
                animation: focus-in-expand-fwd 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }
    .tracking-in-expand {
        -webkit-animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
                animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
    }
    .focus-in-expand {
        -webkit-animation: focus-in-expand 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
                animation: focus-in-expand 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }
    .text-pop-up-top {
        -webkit-animation: text-pop-up-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
            animation: text-pop-up-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }
    .jello-vertical {
    -webkit-animation: jello-vertical 0.9s both;
        animation: jello-vertical 0.9s both;
    }
    .wobble-hor-bottom {
    -webkit-animation: wobble-hor-bottom 0.8s both;
        animation: wobble-hor-bottom 0.8s both;
    }
    .wobble-hor-top {
    -webkit-animation: wobble-hor-top 0.8s both;
        animation: wobble-hor-top 0.8s both;
    }
    .scale-up-center{-webkit-animation:scale-up-center .4s cubic-bezier(.39,.575,.565,1.000) both;animation:scale-up-center .4s cubic-bezier(.39,.575,.565,1.000) both}
    .scale-down-center{-webkit-animation:scale-down-center .4s cubic-bezier(.25,.46,.45,.94) both;animation:scale-down-center .4s cubic-bezier(.25,.46,.45,.94) both}
    
    
.btnHeader {
  height: 50px;
  width : 32%;
  display: inline-block;
  margin-left: 15px;
}

#controlsButton{
border : 2px solid black;
width:50%   
}


#arial {font-family: Arial;}
#calibri{ font-family: Calibri;}
#times {font-family: Times New Roman;}
#papyrus {font-family: Papyrus;}
#courier {font-family: Courier;}
#fantasy {font-family: Fantasy;}
#didot {font-family: Brush Script MT;}

label
{
display: block;
width: 200px;
float: left;
}    
    
    
    
    
    
    
    
    
    /* ANIMATION
 * Generated by Animista on 2021-9-13 11:7:37
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */
 
 @-webkit-keyframes wobble-hor-top {
  0%,
  100% {
    -webkit-transform: translateX(0%);
            transform: translateX(0%);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
  }
  15% {
    -webkit-transform: translateX(-30px) rotate(6deg);
            transform: translateX(-30px) rotate(6deg);
  }
  30% {
    -webkit-transform: translateX(15px) rotate(-6deg);
            transform: translateX(15px) rotate(-6deg);
  }
  45% {
    -webkit-transform: translateX(-15px) rotate(3.6deg);
            transform: translateX(-15px) rotate(3.6deg);
  }
  60% {
    -webkit-transform: translateX(9px) rotate(-2.4deg);
            transform: translateX(9px) rotate(-2.4deg);
  }
  75% {
    -webkit-transform: translateX(-6px) rotate(1.2deg);
            transform: translateX(-6px) rotate(1.2deg);
  }
}
@keyframes wobble-hor-top {
  0%,
  100% {
    -webkit-transform: translateX(0%);
            transform: translateX(0%);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
  }
  15% {
    -webkit-transform: translateX(-30px) rotate(6deg);
            transform: translateX(-30px) rotate(6deg);
  }
  30% {
    -webkit-transform: translateX(15px) rotate(-6deg);
            transform: translateX(15px) rotate(-6deg);
  }
  45% {
    -webkit-transform: translateX(-15px) rotate(3.6deg);
            transform: translateX(-15px) rotate(3.6deg);
  }
  60% {
    -webkit-transform: translateX(9px) rotate(-2.4deg);
            transform: translateX(9px) rotate(-2.4deg);
  }
  75% {
    -webkit-transform: translateX(-6px) rotate(1.2deg);
            transform: translateX(-6px) rotate(1.2deg);
  }
}

 @-webkit-keyframes wobble-hor-bottom {
  0%,
  100% {
    -webkit-transform: translateX(0%);
            transform: translateX(0%);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
  }
  15% {
    -webkit-transform: translateX(-30px) rotate(-6deg);
            transform: translateX(-30px) rotate(-6deg);
  }
  30% {
    -webkit-transform: translateX(15px) rotate(6deg);
            transform: translateX(15px) rotate(6deg);
  }
  45% {
    -webkit-transform: translateX(-15px) rotate(-3.6deg);
            transform: translateX(-15px) rotate(-3.6deg);
  }
  60% {
    -webkit-transform: translateX(9px) rotate(2.4deg);
            transform: translateX(9px) rotate(2.4deg);
  }
  75% {
    -webkit-transform: translateX(-6px) rotate(-1.2deg);
            transform: translateX(-6px) rotate(-1.2deg);
  }
}
@keyframes wobble-hor-bottom {
  0%,
  100% {
    -webkit-transform: translateX(0%);
            transform: translateX(0%);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
  }
  15% {
    -webkit-transform: translateX(-30px) rotate(-6deg);
            transform: translateX(-30px) rotate(-6deg);
  }
  30% {
    -webkit-transform: translateX(15px) rotate(6deg);
            transform: translateX(15px) rotate(6deg);
  }
  45% {
    -webkit-transform: translateX(-15px) rotate(-3.6deg);
            transform: translateX(-15px) rotate(-3.6deg);
  }
  60% {
    -webkit-transform: translateX(9px) rotate(2.4deg);
            transform: translateX(9px) rotate(2.4deg);
  }
  75% {
    -webkit-transform: translateX(-6px) rotate(-1.2deg);
            transform: translateX(-6px) rotate(-1.2deg);
  }
}

@-webkit-keyframes jello-vertical {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
  }
  30% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
            transform: scale3d(0.75, 1.25, 1);
  }
  40% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
            transform: scale3d(1.25, 0.75, 1);
  }
  50% {
    -webkit-transform: scale3d(0.85, 1.15, 1);
            transform: scale3d(0.85, 1.15, 1);
  }
  65% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
            transform: scale3d(1.05, 0.95, 1);
  }
  75% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
            transform: scale3d(0.95, 1.05, 1);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
  }
}
@keyframes jello-vertical {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
  }
  30% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
            transform: scale3d(0.75, 1.25, 1);
  }
  40% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
            transform: scale3d(1.25, 0.75, 1);
  }
  50% {
    -webkit-transform: scale3d(0.85, 1.15, 1);
            transform: scale3d(0.85, 1.15, 1);
  }
  65% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
            transform: scale3d(1.05, 0.95, 1);
  }
  75% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
            transform: scale3d(0.95, 1.05, 1);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
  }
}

@-webkit-keyframes text-pop-up-top {
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
    text-shadow: none;
  }
  100% {
    -webkit-transform: translateY(-50px);
            transform: translateY(-50px);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
    text-shadow: 0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc, 0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc, 0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 50px 30px rgba(0, 0, 0, 0.3);
  }
}
@keyframes text-pop-up-top {
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
    text-shadow: none;
  }
  100% {
    -webkit-transform: translateY(-50px);
            transform: translateY(-50px);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
    text-shadow: 0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc, 0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc, 0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 50px 30px rgba(0, 0, 0, 0.3);
  }
}


/**
 * ----------------------------------------
 * animation focus-in-expand
 * ----------------------------------------
 */
@-webkit-keyframes focus-in-expand {
  0% {
    letter-spacing: -0.5em;
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}
@keyframes focus-in-expand {
  0% {
    letter-spacing: -0.5em;
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}
      /* ----------------------------------------------
 * Generated by Animista on 2021-9-20 9:19:32
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation focus-in-expand-fwd
 * ----------------------------------------
 */
@-webkit-keyframes focus-in-expand-fwd {
  0% {
    letter-spacing: -0.5em;
    -webkit-transform: translateZ(-800px);
            transform: translateZ(-800px);
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
}
@keyframes focus-in-expand-fwd {
  0% {
    letter-spacing: -0.5em;
    -webkit-transform: translateZ(-800px);
            transform: translateZ(-800px);
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
}

/* ----------------------------------------------
 * Generated by Animista on 2021-9-20 9:22:2
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation tracking-in-expand
 * ----------------------------------------
 */
@-webkit-keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
@keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes scale-down-center{0%{-webkit-transform:scale(1);transform:scale(1)}100%{-webkit-transform:scale(.5);transform:scale(.5)}}@keyframes scale-down-center{0%{-webkit-transform:scale(1);transform:scale(1)}100%{-webkit-transform:scale(.5);transform:scale(.5)}}


@-webkit-keyframes scale-up-center{0%{-webkit-transform:scale(.5);transform:scale(.5)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes scale-up-center{0%{-webkit-transform:scale(.5);transform:scale(.5)}100%{-webkit-transform:scale(1);transform:scale(1)}}


    `;
    html = `
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.2/jspdf.min.js"></script>
 <script type="text/javascript" src="html2canvas.js"></script>
<div id ="header">
    <input type="button" id="bouttonGenerer" value="G??nerer un logo" class ="btnHeader"/>

    <input type="button" id="masquerControle" value="Options suppl??mentaires" class="btnHeader"/>
    
    <input type="button" class ="btnHeader" id="dlButton" value="DL"/>

</div>
<br>
    <div id="logo">Mon slogan</div>
    <br>

    <div id="controlsButton">
        <br>
        <label for="slogan">Votre slogan :</label><input type="text" id="slogan">
        <br> 
        <label for="selecteurCouleur">Couleur du texte :</label><input type="color" id="selecteurCouleur">
        <br>
        <label for="selecteurTaille">Taille du texte :</label>
        5 <input type="range" val=40 min=5 max=100 
                          id="selecteurTaille"> 100
        <br>
        <label for="selecteurCouleur">Police :</label>
        <select id="selecteurPolice">
        
        <option value="arial" id="arial">arial</option>
        <option value="calibri" id="calibri">calibri</option>
        <option value="courier new" id="courrier">courier new </option>
        <option value="times new" id="times">times new </option>
        <option value="papyrus" id="papyrus">papyrus </option>
        <option value="Brush Script MT" id="Brush Script MT">Brush Script MT </option>
        </select>
        <br>
        <label for="selecteurCouleur">Position texte :</label>
         1 <input type="range" value=1 min=1 max=3 
                          id="selecteurPositionTexte"> 3
        <br>
        <hr>
        <label for="selecteurCouleur">Epaisseur bordure : </label>
        1 <input type="range" val=5 min=1 max=20 
                          id="selecteurEpaisseur"> 20
        <br>
        <label for="selecteurCouleur">Couleur bordure :</label>
         <input type="color" id="selecteurCouleurBordure">
        <br>
        <hr>
        <label for="selecteurCouleur">Taille logo :</label>
         1 <input type="range" value=100 min=1 max=500 
                          id="selecteurTailleLogo"> 100
        <br>
        <label for="selecteurCouleur">Largeur logo :</label>
         1 <input type="range" value=100 min=1 max=100 
                          id="selecteurLargeurLogo"> 100
        <br>
        
        
        <label for="anim-select">Choose an animation : </label>
        <select name="animations_choice" id="anim_choice">
            <option value="anim_1">Focus in expand</option>
            <option value="anim_2">Scale up</option>
            <option value="anim_3">Scale Down</option>
            <option value="anim_4"> jello-vertical </option>
            <option value="anim_5">wobble-hor-bottom</option>
        </select>
        <br>
        
        
        <input type="file" id="fileElem" multiple accept="image/*" ">
        <a href="#" id="fileSelect">Valider</a>
        <div id="fileList">
            <p>Aucun fichier s??lectionn?? !</p>
        </div>
        <div id="preview">
       
        </div>
        
    </div>
    
    `;

    constructor() {
        super();
        // On cr??e le "shadow DOM"
        this.attachShadow({mode: "open"});

        // r??cup??rer les propri??t??s/attributs HTML
        this.couleur = this.getAttribute("couleur");
        if (!this.couleur) this.couleur = "black";

        console.log("couleur r??cup??r??e = " + this.couleur);

        this.text = this.getAttribute("text");
        this.animationClass = this.getAttribute("animation");
        this.controls = this.getAttribute("controls");
        //display none
        this.size = this.getAttribute("size");
    }

    connectedCallback() {
        // ici on instancie l'interface graphique etc.
        this.shadowRoot.innerHTML = `<style>${this.style}</style>`
            + this.html;

        this.logo = this.shadowRoot.querySelector("#logo");
        this.controlsButton = this.shadowRoot.querySelector("#controlsButton");
        if (this.controls == false) {
            this.controlsButton.style.display = none;
        }
        ;
        // affecter les valeurs des attributs ?? la cr??ation
        this.logo.style.color = this.couleur;
        this.logo.classList.add(this.animationClass);
        setTimeout(() => {
            this.logo.classList.remove(this.animationClass);
        }, 1000)
        this.declareEcouteurs();

        // On modifie les URLs relatifs
        this.fixRelativeURLs();

    }

    download() {
        this.dl = document.getElementById("logo");
        this.image = (document.querySelector("#logo")).then(canvas => {
            document.body.appendChild(canvas)
        }).toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
        this.dl.setAttribute("href", image)

    }

    fixRelativeURLs() {
        let images = this.shadowRoot.querySelectorAll('img');
        images.forEach((e) => {
            console.log("dans le foreach")
            let imagePath = e.getAttribute('src');
            e.src = getBaseURL() + '/' + imagePath;
        });
        this.logo.style.background = "url(" + getBaseURL() + "img/flammes.jpg)";
    }

    declareEcouteurs() {
        this.shadowRoot.querySelector("#selecteurCouleur")
            .addEventListener("input", (event) => {
                this.changeCouleur(event.target.value);
            });

        this.shadowRoot.querySelector("#selecteurTaille")
            .addEventListener("input", (event) => {
                this.changeSize(event.target.value);
            });

        this.shadowRoot.querySelector("#masquerControle")
            .addEventListener("click", (event) => {
                this.masquerControlle();
            });

        this.shadowRoot.querySelector("#dlButton")
            .addEventListener("click", (event) => {
                this.saveDiv("logo", "Mon logo");
            });

        this.shadowRoot.querySelector("#selecteurEpaisseur")
            .addEventListener("input", (event) => {
                this.changeEpaisseur(event.target.value);
            });

        this.shadowRoot.querySelector("#selecteurCouleurBordure")
            .addEventListener("input", (event) => {
                this.changerCouleurBordure(event.target.value);
            });

        this.shadowRoot.querySelector("#fileElem")
            .addEventListener("change", (event) => {
                this.handleFiles(event);
            });

        this.shadowRoot.querySelector("#fileSelect")
            .addEventListener("click", (event) => {
                this.updateBackground();
            });

        this.shadowRoot.querySelector("#selecteurPositionTexte")
            .addEventListener("input", (event) => {
                this.changerPosition(event.target.value);
            });

        this.shadowRoot.querySelector("#selecteurTailleLogo")
            .addEventListener("input", (event) => {
                this.changerTailleLogo(event.target.value);
            });

        this.shadowRoot.querySelector("#selecteurLargeurLogo")
            .addEventListener("input", (event) => {
                this.changerLargeurLogo(event.target.value);
            });

        this.shadowRoot.querySelector("#selecteurPolice")
            .addEventListener("change", (event) => {
                this.changerPolice(event.target.value);
            });
        this.shadowRoot.querySelector("#anim_choice")
            .addEventListener("change", (event) => {
                this.changerAnimation(event.target.value);
            });

        this.shadowRoot.querySelector("#bouttonGenerer")
            .addEventListener("click", (event) => {
                this.genererLogo();
            });

        this.shadowRoot.querySelector("#slogan")
            .addEventListener("input", (event) => {
                this.modifierSlogan(event.target.value);
            });
    }

    // -----------------Fonctions-----------

    //change couleur texte
    changeCouleur(val) {
        this.logo.style.color = val;
    }

    //change taille texte
    changeSize(val) {
        this.logo.style.fontSize = val + "px";
    }

    //cache ou affiche les parametrages
    masquerControlle() {
        if (this.controlsButton.style.display == "none") {
            this.controlsButton.style.display = "inline-block";
        } else {
            this.controlsButton.style.display = "none";
        }
    }

    //enregistre le logo
    saveDiv(divId, title) {
        /*var pdf = new jsPDF('p', 'pt', 'a4');
        pdf.canvas.height = 72 * 11;
        pdf.canvas.width = 72 * 8.5;
        console.log(this.logo)
        console.log(pdf.fromHTML(this.logo))
        //pdf.fromHTML(this.logo);
        pdf.addHTML(,function() {
            pdf.save('MonLogo.pdf');

        });*/
        var pdf = new jsPDF('p', 'pt', 'a4');
        window.html2canvas = html2canvas
        const doc = document.getElementsByTagName('my-logo')[0];

        if (doc) {
            console.log("div === ");
            console.log(doc);


            pdf.html(document.querySelector('#oui'), {
                callback: function (pdf) {
                    pdf.save('DOC.pdf');
                }
            })
        }
    }

    //change l'epaisseur de la bordure
    changeEpaisseur(val) {
        this.bord = this.logo.style.border.split("rgb");
        console.log(this.bord[1])
        if (this.bord[1] == undefined) {
            this.logo.style.border = val + "px solid rgb(0,0,0)";
        } else {
            this.logo.style.border = val + "px solid rgb" + this.bord[1];
        }

    }

    //Change la couleur de la bordure
    changerCouleurBordure(val) {
        this.bordure = this.logo.style.border.split(" ");
        if (this.bordure[0] == "") {
            this.logo.style.border = "5px solid " + val;
        } else {
            this.logo.style.border = this.bordure[0] + " solid " + val;
        }

    }

    //affiche l'image pr??selectionn??e
    handleFiles(evt) {
        this.files = evt.target.files;

        if (this.preview == undefined) {

        } else {
            this.preview.innerHTML = ""
        }
        for (var i = 0; i < this.files.length; i++) {
            this.file = this.files[i];
            this.imageType = /^image\//;

            if (!this.imageType.test(this.file.type)) {
                continue;
            }

            var img = document.createElement("img");
            img.id = "oui"
            img.classList.add("obj");
            img.file = this.file;
            img.width = "150"
            img.height = "100"
            this.preview = this.shadowRoot.querySelector("#preview")
            this.preview.appendChild(img);
            var reader = new FileReader();
            reader.onload = (function (aImg) {
                return function (e) {
                    aImg.src = e.target.result;
                };
            })(img);
            reader.onloadend = (function (aImg) {
                return function (e) {
                    ;
                };
            })(img);

            reader.readAsDataURL(this.file);
        }
    }

    //Ajoute une image de fond
    updateBackground() {
        this.logo.style.backgroundImage = "url(" + this.shadowRoot.querySelector("#oui").getAttribute("src") + ")";
        this.logo.style.backgroundSize = "contain";
        this.logo.style.backgroundRepeat = "no-repeat";

    }

    //Modifie la taille du logo
    changerTailleLogo(val) {
        this.logo.style.height = val
    }

    changerLargeurLogo(val) {
        this.logo.style.width = val + "%"
    }

    //Affiche le texte ?? droite, milieu ou gauche
    changerPosition(val) {
        if (val == 1) {
            this.logo.style.textAlign = "left";
        } else if (val == 2) {
            this.logo.style.textAlign = "center";
        } else {
            this.logo.style.textAlign = "right";
        }
    }

    //change la police du logo
    changerPolice(val) {
        console.log(val)
        this.logo.style.fontFamily = val;
        console.log(this.logo.style.fontFamily)
    }

    // Change l'animaton du logo
    changerAnimation(val) {
        console.log("oui")
        if (val == "anim_1") {
            console.log("anim_1");
            this.shadowRoot.querySelector("#logo").className = "";
            this.setAttribute("animation", "focus-in-expand")
            this.shadowRoot.querySelector("#logo").className = "focus-in-expand";

        }
        if (val == "anim_2") {
            console.log("anim_2");
            this.shadowRoot.querySelector("#logo").className = "";
            this.setAttribute("animation", "scale-up-center")
            this.shadowRoot.querySelector("#logo").className = "scale-up-center";
        }
        if (val == "anim_3") {
            console.log("anim_3");
            this.shadowRoot.querySelector("#logo").className = "";
            this.setAttribute("animation", "scale-down-center")
            this.shadowRoot.querySelector("#logo").className = "scale-down-center";
        }
        if (val == "anim_4") {
            console.log("anim_4");
            this.shadowRoot.querySelector("#logo").className = "";
            this.setAttribute("animation", "jello-vertical")
            this.shadowRoot.querySelector("#logo").className = "jello-vertical";
        }
        if (val == "anim_5") {
            console.log("anim_4");
            this.shadowRoot.querySelector("#logo").className = "";
            this.setAttribute("animation", "wobble-hor-bottom")
            this.shadowRoot.querySelector("#logo").className = "wobble-hor-bottom";
        }
    }

    //G??n??re un logo random
    genererLogo() {
        this.arrIm = ["img/flammes.jpg)", "img/eau.jpg)", "img/air.jpg)", "img/terre.jpg)"];
        this.arrFont = ["Arial", "Calibri", "Times New Roman", "Papyrus", "Courier", "Brush Script MT"];
        this.arrColor = ["red", "green", "blue", "magenta", "cyan", "orange", "yellow", "grey", "green"];
        this.rdmIm = Math.floor(Math.random() * this.arrIm.length);
        this.rdmFont = Math.floor(Math.random() * this.arrFont.length);
        this.rdmColor = Math.floor(Math.random() * this.arrColor.length);
        this.rdmBorder = Math.floor(Math.random() * this.arrColor.length);

        console.log(this.rdmBorder);
        console.log(this.rdmColor);
        console.log(this.rdmIm);
        this.logo.style.height = "70px"
        this.logo.style.background = "url(" + getBaseURL() + this.arrIm[this.rdmIm];
        this.logo.fontFamily = this.arrFont[this.rdmFont];

        if (this.getAttribute("animation") == "wobble-hor-bottom") {
            this.setAttribute("animation", "wobble-hor-top");
            this.shadowRoot.querySelector("#logo").className = "wobble-hor-top";
        } else {
            this.setAttribute("animation", "wobble-hor-bottom");
            this.shadowRoot.querySelector("#logo").className = "wobble-hor-bottom";
        }

        this.logo.style.bordercolor = "5px solid " + this.arrColor[this.rdmBorder];
        this.logo.style.color = this.arrColor[this.rdmColor];
        this.logo.innerHTML = "Mon slogan "
    }

    modifierSlogan(val) {
        this.logo.innerHTML = val;
    }

}

customElements.define("my-logo", MyLogo);
