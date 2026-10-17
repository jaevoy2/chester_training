export const SITE = 'https://chestercountytraining.com'
export const img = (p) => (p.startsWith('http') ? p : SITE + p)

export const business = {
  name: 'Chester County Training',
  tagline: 'Personal Trainer',
  established: 2005,
  email: 'ChesterCountyTraining@Gmail.com',
  phone: '(484) 269-3220',
  address: '130 Chestnut Lane, Pottstown, PA 19465',
  facebook: 'https://www.facebook.com/chestercountytraining/',
  hero: '/hero.png',
}

const U = '/uploads/3/5/3/7/35373541/'
export const gallery = [
  U + 'gym-sled_orig.jpg',
  U + 'published/gym-middle-2_2.jpg',
  U + 'studio-front-room-2.jpg',
  U + 'gym-personal-training_orig.jpg',
  U + 'in-home-training.jpg',
  U + 'gyms.jpg',
]

// Grouped navigation (related pages share a dropdown)
export const navGroups = [
  { label: 'Home', to: '/' },
  {
    label: 'About',
    items: [
      { label: 'Meet the Team', to: '/meet-the-team' },
      { label: 'Testimonials', to: '/testimonials' },
      { label: 'Studio Locations', to: '/studio-locations' },
    ],
  },
  {
    label: 'Training',
    items: [
      { label: 'Senior Specific', to: '/senior-specific' },
      { label: 'Sports Specific', to: '/sports-specific' },
      { label: 'Golf Specific', to: '/golf-specific' },
      { label: 'Semi-Private Strength Training', to: '/semi-private-strength-training' },
    ],
  },
  {
    label: 'Programs',
    items: [
      { label: 'Corporate Wellness', to: '/corporate-wellness' },
      { label: 'Lehigh Valley Training', to: '/lehigh-valley-training' },
    ],
  },
  { label: 'Contact', to: '/contact' },
]

export const nav = navGroups.flatMap((g) => g.items || [g])

export const serviceAreas = [
  'Pottstown', 'West Chester', 'Exton', 'Phoenixville', 'Boyertown',
  'Downingtown', 'Chester Springs', 'Emmaus', 'Allentown', 'Bethlehem',
]

export const programs = [
  { n: '01', photo: '/uploads/3/5/3/7/35373541/published/adam-andrew-running.jpg', title: 'Senior Specific', to: '/senior-specific', text: 'Strength, balance, mobility and nutrition programs built for seniors.' },
  { n: '02', photo: '/uploads/3/5/3/7/35373541/published/austin-soccer.jpg', title: 'Sports Specific', to: '/sports-specific', text: 'Speed, agility and power training for athletes of all ages.' },
  { n: '03', photo: '/uploads/3/5/3/7/35373541/gym-personal-training_orig.jpg', title: 'Semi-Private Strength', to: '/semi-private-strength-training', text: '45-minute small-group sessions at 5:30 a.m., capped at 7 people.' },
  { n: '04', photo: '/uploads/3/5/3/7/35373541/published/golf.jpg', title: 'Golf Specific', to: '/golf-specific', text: 'TPI-certified assessment and training to improve your swing.' },
  { n: '05', photo: '/uploads/3/5/3/7/35373541/editor/corporate-fitness-picture.jpg', title: 'Corporate Wellness', to: '/corporate-wellness', text: 'Fitness and nutrition coaching at your worksite.' },
  { n: '06', photo: '/uploads/3/5/3/7/35373541/in-home-training.jpg', title: 'Lehigh Valley Training', to: '/lehigh-valley-training', text: 'In-home personal training and nutrition across the Lehigh Valley.' },
]

export const testimonials = [
  { name: 'John', age: 63, text: 'I had never taken strength training or nutrition serious in my life. Now at age 63 I am down 40lbs...' },
  { name: 'Ashley', age: 39, text: 'This summer I decided to find a personal trainer that could come to my house and help support me in my fitness goals.' },
  { name: 'Ian', age: 40, text: 'When I started, I looked and felt 10 years older than I am. Now I look and feel 10 years younger.' },
  { name: 'Erik', age: 25, text: 'I have been working with Chester County Training for 10 months and lost 100 lbs!' },
  { name: 'Courtney and Rich', text: 'Began training over FaceTime in November 2020, now train in-studio, and have lost 80 pounds combined.' },
  { name: 'Ronni', age: 38, text: 'I have been working with Adam and Brooke since the beginning of August 2017, and I have loved every minute of it.' },
  { name: 'Lynn', age: 25, text: 'Choosing to work with Adam was the best decision I have ever made. In the last 10 months I have lost...' },
  { name: 'Shelly', age: 45, text: 'Eight months ago, in search of a personal trainer, I was lucky enough to come upon this website...' },
  { name: 'Judy', age: 59, text: 'The last year has been life changing for me. The best decision I made was to contact you...' },
  { name: 'Toni', age: 42, text: "Choosing a personal trainer isn't easy and a person must feel like the investment they are making in themselves..." },
  { name: 'Angela', age: 28, text: "I've been working with Chester County Training for several months and I've lost more than 65 pounds!" },
  { name: 'Dana', age: 48, text: 'I have been working with Adam for the past 6 months and I am very excited about my progress.' },
  { name: 'Mike', age: 33, text: 'I have worked with Chester County Training for 4 years. They are an unbelievable resource for training advice...' },
  { name: 'Trish', age: 47, text: "The day I searched on Google, 'trainer near me,' and found Chester County Personal Training has literally..." },
  { name: 'Fawn', age: 38, text: 'Chester County Training is great! They encourage with respect and can easily know when you can do more...' },
  { name: 'Chris', age: 41, text: 'The trainers at Chester County Training are very motivating and have moved me from total couch potato...' },
  { name: 'Andrew', age: 54, text: 'I have been working with Adam at Chester County Training for over 6 years and as a result, at age 54...' },
  { name: 'Steve D.', age: 69, text: 'My wife has been training with Adam in his studio for the past seven years.' },
  { name: 'Todd', age: 57, text: 'This is the greatest type of exercise I have ever tried.' },
  { name: 'Megan', age: 35, text: "I contacted Chester County Training thinking I simply needed to 'tone' up...what I got was so much more!" },
]

const P = '/uploads/3/5/3/7/35373541/'
export const team = [
  { name: 'Adam Lieb', creds: 'MS, CSCS', role: 'Owner', photo: P + 'published/family.jpg?1605320380',
    bio: 'Certified Personal Trainer and NSCA CSCS with 18 years of experience, from assisted living seniors to youth backpacking trips. B.S. Kinesiology (East Stroudsburg), M.S. Sport and Exercise Physiology (West Chester). Former Division 1 wrestler and wrestling coach.' },
  { name: 'Austin Hoffman', creds: 'MS, CSCS, PES', role: 'Strength & Conditioning', photo: P + 'published/img-2138.jpg?1619394847',
    bio: 'Performance Enhancement Specialist and powerlifter. Former strength coach at Iowa State, Shippensburg and Ursinus; trains all age groups and many college teams.' },
  { name: 'Matt Smith', creds: 'B.S., CSCS, TPI', role: 'Golf Specific Trainer', photo: P + 'published/img-4233.jpg?1665523408',
    bio: 'TPI instructor and certified golf specific trainer. B.S. Kinesiology (Cairn, Cum Laude), former teacher, soccer coach and rock climbing guide.' },
  { name: 'Brooke Mullen', creds: 'BS', role: 'Nutrition & Fitness', photo: P + 'published/brooke.png?1679951008',
    bio: 'DBC Level 1 & 2 certified with a B.S. in Exercise Science and Nutrition. 2023 USA Boxing national champion, PA Golden Gloves champion and former D2 basketball player and coach.' },
  { name: 'Steve Tryens', creds: 'B.S., CSCS', role: 'Trainer', photo: P + 'published/steve-t-headshot.jpg?1695489471',
    bio: 'Former Marine Sergeant with a B.S. in Exercise Science (Temple). After a back injury he focuses on safe lifting and functional fitness.' },
  { name: 'Noah Barnes', creds: 'MS, CSCS', role: 'Trainer', photo: P + 'published/noah-personal-trainer.jpeg?1786149110',
    bio: 'B.S. and M.S. Exercise Science (East Stroudsburg). Welcoming to first-time lifters, adapts programs for injury rehab, worked with D1/D2 teams at Lehigh and ESU.' },
  { name: 'Jordan Turner', creds: 'B.A.', role: 'NASM-CPT', photo: P + 'published/jordan-personal-trainer.jpeg?1772235535',
    bio: '13+ years training seniors to professional athletes and special operations personnel. NCAA decathlete with Olympic weightlifting and gymnastics background.' },
  { name: 'Alan Coates', creds: 'B.S., CSCS', role: 'Trainer', photo: P + 'published/img-7042-alan.jpg?1718738483',
    bio: 'B.S. Exercise Science (West Chester). Works with adults and youth; previously ran strength programs for all sports teams at Spring-Ford High School.' },
  { name: 'Will Geosits', creds: 'MS, CSCS', role: 'Strength & Conditioning', photo: P + 'editor/will-head.jpg?1630595274',
    bio: 'Head S&C coach for all 22 varsity sports at Spring-Ford High School; previously Kutztown, Albright, Harvard and Lehigh. 8 years training youth to older adults.' },
  { name: 'Jeffrey Baker', creds: 'M.S., CSCS, FMS', role: 'Lehigh Valley', photo: null,
    bio: 'Former Sports Performance Coordinator with St. Luke\'s University Health Network and head strength coach at multiple Lehigh Valley high schools.' },
  { name: 'Ryan Holub', creds: 'B.S., CSCS', role: 'Lehigh Valley', photo: null,
    bio: 'B.S. Exercise and Sport Science (Temple), former college football player; strength coach at Quakertown Community High School.' },
]

const pageMedia = {
  'senior-specific': ['published/adam-andrew-running.jpg', 'published/trx-rows.jpg', 'steve-working-out_orig.jpg', 'published/jody-personal-training.jpg'],
  'sports-specific': ['alex-full-gym_orig.jpg', 'published/austin-soccer.jpg', 'published/tanner-push-press.jpeg', 'published/walter-squat.jpeg', 'published/theo-climbing.jpg', 'brooke-sports_orig.jpg'],
  'corporate-wellness': ['editor/corporate-fitness-picture.jpg', 'published/rad-group-fitness.jpg', 'courtney-group_orig.jpg'],
  'golf-specific': ['published/golf.jpg', 'editor/matt-golf.jpg'],
  'semi-private-strength-training': ['gym-personal-training_orig.jpg', 'gym-sled_orig.jpg'],
  'lehigh-valley-training': ['in-home-training.jpg'],
}
const pageVideo = { 'sports-specific': 'https://www.youtube.com/embed/z4V1lmG-d4I' }

export const pages = {
  'senior-specific': {
    kicker: 'Senior Specific',
    title: ['TRAIN STRONG', 'AT ANY AGE'],
    intro: "Chester County Training develops training programs specifically for seniors to help them achieve their fitness and nutrition goals.  As you age, strength training, healthy eating habits, balance, and mobility are essential for enjoying your golden years.",
    listTitle: 'Benefits',
    list: ['Quality of life', 'Strength', 'Balance', 'Weight loss', 'Mobility', 'Improved mental health', 'Improved cardio', 'Improved brain function'],
    quotes: [
      { name: 'Andrew, 61', text: 'Trained for about 10 years and credits Adam and Brooke with keeping him on track toward his goals.' },
      { name: 'Steve D., 69', text: 'Started exercising during the pandemic when Adam set up equipment at his home — sessions focus on core strength, balance and overall conditioning.' },
      { name: 'Judy, 64', text: 'Credits the nutrition guidance and varied workouts with significant weight loss and strength gains.' },
      { name: 'Ann, 71', text: 'Trains with Austin twice a week and has lost about 50 pounds, with improved balance after joint replacements.' },
    ],
  },
  'sports-specific': {
    kicker: 'Sports Specific',
    title: ['BUILT FOR', 'THE GAME'],
    intro: "Chester County Training provides the most up-to-date athletic training techniques.",
    listTitle: 'Training Focus',
    list: ['Speed', 'Agility', 'Cardiovascular endurance', 'Strength', 'Plyometrics / explosive power', 'Flexibility / mobility', 'Balance', 'Injury prevention', 'Sport-specific movement', 'Nutrition guidance'],
    chipsTitle: 'Sports We Train',
    chips: ['Soccer', 'Wrestling', 'Basketball', 'Lacrosse', 'Track', 'Football', 'Baseball', 'Hockey', 'Weightlifting', 'Tennis', 'Volleyball', 'Boxing'],
    note: 'Coaches: Austin (strength & conditioning coach at Iowa State, Shippensburg and Ursinus, supporting players up to the NFL) and Brooke (has worked with athletes at all levels, including professionals).',
  },
  'corporate-wellness': {
    kicker: 'Corporate Wellness',
    title: ['HEALTHIER TEAMS,', 'BETTER BUSINESS'],
    intro: "For over 10 years, we’ve worked with local businesses helping them create a positive work environment with healthier more productive staff members.",
    listTitle: 'Productivity Benefits',
    list: ['Better information processing, attention and concentration', 'Improved sleep, energy, creativity and problem-solving', 'Fewer sick days', 'Lower health insurance costs', 'Stronger immune systems', 'Lower employee turnover'],
    list2Title: 'Mental & Physical Health',
    list2: ['Improved mental well-being', 'Sharper cognition', 'Better stress handling', 'Stronger team building and morale', 'More muscular strength and endurance', 'Fewer injuries'],
    note: 'Employees who get at least 75 minutes of vigorous physical activity per week miss an average of 4.1 fewer days of work per year. We also offer worksite nutrition advice and individual nutrition and fitness coaching for employees.',
    chipsTitle: 'Our Partners',
    chips: ['USSC', 'RAD', 'Beyond the Leaf', 'Mid-Atlantic High Reach'],
    cta: 'Schedule a Call',
  },
  'golf-specific': {
    kicker: 'Golf Specific',
    title: ['PLAY TO YOUR', 'FULL POTENTIAL'],
    intro: "Matt Smith is a certified TPI (Titleist Performance Institute) instructor and NSCA certified strength and conditioning specialist, with the gold standards for training golfers of all levels.",
    listTitle: 'Your Trainer — Matt Smith',
    list: ['B.S. Kinesiology, Cairn University (Cum Laude)', 'NSCA Certified Strength and Conditioning Specialist', 'Titleist Performance Institute (TPI) certified golf specific trainer'],
    cta: 'Schedule a Free Assessment',
  },
  'semi-private-strength-training': {
    kicker: 'Semi-Private Strength Training',
    title: ['EARLY MORNING', 'STRENGTH'],
    intro: "The semi-private training will focus on building a stronger body, increased muscle mass, cardiovascular endurance, injury prevention, and quality of life.  Each day will be programmed, and your individual results will be tracked.",
    listTitle: 'Weekly Focus',
    list: ['Mon & Thu: chest, shoulders, triceps, quads, glutes, squat-dominant cardio', 'Tue & Fri: back, biceps, hamstrings, glutes, deadlift-dominant cardio', 'Wed: total-body strength and cardio'],
    facts: [
      ['Schedule', '45 min · 5:30 a.m. · Mon–Fri'],
      ['Location', '2317 Pottstown Pike, Pottstown, PA 19465'],
      ['Capacity', 'Capped at 7 people — space is limited'],
    ],
    rates: [['5 days / week', '$20'], ['4 days / week', '$22.50'], ['3 days / week', '$25'], ['2 days / week', '$30']],
    note: 'Sold in 5-week blocks, per class. Prices can be adjusted for weeks away, and rates prorated for late starts. Submit the contact form with your info and preferred days and times.',
    cta: 'Join a Class',
  },
  'lehigh-valley-training': {
    kicker: 'Lehigh Valley Training',
    title: ['IN-HOME TRAINING', 'LEHIGH VALLEY'],
    intro: "Chester County Training is now offering in-home personal training and nutrition in the Lehigh Valley.  We will meet with you in your home, worksite, outdoors, or virtually.  For in-home training, all exercise equipment can be provided.",
    listTitle: 'Service Areas',
    list: ['Allentown', 'Bethlehem', 'Emmaus', 'Easton'],
    teamNames: ['Jeffrey Baker', 'Ryan Holub'],
  },
}

Object.keys(pages).forEach((k) => {
  pages[k].media = (pageMedia[k] || []).map((f) => U + f)
  pages[k].video = pageVideo[k]
})

export const heroImg = '/hero.png'
export const testimonialPhotos = [
  U + 'published/john-before.jpg', U + 'published/john-after.jpg',
  U + 'published/ian-before-personal-training.jpg', U + 'published/ian-after-personal-training.jpg',
  U + 'published/ashley-before.jpg', U + 'published/eric-personal-training-2.jpg',
]
