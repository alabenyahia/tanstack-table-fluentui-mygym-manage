import {
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
  DrawerInline,
} from "@fluentui/react-components/unstable";

export default function AppDrawer() {
  return (
    <div style={{ height: "100%" }}>
      <DrawerInline
        open
        style={{ width: "100%", height: "100%", backgroundColor: "blue" }}
      >
        <DrawerHeader>
          <DrawerHeaderTitle>Always open</DrawerHeaderTitle>
        </DrawerHeader>

        <DrawerBody style={{backgroundColor: "green"}}>
          <p>Drawer content</p>
        </DrawerBody>
      </DrawerInline>
    </div>
  );
}
