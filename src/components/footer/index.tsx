import React from 'react';
import { Section, Spacer } from '../layout';
import { Heading, Text } from '../typography';
import { Link } from 'react-router-dom';
import environment from '../../util/environment';
import FontawesomeIcon from '../font-awesome-icon';

const Footer = () => (
  <footer style={{ flexShrink: 0 }}>
    <Spacer height="40px" />
    <Section
      className="has-background-primary"
      style={{
        position: 'relative',
        bottom: '0',
        left: '0',
        width: '100%',
      }}
    >
      <Heading size={2} align="left" color="white">
        Camalia fine things
      </Heading>
      <Text
        fontSize={2}
        align="left"
        color="white"
        style={{ textDecoration: 'underline' }}
      >
        <a
          href={environment.db_URL + '/admin'}
          target="_blank"
          style={{ color: 'white' }}
        >
          <FontawesomeIcon
            icon="user-lock"
            style={{ color: 'white', marginRight: '10px' }}
          />
          Supplier login
        </a>
      </Text>
      <Text fontSize={1} align="left" color="white">
        Website created and maintained by Abri Grobler. &copy; 2020 - 2021.
      </Text>
    </Section>
  </footer>
);

export default Footer;
