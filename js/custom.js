function processCreation(inputlist) {
    var processes = [];
    for (index = 0; index < inputlist.length; ++index) {
        let p = new Process(index,"P"+index,inputlist[index][0],inputlist[index][1],inputlist[index][2]);
        processes.push(p);
    }

    return processes;
}

function scheduling(inputlist ,total_time = 0, time_quantum) {       
    var processes = processCreation(inputlist);
    var k = 0;
    if(total_time == 0) {
        $("#message").append("There is no Processes to Run");
    }
    while(total_time != 0 && k != 100) {
        for(var i = 0; i < inputlist.length;i++) {
            if(processes[i].burstTime >= time_quantum) {
                processes[i].burstTime -= time_quantum;
                total_time -= time_quantum;
                for (var j = 0; j < time_quantum ; j++) {
                    k++;
                    console.log("hi");
                    $("#display").append("<div class='card my-card' style='width: 4rem; background-color: "+processes[i].color+";'><div class='card-body'><p class='card-text'>"+processes[i].name+"</p></div></div>");
                }
            } else {
                total_time -= processes[i].burstTime;
                for(var j = 0; j < processes[i].burstTime ; j++) {
                    k++;
                    console.log("hi");
                    $("#display").append("<div class='card my-card' style='width: 4rem; background-color: "+processes[i].color+";'><div class='card-body'><p class='card-text'>"+processes[i].name+"</p></div></div>");                    
                }
                processes[i].burstTime = 0;
            }

        }
    }

    // for(var i = 0; i < 20; i++) {
    //     $("#display").append("<div class='card my-card' style='width: 4rem; background-color: #000;'><div class='card-body'><p class='card-text'>P1</p></div></div>");
    // }

}


$(document).ready(function(){

    const content =  document.querySelector(".content1"); 
    var num_of_processes;
    var time_quantum; 
    $("#form2").hide();
    $("#form3").hide();
    $("#submit").on('click', {},submit);
    
    function submit(){
        num_of_processes = document.getElementById("inputGroupSelect01").value;
        time_quantum = document.getElementById("inputGroupSelect02").value;
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
   var total_time = 0;
   $("#run").on("click", {}, run);
   
   function run() {
        num_of_processes = document.getElementById("inputGroupSelect01").value;
        
        var j = 1;
        for(j = 1; j < parseInt(num_of_processes)+1; j++) {
            var temp = [];
            document.getElementById("at-"+j).defaultValue = 0;
            document.getElementById("bt-"+j).defaultValue = 0;
            var temp_arrival_time = document.getElementById("at-"+j).value;
            var temp_burst_time = document.getElementById("bt-"+j).value;
            total_time += parseInt(temp_burst_time);
            var temp_color = document.getElementById("cl-"+j).value;
            temp.push(temp_arrival_time);
            temp.push(temp_burst_time);
            temp.push(temp_color);
            inputlist.push(temp);
        }
        $("#form2").hide();
        $("#form3").show();
 
        scheduling(inputlist, total_time, time_quantum);
   };
   

});



