import { Body, Button, Card, CardItem, Icon, Left, Right, Text, Thumbnail } from 'native-base';
import React from 'react';
import { Image } from 'react-native';

const GameCard = ({ game }: { game: IGame }) => {
  const { image_url, title, description, sub_title } = game;

  const source = image_url ? image_url : 'Image';

  return (
    <Card style={{ flex: 0 }}>
      <CardItem>
        <Left>
          <Thumbnail source={source} />
          <Body>
            <Text>{title}</Text>
            <Text note>{sub_title}</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem>
        <Body>
          <Image source={source} style={{ height: 300, width: '100%', flex: 1 }} />
          <Text style={{ marginTop: 10 }}>
            {description}
          </Text>
        </Body>
      </CardItem>
      <CardItem>
        <Left>
          <Button iconLeft transparent small>
            <Icon name="eye" />
            <Text>Details</Text>
          </Button>
        </Left>
        <Right>
          <Button iconLeft primary small>
            <Icon name="play" />
            <Text>Play</Text>
          </Button>
        </Right>
      </CardItem>
    </Card>
  );
}

export default GameCard;
