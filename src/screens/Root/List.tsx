import { Container, Tab, List, Tabs as NativaTabs } from 'native-base';
import React from 'react';
import Loading from 'src/components/general/Loading';
import Colors from 'src/core/Colors';
import ListItem from 'src/modules/list/Item';
import TabOptions from './tabs.json';

const Tabs = () => {
  const loading = false;
  const response = ['First', 'Second'];
  return (
    <Container>
      <NativaTabs tabBarUnderlineStyle={{ backgroundColor: 'white' }}>
        {
          Object.keys(TabOptions).map((tab: string) => {
            return (
              <Tab
                key={tab}
                tabStyle={{ backgroundColor: Colors.light.primary }}
                activeTabStyle={{ backgroundColor: Colors.light.primary }}
                textStyle={{ color: 'white' }}
                activeTextStyle={{ color: 'white' }}
                //@ts-ignore
                heading={TabOptions[tab].name}>
                <Container>
                  {loading && <Loading loading={loading} />}
                  {
                    !loading && (
                      <List
                        dataArray={response}
                        keyExtractor={(_, index: number) => index.toString()}
                        renderRow={(item, index) => {
                          return (
                            <ListItem key={`item-${index}`} data={item} />
                          )
                        }} />
                    )
                  }
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
