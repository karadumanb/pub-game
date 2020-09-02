import { Body, Button, Card, CardItem, Icon, Left, Text, Thumbnail } from 'native-base';
import React from 'react';
import { Image } from 'react-native';

const GameCard = ({ game }: { game: IGame }) => {
  const { image_url, title, description } = game;

  const source = image_url ? image_url :  'Image';

  return (
    <Card style={{ flex: 0 }}>
      <CardItem>
        <Left>
          <Thumbnail source={source} />
          <Body>
            <Text>{title}</Text>
            <Text note>Check it out</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem>
        <Body>
          <Image source={source} style={{ height: 300, width: '100%', flex: 1 }} />
          <Text>
            {description}
          </Text>
        </Body>
      </CardItem>
      <CardItem>
        <Left>
          <Button transparent textStyle={{ color: '#87838B' }}>
            <Icon name="star" />
            <Text>5 stars</Text>
          </Button>
        </Left>
      </CardItem>
    </Card>
  );
}

export default GameCard;
