import { FolderTree, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmptyTreeStateProps {
  onAddRoot: () => void;
}

export function EmptyTreeState({ onAddRoot }: EmptyTreeStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-6">
        <FolderTree className="w-8 h-8 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-semibold mb-2" data-testid="text-empty-title">
        No nodes yet
      </h3>
      <p className="text-sm text-muted-foreground mb-6 max-w-xs">
        Get started by adding your first node to the tree structure.
      </p>
      <Button
        className="cursor-pointer"
        variant="secondary"
        onClick={onAddRoot}
        data-testid="button-add-first-node"
      >
        <Plus className="w-4 h-4 mr-2" />
        Add First Node
      </Button>
    </div>
  );
}
