interface pokemon {
  id: number;
  name: string;
  slug: string;
  price: number;
  image: string;
};

export const useCart = () => useState<pokemon[]>("cart", () => []);