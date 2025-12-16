export interface TreeNode {
  id: string;
  label: string;
  children?: TreeNode[];
  isExpanded?: boolean;
}

export const STORAGE_KEY = "tree-data";
export const initialData: TreeNode[] = [
  {
    id: "1",
    label: "Documents",
    isExpanded: true,
    children: [
      {
        id: "2",
        label: "Work",
        isExpanded: true,
        children: [
          {
            id: "3",
            label: "Projects",
            children: [],
          },
          {
            id: "4",
            label: "Reports",
          },
        ],
      },
      {
        id: "5",
        label: "Personal",
        children: [],
      },
    ],
  },
  {
    id: "6",
    label: "Downloads",
    isExpanded: true,
    children: [
      {
        id: "7",
        label: "Software",
      },
      {
        id: "8",
        label: "Media",
      },
    ],
  },
  {
    id: "9",
    label: "Desktop",
  },
];