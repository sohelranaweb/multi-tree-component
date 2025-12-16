"use client";
import { TreeNode as TreeNodeType } from "@/types/treeNode.interface";
import {
  ChevronDown,
  ChevronRight,
  File,
  Folder,
  MoreVertical,
  Plus,
  Trash2,
} from "lucide-react";
import { useState } from "react";
import AddChildNodeModal from "./AddChildNodeModal";
import DeleteNodeModal from "./DeleteNodeModal";

interface TreeNodeProps {
  node: TreeNodeType;
  onToggle: (id: string) => void;
  onAddChild: (parentId: string, label: string) => void;
  onDelete: (id: string) => void;
  level?: number;
}
function TreeNodeContainer({
  node,
  onAddChild,
  onToggle,
  onDelete,
  level = 0,
}: TreeNodeProps) {
  const [showMenu, setShowMenu] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const isFolder = (node.children?.length ?? 0) > 0;
  return (
    <>
      <div className="relative">
        <div
          className="flex items-center gap-2 py-2 px-3 hover:bg-gray-700 rounded group"
          style={{ paddingLeft: `${level * 24 + 12}px` }}
        >
          {isFolder && (
            <button
              onClick={() => onToggle(node.id)}
              className="p-0 hover:bg-gray-600 rounded"
            >
              {node.isExpanded ? (
                <ChevronDown className="w-4 h-4 text-gray-400" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-400" />
              )}
            </button>
          )}
          {!isFolder && <span className="w-4" />}
          {isFolder ? (
            <Folder className="w-5 h-5 text-blue-400" />
          ) : (
            <File className="w-5 h-5 text-gray-400" />
          )}
          <span className="text-gray-200 flex-1">{node.label}</span>
          <div className="relative">
            <button onClick={() => setShowMenu(!showMenu)}>
              <MoreVertical className="w-4 h-4 text-gray-400" />
            </button>
            {showMenu && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setShowMenu(false)}
                />
                <div className="absolute right-0 mt-1 w-40 bg-gray-800 border border-gray-700 rounded shadow-lg z-20">
                  <button
                    onClick={() => {
                      setShowMenu(false);
                      setShowAddModal(true);
                    }}
                    className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-200 hover:bg-gray-700"
                  >
                    <Plus className="w-4 h-4" />
                    Add Child
                  </button>
                  <button
                    onClick={() => {
                      setShowMenu(false);
                      setShowDeleteModal(true);
                    }}
                    className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-400 hover:bg-gray-700"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
        {node.isExpanded && isFolder && (
          <div>
            {node.children!.map((child) => (
              <TreeNodeContainer
                key={child.id}
                node={child}
                onToggle={onToggle}
                onAddChild={onAddChild}
                onDelete={onDelete}
                level={level + 1}
              ></TreeNodeContainer>
            ))}
          </div>
        )}
      </div>
      {showAddModal && (
        <AddChildNodeModal
          onClose={() => setShowAddModal(false)}
          onAdd={(label) => onAddChild(node.id, label)}
        />
      )}
      {showDeleteModal && (
        <DeleteNodeModal
          onClose={() => setShowAddModal(false)}
          onConfirm={() => {
            onDelete(node.id);
            setShowAddModal(false);
          }}
          nodeName={node.label}
        ></DeleteNodeModal>
      )}
    </>
  );
}

export default TreeNodeContainer;
