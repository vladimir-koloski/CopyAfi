let searchApatments = document.getElementById("search-btn-cardss");
let cardsApartmentsDiv = document.getElementsByClassName("wrapper")[0];

let apartmentsList = [];


let ApartmentsDb = {
    getAll: function() {
        fetch(
                "https://raw.githubusercontent.com/sedc-codecademy/sp2020-cp09-afi/develop/Jsons/AparmentsOwners.json"
            )
            .then(res => res.json())
            .then(data => {     
              console.log(data);           
              apartments = data;
              let selectedLocation =document.getElementById("seconddropdown").options[selectLocation.selectedIndex].value;
              // let selectedLocation =document.getElementById("seconddropdown").value;
              // console.log(selectLocation, "selected location")
              let a = $("#seconddropdown option:selected").text();
              console.log(a, "selected option")
              
              let selectedRoomateOrAparment =document.getElementById("firstdropdown").options[selectRoomateOrApartment.selectedIndex].value;
              // console.log(selectedLocation);
              // console.log(selectedRoomateOrAparment);
              // console.log(apartments[0].apartment[0].region);
              apartmentsList = filterApartments(data, selectedLocation, selectedRoomateOrAparment);
              paginationInitUsers();         
              
              
            })
            .catch(error => console.log(error));
    },
};

function filterApartments(apartments, selectedLocation){
  return apartments.filter(a => {
    console.log(selectedLocation, a.apartment[0].region)
   selectedLocation === a.apartment[0].region;
  }  
    
  );  
}
ApartmentsDb.getAll();


function paginationInitUsers (){
  $('#list').pagination({
    dataSource: apartmentsList,
    pageSize: 8,
    callback: function(data, pagination) {                    
        console.log(data, "pagination");
        let wrapper = $('#list .wrapper').empty();
        $.each(data, function (i, apartment) {         
            const imageMale = "./SearchedCardsPage/images/tirkizna3.png";
            const imageFemale = "./SearchedCardsPage/images/magenta.png";
            const colorMale = "card card-color-2";
            const colorFemale = "card card-color-1";
             $('#list .wrapper').append(`<div class="card card-color-2">
             <div class="card-house-icon">
               <img src="./SearchedCardsPage/images/tirkizna3.png" alt="" class="card-house-image">
             </div>
             <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 203.89 171.94">
             <clipPath id="House"> 
               <style>.cls-1{fill:none;stroke:none;stroke-miterlimit:10;stroke-width:8px;}</style>
               <polygon class="cls-1"  points="9.66 96.25 35.27 96.25 35.27 167.94 167.13 167.94 167.13 96.25 194.01 96.25 100.41 5.61 9.66 96.25"/>
             </clipPath>
           <polygon class="cls-1" points="9.66 96.25 35.27 96.25 35.27 167.94 167.13 167.94 167.13 96.25 194.01 96.25 100.41 5.61 9.66 96.25"/>
           <image  class ="imageinhouse"width="200" height="200" xlink:href=${apartment.user.pictures[0]}" clip-path="url(#House)" />
           </svg>            
             <div class="card-body">
             <h4 class="card-title-2">${apartment.user.apartment.region}</h4>
             <span class="card-text-2">${apartment.user.apartment.price} ЕУР</span><br>
               <a href="#" class="btn btn-primary">Порака</a>
             </div>
           </div>`);         
        });
      }
     });
}


//setTimeout(function(){console.log(roomates)}, 10000);

console.log(apartmentsList);