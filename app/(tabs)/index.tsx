import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import { Button } from '@ui-kitten/components';
const HomeScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>HOME</Text>
    <Button>
      <Text category='h5'>Go to Explore</Text>
    </Button>
  </Layout>
);

export default HomeScreen;

