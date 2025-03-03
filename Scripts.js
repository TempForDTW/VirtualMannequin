
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var output2 = document.getElementById("demo2");
var output3 = document.getElementById("demo3");
var output4 = document.getElementById("demo4");
var output5 = document.getElementById("demo5");
var button1 = document.getElementById("T");
var button2 = document.getElementById("YA");
var button3 = document.getElementById("A");
var Age = "youngAdult"
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
    Teen:{
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
    output2.innerHTML = (headUnits[Age] * sizings[Age].Male.ShoulderWidth).toFixed(2);
    output3.innerHTML = (headUnits[Age] * sizings[Age].Male.TorsoHeight).toFixed(2);
    output4.innerHTML = (headUnits[Age] * sizings[Age].Male.LegLength).toFixed(2);
    headUnits.update = slider.value;

};
// Update the current slider value
slider.oninput = function() {
    Testing();
  }
button1.oninput = function() {
    Age = "Teen";
    output5.innerHTML = Age;
}
button2.oninput = function() {
    Age = "youngAdult";
    output5.innerHTML = Age;
}
button3.oninput = function() {
    Age = "Adult";
    output5.innerHTML = Age;
}

<script>
    // This is just a prototype script to demonstrate the barcode scanning functionality
    document.addEventListener('DOMContentLoaded', function() {
      const barcodeInput = document.getElementById('barcode-input');
      const scanNotification = document.getElementById('scan-notification');
      
      // Always focus the hidden barcode input
      setInterval(function() {
        barcodeInput.focus();
      }, 100);
      
      // Listen for barcode scanner input (which acts as keyboard input)
      barcodeInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
          const barcode = barcodeInput.value;
          if (barcode) {
            // Flash notification
            scanNotification.textContent = 'Item successfully scanned: ' + barcode;
            scanNotification.classList.add('show');
            setTimeout(function() {
              scanNotification.classList.remove('show');
            }, 3000);
            
            // Clear input field for next scan
            barcodeInput.value = '';
            
            // In a real implementation, this would query the database and update the UI
            console.log('Barcode scanned:', barcode);
          }
        }
      });
      
      // Manual barcode entry option
      document.getElementById('manual-barcode').addEventListener('click', function() {
        const barcode = prompt('Enter item barcode:');
        if (barcode) {
          barcodeInput.value = barcode;
          const event = new KeyboardEvent('keypress', {
            key: 'Enter'
          });
          barcodeInput.dispatchEvent(event);
        }
      });
    });
  
