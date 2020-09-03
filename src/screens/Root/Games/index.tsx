import { Container, List, Tab, Tabs as NativeTabs } from 'native-base';
import React from 'react';
import { Text } from 'src/components/display/Themed';
import Colors from 'src/core/Colors';
import GameCard from 'src/modules/game/Card';
import GameListItem from 'src/modules/game/ListItem';
import TabOptions from './tabs.json';

const response: IGame[] = [{
  prominent: true,
  title: 'Mingler',
  image_url: require('assets/images/mingle.jpg'),
  description: 'The person who mingles the best will win the game! You need to play each game as many people as you can. Find random person in the room. After you match the game will automatically start.',
  sub_title: 'One of the most popular',
  type: 'never_have'
}, {
  prominent: false,
  title: 'Never Have I Ever',
  image_url: require('assets/images/deamon.jpg'),
  description: 'No points! Just to break the ice!',
  sub_title: 'Ice breaker',
  type: 'never_have'
}, {
  prominent: false,
  title: 'Truth or Drink',
  image_url: require('assets/images/deamon.jpg'),
  description: "If you cannot answer the tough question, do a shot!",
  sub_title: 'Ice breaker',
  type: 'never_have'
}, {
  prominent: false,
  title: 'Dare or Drink',
  image_url: require('assets/images/deamon.jpg'),
  description: "If you don't dare, do a shot!",
  sub_title: 'Ice breaker',
  type: 'never_have'
}];

const GameIndex = () => {

  const getTabContent = (tab: string) => {
    switch (tab) {
      case 'tab1':
        return (
          <List
            dataArray={response}
            keyExtractor={(_, index: number) => index.toString()}
            renderRow={(item, index) => {
              return item.prominent ? (
                <GameCard key={`item-${index}`} game={item} />
              ) : (
                  <GameListItem key={`item-${index}`} game={item}  />
                )
            }} />
        );

      default:
        return (
          <Text>
            Score Table
          </Text>
        );
    }
  }

  return (
    <Container>
      <NativeTabs tabBarUnderlineStyle={{ backgroundColor: Colors.light.white }}>
        {
          Object.keys(TabOptions).map((tab: string) => {
            return (
              <Tab
                key={tab}
                tabStyle={{ backgroundColor: Colors.light.primary }}
                activeTabStyle={{ backgroundColor: Colors.light.primary }}
                textStyle={{ color: Colors.light.white, opacity: 0.7 }}
                activeTextStyle={{ color: Colors.light.white, opacity: 1 }}
                heading={TabOptions[tab as keyof typeof TabOptions].name}>
                <Container>
                  {getTabContent(tab)}
                </Container>
              </Tab>
            )
          })
        }
      </NativeTabs>
    </Container >
  );
}

export default GameIndex;
