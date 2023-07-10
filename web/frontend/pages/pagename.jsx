import {Card, Page, Layout, TextContainer, Heading} from '@shopify/polaris';
import {TitleBar} from '@shopify/app-bridge-react';
import {useAppQuery} from '../hooks/useAppQuery';

export default function PageName() {
  const {data: products, error} = useAppQuery({
    url: `/api/products`
  });

  console.log('products', products);
  console.log('error', error);

  return (
    <Page>
      <TitleBar
        title="Page name"
        primaryAction={{
          content: 'Primary action',
          onAction: () => console.log('Primary action')
        }}
        secondaryActions={[
          {
            content: 'Secondary action',
            onAction: () => console.log('Secondary action')
          }
        ]}
      />
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <Heading>Heading</Heading>
            <TextContainer>
              <p>Body</p>
            </TextContainer>
          </Card>
          <Card sectioned>
            <Heading>Heading</Heading>
            <TextContainer>
              <p>Body</p>
            </TextContainer>
          </Card>
        </Layout.Section>
        <Layout.Section secondary>
          <Card sectioned>
            <Heading>Heading</Heading>
            <TextContainer>
              <p>Body</p>
            </TextContainer>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
