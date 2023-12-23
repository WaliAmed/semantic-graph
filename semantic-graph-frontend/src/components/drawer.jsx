import DrawerButton from "../atoms/drawer.button";
import Accordion from "../atoms/accordian";
import { useGraphContext } from "../context/graph.provider";

// Forums
import AddNodeForum from "../forum/addNode.forum";
import AddLinkForum from "../forum/addLink.forum";
import GraphDataBlock from "./graphDataBlock";
import DeleteNodeForum from "../forum/deleteNode.forum";
import RemoveLinkForum from "../forum/removeLink.forum";

const Drawer = () => {
  const { setOpenDrawer, openDrawer, guest } = useGraphContext();

  let ForumData = [];

  if (!guest) {
    ForumData = [
      ...ForumData,
      { title: "Add Node", Component: () => <AddNodeForum /> },
      { title: "Add Link", Component: () => <AddLinkForum /> },
      { title: "Delete Node", Component: () => <DeleteNodeForum /> },
      { title: "Remove Link", Component: () => <RemoveLinkForum /> },
    ];
  }

  ForumData = [
    ...ForumData,
    { title: "Graph Data", Component: () => <GraphDataBlock /> },
  ];

  return (
    <div>
      <div
        className={`fixed shadow-md bg-slate-100 p-5 transition-all 
          ${openDrawer ? "min-h-screen opacity-100 w-80" : "h-0 opacity-0 w-0"}
        `}
      >
        <div className="h-screen overflow-y-auto pb-10">
          {guest && (
            <p className="text-xs text-center text-red-500 mb-5">
              You are logged in as a guest!
            </p>
          )}

          {ForumData.map((items) => (
            <Accordion key={items.title} {...items} />
          ))}
        </div>

        <div className="absolute top-2 right-[-20px]">
          <DrawerButton setOpenDrawer={setOpenDrawer} />
        </div>
      </div>

      {!openDrawer && (
        <DrawerButton
          setOpenDrawer={setOpenDrawer}
          customClass={"block w-fit p-2 top-3 left-3 absolute"}
        />
      )}
    </div>
  );
};

export default Drawer;
