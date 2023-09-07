import React from 'react';
import {Link} from 'react-router-dom';

const MakgoraBar = () => {
  return (
    <section className="makgoraBar">
      <Link className="button button--primary button--link" to="/makgora">Mak'gora.live</Link>
    </section>
  );
};

export default MakgoraBar;