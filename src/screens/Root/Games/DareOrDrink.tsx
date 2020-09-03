import React from 'react';
import ShowContainer from 'src/modules/game/ShowContainer';

const dataSource = [
  "Never have I ever shoplifted.",
  "Never have I ever fainted.", "Never have I ever hitchhiked.",
  "Never have I ever been arrested.",
  "Never have I ever gone surfing.",
  "Never have I ever been electrocuted.",
  "Never have I ever gotten stitches.",
  "Never have I ever gone hunting.",
  "Never have I ever gone vegan.",
  "Never have I ever bungee jumped.",
  "Never have I ever ridden an animal.",
  "Never have I ever broken a bone.",
  "Never have I ever shot a gun.",
  "Never have I ever dined and dashed.",
  "Never have I ever chipped a tooth.",
  "Never have I ever gone scuba diving.",
  "Never have I ever ruined someone else’s vacation.",
  "Never have I ever jumped from a roof.",
  "Never have I ever been caught cheating on a test.",
  "Never have I ever had a paranormal experience.",
  "Never have I ever been caught sneaking into a movie.",
  "Never have I ever danced in an elevator.",
  "Never have I ever had a treehouse.",
  "Never have I ever worn glasses with fake lenses.",
  "Never have I ever been on a fad diet.",
  "Never have I ever been to a fashion show.",
  "Never have I ever stolen something from a restaurant.",
  "Never have I ever had a bad allergic reaction.",
  "Never have I ever woken up and couldn’t move.",
  "Never have I ever been trapped in an elevator.",
  "Never have I ever texted for four hours straight.",
  "Never have I ever taken part in a talent show.",
  "Never have I ever walked for more than eight hours straight.",
  "Never have I ever tried to cut my own hair.",
  "Never have I ever been to a country in Africa.",
  "Never have I ever thought I was going to drown.",
  "Never have I ever worked at a fast-food restaurant.",
  "Never have I ever fallen in love at first sight.",
  "Never have I ever sung karaoke in front of people.",
  "Never have I ever been on TV or the radio.",
  "Never have I ever been awake for two days straight.",
  "Never have I ever thrown up on a roller coaster.",
  "Never have I ever accidentally sent someone to the hospital.",
  "Never have I ever dyed my hair a crazy color.",
  "Never have I ever fallen into a hole deeper than I was tall.",
  "Never have I ever been to a country in Asia.",
  "Never have I ever had to run to save my life.",
  "Never have I ever made money by performing on the street.",
  "Never have I ever seen an alligator or crocodile in the wild.",
  "Never have I ever completely forgot my lines in a play.",
  "Never have I ever had a surprise party thrown for me.",
  "Never have I ever accidentally said “I love you” to someone.",
  "Never have I ever pressed send and then immediately regretted it.",
  "Never have I ever had a crush on a friend’s parent.",
  "Never have I ever had someone slap me across the face.",
  "Never have I ever cried in public because of a song.",
  "Never have I ever read a whole novel in one day.",
  "Never have I ever pressured someone into getting a tattoo or piercing.",
  "Never have I ever looked through someone else’s phone without their permission.",
  "Never have I ever had a physical fight with my best friend.",
  "Never have I ever thrown something into a TV or computer screen.",
  "Never have I ever walked out of a movie because it was bad.",
  "Never have I ever been so sunburnt I couldn’t wear a shirt.",
  "Never have I ever been screamed at by a customer at my job.",
  "Never have I ever spent a night in the woods with no shelter.",
  "Never have I ever taken food out of a trash can and eaten it.",
  "Never have I ever cried/flirted my way out of a any ticket.",
  "Never have I ever snooped through a friend’s bathroom or bedroom without them knowing.",
  "Never have I ever set my or someone else’s hair on fire on purpose.",
  "Never have I ever had a bad fall because I was walking and texting.",
  "Never have I ever been in an embarrassing video that was uploaded to YouTube.",
  "Never have I ever broken something at a friend’s house and then not told them.",
  "Never have I ever been without heat for a winter or without A/C for a summer.",
  "Never have I ever worked with someone I hated with the burning fire of a thousand suns.",
  "Never have I ever injured myself while trying to impress a girl or boy I was interested in.",
  "Never have I ever thought of having sex with someone in this very room.",
  "Never have I ever lied about a family member dying as an excuse to get out of doing something."
];

function DareOrDrink() {

  return (
    <ShowContainer
      tip={"Drink if you don't dare"}
      lottieFile={require('assets/animations/hamster.json')}
      dataSource={dataSource}
    />
  );
}

export default DareOrDrink;
