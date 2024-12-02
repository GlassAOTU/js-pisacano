"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// biome-ignore lint/style/useImportType: <explanation>
import { IStaticMethods } from "preline/preline";
declare global {
	interface Window {
		HSStaticMethods: IStaticMethods;
	}
}

export default function PrelineScript() {
	const path = usePathname();

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const loadPreline = async () => {
			await import("preline/preline");

			window.HSStaticMethods.autoInit();
		};

		loadPreline();
	}, [path]);

	return null;
}
