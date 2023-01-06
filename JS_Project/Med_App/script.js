class MedEntry{

    constructor(MedName, MedCode, MedQty) {
        this.MedName = MedName;
        this.MedCode = MedCode;
        this.MedQty = MedQty;
    }
}

class MedList{

    //add med function

    addMed(entry) {
        
        const listData = document.querySelector(".med-list-data");

        const listContainer = document.createElement("ul");

        listContainer.setAttribute("id", "list");

        listContainer.innerHTML += `
        <li>${entry.MedName}</li>
        <li>${entry.MedCode}</li>
        <li>${entry.MedQty}</li>
        <i class="fas fa-trash"></i>
        `;

        listData.appendChild(listContainer);
    
    }


    clearMedInputs() {
        [
        document.querySelector('#name').value,
        document.querySelector('#code').value,
        document.querySelector('#qty').value, 
        ]=["","",""];
    }

    //Validation Error function

    validationError() {
        document.querySelector(".validate-error").classList.add("show-validation");
        setTimeout(() => {
            document.querySelector(".validate-error").classList.remove("show-validation");
        }, 3000);
    }

    //Validation Success function

    validationSuccess() {

        document.querySelector(".validate-success").classList.add("show-validation");
        setTimeout(() => {
             document.querySelector(".validate-success").classList.remove("show-validation");
        }, 3000);
    }
}


class StoreMed{

    //getMed 
    static getMed() {
        let Meds;
        if (localStorage.getItem("Meds") === null) {
            Meds = [];
        } else {
            Meds = JSON.parse(localStorage.getItem("Meds"));
        }
        return Meds;
    }

    //addMed in local storage

    static addMed(entry) {
        
        const MedsList = StoreMed.getMed();
        MedsList.push(entry);
        localStorage.setItem("Meds", JSON.stringify(MedsList));
    }

    static displayMed() {
        const MedsList = StoreMed.getMed();
        
        MedsList.forEach((Med) => {
            const list = new MedList();
            
            list.addMed(Med);
        })
    }

    static removeMed(clickedMed) {
        
        const MedsList = StoreMed.getMed();

        MedsList.forEach((Med, index) => {
            if (Med.MedName === clickedMed) {
                MedsList.splice(index, 1);
            }
        });

        localStorage.setItem("Meds",JSON.stringify(MedsList));
    }
}




//Display onload from localStorage
document.addEventListener("DOMContentLoaded", StoreMed.displayMed);

//Form submission Event listener

const form = document.querySelector(".med-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // console.log("Clicked...");

    // let MedName = document.querySelector('#name').value;

    // let MedCode = document.querySelector('#code').value;

    // let MedQty = document.querySelector('#qty').value;

    // console.log(MedName,MedCode,MedQty);

    let [MedName, MedCode, MedQty] = [
        document.querySelector('#name').value,
        document.querySelector('#code').value,
        document.querySelector('#qty').value
    ];

    // console.log(MedName,MedCode,MedQty);

    const list = new MedList();
    

    const entry = new MedEntry(MedName, MedCode, MedQty);

    if (MedName === "" || MedCode === "" || MedQty === "") {
        list.validationError();
    } else {
        list.addMed(entry);
        list.clearMedInputs();
        list.validationSuccess();

        //Add Med to localStorage 
        StoreMed.addMed(entry);
    }
    
   
});



//deleting med data

const listData = document.querySelector(".med-list-data");

listData.addEventListener("click", function (e) {
   
    if (e.target.className === "fas fa-trash") {
        const trash = e.target.parentNode;

        // console.log(e.target.previousElementSibling.previousElementSibling.previousElementSibling.textContent);
        const clickedItem = e.target.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
        //console.log(trash);
        StoreMed.removeMed(clickedItem);
        trash.remove();
    }

});










