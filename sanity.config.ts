import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

export const config = defineConfig({
  projectId: "p56hod3s",
  dataset: "production",
  title: "My Personal Website",
  apiVersion: "2023-29-04",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});
