import React from 'react';
import { string } from 'prop-types';
import { Heading, Stack } from '@chakra-ui/core';
import './PageTitle.scss';

const propTypes = {
  title: string.isRequired,
  subtitle: string,
};

const defaultProps = {
  subtitle: '',
};

const PageTitle = ({ title, subtitle }) => (
  <div className="page-title">
    <Stack spacing={1}>
      <Heading as="h1" size="xl">
        {title}
      </Heading>
      <Heading as="h3" size="l" className="subtitle">
        {subtitle}
      </Heading>
    </Stack>
  </div>
);

PageTitle.propTypes = propTypes;
PageTitle.defaultProps = defaultProps;

export default PageTitle;
