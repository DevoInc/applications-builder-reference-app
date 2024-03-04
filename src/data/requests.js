import { addRequests } from "./requestsReal";
import { addRequests as addRequestsMocked } from "./requestsMocked";

const mocked = false;

if(mocked) {
  addRequestsMocked();
} else {
  addRequests();
}