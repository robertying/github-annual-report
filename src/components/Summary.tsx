import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BorderBox, Avatar } from "@primer/components";
import axios from "axios";

const Article = styled.article`
  margin: 48px auto;
  width: 45vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export interface SummaryProps {
  avatar: string;
  text: string;
}

const Summary: React.FC<SummaryProps> = ({ avatar, text }) => {
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
      <BorderBox width="100%" p="8">
        <div
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: rendered }}
        ></div>
      </BorderBox>
    </Article>
  );
};

export default Summary;
