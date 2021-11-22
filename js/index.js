// take input for numbers of each workout type for the week

let num_run;
let num_swim;
let num_lifts;

document.getElementById("Schedule").addEventListener('click', function get_inputs() {
    num_run = document.getElementById("Run").value;
    num_swim = document.getElementById("Swim").value;
    num_lifts = document.getElementById("Strength").value;
    export {num_run, num_swim, num_lifts};
});
