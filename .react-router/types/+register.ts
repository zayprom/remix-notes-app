import "react-router";

declare module "react-router" {
  interface Register {
    params: Params;
  }
}

type Params = {
  "/": {};
  "/notes/:id/edit": {
    "id": string;
  };
  "/notes/:id": {
    "id": string;
  };
};