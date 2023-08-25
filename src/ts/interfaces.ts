interface CollectionProps {
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  header: string;
}

interface CollectionData {
  id: number;
  category: number;
  name: string;
  photos: string[];
}

interface CategoriesData {
  name: string;
}

interface HeaderProps {
  categories: CategoriesData[];
}

export type { CollectionProps, CollectionData, CategoriesData, HeaderProps };
