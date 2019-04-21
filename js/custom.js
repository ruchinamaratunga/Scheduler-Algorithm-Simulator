$(document).ready(function(){

    const content =  document.querySelector(".content1"); 
    var num_of_processes;
    var time_quantum = document.getElementById("inputGroupSelect02").value;
    $(".jumbotron").hide();
    $("#submit").on('click', {},submit);
    
    function submit(){
        num_of_processes = document.getElementById("inputGroupSelect01").value;
        var i;
        var process_code ="";
        for(i = 1;i < parseInt(num_of_processes)+1 ;i++) {
            process_code += "<div class = 'container-fluid inputs rounded'><table class='table table-bordered table-condensed'><tbody><tr><td><label for='form-control'>Process" + i + "</label></td><td><input type='text' class='form-control' id='at-"+ i +"' placeholder='Arrival Time'/></td><td><input type='text' class='form-control' id='bt-"+ i +"' placeholder='Burst Time'/></td><td><select class='custom-select' name='color' id='cl-"+ i +"'><option value='red'>Red</option><option value='blue'>Blue</option><option value='yellow'>Yellow</option><option value='green'>Green</option><option value='blueviolet'>Blueviolet</option><option value='orange'>orange</option><option value='cyan'>Cyan</option></select></td></tr></tbody></table></div>";
            
        }
        $(".container-fluid.card").hide();
        $("#process").append(process_code);
        $(".jumbotron").show();
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

        console.log(inputlist);
   };
   
   
   



});