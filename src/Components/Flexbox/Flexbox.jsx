import React from "react";

export default function Flexbox(props) {
    const styles = Object.assign({
        display: 'flex'
    }, props);
    delete styles.children
  return <span style={styles}>{props.children}</span>;
}
