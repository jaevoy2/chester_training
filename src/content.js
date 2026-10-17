const U = '/uploads/3/5/3/7/35373541/'

/* ───────────── Testimonials (full text from the reference site) ───────────── */
export const stories = [
  { name: 'John', age: 63, result: '−40 lbs', photos: ['published/john-before.jpg', 'published/john-after.jpg'],
    text: `I had never taken strength training or nutrition serious in my life.  Now at age 63 I am down 40lbs and in the best shape of my life.  I am looking forward to what the next 25 years will bring!` },
  { name: 'Ashley', age: 39, result: '−35 lbs', photos: ['published/ashley-before.jpg', 'published/matt-ashley.png'],
    text: `This summer I decided to find a personal trainer that could come to my house and help support me in my fitness goals. I am (almost) 40 and I was not happy with a lot of aspects related to myself and my body. To be clear, it wasn’t just a weight thing. I was a collegiate athlete, and I missed my endurance and strength from when I was in competition. Motherhood has not been the kindest to my body, both physically and mentally, and I realized I needed more than just my own internal motivation to make permanent changes.

Enter Adam & Matt from Chester Country Training. I found Adam’s business through a Google search, and both guys came out to my house and spent over an hour talking with me about my fitness and nutrition goals, my fears, and all the things that had been holding me back over the last couple years. I could tell how much they care about their clients’ journeys.

Since working with Matt 2x/week starting August 2023, I have lost over 35lbs, and 4 dress sizes … but more importantly, my confidence has grown. I went from struggling to complete 5 regular pushups, to being able to complete 3 sets of 20. I went from feeling winded 5 minutes into my adult field hockey games, to lasting a full 40 minute game with energy to spare. I’ve found myself again. I am stronger physically and mentally, and I have Matt to thank for that extra push. My overall health and wellness have greatly improved, and I am so much happier with my lifestyle. Many thanks to both Matt, and Adam! Looking forward to what 2024 will bring!` },
  { name: 'Ian', age: 40, result: '−25 lbs', photos: ['published/ian-before-personal-training.jpg', 'published/ian-after-personal-training.jpg'],
    text: `I’ve been working with Adam and Austin for almost two years now. When I started, I looked and felt 10 years older than I am. Now I look and feel 10 years younger. I just turned 40 and feel 30!

Down 25 lbs, added 7 or 8 lbs of muscle as well.

I can’t recommend the team over at Chester County Training more!` },
  { name: 'Erik', age: 25, result: '−100 lbs', photos: ['editor/eric-personal-training-1.jpg', 'published/eric-personal-training-2.jpg'],
    text: `I have been working with Chester County Training for 10 months and lost 100 lbs!

We have used a combination of in-person and virtual training.  Adam has given me the skills to create a healthy life.` },
  { name: 'Courtney and Rich', result: '−80 lbs combined', photos: ['published/rich-court-before.png'],
    text: `Courtney and Rich started November 16th, 2020 on FaceTime and now train in-studio for a combined weight loss of 80 pounds!` },
  { name: 'Ronni', age: 38, result: '−115 lbs', photos: ['editor/ronni-2.png'],
    text: `I have been working with Adam and Brooke since the beginning of August 2017, and I have loved every minute of it. Not only have I lost over 115 pounds in that time, yes, you read correctly, 115 pounds, I have also learned to look at food as fuel and not as a treat, a social necessity, or anything else that provides an excuse to overeat. That happened in just the first year. Since then, I have maintained and gained strength and endurance. The workouts are a highlight of my day, and I can't imagine not working with them, even after I reach my goal weight. The support, encouragement, and relationships developed are priceless. I encourage anyone wanting to be stronger, better conditioned, lose weight, or all of the above to give them a call. I can't say enough great things about either of them. They have truly changed my life.` },
  { name: 'Lynn', age: 25, result: '−90 lbs',
    text: `Choosing to work with Adam was the best decision I have ever made. In the last 10 months I have lost almost 90 pounds!! With Adam’s guidance I gained understanding of both exercise and nutrition. Adam is a genuine person who really cares about the people he works with. His workouts are fun and always varied. Although the hour is not easy it seems to go quickly. I never thought I would say this but I actually look forward to working out.  Thanks Adam!` },
  { name: 'Shelly', age: 45, result: '−60 lbs',
    text: `Eight months ago, in search of a personal trainer, I was lucky enough to come upon this website and read other testimonials from people who have had success working with Chester County Training. Those testimonials compelled me to call.  My life has completely changed since that phone call.   After a lifetime of struggling with weight issues, I've lost more than 60 pounds.

Having had success in other areas of my life, I was often embarrassed about why I couldn’t manage my weight issues.  Balancing food, exercise and a busy work schedule was overwhelming, and we are commercially inundated with misleading nutrition information including tricky food labels, fad diets, and artificial foods.  What makes Adam unique from other trainers is that he also teaches you about food and nutrition.   I now have a much better understanding of food and how much nutrition impacts my health, and frankly, it’s really not that complicated.

Adam was also able to quickly figure out how to motivate me and customized our sessions which pushed me to do more than I thought I could.  He is not only your trainer, but also becomes your teacher, coach, confidant, and friend.  Every session is different, challenging and yes, even fun! You can feel and see yourself becoming stronger each week.  Adam takes a genuine interest in you and your success.  I never imagined I could be this fit and healthy and enjoy working out.

I truly believe that because of Adam, I now have a new way of living that I can sustain for the rest of my life. If you're ready for a real and lasting change in your health, fitness, and your life, work with Adam - and simply do what he tells you! You will not regret it.` },
  { name: 'Judy', age: 59,
    text: `The last year has been life changing for me. The best decision I made was to contact you at the suggestion of my granddaughter. First, you have taught me the best nutrition to enhance one’s mind and body, which ultimately resulted in the weight loss. Second, you provided a variety of workouts to meet my needs. It was not always easy, but you knew when to challenge and push me. I could not have reached my goals without your flexibility and continued commitment to me as an individual - I have never been stronger than I am today and could not be prouder of my accomplishment. Thank you for your continued support and I look forward to continuing our workouts!!` },
  { name: 'Toni', age: 42,
    text: `Choosing a personal trainer isn’t easy and a person must feel like the investment they are making in themselves is worth it. It took me over a year to find the person that possesses all the qualities a trainer should have. It took me over a year to find Adam. He is clearly invested in helping his clients succeed and does so by knowing what you’re capable of doing and pushing you just a bit more. Adam’s ability to connect with me on many levels was what I needed to not only lose the weight, but also to gain strength and confidence. Since working with Adam, I can truly attest to the effectiveness of his methods. In addition to his extensive knowledge, encouragement and commitment, he brings humor and personality to every session. The workouts are always varied and he holds you accountable for every calorie! Complain about what you can’t do and he’ll make you do more! It’s not fun and it’s really hard, but Adam somehow makes the hour tolerable. Believe me, he has to put up with a lot of complaining during that time, but the results he helps you achieve become the motivation to continue on every week. Adam understands that we are ordinary people living everyday lives and he strives to help support me with making lasting changes, given the daily challenges I continually face. Thanks Adam!!` },
  { name: 'Angela', age: 28, result: '−65 lbs',
    text: `I’ve been working with Chester County Training for several months and I’ve lost more than 65 pounds! They're great at motivating me. They answer all my questions and if they don't know, they're always more than happy to find out. They have helped me change my life for the better!` },
  { name: 'Dana', age: 48, result: '−50 lbs',
    text: `I have been working with Adam for the past 6 months and I am very excited about my progress.  I’ve lost 50 pounds and I have to say that if it weren’t for his hard work in keeping me in line with food and exercise, I would not have been able to do it.  He has inspired me in every possible way.  I know it has been a struggle with me, but he has been dedicated - and believe me, the results speak for themselves!` },
  { name: 'Mike', age: 33,
    text: `I have worked with Chester County Training for 4 years. They are an unbelievable resource for training advice, motivation, and guidance. They are very experienced and highly recommended. I will see you Saturday for Mr. Natural Philadelphia.` },
  { name: 'Trish', age: 47,
    text: `The day I searched on Google, “trainer near me,” and found Chester County Personal Training has literally changed my life for the better! I am so happy I made that first phone call.

After having three kids in just under 5 years I put the needs of my family above my own. As my kids grew... so did my waistline! Before I knew it, my eldest was almost 20 years old and I had put on a significant amount of weight. I foolishly disregarded my own health needs for years - I made poor food choices & barely exercised. I tried to lose weight on my own over & over again but was never successful.

I understood the science of strength training in order to gain muscle to burn more calories to lose weight... but I was unsure how to start on my own. I was also hesitant because I don’t like gyms and didn’t feel comfortable working out in that type of environment. I knew I needed a personal trainer to help me one-on-one.

I meet with Adam & Brooke to discuss my goals. We discussed not only my fitness goals, but old knee/ankle injuries (and how they would design a program specifically for me), my desire to work out one-on-one (as opposed to crowded gyms), my minimal knowledge of strength training, etc. I was immediately confident after leaving that meeting I made the best decision to start training with them.

I’ve been training since April 2019 and I feel healthier and happier than I have in a long time! I’ve lost a significant amount of weight, I am eating right and I feel stronger & healthier.

Whatever your fitness goals, I am confident the trainers at Chester County Personal Training have the expertise and the commitment to help you succeed too!` },
  { name: 'Fawn', age: 38, sub: 'USSC Group, Exton PA',
    text: `Chester County Training is great! They encourage with respect and can easily know when you can do more and push you to do so. They come to my company to do group sessions and more people keep wanting to join the group because everyone is so stoked about the workouts. I would definitely recommend them!` },
  { name: 'Chris', age: 41,
    text: `The trainers at Chester County Training are very motivating and have moved me from total couch potato to exercising daily!  The workouts are challenging, they push me to work hard and I’ve seen continual changes in how I feel and how I look.  Two reasons why I continue to enjoy working out are the variety of workouts which are specific to my needs and fun to do; and their underlying knowledge of both the physiology and nutrition behind successful training and weight loss!  Having worked one-on-one, in my home, I can’t imagine any other workout method that I would be as committed to or that would be as successful in accomplishing my diet and exercise goals.` },
  { name: 'Andrew', age: 54,
    text: `I have been working with Adam at Chester County Training for over 6 years and as a result, at age 54, I think I'm probably in the best shape of my life. I have worked with many trainers over the years, some very good, but I can honestly and objectively say that Adam is by far the best. His unique approach to training is goal specific and focused. He actually tracks your results objectively, so you can accurately measure your progress. This really doesn't happen with most trainers in my experience. Frankly, it sets Adam apart from most other fitness professionals. This, and his knowledge about training, the human body, and nutrition places Adam in a league of his own. The training sessions are always well planned out and always dynamic, so you never have a chance to lose your focus or get bored. The workouts are always intense and challenging, but with Adam's encouragement, I am able to conquer them and push my limits. I always leave a session with an enormous sense of achievement. At first when I started training, like most people, I simply just wanted to look better, and because of Adam, I do. But more importantly, I feel so much better after a training session, not only physically but mentally and emotionally. I can confidently say that training with Adam has drastically improved my overall health and well being. By the way, I have also been training with Brook since she has joined Adam's team. Brook has been excellent and her training style, approach and philosophy are equally impressive. Adam and Brook are really two of the best trainers I've encountered. If you are thinking about starting a training program, you'll be doing yourself a disservice if you don't choose Chester County Training.` },
  { name: 'Steve D.', age: 69,
    text: `My wife has been training with Adam in his studio for the past seven years. When the pandemic struck last March, Adam took the initiative to set-up equipment in our home so that she could continue with her training. Being a “casual observer” at times, Adam would goad me and encourage me to join the “fun”. Never one to invest in exercise, after several weeks I reluctantly succumbed to the good-natured pressure and started to participate in the exercise sessions. It will soon be a year since I started, and I can state unequivocally that it was one of the best decisions that I have made in many years. Soon to be a septuagenarian, I am in the best shape that I have been in many years. Recognizing my age, Adam designs and focuses my sessions to strengthen my core, improve my balance and overall conditioning. The results are that I feel better both physically and mentally in my quest to not let age creep into my head. Chester County Training also has an experienced staff, and I would be remiss if I did not mention Brooke who is a valued member of Adam’s team. If you are looking for a personal trainer who is extremely knowledgeable, personable, and genuinely cares about his clients, you will want to meet with Adam to discuss your training goals.` },
  { name: 'Todd', age: 57,
    text: `This is the greatest type of exercise I have ever tried. I’ve done the large ones in the area that got to be too much financially to the lesser expensive ones that never seemed to work out. It really came down to time. In my own house on my schedule. Saves hours a week for me and I get my training in. What I never banked on was the personalities of the team at CCT. Everyone has been real. No hype. They keep it simple and it’s NEVER been pressure. They make our hour together fun. Don’t get me wrong, there are times and exercises that make me hate them, but they keep the conversations going and the time flies. In a VERY short period of time I have lost weight and have energy, I haven’t had in a long time. If you’re like me you just want to find a system that helps you stay with exercising so you have a chance to see results. Call these guys. They fit it into your lifestyle, on your time at your house. The only way to make it better is if they did the lifting for you!!` },
  { name: 'Megan', age: 35,
    text: `I contacted Chester County Training thinking I simply needed to “tone” up …what I got was so much more! Not only were they able to provide a workout tailored specifically to my needs, in the comfort of my home, but they did so in a way that encouraged me to obtain my goals and taught me a lot along the way. I thought of myself as a healthy eater and didn’t think I needed nutrition advice, but quite to my surprise they helped me understand the foods I needed to ensure I was burning calories and making the most of my workouts. At age 35, working with Chester County Training was one of the best things I’ve done to improve my health, overall strength, and well-being!` },
]

/* ───────────── Team (full bios from the reference site) ───────────── */
export const teamFull = [
  { name: 'Adam Lieb', creds: 'MS, CSCS', role: 'Owner', photo: U + 'published/family.jpg?1605320380', photo2: U + 'published/img-2143.jpg?1619394712',
    tags: ['NSCA Certified Strength & Conditioning Specialist', 'B.S. Kinesiology — East Stroudsburg University, Summa Cum Laude', 'M.S. Sport & Exercise Physiology — West Chester University, Magna Cum Laude', 'High School Strength & Conditioning Coach', 'CPR & First Aid', 'Division 1 Wrestler', 'Wrestling Coach', 'Conference Presenter on Nutrition & Training'],
    bio: [`Adam is the owner of Chester County Training. He is a knowledgeable personal trainer who has a wide range of experiences, from working with seniors in assisted living to leading month long backpacking trips for youth on the Appalachian Trail.  Adam has been a personal trainer for 18 years. He has had many successes and knows how to get results. He is a well rounded, dependable individual who believes exercise should be exciting, motivating, and purposeful.`,
      `He has his masters from West Chester University in exercise physiology where he wrote his published thesis on weight training versus cardiovascular training and its effect on body composition.`] },
  { name: 'Austin Hoffman', creds: 'MS, CSCS, PES', role: 'Strength & Conditioning', photo: U + 'published/img-2138.jpg?1619394847', photo2: U + 'published/img-1258.jpeg?1619394281',
    tags: ['Certified Strength & Conditioning Specialist', 'Performance Enhancement Specialist', 'B.S. Exercise Science — Shippensburg University', 'M.S. Exercise Science, Performance Enhancement — California University of PA', 'National Association of Speed & Explosion Certified', 'Reflexive Performance Reset Certified', 'CPR/AED/First Aid', 'S&C Coach at Iowa State, Shippensburg & Ursinus', 'Powerlifter'],
    bio: [`Austin’s passion is helping others with their health and fitness.  He has experience personal training all age groups including youth and older adults. He trained 8 different sports teams at Shippensburg University, all of the sports teams at Ursinus College, and he interned with the Iowa State University football program, where he supported players who went on to the NFL.`,
      `Austin has pursued the most rigorous exercise science degrees, internships, and certifications for personal training.  He puts his academic learning into practice every day for the benefit of his clients.`,
      `Austin spends his free time working out, playing sports like basketball and football, and competing in Powerlifting.`] },
  { name: 'Matt Smith', creds: 'B.S., CSCS, TPI', role: 'Golf Specific Trainer', photo: U + 'published/img-4233.jpg?1665523408', photo2: U + 'matt-rockclimbing_orig.jpg',
    tags: ['NSCA CSCS', 'TPI (Titleist Performance Institute) Instructor', 'Certified Golf Specific Trainer', 'B.S. Kinesiology — Cairn University, Cum Laude', 'CPR/First Aid', 'Collegiate Soccer Player', 'Rock Climbing Guide'],
    bio: [`Matt is passionate about setting his clients up for lifelong success in health and wellness. He enjoys building relationships with clients in order to cater their workouts to their individual goals.`,
      `Matt was a high school health and physical education teacher. He has also coached high school soccer and led groups of students on outdoor rock climbing trips.`,
      `In his free time, Matt enjoys weight lifting, golf, long distance running, and rock climbing.`] },
  { name: 'Brooke Mullen', creds: 'BS', role: 'Nutrition & Fitness', photo: U + 'published/brooke.png?1679951008', photo2: U + 'published/brooke-boxing-2.jpg?1679950935',
    tags: ['B.S. Exercise Science & Nutrition — West Chester University, Cum Laude', 'DBC Level 1 Certified', 'DBC Level 2 Certified', 'CPR & First Aid', 'Division 2 Basketball Player & Coach', 'PA Golden Gloves Champion', 'USA Boxing National Champion'],
    bio: [`Brooke believes that exercise is essential for living a happy and healthy life. She is driven and determined to help people achieve their fitness goals, while giving nutritional advice and helping clients live an overall healthier lifestyle.`,
      `Brooke’s passion for exercise led her to a sport that not many females venture into – boxing.  She is the 2023 national champion and will be competing at the Olympic team trials this December. Before boxing, Brooke focused on basketball, where she competed at West Chester University on an athletic scholarship.`] },
  { name: 'Steve Tryens', creds: 'B.S., CSCS', role: 'Trainer', photo: U + 'published/steve-t-headshot.jpg?1695489471', photo2: U + 'personal-trainer-steve-marine_orig.jpg',
    tags: ['NSCA CSCS', 'B.S. Exercise Science — Temple University', 'Marine Sergeant', 'CPR/First Aid'],
    bio: [`This is Steve, he was inspired to help others learn to safely lift after recovering from a back injury. Steve joined the Marine Corps, where his role was to load bombs onto an aircraft called the F-18 Hornet. During his time as a sergeant, he noticed that his Marines would get debilitating back and knee pain. This is due to developing a poor foundation of lifting before adding quantity. After leaving the military, he got his bachelors of science, where he found a passion for biomechanics. He is now determined to take his knowledge and apply it to those around him to make his community stronger through functional fitness.`,
      `When Steve isn’t lifting, he spends his time reading, camping, gardening, cooking, and fighting in a power struggle with his cat.`] },
  { name: 'Noah Barnes', creds: 'MS, CSCS', role: 'Trainer', photo: U + 'published/noah-personal-trainer.jpeg?1786149110', photo2: U + 'published/noah-disc-golf.jpg?1786149326',
    tags: ['NSCA CSCS', 'B.S. & M.S. Exercise Science — East Stroudsburg University', 'CPR/First Aid'],
    bio: [`Noah creates a positive environment for clients to feel safe coming into the weight room for the first time to gain strength and overall fitness. He has experience with injury rehab and adapts programs to accommodate clients’ needs. Noah has experience working with athletes, specifically in landing and sprinting technique, and plyometric and explosive drills in speed and agility.  He has worked with Division 1 teams at Lehigh University and Division 2 teams at East Stroudsburg University, including wrestling, football, volleyball, track, soccer, baseball, and basketball.`,
      `Noah loves weight lifting, playing soccer, hiking, and disc golf, and he recently competed in bodybuilding.`] },
  { name: 'Jordan Turner', creds: 'B.A., NASM-CPT', role: 'Personal Trainer', photo: U + 'published/jordan-personal-trainer.jpeg?1772235535', photo2: U + 'jordan-action_orig.jpeg',
    tags: ['NASM Certified Personal Trainer', 'B.A. — Dickinson College, Cum Laude', 'West Chester University', 'Adult & Youth First Aid/CPR/AED', 'NCAA Decathlete'],
    bio: [`Jordan is a passionate personal trainer who aims to help others and make a positive difference, both mentally and physically. He grew up playing a wide variety of sports, from Olympic Weightlifting and gymnastics to 24-hour endurance events, obstacle course racing world championships, and NCAA track and field.`,
      `With over 13 years of personal training experience, Jordan has been able to train a wide range of individuals from senior citizens to professional athletes, special force operators, and SWAT teams. Jordan’s extensive experience, knowledge, and expertise allows him to reach a wide range of individuals and change their lives, helping them reach any goals they have while making exercise enjoyable and exciting.`,
      `In his free time, Jordan enjoys exercising, reading, woodworking and spending time with his 3 kids.`] },
  { name: 'Alan Coates', creds: 'B.S., CSCS', role: 'Trainer', photo: U + 'published/img-7042-alan.jpg?1718738483', photo2: U + 'screenshot-2024-06-18-at-3-07-38-pm-alan-action_orig.jpeg',
    tags: ['NSCA CSCS', 'B.S. Exercise Science — West Chester University'],
    bio: [`Alan is passionate about helping clients create healthy lifestyles and reach their fitness goals. Alan has worked with adults and youths for both individual and group fitness training.  He previously worked at Spring-Ford High School, where he implemented strength training programs for all of the sports teams.`,
      `In his free time, Alan enjoys hiking, fishing, and playing in a local flag football league.`] },
  { name: 'Will Geosits', creds: 'MS, CSCS', role: 'Strength & Conditioning', photo: U + 'editor/will-head.jpg?1630595274', photo2: U + 'published/will-baseball.jpg?1630595531',
    tags: ['NSCA CSCS', 'B.S. Kinesiology — Penn State University', 'M.S. Exercise Science — East Stroudsburg University', 'D1 Strength & Conditioning Coach', 'High School Strength & Conditioning Coach'],
    bio: [`Will is dedicated to helping people from all walks of life establish and accomplish health and fitness related goals. With 8 years experience, he has worked with a diverse range of clients, from youth to elderly.`,
      `Will has also worked with college athletes as a strength and conditioning coach at D1, D2, and D3 schools including Kutztown, Albright, Harvard, and Lehigh.  He is currently the Head Strength and Conditioning Coach for all 22 varsity sports at Spring-Ford High School in Royersford.`,
      `Outside of the training room, Will enjoys spending his free time in the mountains hiking with his dog, playing softball, and supporting all his athletes by getting out to as many games as he can.`] },
  { name: 'Jeffrey Baker', creds: 'MS, CSCS, FMS, FRCms', role: 'Lehigh Valley', photo: U + 'published/jeff-headshot.jpg',
    tags: ['B.S. Sport Management — East Stroudsburg University', 'M.S. Exercise Science — Bloomsburg University', 'NSCA CSCS', 'Functional Movement Screen Certified', 'Functional Range Conditioning Specialist', 'CPR / First Aid'],
    bio: [`Jeff is passionate about helping athletes and general population clients discover their own passion for health and fitness.  Jeff has worked with individuals and teams over the past decade as a Sports Performance Coordinator with St. Luke’s University Health Network.  He has been the head strength coach at multiple high schools in the Lehigh Valley.`,
      `In his spare time Jeff enjoys playing sports like softball and basketball, as well as spending time with his family and young daughter.`] },
  { name: 'Ryan Holub', creds: 'BS, CSCS', role: 'Lehigh Valley', photo: U + 'editor/ryan-head-good.jpg', photo2: U + 'editor/ryan-football.jpeg',
    tags: ['B.S. Exercise & Sport Science — Temple University', 'NSCA CSCS', 'CPR/First Aid', 'Former College Football Player'],
    bio: [`Ryan has a wide array of experience ranging from the general population to the Division 1 level. In the high school sector, Ryan has worked with athletes at Whitehall High School and currently is the strength and conditioning coach at Quakertown Community High School. In the college ranks, Ryan has spent time training athletes at Lehigh University, cadets in the Temple University ROTC program, and students at Northampton Community College. Ryan is committed to helping clients be their best, whether that’s on the field, in the weight room, or as a person.`,
      `In his free time, Ryan enjoys playing with his dog, golfing, and watching the Philadelphia Eagles.`] },
]
export const teamBy = (n) => teamFull.find((m) => m.name === n)

/* ───────────── Contact / Studios ───────────── */
export const assessmentSteps = [
  { t: 'We talk goals', d: 'We meet with you to discuss your goals, questions, and health history.' },
  { t: 'Optional analysis', d: 'If desired, body composition and dietary analysis will be completed.' },
  { t: 'No commitment', d: 'The initial assessment is free and does not require a future commitment.' },
]
export const milestones = [
  { y: '2005', t: 'Chester County Training established' },
  { y: '2021', t: '2 new studios opened (2021 and 2022)' },
  { y: '2024', t: '2nd location — The Shoppes at Pughtown' },
]
export const studioPhotos = ['studio-front_orig.jpg', 'editor/gym-with-mirror.jpg', 'studio-road-sign.jpg', 'gyms.jpg', 'studio-front-room-2.jpg', 'published/gym-middle-2_2.jpg'].map((f) => U + f)

/* ───────────── Inner-page blocks ───────────── */
export const blocks = {
  'senior-specific': [
    { type: 'split', eyebrow: 'WHY IT MATTERS', title: ['BENEFITS OF', 'SENIOR TRAINING'], photo: 'published/adam-andrew-running.jpg',
      photoNote: 'Andrew, 61 — nearly 10 years of training with Adam',
      items: ['Quality of Life', 'Strength', 'Balance', 'Weight Loss', 'Mobility', 'Improved Mental Health', 'Improved Cardio', 'Improved Brain Function'] },
    { type: 'captioned', eyebrow: 'TRAINING IN ACTION', title: ['WHAT A SENIOR', 'SESSION LOOKS LIKE'], items: [
      ['published/trx-rows.jpg', 'Strength', 'Suspension rows build upper-body strength with a coach beside you.'],
      ['steve-working-out_orig.jpg', 'Balance', 'Coached squats on a balance pad to build stability and confidence.'],
      ['published/jody-personal-training.jpg', 'Conditioning', 'Seated dumbbell work, adjusted to your ability and goals.'],
    ] },
    { type: 'quotes', cols: 2, eyebrow: 'IN THEIR WORDS', title: ['SENIORS', 'WHO TRAIN WITH US'], items: [
      { name: 'Andrew', age: 61, text: `I've been training with Chester County Training for almost 10 years, maybe longer. Through those years, I've found Adam's approach to overall wellness to be far superior to most personal trainers. The fact is, Adam is far more than a trainer and has more than just credentials to prove it. Let's face it, any one can push you to do one more rep, or to do 30 more seconds. Adam has a plan for you, with your goals in mind, and as you get stronger, more fit and healthier, he knows how to keep you reaching for your goals. It actually matters to him that you succeed. I've work with Brook too, a person who is also far more than just a credentialed fitness professional. She shares Adam's sincere desire to help you become your best you. I'm 57, and with their help and guidance, I'm as healthy as I've ever been. They are keeping young, accountable, and sane, all while having fun. Invest in your wellbeing and just try Chester County Training....it will be one of your smartest, and healthiest decisions...trust me.` },
      { name: 'Steve D.', age: 69, text: stories.find((s) => s.name === 'Steve D.').text },
      { name: 'Judy', age: 64, text: `"The last year has been life changing for me. The best decision I made was to contact you at the suggestion of my granddaughter. First, you have taught me the best nutrition to enhance one’s mind and body, which ultimately resulted in the weight loss. Second, you provided a variety of workouts to meet my needs. It was not always easy, but you knew when to challenge and push me. I could not have reached my goals without your flexibility and continued commitment to me as an individual - I have never been stronger than I am today and could not be prouder of my accomplishment."` },
      { name: 'Ann', age: 71, text: `Today is my first anniversary with Chester County Training. I started April 5, 2021. I’m a new woman! I contacted Adam because I was about to turn 71 and had been diagnosed with hypertension, although my blood pressure had always been at or below normal. I was taking lots of blood pressure meds, was overweight, and just plain wanted to get fit and healthy. From the minute I met Adam and Austin, I knew I was in the right place.

I work out with Austin twice a week. For the first time in my life, I actually look forward to working out. I enjoy his positivity and sense of humor. I’m always surprised when a session ends, because the time just flies. I think the exercises we do are very efficient. Most, if not all, include the core, which is so important for balance. My balance has been off since I had my four major joints replaced (both hips and both knees). I feel so much more secure. I’ve lost about 50 pounds and have kept it off for nearly 6 months. Thanks to my year with Austin and Adam, I’m lighter, stronger, and more balanced (maybe not mentally) because of the good habits I’m learning. I’m so glad I saw their sign and called! You should call, too.` },
    ] },
  ],
  'sports-specific': [
    { type: 'tiles', cols: 4, eyebrow: 'SPORTS WE TRAIN', title: ['TRAINING FOR', 'EVERY SPORT'], items: ['Soccer', 'Wrestling', 'Basketball', 'Lacrosse', 'Track', 'Football', 'Baseball', 'Hockey', 'Weightlifting', 'Tennis', 'Volleyball', 'Boxing'] },
    { type: 'tiles', cols: 5, eyebrow: 'TRAINING FOCUS', title: ['WHAT WE', 'DEVELOP'], items: ['Speed Training', 'Agility', 'Cardiovascular Endurance', 'Strength', 'Plyometrics / Explosive Power', 'Flexibility / Mobility', 'Balance', 'Injury Prevention', 'Sport-Specific Body Movement', 'Nutrition Guidance'] },
    { type: 'captioned', eyebrow: 'TRAINING IN ACTION', title: ['SEE HOW WE', 'TRAIN ATHLETES'], items: [
      ['alex-full-gym_orig.jpg', 'Facility', 'A fully equipped private studio for speed, strength and conditioning work.'],
      ['published/austin-soccer.jpg', 'Speed & Agility', 'Resisted lunges and movement drills coached by Austin.'],
      ['published/tanner-push-press.jpeg', 'Explosive Power', 'Young athletes learning push press technique.'],
      ['published/walter-squat.jpeg', 'Strength', 'Goblet squats with proper form, built for young athletes.'],
      ['published/theo-climbing.jpg', 'Conditioning', 'Rope climbs build grip, pulling strength and endurance.'],
      ['brooke-sports_orig.jpg', 'Core & Upper Body', 'Brooke coaches a push-up on a medicine ball for athletes at any level.'],
    ] },
    { type: 'video' },
    { type: 'profiles', eyebrow: 'YOUR COACHES', title: ['MEET YOUR', 'SPORTS COACHES'], items: ['Austin Hoffman', 'Brooke Mullen'],
      notes: { 'Austin Hoffman': 'Austin was the Strength and Conditioning Coach at Iowa State, Shippensburg University, and Ursinus College supporting players all the way to the NFL.', 'Brooke Mullen': 'Brooke has worked with a variety of athletes at all levels including professional athletes.' } },
  ],
  'corporate-wellness': [
    { type: 'corphero', eyebrow: 'FOR LOCAL BUSINESSES', title: ['A HEALTHIER', 'WORKPLACE'], photo: 'published/rad-group-fitness.jpg',
      badge: ['10+', 'years working with local businesses'],
      services: [
        ['Nutrition', 'We will work with your business to create a healthier relationship with food and nutritional advice about what to have at your work site.'],
        ['Personal Training Services', 'We also work individually with your employees at your worksite on nutrition and fitness.'],
      ] },
    { type: 'impact', eyebrow: 'THE IMPACT', title: ['HEALTHIER STAFF,', 'BETTER RESULTS'], groups: [
      ['Effects On Productivity', ['Enhances information processing, attention, and concentration', 'Improved sleep', 'Improved energy', 'Reduced sickness and sick days (reduce absenteeism)', 'Improved creativity and problem solving', 'Reduced health insurance costs', 'Stronger immune systems', 'Lowers employee turnover']],
      ['Mental and Physical Health', ['Improved mental well-being', 'Sharpening cognitive capacity', 'Reduces stress and the ability to handle stressful situations', 'Increases team building amongst employees', 'Improved morale', 'Increase muscular strength and endurance and reduces chances of injuries']],
    ] },
    { type: 'statbanner', photo: 'courtney-group_orig.jpg', big: '4.1', unit: 'fewer days of work missed per year',
      text: 'Research has shown that employees who get at least 75 minutes of vigorous physical activity per week miss an average of 4.1 fewer days of work per year.' },
    { type: 'partners', eyebrow: 'PARTNERS', title: ['LOCAL COMPANIES', 'WE PARTNER WITH'], items: [['USSC', 'ussc-logo_orig.png'], ['RAD', 'rad-logo_orig.png'], ['Beyond the Leaf', 'beyond-the-leaf-logo_orig.png'], ['Mid-Atlantic High Reach', 'published/mid-atlantic-high-reach-logo.png']],
      quote: { name: 'Fawn', age: 38, text: stories.find((s) => s.name === 'Fawn').text, sub: 'USSC Group, Exton PA', full: true }, quotePhoto: 'editor/corporate-fitness-picture.jpg' },
    { type: 'cta', golf: true, text: 'Ready to build a healthier workplace?', label: 'SCHEDULE A CALL' },
  ],
  'golf-specific': [
    { type: 'golfintro', eyebrow: 'THE TPI PROGRAM', title: ['GOLF FITNESS,', 'BUILT AROUND YOUR SWING'],
      text: `The TPI program consists of a comprehensive assessment of a golfer's physical fitness, swing mechanics, and overall health and wellness, which is used to create a personalized training program to help you reach your full potential.`,
      points: [['01', 'Assess', 'Fitness, swing mechanics and overall health'], ['02', 'Personalize', 'A program built around your game'], ['03', 'Perform', 'Better fitness and results on the course']],
      photos: ['editor/matt-golf.jpg', 'published/golf.jpg'],
      certs: [['published/cscs-cert.png', 'NSCA CSCS'], ['published/titleist-cert.png', 'Titleist Performance Institute']] },
    { type: 'profiles', eyebrow: 'YOUR TRAINER', title: ['TPI CERTIFIED', 'GOLF TRAINER'], items: ['Matt Smith'],
      notes: { 'Matt Smith': 'Matt is a certified TPI (Titleist Performance Institute) instructor and NSCA certified strength and conditioning specialist. He has the gold standards for training golfers of all levels.' } },
    { type: 'steps', line: true, eyebrow: 'THE TPI PROCESS', title: ['FROM ASSESSMENT', 'TO THE FAIRWAY'], items: [
      ['Comprehensive Assessment', `A comprehensive assessment of a golfer's physical fitness, swing mechanics, and overall health and wellness.`],
      ['Personalized Program', 'Matt has the ability to create a personalized program so that you can play to your full potential.'],
      ['Address the Constraints', 'Matt will also address the physical constraints that hinder your golfing capabilities. These constraints not only increase the risk of injuries but also limit your ability to fully utilize your golf swing potential.'],
    ] },
    { type: 'cta', golf: true, text: 'The TPI program is designed to help golfers improve their fitness, swing mechanics, and overall performance on the golf course.', label: 'SCHEDULE A FREE ASSESSMENT TODAY!' },
  ],
  'semi-private-strength-training': [
    { type: 'semihero', eyebrow: 'SMALL GROUP, BIG RESULTS', title: ['TRAIN EARLY.', 'TRAIN TOGETHER.'], photo: 'gym-sled_orig.jpg',
      chips: [['5:30', 'AM start'], ['45', 'minutes'], ['Mon–Fri', 'every week'], ['7', 'max per class']],
      facts: [['Sessions', '5:30 a.m. Monday through Friday · 45 Minutes'], ['Location', '2317 Pottstown Pike, Pottstown PA 19465'], ['Class Size', 'Sessions will be maxed at 7 — limited space']] },
    { type: 'week', eyebrow: 'EACH DAY IS PROGRAMMED', title: ['YOUR WEEKLY', 'TRAINING SPLIT'], items: [
      ['Monday', 'Chest / Shoulders / Triceps / Quads / Glutes / Cardio (Squat Dominant)', 'squat'],
      ['Tuesday', 'Back / Biceps / Hamstrings / Glutes / Cardio (Deadlift Dominant)', 'deadlift'],
      ['Wednesday', 'Total Body Strength / Cardio', 'total'],
      ['Thursday', 'Chest / Shoulders / Triceps / Quads / Glutes / Cardio (Squat Dominant)', 'squat'],
      ['Friday', 'Back / Biceps / Hamstrings / Glutes / Cardio (Deadlift Dominant)', 'deadlift'],
    ], note: 'Each day will be programmed, and your individual results will be tracked.' },
    { type: 'ratesplit', eyebrow: 'BOUGHT IN 5 WEEK BOOKS', title: ['SIMPLE,', 'FAIR RATES'], photo: 'gym-personal-training_orig.jpg',
      items: [['5 Days a week', '$20', 'class'], ['4 Days a week', '$22.50', 'class'], ['3 Days a week', '$25', 'class'], ['2 Days a week', '$30', 'class']],
      notes: ['If you know you will be away for a week or certain days adjustments will be made for the price.', 'If you start later in the 5 week session, rates can be prorated.', 'We are a small business who will work with you.'] },
  ],
  'lehigh-valley-training': [
    { type: 'lvhero', eyebrow: 'NOW SERVING THE LEHIGH VALLEY', title: ['THE GYM COMES', 'TO YOU'], photo: 'in-home-training.jpg',
      places: ['Your Home', 'Your Worksite', 'Outdoors', 'Virtually'],
      text: 'Chester County Training is now offering in-home personal training and nutrition in the Lehigh Valley. We will meet with you in your home, worksite, outdoors, or virtually.' },
    { type: 'profiles', compact: true, eyebrow: 'YOUR LEHIGH VALLEY TRAINERS', title: ['MEET', 'YOUR COACHES'], items: ['Jeffrey Baker', 'Ryan Holub'] },
    { type: 'areatiles', title: ['WE PROVIDE PERSONAL', 'TRAINING IN'], items: ['Allentown', 'Bethlehem', 'Emmaus', 'Easton'] },
    { type: 'cta', golf: true, text: 'Ready to train at home in the Lehigh Valley?', label: 'BOOK A FREE ASSESSMENT' },
  ],
}
