import React, { useState, useEffect, useMemo, useRef } from "react";
import styled from "styled-components";
import {
  BaseStyles,
  TextInput,
  ButtonPrimary,
  Flash,
  Box,
  StyledOcticon,
  Button
} from "@primer/components";
import { ApolloProvider, useLazyQuery } from "@apollo/react-hooks";
import client from "./api";
import { QUERY_ALL } from "./graphql";
import { All, AllVariables } from "./types";
import Report from "./components/Report";
import { Info, getInfo } from "./data";
import { generateReport } from "./templates/en";
import { Trashcan } from "@primer/octicons-react";

const BigHeading = styled.h1`
  color: white;
`;

const FlexDiv = styled.div`
  display: flex;
  flex-direction: row;
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
  const [token, setToken] = useState(localStorage.getItem("token") ?? "");

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

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
    } else {
      window.open(
        "https://github.com/settings/tokens/new?description=GitHub%20Annual%20Report%20Generator&scopes=repo",
        "_blank"
      );
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
        }, 1500);
      })();
    }
  }, [data, error, loading]);

  const md = useMemo(() => (info ? generateReport(2019, info) : ""), [info]);

  const handleRemove = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  return (
    <BaseStyles>
      <Box bg="#24292e" py={3} px={6}>
        <BigHeading>GitHub Annual Report Generator</BigHeading>
      </Box>
      <CenterDiv>
        <FlexDiv>
          <TextInput
            block
            variant="large"
            placeholder="GitHub Personal Access Token"
            value={token}
            onChange={e => setToken(e.target.value)}
          />
          <Button ml="2" onClick={handleRemove}>
            <StyledOcticon icon={Trashcan} size={28} color="red.5" />
          </Button>
        </FlexDiv>
        <ButtonPrimary
          variant="large"
          disabled={
            (token ? true : false) && (loading || (data ? true : false))
          }
          onClick={handleGenerate}
        >
          {token
            ? "Generate GitHub Annual Report"
            : "Get Personal Access Token"}
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
