import Cart from "./cart";

export const metadata = {
  title: "Shopping Cart | Bossdent Global",
  description: "Review your selected dental equipment before checkout.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function Page() {
  return <Cart />;
}
