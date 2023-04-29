import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

export const config = defineConfig({
  projectId: "p56hod3s",
  dataset: "production",
  title: "My Personal Website",
  apiVersion: "2023-29-04",
  basePath: "/admin",
  plugins: [deskTool()],
});
