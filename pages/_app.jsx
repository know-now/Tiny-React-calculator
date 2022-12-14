function MyApp({ Component, pageProps }) {
    return (
      <>
        <Component {...pageProps} />
        {/* Reset.css */}
        <style jsx global>{`
          html,
          body,
          div,
          span,
          applet,
          object,
          iframe,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          p,
          blockquote,
          pre,
          a,
          abbr,
          acronym,
          address,
          big,
          cite,
          code,
          del,
          dfn,
          em,
          img,
          ins,
          kbd,
          q,
          s,
          samp,
          small,
          strike,
          strong,
          sub,
          sup,
          tt,
          var,
          b,
          u,
          i,
          center,
          dl,
          dt,
          dd,
          ol,
          ul,
          li,
          fieldset,
          form,
          label,
          legend,
          table,
          caption,
          tbody,
          tfoot,
          thead,
          tr,
          th,
          td,
          article,
          aside,
          canvas,
          details,
          embed,
          figure,
          figcaption,
          footer,
          header,
          hgroup,
          menu,
          nav,
          output,
          ruby,
          section,
          summary,
          time,
          mark,
          audio,
          video {
            margin: 0;
            padding: 0;
            border: 0;
            font-size: 100%;
            font: inherit;
            vertical-align: baseline;
          }
          /* HTML5 display-role reset for older browsers */
          article,
          aside,
          details,
          figcaption,
          figure,
          footer,
          header,
          hgroup,
          menu,
          nav,
          section {
            display: block;
          }
          body {
            line-height: 1;
            background-image: url(3098986.jpg);
            background-size: cover;
            repeat: no-repeat;


            
          }
          ol,
          ul {
            list-style: none;
          }
          blockquote,
          q {
            quotes: none;
          }
          blockquote:before,
          blockquote:after,
          q:before,
          q:after {
            content: "";
            content: none;
          }
          table {
            border-collapse: collapse;
            border-spacing: 0;
          }
        `}</style>
        <style jsx global>{`
          h2 {
            font-size: 24px;
            font-weight: 600;
          }
          .calculator-grid > button {
          cursor: pointer;
          font-size: 2rem;
          border: 1px solid #ccc;
          outline: none;
          background-color: rgba(255, 255, 255, 0.7);
          border-radius: 8%;
        }
        .span-two {
          grid-column: span 2;
        }

        .calculator-grid > button:hover,
        .calculator-grid > button:focus {
          background-color: rgba(255, 255, 255, 0.9);
        }


        `}</style>
      </>
    );
  }
  
  export default MyApp;
  