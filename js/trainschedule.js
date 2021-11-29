const swims = 
[
{ 
    name: 'Triathlon\nTechnique\nWorkout',
    type: 'swim',
    focus: 'technique',
    workout: 'Warm Up\n300yd choice\n\nMain Set\n(2 rounds) 8x50 as 25yd drill, 25yd swim, followed by 100yd easy\n(2 rounds) 150yd as 50yd swim, 50yd drill, 50yd swim\n(2 rounds) 100yd as 25 yd drill, 75yd swim\n\nCool Down\n100yd choice\n\n',
    distance_duration: '1900 yards' },
{
    name: 'Triathlon\nStamina\nWorkout',
    type: 'swim',
    focus: 'aerobic',
    workout: 'Warm Up\n300yd mixed stroke (free, breast, css)\n\nMain Set\n100yd w/ 10s rest\n150yd w/ 15s rest\n200yd w/ 10s rest\n150yd w/ 15s rest\n100yd w/ 10s rest\n100yd super slow recovery w/ 60s rest\nrepeat for one more round\n\nCool Down\n100yd choice\n\n',
    distance_duration: '2000 yards' },
{
    name: 'Triathlon\nSpeed\nWorkout',
    type: 'swim',
    focus: 'speed',
    workout: 'Warm Up\n200yd easy\n4x50yd increasing speed w/ 20s rest\n100yd easy\n\nMain Set\n(2 rounds) 8x50yd as 25yd fast and 25yd easy w/ 20s rest, followed by 100yd easy\n4x100yd increasing speed per 25yd w/ 30s rest\n100yd easy\n\nCool Down\n200yd easy\n\n',
    distance_duration: '2200 yards' },
{
    name: '5x Ups', 
    type: 'swim',
    focus: 'aerobic', 
    workout: 'Warm Up\n300yd choice\n\nMain Set\n100yd, 5 push ups\n100yd, 10 push ups\n100yd, 15 push ups\n100yd, 20 push ups\n100yd, 15 push ups\n100yd, 10 push ups\n100yd, 5 push ups\n\nCool Down\n100yd choice\n',
    distance_duration: '1100 yards' },
{
    name: 'Master Swim',
    type: 'swim',
    focus: 'variable',
    workout: 'variable',
    distance_duration: 'variable'}
];

const runs = 
[
{
    name: 'Time Tree', 
    type: 'run',
    focus: 'pace',
    workout: 'Warm Up\nDynamic Stretching\n5 min jog\n\nMain Set\n1 min fast run\n1 min jog\n2 min fast run\n2 min jog\n3 min fast run\n3 min jog\n3 min fast run\n2 min jog\n2 min fast run\n1 min jog\n1 min fast run\nCool Down\n5 min jog\n',
    distance_duration: '1900 yards' },
{
    name: 'Hards and Easys',
    type: 'run',
    focus: 'sprinting',
    workout: 'Warm Up\nDynamic Stretching\n\nMain Set\n100yd w/ 10s rest\n150yd w/ 15s rest\n200yd w/ 10s rest\n150yd w/ 15s rest\n100yd w/ 10s rest\n100yd super slow recovery w/ 60s rest\nrepeat for one more round\n\nCool Down\n100yd choice\n',
    distance_duration: '2000 yards' },
{
    name: 'Sprints and Planks',
    type: 'run',
    focus: 'sprinting',
    workout: 'Warm Up\nDynamic Stretching\n4x50yd increasing speed w/ 20s rest\n100yd easy\n\nMain Set\n(2 rounds) 8x50yd as 25yd fast and 25yd easy w/ 20s rest, followed by 100yd easy\n4x100yd increasing speed per 25yd w/ 30s rest\n100yd easy\n\nCool Down\n200yd easy\n',
    distance_duration: '2200 yards' },
{ 
    name: 'Distance Run',
    type: 'run',
    focus: 'distance', 
    workout: 'Warm Up\nDynamic Stretching\n\nMain Set\n100yd, 5 push ups\n100yd, 10 push ups\n100yd, 15 push ups\n100yd, 20 push ups\n100yd, 15 push ups\n100yd, 10 push ups\n100yd, 5 push ups\n\nCool Down\n100yd choice\n',
    distance_duration: '1100 yards' }
];

const strength_sessions = 
[
{ 
    name: 'Functional\nPush\nSession',
    type: 'strength',
    focus: ['push'],
    workout: 'Warm Up\n300yd choice\n\nMain Set\n(2 rounds) 8x50 as 25yd drill, 25yd swim, followed by 100yd easy\n(2 rounds) 150yd as 50yd swim, 50yd drill, 50yd swim\n(2 rounds) 100yd as 25 yd drill, 75yd swim\n\nCool Down\n100yd choice\n',
    distance_duration: '1900 yards' },
{
    name: 'Functional\nPull\nSession',
    type: 'strength',
    focus: ['aerobic'],
    workout: 'Warm Up\n300yd mixed stroke (free, breast, css)\n\nMain Set\n100yd w/ 10s rest\n150yd w/ 15s rest\n200yd w/ 10s rest\n150yd w/ 15s rest\n100yd w/ 10s rest\n100yd super slow recovery w/ 60s rest\nrepeat for one more round\n\nCool Down\n100yd choice\n',
    distance_duration: '2000 yards' },
{
    name: 'Functional\nLeg\nSession',
    type: 'strength',
    focus: ['speed'],
    workout: 'Warm Up\n200yd easy\n4x50yd increasing speed w/ 20s rest\n100yd easy\n\nMain Set\n(2 rounds) 8x50yd as 25yd fast and 25yd easy w/ 20s rest, followed by 100yd easy\n4x100yd increasing speed per 25yd w/ 30s rest\n100yd easy\n\nCool Down\n200yd easy\n',
    distance_duration: '2200 yards' },
{ 
    name: 'Full\nBody\nPower\nSession',
    type: 'strength',
    focus: ['aerobic'], 
    workout: 'Warm Up\n300yd choice\n\nMain Set\n100yd, 5 push ups\n100yd, 10 push ups\n100yd, 15 push ups\n100yd, 20 push ups\n100yd, 15 push ups\n100yd, 10 push ups\n100yd, 5 push ups\n\nCool Down\n100yd choice\n',
    distance_duration: '1100 yards' }
];

const stretches =
[
{ 
    name: 'Flexibility & Mobility\nRoutine',
    type: 'stretch',
    workout: 'Warm Up\n300yd choice\n\nMain Set\n(2 rounds) 8x50 as 25yd drill, 25yd swim, followed by 100yd easy\n(2 rounds) 150yd as 50yd swim, 50yd drill, 50yd swim\n(2 rounds) 100yd as 25 yd drill, 75yd swim\n\nCool Down\n100yd choice\n',
    distance_duration: '1900 yards' }
];

const miscellaneous =
[
{ 
    name: 'Grass and Gorillas',
    type: 'strength',
    focus: ['shoulders', 'core', 'triceps', 'legs'],
    workout: 'Warm Up\nDynamic Stretching\n\nMain Set\n(2 rounds) 8x50 as 25yd drill, 25yd swim, followed by 100yd easy\n(2 rounds) 150yd as 50yd swim, 50yd drill, 50yd swim\n(2 rounds) 100yd as 25 yd drill, 75yd swim\n\nCool Down\n100yd choice',
    distance_duration: '1900 yards' },
{
    name: 'Murph',
    type: 'strength',
    focus: ['biceps', 'chest', 'triceps'],
    workout: 'Warm Up\nDynamic Stretching\n\nMain Set\n100yd w/ 10s rest\n150yd w/ 15s rest\n200yd w/ 10s rest\n150yd w/ 15s rest\n100yd w/ 10s rest\n100yd super slow recovery w/ 60s rest\nrepeat for one more round\n\nCool Down\n100yd choice\n',
    distance_duration: '2000 yards' },
{
    name: 'Water Con',
    type: 'swim',
    focus: 'technique',
    workout: 'Warm Up\n200yd breast\n4x50yd increasing speed w/ 20s rest\n100yd easy\n\nMain Set\n(2 rounds) 8x50yd as 25yd fast and 25yd easy w/ 20s rest, followed by 100yd easy\n4x100yd increasing speed per 25yd w/ 30s rest\n100yd easy\n\nCool Down\n200yd easy\n',
    distance_duration: '2200 yards' },
{ 
    name: 'Ruck',
    type: 'strength',
    focus: ['core', 'legs'], 
    workout: 'Warm Up\n300yd choice\n\nMain Set\n100yd, 5 push ups\n100yd, 10 push ups\n100yd, 15 push ups\n100yd, 20 push ups\n100yd, 15 push ups\n100yd, 10 push ups\n100yd, 5 push ups\n\nCool Down\n100yd choice\n',
    distance_duration: '1100 yards' }
];
// picking workout, check for type match same day (delete if picked), then picking random day to do workout

function black_saturday () {
    // Determine if week includes extended training day
    random_bit = Math.round(Math.random() - 0.1); // 60% chance for no ETD
    if (random_bit == 0) {return false;}
    else {return true;}
}

/*
May be useless with new design

function random_bit() {let bit = Math.round(Math.random()); return bit; }
*/

function random_index (max)
{
    // Generate random index of given object array
    let random_int = Math.floor(Math.random() * max);
    return random_int;
}


function get_workout (workout_objects, workout_schedule, off_day)
{
    // Pick random workout to attempt to add to schedule
    let index = random_index((workout_objects.length - 1));
    let placed = false;
    while (placed === false)
    {
        let day = random_index(7);
        if (day === off_day)
        {
            // Leave athletic regen day clear
            continue;
        }
        let unique_type = workout_type_conflict(workout_objects[index], workout_schedule[day]);
        if (unique_type === true)
        {
            workout_schedule[day].workout.push(workout_objects[index]);
            remove_workout(workout_objects[index], workout_objects);
            placed = true;
        }
        else {continue;}
    }
}


function add_no_check (workout_objects, workout_schedule, day)
{
    // Pick random regen routine after all other training has been scheduled
    let index = random_index((workout_objects.length - 1));
    workout_schedule[day].workout.push(workout_objects[index]);
    remove_workout(workout_objects[index], workout_objects);
}
/*

function get_swim(swims)
{
    // Pick random strength training workout to attempt to add to schedule
}


function get_lift(strength_sessions)
{
    // Pick random strength training workout to attempt to add to schedule
}
*/
/*
function get_day()
{
    // Generate random day to place workout after check has passed
    let random_day = Math.floor(Math.random() * 6);
    return random_day;
}
*/
function workout_type_conflict (proposed_workout, day_itenerary)
{
    // Ensure that workout type does not match type of other workouts scheduled on given day
    for (let item = 0; item < day_itenerary.workout.length; item++)
    {
        if (proposed_workout.type == day_itenerary.workout[item].type) {return false;}
    }
    return true;
}


function remove_workout (proposed_workout, workout_list)
{
    for (let workout = 0; workout < workout_list.length; workout++)
    {
        if (JSON.stringify(proposed_workout) === JSON.stringify(workout_list[workout]))
        {
            workout_list.splice(workout,1);
        }
    }
}


function fill_schedule(num_run,num_swim,num_lifts,workout_schedule, extended_training_day, runs, swims, strength_sessions, stretches, miscellaneous, off_day)
{
    // This function takes all primitives and objects from main to construct and return schedule
    while (num_run)
    {
        get_workout(runs, workout_schedule, off_day);
        num_run--;
    }
    while (num_swim)
    {
        get_workout(swims, workout_schedule, off_day);
        num_swim--;
    }
    while (num_lifts)
    {
        get_workout(strength_sessions, workout_schedule, off_day);
        num_lifts--;
    }

    // Add stretching session
    add_no_check(stretches, workout_schedule, off_day);

    // Add extra miscellaneous session to Saturday if ETD is true
    if (extended_training_day) {add_no_check(miscellaneous, workout_schedule, 5);}

    return workout_schedule;
}


function print_schedule (workout_schedule)
{
    // use jQuery to print table
    // for each day of the week, create table, create <tr>, create <th> and set to day, create <td> for each workout

    // Each day is a <th> each workout is <td>...only 2 <tr>
    //let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let selector = ".flexbox-container";
    let HTML_tags = "<table><thead><tr></tr></thead><tbody></tbody></table>";
    create_table(selector, HTML_tags);
    for (let day = 0; day < 7; day++)
    {
        append_day(day);
        // Embed table
        (() => {let selector = $("tbody:first"); HTML_tags = "<td><table><thead><tr></tr></thead><tbody></tbody></table></td>";
            create_table(selector, HTML_tags);})();
        let num_workouts_for_day = workout_schedule[day].workout.length;
        selector = "tbody:first";
        append_workouts(workout_schedule, day, num_workouts_for_day, selector);
        //let num_workouts_for_day = workout_schedule[day].workout.length;
        //for (let workout = 0; workout < num_workouts_for_day; workout++)
        //{
        //    append_day(workout, week[day], workout_schedule);
        //}
    }
}


function append_day (day_index)
{
    let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let selector = $('thead > tr').first(); // select all <tr> that are a direct child of a <thead>
    let day = week[day_index];
    $(selector).append("<th>" + day + "</th>");
    /*
    let workout_name = workout_schedule[0].workout[entry].name;
    $(selector).append("<th id='" + entry + "' ><td>" + workout_name + "</td></tr>");

    identifier = "#" + entry;
    let workout_plan = workout_schedule[0].workout[entry].workout;
    workout_plan.replace('\n', '<br>');
    console.log(workout_plan);
    $(identifier).append("<td>" + workout_plan + "</td>"); */
    //let selector = 'thead > tr';
    // let selector = $(":contains('day')")
}


function append_workouts (workout_schedule, day, num_workouts, selector)
{
    selector = $(selector + ':' +nth-child(day));
    for (let workout = 0; workout < num_workouts; workout++)
    {
        
    }
    
    
}


function create_table (selector, HTML_tags)
{
    //let HTML_tags = "<table><thead><tr></tr></thead><tbody></tbody></table>";
    let newTable = $(HTML_tags);
    $(selector).append(newTable);
}


function embed_table ()
{
    let selector = $("tbody:first");
    create_table(selector, "<td><table><thead><tr></tr></thead><tbody></tbody></table></td>");
}


(function main(runs, swims, strength_sessions, stretches, miscellaneous)
{
    // Immedietaly Invoked Function Expression (IIFE)
    // retrieve desired number of training sessions from previous page using URL
    const link = window.location.href;
    const split = link.split("?")[1].split("=")[1];
    const decode = decodeURI(split);
    const data = JSON.parse(decode);

    let num_run = data[0];
    let num_swim = data[1];
    let num_lifts = data[2];

    let extended_training_day = black_saturday();

    let off_day = 4; // Friday is athletic regen day

    // Create workout schedule to be filled with semi-random workouts
    let workout_schedule = [{workout: []}, {workout: []},{workout: []},{workout: []},{workout: []},{workout: []},{workout: []}];

    workout_schedule = fill_schedule(num_run,num_swim,num_lifts,workout_schedule, extended_training_day, runs, swims, strength_sessions, stretches, miscellaneous, off_day);

    console.log(workout_schedule);
    print_schedule(workout_schedule);

})(runs, swims, strength_sessions, stretches, miscellaneous);