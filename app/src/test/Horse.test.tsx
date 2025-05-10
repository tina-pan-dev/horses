import { render, screen, fireEvent } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { describe, test, expect, vi, beforeEach } from "vitest";
import App, { Horse } from "../App";

const mockProfile = {
  favouriteFood: "Hot Chips",
  physical: {
    height: 200,
    weight: 450,
  },
};

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

const renderWithQueryClient = (ui: React.ReactNode) => {
  const client = createTestQueryClient();
  return render(
    <QueryClientProvider client={client}>{ui}</QueryClientProvider>
  );
};

vi.mock("../hooks/useHorses", () => ({
  useHorses: () => ({
    data: [
      {
        id: "1",
        name: "TestHorse",
        profile: {
          favouriteFood: "Oats",
          physical: { height: 150, weight: 400 },
        },
      },
    ],
    isLoading: false,
    isError: false,
  }),
}));

describe("<App /> buttons", () => {
  beforeEach(() => {
    vi.spyOn(window, "alert").mockImplementation(() => {});
  });

  test("Add Horse button triggers alert", () => {
    renderWithQueryClient(<App />);
    const addButton = screen.getByRole("button", { name: /add horse/i });
    fireEvent.click(addButton);
    expect(window.alert).toHaveBeenCalledWith("To do");
  });

  test("Prev button triggers alert", () => {
    renderWithQueryClient(<App />);
    const prevButton = screen.getByRole("button", { name: /prev/i });
    fireEvent.click(prevButton);
    expect(window.alert).toHaveBeenCalledWith("To do");
  });

  test("Next button triggers alert", () => {
    renderWithQueryClient(<App />);
    const nextButton = screen.getByRole("button", { name: /next/i });
    fireEvent.click(nextButton);
    expect(window.alert).toHaveBeenCalledWith("To do");
  });
});

describe("<Horse />", () => {
  test("renders horse name", () => {
    render(<Horse name="Thunderdash" profile={mockProfile} />);
    expect(screen.getByText("Thunderdash")).toBeInTheDocument();
  });

  test("reveals horse details on click", () => {
    render(<Horse name="Thunderdash" profile={mockProfile} />);

    expect(screen.queryByText(/Favourite food/)).not.toBeInTheDocument();

    fireEvent.click(screen.getByText("Thunderdash"));

    expect(screen.getByText(/Favourite food: Hot Chips/)).toBeInTheDocument();
    expect(screen.getByText(/Height: 200 cm/)).toBeInTheDocument();
    expect(screen.getByText(/Weight: 450 kg/)).toBeInTheDocument();
  });
});
