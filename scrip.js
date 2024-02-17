

const base_api = "https://api.genderize.io";
const predict_text = document.getElementById("name");




function showResul(name, gender, probability){
    const persen_false = Math.round((1-probability) * 100);
    const persen_true = Math.round(probability*100);
    const img = document.querySelector(".icon-predict");

    let genderDcode;
    if (gender == "male"){
        genderDcode = "Man";
        img.src = "Images/img_man.png"
        
    }else if(gender == "female"){
        genderDcode = "Woman";
        img.src = "Images/img_woman.png";
        
    }

    const predictionElemnt = document.getElementById("prediction");
    const predict_true = document.getElementById("true");
    const predict_false = document.getElementById("false");

    const predict_text_final = `Hallo ${name} the prediction results show you`;
    const predictionFinal = genderDcode;


    const true_final = `${persen_true}%`;
    const false_final = `${persen_false}%`;

    predict_text.textContent = predict_text_final;
    predictionElemnt.textContent = predictionFinal;

    predict_true.textContent = true_final;
    predict_false.textContent = false_final;

}

function gagal(){
    const img = document.querySelector(".icon-predict");
    const predictionElemnt = document.getElementById("prediction");
    const predict_true = document.getElementById("true");
    const predict_false = document.getElementById("false");
    const predict_text_final = "Invalid yout name";
    const predictionFinal = "None" ;

    img.src = "Images/tanya.png"
    const true_final = "0%" ;
    const false_final =  "0%";

    predict_text.textContent = predict_text_final;
    predictionElemnt.textContent = predictionFinal;

    predict_true.textContent = true_final;
    predict_false.textContent = false_final;

}

function cekNamaDepan(nama){
    kalimat = nama.trim();
    var kataArray = kalimat.split(" ");

    if (kataArray.length == 1){
        return 1
    }else{
        return 2
    }

}

async function predict(){
 
    const firstName = document.getElementById("userInput").value;
const cek  = cekNamaDepan(firstName);
if (cek == 1){
    const queryUrl = `${base_api}?name=${firstName}&country_id=ID`;
const respone = await fetch(queryUrl);
const result = 

showResul(result.name, result.gender, result.probability);
    }else{
        gagal()
    }

  
}

















