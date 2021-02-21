import React from "react";
import Link from "next/link";

const styles = {
  content: {
    padding: `4px 32px 32px 32px`,
    background: "#eeeeee",
    display: "inline-block",
  },
  linkAnchor: {
    color: "teal",
    display: "block",
    lineHeight: "160%",
  },
};

const DemoPageLinks = () => (
  <div style={styles.content}>
    <h4>Examples</h4>
    <div>
      <Link href="/">
        <a style={styles.linkAnchor}>Home</a>
      </Link>
      <Link href="/example-loged">
        <a style={styles.linkAnchor}>Example Loged</a>
      </Link>
    </div>
  </div>
);

DemoPageLinks.displayName = "DemoPageLinks";

export default DemoPageLinks;
