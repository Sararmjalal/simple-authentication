import HomeRoot from "@/components/home";
import homeData from "@/apis/statics/home.json";

export default function Home() {
  console.log({ homeData })
  return (
    <HomeRoot {...homeData} />
  );
}
