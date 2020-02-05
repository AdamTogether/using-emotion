/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';

const themeStyles = css`
  color: indigo;
`;

function ArticleText(props) {
  const styles = css`
    ${themeStyles};
    background-color: lemonchiffon;
    border: 1px solid dimgray;
    font-size: 18px;
    font-variant: small-caps;
  `;
  return <p css={styles} {...props}>{props.children}</p>;
}

function FootnoteText(props) {
  const styles = css`
    font-size: 12px;
    color: gray;
  `;
  return <ArticleText css={styles}>{props.children}</ArticleText>;
}

function Button(props) {
  const styles = css`
    color: ${props.secondary ? 'royalblue' : 'snow'};
    background-color: ${props.secondary ? 'whitesmoke' : 'royalblue'};
    border: 2px solid royalblue;
    padding: 10px;
    margin: 5px;
    cursor: pointer;
    &:hover {
      background-color: ${props.secondary ? 'gainsboro' : 'dodgerblue'};
    }
    h1 & {

    }
  `;
  return <button css={styles}>{props.children}</button>;
}

function PhotoCard(props) {
  const styles = css`
    display: inline-block;
    border: 1px solid darkgray;
    padding: 5px;
    img {
      max-width: 100px;
    }
    p {
      text-align: center;
    }
  `;
  return (
    <div css={styles}>
      <img src={props.url} alt={props.caption} />
      <p>{props.caption}</p>
    </div>
  );
}

function App() {
  const color = 'mediumvioletred';
  const divStyles = {
    backgroundColor: 'floralwhite',
    border: '1px solid firebrick'
  };
  const headerStyles = css`
    background-color: lavenderblush;
    color: ${color};
    margin: 0;
    padding: 10px;
  `;
  const baseStyles = css`
    padding: 5px;
    border: 1px solid midnightblue;
    background-color: ghostwhite;
    color: midnightblue;
  `;
  const warningStyles = css`
    border-color: orangered;
    color: orangered;
    background-color: papayawhip;
  `;
  return (
    <div css={divStyles}>
      <h1 css={headerStyles}>What a boring app...</h1>
      <Button>Primary button</Button>
      <Button secondary>Secondary button</Button>
      <PhotoCard url="http://placekitten.com/480/480" caption="Kitty" />

      <ArticleText>This is article text.</ArticleText>
      <FootnoteText>This is footnote text.</FootnoteText>

      <div css={baseStyles}>Base</div>
      <div css={[baseStyles, warningStyles]}>Warning</div>
      <div css={[warningStyles, baseStyles]}>Not a warning</div>
    </div>
  );
}

export default App;
