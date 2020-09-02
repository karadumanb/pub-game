import { Container, Tab, List, Tabs as NativeTabs } from 'native-base';
import React from 'react';
import { ScrollView } from 'react-native';
import FadeIn from 'src/components/animations/FadeIn';
import Colors from 'src/core/Colors';
import GameCard from 'src/modules/game/Card';
import TabOptions from './tabs.json';

const response: IGame[] = [{
  title: 'Mingler',
  image_url: undefined,
  description: 'The person who mingles the best will win the game!'
}, {
  title: 'Crime',
  image_url: undefined,
  description: 'The person who solves the crime will win the game!'
}];

const Tabs = () => {

  const getTabContent = (tab: string) => {
    switch (tab) {
      case 'tab1':
        return (
          <List
            dataArray={response}
            keyExtractor={(_, index: number) => index.toString()}
            renderRow={(item, index) => {
              return (
                <GameCard key={`item-${index}`} game={item} />
              )
            }} />
        )

      default:
        return (
          <List
            dataArray={response}
            keyExtractor={(_, index: number) => index.toString()}
            renderRow={(item, index) => {
              return (
                <GameCard key={`item-${index}`} game={item} />
              )
            }} />
        )
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

export default Tabs
