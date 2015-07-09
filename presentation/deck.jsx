import React from "react/addons";

import {
    Appear, BlockQuote, Cite, CodePane, Code, Deck, Fill, Fit,
    Heading, Image, Layout, Link, ListItem, List, Quote, S, Slide, Text
} from '../src/spectacle';

export default class extends React.Component {
    render() {
        return (
            <Deck transition={['slide', 'fade']} transitionDuration={600}>
              <Slide>
                <Heading>Rust</Heading>
                <Heading size="3">Safe Systems Programming</Heading>
                <Text>André Silva @ ShiftForward</Text>
              </Slide>

              <Slide>
                <Heading>Goal</Heading>
                <Heading size="2" fit>Safe Systems Programming</Heading>
                <List>
                  <ListItem>Low-level systems programming</ListItem>
                  <ListItem>With high-level abstractions</ListItem>
                  <ListItem>Strong type system to "guarantee" safety</ListItem>
                </List>
              </Slide>

              <Slide>
                <Heading>Origins</Heading>
                <Heading size="4">Developed by Mozilla</Heading>
                <List>
                  <ListItem>Browsers need <S type="bold">control</S></ListItem>
                  <ListItem>Browsers need <S type="bold">safety</S></ListItem>
                  <ListItem><S type="bold">Servo</S>: Next-generation browser built in Rust</ListItem>
                </List>
              </Slide>

              <Slide>
                <Heading>Core Idea</Heading>
                <Heading size="2"><S type="strikethrough">Mutation + Aliasing</S></Heading>
                <List>
                  <ListItem>Having a value of type <S type="italic">T&nbsp;</S> means you "own" it</ListItem>
                  <ListItem><S type="italic">T&nbsp;</S> can be "borrowed":</ListItem>
                  <List padding="0% 4%" textSize="0.9em">
                    <ListItem><S type="italic bold">&T&nbsp;</S> - shared, immutable borrow</ListItem>
                    <ListItem><S type="italic bold">&mut T&nbsp;</S> - unique, mutable borrow</ListItem>
                  </List>
                </List>
              </Slide>

              <Slide>
                <Heading>Control</Heading>
                <List padding="0% 20%">
                  <ListItem><S type="bold">Stack</S> vs <S type="bold">Heap</S> allocation</ListItem>
                  <ListItem>Deterministic destruction</ListItem>
                  <List padding="0% 5%">
                    <ListItem>No tracing <S type="bold">GC</S></ListItem>
                  </List>
                </List>
              </Slide>

              <Slide>
                <Heading>Safety</Heading>
                <CodePane lang="c++"
                          source={require("raw!./code/intro/dangling1.cpp")}
                          margin="20px auto"/>
              </Slide>
              <Slide>
                <Heading>Safety</Heading>
                <CodePane lang="c++"
                          source={require("raw!./code/intro/dangling2.cpp")}
                          margin="20px auto"/>
              </Slide>
              <Slide>
                <Heading>Safety</Heading>
                <CodePane lang="rust"
                          source={require("raw!./code/intro/dangling1.rs")}
                          margin="20px auto"/>
              </Slide>
              <Slide>
                <Heading>Safety</Heading>
                <CodePane lang="rust"
                          source={require("raw!./code/intro/dangling2.rs")}
                          margin="20px auto"/>
              </Slide>
              <Slide>
                <Heading>Safety</Heading>
                <CodePane lang="c++"
                          source={require("raw!./code/intro/useafterfree1.cpp")}
                          margin="20px auto"/>
              </Slide>
              <Slide>
                <Heading>Safety</Heading>
                <CodePane lang="rust"
                          source={require("raw!./code/intro/useafterfree1.rs")}
                          margin="20px auto"/>
              </Slide>
              <Slide>
                <Heading>Safety</Heading>
                <CodePane lang="rust"
                          source={require("raw!./code/intro/useafterfree2.rs")}
                          margin="20px auto"/>
              </Slide>

              <Slide>
                <Heading>Bindings</Heading>
                <CodePane lang="rust"
                          source={require("raw!./code/basics/bindings.rs")}
                          margin="20px auto"/>
              </Slide>

              <Slide>
                <Heading>Looping</Heading>
                <CodePane lang="rust"
                          source={require("raw!./code/basics/looping.rs")}
                          margin="20px auto"/>
              </Slide>

              <Slide>
                <Heading>Data Types</Heading>
                <CodePane lang="rust"
                          source={require("raw!./code/basics/datatypes.rs")}
                          margin="20px auto"/>
              </Slide>

              <Slide>
                <Heading>Pattern Matching</Heading>
                <CodePane lang="rust"
                          source={require("raw!./code/basics/pattern_matching.rs")}
                          margin="20px auto"/>
              </Slide>

              <Slide>
                <Heading>Method Syntax</Heading>
                <CodePane lang="rust"
                          source={require("raw!./code/basics/methods.rs")}
                          margin="20px auto"/>
              </Slide>

              <Slide>
                <Heading>Generics</Heading>
                <CodePane lang="rust"
                          source={require("raw!./code/basics/generics.rs")}
                          margin="20px auto"/>
              </Slide>

              <Slide>
                <Heading>Traits</Heading>
                <Text>...read typeclasses.</Text>
                <CodePane lang="rust"
                          source={require("raw!./code/basics/traits.rs")}
                          margin="20px auto"/>
              </Slide>

              <Slide>
                <Heading>Ownership</Heading>
                <CodePane lang="rust"
                          source={require("raw!./code/basics/ownership1.rs")}
                          margin="20px auto"/>
              </Slide>

              <Slide>
                <Heading>Borrowing</Heading>
                <CodePane lang="rust"
                          source={require("raw!./code/basics/borrowing1.rs")}
                          margin="20px auto"/>
              </Slide>

              <Slide>
                <Heading>Borrowing</Heading>
                <CodePane lang="rust"
                          source={require("raw!./code/basics/borrowing2.rs")}
                          margin="20px auto"/>
              </Slide>

              <Slide>
                <Heading>Borrowing</Heading>
                <CodePane lang="rust"
                          source={require("raw!./code/basics/borrowing3.rs")}
                          margin="20px auto"/>
              </Slide>

              <Slide>
                <Heading>Lifetimes</Heading>
              </Slide>

              <Slide>
                <Heading>Heap Allocation</Heading>
                <CodePane lang="rust"
                          source={require("raw!./code/basics/heap.rs")}
                          margin="20px auto"/>
              </Slide>

              <Slide>
                <Heading>Linked List</Heading>
                <Text>...as seen in basically every functional language.</Text>
                <CodePane lang="rust"
                          source={require("raw!./code/list/1.rs")}
                          margin="20px auto"/>
              </Slide>

              <Slide>
                <Heading>Linked List</Heading>
                <Text>...it doesn't work.</Text>
                <CodePane lang="rust"
                          source={require("raw!./code/list/2.rs")}
                          margin="20px auto"/>
              </Slide>

              <Slide>
                <Heading>Linked List</Heading>
                <Text>...indirection solves the problem.</Text>
                <CodePane lang="rust"
                          source={require("raw!./code/list/3.rs")}
                          margin="20px auto"/>
              </Slide>

              <Slide>
                <Heading>Linked List</Heading>
                <Text>...let's add some methods.</Text>
                <CodePane lang="rust"
                          source={require("raw!./code/list/4.rs")}
                          margin="20px auto"/>
              </Slide>

              <Slide>
                <Heading>Linked List</Heading>
                <Text>...what about iterators?</Text>
                <CodePane lang="rust"
                          source={require("raw!./code/list/5.rs")}
                          margin="20px auto"/>
              </Slide>

              <Slide>
                <Heading>Linked List</Heading>
                <Text>...what about iterators?</Text>
                <CodePane lang="rust"
                          source={require("raw!./code/list/6.rs")}
                          margin="20px auto"/>
              </Slide>

              <Slide>
                <Heading>Linked List</Heading>
                <Text>...what about iterators?</Text>
                <CodePane lang="rust"
                          source={require("raw!./code/list/7.rs")}
                          margin="20px auto"/>
              </Slide>

              <Slide>
                <Heading>Linked List</Heading>
                <Text>...what about iterators?</Text>
                <CodePane lang="rust"
                          source={require("raw!./code/list/8.rs")}
                          margin="20px auto"/>
              </Slide>

              <Slide>
                <Heading>For another talk</Heading>
                <List padding="0% 15%">
                  <ListItem>Concurrency</ListItem>
                  {/*very brief explanation of the benefits of the ownership model*/}
                  <ListItem>Collections</ListItem>
                  {/*package manager*/}
                  <ListItem>Macros</ListItem>
                  {/*very brief explanation of the benefits of the ownership model*/}
                  <ListItem><S type="italic">Unsafe</S></ListItem>
                  {/*the escape hatch*/}
                  <ListItem>C Interoperability</ListItem>
                  {/*both ways*/}
                  <ListItem>Cargo</ListItem>
                  {/*package manager*/}
                </List>
              </Slide>

              <Slide>
                <Heading>References</Heading>
                <List padding="0% 15%">
                  <ListItem><Link href="https://doc.rust-lang.org/book/">The Rust Programming Language</Link></ListItem>
                  <ListItem><Link href="http://rustbyexample.com/">Rust by Example</Link></ListItem>
                  <ListItem><Link href="https://www.youtube.com/watch?v=O5vzLKg7y-k">Stanford Seminar - Aaron Turon of Mozilla</Link></ListItem>
                </List>
              </Slide>
            </Deck>
        )
    }
}
