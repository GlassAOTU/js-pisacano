import BottomHero from "@/app/components/BottomHero";
import Informational from "@/app/components/Informational";
import MiddleHero from "@/app/components/MiddleHero";
import Stories from "@/app/components/Stories";
import TopHero from "@/app/components/TopHero"

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
