import { create } from "zustand";

export type UIState = {
  sidebarIsOpen: boolean;
  routeLoading: boolean;
};

export type UIActions = {
  setSidebarIsOpen: (mode: boolean) => void;
  setRouteLoading: (routeLoading: boolean) => void;
};

export type UIStore = UIState & UIActions;

export const defaultInitState: UIState = {
  sidebarIsOpen: false,
  routeLoading: false,
};

const useUIStore = create<UIStore>((set) => ({
  sidebarIsOpen: false,
  setSidebarIsOpen(mode: boolean) {
    set({ sidebarIsOpen: mode });
  },
  routeLoading: false,
  setRouteLoading(routeLoading: boolean) {
    set({ routeLoading });
  },
}));

export default useUIStore;
