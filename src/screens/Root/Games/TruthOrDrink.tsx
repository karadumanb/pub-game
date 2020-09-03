import React from 'react';
import ShowContainer from 'src/modules/game/ShowContainer';

const dataSource = [
  "What was the last thing you searched for on your phone?",
  "If you had to choose between going naked or having your thoughts appear in thought bubbles above your head for everyone to read, which would you choose?",
  "Have you ever walked in on your parents doing it?",
  "After you've dropped a piece of food, what's the longest time you've left it on the ground and then ate it?",
  "Have you ever tasted a booger?",
  "Have you ever played Cards Against Humanity with your parents?",
  "What's the first thing you would do if you woke up one day as the opposite sex?",
  "Have you ever peed in the pool?",
  "Who do you think is the worst dressed person in this room?",
  "Have you ever farted in an elevator?",
  "True or false? You have a crush on [fill in the blank].",
  "Of the people in this room, who do you want to trade lives with?",
  "What are some things you think about when sitting on the toilet?",
  "Did you have an imaginary friend growing up?",
  "Do you cover your eyes during a scary part in a movie?",
  "Have you ever practiced kissing in a mirror?",
  "Did your parents ever give you the “birds and the bees” talk?",
  "What is your guilty pleasure?",
  "What is your worst habit?",
  "Has anyone ever walked in on you when going #2 in the bathroom?",
  "Have you ever had a wardrobe malfunction?",
  "Have you ever walked into a wall?",
  "Do you pick your nose?",
  "Do you sing in the shower?",
  "Have you ever peed yourself?",
  "What was your most embarrassing moment in public?",
  "Have you ever farted loudly in class?",
  "Do you ever talk to yourself in the mirror?",
  "You’re in a public restroom and just went #2, then you realized your stall has no toilet paper. What do you do?",
  "What would be in your web history that you’d be embarrassed if someone saw?",
  "Have you ever tried to take a sexy picture of yourself?",
  "Do you sleep with a stuffed animal?",
  "Do you drool in your sleep?",
  "Do you talk in your sleep?",
  "Who is your secret crush?",
  "Do you think [fill in the name] is cute?",
  "Who do you like the least in this room, and why?",
  "What does your dream boy or girl look like?",
  "What is your go-to song for the shower?",
  "Who is the sexiest person in this room?",
  "How would you rate your looks on a scale of 1 to 10?",
  "Would you rather have sex with [insert name] in secret or not have sex with that person, but everyone thinks you did?",
  "What don't you like about me?",
  "What color underwear are you wearing right now?",
  "What was the last thing you texted?",
  "If you were rescuing people from a burning building and you had to leave one person behind from this room, who would it be?",
  "Do you think you'll marry your current girlfriend/boyfriend?",
  "How often do you wash your undergarments?",
  "Have you ever tasted ear wax?",
  "Have you ever farted and then blamed someone else?",
  "Have you ever tasted your sweat?",
  "What is the most illegal thing you have ever done?",
  "Who is your favorite? Mom or Dad?",
  "Would you trade your sibling in for a million dollars?",
  "Would you trade in your dog for a million dollars?",
  "What is your biggest pet peeve?",
  "If you were allowed to marry more than one person, would you? Who would you choose to marry?",
  "Would you rather lose your sex organs forever or gain 200 pounds?",
  "Would you choose to save 100 people without anyone knowing about it or not save them but have everyone praise you for it?",
  "If you could only hear one song for the rest of your life, what would it be?",
  "If you lost one day of your life every time you said a swear word, would you try not to do it?",
  "Who in this room would be the worst person to date? Why?",
  "Would you rather live with no internet or no A/C or heating?",
  "If someone offered you $1 million to break up with your girlfriend/boyfriend, would you do it?",
  "If you were reborn, what decade would you want to be born in?",
  "If you could go back in time in erase one thing you said or did, what would it be?",
  "Has your boyfriend or girlfriend ever embarrassed you?",
  "Have you ever thought about cheating on your partner?",
  "If you could suddenly become invisible, what would you do?",
  "Have you ever been caught checking someone out?",
  "Have you ever waved at someone thinking they saw you when really they didn't? What did you do when you realized it?",
  "What's the longest time you've stayed in the bathroom, and why did you stay for that long?",
  "What's the most unflattering school picture of you?",
  "Have you ever cried because you missed your parents so much?",
  "Would you rather be caught picking your nose or picking a wedgie?",
  "Describe the strangest dream you've ever had. Did you like it?",
  "Have you ever posted something on social media that you regret?",
  "What is your biggest fear?",
  "Do you pee in the shower?",
  "Have you ever ding dong ditched someone?",
  "The world ends next week, and you can do anything you want (even if it's illegal). What would you do?",
  "Would you wear your shirt inside out for a whole day if someone paid you $100?",
  "What is the most childish thing that you still do?",
  "How far would you go to land the guy or girl of your dreams?",
  "Tell us about a time you embarrassed yourself in front of a crush.",
  "Have you ever kept a library book?",
  "Who is one person you pretend to like, but actually don’t?",
  "What children’s movie could you watch over and over again?",
  "Do you have bad foot odor?",
  "Do you have any silly nicknames?",
  "When was the last time you wet the bed?",
  "How many pancakes have you eaten in a single sitting?",
  "Have you ever accidentally hit something with your car?",
  "If you had to make out with any Disney character, who would it be?",
  "Have you ever watched a movie you knew you shouldn’t?",
  "Have you ever wanted to try LARP (Live Action Role-Play)?",
  "What app on your phone do you waste the most time on?",
  "Have you ever pretended to be sick to get out of something? If so, what was it?",
  "What is the most food you’ve eaten in a single sitting?",
  "Do you dance when you’re by yourself?",
  "Would you have voted for or against Trump?",
  "What song on the radio do you sing with every time it comes on?",
  "Do you sleep with a stuffed animal?",
  "Do you own a pair of footie pajamas?",
  "Are you scared of the dark?",
  "What ‘As seen on TV’ product do you secretly want to buy?",
  "Do you still take bubble baths?",
  "If you were home by yourself all day, what would you do?",
  "How many selfies do you take a day?",
  "What is something you’ve done to try to be ‘cooler’?",
  "When was the last time you brushed your teeth?",
  "Have you ever used self-tanner?",
  "What do your favorite pajamas look like?",
  "Do you have a security blanket?",
  "Have you ever eaten something off the floor?",
  "Have you ever butt-dialed someone?",
  "Do you like hanging out with your parents?",
  "Have you ever got caught doing something you shouldn’t?",
  "What part of your body do you love, and which part do you hate?",
  "Have you ever had lice?",
  "Have you ever pooped your pants?",
  "What was the last R-rated movie you watched?",
  "Do you lick your plate?",
  "What is something that no one else knows about you?",
  "Do you write in a diary?",
  "What is the worst date you’ve ever been on?",
  "Have you ever had a crush on a friend’s boyfriend/girlfriend?",
  "If you had to make out with a boy at school, who would it be?",
  "Would you rather go for a month without washing your hair or go for a day without wearing a bra?",
  "Have you ever asked someone out?",
  "Have you ever had a crush on a person at least 10 years older than you?",
  "Who is the worst kisser you’ve kissed?",
  "What size is your bra?",
  "Do you wear tighty whities or granny panties?",
  "Do you ever admire yourself in the mirror?",
  "Has a crush ever found out you liked them and turned you down?",
  "Have you ever been stood up on a date?",
  "What’s the most embarrassing thing you’ve done regarding your crush?",
  "Do you secretly love Twilight?",
  "Have you ever wanted to be a cheerleader?",
  "Who is the hottest? Hagrid, Dumbledore, or Dobby?",
  "If you could marry any celebrity, who would it be?",
  "What do you do to get yourself 'sexy'?",
  "Who is your current crush?",
  "What hairstyle have you always wanted, but never been willing to try?",
  "What’s the most embarrassing thing you’ve said or done in front of someone you like?",
  "What part of your body do you love, and which part do you hate?",
  "Who is your celebrity crush?",
  "If you could change one thing about your body, what would it be?",
  "Who was your first kiss? Did you like it?",
  "Who are you jealous of?",
  "If you could be another girl at our school, who would you be?",
  "Would you kiss a guy on the first date? Would you do more than that?",
  "Who are the top five cutest guys in our class? Rank them.",
  "How many kids do you want to have in the future?",
  "Who do you hate the most?",
  "If you could go out on a date with a celebrity, who would it be?",
  "If you were stranded on a deserted island, who would you want to be stranded with from our school?",
  "Have you ever flirted with your best friend’s siblings?",
  "Have you ever been dumped? What was the reason for it?",
  "Jock, nerd, or bad guy?",
  "Have you ever had a crush on friend's boyfriend?",
  "Who is your first pick for prom?",
  "What's the sexiest thing about a guy?",
  "What's the sexiest thing about a girl?",
  "What's one physical feature that you would change on yourself if you could?",
  "Would you rather be a guy than a girl? Why?",
  "Describe your dream career.",
  "If you could eat anything you wanted without getting fat, what would that food be?",
  "If you had to do a game show with someone in this room, who would you pick?",
  "Would you go a year without your phone if it meant you could marry the person of your dreams?",
  "You are going to be stuck on a desert island, and you can only bring five things. List them.",
  "If you could only wear one hairstyle for the rest of your life, would you choose curly hair or straight hair?",
  "You have to give up one makeup item for the rest of your life. What is it?",
  "Would you date someone shorter than you?",
  "If someone paid you $1000 to wear your bra outside your shirt, would you do it?",
  "Who would you hate to see naked?",
  "How long have you gone without a shower?",
  "If you could only text one person for the rest of your life, but you could never talk to that person face to face, who would that be?",
  "How long have you gone without brushing your teeth?",
  "What's one thing you would never eat on a first date?",
  "What have you seen that you wish you could unsee?",
  "If you could be reincarnated into anyone's body, who would you want to become?",
  "If you switched genders for the day, what would you do?",
  "What's one food that you will never order at a restaurant?",
  "What's the worst weather to be stuck outside in if all you could wear was a bathing suit?",
  "If your car broke down in the middle of the road, who in this room would be the last person you would call? Why?",
  "What's the most useless piece of knowledge you know?",
  "What did you learn in school that you wish you could forget?",
  "Is it better to use shampoo as soap or soap as shampoo?",
  "If you ran out of toilet paper, would you consider wiping with the empty roll?",
  "What would be the worst part about getting pantsed in front of your crush?",
  "If you could only use one swear word for the rest of your life, which one would you choose?",
  "What's the best thing to say to your friend that would be the worst thing to say to your crush?",
  "Who do you think is the sexiest here?",
  "Would you rather eat dog food or cat food?",
  "If you had nine lives, what would you do that you wouldn't do now?",
  "If you could play a prank on anyone without getting caught, who would you play it on?",
  "What would the prank be?",
  "Have you ever pretended to like a gift? How did you pretend?",
  "Would you rather not shower for a month, or eat the same meal every day for a month?",
  "What animal most closely resembles your eating style?",
  "If you could choose to never sweat for the rest of your life or never have to use the bathroom, which would you choose?",
  "If you could spend every waking moment with your gf or bf, would you?",
  "If your crush told you he liked your best friend, what would you do?",
  "What if your best friend told you that she liked your crush?",
  "If you knew your friend's boyfriend/girlfriend was cheating on her, what would you do?",
  "Have you ever told a lie about your best friend to make yourself look better?",
  "What was your first impression of [fill in the name of a person in the room]?",
  "If you had to date someone else's boyfriend/girlfriend, who would it be?",
  "Who's hotter? You or your friend?",
  "Have you ever shared your friend's secret with someone else?",
  "Rate everyone in the room from 1 to 10, with 10 being the hottest.",
  "Would you share a toothbrush with your best friend?",
  "Rate everyone in the room from 1 to 10, with 10 being the best personality.",
  "Have you ever ignored a friend's text? Why did you do it?",
  "Have you ever lied to your best friend?",
  "Would you let a friend cheat on a test?",
  "If your friend asked you to lie for her and you knew you would get in trouble, would you do it?",
  "If one of your friends were cheating with your other friend's boyfriend/girlfriend, what would you do?",
  "Would you ditch your friends if you could become the most popular girl in school?",
  "If you had to choose, who would you stop being friends with?",
  "Name one thing you would change about each person in this room.",
  "If you had to trade your friend in for the celebrity crush of your dreams, which friend would you choose?",
  "What was your first impression of your best friend's boyfriend/girlfriend?",
  "What do you think about him now?",
  "Have you ever thought about ditching your friend for a boy/girl?",
  "If someone asked you what your best friend is like, how would you describe her?",
  "You win a trip and are allowed to bring two people. Who do you pick?",
  "On an overnight trip, would you rather share a bed with your best friend or her boyfriend/girlfriend?",
  "If you could swap one physical feature with your best friend, what would that be?",
  "Have you ever told a secret you were told to keep?",
  "If your best friend had B.O., would you tell her?",
  "What is the most annoying thing about your best friend?",
  "Who do you think your friend should date instead of her current boyfriend/girlfriend?",
  "If she doesn't have a boyfriend/girlfriend, who do you think she should date?",
  "Do you think your friend's boyfriend/girlfriend is hot?",
  "Would you hook up with him if you knew she would never find out?",
  "Have you ever ditched your friend for a boy/girl?",
  "If your friend and your boyfriend/girlfriend were both dying in front of you, who would try to save first?",
  "Do you currently have a crush on anyone?",
  "Describe what your crush looks like.",
  "What is your crush's personality like?",
  "Is there anything about your life you would change?",
  "Who do you hate, and why?",
  "What's your biggest pet peeve?",
  "How many people have you kissed?",
  "What's your biggest turn-on?",
  "If you could date anyone in the world, who would you date?",
  "Would you rather be skinny and hairy or fat and smooth?",
  "Who would you ask to prom if you could choose anyone?",
  "Describe your perfect date.",
  "Would you ever date two people at once if you could get away with it?",
  "You have to delete every app on your except for five. Name the five you would keep.",
  "Have you ever sent out a nude Snapchat?",
  "Have you ever received a nude selfie? Who was it from?",
  "What was your reaction? Like or dislike?",
  "Have you ever gotten mad at a friend for posting an unflattering picture of you?",
  "Have you ever had a crush on a teacher?",
  "Who do you think would make the best kisser? (List a few people for them to choose.)",
  "Have you ever sent someone the wrong text?",
  "Have you ever cursed at your parents? Why?",
  "Who do you think is the cutest person in our class?",
  "What is the most attractive feature on a person?",
  "What the biggest deal-breaker for you?",
  "How far would you go on a first date?",
  "Have you ever regretted something you did to get a crush's attention?",
  "Would you ever be mean to someone if it meant you could save your close friend from embarrassment?",
  "Of the people at our school, who do you think would make the best president?",
  "If we didn't have a dress code, what would you wear to school that you can't wear now?",
  "Describe what makes someone husband or wife material.",
  "If you could make $1 million, would you drop out of school?",
  "What is your worst habit?",
  "What's one thing you do that you don't want anyone to know about?",
  "Do you frequently stalk anyone on social media? Who?",
  "If you had to choose between dating someone ugly who was good in bed or dating someone hot who was bad in bed, which would you choose?",
  "If you could be invisible, who would you spy on?",
  "Who are the top 5 hottest girls at our school? In our class?",
  "Who in this room would you make out with?",
  "If you could date one of your bro's girlfriends, who would it be?",
  "What your favorite body part?",
  "When was the last time you flexed in the mirror?",
  "Describe your perfect partner.",
  "Have you ever been in love?",
  "Blonde or brunette?",
  "What turns you on the most?",
  "If your parents hated your girlfriend, would you dump her?",
  "If your girlfriend hated your best friend, what would you do?",
  "Who is your biggest celebrity crush?",
  "Would you take steroids?",
  "Have you ever had a crush on a friend's girlfriend?",
  "Who are you jealous of?",
  "Who do you think is the hottest in our group?",
  "What is your biggest turn-off?",
  "Have you ever been rejected by someone?",
  "If you had to choose between being poor and smart or being rich and dumb, what would you choose?",
  "What have you lied to your partner about?",
  "Have you ever cheated on your partner?",
  "Would you go out with an older woman?",
  "Do you have a crush on someone from another school?",
  "Boxers or briefs?",
  "When was the last time you cried?",
  "Have you ever had a crush on a friend's girlfriend?",
  "If you could make out with someone else's girl, who would it be?",
  "If every time you checked out a girl's body, you would gain 5 pounds, how often would you do it?",
  "Have you ever lied about your age?",
  "Have you ever fallen in love at first sight?",
  "If a girl you didn't like had a crush on you, how would you act around her?",
  "What if she was your friend?",
  "What would you do if you found out your girlfriend liked someone else?",
  "If we formed a boy band, who here would make the best lead singer?",
  "Who do you want to make out with the most?",
  "If you had to flash just one person in this room, who would it be?",
  "If you haven't had your first kiss yet, who in this room do you want to have your first kiss with?",
  "Of the people in this room, who would you go out with?",
  "Describe the most attractive thing about each person in this room.",
  "Who here do you think is the best flirt?",
  "Who has the best smile?",
  "Who has the cutest nose?",
  "How about prettiest eyes?",
  "Who's the funniest in this room?",
  "What's one thing you would never do in front of someone you had a crush on?",
  "How often do you check yourself out in the mirror when you're on a date?",
  "Who here do you think would be the best kisser?",
  "Who has the best dance moves?",
  "If you could have one physical feature of someone in this room, what would that be?",
  "What is your wildest fantasy?",
  "How far would you go with someone you just met and will never see again?",
  "Rate me on a scale of 1 to 10, with 10 being the hottest.",
  "If I was a food, what would I be, and how would you eat me?",
  "Would you choose a wild, hot relationship or a calm and stable one?",
  "If you had one week to live and you had to marry someone in this room, who would it be?",
  "If you only had 24 hours to live and you could do anything with anyone in this room, who would it be and what would you do with that person?",
  "What's your biggest turn-on?",
  "And your biggest turn-off?",
  "Would you go out with me if I was the last person on earth?",
  "What's the most flirtatious thing you've ever done?",
  "What's the sexiest thing about [fill in the name of a person in the room]?",
  "If you could go on a romantic date with anyone in this room, who would you pick?",
  "If you had to delete one app from your phone, which one would it be?",
  "What is your greatest fear in a relationship?",
  "Go around the room and say one positive and one negative thing about each person.",
  "What is one disturbing fact I should know about you?",
  "Have you ever tried drugs?",
  "What's the craziest thing you've done while under the influence?",
  "If you were trapped for three days on an island, who are three people in this room you would bring with you and why?",
  "Would you go to a nude beach?",
  "Who's the most annoying person in this room?",
  "Are you still a virgin?",
  "If you had to marry someone in this room, who would it be?",
  "Do you have hidden piercings or tattoos?",
  "How long was your longest relationship?",
  "If you could have one celebrity follow you on Instagram, who would that be?",
  "You have to delete five people on Instagram. Name them.",
  "Do you want to get married one day?",
  "Do you want to have kids? How many?",
  "Would you ever get into a long-distance relationship?",
  "Describe the person of your dreams.",
  "What would you do if you found out you flunked school?",
  "If your girlfriend or boyfriend broke up with you at school, what would you do?",
  "If you had the power to fire one teacher, who would it be?",
  "Basketball, baseball, or football?",
  "What was your first job?",
  "If you don't have one yet, where would you want to work?",
  "How many hours would you spend online if you didn't have school or homework?",
  "How tall do you want to be?",
  "What's your biggest fear about college?",
  "What are you most excited about?",
  "Would you want your best friend to go to the same college as you?",
  "Would you want your current boyfriend or girlfriend to go to the same college as you?",
  "Who do you think is the hottest celebrity?",
  "What's your dream job?",
  "What was a rumor that went around about you?",
  "If you had the power to fire one person, who would that be?",
  "If you could plan a class prank knowing you'll never get caught, what would the prank be?",
  "Have you ever cheated on a test?",
  "Have you ever had a crush on a teacher? Who?",
  "Who would you take to prom?",
  "Have you ever made out at school?",
  "Who would you never ever want to sit next to in class?",
  "Have you ever been late to class?",
  "What's the most embarrassing thing you've ever done in front of a teacher?",
  "Have you ever stuck gum under a desk?",
  "What do you think is better: tests or essays?",
  "Have you ever eaten lunch by yourself? Why?",
  "If you had to take one class for the rest of your life, what class would it be, and who would the teacher be?",
  "If you wanted to make out here, with whom would you do it?",
  "Have you ever gotten into a fight on school grounds?",
  "What was the worst score you’ve ever gotten on a test?",
  "Have you ever fallen asleep in class?",
  "Have you ever gotten detention or been suspended?",
  "If you were invisible, would you sneak a peek in the other locker room? If so, who would you be hoping to see?",
  "Who's the hottest teacher at our school?",
  "What's the worst class to have first period?",
  "If you had to take a person from another grade to prom, who would that be?",
  "Have you ever flashed someone?",
  "Have you ever sexted anyone?",
  "Have you ever been to a nudist beach? Would you consider going?",
  "Would you ever consider posing for Playboy?",
  "Who has seen you without clothes on?",
  "Have you ever seen a naughty magazine?",
  "Have you ever sent a nude selfie? Who would you send it to?",
  "Have you ever searched for something dirty on the internet?",
  "Who do you most want to sleep with, out of everyone here?",
  "What's your favorite body part on your partner?",
  "How many people have you kissed?",
  "Have you ever been attracted to the same sex?",
  "When and where was your first kiss? Who was it with?",
  "When did you lose your virginity, and to whom did you lose it?",
  "What's your ultimate sexual fantasy?",
  "Would you go out with an older guy? How old is too old?",
  "Do you sleep in the nude?",
  "How much money would we have to pay you for you to agree to flash your boobs?",
  `Have you ever been in a "friends with benefits" situation?`,
  "If you had to go skinny dipping with someone, who in this room would you choose?",
  "If I paid you $100, would you wear your sexiest clothes to class?",
  "What was it like the first time someone went down on you?",
  "Have you ever been attracted to the same sex?",
  "What’s your self-love strategy?",
  "What’s the worst kiss you’ve ever been given?",
  "What is the most fun you’ve ever had in a romantic setting?",
  "What’s something romantic you’ve done that you’re most proud of?",
  "What’s your favorite body part on a guy?",
  "Have you ever had a wardrobe malfunction?",
  "Most embarrassing crush you’ve ever had?",
  "What was it like going down on someone the first time?",
  "Have you ever faked it? When? Can you re-create it?",
  "How do you like the taste when you go down on someone?",
  "What’s the hookup you regret the most?",
  "What’s the most embarrassing thing you’ve done in a relationship?",
  "How often do you trim down there?",
  "Have you ever gotten a bikini wax?",
  "Have you ever considered a threesome?",
  "Have you ever had a one night stand?",
  "What’s the most embarrassing thing that turns you on?",
  "When did you lose your virginity?",
  "Do you have any interesting fetishes?",
  "Have you ever been to a strip club?",
  "When did you go solo for the first time?",
  "What was the most powerful sexual experience you’ve ever had?",
  "What’s your favorite body part on a girl?",
  "Most embarrassing time you got turned on?",
  "Ever thought about the same sex?",
  "If you were into the same sex, which male celebrity would you go for?",
  "Ever wanted to try on women’s clothing?",
  "What is the dumbest thing you’ve ever done?",
  "Strangest off-limits crush?",
  "Ever cheated?",
  "Last time you cried?",
  "Have you ever made someone cry?",
  "One on one or the more the merrier?",
  "What is the craziest thing you’ve ever watched?",
  "What is one thing you’ve never done in the bedroom?",
  "Have you ever done it in a car?",
  "Have you ever given or been given ‘attention’ while driving a car?",
  "When it comes to lingerie, is less best, or leave something to unwrap?",
  "Are second rounds exciting or exhausting?",
  "Have you ever role played?",
  "What’s the worst lie you’ve ever told?",
  "What’s your worst substance story (getting drunk, high, etc.)?",
  "Do you have any spicy pictures or videos saved on your phone?",
  "How many people have seen you naked?",
  "What did you think of me when you first met me?",
  "What did you want to be when you grew up when you were 6?",
  "What is the dumbest thing I’ve ever said?",
  "When was your sexual awakening?",
  "Best purchase that you’ve made for $10 or less?",
  "What was your first sexual experience?",
  "What was your wildest sexual experience?",
  "If I went through your room, what would I be surprised to find?",
  "Your favorite place on your body to be kissed?",
  "Who do I remind you of?",
  "What’s something you want me to do for you?",
  "What’s something you want me to do to you?",
  "What’s the worst thought you’ve ever had?",
  "What’s the best news you’ve ever heard?",
  "What’s the worst thing you’ve ever done at work?",
];

function TruthOrDrink() {
  return (
    <ShowContainer
      tip={'Drink if cannot answer it!'}
      lottieFile={require('assets/animations/drink_on_beach.json')}
      dataSource={dataSource}
    />
  );
}

export default TruthOrDrink;
