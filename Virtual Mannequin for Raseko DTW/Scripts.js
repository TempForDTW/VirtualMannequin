
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var output2 = document.getElementById("demo2");
var output3 = document.getElementById("demo3");
var output4 = document.getElementById("demo4");
output.innerHTML = slider.value; 
// Display the default slider value
let headUnits = {
    Teen: slider.value/7,
    youngAdult: slider.value/7.5,
    Adult: slider.value/8,
    set update(value){
        this.Teen = value/7;
        this.youngAdult = value/7.5;
        this.Adult = value/8;
    }
}

const sizings = {  //All of these are approximation made using an online human anatomy guide and a calculator to double check
    teen:{
        Male:{
           ShoulderWidth: 1.26,
           TorsoHeight: 2.3, 
           ShoulderToElbow: 1.3,
           SoulderToWrist: 2.4, 
           LegLength: 3.5
        },
        Female:{
            ShoulderWidth: 1.3,
            TorsoHeight: 2.3, 
            ShoulderToElbow: 1.4,
            SoulderToWrist: 2.5, 
            LegLength: 3.4
        }
    },
    youngAdult:{
        Male:{
            ShoulderWidth: 1.75,
            TorsoHeight: 2.4, 
            ShoulderToElbow: 1.4,
            SoulderToWrist: 2.5, 
            LegLength: 3.8

        },
        Female:{
            ShoulderWidth: 1.5,
            TorsoHeight: 2.7, 
            ShoulderToElbow: 1.4,
            SoulderToWrist: 2.5, 
            LegLength: 3.6
        }
    },
    Adult:{
        Male:{
            ShoulderWidth: 2,
            TorsoHeight: 2.6, 
            ShoulderToElbow: 1.7,
            SoulderToWrist: 2.8, 
            LegLength: 4

        },
        Female:{
            ShoulderWidth: 2,
            TorsoHeight: 3, 
            ShoulderToElbow: 1.7,
            SoulderToWrist: 2.8, 
            LegLength: 3.7
        }
    },
};
function Testing(){
    console.log(sizings);
    output.innerHTML = slider.value;
    output2.innerHTML = (headUnits.youngAdult * sizings.youngAdult.Male.ShoulderWidth).toFixed(2);
    output3.innerHTML = (headUnits.youngAdult * sizings.youngAdult.Male.TorsoHeight).toFixed(2);
    output4.innerHTML = (headUnits.youngAdult * sizings.youngAdult.Male.LegLength).toFixed(2);
    headUnits.update = slider.value;

};
// Update the current slider value
slider.oninput = function() {
    Testing();
  }