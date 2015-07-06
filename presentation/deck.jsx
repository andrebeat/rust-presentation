import React from "react/addons";

import {
    Appear, BlockQuote, Cite, CodePane, Code, Deck, Fill, Fit,
    Heading, Image, Layout, Link, ListItem, List, Quote, S, Slide, Text
} from '../src/spectacle';

export default class extends React.Component {
    render() {
        return (
            <Deck transition={['zoom','slide']} transitionDuration={800}>
              <Slide transition={['zoom']}>
                <Text textSize="1.5em" margin="20px 0px 0px" bold>Hit Your Right Arrow To Begin!</Text>
              </Slide>
              <Slide transition={['fade']}>
                <Heading caps textAlign="left">Index</Heading>
                <List>
                  <Appear><ListItem>Problem and Solution</ListItem></Appear>
                  {/*why it was created, comparison to C++ + ML*/}
                  <Appear><ListItem>Hello World!</ListItem></Appear>
                  {/*hello world program*/}
                  <Appear><ListItem>General Overview</ListItem></Appear>
                  {/*general language features overview*/}
                  <Appear><ListItem>Linked-list example</ListItem></Appear>
                  {/*simple, showcases stack allocation vs heap allocation. show traits example?*/}
                  <Appear><ListItem>Borrowing & Ownership</ListItem></Appear>
                  {/*various sharing models, comparison to C++ bugs*/}
                  <Appear><ListItem>For another talk</ListItem></Appear>
                  <List padding="0% 4%" textSize="0.8em">
                    <Appear><ListItem>Concurrency</ListItem></Appear>
                    {/*very brief explanation of the benefits of the ownership model*/}
                    <Appear><ListItem>C Interoperability</ListItem></Appear>
                    {/*both ways*/}
                    <Appear><ListItem>Cargo</ListItem></Appear>
                    {/*package manager*/}
                  </List>
                </List>
              </Slide>
              <Slide transition={['zoom', 'fade']} bgColor="primary">
                <Heading caps fit>Flexible Layouts</Heading>
                <Layout>
                  <Fill>
                    <Heading size={4} caps textColor="primary" bgColor="secondary" margin={10}>
                      Left
                    </Heading>
                  </Fill>
                  <Fill>
                    <Heading size={4} caps textColor="primary" bgColor="secondary" margin={10}>
                      Right
                    </Heading>
                  </Fill>
                </Layout>
              </Slide>
            </Deck>
        )
    }
}
