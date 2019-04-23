class Process {
    constructor(pid,name,arrivalTime,burstTime,color) {
        this.pid= pid;
        this.name = name;
        this.arrivalTime = arrivalTime;
        this.burstTime = burstTime;
        this.color = color;
        this.waitingTime;
        this.process = "<div class='card' style='width: 4rem;'><div class='card-body'><p class='card-text'>P1</p></div></div>"
    }

    createProcess() {
        return this.process;
    }

    
}