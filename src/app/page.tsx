"use client";
import AddChildNodeModal from "@/components/TreeNodeManagement/AddChildNodeModal";
import { EmptyTreeState } from "@/components/TreeNodeManagement/EmptyTreeState";
import { Button } from "@/components/ui/button";
import {
  STORAGE_KEY,
  TreeNode as TreeNodeType,
} from "@/types/treeNode.interface";
import { FolderTree, Plus } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const [treeData, setTreeData] = useState<TreeNodeType[]>([]);
  const [showAddRootModal, setShowAddRootModal] = useState(false);
  const isEmpty = treeData.length === 0;
  // Get save TreeData from localStorage whenever it changes
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setTreeData(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse saved treeData:", e);
      }
    }
  }, []);

  // Save treeData to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(treeData));
    } catch (e) {
      console.error("Failed to save tree data:", e);
    }
  }, [treeData]);

  const handleAddRoot = (label: string) => {
    const newNode: TreeNodeType = {
      id: Date.now().toString(),
      label,
    };
    console.log("hadle root inside", newNode);
    setTreeData([...treeData, newNode]);
    // Show toast
    toast.success("Node added successfully!");
  };
  console.log("tree data", treeData);
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="md:w-7xl mx-auto">
        <header className="border-b border-gray-800 px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex gap-2">
            <FolderTree />
            <h1>Multi Tree Component</h1>
          </Link>
        </header>
        <main className="px-6 py-8">
          <h1 className="text-3xl font-bold mb-2">Multi-Level Tree View</h1>
          <p className="text-gray-400 mb-8">
            A recursive tree component with unlimited nested levels. Exapand,
            collapse, add children, and deleted nodes.
          </p>
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-lg font-semibold">Tree Structure</h1>
              {!isEmpty && (
                <Button
                  variant="destructive"
                  onClick={() => setShowAddRootModal(true)}
                >
                  <Plus className="w-4 h-4" />
                  Add Root Node
                </Button>
              )}
            </div>
            <hr className="mb-3" />
            <div className="space-y-1">
              {isEmpty ? (
                <EmptyTreeState
                  onAddRoot={() => setShowAddRootModal(true)}
                ></EmptyTreeState>
              ) : (
                <>
                  {treeData.map((item) => (
                    <h1 key={item.id}>{item.label}</h1>
                  ))}
                </>
              )}
            </div>
          </div>
        </main>
        {showAddRootModal && (
          <AddChildNodeModal
            onClose={() => setShowAddRootModal(false)}
            onAdd={(label) => {
              handleAddRoot(label);
              setShowAddRootModal(false);
            }}
          />
        )}
      </div>
    </div>
  );
}
