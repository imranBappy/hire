import { createStore } from "zustand/vanilla";
const myTodos = [
  {
    id: 1,
    title: "Unsupported metadata viewport, This problem is big problem (1)",
    user: {
      name: "Hira",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    status: "todo",
  },
  {
    id: 2,
    title: "Unsupported metadata viewport, This problem is big problem",
    user: {
      name: "Hira",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    status: "progress",
  },
  {
    id: 3,
    title: "Unsupported metadata viewport, This problem is big problem",
    user: {
      name: "Hira",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    status: "progress",
  },
  {
    id: 4,
    title: "Unsupported metadata viewport, This problem is big problem",
    user: {
      name: "Hira",
      avatar: "https://i.pravatar.cc/150?img=4",
    },
    status: "done",
  },
];
export const defaultInitState = {
  isLoggedIn: false,
  items: myTodos,
  dragContainerName: "",
  currentDragItem: null,
};

export const createCounterStore = (initState = defaultInitState) => {
  return createStore()((set) => ({
    ...initState,
    setItems: (items) => set({ items }),
    loginIn: () => set({ isLoggedIn: true }),
    loginOut: () => set({ isLoggedIn: false }),
    onDragOver: (e) => {
      e.preventDefault();
      const name = e.target.getAttribute("data-name");
      set({ dragContainerName: name });
    },
    onEndDrag: (e) => {
      set((state) => {
        const updatedItems = state.items.map((item) => {
          if (item.id === state.currentDragItem) {
            const newItem = {
              ...item,
              status: state.dragContainerName,
            };
            return newItem;
          }
          return item;
        });
        return { items: updatedItems };
      });
    },
    setCurrentDragItem: (currentDragItem) => set({ currentDragItem }),
    onItemDragStart: (e) => {
      const id = e.target.getAttribute("data-id");
      if (id) {
        set({ currentDragItem: Number(id) });
      }
    },
    onItemDragEnd: (e) => {
      set({ currentDragItem: null });
    },
  }));
};
