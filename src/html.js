import React, {Component} from "react";
import apple57 from '../img/ico/apple-icon-57x57.png';
import apple60 from '../img/ico/apple-icon-60x60.png';
import apple72 from '../img/ico/apple-icon-72x72.png';
import apple76 from '../img/ico/apple-icon-76x76.png';
import apple114 from '../img/ico/apple-icon-114x114.png';
import apple120 from '../img/ico/apple-icon-120x120.png';
import apple144 from '../img/ico/apple-icon-144x144.png';
import apple152 from '../img/ico/apple-icon-152x152.png';
import apple180 from '../img/ico/apple-icon-180x180.png';
import android192 from '../img/ico/android-icon-192x192.png';
import fav32 from '../img/ico/favicon-32x32.png';
import fav96 from '../img/ico/favicon-96x96.png';
import fav16 from '../img/ico/favicon-16x16.png';

export default class HTML extends Component {
  render() {
    
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name='theme-color' content='#212936'/>
          {this.props.headComponents}
          
          
	        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
          <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet"/>
          
          <link rel="stylesheet" href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"/>
          <link rel="apple-touch-icon" sizes="57x57" href={apple57} />
          <link rel="apple-touch-icon" sizes="60x60" href={apple60} />
          <link rel="apple-touch-icon" sizes="72x72" href={apple72} />
          <link rel="apple-touch-icon" sizes="76x76" href={apple76} />
          <link rel="apple-touch-icon" sizes="114x114" href={apple114} />
          <link rel="apple-touch-icon" sizes="120x120" href={apple120} />
          <link rel="apple-touch-icon" sizes="144x144" href={apple144} />
          <link rel="apple-touch-icon" sizes="152x152" href={apple152} />
          <link rel="apple-touch-icon" sizes="180x180" href={apple180} />
          <link rel="icon" type="image/png" sizes="192x192"  href={android192} />
          <link rel="icon" type="image/png" sizes="32x32" href={fav32} />
          <link rel="icon" type="image/png" sizes="96x96" href={fav96} />
          <link rel="icon" type="image/png" sizes="16x16" href={fav16} />
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}

          
	          <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
	          <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
        </body>
      </html>
    )
  }
}
