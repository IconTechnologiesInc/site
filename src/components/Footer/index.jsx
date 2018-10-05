import React from 'react'
import { Footer, Container, Content, Columns, Column, Icon } from 'bloomer'

const AppFooter = () => (
  <Footer id="footer">
    <Container>
      <Content>
        <Columns>
          <Column>
            <p>
              Made with<Icon hasTextColor="danger" className="fa fa-heart" />
              at <a href="https://cethyworks.io">cethyworks.io</a>
            </p>
          </Column>
        </Columns>
        <Content isSize="small">
          <p>The source code is licensed under MIT.</p>
          <p>The website content is licensed under CC ANS 4.0.
          </p>
        </Content>
      </Content>
    </Container>
  </Footer>
)

export default AppFooter
