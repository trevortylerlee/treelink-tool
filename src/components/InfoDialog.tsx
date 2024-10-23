import { type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type DialogProps = {
  children: ReactNode;
};

export default function DialogDemo(props: DialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild className="float-end flex">
        <Button variant="outline" className="size-10 rounded-full p-0">
          {props.children}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>About</DialogTitle>
          <DialogDescription>
            Treelink is a free, open source alternative to Linktree. Create a
            site using our online tool and deploy to the Internet in minutes.
          </DialogDescription>
          <DialogDescription>
            <a
              href="https://example.treelink.app"
              className="text-blue-500 underline"
            >
              Live example
            </a>
          </DialogDescription>
          <DialogDescription>
            <a
              href="https://docs.treelink.app"
              className="text-blue-500 underline"
            >
              Documentation
            </a>
          </DialogDescription>
        </DialogHeader>
        {/* <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}
