import "./App.css";
import { useState } from "react";
import AppBreadcrumb from "./AppBreadcrumb";
import AppDrawer from "./AppDrawer";
import AppSidebar from "./AppSidebar";
import AppTable from "./AppTable";
import { Add24Regular, Filter24Regular } from "@fluentui/react-icons";
import { Button, Card } from "@fluentui/react-components";
import AppSeach from "./AppSeach";

/// DONT USE ALL OF THESE COMPONENTS IN THE APP FILE
/// USE THEM IN A MANAGE LAYOUT OR SOMETHING LIKE THAT
function App() {
  const [searching, setSearching] = useState("");

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        width: "100%",
        backgroundColor: "yellow",
      }}
    >
      <AppSidebar />
      <AppDrawer />
      <Card style={{ flex: 1 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexGrow: 0
          }}
        >
          <AppBreadcrumb items={["Manage", "Members"]} />
          <Button appearance="primary" icon={<Add24Regular />} size="medium">
            New member
          </Button>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexGrow: 0
          }}
        >
          <AppSeach value={searching} setValue={setSearching} />
          <Button
            appearance="primary"
            icon={<Filter24Regular />}
            size="medium"
          ></Button>
        </div>

        <div style={{ overflow: "auto", flexGrow: 0 }}>
          <AppTable searching={searching} setSearching={setSearching} />
        </div>
      </Card>
    </div>
  );
}

export default App;
