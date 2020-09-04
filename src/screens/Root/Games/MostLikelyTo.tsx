import React from 'react';
import ShowContainer from 'src/modules/game/ShowContainer';

const dataSource = [
  "Who is most likely to win the lottery?",
  "Who is most likely to be a supermodel?",
  "Who is most likely to be a drama queen?",
  "Who is most likely to cry in a public place?",
  "Who is most likely to cry because of a sad movie?",
  "Who is most likely to have the most children?",
  "Who is most likely to be the best liar?",
  "Who is most likely to laugh at the wrong moment?",
  "Who is most likely to die of something stupid?",
  "Who is most likely to be the most caring?",
  "Who is most likely to do the plastic surgery?",
  "Who is most likely to try a threesome?",
  "Who is most likely to forget important birthdays?",
  "Who is most likely to take care of the others when they are sick?",
  "Who is most likely to fall in love with his/her best friend?",
];

function MostLikelyTo() {
  return (
    <ShowContainer
      tip={"Think of someone in the room who is most likely to do the statement. If you don't choose the same person you both drink!"}
      lottieProps={{ source: require('assets/animations/sickness.json'), speed: 1, loop: true }}
      dataSource={dataSource}
    />
  );
}

export default MostLikelyTo;
