$(document).ready(function(){

    const content =  document.querySelector(".content1"); 
    var num_of_processes;
    var time_quantum = document.getElementById("inputGroupSelect02").value;
    $("#form2").hide();
    $("#form3").show();
    $("#submit").on('click', {},submit);
    
    function submit(){
        num_of_processes = document.getElementById("inputGroupSelect01").value;
        var i;
        var process_code ="";
        for(i = 1;i < parseInt(num_of_processes)+1 ;i++) {
            process_code += "<div class = 'container-fluid' id='inputform'><table class='table table-bordered table-condensed'><tbody><tr><td><label for='form-control'>Process" + i + "</label></td><td><input type='text' class='form-control' id='at-"+ i +"' placeholder='Arrival Time'/></td><td><input type='text' class='form-control' id='bt-"+ i +"' placeholder='Burst Time'/></td><td><select class='custom-select' name='color' id='cl-"+ i +"'><option value='red'>Red</option><option value='blue'>Blue</option><option value='yellow'>Yellow</option><option value='green'>Green</option><option value='blueviolet'>Blueviolet</option><option value='orange'>orange</option><option value='cyan'>Cyan</option></select></td></tr></tbody></table></div>";
            
        }
        $("#form1").hide();
        $("#process").append(process_code);
        $("#form2").show();
   }; 
   var inputlist = [];
   $("#run").on("click", {}, run);
   
   function run() {
        num_of_processes = document.getElementById("inputGroupSelect01").value;
        
        var j = 1;
        for(j = 1; j < parseInt(num_of_processes)+1; j++) {
            var temp = [];
            var temp_arrival_time = document.getElementById("at-"+j).value ;
            var temp_burst_time = document.getElementById("bt-"+j).value;
            var temp_color = document.getElementById("cl-"+j).value;
            temp.push(temp_arrival_time);
            temp.push(temp_burst_time);
            temp.push(temp_color);
            inputlist.push(temp);
        }
        $("#form2").hide();
        $("#form3").show();
        console.log(inputlist);
        var processlist = processCreation(inputlist);
        console.log(processlist);
   };
   
    function processCreation(inputilst) {
        var processes = [];
        for (index = 0; index < inputlist.length; ++index) {
            let p = new Process(index,"P"+index,inputlist[index][0],inputilst[index][1],inputilst[index][2]);
            processes.append(p);
        }

        return processes;
    }

   function scheduling(inputlist) {
        
        
        
   }

});



