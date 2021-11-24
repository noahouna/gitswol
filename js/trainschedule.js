// retrieve desired number of training sessions from previous page using URL

const link = window.location.href;
const split = link.split("?")[1].split("=")[1];
const decode = decodeURI(split);
const data = JSON.parse(decode);

let num_run = data[0];
let num_swim = data[1];
let num_lifts = data[2];

let extended_training_day;

const swims = 
[
{ 
    name: 'Triathlon Technique Workout',
    type: 'swim',
    focus: 'technique',
    workout: 'Warm Up\n300yd choice\n\nMain Set\n(2 rounds) 8x50 as 25yd drill, 25yd swim, followed by 100yd easy\n(2 rounds) 150yd as 50yd swim, 50yd drill, 50yd swim\n(2 rounds) 100yd as 25 yd drill, 75yd swim\n\nCool Down\n100yd choice',
    distance_duration: '1900 yards' },
{
    name: 'Triathlon Stamina Workout',
    type: 'swim',
    focus: 'aerobic',
    workout: 'Warm Up\n300yd mixed stroke (free, breast, css)\n\nMain Set\n100yd w/ 10s rest\n150yd w/ 15s rest\n200yd w/ 10s rest\n150yd w/ 15s rest\n100yd w/ 10s rest\n100yd super slow recovery w/ 60s rest\nrepeat for one more round\n\nCool Down\n100yd choice',
    distance_duration: '2000 yards' },
{
    name: 'Triathlon Speed Workout',
    type: 'swim',
    focus: 'speed',
    workout: 'Warm Up\n200yd easy\n4x50yd increasing speed w/ 20s rest\n100yd easy\n\nMain Set\n(2 rounds) 8x50yd as 25yd fast and 25yd easy w/ 20s rest, followed by 100yd easy\n4x100yd increasing speed per 25yd w/ 30s rest\n100yd easy\n\nCool Down\n200yd easy',
    distance_duration: '2200 yards' },
{
    name: '5x Ups', 
    type: 'swim',
    focus: 'aerobic', 
    workout: 'Warm Up\n300yd choice\n\nMain Set\n100yd, 5 push ups\n100yd, 10 push ups\n100yd, 15 push ups\n100yd, 20 push ups\n100yd, 15 push ups\n100yd, 10 push ups\n100yd, 5 push ups\n\nCool Down\n100yd choice',
    distance_duration: '1100 yards' },
{
    name: 'Master Swim',
    type: 'swim',
    focus: 'variable',
    workout: 'variable',
    distance_duration: 'variable'}
]

const runs = 
[
{
    name: 'Time Tree', 
    type: 'run',
    focus: 'pace',
    workout: 'Warm Up\nDynamic Stretching\n\nMain Set\n(2 rounds) 8x50 as 25yd drill, 25yd swim, followed by 100yd easy\n(2 rounds) 150yd as 50yd swim, 50yd drill, 50yd swim\n(2 rounds) 100yd as 25 yd drill, 75yd swim\n\nCool Down\n100yd choice',
    distance_duration: '1900 yards' },
{
    name: 'Hards and Easys',
    type: 'run',
    focus: 'sprinting',
    workout: 'Warm Up\nDynamic Stretching\n\nMain Set\n100yd w/ 10s rest\n150yd w/ 15s rest\n200yd w/ 10s rest\n150yd w/ 15s rest\n100yd w/ 10s rest\n100yd super slow recovery w/ 60s rest\nrepeat for one more round\n\nCool Down\n100yd choice',
    distance_duration: '2000 yards' },
{
    name: 'Sprints and Planks',
    type: 'run',
    focus: 'sprinting',
    workout: 'Warm Up\nDynamic Stretching\n4x50yd increasing speed w/ 20s rest\n100yd easy\n\nMain Set\n(2 rounds) 8x50yd as 25yd fast and 25yd easy w/ 20s rest, followed by 100yd easy\n4x100yd increasing speed per 25yd w/ 30s rest\n100yd easy\n\nCool Down\n200yd easy',
    distance_duration: '2200 yards' },
{ 
    name: 'Distance Run',
    type: 'run',
    focus: 'distance', 
    workout: 'Warm Up\nDynamic Stretching\n\nMain Set\n100yd, 5 push ups\n100yd, 10 push ups\n100yd, 15 push ups\n100yd, 20 push ups\n100yd, 15 push ups\n100yd, 10 push ups\n100yd, 5 push ups\n\nCool Down\n100yd choice',
    distance_duration: '1100 yards' }
]

const strength_sessions = 
[
{ 
    name: 'Functional Push Session',
    type: 'strength',
    focus: ['push'],
    workout: 'Warm Up\n300yd choice\n\nMain Set\n(2 rounds) 8x50 as 25yd drill, 25yd swim, followed by 100yd easy\n(2 rounds) 150yd as 50yd swim, 50yd drill, 50yd swim\n(2 rounds) 100yd as 25 yd drill, 75yd swim\n\nCool Down\n100yd choice',
    distance_duration: '1900 yards' },
{
    name: 'Functional Pull Session',
    type: 'strength',
    focus: ['aerobic'],
    workout: 'Warm Up\n300yd mixed stroke (free, breast, css)\n\nMain Set\n100yd w/ 10s rest\n150yd w/ 15s rest\n200yd w/ 10s rest\n150yd w/ 15s rest\n100yd w/ 10s rest\n100yd super slow recovery w/ 60s rest\nrepeat for one more round\n\nCool Down\n100yd choice',
    distance_duration: '2000 yards' },
{
    name: 'Functional Leg Session',
    type: 'strength',
    focus: ['speed'],
    workout: 'Warm Up\n200yd easy\n4x50yd increasing speed w/ 20s rest\n100yd easy\n\nMain Set\n(2 rounds) 8x50yd as 25yd fast and 25yd easy w/ 20s rest, followed by 100yd easy\n4x100yd increasing speed per 25yd w/ 30s rest\n100yd easy\n\nCool Down\n200yd easy',
    distance_duration: '2200 yards' },
{ 
    name: 'Full Body Power Session',
    type: 'strength',
    focus: ['aerobic'], 
    workout: 'Warm Up\n300yd choice\n\nMain Set\n100yd, 5 push ups\n100yd, 10 push ups\n100yd, 15 push ups\n100yd, 20 push ups\n100yd, 15 push ups\n100yd, 10 push ups\n100yd, 5 push ups\n\nCool Down\n100yd choice',
    distance_duration: '1100 yards' }
]

const stretches =
[
{ 
    name: 'Flexibility & Mobility Routine',
    type: 'stretch',
    workout: 'Warm Up\n300yd choice\n\nMain Set\n(2 rounds) 8x50 as 25yd drill, 25yd swim, followed by 100yd easy\n(2 rounds) 150yd as 50yd swim, 50yd drill, 50yd swim\n(2 rounds) 100yd as 25 yd drill, 75yd swim\n\nCool Down\n100yd choice',
    distance_duration: '1900 yards' }
]

const miscellaneous =
[
{ 
    name: 'Grass and Gorillas',
    type: 'Strength',
    focus: ['shoulders', 'core', 'triceps', 'legs'],
    workout: 'Warm Up\nDynamic Stretching\n\nMain Set\n(2 rounds) 8x50 as 25yd drill, 25yd swim, followed by 100yd easy\n(2 rounds) 150yd as 50yd swim, 50yd drill, 50yd swim\n(2 rounds) 100yd as 25 yd drill, 75yd swim\n\nCool Down\n100yd choice',
    distance_duration: '1900 yards' },
{
    name: 'Murph',
    type: 'Strength',
    focus: ['biceps', 'chest', 'triceps'],
    workout: 'Warm Up\nDynamic Stretching\n\nMain Set\n100yd w/ 10s rest\n150yd w/ 15s rest\n200yd w/ 10s rest\n150yd w/ 15s rest\n100yd w/ 10s rest\n100yd super slow recovery w/ 60s rest\nrepeat for one more round\n\nCool Down\n100yd choice',
    distance_duration: '2000 yards' },
{
    name: 'Water Con',
    type: 'swim',
    focus: 'technique',
    workout: 'Warm Up\n200yd breast\n4x50yd increasing speed w/ 20s rest\n100yd easy\n\nMain Set\n(2 rounds) 8x50yd as 25yd fast and 25yd easy w/ 20s rest, followed by 100yd easy\n4x100yd increasing speed per 25yd w/ 30s rest\n100yd easy\n\nCool Down\n200yd easy',
    distance_duration: '2200 yards' },
{ 
    name: 'Ruck',
    type: 'Strength',
    focus: ['core', 'legs'], 
    workout: 'Warm Up\n300yd choice\n\nMain Set\n100yd, 5 push ups\n100yd, 10 push ups\n100yd, 15 push ups\n100yd, 20 push ups\n100yd, 15 push ups\n100yd, 10 push ups\n100yd, 5 push ups\n\nCool Down\n100yd choice',
    distance_duration: '1100 yards' }
]

// Determine if week includes extended training day

function black_saturday (extended_training_day) {
    random_bit = Math.round(Math.random() - 0.1); // 60% chance for no ETD
    if (random_bit == 0) {extended_training_day = false;}
    else {extended_training_day = true}
    return extended_training_day;
}
extended_training_day = black_saturday();

// Each day of the week will display title of workout, and workout

// Create workout schedule to be filled with semi-random workouts
let workout_schedule = [{workout: []}, {workout: []},{workout: []},{workout: []},{workout: []},{workout: []},{workout: []}];

// Function to check if proposed workout shares 'type' with another workout scheduled on same day
function check_workout (proposed_workout, day) 
{
    // Check if workout of same type has been done that day
    for (let i = 0; i < workout_schedule[day].workout.length; i++)
    {
        if (proposed_workout.type == workout_schedule[day].workout[i].type) {return false}
    }

    // Check if workout name is already in the week schedule
    for (let i = 0; i < workout_schedule.length; i++)
    {
        for (let j = 0; j < workout_schedule[day].workout.length; j++)
        {
            if (workout_schedule[i].workout.length > 0)
            {
                if (proposed_workout.name == workout_schedule[i].workout[j].name) {return false}
            }
        }
    }

    // Proposed workout is good to add to schedule
    return true;
}

while (num_run != 0 || num_swim != 0 || num_lifts != 0)
{
    for (let day = 0; day < 7; day++)
    {
        // Skip reserved athletic regen day and
        if (day == 4) {continue;}

        if (num_swim != 0)
        {
            let random_bit_0 = Math.round(Math.random());
            if (random_bit_0 == 0) {let random_int = Math.floor(Math.random() * (swims.length - 1));
                let unique_type = check_workout(swims[random_int], day);
                if (unique_type == true) 
                { workout_schedule[day].workout.push(swims[random_int]); num_swim -= 1; continue; }}
            else {continue} // iterate to next day in either case
        }
        if (num_lifts != 0)
        {
            let random_bit_0 = Math.round(Math.random());
            if (random_bit_0 == 0) {let random_int = Math.floor(Math.random() * (strength_sessions.length - 1));
                let unique_type = check_workout(strength_sessions[random_int], day);
                if (unique_type == true) 
                { workout_schedule[day].workout.push(strength_sessions[random_int]); num_lifts -= 1; continue; }}
            else {continue} 
        }
        if (num_run != 0)
        {
            let random_bit_0 = Math.round(Math.random());
            if (random_bit_0 == 0) {let random_int = Math.floor(Math.random() * (runs.length - 1));
                let unique_type = check_workout(runs[random_int], day);
                if (unique_type == true) 
                { workout_schedule[day].workout.push(runs[random_int]); num_run -= 1; continue; }}
            else {continue} 
        }
    }
}

// Friday is athletic regen day
workout_schedule[4].workout = stretches[0];

console.log(workout_schedule);