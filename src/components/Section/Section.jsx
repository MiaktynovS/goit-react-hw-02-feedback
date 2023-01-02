import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Section.module.css';

export default class Section extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div>
        <h2 className={s.title}>{this.props.title}</h2>
        {this.props.children}
      </div>
    );
  }
}