import React from 'react';
import { string } from 'prop-types';
import { Heading } from '@chakra-ui/core';
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
    <Heading>{title}</Heading>

  </div>
);

PageTitle.propTypes = propTypes;
PageTitle.defaultProps = defaultProps;

export default PageTitle;
