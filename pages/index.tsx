import { getLayout } from "components/Layout/Layout";
import { PageWrapper } from "components/PageWrapper/PageWrapper";
import Image from "next/image";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => (
  <PageWrapper>
    <Image
      src="/next.svg"
      alt="Next.js Logo"
      width={180}
      height={37}
      priority
    />
  </PageWrapper>
);

Home.getLayout = getLayout;
export default Home;
