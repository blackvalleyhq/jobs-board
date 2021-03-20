import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

const PageContainer = styled.div`
  text-align: center;
  margin: 10rem auto;
`;
const NotFound = () => {
  return (
    <>
      <Head>
        <title>Black Valley | 404</title>
      </Head>
      <PageContainer>
        <h1>Ooops...</h1>
        <h2>Page Not Found!</h2>
        <p>
          Go back to the{" "}
          <Link href="/">
            <a>Homepage</a>
          </Link>
        </p>
      </PageContainer>
    </>
  );
};

export default NotFound;
