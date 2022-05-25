const A = ["mor","nsiedad","marillo","mbiguo","nfibio"];
const B = ["ondadoso","astante","ienvenido","urla","uscando"];
const C = ["omer","alma","lase","olor","hica"];
const D = ["imension","iseño","ocumento","iario","emasiado"];
const E = ["nfermo","smeralda","stante","tretenido","stancia",];
const F = ["aro","osforo","ederacion","ulminar","lotando",];
const G = ["anador","enerar","emelo","anador","orra",];
const H = ["ermano","abito","onduras","ielo","elado"];
const I = ["nteligente","nformante","nteligencia","instalacion","nteresante",];
const J = ["ugador","erarquia","ornada","imena","urado",];
const K = ["ilo","iara","imono","ilogramo","iwi",];
const L = ["ampara","ocura","entejas","omo","ujuria",];
const M = ["ecanico","onumento","entira","arioneta","aniobra",];
const N = ["itrogeno","arcisista","omenclatura","icaragua","omada",];
const O = ["livar", "btener", "rilla", "mbligo", "ficina"];
const P = ["ollo", "ulpo", "an", "aella", "asta", "izza"];
const Q = ["uincena","uebrada","uitar","uímica","ueja"];
const R = ["aro","adar","ueda","rizos","apido"];
const S = ["ereno","encillo","oldadura","abueso","oleado"];
const T = ["tomate","amaño","ecnico","ecnologia","irante"];
const U = ["rano","sado","nificado","tilizar","unicornio"];
const V = ["erano","anidad","oltear","enado","elada"];
const W = ["alkman","eb","ifi","aterpolo","arner"];
const X = ["ilofono","imena","iaomi","enofobia","avier"];
const Y = ["acija","uso","oga","oidad","ogar"];
const Z = ["anahoria","afiro","amba","ancudo","apatero"];


function generar(){
    var palabra = document.getElementById('mnemonic').value;
    palabra = palabra.toUpperCase();
    var cadena = palabra.split(""); 
    let num = cadena.length; 

    for(var i = 0 ; i<num; i++){
        const para = document.createElement("p");
        para.innerText = cadena[i] + frases(cadena[i]); 
        document.getElementById("letras").appendChild(para);
    }
}

function frases(letra){
  
  var frase = '';

  if(letra =='A'){    
    var result = A.length;
    var numAleatorio=Math.round(Math.random()*(result-1));
    frase = A[numAleatorio];
  }
 
  if(letra =='B' ){    
    var result = B.length;
    var numAleatorio=Math.round(Math.random()*(result-1));
    frase = B[numAleatorio];
  }

  if(letra =='C' ){  
        var result = C.length;
        var numAleatorio=Math.round(Math.random()*(result-1));
        frase = C[numAleatorio];
    }

  if(letra =='D'){    
      var result = D.length;
      var numAleatorio=Math.round(Math.random()*(result-1));
      frase = D[numAleatorio];
    }

    if(letra =='E' ){  
      var result = E.length;
      var numAleatorio=Math.round(Math.random()*(result-1)); 
      frase = E[numAleatorio]; 
    }

    if(letra =='F' ){  
      var result = F.length;
      var numAleatorio=Math.round(Math.random()*(result-1)); 
      frase = F[numAleatorio]; 
    }

    if(letra =='G' ){  
      var result = G.length;
      var numAleatorio=Math.round(Math.random()*(result-1)); 
      frase = G[numAleatorio]; 
    }

    if(letra =='H' ){  
      var result = H.length;
      var numAleatorio=Math.round(Math.random()*(result-1)); 
      frase = H[numAleatorio]; 
    }

    if(letra =='I' ){  
      var result = I.length;
      var numAleatorio=Math.round(Math.random()*(result-1)); 
      frase = I[numAleatorio]; 
    }

    if(letra =='J' ){  
      var result = J.length;
      var numAleatorio=Math.round(Math.random()*(result-1)); 
      frase = J[numAleatorio]; 
    }

    if(letra =='K' ){  
      var result = K.length;
      var numAleatorio=Math.round(Math.random()*(result-1)); 
      frase = K[numAleatorio]; 
    }

    if(letra =='L' ){  
      var result = L.length;
      var numAleatorio=Math.round(Math.random()*(result-1)); 
      frase = L[numAleatorio]; 
    }

    if(letra =='M' ){  
      var result = M.length;
      var numAleatorio=Math.round(Math.random()*(result-1)); 
      frase = M[numAleatorio]; 
    }

    if(letra =='N' ){  
      var result = N.length;
      var numAleatorio=Math.round(Math.random()*(result-1)); 
      frase = N[numAleatorio]; 
    }
  
    if(letra =='O'){  
      var result = O.length;
      var numAleatorio=Math.round(Math.random()*(result-1)); 
      frase = O[numAleatorio]; 
    }
    if(letra =='P'){  
      var result = P.length;
      var numAleatorio=Math.round(Math.random()*(result-1)); 
      frase = P[numAleatorio]; 
    }

    if(letra =='Q'){  
      var result = Q.length;
      var numAleatorio=Math.round(Math.random()*(result-1)); 
      frase = Q[numAleatorio]; 
    }

    if(letra =='R' ){  
      var result = R.length;
      var numAleatorio=Math.round(Math.random()*(result-1)); 
      frase = R[numAleatorio]; 
    }

    if(letra =='S' ){  
      var result= S.length;
      var numAleatorio=Math.round(Math.random()*(result-1)); 
      frase = S[numAleatorio]; 
    }

    if(letra =='T' ){  
      var result = T.length;
      var numAleatorio=Math.round(Math.random()*(result-1)); 
      frase = T[numAleatorio]; 
    }

    if(letra =='U' ){  
      var result = U.length;
      var numAleatorio=Math.round(Math.random()*(result-1)); 
      frase = U[numAleatorio]; 
    }

    if(letra =='V' ){  
      var result = V.length;
      var numAleatorio=Math.round(Math.random()*(result-1)); 
      frase = V[numAleatorio]; 
    }

    if(letra =='W' ){  
      var result = W.length;
      var numAleatorio=Math.round(Math.random()*(result-1)); 
      frase = W[numAleatorio]; 
    }
  
    if(letra =='X'){    
      var result = X.length;
      var numAleatorio=Math.round(Math.random()*(result-1));
      frase = X[numAleatorio];
    }
    
    if(letra =='Y' ){    
      var result = Y.length;
      var numAleatorio=Math.round(Math.random()*(result-1)); 
      frase = Y[numAleatorio]; 
    } 

    if(letra =='Z' ){  
      var result = Z.length;
      var numAleatorio=Math.round(Math.random()*(result-1)); 
      frase = Z[numAleatorio]; 
    }

return frase; 
}