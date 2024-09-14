import BottomHero from "@/components/BottomHero";
import Informational from "@/components/Informational";
import MiddleHero from "@/components/MiddleHero";
import Stories from "@/components/Stories";
import TopHero from "@/components/TopHero"

export default function Home() {
	return (
		<>
			<TopHero />
			<Informational />
			<MiddleHero />
			<Stories />
			<BottomHero />
		</>
	);
}
