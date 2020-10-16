import React from 'react';
import Social from "./Social";
export default function Footer() {
  return (
    <section id="footer">
      <div className="inner">
        <Social/>
        <div className="copyright">
          <div>&copy; 2020 Łukasz Woźniak. All rights reserved.</div>
          <div>Design inspired by: <a target="_blank" href="http://html5up.net">HTML5 UP</a>.</div>
          <div>Powered by: <a target="_blank" href="https://www.gatsbyjs.com/starters/anubhavsrivastava/gatsby-starter-solidstate">gatsby-starter-solidstate</a>.</div>
          <div>Background: <a target="_blank" href="https://www.pexels.com/@lum3n-44775?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels">Lum3n</a> from <a target="_blank" href="https://www.pexels.com">Pexels</a>.</div>
        </div>
      </div>
    </section>
  );
}
