import React from 'react';
import { AboutUI, Placeholder, Text } from './style';
import PlaceholderLogo from '../../assets/perfil.jpeg';

const About = () => (
  <AboutUI>
    <Text>
      <h2>About me</h2>
      <span></span>
      <p>Doloremque consequatur excepturi molestiae fugiat optio veritatis ea quas. Ex dolore sequi quia numquam et nostrum. Aut accusamus quia odio consequatur ea aspernatur a. Quos assumenda qui delectus optio.
      </p>
      <p>Doloremque consequatur excepturi molestiae fugiat optio veritatis ea quas. Ex dolore sequi quia numquam et nostrum. Aut accusamus quia odio consequatur ea aspernatur a. Quos assumenda qui delectus optio.
      </p>
      <p>Doloremque consequatur excepturi molestiae fugiat optio veritatis ea quas. Ex dolore sequi quia numquam et nostrum. Aut accusamus quia odio consequatur ea aspernatur a. Quos assumenda qui delectus optio.
      </p>
      <p>"telmtlemltmelm lsdamlm lsa mtleml te"</p>
    </Text>
    <Placeholder>
      <img src={PlaceholderLogo} alt="Júlio V Melo" />
    </Placeholder>
  </AboutUI>
);

export default About;
