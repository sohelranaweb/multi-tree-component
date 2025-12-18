import { TreeNode } from "@/types/treeNode.interface";
// Toggle Node Function
export const toggleNode = (nodes: TreeNode[], id: string): TreeNode[] => {
  return nodes.map((node) => {
    if (node.id === id) {
      return { ...node, isExpanded: !node.isExpanded };
    }
    if (node.children) {
      return { ...node, children: toggleNode(node.children, id) };
    }
    return node;
  });
};

// Add child node function
export const addChildToNode = (
  nodes: TreeNode[],
  parentId: string,
  newNode: TreeNode
): TreeNode[] => {
  return nodes.map((node) => {
    if (node.id === parentId) {
      const currentChildren = node.children || [];
      return {
        ...node,
        children: [...currentChildren, newNode],
        isExpanded: true,
      };
    }
    if (node.children) {
      return {
        ...node,
        children: addChildToNode(node.children, parentId, newNode),
      };
    }
    return node;
  });
};

// delete Node Function
export const deleteNodeById = (nodes: TreeNode[], id: string): TreeNode[] => {
  return nodes
    .filter((node) => node.id !== id)
    .map((node) => {
      if (node.children) {
        return { ...node, children: deleteNodeById(node.children, id) };
      }
      return node;
    });
};
