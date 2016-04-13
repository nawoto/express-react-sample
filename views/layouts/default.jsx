import React from 'react';

export default class DefaultLayout extends React.Component {
  static get propTypes() {
    return {
      title: React.PropTypes.string.isRequired,
      children: React.PropTypes.node.isRequired,
    };
  }

  render() {
    if (!this.props.title || !this.props.children) {
      return null;
    }
    return (
      <html>
        <head><title>{this.props.title}</title></head>
        <body>{this.props.children}</body>
      </html>
    );
  }
}
