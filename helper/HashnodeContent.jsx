import React from 'react';
import { remark } from 'remark';
import remark2rehype from 'remark-rehype';
import raw from 'rehype-raw';
import rehypeReact from 'rehype-react';

export default function HashnodeContent({ content }) {
  const processedContent = remark()
    .use(remark2rehype, { allowDangerousHTML: true })
    .use(raw)
    .use(rehypeReact, { createElement: React.createElement })
    .processSync(content).result;

  return <div className='content'>{processedContent}</div>;
}