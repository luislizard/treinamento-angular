export interface Post{
    id: string;
    title: string;
    post: string;
    category: string;
    likes: number;
    autor?: string;
    tags?: string[];
    created: string;
  }
