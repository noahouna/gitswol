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
    workout: 'Warm Up\nDynamic Stretching\n1/2 mi jog\n\nMain Set\n\n400m sprint\n400m jog\nrepeat for desired #miles\n\nCool Down\n1/2 mi jog\nStatic Stretching\n',
    distance_duration: '2000 yards' },
{
    name: 'Sprints and Planks',
    type: 'run',
    focus: 'sprinting',
    workout: 'Warm Up\nDynamic Stretching\n1/2 mi jog\n\nMain Set\n1 length sprint\n1 min plank\nrepeat for desired #rounds\n\nCool Down\n800m jog\n',
    distance_duration: '2200 yards' },
{ 
    name: 'Distance Run',
    type: 'run',
    focus: 'distance', 
    workout: 'Warm Up\nDynamic Stretching\n\nMain Set\n3+ mile run\n(Try to only breathe through nose\n\nCool Down\nStatic Stretch\n',
    distance_duration: '1100 yards' }
];

const strength_sessions = 
[
{ 
    name: 'Functional\nPush\nSession',
    type: 'strength',
    focus: ['push'],
    workout: 'Warm Up\nStatic Stretch\n\nMain Set\nMilitary Press 2x10\n(RPE: 9 -Stop just before technical failure)\nDumbbell Press 2x10\n(RPE: 9 - Switch immediately to push ups and perform to failure (mechanical dropset))\nRing dips 2 x Technical Failure (Optionally add weight but remove weight and continue once you reach TF. Technical failure is the point at which your form is compromised.)\nPush Up Sequence: 5 x Push Ups > 2 x Clapping Push Ups > 2 x One Hand > 2 x Other Hand > Kick Through > Other Side > Repeat Until Failure - Whole Sequence x 2 - switch these up over time\nOffset Med Ball Push Ups to Burpee to Slam (Alternating sides) - 2x1 Minute\nPush Ups (Complete 200 keepinng rest time to an absolute minimum)\nHeavy bag HIIT (Tabata - 20 sec on, 10 sec off, 8 rounds)\n2 min hand-eye coordination\nBattle ropes (3 x 1 min with 30 sec rest)\nBand/Cable Press/Punch Out 2 x 10\n',
    distance_duration: '1900 yards' },
{
    name: 'Functional\nPull\nSession',
    type: 'strength',
    focus: ['aerobic'],
    workout: 'Warm Up\nStatic Stretch\n\nMain Set\nMuscle Ups 2 x Technical failure (follow immediately with chin ups to failure)\nBent rows 2 x 10 (RPE: 8)\nDumbbell rows 2 x 10 (RPE: 8)\nRope climbs 2 x Technical Failure\nGamma cast / Kettlebell halos x 50 (RPE: 9)\nAtlas swings x 50 (RPE: 9)\nPull ups (Complete 50 keeping rest time to an absolute minimum. Hand-eye drills during rest time. Optionally add weight.)\nBodyweight row 2 x Failure (This should be high reps - 20-50)\nBand/Cable Row 2 x 20\nBulgarian Bag Freestyle 2 x 1 min (Should include swing, halos, snatch RPE: 8)\n2 min hand-eye coordination\n10 min row\n',
    distance_duration: '2000 yards' },
{
    name: 'Functional\nLeg\nSession',
    type: 'strength',
    focus: ['speed'],
    workout: 'Warm Up\nStatic Stretch\n\nMain Set\nPistol Squats 2 x Technical Failure on each side\n2 x Weighted squat jumps (RPE: 8 - make sure you are absorbing impact, no valgus knees, add weight slowly)\nRucking/Loaded Carry (1 mi, choose a weight for RPE: 9 - almost the most you can do)\nHill Sprints/High Knees (Tabata)\nAgility ladder (no rest before this one)\nKettlebell side squat\n100 Squats (min time, min rest)\n100 Hindu Squats (min time, min rest - aim for 1 set)\nOverhead Weighted Lunge Walks 2 x 1 min (RPE: 8 Do not continue if you lose form, switch to no weight for safety)\nSequence: Sandbag Clean > Squat > Overhead Press > Lunge Either Side - Repeat sequence to technical failure\n1 min keepy ups\nAb roll outs 3 x Technical Failure\nMed Ball Leg Raises 3 x Ab Roll Outs (Followed immediately by leg raises without med balls)\n3 x V-Ups\n',
    distance_duration: '2200 yards' },
{ 
    name: 'Full\nBody\nPower\nSession',
    type: 'strength',
    focus: ['aerobic'], 
    workout: 'Warm Up\nStatic Stretch\n\nMain Set\nDeadlift 3 x 80%1RM (80% of one rep maximum performed explosively)\nBench Press 3 x 4 80%1RM\nSquat 3 x 4 80%1RM\n',
    distance_duration: '1100 yards' }
];

const stretches =
[
{ 
    name: 'Flexibility & Mobility\nRoutine',
    type: 'stretch',
    workout: '<a id="upperbodyvid" href="https://youtu.be/pLnI4b3QSgM">Upper Body Stretching Routine</a><br><a id="lowerbodyvid" href="https://youtu.be/nsAmvXgz-Os">Lower Body Stretching Routine</a>\n',
    distance_duration: '1900 yards' }
];

const miscellaneous =
[
{ 
    name: 'Grass and Gorillas',
    type: 'strength',
    focus: ['shoulders', 'core', 'triceps', 'legs'],
    workout: 'Warm Up\nDynamic Stretching\n\nMain Set\n(All exercises done for 1 length)\nBear Crawl\nSpiderman Low Crawl\nBurpees Forward\nForward Roll\nFrog Jump w/ hands\nCrab Walk\nDuck Walk\nLow Crawl\nHigh Crawl\nLateral Scissor Hops\n2 x Farmers Carry\n',
    distance_duration: '1900 yards' },
{
    name: 'Murph',
    type: 'strength',
    focus: ['biceps', 'chest', 'triceps'],
    workout: 'Warm Up\nDynamic Stretching\n\nMain Set\n1 mi run\n100 pull ups\n200 push ups\n300 air squats\n(can break up in any way/order, can wear a weight vest)\n1 mi run\n',
    distance_duration: '2000 yards' },
{
    name: 'Water Con',
    type: 'swim',
    focus: 'technique',
    workout: 'Warm Up\n200yd breast\n5x25yd underwater on 2 min\n3 min snorkel breathing (no passing)\n2 min snorkel breathing (w/ passing)\n20 min tread\n',
    distance_duration: '2200 yards' },
{ 
    name: 'Ruck',
    type: 'strength',
    focus: ['core', 'legs'], 
    workout: 'Warm Up\nDynamic Stretching\n\n',
    distance_duration: '1100 yards' }
];


function black_saturday () {
    // Determine if week includes extended training day
    random_bit = Math.round(Math.random() - 0.1); // 60% chance for no ETD
    if (random_bit == 0) {return false;}
    else {return true;}
}


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
    
    let selector = ".flexbox-container";
    let HTML_tags = "<table><thead><tr></tr></thead><tbody></tbody></table>";
    create_table(selector, HTML_tags);
    for (let day = 0; day < 7; day++)
    {
        append_day(day);
        // Embed table
        (() => {let selector = $("tbody:first"); let HTML_tags = "<td><table><thead><tr></tr></thead><tbody id='" +  day + "'></tbody></table></td>";
            create_table(selector, HTML_tags);})();
        let num_workouts_for_day = workout_schedule[day].workout.length;
        let day_schedule = workout_schedule[day].workout;

        //selector = "#" + day;
        append_workouts(day_schedule, day, num_workouts_for_day);
    }
}


function append_day (day_index)
{
    let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let selector = $('thead > tr').first(); // select all <tr> that are a direct child of a <thead>
    let day = week[day_index];
    $(selector).append("<th>" + day + "</th>");
}


function append_workouts (day_schedule, day, num_workouts)
{
    // select the nth child of the 1st tbody
    let selector = "#" + day;
    //selector = $(selector);
    for (let schedule_item = 0; schedule_item < num_workouts; schedule_item++)
    {
        let workout_name = day_schedule[schedule_item].name;
        let workout_descr = day_schedule[schedule_item].workout;
        if (day_schedule[schedule_item].type === 'stretch') {$(selector).append("<tr><td>" + workout_name + "</td> " + "<td>" + workout_descr + "</td></tr>");}
        else {$(selector).append("<tr><td>" + workout_name + "</td> " + "<td>" + workout_descr + "</td></tr>");}
    }  
}


function create_table (selector, HTML_tags)
{
    let newTable = $(HTML_tags);
    $(selector).append(newTable);
}


(function main(runs, swims, strength_sessions, stretches, miscellaneous)
{
    // Immedietaly Invoked Function Expression (IIFE)
    // retrieve desired number of training sessions from previous page using URL
    const link = window.location.href;
    const split = link.split("?")[1].split("=")[1];
    const decode = decodeURI(split);
    const data = JSON.parse(decode);

    let num_run = parseInt(data[0], 10);
    let num_swim = parseInt(data[1], 10);
    let num_lifts = parseInt(data[2], 10);
    console.log(typeof num_run);

    let extended_training_day = black_saturday();

    let off_day = 4; // Friday is athletic regen day

    // Create workout schedule to be filled with semi-random workouts
    let workout_schedule = [{workout: []}, {workout: []},{workout: []},{workout: []},{workout: []},{workout: []},{workout: []}];

    workout_schedule = fill_schedule(num_run,num_swim,num_lifts,workout_schedule, extended_training_day, runs, swims, strength_sessions, stretches, miscellaneous, off_day);

    console.log(workout_schedule);
    print_schedule(workout_schedule);

})(runs, swims, strength_sessions, stretches, miscellaneous);