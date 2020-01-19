import React, { useState, useEffect, useMemo, useRef } from "react";
import styled from "styled-components";
import {
  BaseStyles,
  TextInput,
  ButtonPrimary,
  Flash,
  Box
} from "@primer/components";
import { ApolloProvider, useLazyQuery } from "@apollo/react-hooks";
import client from "./api";
import { QUERY_ALL } from "./graphql";
import { All, AllVariables } from "./types";
import Report from "./components/Report";
import { Info, getInfo } from "./data";
import { generateReport } from "./templates/en";

const BigHeading = styled.h1`
  color: white;
`;

const CenterDiv = styled.div`
  margin: auto;
  margin-top: 35vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 30vw;
  & > * {
    margin: 6px;
  }
`;

const App: React.FC = () => {
  const [token, setToken] = useState("");

  const [queryAll, { loading, data, error }] = useLazyQuery<All, AllVariables>(
    QUERY_ALL
  );

  const handleGenerate = () => {
    if (token) {
      queryAll({
        variables: {
          from: new Date("2019-01-01").toISOString(),
          to: new Date("2020-01-01").toISOString()
        }
      });
    }
  };

  const [message, setMessage] = useState({ text: "", scheme: "" });

  useEffect(() => {
    if (loading) {
      setMessage({
        text: "Brewing your annual report...",
        scheme: "base"
      });
    }
  }, [loading]);

  useEffect(() => {
    if (error) {
      setMessage({
        text: error.message,
        scheme: "red"
      });
    }
  }, [error]);

  const [info, setInfo] = useState<Info>();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!loading && !error && data) {
      (async () => {
        setInfo(await getInfo(data.viewer));

        setMessage({
          text: "Your annual report is ready!",
          scheme: "green"
        });

        setTimeout(() => {
          scrollRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 1000);
      })();
    }
  }, [data, error, loading]);

  const md = useMemo(() => (info ? generateReport(2019, info) : ""), [info]);

  return (
    <BaseStyles>
      <Box bg="#24292e" py={3} px={6}>
        <BigHeading>GitHub Annual Report Generator</BigHeading>
      </Box>
      <CenterDiv>
        {token && (
          <TextInput
            variant="large"
            placeholder="GitHub Access Token"
            defaultValue={token}
          />
        )}
        <ButtonPrimary
          variant="large"
          disabled={loading || (data ? true : false)}
          onClick={handleGenerate}
        >
          Generate GitHub Annual Report
        </ButtonPrimary>
        {message.text && <Flash scheme={message.scheme}>{message.text}</Flash>}
      </CenterDiv>
      <div ref={scrollRef} />
      {info && <Report avatar={info.avatarUrl} text={md} />}
    </BaseStyles>
  );
};

export default () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
