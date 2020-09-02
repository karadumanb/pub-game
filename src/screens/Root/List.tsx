import { Container, Tab, List, Tabs as NativaTabs } from 'native-base';
import React from 'react';
import FadeIn from 'src/components/animations/FadeIn';
import Loading from 'src/components/general/Loading';
import Colors from 'src/core/Colors';
import ListItem from 'src/modules/list/Item';
import TabOptions from './tabs.json';

const response = [{
  name: 'Mingler',
}, {
  name: 'Mingler',
}]


const Tabs = () => {

  const getTabContent = (tab: string) => {
    switch (tab) {
      case 'tab1':
        return (
          <FadeIn factor={0.2}>
            <List
              dataArray={response}
              keyExtractor={(_, index: number) => index.toString()}
              renderRow={(item, index) => {
                return (
                  <ListItem key={`item-${index}`} data={item} />
                )
              }} />
          </FadeIn>
        )

      default:
        return (
          <FadeIn factor={0.2}>
            <List
              dataArray={response}
              keyExtractor={(_, index: number) => index.toString()}
              renderRow={(item, index) => {
                return (
                  <ListItem key={`item-${index}`} data={item} />
                )
              }} />
          </FadeIn>
        )
    }
  }

  return (
    <Container>
      <NativaTabs tabBarUnderlineStyle={{ backgroundColor: Colors.light.white }}>
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
      </NativaTabs>
    </Container >
  );
}

export default Tabs
