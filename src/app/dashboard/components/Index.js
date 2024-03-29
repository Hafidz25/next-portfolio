import DashedDivider from "@/app/commons/components/elements/DashedDivider";
import { Divider } from "@nextui-org/react";
import GithubHeader from "./GithubHeader";
import Header from "./Header";
import Stats from "./Stats/Stats";
import Spotify from "./Spotify";

export default function Index({ githubData }) {
  return (
    <div className="h-full">
      <Header />
      <DashedDivider className={"my-6"} />
      <Stats />
      <Divider className="my-6" />
      <GithubHeader />
      <Divider className="my-6" />
      {/* <Spotify /> */}
    </div>
  );
}
