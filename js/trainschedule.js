// input workouts here and use a hidden tag/id or whatever to make data inaccessible
// create workout objects w/ attributes: type of workout (swim, lift, etc.), workout string, date since last completed
// Select random workout and remove it from consideration if the workout was completed in the last week
import {num_run, num_swim, num_lifts} from './index';
alert(num_run);
let extended_training_day;

const swims = 
[
{ 
    type: 'swim',
    focus: 'technique',
    workout: 'Warm Up\n300yd choice\n\nMain Set\n(2 rounds) 8x50 as 25yd drill, 25yd swim, followed by 100yd easy\n(2 rounds) 150yd as 50yd swim, 50yd drill, 50yd swim\n(2 rounds) 100yd as 25 yd drill, 75yd swim\n\nCool Down\n100yd choice',
    distance_duration: '1900 yards' },
{
    type: 'swim',
    focus: 'aerobic',
    workout: 'Warm Up\n300yd mixed stroke (free, breast, css)\n\nMain Set\n100yd w/ 10s rest\n150yd w/ 15s rest\n200yd w/ 10s rest\n150yd w/ 15s rest\n100yd w/ 10s rest\n100yd super slow recovery w/ 60s rest\nrepeat for one more round\n\nCool Down\n100yd choice',
    distance_duration: '2000 yards' },
{
    type: 'swim',
    focus: 'speed',
    workout: 'Warm Up\n200yd easy\n4x50yd increasing speed w/ 20s rest\n100yd easy\n\nMain Set\n(2 rounds) 8x50yd as 25yd fast and 25yd easy w/ 20s rest, followed by 100yd easy\n4x100yd increasing speed per 25yd w/ 30s rest\n100yd easy\n\nCool Down\n200yd easy',
    distance_duration: '2200 yards' },
{ 
    type: 'swim',
    focus: 'aerobic', 
    workout: 'Warm Up\n300yd choice\n\nMain Set\n100yd, 5 push ups\n100yd, 10 push ups\n100yd, 15 push ups\n100yd, 20 push ups\n100yd, 15 push ups\n100yd, 10 push ups\n100yd, 5 push ups\n\nCool Down\n100yd choice',
    distance_duration: '1100 yards' }
]

const runs = 
[
{ 
    type: 'swim',
    focus: 'technique',
    workout: 'Warm Up\n300yd choice\n\nMain Set\n(2 rounds) 8x50 as 25yd drill, 25yd swim, followed by 100yd easy\n(2 rounds) 150yd as 50yd swim, 50yd drill, 50yd swim\n(2 rounds) 100yd as 25 yd drill, 75yd swim\n\nCool Down\n100yd choice',
    distance_duration: '1900 yards' },
{
    type: 'swim',
    focus: 'aerobic',
    workout: 'Warm Up\n300yd mixed stroke (free, breast, css)\n\nMain Set\n100yd w/ 10s rest\n150yd w/ 15s rest\n200yd w/ 10s rest\n150yd w/ 15s rest\n100yd w/ 10s rest\n100yd super slow recovery w/ 60s rest\nrepeat for one more round\n\nCool Down\n100yd choice',
    distance_duration: '2000 yards' },
{
    type: 'swim',
    focus: 'speed',
    workout: 'Warm Up\n200yd easy\n4x50yd increasing speed w/ 20s rest\n100yd easy\n\nMain Set\n(2 rounds) 8x50yd as 25yd fast and 25yd easy w/ 20s rest, followed by 100yd easy\n4x100yd increasing speed per 25yd w/ 30s rest\n100yd easy\n\nCool Down\n200yd easy',
    distance_duration: '2200 yards' },
{ 
    type: 'swim',
    focus: 'aerobic', 
    workout: 'Warm Up\n300yd choice\n\nMain Set\n100yd, 5 push ups\n100yd, 10 push ups\n100yd, 15 push ups\n100yd, 20 push ups\n100yd, 15 push ups\n100yd, 10 push ups\n100yd, 5 push ups\n\nCool Down\n100yd choice',
    distance_duration: '1100 yards' }
]

const strength = 
[
{ 
    type: 'swim',
    focus: 'technique',
    workout: 'Warm Up\n300yd choice\n\nMain Set\n(2 rounds) 8x50 as 25yd drill, 25yd swim, followed by 100yd easy\n(2 rounds) 150yd as 50yd swim, 50yd drill, 50yd swim\n(2 rounds) 100yd as 25 yd drill, 75yd swim\n\nCool Down\n100yd choice',
    distance_duration: '1900 yards' },
{
    type: 'swim',
    focus: 'aerobic',
    workout: 'Warm Up\n300yd mixed stroke (free, breast, css)\n\nMain Set\n100yd w/ 10s rest\n150yd w/ 15s rest\n200yd w/ 10s rest\n150yd w/ 15s rest\n100yd w/ 10s rest\n100yd super slow recovery w/ 60s rest\nrepeat for one more round\n\nCool Down\n100yd choice',
    distance_duration: '2000 yards' },
{
    type: 'swim',
    focus: 'speed',
    workout: 'Warm Up\n200yd easy\n4x50yd increasing speed w/ 20s rest\n100yd easy\n\nMain Set\n(2 rounds) 8x50yd as 25yd fast and 25yd easy w/ 20s rest, followed by 100yd easy\n4x100yd increasing speed per 25yd w/ 30s rest\n100yd easy\n\nCool Down\n200yd easy',
    distance_duration: '2200 yards' },
{ 
    type: 'swim',
    focus: 'aerobic', 
    workout: 'Warm Up\n300yd choice\n\nMain Set\n100yd, 5 push ups\n100yd, 10 push ups\n100yd, 15 push ups\n100yd, 20 push ups\n100yd, 15 push ups\n100yd, 10 push ups\n100yd, 5 push ups\n\nCool Down\n100yd choice',
    distance_duration: '1100 yards' }
]

const stretching_mobility = 
[
{ 
    type: 'swim',
    focus: 'technique',
    workout: 'Warm Up\n300yd choice\n\nMain Set\n(2 rounds) 8x50 as 25yd drill, 25yd swim, followed by 100yd easy\n(2 rounds) 150yd as 50yd swim, 50yd drill, 50yd swim\n(2 rounds) 100yd as 25 yd drill, 75yd swim\n\nCool Down\n100yd choice',
    distance_duration: '1900 yards' },
{
    type: 'swim',
    focus: 'aerobic',
    workout: 'Warm Up\n300yd mixed stroke (free, breast, css)\n\nMain Set\n100yd w/ 10s rest\n150yd w/ 15s rest\n200yd w/ 10s rest\n150yd w/ 15s rest\n100yd w/ 10s rest\n100yd super slow recovery w/ 60s rest\nrepeat for one more round\n\nCool Down\n100yd choice',
    distance_duration: '2000 yards' },
{
    type: 'swim',
    focus: 'speed',
    workout: 'Warm Up\n200yd easy\n4x50yd increasing speed w/ 20s rest\n100yd easy\n\nMain Set\n(2 rounds) 8x50yd as 25yd fast and 25yd easy w/ 20s rest, followed by 100yd easy\n4x100yd increasing speed per 25yd w/ 30s rest\n100yd easy\n\nCool Down\n200yd easy',
    distance_duration: '2200 yards' },
{ 
    type: 'swim',
    focus: 'aerobic', 
    workout: 'Warm Up\n300yd choice\n\nMain Set\n100yd, 5 push ups\n100yd, 10 push ups\n100yd, 15 push ups\n100yd, 20 push ups\n100yd, 15 push ups\n100yd, 10 push ups\n100yd, 5 push ups\n\nCool Down\n100yd choice',
    distance_duration: '1100 yards' }
]

const miscellaneous = 
[
{ 
    type: 'swim',
    focus: 'technique',
    workout: 'Warm Up\n300yd choice\n\nMain Set\n(2 rounds) 8x50 as 25yd drill, 25yd swim, followed by 100yd easy\n(2 rounds) 150yd as 50yd swim, 50yd drill, 50yd swim\n(2 rounds) 100yd as 25 yd drill, 75yd swim\n\nCool Down\n100yd choice',
    distance_duration: '1900 yards' },
{
    type: 'swim',
    focus: 'aerobic',
    workout: 'Warm Up\n300yd mixed stroke (free, breast, css)\n\nMain Set\n100yd w/ 10s rest\n150yd w/ 15s rest\n200yd w/ 10s rest\n150yd w/ 15s rest\n100yd w/ 10s rest\n100yd super slow recovery w/ 60s rest\nrepeat for one more round\n\nCool Down\n100yd choice',
    distance_duration: '2000 yards' },
{
    type: 'swim',
    focus: 'speed',
    workout: 'Warm Up\n200yd easy\n4x50yd increasing speed w/ 20s rest\n100yd easy\n\nMain Set\n(2 rounds) 8x50yd as 25yd fast and 25yd easy w/ 20s rest, followed by 100yd easy\n4x100yd increasing speed per 25yd w/ 30s rest\n100yd easy\n\nCool Down\n200yd easy',
    distance_duration: '2200 yards' },
{ 
    type: 'swim',
    focus: 'aerobic', 
    workout: 'Warm Up\n300yd choice\n\nMain Set\n100yd, 5 push ups\n100yd, 10 push ups\n100yd, 15 push ups\n100yd, 20 push ups\n100yd, 15 push ups\n100yd, 10 push ups\n100yd, 5 push ups\n\nCool Down\n100yd choice',
    distance_duration: '1100 yards' }
]

// 




//const time = Date.now()
//const schedule = {
    // 109231029381092480192480120 => January 4, 2020 5:35 PM   



    //[time]: {
    //    workouts: [
     //       {
     //           type: "pushups",
     //           amount: 500 
     //       },
    //        {
    //            type: "run",
    //            milage: 100
    //        }
    //    ]
  //  }
//}


/*

location
    valid locations
        park
        gym
        pool

workoutRandomizer(date, config: { isNormalDay: false, isGogginsDay: true}) {
    from all valid workouts
    give me oen that isn't on Date == date.now().month // 4 => true/false

    return 
}

for my next workout
    check key of schedule table => Date object
        12038192049 => Date time/yr/mo/day/wk/hour
        nextWorkout = workoutRandomizer(date)

        schedule.push(nextWorkout)
        sendNotificationToPhone(workout)

**/



//currentWorkouts.yards

// Change as workouts are added or removed
//const workout_count = 3;

//let workout_no = Math.floor(Math.random() * (workout_count + 1));

//let workout = workouts[workout_no];