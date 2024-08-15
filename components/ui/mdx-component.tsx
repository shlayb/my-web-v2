import Image from 'next/image';
import * as runtime from 'react/jsx-runtime';
const useMDXComponents = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  Image,
};

interface MdxProps {
  content: string;
}

export function MdComponent({ content }: MdxProps) {
  const Component = useMDXComponents(content);
  return <Component components={components} />;
}

// 'use client';
// import Image from 'next/image';
// import * as runtime from 'react/jsx-runtime';
// import React from 'react';
// import ReactMarkdown from 'react-markdown';
// import remarkMath from 'remark-math';
// import rehypeKatex from 'rehype-katex';
// import 'katex/dist/katex.min.css'; // Import KaTeX CSS for styling
// import remarkGfm from 'remark-gfm';
// import rehypeRaw from 'rehype-raw';
// import { useEffect, useState } from 'react';
// import markdownToHtml from '@/lib/mdtohtml';

// interface MdComponentProps {
//   content: string;
//   markdown: string;
// }

// const components = {
//   Image,
// };

// export function MdComponent({ content }: MdComponentProps) {
//   const [htmlContent, setHtmlContent] = useState('');

//   useEffect(() => {
//     async function renderMarkdown() {
//       const html = await markdownToHtml(content);
//       setHtmlContent(html);
//     }

//     renderMarkdown();
//   }, [content]);

//   return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
// }

// // export function MdComponent({ content }: MdComponentProps) {
// //   return (
// //     <div className="markdown-body w-full">
// //       <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex, rehypeRaw]}>
// //         {content}
// //       </ReactMarkdown>
// //     </div>
// //   );
// // }
