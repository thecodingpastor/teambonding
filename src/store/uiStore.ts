import { create } from "zustand";

type sidebarModeType = "nav" | "cart" | null;

export type UIState = {
  sidebarMode: sidebarModeType;
  routeLoading: boolean;
  modalIsOpen: string;
  sidebarIsOpen: boolean;
};

export type UIActions = {
  setSidebarMode: (mode: sidebarModeType) => void;
  setOpenModal: (mode: string) => void;
  setRouteLoading: (routeLoading: boolean) => void;
  setSidebarIsOpen: (mode: boolean) => void;
};

export type UIStore = UIState & UIActions;

export const defaultInitState: UIState = {
  sidebarMode: null,
  routeLoading: false,
  sidebarIsOpen: false,
  modalIsOpen: "",
};

const useUIStore = create<UIStore>((set) => ({
  ...defaultInitState,
  setOpenModal(mode) {
    set({ modalIsOpen: mode });
  },
  sidebarIsOpen: false,
  setSidebarIsOpen(mode: boolean) {
    set({ sidebarIsOpen: mode });
  },
  setSidebarMode(mode) {
    set({ sidebarMode: mode });
  },
  setRouteLoading(routeLoading) {
    set({ routeLoading });
  },
}));

export default useUIStore;
