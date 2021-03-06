import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BorderBox, Avatar } from "@primer/components";
import axios from "axios";

const Article = styled.article`
  margin: 48px auto;
  width: 100vw;
  @media screen and (min-width: 1025px) {
    width: 45vw;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Markdown = styled.div`
  margin: 24px;
  @media screen and (min-width: 1025px) {
    margin: 64px;
  }
`;

export interface ReportProps {
  avatar: string;
  text: string;
}

const Report: React.FC<ReportProps> = ({ avatar, text }) => {
  const renderMarkdown = async (text: string) => {
    const response = await axios.post("/markdown", {
      text
    });

    const result = await response.data;
    return result;
  };

  const [rendered, setRendered] = useState("");

  useEffect(() => {
    (async () => {
      const result = await renderMarkdown(text);
      setRendered(result);
    })();
  }, [text]);

  return (
    <Article>
      <Avatar src={avatar} size={64} mb="4" />
      <BorderBox width="100%">
        <Markdown
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: rendered }}
        ></Markdown>
      </BorderBox>
    </Article>
  );
};

export default Report;
