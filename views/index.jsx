import React from 'react';
import DefaultLayout from './layouts/default';

export default class HelloMessage extends React.Component {
  static get propTypes() {
    return {
      name: React.PropTypes.string.isRequired,
      title: React.PropTypes.string.isRequired,
    };
  }

  render() {
    if (!this.props.name) {
      return null;
    }
    return (
      <DefaultLayout title={this.props.title}>
        <div>Hello {this.props.name}</div>;
      </DefaultLayout>
    );
  }
}
