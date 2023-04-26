import Home from "../pages/index";

import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Charts", () => {
	it("renders line chart", () => {
		render(<Home />);
		// check if line chart is rendered
		expect(screen.getByTitle("LineChart")).toBeInTheDocument();
	});

	it("renders donut chart", () => {
		render(<Home />);
		// check if donut chart is rendered
		expect(screen.getByTestId("DonutChart")).toBeInTheDocument();
	});
});