// take input for numbers of each workout type for the week

document.getElementById("Schedule").addEventListener('click', function get_inputs() {
    let num_run = document.getElementById("Run").value;
    let num_swim = document.getElementById("Swim").value;
    let num_lifts = document.getElementById("Strength").value;

    const data = [num_run, num_swim, num_lifts];
    const schedule_link = document.getElementById("Schedule");
    schedule_link.href += ("?data=" + encodeURI(JSON.stringify(data)))
});
