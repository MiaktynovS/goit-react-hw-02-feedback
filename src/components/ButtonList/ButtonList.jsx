import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ButtonList.module.css';

export default class ButtonList extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return <ul className={s.list}>{this.props.children}</ul>;
  }
}