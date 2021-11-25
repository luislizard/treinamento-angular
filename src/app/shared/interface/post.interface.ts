export interface Post{
    id: string;
    title: string;
    category: string;
    likes: number;
    autor?: string;
    tags?: string[];
    created: string;
  }